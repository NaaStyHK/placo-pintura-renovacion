// app/page.tsx
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

            {/* ✅ LOGO AU-DESSUS DU TITRE SUR MOBILE (via CSS) */}
            <div className="hero-brand">
              <img
                src="/logo ppr fond noir.png"
                alt="Logo Placo Pintura Renovación"
                className="hero-logo"
              />

              <h1 className="h1 hero-title">{hero.title}</h1>
            </div>

            <p className="p" style={{ marginTop: 14 }}>
              {hero.subtitle}
            </p>

            <div className="hero-cta">
              <a className="btn btn-primary" href="#devis">
                {hero.ctaPrimary}
              </a>
              <a className="btn btn-ghost" href={`tel:${site.phone}`}>
                {hero.ctaSecondary} {site.phoneDisplay}
              </a>
            </div>

            {/* IMAGE MOBILE */}
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

          {/* IMAGE DESKTOP */}
          <div className="card hero-desktop-image">
            <img
              src="/realisations/salon-peinture-apres.jpeg"
              alt="Chantier peinture et placo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* PRESTATIONS */}
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

      {/* REALISATIONS */}
      <Section
        id="realisations"
        title={fr.gallery.title}
        subtitle={fr.gallery.note}
        className="section-light"
      >
        <Gallery />
      </Section>

      {/* AVIS */}
      <Section id="avis" title={reviews.title}>
        <div className="grid grid-3">
          {reviews.items.map((r) => (
            <div key={r.name} className="card" style={{ padding: 18 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p style={{ margin: 0, fontWeight: 800 }}>{r.name}</p>
                <span className="small">⭐ 5/5</span>
              </div>

              <p className="p" style={{ marginTop: 10 }}>
                “{r.text}”
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

      {/* DEVIS */}
      <Section
        id="devis"
        title={contact.title}
        subtitle={contact.subtitle}
        className="section-light"
      >
        <ContactForm />
      </Section>

      <Footer />

      <a href="#top" className="scrolltop" aria-label="Retour en haut">
        ↑
      </a>
    </main>
  );
};