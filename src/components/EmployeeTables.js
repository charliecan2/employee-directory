import React from 'react';
import SearchForm from './SearchForm';

function EmployeeTables(props) {
    return (
        <div className="container">
            <br />
            <br />
            <SearchForm handleInputChange={props.handleInputChange}/>
            <br />
            <table className="table table-striped table-responsive-lg">
            <thead>
                <tr>
                <th scope="col">Image</th>
                {props.firstNameClicked ? 
                <th scope="col"><a href="#" onClick={props.sortFirstDesc}>First Name</a></th> :
                <th scope="col"><a href="#" onClick={props.sortFirstAsc}>First Name</a></th>
                }
                {props.lastNameClicked ?
                <th scope="col"><a href="#" onClick={props.sortLastDesc}>Last Name</a></th> :
                <th scope="col"><a href="#" onClick={props.sortLastAsc}>Last Name</a></th>
                }
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