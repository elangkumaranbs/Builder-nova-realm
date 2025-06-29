import { ShopNowButton } from "./ui/enhanced-button";

export default function CategoryShowcase() {
  const categories = [
    {
      title: "Men's Collection",
      subtitle: "T-Shirts, Track Pants & More",
      gradient: "from-blue-500 to-blue-700",
      icon: "👔",
      description: "Premium quality men's wear including round neck, V-neck, polo t-shirts, track pants and shorts in all sizes."
    },
    {
      title: "Women's Collection", 
      subtitle: "Leggings, Shapewear & Night Wear",
      gradient: "from-purple-500 to-pink-500",
      icon: "👗",
      description: "Complete range of women's clothing including leggings, shapewear, night wear in multiple colors and sizes."
    },
    {
      title: "Hot Sales",
      subtitle: "Limited Time Offers",
      gradient: "from-red-500 to-orange-500",
      icon: "🔥",
      description: "Don't miss out on our special deals and discounts on selected items."
    },
  ];

  return (
    <section className="bg-white py-3">
      <div className="w-full max-w-[1925px] mx-auto px-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient Background */}
              <div
                className={`relative h-[400px] md:h-[500px] bg-gradient-to-br ${category.gradient}`}
              >
                {/* Content */}
                <div className="flex items-center justify-center h-full">
                  <div className="text-center px-8 py-8 text-white">
                    <div className="text-6xl mb-4">{category.icon}</div>
                    <h3 className="font-bold text-[28px] md:text-[32px] leading-[41.6px] mb-2">
                      {category.title}
                    </h3>
                    <p className="font-normal text-[16px] md:text-[18px] mb-4 opacity-90">
                      {category.subtitle}
                    </p>
                    <p className="font-normal text-[14px] mb-6 opacity-80 max-w-xs mx-auto">
                      {category.description}
                    </p>
                    <button
                      className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-200 group-hover:scale-105"
                      onClick={() => console.log(`Shop ${category.title}`)}
                    >
                      Shop Now
                    </button>
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