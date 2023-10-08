import React from 'react';
import './projects.css';
import bfm1 from '../assets/bfm/BFM1.png';
import bfm2 from '../assets/bfm/BFM2.png';
import bfm3 from '../assets/bfm/BFM3.png';
import bfm4 from '../assets/bfm/BFM4.png';
import bfm5 from '../assets/bfm/BFM5.png';
import { Link } from 'react-router-dom';

function Info() {
    return (
        <div className='container'>
            <h1>Better Faster Marking</h1>

            <section>
                <h2>My Role: Backend Lead and front-end Developer</h2>
            </section>

            <section>
                <h2>Introduction</h2>
                <p>
                    As part of our honors year assignments, our cohort was organized into four
                    groups, each tasked with a development project for different clients. Our
                    client, NWU Writing Labs, entrusted us with enhancing and completing their
                    existing marking system. This system plays a crucial role in evaluating lengthy
                    essays, offering features for rubric creation, assignment marking, and data
                    analysis.
                </p>
            </section>

            <section>
                <h2>Languages and Software Used</h2>
                <ul>
                    <li>
                        <strong>Node.js:</strong> Backend API development.
                    </li>
                    <li>
                        <strong>Angular:</strong> Front-end development.
                        <ul>
                            <li>HTML</li>
                            <li>SCSS</li>
                            <li>Typescript</li>
                        </ul>
                    </li>
                    <li>
                        <strong>MongoDB:</strong> Database management.
                    </li>
                    <li>
                        <strong>Docker:</strong> Containerization for deployment.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Key Features</h2>
                <ul>
                    <li>
                        <strong>Rubric Creation and Modification:</strong> Empowering lecturers to
                        craft and adapt rubrics tailored to their specific needs.
                    </li>
                    <li>
                        <strong>Module Allocation:</strong> Assigning modules to markers and
                        lecturers, ensuring they have access only to relevant rubrics and
                        assignments.
                    </li>
                    <li>
                        <strong>Marking Rubrics:</strong> Streamlining the assignment marking
                        process by allowing markers to select and evaluate assignments, generate PDF
                        mark allocations with comments, and facilitate communication with students.
                    </li>
                    <li>
                        <strong>Analytics:</strong> Providing lecturers with insightful analytics
                        for each assignment, aiding in informed decision-making.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Usage</h2>
                <p>
                    <strong>Lecturer:</strong> Capable of user management, role assignment, module
                    allocation, rubric creation, and assignment marking.
                </p>
                <p>
                    <strong>Marker:</strong> Responsible for marking assignments based on assigned
                    rubrics.
                </p>
            </section>

            <section>
                <h2>Images of the project I am allowed to display:</h2>
                <p>
                    I do not have permission to display the actual program but I am allowed to show
                    the swagger I have set up for our API calls. All existing calls and data
                    management was done by me.
                </p>
                <div className='bfm-grid'>
                    <img src={bfm1} alt='BFM' />
                    <img src={bfm2} alt='BFM' />
                    <img src={bfm3} alt='BFM' />
                    <img src={bfm4} alt='BFM' />
                    <img src={bfm5} alt='BFM' />
                </div>
            </section>
        </div>
    );
}

function BFMProject() {
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

export default BFMProject;
