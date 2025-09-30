'use client'

import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Seattle, WA",
      rating: 5,
      text: "ProClimate saved us during a heat wave! Their emergency service was incredibly fast and professional. The technician was knowledgeable and fixed our AC in no time.",
      service: "AC Repair"
    },
    {
      name: "Mike Rodriguez",
      location: "Bellevue, WA",
      rating: 5,
      text: "We had our entire HVAC system replaced and couldn't be happier. The team was clean, professional, and completed the job ahead of schedule. Highly recommend!",
      service: "System Replacement"
    },
    {
      name: "Emily Chen",
      location: "Redmond, WA",
      rating: 5,
      text: "The maintenance plan has kept our system running perfectly for years. The technicians are always thorough and provide great advice on maintaining our HVAC.",
      service: "Maintenance Plan"
    },
    {
      name: "David Thompson",
      location: "Kirkland, WA",
      rating: 5,
      text: "Outstanding commercial HVAC service for our office building. They implemented an energy-efficient solution that cut our utility costs by 30%.",
      service: "Commercial HVAC"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
                <span className="ml-2 text-gray-600 text-sm">{testimonial.service}</span>
              </div>
              
              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
              
              <div className="border-t pt-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Verified Customer</span>
                  <span>⭐ 5/5 Rating</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <span className="text-green-600 font-semibold mr-2">★★★★★</span>
            <span className="text-green-800">4.9/5 Average Rating from 500+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials