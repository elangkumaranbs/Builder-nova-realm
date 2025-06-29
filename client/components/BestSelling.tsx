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
  sizes?: string[];
  category?: string;
}

interface BestSellingProps {
  onAddToCart?: (productId: number) => void;
  onQuickView?: (productId: number) => void;
}

export default function BestSelling({
  onAddToCart,
  onQuickView,
}: BestSellingProps) {
  // Complete leggings color palette from your list
  const leggingsColors: ColorOption[] = [
    { name: "White", color: "#FFFFFF" },
    { name: "Black", color: "#000000" },
    { name: "Pink", color: "#FF69B4" },
    { name: "Dark Pink", color: "#FF1493" },
    { name: "Grey", color: "#808080" },
    { name: "Maroon", color: "#800000" },
    { name: "T-Blue", color: "#008B8B" },
    { name: "Tea Rose", color: "#F4C2C2" },
    { name: "Rani Rose", color: "#FF69B4" },
    { name: "Green", color: "#008000" },
    { name: "Lt-Green", color: "#90EE90" },
    { name: "Yellow", color: "#FFFF00" },
    { name: "Marbled", color: "#B8860B" },
    { name: "Lavender", color: "#E6E6FA" },
    { name: "Purple", color: "#800080" },
    { name: "Aqua", color: "#00FFFF" },
    { name: "Navy", color: "#000080" },
    { name: "Skin", color: "#FDBCB4" },
    { name: "Stone", color: "#918E85" },
    { name: "Gojari", color: "#DAA520" },
    { name: "Orange", color: "#FFA500" },
    { name: "Wine", color: "#722F37" },
    { name: "Royal", color: "#4169E1" },
    { name: "Cream", color: "#FFFDD0" },
    { name: "Brown", color: "#A52A2A" },
    { name: "Red", color: "#FF0000" },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Women's Full Length Leggings",
      price: "Rs. 599.00",
      image: "",
      rating: 5,
      sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
      category: "Women's Leggings",
      colors: leggingsColors.slice(0, 12), // Show first 12 colors
    },
    {
      id: 2,
      name: "Men's Round Neck T-Shirt",
      price: "Rs. 399.00",
      image: "",
      rating: 4,
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "Men's T-Shirts",
      colors: [
        { name: "Black", color: "#000000", isSelected: true },
        { name: "White", color: "#FFFFFF" },
        { name: "Navy", color: "#000080" },
        { name: "Grey", color: "#808080" },
      ],
    },
    {
      id: 3,
      name: "Shimmer Leggings",
      price: "Rs. 799.00",
      image: "",
      rating: 5,
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "Women's Leggings",
      colors: [
        { name: "Gold", color: "#FFD700" },
        { name: "Silver", color: "#C0C0C0" },
        { name: "Rose Gold", color: "#E8B4B8" },
        { name: "Bronze", color: "#CD7F32" },
      ],
    },
    {
      id: 4,
      name: "Churidhar Ankle Leggings",
      price: "Rs. 449.00",
      image: "",
      rating: 4,
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "Women's Leggings",
      colors: leggingsColors.slice(12, 20), // Show colors 12-19
    },
    {
      id: 5,
      name: "Night Wear T-Shirt",
      price: "Rs. 299.00",
      image: "",
      rating: 4,
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "Night Wear",
      colors: [
        { name: "Baby Pink", color: "#FFC0CB" },
        { name: "Lavender", color: "#E6E6FA" },
        { name: "Mint Green", color: "#98FB98" },
        { name: "Peach", color: "#FFCBA4" },
      ],
    },
    {
      id: 6,
      name: "Men's Track Pants",
      price: "Rs. 699.00",
      image: "",
      rating: 4,
      sizes: ["M", "L", "XL", "XXL"],
      category: "Men's Bottomwear",
      colors: [
        { name: "Black", color: "#000000" },
        { name: "Navy", color: "#000080" },
        { name: "Grey", color: "#808080" },
        { name: "Olive", color: "#808000" },
      ],
    },
    {
      id: 7,
      name: "Flat Ankle Leggings",
      price: "Rs. 399.00",
      image: "",
      rating: 5,
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "Women's Leggings",
      colors: leggingsColors.slice(20, 26), // Show remaining colors
    },
    {
      id: 8,
      name: "Saree Shapewear",
      price: "Rs. 599.00",
      image: "",
      rating: 4,
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "Saree Shapewear",
      colors: [
        { name: "Nude", color: "#FDBCB4" },
        { name: "Black", color: "#000000" },
        { name: "White", color: "#FFFFFF" },
        { name: "Beige", color: "#F5F5DC" },
      ],
    },
  ];

  const handleQuickView = (productId: number) => {
    if (onQuickView) {
      onQuickView(productId);
    } else {
      console.log("Quick view product:", productId);
    }
  };

  const handleAddToCart = (productId: number) => {
    if (onAddToCart) {
      onAddToCart(productId);
    } else {
      console.log("Add to cart product:", productId);
      const product = products.find((p) => p.id === productId);
      if (product) {
        alert(`${product.name} added to cart!`);
      }
    }
  };

  const handleColorSelect = (productId: number, colorIndex: number) => {
    console.log("Color selected:", productId, colorIndex);
    // Implement color selection logic here
    const product = products.find((p) => p.id === productId);
    if (product && product.colors) {
      const selectedColor = product.colors[colorIndex];
      console.log(`Selected ${selectedColor.name} for ${product.name}`);
    }
  };

  return (
    <section className="bg-white py-8">
      <div className="max-w-[1920px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-[#111] text-[45px] font-normal leading-[58.5px] mb-1">
            Best Selling Products
          </h2>
          <p className="text-[#555] text-[14px] font-normal leading-[26.25px]">
            Discover our most popular garments with all size and color options
            available.
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
