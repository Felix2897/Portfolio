import { useEffect, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHandPaper,
  FaLayerGroup,
} from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function MaterialLab({ images, altBase, compact = false }) {
  const { t } = useLanguage();
  const [shape, setShape] = useState(compact ? 42 : 58);
  const [activeIndex, setActiveIndex] = useState(0);
  const [orbit, setOrbit] = useState({ x: -4, y: -12 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);
  const orbitRef = useRef(orbit);
  const frameRef = useRef(0);

  useEffect(() => {
    return () => {
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const queueOrbitUpdate = (nextOrbit) => {
    orbitRef.current = nextOrbit;
    if (frameRef.current) return;

    frameRef.current = window.requestAnimationFrame(() => {
      setOrbit(orbitRef.current);
      frameRef.current = 0;
    });
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startOrbit: orbitRef.current,
    };
    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const nextOrbit = {
      x: clamp(drag.startOrbit.x + (event.clientY - drag.startY) * -0.12, -24, 24),
      y: clamp(drag.startOrbit.y + (event.clientX - drag.startX) * 0.16, -42, 42),
    };
    queueOrbitUpdate(nextOrbit);
  };

  const endDrag = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragRef.current = null;
    setIsDragging(false);
  };

  const goTo = (direction) => {
    setActiveIndex((current) => (current + direction + images.length) % images.length);
  };

  return (
    <div className={`material-lab ${compact ? "is-compact" : ""}`.trim()}>
      <div className="material-lab-heading">
        <div>
          <h3 className="material-lab-title" style={{ fontFamily: "var(--font-display)" }}>
            {compact ? t("study.materialLab") : t("study.materialTitle")}
          </h3>
          <p className="material-lab-description">
            {compact ? t("study.materialDrag") : t("study.materialDesc")}
          </p>
        </div>
        <span className="material-lab-mark">
          <FaLayerGroup aria-hidden="true" />
          {t("study.materialLab")}
        </span>
      </div>

      <div
        className={`material-lab-stage ${isDragging ? "is-dragging" : ""}`.trim()}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        aria-label={t("study.materialStageLabel")}
      >
        <div className="material-lab-stage-glow" aria-hidden="true" />
        <div className="material-lab-plinth" aria-hidden="true" />

        {images.map((src, index) => {
          const offset = index - (images.length - 1) / 2;
          const shapeFactor = (shape - 50) / 50;
          const spread = compact ? 40 : 70;
          const spreadFactor = 0.28 + shape / 80;
          const x = offset * spread * spreadFactor;
          const y = (offset * offset - 1.5) * shapeFactor * (compact ? 16 : 30);
          const z = -Math.abs(offset) * (compact ? 34 : 58) - Math.abs(offset) * Math.abs(shapeFactor) * 12;
          const rotateY = orbit.y + offset * (compact ? 11 : 14) * (0.82 + shape / 150);
          const rotateX = orbit.x + offset * shapeFactor * -2.6;
          const rotateZ = offset * shapeFactor * (compact ? 3.5 : 5.5);
          const scale = 1 - Math.abs(offset) * 0.035;

          return (
            <button
              key={src}
              type="button"
              className={`material-lab-card ${activeIndex === index ? "is-active" : ""}`.trim()}
              style={{
                transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
                zIndex: activeIndex === index ? 100 : images.length - Math.round(Math.abs(offset)),
              }}
              onClick={() => setActiveIndex(index)}
              aria-label={`${t("study.materialScreen")} ${index + 1}`}
              aria-pressed={activeIndex === index}
            >
              <img src={src} alt={`${altBase} ${index + 1}`} draggable="false" />
              <span className="material-lab-card-index">{String(index + 1).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>

      <div className="material-lab-instructions">
        <span>
          <FaHandPaper aria-hidden="true" />
          {t("study.materialDrag")}
        </span>
        <span aria-live="polite">
          {t("study.materialFrame")} {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
      </div>

      <div className="material-lab-controls">
        <button
          type="button"
          className="material-lab-arrow"
          onClick={() => goTo(-1)}
          aria-label={t("study.materialPrevious")}
        >
          <FaChevronLeft aria-hidden="true" />
        </button>

        <label className="material-lab-slider">
          <span>
            <strong>{t("study.materialReshape")}</strong>
            <output>{shape}%</output>
          </span>
          <input
            type="range"
            min="0"
            max="100"
            value={shape}
            onChange={(event) => setShape(Number(event.target.value))}
            aria-label={t("study.materialReshape")}
          />
          <span className="material-lab-range-labels" aria-hidden="true">
            <small>{t("study.materialFlat")}</small>
            <small>{t("study.materialElastic")}</small>
          </span>
        </label>

        <button
          type="button"
          className="material-lab-arrow"
          onClick={() => goTo(1)}
          aria-label={t("study.materialNext")}
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
