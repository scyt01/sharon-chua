import { useEffect, useState } from "react";

// Each star has id, size, x, y, opacity, animationDuration
// Each meteor has id, size, x, y, delay, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);    

    useEffect(() => {
        generateStars();
        generateMeteors();

        // Adjust number of stars according to screen size
        const handleResize = () => {
            generateStars();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // empty dependency array means this effect runs once when the component mounts

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = [];

        for (let i=0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // generates star with size between 1 and 4 pixels
                x: Math.random() * 100, // generates random x position in our viewport from 0 to 100%
                y: Math.random() * 100, // generates random y position in our viewport from 0 to 100%
                opacity: Math.random() * 0.5 + 0.5, // generates random opacity between 0.5 and 1 (50% opacity to 100% opacity)
                animationDuration: Math.random() * 4 + 2, // generates random pulsating animation duration between 2 and 6 seconds
            });
        }

        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4
        const newMeteors = [];

        for (let i=0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1, // generates star with size between 1 and 3 pixels
                x: Math.random() * 100, // generates random x position in our viewport from 0 to 100%
                y: Math.random() * 20, // generates random y position in our viewport from 0 to 20%
                delay: Math.random() * 15, // generates random delay between 0 and 15 seconds
                animationDuration: Math.random() * 3 + 3, // generates random pulsating animation duration between 3 and 6 seconds
            });
        }

        setMeteors(newMeteors);
    };    

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + 'px',
                        height: star.size + 'px',
                        left: star.x + '%',
                        top: star.y + '%',
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + 's',
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 40 + 'px',
                        height: meteor.size * 1.5 + 'px',
                        left: meteor.x + '%',
                        top: meteor.y + '%',
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + 's',
                    }}
                />
            ))}
        </div>
    );
};