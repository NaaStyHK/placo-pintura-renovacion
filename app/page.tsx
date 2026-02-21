import fr from "@/content/fr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  const { site, hero, services, trust, reviews, faq, contact } = fr;

  return (
    <main id="top">
      <Header />

 {/* HERO */}
<div className="container" style={{ padding: "60px 20px 10px" }}>
  <div
    className="card hero-wrap"
    style={{
      padding: 24,
      display: "grid",
      gap: 18,
      alignItems: "center",
      gridTemplateColumns: "1.2fr 0.8fr",
    }}
  >
    <div>
      <p className="small">{site.serviceArea}</p>
      <h1 className="h1">{hero.title}</h1>
      <p className="p">{hero.subtitle}</p>

      <div className="hero-cta">
        <a className="btn btn-primary" href="#devis">
          {hero.ctaPrimary}
        </a>
        <a className="btn btn-ghost" href={`tel:${site.phone}`}>
          {hero.ctaSecondary} {site.phoneDisplay}
        </a>
      </div>

      {/* ✅ IMAGE MOBILE (sous Appeler) */}
      <div className="hero-mobile-image">
        <img
        src="/realisations/salon-peinture-apres.jpeg"
          alt="Chantier peinture et placo"
        />
      </div>

      <div className="badges">
        {hero.badges.map((b) => (
          <span className="badge" key={b}>
            {b}
          </span>
        ))}
      </div>

      {/* Mini preuves */}
      <div className="grid grid-3" style={{ marginTop: 18 }}>
        <div className="card" style={{ padding: 14 }}>
          <p style={{ margin: 0, fontWeight: 800 }}>⭐ 4.9/5</p>
          <p className="small" style={{ marginTop: 6 }}>
            Avis clients
          </p>
        </div>
        <div className="card" style={{ padding: 14 }}>
          <p style={{ margin: 0, fontWeight: 800 }}>⏱ 24–48h</p>
          <p className="small" style={{ marginTop: 6 }}>
            Réponse devis
          </p>
        </div>
        <div className="card" style={{ padding: 14 }}>
          <p style={{ margin: 0, fontWeight: 800 }}>🛡️ Assuré</p>
          <p className="small" style={{ marginTop: 6 }}>
            RC Pro / Décennale
          </p>
        </div>
      </div>
    </div>

    {/* IMAGE DESKTOP (inchangée) */}
    <div className="card hero-desktop-image">
      <img
        src="/realisations/salon-peinture-apres.jpeg"
        alt="Chantier peinture et placo"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  </div>
</div>


      {/* 1) PRESTATIONS (sombre) */}
      <Section id="prestations" title={services.title}>
        <div className="grid grid-2">
          {services.items.map((s) => (
            <div key={s.title} className="card" style={{ padding: 18 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 12,
                    background: "rgba(110,168,254,0.15)",
                    display: "grid",
                    placeItems: "center",
                    border: "1px solid var(--border)",
                    fontSize: 18,
                  }}
                >
                  🛠️
                </div>
                <h3 style={{ margin: 0, fontSize: 18 }}>{s.title}</h3>
              </div>
              <p className="p">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 2) REALISATIONS (clair) */}
      <Section id="realisations" title={fr.gallery.title} subtitle={fr.gallery.note} className="section-light">
        <Gallery />
      </Section>

      {/* 3) AVIS (sombre) */}
      <Section id="avis" title={reviews.title}>
        <div className="grid grid-3">
          {reviews.items.map((r) => (
            <div key={r.name} className="card" style={{ padding: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ margin: 0, fontWeight: 800 }}>{r.name}</p>
                <span className="small">⭐ 5/5</span>
              </div>

              <p className="p" style={{ marginTop: 10 }}>
                <span style={{ opacity: 0.7, marginRight: 6 }}>“</span>
                {r.text}
                <span style={{ opacity: 0.7, marginLeft: 6 }}>”</span>
              </p>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                <span className="badge">Chantier propre</span>
                <span className="badge">Finitions soignées</span>
                <span className="badge">Recommandé</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4) POURQUOI (clair) */}
      <Section id="pourquoi" title={trust.title} className="section-light">
        <div className="grid grid-2">
          {trust.items.map((t) => {
            const icon =
              t.title.toLowerCase().includes("conseil")
                ? "🤝"
                : t.title.toLowerCase().includes("propres")
                ? "🧼"
                : t.title.toLowerCase().includes("délais")
                ? "⏱️"
                : t.title.toLowerCase().includes("assurance")
                ? "🛡️"
                : "✅";

            const points = t.title.toLowerCase().includes("conseil")
              ? ["Choix des finitions", "Devis clair", "Accompagnement"]
              : t.title.toLowerCase().includes("propres")
              ? ["Protections soignées", "Rangement", "Nettoyage fin de chantier"]
              : t.title.toLowerCase().includes("délais")
              ? ["Planning annoncé", "Suivi simple", "Communication rapide"]
              : t.title.toLowerCase().includes("assurance")
              ? ["RC Pro", "Décennale (si applicable)", "Facture sur demande"]
              : ["Sérieux", "Ponctualité", "Qualité"];

            return (
              <div key={t.title} className="card" style={{ padding: 18 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 14,
                      border: "1px solid var(--border)",
                      background: "rgba(110,168,254,0.14)",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 18,
                    }}
                  >
                    {icon}
                  </div>

                  <div>
                    <p style={{ margin: 0, fontWeight: 900 }}>{t.title}</p>
                    <p className="small" style={{ margin: "6px 0 0" }}>
                      {points[0]} • {points[1]}
                    </p>
                  </div>
                </div>

                <p className="p">{t.text}</p>

                <ul className="small" style={{ margin: "12px 0 0", paddingLeft: 18 }}>
                  {points.map((p) => (
                    <li key={p} style={{ marginBottom: 6 }}>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 5) FAQ (sombre) */}
      <Section id="faq" title={faq.title}>
        <div className="grid">
          {faq.items.map((item) => (
            <details key={item.q} className="card" style={{ padding: 18 }}>
              <summary
                style={{
                  cursor: "pointer",
                  fontWeight: 900,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  listStyle: "none",
                }}
              >
                <span
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 12,
                    border: "1px solid var(--border)",
                    background: "rgba(130,87,229,0.10)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  ?
                </span>
                {item.q}
              </summary>

              <p className="p" style={{ marginTop: 12 }}>
                {item.a}
              </p>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
                <span className="badge">Réponse rapide</span>
                <span className="badge">Devis gratuit</span>
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* 6) DEVIS (clair) */}
      <Section id="devis" title={contact.title} subtitle={contact.subtitle} className="section-light">
        <ContactForm />
      </Section>

      <Footer />

      <a href="#top" className="scrolltop" aria-label="Retour en haut">
        ↑
      </a>
    </main>
  );
}
