import React from 'react';
import './exp.css';

function Info() {
    return (
        <div className='container'>
            <h1>APJ Automation - Mobile Development Experience</h1>

            <section>
                <h2>Introduction</h2>
                <p>
                    APJ Automation specializes in automation solutions for mining operations. I
                    joined the company as a part-time developer for a specific project. Our team
                    consisted of seven members initially, with four focused on backend development
                    and three, including myself, on frontend development. Our mission was to create
                    a mobile application based on the {"owner's"} specifications. We conducted
                    monthly progress checks and sprint planning meetings, which took place at{' '}
                    {"APJ's"}
                    offices in Pretoria.
                </p>
            </section>

            <section>
                <h2>My Role and Experience</h2>
                <p>
                    As a frontend developer, my journey began with the selection of a suitable
                    framework. After careful consideration, we collectively decided that Flutter
                    offered the most advantages, leading us to dive into learning Dart, the language
                    used with Flutter. Each month, we allocated tasks among team members, and we
                    dedicated our work weekends to tackling these assignments. If a task{' '}
                    {"couldn't"} be completed during the work weekend, we committed to working on it
                    in our free time. This experience honed my skills in prioritization,
                    problem-solving, time management, and team coordination. I regard this position
                    as one of my most valuable and challenging achievements, particularly during my
                    honors year when effective time management was pivotal.
                </p>
            </section>

            <section>
                <h2>Languages and Software I Gained Experience In</h2>
                <ul>
                    <li>
                        <strong>Flutter:</strong> A versatile framework for building cross-platform
                        mobile applications.
                    </li>
                    <li>
                        <strong>Dart:</strong> The programming language utilized within the Flutter
                        framework.
                    </li>
                </ul>
            </section>
        </div>
    );
}

function APJExp() {
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
                <h1 className='title'>APJ Automation</h1>
            </div>

            {/* Render the AmaProject component */}
            <Info />
        </div>
    );
}

export default APJExp;
