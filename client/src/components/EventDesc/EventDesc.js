import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar"
import './styles.css';

export default class EventDesc extends Component {
    render() {
        return(
            <div className="event-desc">
                <Navbar/>
                <p className="description"></p>
            </div>
        )
    }
}