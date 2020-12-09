import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';


export default class SignUp extends Component {

    state = {
        email: '',
        password: ''
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    onSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        console.log("button was pushed");
        axios.post('/api/user', {
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            console.log(res);
            if(res.data) {
                console.log('Succesful Signup');
                window.location = '/logIn';
            } else {
                console.log('Signup Error');
                alert('Signup Error');
            }
        }).catch(error => {
            alert("Username is already in use!");
            console.log('Signup server error: ', error);
        })
    };


    render () { 
        return (
        <div>
		    <Navbar/>
          <form className="signup-form" onSubmit={this.onSubmit}>
          <h3 className="signup-heading">Sign Up</h3>
            <div className="form-group"> 
              <label>Username: </label>
              <input  type="text"
                  required
                  name="email"
                  className="form-control username-input"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  />
            </div>
            <div className="form-group"> 
              <label>Password: </label>
              <input  type="password"
                  required
                  name="password"
                  className="form-control password-input"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  />
            </div>
    
            <div className="form-group">
              <input type="submit" value="Create Account" className="submitBtn btn btn-secondary" />
            </div>
          </form>
          <p><Link to="/">Head back to home</Link></p>
        </div>
    );
    }
}
