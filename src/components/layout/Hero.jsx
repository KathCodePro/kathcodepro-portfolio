import "./Hero.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="hero" id="home">
                <div className="content">
                    <div className="text">
                        <span className="subtitle">{t("hero.greeting")}</span>
                        <div className="bubbleText">
                            <img className="bubble" src="./assets/bubbleGreen.png" alt="" aria-hidden="true" />
                            <span className="title">{t("hero.name")}</span>
                        </div>
                        <span className="subtitle">{t("hero.developer")}</span>
                    </div>
                    <div className="buttons-container">
                        <a className="animated-button" href="./CV Kathryn Palomo.pdf" download="CV Kathryn Palomo.pdf">
                            <svg viewBox="0 0 24 24" className="arr-2">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                            <span className="text">{t("hero.downloadCV")}</span>
                            <span className="circle"></span>
                            <svg viewBox="0 0 24 24" className="arr-1">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                        </a>

                        <a className="animated-button" href="mailto:kathcodepro@gmail.com">
                            <svg viewBox="0 0 24 24" className="arr-2">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                            <span className="text">{t("hero.contactMe")}</span>
                            <span className="circle"></span>
                            <svg viewBox="0 0 24 24" className="arr-1">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div className="image">
                        <img src="./assets/Photo.png" alt="Developer Photo" />
                    </div>
                </div>
                <div className="video-container">
                    <video src="./assets/typing.mp4" loop autoPlay muted aria-label="Typing animation in background" className="video" type="video/mp4"></video>
                </div>
            </section>
        </>
    );
};

export default Hero;