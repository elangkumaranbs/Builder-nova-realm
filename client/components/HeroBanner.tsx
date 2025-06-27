import { HeroBannerCarousel } from "./ui/carousel-nav";

export default function HeroBanner() {
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

  const slideElements = slides.map((slide, index) => (
    <div
      key={index}
      className="relative h-[600px] md:h-[800px] overflow-hidden"
    >
      <img
        src={slide.image}
        alt={slide.alt}
        className="w-full h-full object-cover"
      />
    </div>
  ));

  return (
    <section className="relative w-full">
      <HeroBannerCarousel
        slides={slideElements}
        autoPlay={true}
        autoPlayDelay={6000}
        className="bg-white"
      />
    </section>
  );
}
