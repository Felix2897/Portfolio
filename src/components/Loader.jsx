import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Loader({ onComplete }) {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 1500);
    const t2 = setTimeout(() => {
      setGone(true);
      onComplete?.();
    }, 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  if (gone) return null;

  return (
    <div className={`loader ${hidden ? "hidden" : ""}`} role="status" aria-label="Loading">
      <div className="flex flex-col items-center" aria-hidden="true">
        <div className="mb-6">
          <Logo size="lg" />
        </div>
        <div className="loader-bar-container">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
}
