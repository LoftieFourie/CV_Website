import React from 'react';
import './projects.css';
import AMA1 from '../assets/AMA/AMA1.png';
import AMA2 from '../assets/AMA/AMA2.png';
import AMA3 from '../assets/AMA/AMA3.png';
import AMA4 from '../assets/AMA/AMA4.png';
import AMA5 from '../assets/AMA/AMA5.png';
import AMA6 from '../assets/AMA/AMA6.png';
import AMA7 from '../assets/AMA/AMA7.png';
import AMA8 from '../assets/AMA/AMA8.png';
import AMA9 from '../assets/AMA/AMA9.png';
import { Link } from 'react-router-dom';

function Info() {
    return (
        <div className='container'>
            <h1>DRG Asset Management Application (AMA)</h1>

            <section>
                <h2>My Role: Full Stack solo Developer</h2>
            </section>

            <section>
                <h2>Introduction:</h2>
                <p>
                    DRG-Asset-Management is a robust application designed to streamline asset
                    management and service verification for forklifts. The primary goal of this
                    project was to enhance efficiency and ease of use for service workers and
                    administrators alike. The program is written for DRG Services located in
                    Polokwane, thus it is not viewable on my GitHub. This page describes the program
                    as well as the software I used in the development.
                </p>
            </section>

            <section>
                <h2>Languages and Software Used:</h2>
                <ul>
                    <li>
                        <strong>Node.js</strong> - API
                    </li>
                    <li>
                        <strong>Angular Ionic</strong> - Front-End
                        <ul>
                            <li>HTML</li>
                            <li>SCSS</li>
                            <li>Typescript</li>
                        </ul>
                    </li>
                    <li>
                        <strong>MongoDB</strong> - Database
                    </li>
                </ul>
            </section>

            <section>
                <h2>Key Features:</h2>
                <ul>
                    <li>
                        <strong>QR Code Scanning:</strong> Service workers can efficiently scan QR
                        codes associated with forklifts, instantly accessing information about
                        available services.
                    </li>
                    <li>
                        <strong>Service Verification:</strong> This application provides a
                        user-friendly method to verify if a service has been successfully performed
                        on a specific forklift.
                    </li>
                    <li>
                        <strong>Admin Dashboard:</strong> Administrators have exclusive access to a
                        dashboard where they can effortlessly manage services, add new services, and
                        execute other administrative tasks.
                    </li>
                    <li>
                        <strong>Cross-Platform Compatibility:</strong> Built using Angular Ionic for
                        the front-end, ensuring cross-platform compatibility and a consistent user
                        experience across devices.
                    </li>
                    <li>
                        <strong>Backend with Node.js:</strong> The {"application's"} backend is
                        built with Node.js, ensuring a robust and scalable server-side solution.
                    </li>
                    <li>
                        <strong>MongoDB Database:</strong> All data, including forklift information
                        and service records, is stored in a MongoDB database, ensuring efficient
                        data management and retrieval.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Usage:</h2>
                <p>
                    <strong>Service Worker:</strong> Scan the QR code associated with a forklift
                    using the mobile app to view available services and verify service completion.
                </p>
                <p>
                    <strong>Admin:</strong> Log in to the admin dashboard or admin on the mobile
                    application to manage services, add new services, and perform other
                    administrative tasks.
                </p>
            </section>

            <section>
                <h2>Images of the project:</h2>
                <p>
                    Below are the views on the app, it also allows you to view and complete services
                    through scanning the QR on said asset, in this case forklifts. The views include
                    a service view, admin view, vehicle views, employee views, upload and edit
                    views, and more
                </p>
                <div className='bfm-grid'>
                    <img src={AMA1} alt='BFM' />
                    <img src={AMA2} alt='BFM' />
                    <img src={AMA3} alt='BFM' />
                    <img src={AMA4} alt='BFM' />
                    <img src={AMA5} alt='BFM' />
                    <img src={AMA6} alt='BFM' />
                    <img src={AMA7} alt='BFM' />
                    <img src={AMA8} alt='BFM' />
                    <img src={AMA9} alt='BFM' />
                </div>
            </section>
        </div>
    );
}

function AmaProject() {
    return (
        <div>
            {/* Fixed bar at the top */}
            <div className='fixed-bar'>
                <Link to='../Home' className='link-as-text'>
                    Home
                </Link>
            </div>

            {/* Render the AmaProject component */}
            <Info />
        </div>
    );
}

export default AmaProject;
