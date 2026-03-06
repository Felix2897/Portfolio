import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const links = [
  { href: "https://www.linkedin.com/in/andrea-feliziani/", icon: FaLinkedinIn },
  { href: "https://github.com/Felix2897", icon: FaGithub },
  { href: "https://www.instagram.com/andrea_feliziani/", icon: FaInstagram },
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map(({ href, icon: Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
