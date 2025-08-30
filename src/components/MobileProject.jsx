import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useRef } from 'react';
import "./MobileProject.css";

const MobileProject = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('next');
    const carouselRef = useRef(null);

    const totalImages = props.images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, totalImages]);

    const goToPrev = () => {
        setDirection('prev');
        setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
    };

    const goToNext = () => {
        setDirection('next');
        setCurrentIndex((prev) => (prev + 1) % totalImages);
    };

    return (
        <div className="project">

            <div className="device-container">
                <button className="carousel-btn prev" onClick={goToPrev} aria-label="Previous Image">
                    <img src="./assets/left-chevron.png" alt="Left Arrow" />
                </button>
                <div className="phone-container">
                    <img src="./assets/smartphone-frame.png" alt="Phone Frame" className="phone-frame" />
                    <div className="carousel-container">
                        <div className="carousel-track" ref={carouselRef}>
                            {props.images.map((imgSrc, index) => {
                                let position = '';
                                const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
                                const nextIndex = (currentIndex + 1) % totalImages;

                                if (index === currentIndex) {
                                    position = 'current';
                                } else if (direction === 'next' && index === prevIndex) {
                                    position = 'exit-left';
                                } else if (direction === 'prev' && index === nextIndex) {
                                    position = 'exit-right';
                                } else if (direction === 'next' && index === nextIndex) {
                                    position = 'enter-right';
                                } else if (direction === 'prev' && index === prevIndex) {
                                    position = 'enter-left';
                                } else {
                                    position = 'hidden';
                                }

                                return (
                                    <div
                                        key={index}
                                        className={`carousel-slide slide-${position}`}
                                    >
                                        <img src={imgSrc} alt={`App screen ${index + 1}`} className="carousel-image" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <button className="carousel-btn next" onClick={goToNext} aria-label="Next Image">
                    <img src="./assets/right-chevron.png" alt="Right Arrow" />
                </button>

            </div>

            <div className="description">
                <h4 className="subtitle">{props.title}</h4>
                <p className="text">{props.intro}</p>
                <p className="features">{props.features_title}</p>
                <ul>
                    {props.features.map((feature, index) => (
                        <li key={index} className="text">
                            {feature}
                        </li>
                    ))}
                </ul>
                <div className="technologies">
                    {props.technologies.map((tech, index) => (
                        <img
                            key={index}
                            src={tech.src}
                            alt={`Technology: ${tech.name}`}
                            title={tech.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileProject;