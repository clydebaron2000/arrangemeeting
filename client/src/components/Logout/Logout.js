import React, { Component } from 'react';
import './style.css';


export default class Logout extends Component {

    onSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        
    };

    render () {
        return (
            <div className="form-group">
                <input type="submit" value="Logout" className="btn btn-secondary" />
            </div>

        )
    }
}