import "./Projects.css";
import MobileProject from "../MobileProject";
import { useTranslation } from "react-i18next";


const react = 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB';
const jetpack = 'https://img.shields.io/badge/Jetpack%20Compose-4285F4?style=for-the-badge&logo=Jetpack%20Compose&logoColor=white';
const kotlin = 'https://img.shields.io/badge/Kotlin-B125EA?style=for-the-badge&logo=kotlin&logoColor=white';
const firebase = 'https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black';

const tech1 = [
    { src: kotlin, name: "Kotlin" },
    { src: jetpack, name: "Jetpack Compose" },
    { src: firebase, name: "Firebase" }
];


const Projects = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="projects" id="projects">
                <div className="content">
                    <h3 className="title">
                        <span>{t("projects.title")}</span>
                    </h3>
                    <div className="elements">
                        <MobileProject
                            title={t("projects.project1.title")}
                            intro={t("projects.project1.intro")}
                            features_title={t("projects.project1.features_title")}
                            features={t("projects.project1.features", { returnObjects: true })}
                            images={[
                                "./assets/LoginApp.png",
                                "./assets/RegistroApp.png",
                                "./assets/PorAprobarApp.png",
                                "./assets/InventoryApp.png",
                                "./assets/AddToolApp.png",
                                "./assets/GestionApp.png",
                                "./assets/UsersApp.png",
                                "./assets/ModifyUserApp.png",
                                "./assets/ReportesApp.png",
                                "./assets/TransaccionesApp.png",
                            ]}
                            technologies={tech1}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;