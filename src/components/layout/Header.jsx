import "./Header.css";
import LanguageSwitch from "../LanguageSwitch";
import { useTranslation } from "react-i18next";

const Header = () => {
    const {t} = useTranslation();
    return (
            <header className="header">
                <div className="logo">
                    <img src="favicon.png" alt="KathCodePro logo" width="30"></img>
                    <h2 className="title">KathCodePro</h2>
                </div>
                <nav className="navbar">
                    <a href="#home">{t("header.home")}</a>
                    <a href="#about-me">{t("header.aboutMe")}</a>
                    <a href="#projects">{t("header.projects")}</a>
                    <a href="#contact-me">{t("header.contactMe")}</a>
                </nav>
                <LanguageSwitch/>
            </header>
    );
};

export default Header;