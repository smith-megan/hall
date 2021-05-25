import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import map from '../assets/maps.png'

import '../styles/contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: null,
            email: '',
            address: '',
            comment: ''
        };
        this.handleNameChange=this.handleNameChange.bind(this);

        this.handleEmailChange=this.handleEmailChange.bind(this);
    
        this.handlePhoneChange=this.handlePhoneChange.bind(this);

        this.handleStreetChange=this.handleStreetChange.bind(this);

        this.handleCommentChange=this.handleCommentChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value})
    }
    handleEmailChange(event){
        this.setState({email: event.target.value});
    }
    handlePhoneChange(event){
        this.setState({phone: event.target.value});
    }
    handleStreetChange(event){
        this.setState({address: event.target.value});
    }
    handleCommentChange(event){
        this.setState({comment: event.target.value});
    }

    render(){
        return <div className="contact">
            <div className="banner-contact">
                <h1 className="banner-h1">Outreach</h1>
                <p className="banner-p">While primarily located in the Las Vegas Valley, Consultations, Connection, and Outreach are encouraged on a national level.</p>
            </div>
            <div className="actual-contact">
                <div className="contact-card">
                    <h1>Contact Us</h1>
                    <p>Reach out for more information</p>
                    <form action="/email" className="actual-form" 
                        // onSubmit={(e)=>{testEmail(e)}}
                        >
                                <label htmlFor="name" className="contact-label">
                                    <input className="contact-input" id="name" type="name" name="name" placeholder="First, Last Name" required onChange={(e)=>{this.handleNameChange(e)}}/>
                                </label>
                                <label htmlFor="phone-number" className="contact-label">
                                    <input className="contact-input" id="phone-number" type="number" name="phone-number" placeholder="phone number" required onChange={(e)=>{this.handlePhoneChange(e)}}/></label>

                                <label htmlFor="email" className="contact-label">
                                    <input className="contact-input" id="email" type="email" name="email" placeholder="email@emailservice.com" required onChange={(e)=>{this.handleEmailChange(e)}}/></label>

                                <label htmlFor="street" className="contact-label">
                                    <input className="contact-input" id="address" type="name" name="address" placeholder="Mailing Address" required onChange={(e)=>{this.handleStreetChange(e)}}/></label>

                            <label  htmlFor="message" className="contact-label">
                                <textarea className="message-box contact-input" id="message" name="message" placeholder="Reason for contact" onChange={(e)=>{this.handleCommentChange(e)}}></textarea></label>
                            <button className="submit-btn" type="submit" onClick={()=>{console.log(this.state)}}>Submit</button>
                        </form>
                </div>
                <div className="right-contact">
                    <div className="maps"></div>               
                </div>
            </div>
        </div>
    }
}

export default Contact;