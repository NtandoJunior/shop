import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-100 pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">MODESTYLE</h3>
            <p className="text-sm text-gray-600 mb-4">
              Contemporary fashion for the modern individual. Quality designs at
              accessible prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Kids
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Find a Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Legal & Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <MapPinIcon size={18} className="mr-2 flex-shrink-0 mt-0.5" />
                <span>123 Fashion Street, Design District, City, 10001</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={18} className="mr-2 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={18} className="mr-2 flex-shrink-0" />
                <span>info@modestyle.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 MODESTYLE. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>;
}