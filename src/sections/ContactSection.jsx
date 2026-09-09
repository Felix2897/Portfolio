import { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaExclamationCircle,
  FaPaperPlane,
  FaPhone,
  FaTimes,
} from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../i18n/LanguageContext";

export default function ContactSection() {
  const popupTimeoutRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState({ open: false, type: "success", message: "" });
  const { t, lang } = useLanguage();
  const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  useEffect(() => () => popupTimeoutRef.current && clearTimeout(popupTimeoutRef.current), []);

  const showPopup = (type, message) => {
    if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);
    setPopup({ open: true, type, message });
    popupTimeoutRef.current = setTimeout(() => setPopup((current) => ({ ...current, open: false })), 4500);
  };

  const closePopup = () => {
    if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);
    setPopup((current) => ({ ...current, open: false }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!web3FormsAccessKey) {
      showPopup("error", lang === "it" ? "Configura VITE_WEB3FORMS_ACCESS_KEY per attivare il form contatti." : "Set VITE_WEB3FORMS_ACCESS_KEY to enable the contact form.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", web3FormsAccessKey);
    formData.append("from_name", "Andrea Feliziani Portfolio");
    formData.append("replyto", formData.get("email") || "");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "Unable to send message.");
      form.reset();
      showPopup("success", lang === "it" ? "Messaggio inviato correttamente." : "Message sent successfully.");
    } catch (error) {
      showPopup("error", lang === "it" ? "Invio non riuscito. Riprova tra poco." : "Message could not be sent. Please try again shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="editorial-section editorial-contact">
      <div className="editorial-shell">
        <div className="editorial-contact-heading">
          <div>
            <span className="editorial-kicker">{t("contact.badge")}</span>
            <h2>{t("contact.title")}</h2>
          </div>
          <p>{lang === "it" ? "Hai un progetto in mente? Parliamone con calma." : "Have a project in mind? Let’s talk it through."}</p>
        </div>

        <div className="editorial-contact-grid">
          <div className="editorial-contact-details">
            <a className="editorial-contact-line" href="mailto:andrea.feliziani97@gmail.com">
              <span className="editorial-contact-icon"><FaEnvelope aria-hidden="true" /></span>
              <span><small>Email</small><strong>andrea.feliziani97@gmail.com</strong></span>
            </a>
            <a className="editorial-contact-line" href="tel:+393396443800">
              <span className="editorial-contact-icon editorial-contact-icon-secondary"><FaPhone aria-hidden="true" /></span>
              <span><small>{t("contact.phone")}</small><strong>+39 339 644 3800</strong></span>
            </a>
            <div className="editorial-contact-follow">
              <span>{lang === "it" ? "Seguimi" : "Follow me"}</span>
              <SocialLinks />
            </div>
          </div>

          <form className="editorial-contact-form" onSubmit={handleSubmit}>
            <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <label className="editorial-form-field editorial-form-field-wide">
              <span>{t("contact.emailLabel")}</span>
              <input type="email" id="email" name="email" required aria-required="true" />
            </label>
            <label className="editorial-form-field editorial-form-field-wide">
              <span>{t("contact.nameLabel")}</span>
              <input type="text" id="name" name="name" required aria-required="true" />
            </label>
            <label className="editorial-form-field editorial-form-field-wide">
              <span>{t("contact.subjectLabel")}</span>
              <input type="text" id="subject" name="subject" required aria-required="true" />
            </label>
            <label className="editorial-form-field editorial-form-field-wide">
              <span>{t("contact.messageLabel")}</span>
              <textarea id="message" name="message" rows="4" required aria-required="true" />
            </label>
            <button type="submit" className="editorial-button editorial-button-solid editorial-form-submit" disabled={isSubmitting} aria-busy={isSubmitting}>
              <span>{isSubmitting ? (lang === "it" ? "Invio..." : "Sending...") : t("contact.send")}</span>
              <FaPaperPlane aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      {popup.open && (
        <div className={`contact-popup contact-popup-${popup.type}`} role="status" aria-live="polite">
          <div className="contact-popup-icon" aria-hidden="true">{popup.type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />}</div>
          <div className="contact-popup-copy">
            <p className="contact-popup-title">{popup.type === "success" ? (lang === "it" ? "Messaggio inviato" : "Message sent") : (lang === "it" ? "Invio non riuscito" : "Sending failed")}</p>
            <p className="contact-popup-text">{popup.message}</p>
          </div>
          <button type="button" className="contact-popup-close" onClick={closePopup} aria-label={lang === "it" ? "Chiudi messaggio" : "Close message"}><FaTimes /></button>
        </div>
      )}
    </section>
  );
}
