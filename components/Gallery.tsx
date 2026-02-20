import Image from "next/image";
import fr from "@/content/fr";

export default function Gallery() {
  const { gallery } = fr;

  return (
    <div className="grid grid-3">
      {gallery.images.map((img) => (
        <div key={img.src} className="card" style={{ overflow: "hidden" }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 800px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
              priority={false}
            />
          </div>
          <div style={{ padding: 12 }}>
            <p className="small">{img.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
