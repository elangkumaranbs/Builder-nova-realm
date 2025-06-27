import { Search, User, ShoppingCart } from "lucide-react";

export default function Header() {
  const navigationItems = [
    { name: "BottomWear", hasDropdown: true },
    { name: "LoungeWear", hasDropdown: true, isNew: true },
    { name: "InnerWear", hasDropdown: true },
    { name: "Plus Size", hasDropdown: true },
    { name: "Liva Collections", hasDropdown: false },
    { name: "Stores", hasDropdown: false },
    { name: "Franchise", hasDropdown: false },
  ];

  return (
    <header className="bg-white w-full">
      <div className="max-w-[1320px] mx-auto px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/49ebe7ecbfb40a1a78f7cb036931456be3fa4838?width=474"
              alt="Indian Flower"
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center">
            <ul className="flex items-center space-x-0">
              {navigationItems.map((item, index) => (
                <li key={index} className="relative">
                  <a
                    href="#"
                    className="flex items-center px-4 py-2.5 text-[#111] font-medium text-[15px] leading-[26.25px] hover:text-[#ED1451] transition-colors"
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
          <div className="flex-1 flex justify-end items-center space-x-5">
            <button className="p-1 hover:text-[#ED1451] transition-colors">
              <Search className="w-[17px] h-[17px]" />
            </button>
            <button className="p-1 hover:text-[#ED1451] transition-colors">
              <User className="w-[17px] h-[17px]" />
            </button>
            <button className="p-1 hover:text-[#ED1451] transition-colors relative">
              <ShoppingCart className="w-[21px] h-[17px]" />
              <span className="absolute -top-2 -right-2 bg-[#DD3327] text-white text-[10px] w-[18px] h-[18px] rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
