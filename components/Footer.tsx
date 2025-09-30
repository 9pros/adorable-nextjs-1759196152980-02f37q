'use client'

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">PC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">ProClimate</h3>
                <p className="text-blue-200 text-sm">HVAC Services</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Award-winning HVAC services with over 15 years of experience. 
              Your comfort is our priority.
            </p>
            <div className="flex space-x-4">
              <span className="text-gray-400 hover:text-white cursor-pointer">FB</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">IG</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">TW</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">LI</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">AC Repair</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Heating Systems</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Maintenance Plans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Commercial HVAC</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Emergency Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="mr-3">📞</span>
                <div>
                  <p className="font-semibold">Emergency Line</p>
                  <p className="text-blue-300">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-3">✉️</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-blue-300">service@proclimatehvac.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-3">📍</span>
                <div>
                  <p className="font-semibold">Service Area</p>
                  <p className="text-gray-300">Greater Seattle Region</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ProClimate HVAC. All rights reserved. License #HVAC12345
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer