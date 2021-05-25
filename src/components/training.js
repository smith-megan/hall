import React from 'react';

import "../styles/training.css"
import choice1 from '../assets/choice1.png'
import choice2 from '../assets/choice2.png'
import choice3 from '../assets/choice3.png'

class Training extends React.Component {
    render(){
        return <div>
            <div className="banner-training">
                <h1 className="banner-h1-training">Trainings</h1>
                <p className="banner-p-training">Group trainings suited for offices, schools, or organizations. Depending on circumstances, a combination of trainings could be appropriate.</p>
            </div>
              <div className="three-choice-training">
                    <div className="choice-div-training">
                        <img src={choice1} alt="business meeting" className="choice-training"/>
                        <p className="choice-p-training">Emphasize and grow trauma-informed and strengths-based leadership.</p>
                        <button className="choice-btn-training">Business Leadership</button>
                    </div>
                    <div className="choice-div-training">
                        <img src={choice2} alt="business woman holding help sign" className="choice-training"/>
                        <p className="choice-p-training">Decenter negative organization culture by bringing awareness and skills.</p>
                        <button className="choice-btn-training">Culture Awareness</button>
                    </div>
                    <div className="choice-div-training">
                        <img src={choice3} alt="New growth leafing out" className="choice-training"/>
                        <p className="choice-p-training">Recognize and help trauma responses to build healthier culture.</p>
                        <button className="choice-btn-training">Trauma Response</button>
                    </div>
                </div>
        </div>
    }
}

export default Training;