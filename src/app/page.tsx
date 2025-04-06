'use client'

import React from 'react'
import Hero from '@/components/sections/Hero'
import VehicleShowcase from '@/components/sections/VehicleShowcase'
import Testimonials from '@/components/sections/Testimonials'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-light dark:bg-dark"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-light mb-6">
                Premium Automotive Solutions in Dhamnod
              </h2>
              <p className="text-lg text-primary/80 dark:text-light/80 mb-6">
                At Shree Shyam Motors, we pride ourselves on delivering exceptional automotive services
                and premium vehicles to our valued customers. With years of experience and a commitment
                to excellence, we have become a trusted name in Dhamnod's automotive industry.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                            border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-primary dark:text-light mb-2">10+</h3>
                  <p className="text-primary/60 dark:text-light/60">Years Experience</p>
                </div>
                <div className="p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                            border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-primary dark:text-light mb-2">500+</h3>
                  <p className="text-primary/60 dark:text-light/60">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
                <img
                  src="/images/about/showroom.jpg"
                  alt="Shree Shyam Motors Showroom"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-light p-6 rounded-lg">
                <p className="text-xl font-semibold">Premium Service</p>
                <p className="text-light/80">Excellence Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Vehicle Showcase */}
      <VehicleShowcase />

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-light dark:bg-dark"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-light text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Vehicle Sales',
                description: 'Wide range of premium vehicles for every need',
                icon: '🚗'
              },
              {
                title: 'Service & Maintenance',
                description: 'Expert maintenance and repair services',
                icon: '🔧'
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored automotive solutions for your needs',
                icon: '⚡'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                          border border-gray-200 dark:border-gray-700 hover:bg-primary/5 dark:hover:bg-primary/5
                          transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary dark:text-light mb-3">
                  {service.title}
                </h3>
                <p className="text-primary/80 dark:text-light/80">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-b from-primary to-secondary text-light"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Experience Premium Service?
          </h2>
          <p className="text-xl text-light/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discover how we can help you with your automotive needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8770255122"
              className="btn-light backdrop-blur-sm bg-light/10 hover:bg-light/20 transition-all"
            >
              Call Us: 8770255122
            </a>
            <a
              href="https://wa.me/919009580899"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light backdrop-blur-sm bg-light/10 hover:bg-light/20 transition-all"
            >
              WhatsApp: 9009580899
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  )
}