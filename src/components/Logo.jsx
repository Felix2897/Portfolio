import { logoPaths } from "./logoPaths";

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
        d={logoPaths[0]}
        fill="url(#logo-gradient-1)"
      />
      <path
        d={logoPaths[1]}
        fill="url(#logo-gradient-2)"
      />
    </svg>
  );
}
