import React from 'react';
import headshot from '../assets/hall.jpg'

import '../styles/bio.css';

class Bio extends React.Component {
    render(){
        return <div>
            <div className="bio-intros">
                <div className="mission-top">
                    <h1>About</h1>
                    <p>Hall Training and Consulting has been established to serve the needs for trauma response and trauma-informed leadership for leadership, professionals, and educational settings. The primary focus to implement this is through two major channels, Resilience Focused Leadership and Violence Prevention.</p>
                </div>
              
            </div>  
            
            <div className="mission-banner">
                <h1 className="mission-h1">Our Core Mission...</h1>
                <p className="mission-p">is to increase community resilience and capacity to understand, prevent and mitigate the effects of trauma through education, training and capacity building.</p>
            </div>
            <div className="bio-explanation">
                <div className="bio-card">
                    <h1 className="bio-header">Resilience Focused Leadership</h1>
                    <p>
                    Trauma is increasingly common in children and adults and is persistent across environments. Individuals and organizations are negatively impacted in performance, relationships, and productivity and need leadership to correctly respond by supporting and teaching resilience. Trauma is increasingly common in children and adults and is persistent across environments. Individuals and organizations are negatively impacted in performance, relationships, and productivity and need leadership to correctly respond by supporting and teaching resilience.
                    </p>
                    <p>
                    Recognizing symptoms of trauma, responding correctly, and leading with understanding and education is the answer. Teaching and exemplifying healthy responses with intentional and reliable systems builds positive culture, transparency and effective teams for a healthy organization. 
                    </p>
                    <button className="bio-btn">View Leadership Trainings</button>
                </div>
            </div>          
            
            <div className="bio-explanation">
                <div className="bio-card">
                    <h1 className="bio-header">Violence Prevention</h1>
                    <p>
                    Primarily focused on professional development for teachers, higher education, counselors, and social workers is key to understanding, preventing, and responding to trauma. 
                    </p>
                    <p>
                    Consulting on policies and procedures that increase safety and encourage as well as implementing and supporting national programs such as The Enough Abuse Campaign (CSA prevention for adults), Care for Kids and We Care Elementary (CSA prevention for kids)
                    </p>
                    <button className="bio-btn">View Prevention Trainings</button>
                </div>
            </div>
                    
            <div className="bio">
                <h1 className="founded">Founded by...</h1>
                        <img src={headshot} className="headshot"/>
                        <div className="bio-box">
                            <h1>Christina Hall</h1>            
                            <p className="bio-p">I am an experienced training specialist passionate about preventing trauma and increasing resiliency in children and adults. I am experienced in organizational leadership, training, program development, and community outreach.</p>
                        </div>
                    </div>
                </div>
    }
}

export default Bio;