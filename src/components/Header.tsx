import React, { useState } from 'react';
import { SearchIcon, ShoppingBagIcon, UserIcon, MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold tracking-tighter">MODESTYLE</h1>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Women
            </a>
            <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Men
            </a>
            <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Kids
            </a>
            <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Accessories
            </a>
            <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Sale
            </a>
          </nav>
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-1 hover:text-gray-600 transition-colors">
              <SearchIcon size={20} />
            </button>
            <button className="p-1 hover:text-gray-600 transition-colors hidden md:block">
              <UserIcon size={20} />
            </button>
            <button className="p-1 hover:text-gray-600 transition-colors relative">
              <ShoppingBagIcon size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </button>
            <button className="p-1 hover:text-gray-600 transition-colors md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
                Women
              </a>
              <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
                Men
              </a>
              <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
                Kids
              </a>
              <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
                Accessories
              </a>
              <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
                Sale
              </a>
              <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
                Account
              </a>
            </nav>
          </div>}
      </div>
    </header>;
}