import fr from "@/content/fr";
import BeforeAfter from "./BeforeAfter";

type BeforeAfterItem = {
  before: string;
  after: string;
  alt: string;
};

export default function Gallery() {
  const { gallery } = fr;

  const items = gallery.images as BeforeAfterItem[];

  return (
    <div className="grid grid-3">
      {items.map((img, i) => (
        <div key={`${img.alt}-${i}`} className="card" style={{ overflow: "hidden" }}>
          <BeforeAfter before={img.before} after={img.after} />
          <div style={{ padding: 12 }}>
            <p className="small">{img.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}