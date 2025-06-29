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

  const handleAddToCart = (productId: number) => {
    // Sample product data - in a real app, this would come from an API or prop
    const productData = {
      1: {
        name: "Women's Full Length Leggings",
        price: 599,
        image:
          "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
      },
      2: {
        name: "Men's Round Neck T-Shirt",
        price: 399,
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      },
      3: {
        name: "Shimmer Leggings",
        price: 799,
        image:
          "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
      },
      4: {
        name: "Churidhar Ankle Leggings",
        price: 449,
        image:
          "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop",
      },
      5: {
        name: "Night Wear T-Shirt",
        price: 299,
        image:
          "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop",
      },
      6: {
        name: "Men's Track Pants",
        price: 699,
        image:
          "https://images.unsplash.com/photo-1506629905962-d997d54d4702?w=400&h=400&fit=crop",
      },
      7: {
        name: "Flat Ankle Leggings",
        price: 399,
        image:
          "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
      },
      8: {
        name: "Saree Shapewear",
        price: 599,
        image:
          "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop",
      },
    };

    const product = productData[productId as keyof typeof productData];
    if (!product) return;

    const newCartItem: CartItem = {
      id: `${productId}-${Date.now()}`,
      name: product.name,
      price: product.price,
      quantity: 1,
      size: "S/M",
      image: product.image,
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
