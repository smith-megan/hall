import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import "../styles/foot.css"

class Foot extends React.Component {
    render(){
        return <div className="foot-bar">
            <div className="foot-logo-div">
                <Link to="/" className="foot-left-logo"><img src={logo} alt="Hall Training and Consulting" className="foot-logo"/></Link>
                {/* <p className="foot-location">Located in Las Vegas, NV</p> */}
            </div>
            <div className="foot-links">
                <Link to="/bio" className="foot-link">About</Link>
                <Link to="/training" className="foot-link">Trainings</Link>
                <Link to="/blog" className="foot-link">Blog</Link>
                <Link to="/contact" className="foot-link">Contact</Link>
            </div>
        </div>
    }
}

export default Foot;