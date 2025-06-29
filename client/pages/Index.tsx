import { useState } from "react";
import PromoBanner from "../components/PromoBanner";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import CategoryShowcase from "../components/CategoryShowcase";
import BestSelling from "../components/BestSelling";
import InstagramFeed from "../components/InstagramFeed";
import FeaturedArticle from "../components/FeaturedArticle";
import Footer from "../components/Footer";
import MobileBottomNavigation from "../components/MobileBottomNavigation";
import ShoppingCart from "../components/ShoppingCart";
import { getProductById } from "../data/products";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
}

export default function Index() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const handleAddToCart = (productId: number) => {
    const productData = getProductById(productId);
    if (!productData) return;

    const newCartItem: CartItem = {
      id: `${productId}-${Date.now()}`,
      name: productData.name,
      price: productData.price,
      quantity: 1,
      size: productData.sizes[0] || "S/M",
      image: productData.images[0],
    };

    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.name === newCartItem.name && item.size === newCartItem.size,
    );

    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      // Add new item to cart
      setCartItems([...cartItems, newCartItem]);
    }

    // Open cart drawer to show the item was added
    setIsCartOpen(true);
  };

  const handleQuickView = (productId: number) => {
    // Navigate to product detail page
    window.location.href = `/product/${productId}`;
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      <PromoBanner />
      <Header
        cartItemsCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
      />
      <HeroBanner />
      <CategoryShowcase />
      <BestSelling
        onAddToCart={handleAddToCart}
        onQuickView={handleQuickView}
      />
      <InstagramFeed />
      <FeaturedArticle />
      <Footer />
      <MobileBottomNavigation />

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