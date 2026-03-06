import { useEffect, useRef } from "react";
import { FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../i18n/LanguageContext";

export default function ContactSection() {
  const cardRefs = useRef([]);
  const { t } = useLanguage();

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
              <form
                action="https://formsubmit.co/andrea.feliziani97@gmail.com"
                method="POST"
              >
                <input type="hidden" name="_captcha" value="false" />

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
                >
                  <span>{t("contact.send")}</span>
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
