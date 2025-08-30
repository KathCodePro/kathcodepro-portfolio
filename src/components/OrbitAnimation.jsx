import React, { useEffect, useRef } from 'react';
import './OrbitAnimation.css';

const OrbitAnimation = () => {
    const orbitRef = useRef(null);

    useEffect(() => {
        const orbit = orbitRef.current;
        if (!orbit) return;

        let animationId;
        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = (elapsed % 16000) / 16000;
            const images = orbit.querySelectorAll('.orbit-image');
            
            const baseAngle = progress * 360;

            images.forEach((img, index) => {
                // Each image spaced by 120°
                const angle = (baseAngle + index * 120);
                
                const radians = (angle * Math.PI) / 180;
                const radius = 115; // Must match your translateX(115px)

                const x = Math.cos(radians) * radius;
                const y = Math.sin(radians) * radius;

                img.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
            });

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, []);

    return (
        <div className="orbit-container">
            <div className="orbit-wrapper">
                <div className="orbit-center">
                    <div className="center-dot"></div>
                </div>
                <div ref={orbitRef} className="orbit-path">
                    <img
                        src="./assets/Web.png"
                        alt="Web Image"
                        className="orbit-image"
                    />
                    <img
                        src="./assets/Android.png"
                        alt="Android Image"
                        className="orbit-image"
                    />
                    <img
                        src="./assets/iOs.png"
                        alt="iOs Image"
                        className="orbit-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default OrbitAnimation;