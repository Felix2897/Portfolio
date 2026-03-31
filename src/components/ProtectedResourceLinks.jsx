import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function ProtectedResourceLinks({ storageKey, resources, showStatus = true }) {
  const [email, setEmail] = useState("");
  const [savedEmail, setSavedEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [pendingResourceUrl, setPendingResourceUrl] = useState("");
  const { t } = useLanguage();

  useEffect(() => {
    const storedEmail = window.localStorage.getItem(storageKey);
    if (!storedEmail) return;
    setSavedEmail(storedEmail);
    setEmail(storedEmail);
  }, [storageKey]);

  useEffect(() => {
    if (!isAccessModalOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsAccessModalOpen(false);
        setEmailError("");
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isAccessModalOpen]);

  const openProtectedResource = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleProtectedResourceClick = (url) => {
    if (savedEmail) {
      openProtectedResource(url);
      return;
    }

    setPendingResourceUrl(url);
    setIsAccessModalOpen(true);
  };

  const handleUnlockDocs = (e) => {
    e.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);

    if (!isValidEmail) {
      setEmailError(t("project.emailInvalid"));
      return;
    }

    window.localStorage.setItem(storageKey, normalizedEmail);
    setSavedEmail(normalizedEmail);
    setEmail(normalizedEmail);
    setEmailError("");
    setIsAccessModalOpen(false);

    if (pendingResourceUrl) {
      openProtectedResource(pendingResourceUrl);
      setPendingResourceUrl("");
    }
  };

  const handleResetAccess = () => {
    window.localStorage.removeItem(storageKey);
    setSavedEmail("");
    setEmail("");
    setEmailError("");
    setPendingResourceUrl("");
  };

  const handleCloseModal = () => {
    setIsAccessModalOpen(false);
    setEmailError("");
    setPendingResourceUrl("");
  };

  const modalContent =
    isAccessModalOpen && typeof document !== "undefined"
      ? createPortal(
        <div
          className="project-access-modal-backdrop"
          onClick={handleCloseModal}
        >
          <div
            className="project-access-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${storageKey}-access-modal-title`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="project-access-modal-close"
              onClick={handleCloseModal}
              aria-label={t("project.closeModal")}
            >
              ×
            </button>

            <div className="project-access-copy">
              <p
                id={`${storageKey}-access-modal-title`}
                className="project-access-title"
              >
                {t("project.emailGateTitle")}
              </p>
              <p className="project-access-helper">
                {t("project.emailGateDescription")}
              </p>
            </div>

            <form
              className="project-access-gate"
              onSubmit={handleUnlockDocs}
              noValidate
            >
              <div className="project-access-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                  placeholder={t("project.emailPlaceholder")}
                  className={`project-access-input ${emailError ? "is-invalid" : ""}`}
                  autoComplete="email"
                  inputMode="email"
                  aria-label={t("project.emailPlaceholder")}
                  aria-invalid={emailError ? "true" : "false"}
                  aria-describedby={emailError ? `${storageKey}-access-error` : undefined}
                  autoFocus
                />
                <button type="submit" className="btn btn-primary">
                  {t("project.unlockAccess")}
                </button>
              </div>

              {emailError ? (
                <p
                  id={`${storageKey}-access-error`}
                  className="project-access-error"
                >
                  {emailError}
                </p>
              ) : null}
            </form>
          </div>
        </div>
        ,
        document.body,
      )
      : null;

  return (
    <>
      <div className="flex justify-center gap-4 flex-wrap">
        {resources.map(({ href, label, icon: Icon, variant = "primary" }) => (
          <button
            key={href}
            type="button"
            className={`btn ${variant === "outline" ? "btn-outline" : "btn-primary"}`}
            onClick={() => handleProtectedResourceClick(href)}
          >
            <Icon />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {showStatus && savedEmail ? (
        <div className="project-access-unlocked">
          <p className="project-access-success">
            {t("project.accessGranted")} <strong>{savedEmail}</strong>
          </p>
          <button
            type="button"
            className="project-access-reset"
            onClick={handleResetAccess}
          >
            {t("project.changeEmail")}
          </button>
        </div>
      ) : null}

      {modalContent}
    </>
  );
}
