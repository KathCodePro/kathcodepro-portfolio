import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitch.css";

const languages = [
    { code: "en", lang: "English", img: "https://flagsapi.com/US/flat/64.png" },
    { code: "es", lang: "Español", img: "https://flagsapi.com/ES/flat/64.png" },
];

const LanguageSwitch = () => {

    const { i18n } = useTranslation();

    const [isLangMenuOpen, setLangMenuOpen] = useState(false);

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
    };

    const showLangMenu = () => { setLangMenuOpen(!isLangMenuOpen) };

    let currentLanguage = languages.find(language => language.code === i18n.language)

    return (
        <div className="lang-menu" >
            <div className="selector" onClick={showLangMenu}>
                <img src={currentLanguage.img} alt="Selected Flag" />
                {currentLanguage.lang}
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
            </div>
            <ul className={isLangMenuOpen ? "show" : "hide"}>
                {languages.map((lng) => {
                    return (
                        <li className={lng.code === i18n.language ? "selected" : ""}
                            key={lng.code}
                            onClick={(e) => {
                                e.stopPropagation();
                                changeLanguage(lng.code);
                                setLangMenuOpen(false);
                            }
                            }>
                            <img src={lng.img} alt="" />
                            <span >{lng.lang}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default LanguageSwitch