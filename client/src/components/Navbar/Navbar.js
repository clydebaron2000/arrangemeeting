import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import './styles.css';

export default class Navbar extends Component {
    state = { active: false }

    handleClick = () => {
        this.setState({ active: !this.state.active })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Rendezvous</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    {/* <i></i> */}
                    <i className={this.state.active ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                {/* If icon above is clicked, set ul tag as active or native */}
                <ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

