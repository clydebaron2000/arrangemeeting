import React, { Component } from 'react';
import './style.css';


export default class Logout extends Component {

    onSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        axios.get('http://localhost:5000/logout', {
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            console.log(res);
            if(res.data) {
                console.log('Succesful Signup');
                this.setState({
                    redirectTo: '/create'
                })
            } else {
                console.log('Signup Error');
            }
        }) .catch(error => {
            console.log('Signup server error: ', error);
        })
    };

    render () {
        return (
            <div className="form-group">
                <input type="submit" value="Logout" className="btn btn-secondary" />
            </div>

        )
    }
}