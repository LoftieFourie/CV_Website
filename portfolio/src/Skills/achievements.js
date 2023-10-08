import React from 'react';
import './skills.css';
import gk from '../assets/GK.png';
import Python from '../assets/Python.png';
import Go from '../assets/Go.png';

function Info() {
    return (
        <div className='container'>
            <h2>Achievements</h2>

            <h3>Leadership</h3>
            <p>
                Throughout my educational journey, {"I've"} actively taken on leadership roles. In
                high school, I served on leadership committees, and my portfolio included sports
                management. This leadership spirit continued during my time at De Wilgers {"Men's"}
                Residence, where I held a position on the House Committee from 2020 to 2021. In this
                role, I managed various responsibilities, including overseeing hostel media,
                maintaining records of activities, and handling recruitment duties, such as school
                visits, sporting events, and our {"university's"} open day.
            </p>

            <h3>Academic</h3>
            <p>
                My commitment to excellence in academics led to my membership in the Golden Key
                Honor Society in 2021—a testament to my dedication and hard work. Additionally, I
                proudly earned my BSc IT degree in 2022 and am currently on the verge of completing
                my BSc Honors in Computer Science and Information Systems in 2023.
            </p>
            <section>
                <img src={gk} alt='Golden Key Proof' className='gk-image' />
            </section>

            <h3>Certificates</h3>
            <p>
                I have a passion for continuous learning, utilizing not only university resources
                but also external platforms to expand my knowledge. Presently, I am actively engaged
                in courses on Udemy, covering a wide range of topics, including Node.js, MongoDB,
                Express.js, Raspberry Pi, Arduino, and Flutter. Additionally, I leverage SoloLearn
                to reinforce my understanding of programming languages. While I may consider myself
                proficient, revisiting the basics is always beneficial. Below, {"you'll"} find
                certificates {"I've"} earned through SoloLearn.
            </p>
            <section>
                <div className='certificate-grid'>
                    <img src={Python} alt='Python' />
                    <img src={Go} alt='Go' />
                </div>
            </section>

            {/* Include your certificates here */}
        </div>
    );
}
function AchievementsSkills() {
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
                <h1 className='title'>Achievements</h1>
            </div>

            {/* Render the AmaProject component */}
            <Info />
        </div>
    );
}

export default AchievementsSkills;
