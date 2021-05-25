import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import '../styles/intro.css';
import choice1 from '../assets/choice1.png'
import choice2 from '../assets/choice2.png'
import choice3 from '../assets/choice3.png'

class Intro extends React.Component {
    render(){
        return <div className="intro">
            <div className="intro-header">
                <div className="header-white">
                    <h1 className="inspire">Inspire</h1>
                    <h2 className="change">Change & Growth</h2>
                    <p className="header-p">Through group trainings for businesses, organizations, and educational settings</p>
                    <Link to="/contact" className="header-btn"><button className="header-btn">Reach Out Today</button></Link>
                </div>
            </div>
            <div className="intro-three-choice">
                <div className="intro-resilient-div">
                <h1 className="intro-resilient-header">Custom Trainings for Resilience Focused Leadership</h1>
                    <div className="intro-resilient-p">
                        <p className="resilient-p">Trauma is increasingly common in both children and adults negatively impacting their responses, relationships, and productivity.</p>
                        <p className="resilient-p">Education and strong leadership responses in workplace, schools, and community will grow a resilient culture benefitting trauma impacted individuals and all those surrounding them.</p>
                    </div>
                </div>
                <div className="three-choice">
                    <div className="choice-div">
                        <img src={choice1} alt="business meeting" className="choice"/>
                        <p className="choice-p">Emphasize and grow trauma-informed and strengths-based leadership.</p>
                        <button className="choice-btn">Business Leadership</button>
                    </div>
                    <div className="choice-div">
                        <img src={choice2} alt="business woman holding help sign" className="choice"/>
                        <p className="choice-p">Decenter negative organization culture by bringing awareness and skills.</p>
                        <button className="choice-btn">Culture Awareness</button>
                    </div>
                    <div className="choice-div">
                        <img src={choice3} alt="New growth leafing out" className="choice"/>
                        <p className="choice-p">Recognize and help trauma responses to build healthier culture.</p>
                        <button className="choice-btn">Trauma Response</button>
                    </div>
                </div>
            </div>
            <div className="mission-banner">
                <h1 className="mission-h1">Our Core Mission...</h1>
                <p className="mission-p">is to increase community resilience and capacity to understand, prevent and mitigate the effects of trauma through education, training and capacity building.</p>
            </div>

            <div className="blog-explanation"> 
                
                <div className="blog-card">
                   <div className="blog-image"></div>
                   <div className="blog-text-info">
                        <h1>Blog Post Title</h1>
                        <p className="blog-post-p">Summary paragraph. This is a summary. Summary paragraph. This is a summarySummary paragraph. This is a summarySummary paragraph. This is a summary</p>
                        <p className="blog-post-p">summary continued. Summary paragraph. This is a summarySummary paragraph. This is a summarySummary paragraph. This is a summarySummary paragraph. This is a summary.</p>
                        <Link to="/blog" className="blog-btn"><button className="blog-btn">Read More</button></Link>
                    </div>
                </div>
            </div>



        </div>
    }
}

export default Intro;