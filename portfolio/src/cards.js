import React, { useState, useEffect } from 'react';
import './cards.css';
import { Link } from 'react-router-dom';

function CardComponent() {
    const [activeCard, setActiveCard] = useState('all');
    const [showAdditionalCards, setShowAdditionalCards] = useState(false);

    const handleCardClick = (cardName) => {
        if (activeCard === cardName) {
            // If the clicked card is already active, deactivate it
            setActiveCard('all');
            setShowAdditionalCards(false);
        } else {
            // Otherwise, set the clicked card as active
            setActiveCard(cardName);
            setShowAdditionalCards(false); // Reset the additional cards visibility
        }
    };

    useEffect(() => {
        if (activeCard !== 'all') {
            // Wait for a short delay before showing additional cards
            const delayTimeout = setTimeout(() => {
                setShowAdditionalCards(true);
            }, 500); // Adjust the delay time as needed

            return () => clearTimeout(delayTimeout);
        } else {
            setShowAdditionalCards(false);
        }
    }, [activeCard]);

    console.log('Active Card:', activeCard); // Add this for debugging

    const cardsData = [
        {
            name: 'Experience',
            content: 'Relevant work experiences obtained during my academic journey.',
            data: [
                { name: 'LinxA/S', route: 'Linx', parent: 'experience' },
                { name: 'APJ Automation', route: 'APJ-Automation', parent: 'experience' },
            ],
        },
        {
            name: 'Projects',
            content:
                'An array of projects, both collaborative and solo, showcasing my practical skills and creativity.',
            data: [
                { name: 'AMA', role: 'Full Stack', route: 'AMA', parent: 'projects' },
                {
                    name: 'Tune Therapy',
                    role: 'Game Developer & Embedded Systems Engineer',
                    route: 'Tune-Therapy',
                    parent: 'projects',
                },
                { name: 'VIPIN', role: 'Front End', route: 'VIPIN', parent: 'projects' },
                { name: 'BFM', role: 'Full Stack', route: 'BFM', parent: 'projects' },
                {
                    name: 'Fresha Findings',
                    role: 'Full stack',
                    route: 'Fresha-Findings',
                    parent: 'projects',
                },
                {
                    name: 'Portfolio Website',
                    role: 'Front End',
                    route: 'Portfolio-Website',
                    parent: 'projects',
                },
            ],
        },
        {
            name: 'Interests',
            content: 'A glimpse into my personal interests and hobbies beyond academia and work.',
            data: [
                { name: 'Sports', route: 'Sports', parent: 'interests' },
                { name: 'Arts', route: 'Arts', parent: 'interests' },
            ],
        },
        {
            name: 'Skills',
            content:
                'A showcase of my acquired skills and noteworthy achievements, acquired through education and self-directed learning.',
            data: [
                { name: 'Languages', route: 'Languages', parent: 'skills' },
                { name: 'Certificates and Achievements', route: 'Achievements', parent: 'skills' },
            ],
        },
    ];

    return (
        <div className='right-column'>
            {cardsData.map((card) => (
                <div
                    key={card.name}
                    className={`card ${
                        activeCard === 'all'
                            ? 'active-card'
                            : activeCard === card.name
                            ? 'selected-card'
                            : 'hidden-card'
                    }`}
                    onClick={() => handleCardClick(card.name)}
                >
                    <h2>{card.name}</h2>
                    {activeCard === card.name && (
                        <>
                            <p>{card.content}</p>
                        </>
                    )}
                </div>
            ))}

            {/* Container for Additional Cards */}

            {showAdditionalCards && (
                <div className='active-additional-card'>
                    {cardsData.map(
                        (card) =>
                            activeCard === card.name &&
                            card.data &&
                            card.data.map((subCard) => (
                                <div
                                    key={subCard.name}
                                    className={`additional-card ${
                                        activeCard === card.name ? 'active-additional-card' : ''
                                    }`}
                                >
                                    <Link
                                        to={`/${subCard.parent}/${subCard.route.toLowerCase()}`}
                                        className='link-as-text'
                                    >
                                        <h3>{subCard.name}</h3>
                                        {subCard.role && <p>{subCard.role}</p>}
                                    </Link>
                                </div>
                            )),
                    )}
                </div>
            )}
        </div>
    );
}

export default CardComponent;
