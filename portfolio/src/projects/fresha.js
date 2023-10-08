import React from 'react';
import './projects.css';
import fresh1 from '../assets/fresh/Fresh1.png';
import fresh2 from '../assets/fresh/Fresh2.png';
import fresh3 from '../assets/fresh/Fresh3.png';
import fresh4 from '../assets/fresh/Fresh4.png';
import fresh5 from '../assets/fresh/Fresh5.png';
import fresh6 from '../assets/fresh/Fresh6.png';
import fresh7 from '../assets/fresh/Fresh7.png';
import fresh8 from '../assets/fresh/Fresh8.png';
import fresh9 from '../assets/fresh/Fresh9.png';
import fresh10 from '../assets/fresh/Fresh10.png';
import { Link } from 'react-router-dom';

function Info() {
    return (
        <div className='container'>
            <h1>Fresha Findings Website</h1>

            <section>
                <h2>My Role: Full Stack solo Developer</h2>
            </section>

            <section>
                <h2>Introduction</h2>
                <p>
                    The Fresha Findings Website is a dynamic second-hand sales platform that I
                    developed as part of a personal project. This endeavor allowed me to explore and
                    experiment with a range of web technologies. The project serves as a showcase of
                    my proficiency in using the XAMPP package to create a fully functional website,
                    fostering online connections through a vibrant marketplace experience.
                </p>
            </section>

            <section>
                <h2>Languages and Software Used</h2>
                <ul>
                    <li>
                        <strong>HTML:</strong> Forming the foundation of the {"website's"} structure
                        and content.
                    </li>
                    <li>
                        <strong>CSS:</strong> Enabling styling and layout for an attractive and
                        responsive design.
                    </li>
                    <li>
                        <strong>JavaScript:</strong> Enhancing interactivity and dynamic features to
                        elevate the user experience.
                    </li>
                    <li>
                        <strong>PHP:</strong> Powering the backend scripting for seamless data
                        handling and server interactions.
                    </li>
                    <li>
                        <strong>XAMPP:</strong> Providing a local development environment that
                        simulates a server environment during the {"project's"} development.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Key Features</h2>
                <ul>
                    <li>
                        <strong>Intuitive User Interface:</strong> The website offers a
                        user-friendly interface designed to deliver a smooth and enjoyable browsing
                        and shopping experience for users.
                    </li>
                    <li>
                        <strong>Interactive Functionality:</strong> Leveraging JavaScript, the
                        website incorporates dynamic elements to enhance user engagement, including
                        real-time filtering and updates.
                    </li>
                    <li>
                        <strong>Aesthetic Styling:</strong> The use of CSS ensures an appealing and
                        visually pleasing design that aligns with modern web design standards.
                    </li>
                    <li>
                        <strong>Robust Backend:</strong> PHP is utilized to establish a secure and
                        efficient connection between the frontend and the backend, ensuring seamless
                        data transfer and processing.
                    </li>
                </ul>
                <p>
                    All code as well as research and preparation for this project can be found{' '}
                    <a href='https://github.com/LoftieFourie/Fresha-Findings-website'>HERE</a> on my
                    GitHub.
                </p>
            </section>
            <section>
                <h2>Images of the project:</h2>
                <p>
                    Below is the pages created for Fresha findings as well as a quick look at the
                    local database. These pages include the home page, login, signup, search, item
                    view, category view, as well as card registration.
                </p>
                <div className='fresh-grid'>
                    <img src={fresh1} alt='Fresha Findings' />
                    <img src={fresh2} alt='Fresha Findings' />
                    <img src={fresh3} alt='Fresha Findings' />
                    <img src={fresh4} alt='Fresha Findings' />
                    <img src={fresh5} alt='Fresha Findings' />
                    <img src={fresh6} alt='Fresha Findings' />
                    <img src={fresh7} alt='Fresha Findings' />
                    <img src={fresh8} alt='Fresha Findings' />
                    <img src={fresh9} alt='Fresha Findings' />
                    <img src={fresh10} alt='Fresha Findings' />
                </div>
            </section>
        </div>
    );
}

function FreshaProject() {
    return (
        <div>
            {/* Fixed bar at the top */}
            <div className='fixed-bar'>
                <Link to='../Home' className='link-as-text'>
                    Home
                </Link>
                <h1 className='title'>Fresha Findings</h1>
            </div>

            {/* Render the AmaProject component */}
            <Info />
        </div>
    );
}

export default FreshaProject;
