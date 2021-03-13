import React from 'react';

function Employee(props){
    return(
        <tr>
        <td><img src={props.picture} alt="employee-pic"/></td>
        <td>{props.firstname} {props.lastname}</td>
        <td><a href={`mailto:${props.email}`} type="mail">{props.email}</a></td>
        <td>{props.phone}</td>
        <td>{props.dob}</td>
        </tr>
    )

}

export default Employee;