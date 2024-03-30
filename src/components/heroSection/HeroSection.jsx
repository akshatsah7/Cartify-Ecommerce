import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prevImage => (prevImage % 8) + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <img
                className="h-44 lg:h-full"
                src={`../img/hero${currentImage}.png`}
                alt={`Hero ${currentImage}`}
            />
        </div>
    );
}

export default HeroSection;
