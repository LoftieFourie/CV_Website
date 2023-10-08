import React, { useState } from 'react';
import './skills.css';

function LanguageProgressBar() {
    const [languages] = useState([
        { language: 'Python', proficiency: 80, projects: ['Tune Theraphy'] },
        {
            language: 'JavaScript',
            proficiency: 75,
            projects: ['Portfolio Website', 'Fresha Findings'],
        },
        {
            language: 'CSS',
            proficiency: 75,
            projects: ['AMA', 'BFM', 'Portfolio Website', 'Fresha Findings'],
        },
        {
            language: 'HTML',
            proficiency: 80,
            projects: ['AMA', 'BFM', 'Portfolio Website', 'Fresha Findings'],
        },
        { language: 'Node.js', proficiency: 80, projects: ['AMA', 'BFM'] },
        { language: 'Godot', proficiency: 75, projects: ['Tune Theraphy'] },
        { language: 'Flutter', proficiency: 70, projects: ['VIPIN'] },
        { language: 'Dart', proficiency: 70, projects: ['VIPIN'] },
        { language: 'TypeScript', proficiency: 80, projects: ['AMA', 'BFM'] },
        { language: 'Go', proficiency: 65, projects: [] },
        { language: 'SQL', proficiency: 70, projects: [] },
        { language: 'Express.js', proficiency: 70, projects: [] },
        { language: 'Angular', proficiency: 80, projects: [] },
        { language: 'React', proficiency: 60, projects: [] },
        { language: 'CSharp', proficiency: 70, projects: [] },
        { language: 'C++', proficiency: 40, projects: [] },
        { language: 'Java', proficiency: 60, projects: [] },

        // Add more languages and projects as needed
    ]);

    return (
        <div>
            {languages.map((item) => (
                <div className='language-bar' key={item.language}>
                    <div className='language-info'>
                        <div className='language-name'>{item.language}</div>
                        <div className='progress-container'>
                            <div
                                className='progress-bar'
                                style={{ width: `${item.proficiency}%` }}
                            ></div>
                        </div>
                    </div>
                    <div className='project-list'>
                        {item.projects.map((project, index) => (
                            <span key={index} className='project-name'>
                                {project}
                                {index < item.projects.length - 1 && ', '}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function Info() {
    return (
        <div className='container'>
            <h1>Programming Languages and Frameworks</h1>

            <section>
                <p>
                    {"I've"} harbored a deep fascination for computers from an early age, which
                    inevitably led me down the path to IT. However, it was the moment I embarked on
                    my journey into programming that I truly felt a new world unfolding before me.
                    The act of creating, problem-solving, and conquering bugs became an exhilarating
                    experience I cherished. This passion propelled me beyond the confines of
                    university curriculum, encouraging me to explore various programming languages
                    and frameworks.
                </p>
            </section>

            <section>
                <p>
                    This exploration not only expanded my toolkit but also allowed me to approach
                    problems from fresh perspectives. I delved into a multitude of languages and
                    frameworks, honing my skills in those that resonated with me the most. While I
                    do find certain languages more enjoyable than others, {"I've"} found value in
                    each one {"I've"} worked with. If I have used the language on a project the
                    project name is also provided, these projects can be found under the projects
                    tab.
                </p>
            </section>

            <section>
                <h2>My Proficiency Levels:</h2>
                <LanguageProgressBar />
            </section>
        </div>
    );
}

function Languages() {
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
                <h1 className='title'>Coding Languages</h1>
            </div>

            {/* Render the AmaProject component */}
            <Info />
        </div>
    );
}

export default Languages;
