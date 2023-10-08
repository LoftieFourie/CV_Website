import React from 'react';
import './interests.css';

function Info() {
    return (
        <div className='container'>
            <h1>Arts</h1>

            <section>
                <p>
                    While I deeply appreciate the world of arts, I must admit that my own artistic
                    talents are somewhat limited. During my high school years, I {"didn't"} actively
                    participate in arts and culture activities, with the exception of a memorable
                    role in our grade 8 concert where I delivered two lines. This should give you a
                    sense of my artistic prowess.
                </p>
                <p>
                    However, my university years provided me with a couple of opportunities to dip
                    my toes into the realm of art and expression:
                </p>
            </section>

            <section>
                <h3>Canvas</h3>
                <p>
                    This annual university event assigns a common theme to each hostel, challenging
                    them to translate it into art. Hostels collaborate to design their artwork,
                    which is then painted in a single, overnight session—a truly unique and
                    immersive experience. Although my artistic skills were limited, I had the
                    privilege of contributing to the painting process.
                </p>
            </section>

            <section>
                <h3>Serenade</h3>
                <p>
                    Despite my limited vocal talents, I had the honor of joining the De Wilgers
                    serenade team in 2022. This is an annual acapella competition held at NWU,
                    involving year-round training and culminating in a second-semester competition.
                    It stands as one of {"NWU's"} major cultural events, and while I hold it dear to
                    my heart, I must admit that I prefer watching the performances rather than
                    actively participating. Due to unforeseen circumstances, our team was not able
                    to take part in the final event, but it is still a challenge I {"don't"} regret
                    taking.
                </p>
            </section>
        </div>
    );
}

function ArtsInt() {
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
                <h1 className='title'>Arts</h1>
            </div>

            {/* Render the AmaProject component */}
            <Info />
        </div>
    );
}

export default ArtsInt;
