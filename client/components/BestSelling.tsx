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
  // Color palette based on your notes
  const availableColors: ColorOption[] = [
    { name: "White", color: "#FFFFFF" },
    { name: "Black", color: "#000000" },
    { name: "Pink", color: "#FF69B4" },
    { name: "Lt-Green", color: "#90EE90" },
    { name: "Navy", color: "#000080" },
    { name: "Yellow", color: "#FFFF00" },
    { name: "Maroon", color: "#800000" },
    { name: "T-Blue", color: "#008B8B" },
    { name: "Tea Rose", color: "#F4C2C2" },
    { name: "Green", color: "#008000" },
    { name: "Lavender", color: "#E6E6FA" },
    { name: "Purple", color: "#800080" },
    { name: "Aqua", color: "#00FFFF" },
    { name: "Skin", color: "#FDBCB4" },
    { name: "Stone", color: "#918E85" },
    { name: "Orange", color: "#FFA500" },
    { name: "Wine", color: "#722F37" },
    { name: "Royal", color: "#4169E1" },
    { name: "Cream", color: "#FFFDD0" },
    { name: "Brown", color: "#A52A2A" },
    { name: "Red", color: "#FF0000" },
  ];

  const products: Product[] = [
    // Men's Products
    {
      id: 1,
      name: "Men's Round Neck T-Shirt",
      price: "Rs. 399.00",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop",
      rating: 5,
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "Men's T-Shirts",
      colors: [
        { name: "Black", color: "#000000", isSelected: true },
        { name: "White", color: "#FFFFFF" },
        { name: "Navy", color: "#000080" },
        { name: "Royal", color: "#4169E1" },
      ],
    },
    {
      id: 2,
      name: "Men's V-Neck T-Shirt",
      price: "Rs. 449.00",
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=400&h=600&fit=crop",
      rating: 4,
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "Men's T-Shirts",
      colors: [
        { name: "White", color: "#FFFFFF" },
        { name: "Black", color: "#000000" },
        { name: "Navy", color: "#000080" },
        { name: "Maroon", color: "#800000" },
      ],
    },
    {
      id: 3,
      name: "Men's Track Pants",
      price: "Rs. 699.00",
      image: "https://images.unsplash.com/photo-1506629905962-d997d54d4702?w=400&h=600&fit=crop",
      rating: 5,
      sizes: ["M", "L", "XL", "XXL"],
      category: "Men's Bottomwear",
      colors: [
        { name: "Black", color: "#000000" },
        { name: "Navy", color: "#000080" },
        { name: "Maroon", color: "#800000" },
        { name: "T-Blue", color: "#008B8B" },
      ],
    },
    // Women's Products
    {
      id: 4,
      name: "Women's Flat Ankle Leggings",
      price: "Rs. 599.00",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=600&fit=crop",
      rating: 5,
      sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
      category: "Women's Leggings",
      colors: availableColors.slice(0, 8),
    },
    {
      id: 5,
      name: "Women's Shimmer Leggings",
      price: "Rs. 799.00",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      rating: 5,
      sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
      category: "Women's Leggings",
      colors: [
        { name: "Black", color: "#000000" },
        { name: "Navy", color: "#000080" },
        { name: "Maroon", color: "#800000" },
        { name: "Purple", color: "#800080" },
      ],
    },
    {
      id: 6,
      name: "Saree Shapewear",
      price: "Rs. 649.00",
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=600&fit=crop",
      rating: 4,
      sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
      category: "Saree Shapewear",
      colors: [
        { name: "Skin", color: "#FDBCB4" },
        { name: "Black", color: "#000000" },
        { name: "White", color: "#FFFFFF" },
        { name: "Cream", color: "#FFFDD0" },
      ],
    },
    {
      id: 7,
      name: "Women's Night T-Shirt",
      price: "Rs. 399.00",
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=600&fit=crop",
      rating: 4,
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "Night Wear",
      colors: [
        { name: "Pink", color: "#FF69B4" },
        { name: "Lavender", color: "#E6E6FA" },
        { name: "Lt-Green", color: "#90EE90" },
        { name: "Tea Rose", color: "#F4C2C2" },
      ],
    },
    {
      id: 8,
      name: "Women's 3/4 Leggings",
      price: "Rs. 499.00",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=600&fit=crop",
      rating: 4,
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "Women's Leggings",
      colors: availableColors.slice(8, 14),
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
            Discover our most popular garments for men and women with all size and color options available.
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