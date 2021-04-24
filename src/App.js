import React, { useState ,useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import EmployeeTables from './components/EmployeeTables'
import Employee from './components/Employee';
import API from './utils/API';

function App() {

  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState("");
  const [firstNameClicked, setFirstClicked] = useState();
  const [lastNameClicked, setLastClicked] = useState();

  const sortByFirstNameAsc = event => {
    event.preventDefault();

    let sortedEmployees = [...employees].sort((a, b)=> {
      let fa = a.name.first;
      let fb = b.name.first;

      if (fa < fb){
        return -1;
      }
      if (fa > fb){
        return 1;
      }
      return 0;
    })
    setEmployees(sortedEmployees);
    setFirstClicked(true);
    console.log(firstNameClicked)
  }

  const sortByFirstNameDesc = event => {
    event.preventDefault();

    let sortedEmployees = [...employees].sort((a, b)=> {
      let fa = a.name.first;
      let fb = b.name.first;

      if (fa > fb){
        return -1;
      }
      if (fa < fb){
        return 1;
      }
      return 0;
    })
    setEmployees(sortedEmployees);
    setFirstClicked(false);
    console.log(firstNameClicked);
  }

  const sortByLastNameAsc = event => {
    event.preventDefault();

    let sortedEmployees = [...employees].sort((a, b)=> {
      let la = a.name.last;
      let lb = b.name.last;

      if (la < lb){
        return -1;
      }
      if (la > lb){
        return 1;
      }
      return 0;
    })
    setEmployees(sortedEmployees);
    setLastClicked(true);
    console.log(lastNameClicked);
  }

  const sortByLastNameDesc = event => {
    event.preventDefault();

    let sortedEmployees = [...employees].sort((a, b)=> {
      let la = a.name.last;
      let lb = b.name.last;

      if (la > lb){
        return -1;
      }
      if (la < lb){
        return 1;
      }
      return 0;
    })
    setEmployees(sortedEmployees);
    setLastClicked(false);
    console.log(lastNameClicked);
  }

  const handleInputChange = event => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    API.getEmployee()
    .then(res => {
      setEmployees(res.data.results)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Header />
      <EmployeeTables
      firstNameClicked={firstNameClicked} 
      lastNameClicked={lastNameClicked}
      sortFirstAsc={sortByFirstNameAsc}
      sortFirstDesc={sortByFirstNameDesc}
      sortLastAsc={sortByLastNameAsc}
      sortLastDesc={sortByLastNameDesc}
      handleInputChange={handleInputChange}
      >
        {employees.filter(result => {
          if (filter.trim() === "") return result
          else if (
          result.name.first.toLowerCase().includes(filter.trim().toLowerCase())
          ||
          result.name.last.toLowerCase().includes(filter.trim().toLowerCase())
          ){
            return result 
          }
        }).map(result => {
          return(
            <Employee 
              picture={result.picture.large}
              firstname={result.name.first}
              lastname={result.name.last}
              email={result.email}
              phone={result.phone}
              dob={result.dob.date.slice(0, 10).replace("-", "/").replace("-", "/")}
            />
          )})}
      </EmployeeTables>
    </div>
    
  );
}

export default App;
