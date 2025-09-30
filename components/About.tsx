'use client'

import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About ProClimate HVAC</h2>
            <p className="text-lg text-gray-600 mb-6">
              For over 15 years, ProClimate HVAC has been providing award-winning heating and cooling 
              services to homes and businesses across the region. Our commitment to excellence and 
              customer satisfaction has earned us numerous industry awards and thousands of satisfied customers.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-gray-700 font-semibold">Licensed & Insured Technicians</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-gray-700 font-semibold">Same-Day Service Available</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-gray-700 font-semibold">Upfront Pricing, No Hidden Fees</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-gray-700 font-semibold">Lifetime Workmanship Guarantee</span>
              </div>
            </div>
            
            <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Meet Our Team
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-3xl text-blue-600 font-bold mb-2">2024</div>
                  <p className="text-gray-700 font-semibold">HVAC Excellence Award</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-3xl text-blue-600 font-bold mb-2">A+</div>
                  <p className="text-gray-700 font-semibold">BBB Rating</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-3xl text-blue-600 font-bold mb-2">98%</div>
                  <p className="text-gray-700 font-semibold">Customer Satisfaction</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-3xl text-blue-600 font-bold mb-2">15min</div>
                  <p className="text-gray-700 font-semibold">Average Response Time</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm">
              🏆 Award Winning
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About