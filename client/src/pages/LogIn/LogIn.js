import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import GoogleLogin from '../../components/GoogleAuth/login';

export default class SignUp extends Component {

    state = {
        email: '',
        password: '',
        loggedIn: false
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

        axios.post('/login', {
            email: this.state.email,
            password: this.state.password
        }, { withCredentials: true })
        .then(res => {
            console.log('Login Response: ', res);
            if(res.status === 200) {
                this.setState({
                    loggedIn: true
                })
                window.location = '/create';
            }
        }).catch(error => {
            console.log('Login Error: ', error);
        })

        
    };


    render () { 
        return (
        
        <div>
            <Navbar/>
          <form className="login-form" onSubmit={this.onSubmit}>
          <h3 className="login-heading">Login</h3>
            <div className="form-group"> 
              <label>Username: </label>
              <input  type="text"
                  required
                  name="email"
                  className="form-control username-login-input"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  />
            </div>
            <div className="form-group"> 
              <label>Password: </label>
              <input  type="password"
                  required
                  name="password"
                  className="form-control password-login-input"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  />
            </div>

    
            <div className="form-group">
              <input type="submit" value="Login" className="submitBtn btn btn-secondary" />
            </div>
            <GoogleLogin />
          </form>
          <p><Link to="/">Head back to home</Link></p>
        </div>
    );
    }
}