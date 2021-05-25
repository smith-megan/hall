import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import "../styles/nav.css"

class Nav extends React.Component {
    render(){
        return <div className="nav-bar">
            <Link to="/" className="left-logo"><img src={logo} alt="Hall Training and Consulting" className="logo"/></Link>
            <div className="links">
                <Link to="/bio" className="nav-link">About</Link>
                <Link to="/training" className="nav-link">Trainings</Link>
                <Link to="/blog" className="nav-link">Blog</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
        </div>
    }
}

export default Nav;