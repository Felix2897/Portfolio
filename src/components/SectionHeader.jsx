export default function SectionHeader({ badge, title }) {
  return (
    <div className="text-center mb-16">
      <div className="badge-custom">{badge}</div>
      <h2
        className="text-3xl md:text-4xl mt-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
    </div>
  );
}
