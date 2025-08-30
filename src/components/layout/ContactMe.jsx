import "./ContactMe.css";
import { useTranslation } from "react-i18next";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const ContactMe = () => {
    const { t } = useTranslation();
    const form = useRef();
    const sendMessage = (e) => {
        e.preventDefault();

        const templateParams = {
            name: form.current.name.value,
            email: form.current.email.value,
            message: form.current.message.value,
        };

        emailjs
            .send("service_1z5olrt", "template_khuvmgf", templateParams, {
                publicKey: "o5W_V0Vg4SglK_mV2",
            })
            .then(() => {
                alert(t("contactMe.successMessage"));
                form.current.reset();
            })
            .catch((error) => {
                console.log("Error sending message:", error.text);
                alert(t("contactMe.errorMessage"))
            });
    }

    return (
        <>
            <section className="contact-me" id="contact-me">
                <div className="content">
                    <h3 className="title">
                        <span>{t("contactMe.title")}</span>
                    </h3>

                    <div className="fields">
                        <form className="contact-form" ref={form} onSubmit={sendMessage}>
                            <div className="form-group">
                                <label htmlFor="name">{t("contactMe.name")}</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">{t("contactMe.email")}</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">{t("contactMe.message")}</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="button">{t("contactMe.send")}</button>
                            </div>
                        </form>
                    </div>
                    <div className="animation-container">
                        <DotLottieReact
                            src="./assets/contact us.lottie"
                            loop
                            autoplay
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactMe;