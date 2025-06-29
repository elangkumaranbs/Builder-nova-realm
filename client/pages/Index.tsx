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

  return (
    <div className="min-h-screen bg-white">
      <PromoBanner />
      <Header
        cartItemsCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
      />
      <HeroBanner />
      <CategoryShowcase />
      <BestSelling />
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
