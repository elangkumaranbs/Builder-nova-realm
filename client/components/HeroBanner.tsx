import { useState } from "react";

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d2187c742cef23f490f9a27234ab9df29135b174?width=3840",
      alt: "Hero Banner 1",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d2187c742cef23f490f9a27234ab9df29135b174?width=3840",
      alt: "Hero Banner 2",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d2187c742cef23f490f9a27234ab9df29135b174?width=3840",
      alt: "Hero Banner 3",
    },
  ];

  return (
    <section className="relative w-full">
      <div className="relative h-[600px] md:h-[800px] overflow-hidden">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Carousel dots */}
      <div className="flex justify-center items-center gap-2 py-3 bg-white">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-[#111] opacity-100"
                : "bg-[#111] opacity-20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
