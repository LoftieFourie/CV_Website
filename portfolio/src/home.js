import React from 'react';
import './index.css';
import profilePhoto from './assets/IMG_3818.jpg';
import Cards from './cards.js';
import linked from './assets/linkedin.png';
import stack from './assets/stack.png';
import git from './assets/git.png';
import cv from './assets/Loftie_Fourie_CV.pdf';

// Define a functional component for the portfolio introduction
function Home() {
    return (
        <div className='App'>
            <div className='left-column'>
                <img src={profilePhoto} alt='Your Name' className='profile-photo' />
                <h2 className='profile-heading'>Loftie Fourie</h2>
                <h3 className='profile-subheading'>Developer</h3>
                <h3 className='profile-subheading'>
                    BSc Hons Computer Science and Information Systems
                </h3>
                <p className='profile-body'>
                    I am a dedicated and driven individual, always striving for continuous
                    improvement. With excellent communication skills, I find joy in assisting others
                    and value collaboration. During university, I embraced leadership and teamwork,
                    ensuring successful project completion. Known for my support and loyalty, I
                    advocate for my beliefs while remaining open-minded to diverse perspectives.
                </p>
                <div className='contact-info'>
                    <h3>Contact Me</h3>
                    <p>
                        <strong>Phone Number:</strong> 0762388089
                    </p>
                    <p>
                        <strong>Email:</strong> loftiefourie01@gmail.com
                    </p>
                    <p>
                        <strong>Location:</strong> Gauteng, South Africa
                    </p>
                    <a href={cv} download='Loftie_Fourie_CV.pdf' className='download-button'>
                        Download PDF
                    </a>
                </div>
                <div className='social-media-links'>
                    <a
                        href='https://www.linkedin.com/in/loftie-fourie-14b117241/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img src={linked} alt='Linked In' className='logo'></img>
                    </a>
                    <a
                        href='https://stackoverflow.com/users/20534941/loftie-fourie'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img src={stack} alt='Stack overflow' className='logo'></img>
                    </a>
                    <a
                        href='https://github.com/LoftieFourie'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img src={git} alt='github' className='logo'></img>
                    </a>
                </div>
            </div>
            <Cards />
        </div>
    );
}

export default Home;
