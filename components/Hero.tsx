'use client'

import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-500 px-4 py-2 rounded-full mb-6">
            <span className="text-yellow-400">🏆</span>
            <span className="text-sm font-semibold">2024 HVAC Excellence Award Winner</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional HVAC Services
            <span className="block text-blue-200">You Can Trust</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            24/7 Emergency Service • Free Estimates • Licensed & Insured
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
              Schedule Service
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
              Free Estimate
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-500/20 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl mb-2">⏰</div>
              <h3 className="font-semibold mb-2">24/7 Emergency Service</h3>
              <p className="text-blue-100">We're here when you need us most</p>
            </div>
            <div className="bg-blue-500/20 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="font-semibold mb-2">Award-Winning Quality</h3>
              <p className="text-blue-100">Recognized for excellence in service</p>
            </div>
            <div className="bg-blue-500/20 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl mb-2">💯</div>
              <h3 className="font-semibold mb-2">100% Satisfaction</h3>
              <p className="text-blue-100">Your comfort is our priority</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero