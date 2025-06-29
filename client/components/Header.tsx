import { Search, User, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  cartItemsCount?: number;
  cartCount?: number;
  onCartClick?: () => void;
  onCartToggle?: () => void;
}

export default function Header({
  cartItemsCount = 0,
  cartCount = 0,
  onCartClick,
  onCartToggle,
}: HeaderProps) {
  const totalCartCount = cartItemsCount || cartCount;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page or filter products
      console.log("Searching for:", searchQuery);
      // For now, just alert the search term
      alert(`Searching for: ${searchQuery}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navigationItems = [
    {
      name: "Men's",
      hasDropdown: true,
      items: [
        "Round Neck T-Shirts",
        "V-Neck T-Shirts",
        "Polo T-Shirts",
        "Long Sleeve T-Shirts",
        "Track Pants",
        "Shorts",
      ],
    },
    {
      name: "Women's",
      hasDropdown: true,
      isNew: true,
      items: [
        "Full Length Leggings",
        "Ankle Leggings",
        "Churidhar Leggings",
        "Night Wear",
        "Saree Shapewear",
      ],
    },
    {
      name: "Leggings",
      hasDropdown: true,
      items: [
        "Flat Ankle Leggings",
        "Flat Full-Length",
        "Churidhar Ankle",
        "Churidhar Full-Length",
        "Shimmer Leggings",
        "Striped Leggings",
      ],
    },
    {
      name: "Saree Shapewear",
      hasDropdown: true,
      items: [
        "Lycra Cotton Shapewear",
        "Polyester Shapewear",
        "Shimmer Shapewear",
      ],
    },
    {
      name: "Night Wear",
      hasDropdown: true,
      items: ["Night T-Shirts", "3/4 Leggings", "Shorts"],
    },
    {
      name: "Innerwear",
      hasDropdown: true,
      items: ["Basic Slips", "Adjustment Slips", "Panties"],
    },
    { name: "Sale", hasDropdown: false },
  ];

  return (
    <header className="bg-white w-full">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:text-[#7C3AED] transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Logo - Center on mobile, left on desktop */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Link to="/" className="h-8 md:h-12 flex items-center">
              <span className="text-[20px] md:text-[24px] font-bold bg-gradient-to-r from-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent">
                Your Brand
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center flex-1 justify-center">
            <ul className="flex items-center space-x-0">
              {navigationItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() =>
                    item.hasDropdown && setActiveDropdown(item.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href="#"
                    className="flex items-center px-4 py-2.5 text-[#111] font-medium text-[15px] leading-[26.25px] hover:text-[#7C3AED] transition-colors"
                  >
                    <span className="relative">
                      {item.name}
                      {item.isNew && (
                        <span className="absolute -top-3 -right-8 bg-[#516CF4] text-white text-[9px] font-semibold px-2 py-1 rounded-sm uppercase">
                          New
                        </span>
                      )}
                    </span>
                    {item.hasDropdown && (
                      <svg
                        className={`ml-1 w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.hasDropdown &&
                    item.items &&
                    activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2">
                        {item.items.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="block px-4 py-2 text-[14px] text-[#111] hover:text-[#7C3AED] hover:bg-gray-50 transition-colors"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-3 md:space-x-5">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1 hover:text-[#7C3AED] transition-colors"
            >
              <Search className="w-5 h-5 md:w-[17px] md:h-[17px]" />
            </button>
            <Link
              to="/cart"
              onClick={onCartClick || onCartToggle}
              className="p-1 hover:text-[#7C3AED] transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5 md:w-[21px] md:h-[17px]" />
              {totalCartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#DD3327] text-white text-[10px] w-[18px] h-[18px] rounded-full flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-200 z-50">
            <nav className="px-4 py-2">
              <ul className="space-y-1">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    <div>
                      <button
                        className="flex items-center justify-between w-full py-3 text-[#111] font-medium text-[15px] hover:text-[#7C3AED] transition-colors border-b border-gray-100"
                        onClick={() => {
                          if (item.hasDropdown) {
                            setActiveDropdown(
                              activeDropdown === item.name ? null : item.name,
                            );
                          } else {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                      >
                        <span className="relative">
                          {item.name}
                          {item.isNew && (
                            <span className="ml-2 bg-[#516CF4] text-white text-[9px] font-semibold px-2 py-1 rounded-sm uppercase">
                              New
                            </span>
                          )}
                        </span>
                        {item.hasDropdown && (
                          <svg
                            className={`w-4 h-4 opacity-50 transition-transform duration-200 ${
                              activeDropdown === item.name ? "rotate-90" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        )}
                      </button>

                      {/* Mobile Submenu */}
                      {item.hasDropdown &&
                        item.items &&
                        activeDropdown === item.name && (
                          <div className="pl-4 py-2 bg-gray-50">
                            {item.items.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href="#"
                                className="block py-2 text-[13px] text-[#666] hover:text-[#7C3AED] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem}
                              </a>
                            ))}
                          </div>
                        )}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4">
            <form onSubmit={handleSearch} className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                    autoFocus
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#7C3AED] text-white rounded-lg hover:bg-[#6D28D9] transition-colors"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="px-4 py-3 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Cancel
                </button>
              </div>

              {/* Quick suggestions */}
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">Popular searches:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "leggings",
                    "t-shirts",
                    "palazzo",
                    "shapewear",
                    "night wear",
                  ].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => {
                        setSearchQuery(term);
                        handleSearch(new Event("submit") as any);
                      }}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
