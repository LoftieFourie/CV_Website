import React from 'react';
import './projects.css';

function Info() {
    return (
        <div className='container'>
            <h1>DRG Asset-Management-Application (AMA)</h1>

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
            </section>
        </div>
    );
}

function AmaProject() {
    const goHome = () => {
        // Construct the URL based on the clicked sub-card's name
        const url = `../Home`;

        // Navigate to the URL
        window.location.href = url;
    };

    return (
        <div>
            {/* Fixed bar at the top */}
            <div className='fixed-bar'>
                <button className='back-button' onClick={() => goHome()}>
                    Home
                </button>
                <h1 className='title'>AMA</h1>
            </div>

            {/* Render the AmaProject component */}
            <Info />
        </div>
    );
}

export default AmaProject;
