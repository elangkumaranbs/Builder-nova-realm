import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../components/ui/icons";
import ShoppingCart from "../components/ShoppingCart";
import Header from "../components/Header";
import PromoBanner from "../components/PromoBanner";

interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  sizes: string[];
  features: {
    securePayment: boolean;
    cashOnDelivery: boolean;
    freeShipping: boolean;
    easyExchange: boolean;
  };
  specifications: Record<string, string>;
  washCare: string[];
  sizeChart: Record<string, string>;
}

interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  colors: string[];
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
}

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState("S/M");
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "product-description",
  );
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Sample product data based on Figma design
  const product: Product = {
    id: "breezeblue-denim-palazzo",
    name: "BreezeBlue Fray-Edge Denim Palazzo",
    price: 1299,
    images: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3bf03da52c3973ea4501e934752815f6d8d378df?width=898",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ba773f2af7fb7260bcbdfeebfac172333b782aad?width=898",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ecbb18b7ad2811627bcaa47db79fe181fcbeecbb?width=898",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/631a4d4c4a471883aa9d65056d6c5a367bc3e529?width=898",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/092f46f72cd524dba4611dbe54863ca4bc0707ff?width=898",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/548bcf34ecf88b5a1ee77d47e9bbf58aec4cafd7?width=898",
    ],
    description:
      "The BreezeBlue Fray-Edge Denim Palazzo are expertly crafted with a stylish fray-edge design and comfortable denim fabric. With a modern silhouette and on-trend details, these culottes are perfect for adding a touch of sophistication to any outfit. Made from high-quality materials, they provide both style and comfort for a versatile and fashionable look.",
    sizes: ["S/M", "L/XL", "2XL/3XL"],
    features: {
      securePayment: true,
      cashOnDelivery: true,
      freeShipping: true,
      easyExchange: true,
    },
    specifications: {
      Fabric: "Premium Denim",
      Fit: "Relaxed Palazzo",
      Length: "Full Length",
      Occasion: "Casual & Semi-formal",
      Care: "Machine Wash",
    },
    washCare: [
      "Machine wash cold with like colors",
      "Do not bleach",
      "Tumble dry low",
      "Iron on low heat if needed",
      "Do not dry clean",
    ],
    sizeChart: {
      "S/M": "Waist: 26-30 inches, Hip: 36-40 inches",
      "L/XL": "Waist: 30-34 inches, Hip: 40-44 inches",
      "2XL/3XL": "Waist: 34-38 inches, Hip: 44-48 inches",
    },
  };

  const relatedProducts: RelatedProduct[] = [
    {
      id: "1",
      name: "Indian Flower Soft Denim Palazzo Pants",
      price: 1199,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2c3928fde322b960ef66eaaa8c8535ffd7f05d84?width=878",
      rating: 5,
      colors: ["#FC532F", "#CC2527", "#DD2867", "#EBE9DA", "#FFF"],
    },
    {
      id: "2",
      name: "Soul Blue Rayon Palazzo",
      price: 549,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1cc4bf65525a6fe5fd7431d1162ff4601188ef06?width=878",
      rating: 4,
      colors: ["#FC532F", "#CC2527", "#DD2867", "#EBE9DA", "#FFF"],
    },
    {
      id: "3",
      name: "Wild Strawberry Rayon Palazzo",
      price: 549,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a5472dd684089e0fe750cfd6e9f8f4f6be3356ce?width=878",
      rating: 5,
      colors: ["#FC532F", "#CC2527", "#DD2867", "#EBE9DA", "#FFF"],
    },
    {
      id: "4",
      name: "Wild Strawberry Plus Size Rayon Palazzo",
      price: 599,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a213c0a74d2630ff371b5bca3cbe446723625adc?width=878",
      rating: 5,
      colors: ["#FFF", "#DE9A15", "#201C1B", "#E2D1C1", "#93182A"],
    },
  ];

  const handleAddToCart = () => {
    const newCartItem: CartItem = {
      id: `${product.id}-${selectedSize}`,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: quantity,
      image: product.images[0],
    };

    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === newCartItem.id,
    );

    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedItems);
    } else {
      // Add new item to cart
      setCartItems([...cartItems, newCartItem]);
    }

    // Open cart drawer
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header
        cartItemsCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Breadcrumb */}
      <div className="bg-white py-6">
        <div className="max-w-[1320px] mx-auto px-8">
          <div className="flex items-center text-sm">
            <a href="#" className="text-[#111] hover:text-[#7C3AED]">
              Home
            </a>
            <span className="mx-2 text-[#555]">/</span>
            <span className="text-[#555]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-[1320px] mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-100"
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-[30px] font-normal text-[#111] leading-[42px] mb-4">
                {product.name}
              </h1>
              <div className="text-[28px] font-medium text-[#111] mb-6">
                Rs. {product.price.toLocaleString()}.00
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[#555]">Size:</span>
                <span className="text-[#111] font-medium">{selectedSize}</span>
              </div>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-2 rounded text-sm border transition-colors ${
                      selectedSize === size
                        ? "bg-[#111] text-white border-[#111]"
                        : "bg-white text-[#555] border-[#EBEBEB] hover:border-[#111]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Ask Question & Share */}
            <div className="flex items-center gap-8 py-4 border-b border-[#EBEBEB]">
              <button className="flex items-center gap-2 text-[#111] hover:text-[#7C3AED] transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Ask a Question
              </button>
              <button className="flex items-center gap-2 text-[#111] hover:text-[#7C3AED] transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
                Share
              </button>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4">
              <div className="flex items-center border border-[#EBEBEB] rounded-full bg-[#F5F5F5] px-2">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <span className="px-4 py-2 text-[#111] font-medium min-w-[50px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#111] text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#333] transition-colors"
              >
                Add to Cart
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-4 gap-4 py-6 bg-white">
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-2 bg-[#7C3AED] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <p className="text-xs text-[#121212]">Secure Payment</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-2 bg-[#2563EB] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <p className="text-xs text-[#121212]">Cash On Delivery</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-2 bg-[#059669] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <p className="text-xs text-[#121212]">Free Shipping</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-2 bg-[#DC2626] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <p className="text-xs text-[#121212]">Easy Exchange</p>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#555]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span className="text-[#555]">Estimate delivery times:</span>
                <span className="text-[#111] font-medium">3-6 days</span>
                <span className="text-[#555]">(India).</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#555]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span className="text-[#555]">Return within</span>
                <span className="text-[#111] font-medium">7 days</span>
                <span className="text-[#555]">
                  of purchase. Duties & taxes are non-refundable.
                </span>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4 border-t border-[#EBEBEB] pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[#555]">Sku:</span>
                  <span className="ml-2 text-[#111]">N/A</span>
                </div>
                <div>
                  <span className="text-[#555]">Available:</span>
                  <span className="ml-2 text-[#111]">In Stock</span>
                </div>
                <div>
                  <span className="text-[#555]">Vendor:</span>
                  <span className="ml-2 text-[#111]">Your Brand</span>
                </div>
                <div>
                  <span className="text-[#555]">Barcode:</span>
                  <span className="ml-2 text-[#111]">N/A</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="mt-12 space-y-1">
          <div className="border-t border-b border-[#CCC]">
            <button
              onClick={() => toggleSection("product-description")}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="text-[#8C5A5A] font-medium text-sm uppercase">
                Product Description
              </span>
              <span className="text-[#8C5A5A] text-lg">
                {expandedSection === "product-description" ? "-" : "+"}
              </span>
            </button>
            {expandedSection === "product-description" && (
              <div className="px-4 pb-4 text-[#555] text-sm leading-relaxed border border-[#DDD] bg-white">
                {product.description}
              </div>
            )}
          </div>

          <div className="border-b border-[#CCC]">
            <button
              onClick={() => toggleSection("specifications")}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="text-[#8C5A5A] font-medium text-sm uppercase">
                Product Specifications
              </span>
              <span className="text-[#8C5A5A] text-lg">
                {expandedSection === "specifications" ? "-" : "+"}
              </span>
            </button>
            {expandedSection === "specifications" && (
              <div className="px-4 pb-4 border border-[#DDD] bg-white">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div key={key}>
                        <span className="text-[#555] font-medium">{key}:</span>
                        <span className="ml-2 text-[#111]">{value}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="border-b border-[#CCC]">
            <button
              onClick={() => toggleSection("wash-care")}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="text-[#8C5A5A] font-medium text-sm uppercase">
                Wash Care Instructions
              </span>
              <span className="text-[#8C5A5A] text-lg">
                {expandedSection === "wash-care" ? "-" : "+"}
              </span>
            </button>
            {expandedSection === "wash-care" && (
              <div className="px-4 pb-4 border border-[#DDD] bg-white">
                <ul className="space-y-2 text-sm text-[#555]">
                  {product.washCare.map((instruction, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="border-b border-[#CCC]">
            <button
              onClick={() => toggleSection("size-chart")}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="text-[#8C5A5A] font-medium text-sm uppercase">
                Size Chart
              </span>
              <span className="text-[#8C5A5A] text-lg">
                {expandedSection === "size-chart" ? "-" : "+"}
              </span>
            </button>
            {expandedSection === "size-chart" && (
              <div className="px-4 pb-4 border border-[#DDD] bg-white">
                <div className="space-y-2 text-sm">
                  {Object.entries(product.sizeChart).map(
                    ([size, measurements]) => (
                      <div key={size}>
                        <span className="text-[#111] font-medium">{size}:</span>
                        <span className="ml-2 text-[#555]">{measurements}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* People Also Bought */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-[45px] font-normal text-[#111] leading-[58.5px] mb-2">
              People Also Bought
            </h2>
            <p className="text-[#555] text-sm">
              Here's some of our most similar products people are buying. Click
              to discover trending style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[15px] text-[#111] font-normal leading-tight">
                    {relatedProduct.name}
                  </h3>
                  {relatedProduct.rating === 5 && (
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 fill-[#E91162]"
                          viewBox="0 0 11 11"
                        >
                          <path d="M10.5 4.22583C10.5 4.0826 10.3893 3.99146 10.168 3.95239L7.14062 3.50317L5.79297 0.768799C5.71484 0.612549 5.61719 0.534424 5.5 0.534424C5.38281 0.534424 5.28516 0.612549 5.20703 0.768799L3.85938 3.50317L0.832031 3.95239C0.610677 3.99146 0.5 4.0826 0.5 4.22583C0.5 4.31698 0.552083 4.41463 0.65625 4.5188L2.84375 6.64771L2.31641 9.65552C2.31641 9.7076 2.31641 9.74666 2.31641 9.77271C2.31641 9.85083 2.33594 9.91919 2.375 9.97778C2.41406 10.0364 2.47917 10.0657 2.57031 10.0657C2.63542 10.0657 2.71354 10.0396 2.80469 9.98755L5.5 8.5813L8.19531 9.98755C8.28646 10.0396 8.36458 10.0657 8.42969 10.0657C8.52083 10.0657 8.58594 10.0364 8.625 9.97778C8.66406 9.91919 8.68359 9.85083 8.68359 9.77271C8.68359 9.72062 8.68359 9.68156 8.68359 9.65552L8.15625 6.64771L10.3438 4.5188C10.4479 4.41463 10.5 4.31698 10.5 4.22583Z" />
                        </svg>
                      ))}
                    </div>
                  )}
                  <div className="text-[13px] text-[#111] font-medium">
                    Rs. {relatedProduct.price.toLocaleString()}.00
                  </div>
                  <div className="flex items-center gap-1">
                    {relatedProduct.colors.slice(0, 5).map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded border-2 border-white shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                    {relatedProduct.colors.length > 5 && (
                      <div className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center text-xs text-[#4A4A4A]">
                        +
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shopping Cart Drawer */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
