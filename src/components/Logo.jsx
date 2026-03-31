export default function Logo({ size = "md" }) {
  const sizes = {
    sm: { width: 50, height: 30 },
    md: { width: 65, height: 39 },
    lg: { width: 65, height: 39, style: { height: "60px", width: "auto" } },
  };

  const s = sizes[size] || sizes.md;

  return (
    <svg
      className="logo-svg"
      width={s.width}
      height={s.height}
      viewBox="0 0 75 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={
        s.style || {
          filter: "drop-shadow(0 0 8px rgba(232, 160, 32, 0.4))",
          transition: "all 0.3s ease",
        }
      }
    >
      <defs>
        <linearGradient id="logo-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-accent)" />
          <stop offset="100%" stopColor="var(--color-primary-hover)" />
        </linearGradient>
        <linearGradient id="logo-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-primary-hover)" />
          <stop offset="100%" stopColor="var(--color-accent)" />
        </linearGradient>
      </defs>
      <path
        d="M18.2946 33.2629H29.3823L28.4319 31.4414H16.8691L10.1373 46.0929H3.0095L22.8881 1.97994H31.1246L50.924 46.0929H43.4794L28.4319 11.4836L27.3231 14.1763L42.2122 48.3105H54.1711L32.5502 0H21.6209L0 48.3105H11.642L18.2946 33.2629Z"
        fill="url(#logo-gradient-1)"
      />
      <path
        d="M38.1732 1.97994L37.2228 0H75L66.4467 10.4541H44.1922L47.9937 19.1658H69.6938L60.9029 29.0655H50.132L49.5776 27.0855H60.1109L65.5755 20.9873H46.6473L41.1035 8.39493H65.5755L70.7233 1.97994H38.1732Z"
        fill="url(#logo-gradient-2)"
      />
    </svg>
  );
}
