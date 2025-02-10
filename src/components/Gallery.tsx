import React from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "../styles/Gallery.css";

const Gallery = () => {
  React.useEffect(() => {
    NativeFancybox.bind("[data-fancybox]", {});

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  const images = [
    "/img/gallery1.png",
    "/img/gallery2.png",
    "/img/gallery3.png",
    "/img/gallery4.png",
    "/img/gallery5.png",
  ];

  return (
    <section className="gallery">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <a key={index} data-fancybox="gallery" href={`${image}?q=80&w=1920`}>
            <img
              src={`${image}?q=80&w=400`}
              alt={`Gallery image ${index + 1}`}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
