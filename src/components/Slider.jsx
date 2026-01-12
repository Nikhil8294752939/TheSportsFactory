import { useEffect, useState } from "react";
import "./Slider.css";
const images = [
  "/istockphoto-544810576-2048x2048.jpg",
  "/slide2.jpg",
  "/slide3.webp",
  "/slide4.jpg",
  "/slide5.avif",
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Banner"
          className={`slide ${index === currentIndex ? "active" : ""}`}
        />
      ))}

      {/* Right-side dots */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
      
        
      
    </div>
  );
}
