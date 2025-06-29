import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShoppingCart from "../components/ShoppingCart";
import Header from "../components/Header";
import PromoBanner from "../components/PromoBanner";
import { getProductById, productsData, ProductData } from "../data/products";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductData | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState<string | null>("product-description");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (id) {
      const productData = getProductById(parseInt(id));
      if (productData) {
        setProduct(productData);
        setSelectedSize(productData.sizes[0] || "");
      }
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-4">The product you're looking for doesn't exist.</p>
          <a href="/" className="text-[#7C3AED] hover:underline">Return to Home</a>
        </div>
      </div>
    );
  }

  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    const newCartItem: CartItem = {
      id: `${product.id}-${selectedSize}`,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: quantity,
      image: product.images[0],
    };

    const existingItemIndex = cartItems.findIndex(item => item.id === newCartItem.id);

    if (existingItemIndex >= 0) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, newCartItem]);
    }

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity(prev => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <PromoBanner />
      <Header
        cartItemsCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Breadcrumb */}
      <div className="bg-white py-6">
        <div className="max-w-[1320px] mx-auto px-8">
          <div className="flex items-center text-sm">
            <a href="/" className="text-[#111] hover:text-[#7C3AED]">Home</a>
            <span className="mx-2 text-[#555]">/</span>
            <a href="#" className="text-[#111] hover:text-[#7C3AED]">{product.category}</a>
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
            {/* Main Image */}
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 cursor-pointer border-2 ${
                    selectedImageIndex === index ? 'border-[#7C3AED]' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
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
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < product.rating ? 'fill-[#E91162]' : 'fill-gray-300'}`}
                      viewBox="0 0 11 11"
                    >
                      <path d="M10.5 4.22583C10.5 4.0826 10.3893 3.99146 10.168 3.95239L7.14062 3.50317L5.79297 0.768799C5.71484 0.612549 5.61719 0.534424 5.5 0.534424C5.38281 0.534424 5.28516 0.612549 5.20703 0.768799L3.85938 3.50317L0.832031 3.95239C0.610677 3.99146 0.5 4.0826 0.5 4.22583C0.5 4.31698 0.552083 4.41463 0.65625 4.5188L2.84375 6.64771L2.31641 9.65552C2.31641 9.7076 2.31641 9.74666 2.31641 9.77271C2.31641 9.85083 2.33594 9.91919 2.375 9.97778C2.41406 10.0364 2.47917 10.0657 2.57031 10.0657C2.63542 10.0657 2.71354 10.0396 2.80469 9.98755L5.5 8.5813L8.19531 9.98755C8.28646 10.0396 8.36458 10.0657 8.42969 10.0657C8.52083 10.0657 8.58594 10.0364 8.625 9.97778C8.66406 9.91919 8.68359 9.85083 8.68359 9.77271C8.68359 9.72062 8.68359 9.68156 8.68359 9.65552L8.15625 6.64771L10.3438 4.5188C10.4479 4.41463 10.5 4.31698 10.5 4.22583Z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[#555]">({product.rating}/5)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-[28px] font-medium text-[#111]">
                  Rs. {product.price.toLocaleString()}.00
                </div>
                {product.originalPrice && (
                  <div className="text-[20px] text-[#999] line-through">
                    Rs. {product.originalPrice.toLocaleString()}.00
                  </div>
                )}
                {product.isHotSale && (
                  <span className="bg-[#DD3327] text-white px-2 py-1 text-xs font-semibold rounded">
                    HOT SALE
                  </span>
                )}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[#555]">Size:</span>
                <span className="text-[#111] font-medium">{selectedSize}</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded text-sm border transition-colors ${
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

            {/* Color Selection */}
            <div className="space-y-4">
              <span className="text-[#555]">Available Colors:</span>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform"
                    style={{ backgroundColor: color.color }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4">
              <div className="flex items-center border border-[#EBEBEB] rounded-full bg-[#F5F5F5] px-2">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="px-4 py-2 text-[#111] font-medium min-w-[50px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-[#111] text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#333] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 py-6 bg-gray-50 rounded-lg p-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#7C3AED] rounded-full" />
                  <span className="text-sm text-[#111]">{feature}</span>
                </div>
              ))}
            </div>

            {/* Product Description */}
            <div className="border-t border-[#EBEBEB] pt-6">
              <p className="text-[#555] text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="mt-12 space-y-1">
          <div className="border-t border-b border-[#CCC]">
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
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <span className="text-[#555] font-medium">{key}:</span>
                      <span className="ml-2 text-[#111]">{value}</span>
                    </div>
                  ))}
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
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-[45px] font-normal text-[#111] leading-[58.5px] mb-2">
                Related Products
              </h2>
              <p className="text-[#555] text-sm">
                Similar products you might like
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="group cursor-pointer">
                  <a href={`/product/${relatedProduct.id}`}>
                    <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 mb-4">
                      <img
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[15px] text-[#111] font-normal leading-tight">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3 h-3 ${i < relatedProduct.rating ? 'fill-[#E91162]' : 'fill-gray-300'}`}
                            viewBox="0 0 11 11"
                          >
                            <path d="M10.5 4.22583C10.5 4.0826 10.3893 3.99146 10.168 3.95239L7.14062 3.50317L5.79297 0.768799C5.71484 0.612549 5.61719 0.534424 5.5 0.534424C5.38281 0.534424 5.28516 0.612549 5.20703 0.768799L3.85938 3.50317L0.832031 3.95239C0.610677 3.99146 0.5 4.0826 0.5 4.22583C0.5 4.31698 0.552083 4.41463 0.65625 4.5188L2.84375 6.64771L2.31641 9.65552C2.31641 9.7076 2.31641 9.74666 2.31641 9.77271C2.31641 9.85083 2.33594 9.91919 2.375 9.97778C2.41406 10.0364 2.47917 10.0657 2.57031 10.0657C2.63542 10.0657 2.71354 10.0396 2.80469 9.98755L5.5 8.5813L8.19531 9.98755C8.28646 10.0396 8.36458 10.0657 8.42969 10.0657C8.52083 10.0657 8.58594 10.0364 8.625 9.97778C8.66406 9.91919 8.68359 9.85083 8.68359 9.77271C8.68359 9.72062 8.68359 9.68156 8.68359 9.65552L8.15625 6.64771L10.3438 4.5188C10.4479 4.41463 10.5 4.31698 10.5 4.22583Z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-[13px] text-[#111] font-medium">
                        Rs. {relatedProduct.price.toLocaleString()}.00
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
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