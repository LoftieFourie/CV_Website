import React from 'react';
import './projects.css';
import { Link } from 'react-router-dom';

function Info() {
    return (
        <div className='container'>
            <h1>VIPIN Development</h1>

            <section>
                <h2>My Role: Front-End Developer</h2>
            </section>

            <section>
                <h2>Introduction</h2>
                <p>
                    I had the opportunity to contribute to a mobile development project for APJ
                    Automation as part of a dedicated team. Due to confidentiality agreements, I am
                    unable to disclose specific details. Our collaboration involved both remote work
                    and on-site sessions, which occurred approximately twice a month. My primary
                    role in this endeavor focused on front-end development and enhancing
                    functionality.
                </p>
            </section>

            <section>
                <h2>Languages Used</h2>
                <ul>
                    <li>
                        <strong>Flutter:</strong> Mobile app development.
                    </li>
                </ul>
            </section>
        </div>
    );
}

function VipinProject() {
    return (
        <div>
            {/* Fixed bar at the top */}
            <div className='fixed-bar'>
                <Link to='../Home' className='link-as-text'>
                    Home
                </Link>
                <h1 className='title'>VIPIN Development</h1>
            </div>

            {/* Render the AmaProject component */}
            <Info />
        </div>
    );
}

export default VipinProject;
