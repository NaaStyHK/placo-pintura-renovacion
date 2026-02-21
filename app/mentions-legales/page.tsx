import fr from "@/content/fr";

export default function MentionsLegalesPage() {
  const { legal } = fr;

  return (
    <main className="container section">
      <h1 className="h2">{legal.mentions.title}</h1>

      <div className="panel" style={{ marginTop: 16 }}>
        <p className="p" style={{ whiteSpace: "pre-line" }}>
          {legal.mentions.content}
        </p>
      </div>
    </main>
  );
}