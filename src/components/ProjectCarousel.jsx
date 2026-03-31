import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProjectCarousel({
  images,
  altBase,
  autoplayMs = 0,
  className = "",
  viewportClassName = "",
  imageClassName = "",
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!autoplayMs || images.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, autoplayMs);

    return () => window.clearInterval(timer);
  }, [autoplayMs, images.length]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={`project-carousel ${className}`.trim()}>
      <div className={`project-carousel-viewport ${viewportClassName}`.trim()}>
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`${altBase} ${index + 1}`}
            className={`project-carousel-image ${activeIndex === index ? "is-active" : ""} ${imageClassName}`.trim()}
          />
        ))}
      </div>

      {images.length > 1 ? (
        <div className="project-carousel-controls" aria-label={`${altBase} navigation`}>
          <button
            type="button"
            className="project-carousel-arrow"
            onClick={goToPrev}
            aria-label={`Previous ${altBase} slide`}
          >
            <FaChevronLeft />
          </button>

          <div className="project-carousel-dots">
            {images.map((_, index) => (
              <button
                key={`${altBase}-dot-${index}`}
                type="button"
                className={`project-carousel-dot ${activeIndex === index ? "is-active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to ${altBase} slide ${index + 1}`}
                aria-pressed={activeIndex === index}
              />
            ))}
          </div>

          <button
            type="button"
            className="project-carousel-arrow"
            onClick={goToNext}
            aria-label={`Next ${altBase} slide`}
          >
            <FaChevronRight />
          </button>
        </div>
      ) : null}
    </div>
  );
}
