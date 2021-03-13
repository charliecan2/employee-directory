import React from 'react';
import SearchForm from '../components/SearchForm';

function EmployeeTables({children}) {
    return (
        <div className="container">
            <br />
            <br />
            <SearchForm />
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
                {children}
            </tbody>
        </table>
        </div>
    )
}

export default EmployeeTables;