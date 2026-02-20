export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="container">
        <div className="panel">
          <h2 className="h2">{title}</h2>
          {subtitle ? <p className="p">{subtitle}</p> : null}
          <div style={{ marginTop: 22 }}>{children}</div>
        </div>
      </div>
    </section>
  );
}
