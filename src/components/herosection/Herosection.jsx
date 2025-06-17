import React, { useState, useEffect } from "react";
import "./herosection.css"; // external CSS

const images = [
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/SVM/ncq/2X_buasdhuif._CB795788272_.jpg",
    caption: "Home, Kitchen & Outdoors starting now – pay on delivery with wide selection and up to 7.5% instant discount!",
  },
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg",
    caption: "Smartphones starting with exciting exchange offers – upgrade now and save big!",
  },
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30001._CB542120021_.jpg",
    caption: "Shop sports shoes under ₹799 on Amazon Fashion with easy returns and unlimited cashback!",
  },
];

const Herosection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="carousel-container">
        {images.map((image, i) => (
          <div
            className={`carousel-slide ${i === index ? "active" : ""}`}
            key={i}
          >
            <img src={image.src} alt={`Slide ${i + 1}`} />
            <div className="caption">{image.caption}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Herosection;
