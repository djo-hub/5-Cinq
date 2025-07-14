import React from 'react';
import { Gamepad2, Facebook,Github, Instagram, Mail, Phone, MapPin , X} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">5-CINQ</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted source for gaming currency , digital credits and subscriptions across all major platforms.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/djo_aymen" className="text-gray-400 hover:text-purple-400 transition-colors">
                <X className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/aymen__djo" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://github.com/djo-hub" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/aymen.madrid.35912672/" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>djoghlal.abid@univ-khenchela.dz</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+213797802178</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>37 Benamara Chabane Street , Khenchela</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Abid Djoghlal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;