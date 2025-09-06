import OrbitAnimation from "../OrbitAnimation";
import "./AboutMe.css";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

const AboutMe = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);

    const messages = [
        { key: "aboutMe.first" },
        { key: "aboutMe.second" },
        { key: "aboutMe.third" },
        { key: "aboutMe.fourth" }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <>
            <section className="about-me" id="about-me" ref={sectionRef}>
                <div className="content">
                    <h3 className="title">
                        <span>{t("aboutMe.aboutme")}</span>
                    </h3>
                    <div className="messages-wrapper">
                        {messages.map((message, index) => (
                            <div key={index} className="message-container">
                                <div className="top-message">
                                    <div className="icon-title">
                                        <img src="./assets/IMessage_logo.svg" alt="iMessages Icon" />
                                        <span className="message-title">MESSAGES</span>
                                    </div>
                                    <span className="message-time">{t("aboutMe.messageTime")}</span>
                                </div>
                                <p>{t(message.key)}</p>
                            </div>
                        ))}
                    </div>
                    <div className="technologies-wrapper">
                        <div className="technologies">
                            <OrbitAnimation />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe;