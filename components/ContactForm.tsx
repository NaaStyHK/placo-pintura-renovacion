"use client";

import { useState } from "react";
import fr from "@/content/fr";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvnrobd";

export default function ContactForm() {
  const { site, contact } = fr;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          city,
          message,
          // utile côté Formspree pour le sujet
          _subject: `Demande de devis — ${site.name}`,
        }),
      });

      if (!res.ok) throw new Error("Formspree error");

      setStatus("success");
      // optionnel : reset du formulaire
      setName("");
      setPhone("");
      setCity("");
      setMessage("");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="card" style={{ padding: 18 }}>
      <form onSubmit={onSubmit}>
        <div className="grid grid-2">
          <label>
            <div className="small">{contact.form.name}</div>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jean Dupont"
              style={inputStyle}
              required
              autoComplete="name"
            />
          </label>

          <label>
            <div className="small">{contact.form.phone}</div>
            <input
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="06…"
              style={inputStyle}
              required
              autoComplete="tel"
            />
          </label>

          <label>
            <div className="small">{contact.form.city}</div>
            <input
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Alicante"
              style={inputStyle}
              required
              autoComplete="address-level2"
            />
          </label>

          <div />
        </div>

        <label style={{ display: "block", marginTop: 12 }}>
          <div className="small">{contact.form.message}</div>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Décrivez votre projet (pièces, surface, délais)."
            style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
            required
          />
        </label>

        <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
          <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Envoi..." : contact.form.submit}
          </button>

          <a className="btn btn-ghost" href={`tel:${site.phone}`}>
            Appeler {site.phoneDisplay}
          </a>
        </div>

        {status === "success" && (
          <p className="small" style={{ marginTop: 10 }}>
            {contact.form.success}
          </p>
        )}

        {status === "error" && (
          <p className="small" style={{ marginTop: 10 }}>
            {contact.form.error}
          </p>
        )}

        <p className="small" style={{ marginTop: 10, opacity: 0.8 }}>
          Les informations envoyées via ce formulaire sont transmises par email.
        </p>
      </form>
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
  color: "#111111",                 // ✅ TEXTE NOIR
  outline: "none",
  caretColor: "#111111",            // ✅ curseur noir
}