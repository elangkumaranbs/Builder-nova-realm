import { Star } from "lucide-react";

interface ColorOption {
  name: string;
  color: string;
  isSelected?: boolean;
}

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  rating?: number;
  colors?: ColorOption[];
}

export default function BestSelling() {
  const products: Product[] = [
    {
      id: 1,
      name: "Indian Flower Soft Denim Palazzo Pants",
      price: "Rs. 1,199.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/12909c7b765cb7c932ef0ff7e78e2cc1b96be656?width=923",
      rating: 5,
    },
    {
      id: 2,
      name: "Gold Metallic Straight Pants",
      price: "Rs. 599.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/387decc0c7ef9593db087d8ad330013ef415f574?width=923",
      colors: [
        { name: "Metallic Gold", color: "#AA856B", isSelected: true },
        { name: "Metallic Silver", color: "#C1BDBD" },
      ],
    },
    {
      id: 3,
      name: "BreezeBlue Fray-Edge Denim Palazzo",
      price: "Rs. 1,299.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/39a38fbacc500f454588f2a8ef3647da3959fe23?width=923",
    },
    {
      id: 4,
      name: "Mercy Green Viscose Full Length Leggings",
      price: "Rs. 499.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b8a5e234b70c4c7d2dd2bafd600cf15b4905eb42?width=923",
      colors: [
        { name: "Orange Spark", color: "#FF6540" },
        { name: "Zippy Orange", color: "#FB7637" },
        { name: "Tango Spirit", color: "#FE9738" },
        { name: "Platonic Red", color: "#ED3A4F" },
        { name: "Casual Red", color: "#F03D3E" },
      ],
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-2.5 h-2.5 ${
          index < rating ? "fill-[#E91162] text-[#E91162]" : "text-gray-300"
        }`}
      />
    ));
  };

  const renderColorOptions = (colors: ColorOption[]) => {
    return (
      <div className="flex gap-1 mt-2">
        {colors.map((color, index) => (
          <button
            key={index}
            className={`w-6 h-6 rounded-md border-2 ${
              color.isSelected
                ? "border-[#888883] border-2"
                : "border-[#E8E8E1] border-[1.5px]"
            }`}
            style={{ backgroundColor: color.color }}
            title={color.name}
          />
        ))}
        {colors.length >= 5 && (
          <button className="w-6 h-6 rounded-md border-[1.5px] border-[#E8E8E1] bg-white flex items-center justify-center text-[#4A4A4A] text-[15px]">
            +
          </button>
        )}
      </div>
    );
  };

  return (
    <section className="bg-white py-8">
      <div className="max-w-[1920px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-[#111] text-[45px] font-normal leading-[58.5px] mb-1">
            Best Selling
          </h2>
          <p className="text-[#555] text-[14px] font-normal leading-[26.25px]">
            Here's some of our most popular products people are in love with.
          </p>
        </div>

        {/* Products Grid */}
        <div className="max-w-[1890px] mx-auto">
          <div className="overflow-x-auto">
            <div className="flex gap-5 min-w-max pb-4">
              {products.map((product) => (
                <div key={product.id} className="flex-shrink-0 w-[461px]">
                  <div className="bg-white rounded-[5px] overflow-hidden group cursor-pointer">
                    {/* Product Image */}
                    <div className="h-[615px] overflow-hidden rounded-[5px]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="pt-4">
                      <h3 className="text-[#111] text-[15px] font-normal leading-[19.5px] capitalize mb-1">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      {product.rating && (
                        <div className="flex items-center gap-1 py-2">
                          {renderStars(product.rating)}
                        </div>
                      )}

                      {/* Price */}
                      <div className="py-1">
                        <span className="text-[#111] text-[14px] font-medium leading-[24.5px]">
                          {product.price}
                        </span>
                      </div>

                      {/* Color Options */}
                      {product.colors && renderColorOptions(product.colors)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
