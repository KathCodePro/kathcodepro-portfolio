import "./Hero.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="hero" id="home">
                <div className="content">
                    <h3 className="text">
                        <span className="subtitle">{t("hero.greeting")}</span>
                        <div className="bubbleText">
                            <img className="bubble" src="./assets/bubbleGreen.png" alt="" aria-hidden="true" />
                            <span className="title">{t("hero.name")}</span>
                        </div>
                        <span className="subtitle">{t("hero.developer")}</span>
                    </h3>
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