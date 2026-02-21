import fr from "@/content/fr";
import Link from "next/link";

export default function Footer() {
  const { site } = fr;

  return (
    <footer style={{ padding: "40px 0 90px" }}>
      <div className="container">
        <hr className="hr" />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            paddingTop: 18,
            flexWrap: "wrap",
          }}
        >
          <p className="small">
            © {new Date().getFullYear()} {site.name} — {site.serviceArea}
          </p>

          <p className="small">
            Email : {site.email} • Tel : {site.phoneDisplay} • WhatsApp : {site.whatsappDisplay}
          </p>

          {/* 🔥 OBLIGATOIRE LÉGALEMENT */}
          <p className="small">
            <Link href="/mentions-legales">Mentions légales</Link> •{" "}
            <Link href="/politique-confidentialite">Politique de confidentialité</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}