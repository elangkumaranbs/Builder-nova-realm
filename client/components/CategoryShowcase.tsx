import { ShopNowButton } from "./ui/enhanced-button";

export default function CategoryShowcase() {
  const categories = [
    {
      title: "ShimmerLeggings",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/48d1386a9607ae25c17d61dc236c4649fad1fc89?width=1273",
      alt: "Shimmer Leggings Collection",
    },
    {
      title: "AnkleLeggings",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2cf1c2a673263ded623b4c7149393213f5e24427?width=1273",
      alt: "Ankle Leggings Collection",
    },
    {
      title: "KurtiPants",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/997956d213b6573d61b0c3c62b5334bb48501c48?width=1273",
      alt: "Kurti Pants Collection",
    },
  ];

  return (
    <section className="bg-white py-3">
      <div className="w-full max-w-[1925px] mx-auto px-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden"
            >
              {/* Background Image */}
              <div className="relative h-[600px] md:h-[1165px]">
                <img
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-16 py-8">
                    <h3 className="text-[#111] font-normal text-[28px] md:text-[32px] leading-[41.6px] mb-8">
                      {category.title}
                    </h3>
                    <ShopNowButton
                      text="Shop Now"
                      onClick={() => console.log(`Shop ${category.title}`)}
                      className="group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
