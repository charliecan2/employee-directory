import React from 'react';
import SearchForm from './SearchForm';

function EmployeeTables(props) {
    return (
        <div className="container">
            <br />
            <br />
            <SearchForm handleInputChange={props.handleInputChange}/>
            <br />
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Image</th>
                <th scope="col"><a href="#" onClick={props.sortFirstAsc}>First Name</a></th>
                <th scope="col"><a href="#" onClick={props.sortLastAsc}>Last Name</a></th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">DOB (yyyy/mm/dd)</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
        </div>
    )
}

export default EmployeeTables;