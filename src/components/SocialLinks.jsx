import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const links = [
  {
    href: "https://www.linkedin.com/in/andrea-feliziani/",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  { href: "https://github.com/Felix2897", icon: FaGithub, label: "GitHub" },
];

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex gap-4 list-none m-0 p-0 ${className}`}>
      {links.map(({ href, icon: Icon, label }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={`${label} (opens in a new tab)`}
          >
            <Icon aria-hidden="true" focusable="false" />
          </a>
        </li>
      ))}
    </ul>
  );
}
