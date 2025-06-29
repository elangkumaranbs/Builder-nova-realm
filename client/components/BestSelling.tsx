import { ProductRow } from "./ui/product-card";
import { productsData } from "../data/products";

interface BestSellingProps {
  onAddToCart?: (productId: number) => void;
  onQuickView?: (productId: number) => void;
}

export default function BestSelling({
  onAddToCart,
  onQuickView,
}: BestSellingProps) {
  // Convert product data to the format expected by ProductRow
  const products = productsData.map(product => ({
    id: product.id,
    name: product.name,
    price: `Rs. ${product.price.toLocaleString()}.00`,
    image: product.images[0],
    rating: product.rating,
    colors: product.colors,
    sizes: product.sizes,
    category: product.category,
  }));

  const handleQuickView = (productId: number) => {
    if (onQuickView) {
      onQuickView(productId);
    } else {
      // Navigate to product detail page
      window.location.href = `/product/${productId}`;
    }
  };

  const handleAddToCart = (productId: number) => {
    if (onAddToCart) {
      onAddToCart(productId);
    } else {
      console.log("Add to cart product:", productId);
      const product = productsData.find((p) => p.id === productId);
      if (product) {
        alert(`${product.name} added to cart!`);
      }
    }
  };

  const handleColorSelect = (productId: number, colorIndex: number) => {
    console.log("Color selected:", productId, colorIndex);
    const product = productsData.find((p) => p.id === productId);
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