import "./Skills.css";
import { useTranslation } from "react-i18next";

const Skills = () => {
    const { t } = useTranslation();

    const skills = [
        { src: "./assets/Kotlin.png", name: "Kotlin" },
        { src: "./assets/React.png", name: "React" },
        { src: "./assets/AndroidStudio.png", name: "Android Studio" },
        { src: "./assets/Figma.png", name: "Figma" },
        { src: "./assets/Firebase.png", name: "Firebase" },
        { src: "./assets/Jetpack.png", name: "Jetpack Compose" },
        { src: "./assets/Postman.png", name: "Postman" },
        { src: "./assets/MacOs.png", name: "macOs" },
    ];

    return (
        <>
            <section className="skills">
                <div className="content">
                    <span className="title">{t("skills.title")}</span>
                    <div className="skills-container">
                        {skills.map((skill, index) => (
                            <img
                                key={index}
                                src={skill.src}
                                alt={`Technology: ${skill.name}`}
                                title={skill.name}
                                className="icon"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
};

export default Skills;
