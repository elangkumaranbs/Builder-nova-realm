import React, { useState } from "react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  StarIcon,
  EyeIcon,
  SearchIcon,
  UserIcon,
  CartIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  PinterestIcon,
  ChevronDownIcon,
  CircleIcon,
} from "./ui/icons";
import {
  ShopNowButton,
  AddToCartButton,
  ReadMoreButton,
  CircularArrowButton,
  QuickViewButton,
  ProductTitle,
} from "./ui/enhanced-button";
import { ProductCard } from "./ui/product-card";
import {
  SocialIconsGroup,
  InstagramButton,
  TwitterButton,
  FacebookButton,
  PinterestButton,
} from "./ui/social-icons";
import {
  HeaderIcons,
  SearchButton,
  UserButton,
  CartButton,
  SearchBar,
} from "./ui/header-icons";

export default function DesignSystemShowcase() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [cartItems, setCartItems] = useState(2);

  const sampleProduct = {
    id: 1,
    name: "Indian Flower Soft Denim Palazzo Pants",
    price: "Rs. 1,199.00",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/12909c7b765cb7c932ef0ff7e78e2cc1b96be656?width=923",
    rating: 5,
    colors: [
      { name: "Metallic Gold", color: "#AA856B", isSelected: true },
      { name: "Metallic Silver", color: "#C1BDBD" },
      { name: "Orange Spark", color: "#FF6540" },
      { name: "Zippy Orange", color: "#FB7637" },
      { name: "Tango Spirit", color: "#FE9738" },
    ],
  };

  const handleSearch = (query: string) => {
    console.log("Search:", query);
    setShowSearchBar(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8">
        Indian Flower Design System
      </h1>

      {/* Icons Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Icons</h2>
        <div className="grid grid-cols-6 gap-4 p-6 bg-gray-50 rounded-lg">
          <div className="flex flex-col items-center gap-2">
            <ArrowRightIcon size="lg" variant="black" />
            <span className="text-xs">Arrow Right</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ArrowLeftIcon size="lg" variant="black" />
            <span className="text-xs">Arrow Left</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <StarIcon size="lg" variant="primary" />
            <span className="text-xs">Star</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <EyeIcon size="lg" variant="black" />
            <span className="text-xs">Eye</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SearchIcon size="lg" variant="secondary" />
            <span className="text-xs">Search</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CartIcon size="lg" variant="secondary" />
            <span className="text-xs">Cart</span>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Buttons</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-gray-50 rounded-lg">
          <ShopNowButton text="Shop Now" />
          <AddToCartButton text="Add to Cart" />
          <ReadMoreButton text="Read more" variant="primary" />
          <ReadMoreButton text="Read more" variant="secondary" />
        </div>
        <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
          <CircularArrowButton direction="left" />
          <CircularArrowButton direction="right" />
          <QuickViewButton showTooltip={true} />
        </div>
      </section>

      {/* Header Icons Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Header Icons</h2>
        <div className="relative">
          <div className="flex justify-center p-6 bg-gray-50 rounded-lg">
            <HeaderIcons
              onSearch={() => setShowSearchBar(true)}
              onUserAccount={() => console.log("User account")}
              onCart={() => console.log("Cart")}
              cartItemCount={cartItems}
            />
          </div>
          <SearchBar
            isOpen={showSearchBar}
            onClose={() => setShowSearchBar(false)}
            onSearch={handleSearch}
          />
        </div>
      </section>

      {/* Social Icons Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Social Icons</h2>
        <div className="flex justify-center gap-4 p-6 bg-gray-50 rounded-lg">
          <SocialIconsGroup
            instagram="https://instagram.com"
            twitter="https://twitter.com"
            facebook="https://facebook.com"
            pinterest="https://pinterest.com"
          />
        </div>
      </section>

      {/* Product Card Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Product Card</h2>
        <div className="flex justify-center p-6 bg-gray-50 rounded-lg">
          <div className="max-w-sm">
            <ProductCard
              {...sampleProduct}
              onQuickView={(id) => console.log("Quick view:", id)}
              onAddToCart={(id) => {
                console.log("Add to cart:", id);
                setCartItems((prev) => prev + 1);
              }}
              onColorSelect={(id, colorIndex) =>
                console.log("Color select:", id, colorIndex)
              }
            />
          </div>
        </div>
      </section>

      {/* Product Title Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Product Titles</h2>
        <div className="space-y-2 p-6 bg-gray-50 rounded-lg">
          <ProductTitle title="Indian Flower Soft Denim Palazzo Pants" />
          <ProductTitle title="Gold Metallic Straight Pants" variant="hover" />
          <ProductTitle
            title="BreezeBlue Fray-Edge Denim Palazzo"
            variant="large"
          />
        </div>
      </section>

      {/* Usage Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Usage Examples</h2>
        <div className="p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold mb-2">Import Components:</h3>
          <pre className="text-sm bg-white p-3 rounded text-gray-700 overflow-x-auto">
            {`import {
  ArrowRightIcon,
  StarIcon,
  ShopNowButton,
  AddToCartButton,
  ProductCard,
  HeaderIcons,
  SocialIconsGroup
} from "./components/ui";`}
          </pre>
        </div>
      </section>

      {/* Color Palette */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Color Palette</h2>
        <div className="grid grid-cols-4 gap-4 p-6 bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#ED1451] rounded-lg mx-auto mb-2"></div>
            <span className="text-xs">Primary: #ED1451</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#DD3327] rounded-lg mx-auto mb-2"></div>
            <span className="text-xs">Secondary: #DD3327</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#111111] rounded-lg mx-auto mb-2"></div>
            <span className="text-xs">Black: #111111</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#555555] rounded-lg mx-auto mb-2"></div>
            <span className="text-xs">Gray: #555555</span>
          </div>
        </div>
      </section>
    </div>
  );
}
