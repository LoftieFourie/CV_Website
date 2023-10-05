import React, { useState } from 'react';
import './cards.css'; // Import your component-specific CSS file

function CardComponent() {
    const [activeCard, setActiveCard] = useState('all');

    const handleCardClick = (cardName) => {
        if (activeCard === cardName) {
            // If the clicked card is already active, deactivate it
            setActiveCard('all');
        } else {
            // Otherwise, set the clicked card as active
            setActiveCard(cardName);
        }
    };

    console.log('Active Card:', activeCard); // Add this for debugging

    const cardsData = [
        {
            name: 'Experience',
            content: 'Relevant work experiences obtained during my academic journey.',
            data: [{ name: 'linxA/S' }, { name: 'APJ Automation' }],
        },
        {
            name: 'Projects',
            content:
                'An array of projects, both collaborative and solo, showcasing my practical skills and creativity.',
            data: [
                { name: 'AMA', role: 'Full Stack' },
                { name: 'Tune Theraphy', role: 'Game Developer & Embedded Systems Engineer' },
                { name: 'VIPIN', role: 'Front End' },
                { name: 'BFM', role: 'Full Stack' },
                { name: 'Fresha Findings', role: 'Full stack' },
                { name: 'Portfolio Website', role: 'Front End' },
            ],
        },
        {
            name: 'Interests',
            content: 'A glimpse into my personal interests and hobbies beyond academia and work.',
            data: [{ name: 'Sports' }, { name: 'Arts' }, { name: 'Games' }],
        },
        {
            name: 'Skills',
            content:
                'A showcase of my acquired skills and noteworthy achievements, acquired through education and self-directed learning.',
            data: [{ name: 'Languages' }, { name: 'Certificates and Achievements' }],
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
            <div className='additional-cards-container'>
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
                                <h3>{subCard.name}</h3>
                                {subCard.role && <p>{subCard.role}</p>}
                            </div>
                        )),
                )}
            </div>
        </div>
    );
}

export default CardComponent;
