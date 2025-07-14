import React, { useState } from 'react';
import { Gamepad2, User, MapPin, Clock, Shield } from 'lucide-react';
import store from '../data/store.png'
const AboutSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Our Shop
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your trusted source for gaming currency and digital credits across all major platforms
          </p>
        </div>
        
       {/* Shop Image and Info Section */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
  <div className="relative group">
    <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
      <div className="relative h-[35rem] w-full bg-slate-800">
        <img 
          src={store}
          alt="Gaming Shop Interior"
          className={`w-full h-full object-contain transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-900 animate-pulse flex items-center justify-center">
            <Gamepad2 className="h-12 w-12 text-gray-500" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-2">Gaming Paradise</h3>
          <p className="text-gray-300">Modern gaming store with latest technology</p>
        </div>
      </div>
    </div>
  </div>
  {/* Your other grid item would go here */}

          {/* Location and Hours */}
          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Visit Our Store</h3>
              </div>
              <p className="text-gray-300 mb-4">
                37 Benamara Chabane Street, Khenchela<br />
                Khenchela, 40000
              </p>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.072906691031!2d7.148894968262902!3d35.42822393446808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f7213b0285b861%3A0x22b407dd0cf8ad91!2sRue%20Benamara%20Chabane%2C%20Khenchela!5e0!3m2!1sfr!2sdz!4v1752416988637!5m2!1sfr!2sdz"
                  title='location'
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Store Hours</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Sunday - Thursday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>3:00 PM - 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600 rounded-full w-20 h-20 mx-auto blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Gamepad2 className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
              Instant Delivery
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Get your gaming currency delivered instantly to your email with our automated system
            </p>
          </div>
          
          <div className="group text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full w-20 h-20 mx-auto blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
              Secure Transactions
            </h3>
            <p className="text-gray-400 leading-relaxed">
              All transactions are protected with industry-standard security and encryption
            </p>
          </div>
          
          <div className="group text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-600 rounded-full w-20 h-20 mx-auto blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-green-600 to-green-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <User className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
              24/7 Support
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Our dedicated support team is available round the clock to assist you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;