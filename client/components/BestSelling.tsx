import { ProductRow } from "./ui/product-card";

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

  const handleQuickView = (productId: number) => {
    console.log("Quick view product:", productId);
    // Implement quick view modal logic here
  };

  const handleAddToCart = (productId: number) => {
    console.log("Add to cart product:", productId);
    // Implement add to cart logic here
  };

  const handleColorSelect = (productId: number, colorIndex: number) => {
    console.log("Color selected:", productId, colorIndex);
    // Implement color selection logic here
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
          <ProductRow
            products={products}
            onQuickView={handleQuickView}
            onAddToCart={handleAddToCart}
            onColorSelect={handleColorSelect}
          />
        </div>
      </div>
    </section>
  );
}
