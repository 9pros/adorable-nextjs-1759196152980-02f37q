'use client'

import React from 'react'

const Services = () => {
  const services = [
    {
      icon: '❄️',
      title: 'Air Conditioning',
      description: 'Professional installation, repair, and maintenance of all AC systems',
      features: ['Installation', 'Repair', 'Maintenance', 'Emergency Service']
    },
    {
      icon: '🔥',
      title: 'Heating Systems',
      description: 'Complete heating solutions including furnaces, boilers, and heat pumps',
      features: ['Furnace Repair', 'Boiler Service', 'Heat Pumps', 'System Replacement']
    },
    {
      icon: '💨',
      title: 'Ventilation & Air Quality',
      description: 'Improve indoor air quality with advanced ventilation solutions',
      features: ['Air Purification', 'Humidity Control', 'Duct Cleaning', 'Ventilation Systems']
    },
    {
      icon: '🔄',
      title: 'HVAC Maintenance',
      description: 'Preventative maintenance plans to keep your system running efficiently',
      features: ['Annual Tune-ups', 'Filter Replacement', 'System Inspection', 'Performance Optimization']
    },
    {
      icon: '🏠',
      title: 'Commercial HVAC',
      description: 'Commercial-grade HVAC solutions for businesses and large facilities',
      features: ['Commercial Systems', 'Building Automation', 'Energy Management', 'Large-scale Installations']
    },
    {
      icon: '🌱',
      title: 'Energy Efficient Solutions',
      description: 'Eco-friendly and energy-saving HVAC options for modern homes',
      features: ['High-Efficiency Systems', 'Smart Thermostats', 'Energy Audits', 'Green Solutions']
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our HVAC Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive heating, ventilation, and air conditioning services for residential and commercial properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose ProClimate?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl text-blue-600 mb-2">15+</div>
                <p className="font-semibold">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl text-blue-600 mb-2">5,000+</div>
                <p className="font-semibold">Happy Customers</p>
              </div>
              <div>
                <div className="text-3xl text-blue-600 mb-2">24/7</div>
                <p className="font-semibold">Emergency Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services