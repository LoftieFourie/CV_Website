import React from 'react';
import './projects.css';
import { Link } from 'react-router-dom';

function Info() {
    return (
        <div className='container'>
            <h1>Portfolio Website</h1>

            <section>
                <h2>My Role: Solo Frontend Developer</h2>
            </section>

            <section>
                <h2>Introduction</h2>
                <p>
                    This portfolio {"isn't"} just a showcase of my relevant skills, experience, and
                    achievements; {"it's"} also a journey of personal growth. While {"I've "}
                    previously worked with traditional web development, Angular, and various other
                    technologies, I saw this as an opportunity to expand my horizons by delving into
                    React development. Beyond simply displaying my work, this website acts as a
                    central hub where I can provide in-depth insights into my projects.
                    Additionally, it allows me to share details about projects that, while not
                    publicly accessible, have been significant milestones in my career.
                </p>
            </section>

            <section>
                <h2>Languages and Software Used</h2>
                <ul>
                    <li>
                        <strong>React:</strong> Front-End Development.
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section>
                <h2>Key Features</h2>
                <ul>
                    <li>
                        <strong>Home Page:</strong> The Home Page serves as a comprehensive
                        introduction to me, providing essential details on the left side such as a
                        brief bio, social media links, and contact information, along with a
                        convenient button to download my current CV. On the right side, {"you'll"}{' '}
                        find different tabs for various sections, including {'"Experience"'}{' '}
                        (highlighting my work history),{'"Projects"'} (showcasing my individual,
                        collaborative, and professional projects), {'"Interests"'} (offering
                        insights into my personal hobbies and passions), and
                        {' "Skills and Achievements"'} (listing my programming proficiency and
                        significant life accomplishments).
                    </li>
                    <li>
                        <strong>Experience Views:</strong> Each job experience is presented on its
                        dedicated page, offering a detailed account of my role at the company and
                        the experience {"I've"} gained.
                    </li>
                    <li>
                        <strong>Project Views:</strong> For a deeper dive into my projects, each one
                        is presented on its own page, accompanied by an in-depth description.
                    </li>
                    <li>
                        <strong>Interest Views:</strong> My interests are categorized into Sports,
                        Arts, and Games, each with its own dedicated page providing a more profound
                        look into my personal interests and pursuits.
                    </li>
                    <li>
                        <strong>Skills and Achievement Views:</strong> In this section, you can
                        explore the coding languages I am proficient in, complete with links to
                        relevant projects where {"I've"} applied them. Additionally, {"you'll"} find
                        a section highlighting my certificates and achievements, including completed
                        courses and attained degrees, all of which underscore my ongoing growth and
                        relevant accomplishments.
                    </li>
                </ul>
                <p>
                    All code as well as research and preparation for this project can be found{' '}
                    <a href='https://github.com/LoftieFourie/CV_Website'>HERE</a> on my GitHub.
                </p>
            </section>
        </div>
    );
}

function PortfolioProject() {
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

export default PortfolioProject;
