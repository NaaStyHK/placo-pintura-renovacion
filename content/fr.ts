const fr = {
  site: {
    name: "Placo Pintura Renovación",
    domain: "https://exemple.com", // à remplacer plus tard
    phone: "+33612345678", // format international
    phoneDisplay: "06 00 00 00 00",
    email: "contact@exemple.com",
    city: "La Rochelle",
    serviceArea: "La Rochelle et 30 km autour",
    address: "La Rochelle, France", // optionnel
  },

  seo: {
    title: "Peintre & Plaquiste à La Rochelle | Devis gratuit | Peinture & Placo",
    description:
      "Entreprise de peinture et placo à La Rochelle : rénovation intérieure, cloisons, plafonds, isolation, finitions soignées. Devis gratuit, réponse rapide.",
  },

  nav: [
    { id: "prestations", label: "Prestations" },
    { id: "realisations", label: "Réalisations" },
    { id: "avis", label: "Avis" },
    { id: "devis", label: "Devis / Contact" },
  ],

  hero: {
    title: "Peinture & Placo à Valancia",
    subtitle:
      "Travaux propres, finitions soignées, devis gratuit. Intervention rapide sur Valancia et la region.",
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Appeler",
    badges: ["Devis gratuit", "Chantier propre", "Finitions soignées", "Réponse rapide"],
  },

  trust: {
    title: "Pourquoi nous choisir",
    items: [
      { title: "Conseil & accompagnement", text: "Choix des finitions, peintures adaptées, solutions placo/isolation." },
      { title: "Travaux propres", text: "Protections soignées, nettoyage en fin de chantier." },
      { title: "Délais respectés", text: "Planning clair, communication simple." },
      { title: "Assurance pro", text: "RC Pro / Décennale (si applicable)." },
    ],
  },

  services: {
    title: "Nos prestations",
    items: [
      {
        title: "Peinture intérieure",
        text: "Murs, plafonds, boiseries, rénovation, enduits, finitions mates/satinées/velours.",
      },
      {
        title: "Peinture extérieure",
        text: "Façades, volets, portails, protections et peintures adaptées aux supports.",
      },
      {
        title: "Placo / Cloisons",
        text: "Cloisons, doublages, plafonds, création de pièces, rénovation.",
      },
      {
        title: "Isolation & bandes",
        text: "Isolation thermique/acoustique, joints, bandes, préparation avant peinture.",
      },
    ],
  },

  gallery: {
    title: "Réalisations",
    note: "Ajouter images dans /public/realisations (ex: r1.jpg, r2.jpg...) et metre les bons chemins ici.",
    images: [
      { src: "/realisations/photo-real0.jpg", alt: "Peinture intérieure – séjour rénové" },
      { src: "/realisations/photo-real1.jpg", alt: "Placo – création de cloison" },
      { src: "/realisations/photo-real2.jpg", alt: "Peinture plafond – finitions" },
      { src: "/realisations/photo-real0.jpg", alt: "Rénovation peinture – chambre" },
      { src: "/realisations/photo-real1.jpg", alt: "Placo plafond – rénovation" },
      { src: "/realisations/photo-real2.jpg", alt: "Peinture intérieure – cuisine" },
    ],
  },

  reviews: {
    title: "Avis clients",
    items: [
      {
        name: "Camille R.",
        text: "Très pro, chantier propre et finitions impeccables. Devis rapide.",
      },
      {
        name: "Julien P.",
        text: "Cloison placo + peinture : délai respecté et super rendu. Je recommande.",
      },
      {
        name: "Sophie L.",
        text: "Bon conseil sur les couleurs, travail soigné et communication au top.",
      },
    ],
  },

  faq: {
    title: "Questions fréquentes",
    items: [
      { q: "Faites-vous des devis gratuits ?", a: "Oui, le devis est gratuit. Réponse généralement sous 24h/48h." },
      { q: "Quelle zone couvrez-vous ?", a: "Nous intervenons sur La Rochelle et ses alentours (à ajuster selon le client)." },
      { q: "Dois-je vider la pièce ?", a: "On peut vous guider. Nous protégeons les sols et meubles (à préciser selon vos pratiques)." },
      { q: "Travaillez-vous pour les pros ?", a: "Oui, particuliers et professionnels." },
    ],
  },

  contact: {
    title: "Demander un devis",
    subtitle:
      "Décris ton besoin (pièces, m² si tu connais, délais). Tu peux aussi joindre des photos.",
    form: {
      name: "Nom",
      phone: "Téléphone",
      city: "Ville",
      message: "Votre message",
      submit: "Envoyer",
      success: "Merci ! Votre message a bien été envoyé.",
      error: "Oups… Impossible d’envoyer. Réessayez ou appelez-nous.",
    },
  },

  footer: {
    legal: "Mentions légales",
    privacy: "Politique de confidentialité",
  },
};

export default fr;
