import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import './styles.css';
import img7 from "../../images/AMicon.png"

export default class Navbar extends Component {
    state = { active: false }

    handleClick = () => {
        this.setState({ active: !this.state.active })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <Link to="/" className="navbar-logo"><img className=" logo-image" src= {img7}></img>Arrange Meeting</Link>
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.active ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                {/* If icon above is clicked, set ul tag as active or native */}
                <ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

