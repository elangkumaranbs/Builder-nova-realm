import { HeroBannerCarousel } from "./ui/carousel-nav";

export default function HeroBanner() {
  // Desktop slides - keep existing carousel
  const desktopSlides = [
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

  const desktopSlideElements = desktopSlides.map((slide, index) => (
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
      {/* Mobile Hero Banner */}
      <div className="md:hidden relative h-[400px] overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/83955aac3423dc7f5e94748f69ac25398f3875cd?width=840"
          alt="Ankle Leggings Collection"
          className="w-full h-full object-cover"
        />

        {/* Mobile Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="px-6 py-8 max-w-[280px]">
            <p className="text-white text-[14px] font-normal leading-relaxed mb-2">
              Elevate your look with sleek and flattering
            </p>
            <h1 className="text-white text-[32px] font-bold leading-tight mb-6">
              Ankle
              <br />
              Leggings
            </h1>
            <button className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] hover:from-[#6D28D9] hover:to-[#1D4ED8] text-white px-6 py-3 rounded text-[14px] font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Hero Banner - Hidden on mobile */}
      <div className="hidden md:block">
        <HeroBannerCarousel
          slides={desktopSlideElements}
          autoPlay={true}
          autoPlayDelay={6000}
          className="bg-white"
        />
      </div>
    </section>
  );
}
