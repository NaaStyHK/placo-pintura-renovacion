"use client";

import { useMemo, useState } from "react";
import fr from "@/content/fr";

export default function ContactForm() {
  const { site, contact } = fr;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Demande de devis — ${site.name}`);
    const body = encodeURIComponent(
      `Nom: ${name}\nTéléphone: ${phone}\nVille: ${city}\n\nMessage:\n${message}\n`
    );
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }, [name, phone, city, message, site.email, site.name]);

  return (
    <div className="card" style={{ padding: 18 }}>
      <div className="grid grid-2">
        <label>
          <div className="small">{contact.form.name}</div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jean Dupont"
            style={inputStyle}
          />
        </label>

        <label>
          <div className="small">{contact.form.phone}</div>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="06…"
            style={inputStyle}
          />
        </label>

        <label>
          <div className="small">{contact.form.city}</div>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="La Rochelle"
            style={inputStyle}
          />
        </label>

        <div />
      </div>

      <label style={{ display: "block", marginTop: 12 }}>
        <div className="small">{contact.form.message}</div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Décrivez votre projet (pièces, surface, délais)."
          style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
        />
      </label>

      <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
        <a className="btn btn-primary" href={mailto}>
          {contact.form.submit}
        </a>
        <a className="btn btn-ghost" href={`tel:${site.phone}`}>
          Appeler {site.phoneDisplay}
        </a>
      </div>

      <p className="small" style={{ marginTop: 10 }}>
        remplacer “mailto” par un vrai formulaire plus tard (Formspree/Resend)
      .
      </p>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  marginTop: 6,
  padding: "12px 12px",
  borderRadius: 12,
  border: "1px solid var(--border)",
  background: "rgba(255,255,255,0.04)",
  color: "var(--text)",
  outline: "none",
};
