import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar"
import './styles.css';

export default class EventTitle extends Component {
    render() {
        return(
            <div className="event-header">
                <Navbar/>
                <h1 className="event-title"></h1>

            </div>
        )
    }
}