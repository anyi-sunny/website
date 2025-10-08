import React from 'react';
import './Bio.css';
import headshot from './headshot.png'

const Bio: React.FC = () => {
    console.log('Bio component rendering');
    return (
        <>
        <div className="gradient-bg gradient-bg-1" />
        <div className="bio-container">
            <img 
                src={headshot} 
                alt="Anyi Sun" 
                className="bio-picture" 
            />
            <div className="bio-content">
                <h1 className="bio-header">Anyi Sun</h1>
                <p className="bio-text">Hi! I'm a Senior at Bowdoin College pursuing the Computer Science and Math Double Major. 
                    I am also a Visual Arts Minor. I play NCAA D3 hockey at Bowdoin College and I am passionate about
                    software development, data science, and visual arts.
                    I enjoy working with school clubs and administrations to improve student life. 
                    This year, I am also president of the Bowdoin Student Athlete Advisory Committee as well as Advisor to the 
                    Athletes of Color Coalition. I will also continue working as a co-organizer for TedxBowdoinCollege. 
                </p>
            </div>
        </div>
        </>
    );
};

export default Bio;