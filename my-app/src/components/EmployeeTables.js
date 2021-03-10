import React from 'react';
import Employee from '../components/Employee'

class EmployeeTables extends React.Component{
    render(){
        return (
            <div className="container">
                <br />
                <br />
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search" />
                </div>
                <br />
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
                    <Employee />
                    <Employee />
                    <Employee />
                </tbody>
            </table>
            </div>
        )
    }
}

export default EmployeeTables;