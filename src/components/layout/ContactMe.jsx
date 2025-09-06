import "./ContactMe.css";
import { useTranslation } from "react-i18next";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import emailjs from '@emailjs/browser';
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumber } from "libphonenumber-js/min";
import "react-phone-input-2/lib/style.css";
import { useRef, useState } from 'react';

const ContactMe = () => {
    const { t } = useTranslation();
    const form = useRef();
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true)

    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
        try {
            const phoneNumberWithPlus = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
            const parsed = parsePhoneNumber(phoneNumberWithPlus);
            return parsed?.isValid() || false;
        } catch (error) {
            return false;
        }

    }

    const sendMessage = (e) => {
        e.preventDefault();

        const templateParams = {
            name: form.current.name.value,
            phone: PhoneNumber,
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
                setPhoneNumber("");
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
                            <div className="phone-input phone-input-container">
                                <label htmlFor="phone">{t("contactMe.phone")}</label>
                                <PhoneInput country="us" value={PhoneNumber} onChange={handleChange} inputProps={{ required: false }} />
                                {!valid && <p className="error">Please enter a valid phone number.</p>}
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