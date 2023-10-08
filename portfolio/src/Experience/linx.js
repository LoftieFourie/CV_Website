import React from 'react';
import './exp.css';
import { Link } from 'react-router-dom';

function Info() {
    return (
        <div className='container'>
            <h1>LinxA/S - Software Development Experience</h1>

            <section>
                <h2>Introduction</h2>
                <p>
                    LinxA/S is a dynamic software development company headquartered in Johannesburg,
                    where I had the opportunity to contribute part-time during my third-year
                    holidays. Specializing in SAP development alongside a diverse range of projects,
                    LinxA/S offered me a valuable learning environment.
                </p>
            </section>

            <section>
                <h2>My Role and Experience</h2>
                <p>
                    During my tenure at LinxA/S, I actively participated in various projects,
                    providing me with hands-on experience across a spectrum of technologies,
                    including SQL, Angular, and even Arduinos. This practical exposure allowed me to
                    bridge the gap between theoretical knowledge and real-world application, where I
                    not only worked on projects but also diligently completed essential
                    documentation. This experience rekindled my passion for development and
                    illuminated a promising path in my professional journey.
                </p>
            </section>

            <section>
                <h2>Languages and Software I Gained Experience In</h2>
                <ul>
                    <li>
                        <strong>SQL:</strong> A language for managing and querying relational
                        databases.
                    </li>
                    <li>
                        <strong>Angular Ionic:</strong> A framework for building cross-platform
                        mobile and web apps using Angular and Ionic components.
                    </li>
                    <li>
                        <strong>Angular:</strong> A framework for creating dynamic and responsive
                        web applications.
                    </li>
                    <li>
                        <strong>Arduino:</strong> An open-source platform for building interactive
                        electronic projects.
                    </li>
                    <li>
                        <strong>Node.js:</strong> A runtime environment for server-side JavaScript
                        development.
                    </li>
                </ul>
            </section>
        </div>
    );
}

function LinxExp() {
    return (
        <div>
            {/* Fixed bar at the top */}
            <div className='fixed-bar'>
                <Link to='../Home' className='link-as-text'>
                    Home
                </Link>
                <h1 className='title'>AMA</h1>
            </div>

            {/* Render the AmaProject component */}
            <Info />
        </div>
    );
}

export default LinxExp;
