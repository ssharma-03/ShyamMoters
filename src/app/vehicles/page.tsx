'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Metadata moved to metadata.ts in the same folder

const vehicleCategories = [
  {
    id: 'twoWheelers',
    name: 'Two Wheelers',
    description: 'Motorcycles and scooters for everyday commuting and adventure',
    image: '/images/placeholder-two-wheeler.jpg',
  },
  {
    id: 'cars',
    name: 'Cars',
    description: 'Compact cars, sedans, and SUVs for family and personal use',
    image: '/images/placeholder-car.jpg',
  },
  {
    id: 'commercial',
    name: 'Commercial Vehicles',
    description: 'Vans, trucks, and utility vehicles for business and transport',
    image: '/images/placeholder-commercial.jpg',
  },
]

const featuredVehicles = [
  {
    id: 1,
    name: 'Vehicle Model 1',
    category: 'Two Wheelers',
    price: '₹80,000',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    image: '/images/placeholder-vehicle-1.jpg',
  },
  {
    id: 2,
    name: 'Vehicle Model 2',
    category: 'Cars',
    price: '₹5,50,000',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    image: '/images/placeholder-vehicle-2.jpg',
  },
  {
    id: 3,
    name: 'Vehicle Model 3',
    category: 'Commercial',
    price: '₹7,80,000',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    image: '/images/placeholder-vehicle-3.jpg',
  },
  {
    id: 4,
    name: 'Vehicle Model 4',
    category: 'Two Wheelers',
    price: '₹1,20,000',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    image: '/images/placeholder-vehicle-4.jpg',
  },
  {
    id: 5,
    name: 'Vehicle Model 5',
    category: 'Cars',
    price: '₹8,40,000',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    image: '/images/placeholder-vehicle-5.jpg',
  },
  {
    id: 6,
    name: 'Vehicle Model 6',
    category: 'Commercial',
    price: '₹12,50,000',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    image: '/images/placeholder-vehicle-6.jpg',
  },
]

export default function VehiclesPage() {
  return (
    <main className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="section-title">Our Vehicles</h1>
            <p className="text-lg text-primary/80 dark:text-light/80">
              Explore our premium selection of vehicles for every need and budget
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="py-16">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-primary dark:text-light text-center mb-12"
          >
            Vehicle Categories
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicleCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark/50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400 text-center px-4">
                    [{category.name} Image]
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-primary dark:text-light mb-2">
                    {category.name}
                  </h3>
                  <p className="text-primary/80 dark:text-light/80 mb-4">
                    {category.description}
                  </p>
                  <Link
                    href={`/vehicles#${category.id}`}
                    className="inline-block text-secondary hover:text-secondary/80 font-medium transition-colors"
                  >
                    View Vehicles &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-primary dark:text-light text-center mb-12"
          >
            Featured Vehicles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark/50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400 text-center px-4">
                      [{vehicle.name} Image]
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 bg-accent text-white px-3 py-1 rounded-bl-lg">
                    {vehicle.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-display font-bold text-primary dark:text-light">
                      {vehicle.name}
                    </h3>
                    <p className="text-lg font-bold text-accent">{vehicle.price}</p>
                  </div>
                  <ul className="mb-4 space-y-1">
                    {vehicle.features.map((feature, i) => (
                      <li key={i} className="text-primary/80 dark:text-light/80 text-sm flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-secondary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between">
                    <a
                      href={`https://wa.me/918770255122?text=I'm interested in ${vehicle.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-secondary/80 font-medium transition-colors"
                    >
                      Inquire Now
                    </a>
                    <Link
                      href={`/vehicles/${vehicle.id}`}
                      className="text-primary dark:text-light hover:text-secondary dark:hover:text-secondary font-medium transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-primary dark:text-light mb-6">
                Flexible Financing Options
              </h2>
              <p className="mb-6 text-primary/80 dark:text-light/80">
                We understand that purchasing a vehicle is a significant investment. That's why we
                offer various financing options to make your dream vehicle more accessible.
              </p>
              <ul className="space-y-4">
                {[
                  'Competitive interest rates',
                  'Flexible repayment terms',
                  'Quick loan approval process',
                  'Minimal documentation requirements',
                  'Transparent fee structure',
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <svg
                      className="w-5 h-5 text-accent mt-1 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-primary/80 dark:text-light/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <a
                  href="https://wa.me/918770255122?text=I'm interested in learning more about your financing options"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Get Financing Details
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-light dark:bg-dark shadow-lg rounded-lg overflow-hidden"
            >
              <div className="h-64 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400 text-center px-4">
                  [Financing Image Placeholder]
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold mb-6"
          >
            Ready to Find Your Perfect Vehicle?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 max-w-2xl mx-auto"
          >
            Visit our showroom or contact us today to explore our extensive collection of vehicles
            and find the one that suits your needs and preferences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/918770255122"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors font-bold shadow-lg"
            >
              Contact Us Now
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-bold"
            >
              Visit Showroom
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 