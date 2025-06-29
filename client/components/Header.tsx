import { Search, User, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Men's", hasDropdown: true },
    { name: "Women's", hasDropdown: true, isNew: true },
    { name: "Leggings", hasDropdown: true },
    { name: "Saree Shapewear", hasDropdown: true },
    { name: "Night Wear", hasDropdown: true },
    { name: "Innerwear", hasDropdown: true },
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
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/49ebe7ecbfb40a1a78f7cb036931456be3fa4838?width=474"
              alt="Indian Flower"
              className="h-8 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center flex-1 justify-center">
            <ul className="flex items-center space-x-0">
              {navigationItems.map((item, index) => (
                <li key={index} className="relative">
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
                        className="ml-1 w-3.5 h-3.5 opacity-50"
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
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-3 md:space-x-5">
            <button className="p-1 hover:text-[#ED1451] transition-colors">
              <Search className="w-5 h-5 md:w-[17px] md:h-[17px]" />
            </button>
            <button className="p-1 hover:text-[#ED1451] transition-colors relative">
              <ShoppingCart className="w-5 h-5 md:w-[21px] md:h-[17px]" />
              <span className="absolute -top-2 -right-2 bg-[#DD3327] text-white text-[10px] w-[18px] h-[18px] rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-200 z-50">
            <nav className="px-4 py-2">
              <ul className="space-y-1">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center justify-between py-3 text-[#111] font-medium text-[15px] hover:text-[#ED1451] transition-colors border-b border-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
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
                          className="w-4 h-4 opacity-50"
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
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
