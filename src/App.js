import React, { useState ,useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import EmployeeTables from './components/EmployeeTables'
import Employee from './components/Employee';
import API from './utils/API';

function App() {

  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState("");

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
  }

  const sortByLastNameAsc = event => {
    event.preventDefault();

    let sortedEmployees = [...employees].sort((a, b)=> {
      let fa = a.name.last;
      let fb = b.name.last;

      if (fa < fb){
        return -1;
      }
      if (fa > fb){
        return 1;
      }
      return 0;
    })
    setEmployees(sortedEmployees);
  }

  const sortByLastNameDesc = event => {
    event.preventDefault();

    let sortedEmployees = [...employees].sort((a, b)=> {
      let fa = a.name.last;
      let fb = b.name.last;

      if (fa < fb){
        return -1;
      }
      if (fa > fb){
        return 1;
      }
      return 0;
    })
    setEmployees(sortedEmployees);
  }

  const handleInputChange = event => {
    setFilter(event.target.value)
    console.log(filter);
  }

  useEffect(() => {
    API.getEmployee()
    .then(res => {
      console.log(res.data.results)
      setEmployees(res.data.results)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Header />
      <EmployeeTables 
      sortFirstAsc={sortByFirstNameAsc}
      sortLastAsc={sortByLastNameAsc}
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
