import React from 'react';
import './projects.css';
import TT from '../assets/Tune/TuneTherapy.pdf';
import TT1 from '../assets/Tune/TT1.png';
import TT2 from '../assets/Tune/TT2.png';
import TT3 from '../assets/Tune/TT3.png';

function Info() {
    return (
        <div className='container'>
            <h1>Honors Project - Tune Therapy</h1>

            <section>
                <h2>My Role: Game Developer & Embedded Systems Engineer</h2>
            </section>

            <section>
                <h2>Introduction</h2>
                <p>
                    This project encompasses the research, development, and implementation of a
                    serious game for dementia care that incorporates preferred music and music
                    therapy. The main objective of the project is to create an interactive game
                    environment where dementia patients or their caretakers can upload their own
                    songs and actively engage with the music using a custom-built controller
                    developed using Raspberry Pi. The game itself is built using the Godot game
                    engine, while the signal processing and analysis of preferred music files are
                    performed using Python and the Librosa library.
                </p>
            </section>

            <section>
                <h2>Languages and Software Used:</h2>
                <ul>
                    <li>
                        <strong>Godot</strong> - Game Development
                    </li>
                    <li>
                        <strong>Python</strong> - Preferred Music Script as well as Raspberry Pi
                        Scripts
                    </li>
                    <li>
                        <strong>Raspberry Pi</strong> - Controller Creation and Development
                    </li>
                </ul>
            </section>

            <section>
                <h2>Project Description</h2>
                <p>
                    The Honors project aims to explore the potential benefits of using preferred
                    music and music therapy in dementia care. The project is divided into the
                    following components:
                </p>
                <ul>
                    <li>
                        <strong>Research and Literature Review:</strong> A comprehensive review of
                        existing studies and literature on the impact of music on dementia patients,
                        including the effects of preferred music and music therapy.
                    </li>
                    <li>
                        <strong>Design and Development:</strong> The design and development phase
                        involves creating the game environment using the Godot game engine. The game
                        will allow patients to upload their own music, interact with the music
                        through the custom controller, and engage in various activities designed to
                        stimulate memory, cognition, and emotional well-being.
                    </li>
                    <li>
                        <strong>Custom Controller:</strong> A key aspect of the project is the
                        development of a custom controller using Raspberry Pi. This controller will
                        enable patients to clap along with the beat of the music, providing a
                        tangible and interactive experience. It is developed using Raspberry
                        {" Pi's"}. The central Pi acts as a server to which the others connect, when
                        the game starts and your Wi-Fi is connected to the central device then the
                        game will also automatically connect to the input from the controllers.
                    </li>
                    <li>
                        <strong>Signal Processing:</strong> Preferred music files uploaded by
                        patients will undergo signal processing using Python and the Librosa
                        library. This process will dissect the audio files, extract relevant
                        features, and interpret the signals to provide real-time feedback and adapt
                        the game environment to the {"patient's"} preferences.
                    </li>
                    <li>
                        <strong>Motivational Rainsurance:</strong> The game has been meticulously
                        crafted to eliminate errors, taking into account the sensitivity of the
                        target audience, ensuring players cannot fail. Player scores are recorded
                        discreetly, without display, serving as indicators. Periodically, a random
                        {"player's"} score is compared to the highest score, triggering a tailored
                        motivational voice clip based on their performance within three categories:
                        Excellent (75%-100% of notes hit), Good (50% to 75% of notes hit), and Needs
                        Improvement (below 50% of notes hit). This approach aims to prevent
                        discouragement in struggling players and effectively encourages them to
                        persist with the intervention.
                    </li>
                </ul>
                <p>
                    All code as well as research and preparation for this project can be found{' '}
                    <a href='https://github.com/LoftieFourie/Honours_Project'>HERE</a> on my GitHub.
                </p>
            </section>
            <section>
                <h2>Images of the project:</h2>
                <p>
                    Below are the three screens in the game, home screen, main game, and music
                    management screen. If you would like to see the poster I used to dementstrate my
                    project you can download it{' '}
                    <a href={TT} download='TuneTherapy.pdf'>
                        HERE
                    </a>
                    <div className='bfm-grid'>
                        <img src={TT1} alt='TT' />
                        <img src={TT2} alt='TT' />
                        <img src={TT3} alt='TT' />
                    </div>
                </p>
            </section>
        </div>
    );
}

function TuneProject() {
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
                <h1 className='title'>Tune Therapy</h1>
            </div>

            {/* Render the AmaProject component */}
            <Info />
        </div>
    );
}

export default TuneProject;
