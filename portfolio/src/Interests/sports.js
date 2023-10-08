import React from 'react';
import './interests.css';

function Info() {
    return (
        <div className='container'>
            <h1>Sports</h1>

            <section>
                <p>
                    From a young age, {"I've"} had a deep passion for staying active and engaged in
                    sports. While the number of sports I participate in has reduced over time due to
                    constraints, my love for certain sports remains unwavering. Below is a list of
                    sports that have been a significant part of my life, either in the past or as
                    ongoing sources of enjoyment.
                </p>
            </section>

            <section>
                <h3>Rugby</h3>
                <p>
                    Rugby has been a consistent part of my life since childhood, with uninterrupted
                    participation even during my university years. I had the honor of serving as the
                    team captain for my {"school's"} 1st team in matric. During my university days,
                    I continued to play for the sheer love of the sport, representing my hostel
                    team. Unfortunately, the COVID-19 pandemic and the demands of my honours year
                    temporarily halted my active participation, but my passion for rugby remains
                    undiminished, and I continue to be an avid supporter.
                </p>
            </section>

            <section>
                <h3>Tennis</h3>
                <p>
                    I consider tennis a sport with enduring appeal, one that {"I've"} been fortunate
                    to engage in from a young age. I played for my school team and progressed to the
                    first team in my later years. While I continued playing for my hostel during my
                    first year of university, my involvement has since become more sporadic, limited
                    to social matches whenever time permits.
                </p>
            </section>

            <section>
                <h3>Golf</h3>
                <p>
                    Golf is a guilty pleasure of mine, and {"I've"} competed in it competitively
                    during my school years, proudly representing our first team during my final
                    years. These days, my involvement in golf is primarily social, and I relish the
                    opportunity to play with friends whenever I can.
                </p>
            </section>

            <section>
                <h3>Squash</h3>
                <p>
                    While {"I've"} never pursued squash competitively, {"I've"} always found it
                    immensely enjoyable. My introduction to squash came during high school,
                    primarily as a means of cardio training, but it quickly evolved into a sport I
                    genuinely enjoy due to its sheer fun factor.
                </p>
            </section>
        </div>
    );
}

function SportsInt() {
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
                <h1 className='title'>Sports</h1>
            </div>

            {/* Render the AmaProject component */}
            <Info />
        </div>
    );
}

export default SportsInt;
