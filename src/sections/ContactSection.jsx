import { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaExclamationCircle,
  FaPhone,
  FaPaperPlane,
  FaTimes,
} from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../i18n/LanguageContext";

export default function ContactSection() {
  const cardRefs = useRef([]);
  const popupTimeoutRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState({
    open: false,
    type: "success",
    message: "",
  });
  const { t, lang } = useLanguage();
  const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.2 },
    );
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (popupTimeoutRef.current) {
        clearTimeout(popupTimeoutRef.current);
      }
    };
  }, []);

  const showPopup = (type, message) => {
    if (popupTimeoutRef.current) {
      clearTimeout(popupTimeoutRef.current);
    }

    setPopup({ open: true, type, message });

    popupTimeoutRef.current = setTimeout(() => {
      setPopup((current) => ({ ...current, open: false }));
    }, 4500);
  };

  const closePopup = () => {
    if (popupTimeoutRef.current) {
      clearTimeout(popupTimeoutRef.current);
    }

    setPopup((current) => ({ ...current, open: false }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!web3FormsAccessKey) {
      showPopup(
        "error",
        lang === "it"
          ? "Configura VITE_WEB3FORMS_ACCESS_KEY per attivare il form contatti."
          : "Set VITE_WEB3FORMS_ACCESS_KEY to enable the contact form.",
      );
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", web3FormsAccessKey);
    formData.append("from_name", "Andrea Feliziani Portfolio");
    formData.append("replyto", formData.get("email") || "");

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send message.");
      }

      form.reset();
      showPopup(
        "success",
        lang === "it"
          ? "Messaggio inviato correttamente."
          : "Message sent successfully.",
      );
    } catch (error) {
      showPopup(
        "error",
        lang === "it"
          ? "Invio non riuscito. Riprova tra poco."
          : "Message could not be sent. Please try again shortly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader badge={t("contact.badge")} title={t("contact.title")} />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              <div className="glass-card contact-card">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="contact-title">Email</h3>
                  <p className="contact-text">andrea.feliziani97@gmail.com</p>
                </div>
              </div>

              <div className="glass-card contact-card">
                <div className="contact-icon contact-icon-secondary">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="contact-title">{t("contact.phone")}</h3>
                  <p className="contact-text">3396443800</p>
                </div>
              </div>

              <SocialLinks className="mt-6" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div
              ref={(el) => (cardRefs.current[1] = el)}
              className="glass-card"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              <form onSubmit={handleSubmit}>
                <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />

                <div className="mb-6">
                  <label htmlFor="name" className="form-label block mb-2">
                    {t("contact.nameLabel")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="custom-input w-full"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="form-label block mb-2">
                    {t("contact.emailLabel")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="custom-input w-full"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="form-label block mb-2">
                    {t("contact.subjectLabel")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="custom-input w-full"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="form-label block mb-2">
                    {t("contact.messageLabel")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="custom-input w-full"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full flex justify-center"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  <span>{isSubmitting ? (lang === "it" ? "Invio..." : "Sending...") : t("contact.send")}</span>
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {popup.open && (
        <div
          className={`contact-popup contact-popup-${popup.type}`}
          role="status"
          aria-live="polite"
        >
          <div className="contact-popup-icon" aria-hidden="true">
            {popup.type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />}
          </div>
          <div className="contact-popup-copy">
            <p className="contact-popup-title">
              {popup.type === "success"
                ? lang === "it"
                  ? "Messaggio inviato"
                  : "Message sent"
                : lang === "it"
                  ? "Invio non riuscito"
                  : "Sending failed"}
            </p>
            <p className="contact-popup-text">{popup.message}</p>
          </div>
          <button
            type="button"
            className="contact-popup-close"
            onClick={closePopup}
            aria-label={lang === "it" ? "Chiudi messaggio" : "Close message"}
          >
            <FaTimes />
          </button>
        </div>
      )}
    </section>
  );
}
