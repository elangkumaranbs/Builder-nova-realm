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
      <div className="md:hidden relative h-[400px] overflow-hidden bg-gradient-to-r from-[#7C3AED] to-[#2563EB]">
        {/* Mobile Content */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center px-6 py-8">
            <p className="text-white text-[14px] font-normal leading-relaxed mb-2">
              Premium Quality Garments for
            </p>
            <h1 className="text-white text-[32px] font-bold leading-tight mb-6">
              Men & Women
            </h1>
            <button className="bg-white text-[#7C3AED] hover:bg-gray-100 px-6 py-3 rounded text-[14px] font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Hero Banner */}
      <div className="hidden md:block h-[600px] bg-gradient-to-r from-[#7C3AED] to-[#2563EB]">
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-[48px] font-bold leading-tight mb-4">
              Premium Garments Collection
            </h1>
            <p className="text-[18px] font-normal leading-relaxed mb-8">
              Discover our range of T-Shirts, Leggings, Shapewear, Night Wear & More
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-[#7C3AED] hover:bg-gray-100 px-8 py-4 rounded text-[16px] font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                SHOP MEN'S
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#7C3AED] px-8 py-4 rounded text-[16px] font-semibold transition-all duration-200">
                SHOP WOMEN'S
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}