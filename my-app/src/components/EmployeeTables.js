import React from 'react';
import API from '../utils/API';
import Employee from '../components/Employee'

class EmployeeTables extends React.Component{
    render(){
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                </tbody>
            </table>
        )
    }
}

export default EmployeeTables;