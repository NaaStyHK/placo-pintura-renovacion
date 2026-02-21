import fr from "@/content/fr";

export default function PolitiquePage() {
  const { legal } = fr;

  return (
    <main className="container section">
      <h1 className="h2">{legal.privacy.title}</h1>

      <div className="panel" style={{ marginTop: 16 }}>
        <p className="p" style={{ whiteSpace: "pre-line" }}>
          {legal.privacy.content}
        </p>
      </div>
    </main>
  );
}