import { ShopNowButton } from "./ui/enhanced-button";

export default function CategoryShowcase() {
  const categories = [
    {
      title: "Men's Collection",
      subtitle: "T-Shirts & Bottomwear",
      gradient: "from-blue-500 to-blue-700",
      icon: "👔",
    },
    {
      title: "Women's Leggings",
      subtitle: "All Colors Available",
      gradient: "from-purple-500 to-pink-500",
      icon: "👖",
    },
    {
      title: "Night Wear",
      subtitle: "Comfort & Style",
      gradient: "from-indigo-500 to-purple-600",
      icon: "🌙",
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
                    <h3 className="text-[#111] font-bold text-[28px] md:text-[32px] leading-[41.6px] mb-2">
                      {category.title}
                    </h3>
                    <p className="text-[#666] font-normal text-[16px] md:text-[18px] mb-6">
                      {category.subtitle}
                    </p>
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
