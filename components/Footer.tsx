import fr from "@/content/fr";

export default function Footer() {
  const { site } = fr;

  return (
    <footer style={{ padding: "40px 0 90px" }}>
      <div className="container">
        <hr className="hr" />
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, paddingTop: 18, flexWrap: "wrap" }}>
          <p className="small">© {new Date().getFullYear()} {site.name} — {site.serviceArea}</p>
          <p className="small">Email : {site.email} • Tel : {site.phoneDisplay}• Watshapp : {site.whatsappDisplay}</p>
        </div>
      </div>
    </footer>
  );
}
