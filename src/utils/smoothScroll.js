export function smoothScrollTo(targetId, offset = 80, duration = 900) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const start = window.scrollY;
  const end = el.getBoundingClientRect().top + start - offset;
  let startTime = null;
  const ease = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    window.scrollTo(0, start + (end - start) * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
