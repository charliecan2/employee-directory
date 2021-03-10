import React from 'react';
import API from '../utils/API';

class Employee extends React.Component {
    state = {
        picture: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        dob: ""
    }

    componentDidMount(){
        this.loadEmployee();
    }

    loadEmployee = () => {
        API.getEmployee()
        .then(res => {
            this.setState({
                picture: res.data.results[0].picture.large, 
                firstName: res.data.results[0].name.first,
                lastName: res.data.results[0].name.last,
                phone: res.data.results[0].phone,
                email: res.data.results[0].email,
                dob: res.data.results[0].dob.date
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <tr>
            <td><img src={this.state.picture} alt="employee-pic"/></td>
            <td>{this.state.firstName} {this.state.lastName}</td>
            <td><a href={`mailto:${this.state.email}`} type="mail">{this.state.email}</a></td>
            <td>{this.state.phone}</td>
            <td>{this.state.dob.slice(0, 10)}</td>
            </tr>
            
        )
    }
}

export default Employee;