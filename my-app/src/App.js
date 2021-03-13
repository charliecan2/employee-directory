import React, { useState ,useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import EmployeeTables from './components/EmployeeTables'
import Employee from './components/Employee';
import API from '../src/utils/API';

function App() {

  const [employees, setEmployees] = useState([]);

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
      <EmployeeTables>
        {employees.map(result => {
          return(
          <Employee 
            picture={result.picture.large}
            firstname={result.name.first}
            lastname={result.name.last}
            email={result.email}
            phone={result.phone}
            dob={result.dob.date.slice(0, 10)}
          />
          );
        })}
      </EmployeeTables>
    </div>
    
  );
}

export default App;
