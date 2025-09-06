import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "en",
    resources: {
        en: {
            translation: {
                header: {
                    home: "Home",
                    aboutMe: "About Me",
                    projects: "Projects",
                    contactMe: "Contact Me",
                },
                hero: {
                    greeting: "Hi There!",
                    name: "I'm Kathryn Palomo",
                    developer: "Mobile Developer",
                    downloadCV: "Download CV",
                    contactMe: "E-mail Me"
                },
                aboutMe: {
                    aboutme: "About Me",
                    first: "I'm a Mechanical Engineer who's made the exciting pivot into software development, bringing 6 years of experience in project and team leadership with me.",
                    second: "I thrive on building efficient and user-friendly applications, primarily focusing on Kotlin development.",
                    third: "You'll find me adept with MVVM and Jetpack Compose, and comfortable with tools like Git, Firebase, REST APIs, and Dagger Hilt.",
                    fourth: "I'm constantly learning and always looking for the next challenge.",
                    messageTime: "now",
                },
                skills: {
                    title: "Skills & Tools",
                },
                projects: {
                    title: "Projects",
                    project1: {
                        title: "Inventory Management App",
                        intro: "Application designed for the management of tool and machinery inventory on construction sites. Intuitive design for use especially by technical personnel.",
                        features_title: "Main Features:",
                        features: [
                            "Interface for administrators, warehouse staff, technicians, and operators.",
                            "Real-time inventory visualization, including location, project, and responsible technician.",
                            "Requests for material withdrawal and delivery, subject to approval.",
                            "Real-time reports of tools outside the warehouse, assignments, and transactions."
                        ]
                    },
                },
                contactMe: {
                    title: "Contact Me",
                    name: "Name",
                    phone: "Phone Number (Optional)",
                    email: "E-mail",
                    message: "Message",
                    send: "Send",
                    errorMessage: "There was an error, please try again later",
                    successMessage: "Your message was sent!"
                }
            },
        },
        es: {
            translation: {
                header: {
                    home: "Inicio",
                    aboutMe: "Sobre Mi",
                    projects: "Proyectos",
                    contactMe: "Contactame",
                },
                hero: {
                    greeting: "¡Hola!",
                    name: "Soy Kathryn Palomo",
                    developer: "Desarrolladora Móvil",
                    downloadCV: "Descargar CV",
                    contactMe: "Enviame un E-mail"
                },
                aboutMe: {
                    aboutme: "Sobre Mi",
                    first: "Tras perfeccionar mis habilidades en gestión de proyectos durante mis 6 años de experiencia como ingeniero mecánico, decidi realizar un cambio al area de desarrollo de software, persiguiendo lo que verdaderamente me apasiona.",
                    second: "Me entusiasma crear aplicaciones eficientes y amigables con los usuarios. Por esa razon me he centrado principalmente en el desarrollo de aplicaciones con Kotlin.",
                    third: "Me he interesado por las ultimas tecnologias como Jetpack Compose y suelo trabajar con arquitecturas como MVVM. Me siento cómoda con herramientas como Git, Firebase, REST APIs y Dagger Hilt.",
                    fourth: "Actualmente me encuentro desarrollando nuevos conocimientos en areas como React Native y Kotlin Multiplataforma.",
                    messageTime: "ahora",
                },
                skills: {
                    title: "Lenguajes y Herramientas",
                },
                projects: {
                    title: "Proyectos",
                    project1: {
                        title: "Aplicación de Gestión de Inventario",
                        intro: "Aplicación diseñada para la gestión de inventario de herramientas y maquinarias en obras de construcción. Diseño intuitivo para su uso especialmente por el personal técnico.",
                        features_title: "Principales características:",
                        features: [
                            "Interfaz para administradores, almacenistas, técnicos y operadores.",
                            "Visualización del inventario en tiempo real, con ubicación, proyecto y técnico responsable.",
                            "Solicitudes de retiro y entrega de material, sujetas a aprobación.",
                            "Reportes en tiempo real de herramientas fuera de almacén, asignaciones y transacciones.",
                        ]
                    }
                },
                contactMe: {
                    title: "Contactame",
                    name: "Nombre",
                    phone: "Telefono (Opcional)",
                    email: "Correo",
                    message: "Mensaje",
                    send: "Enviar",
                    fillAllFields: "Por favor, rellena todos los campos.",
                    errorMessage: "Se presento un error, intenta mas tarde.",
                    successMessage: "Tu mensaje fue enviado!"
                }
            },
        },
    },
});

export default i18n;