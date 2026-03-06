import { Link } from "react-router-dom";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    { label: t("nav.home"), href: "/#home" },
    { label: t("nav.about"), href: "/#about" },
    { label: t("nav.portfolio"), href: "/#portfolio" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6">
          <div className="flex items-center gap-3">
            <Link to="/">
              <Logo size="sm" />
            </Link>
            <p
              className="text-[var(--color-text-main)] font-semibold m-0"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Andrea Feliziani
            </p>
          </div>

          <div className="flex gap-6">
            {footerLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] text-sm"
              >
                {label}
              </a>
            ))}
          </div>

          <SocialLinks />
        </div>

        <div className="text-center pt-6 border-t border-[var(--color-border-glass)]">
          <p className="text-[var(--color-text-muted)] text-sm m-0">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
