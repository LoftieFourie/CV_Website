import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import profilePhoto from './assets/IMG_3818.jpg';
import Cards from './/cards.js';

// Define a functional component for the portfolio introduction
function PortfolioIntro() {
    return (
    <div className="App">
        <div className="left-column">
            <img src={profilePhoto} alt="Your Name" className="profile-photo" />
            <h2 className="profile-heading">Loftie Fourie</h2>
            <h3 className="profile-subheading">Developer</h3>
            <p className="profile-body">I am a dedicated and driven individual, always striving for continuous improvement. 
            With excellent communication skills, I find joy in assisting others and value collaboration. 
            During university, I embraced leadership and teamwork, ensuring successful project completion. 
            Known for my support and loyalty, I advocate for my beliefs while remaining open-minded to diverse perspectives.</p>
            <div className="social-media-links">
                {/* Social media links */}
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
                {/* Add more social media links */}
            </div>
        </div>
        <Cards />
    </div>
    );
}

// Render the PortfolioIntro component to the root element
ReactDOM.render(<PortfolioIntro />, document.getElementById('root'));
