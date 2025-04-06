'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Metadata moved to metadata.ts in the same folder

const services = [
  {
    title: 'Vehicle Sales',
    description: 'Explore our wide range of new and pre-owned vehicles from leading brands. Our sales team will help you find the perfect vehicle that meets your needs and budget.',
    icon: (
      <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Vehicle Service & Maintenance',
    description: 'Keep your vehicle in optimal condition with our comprehensive service and maintenance packages. Our skilled technicians use the latest tools and genuine parts.',
    icon: (
      <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Vehicle Financing',
    description: 'Make your dream vehicle affordable with our flexible financing options. We work with leading financial institutions to offer competitive interest rates and convenient repayment terms.',
    icon: (
      <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Vehicle Insurance',
    description: 'Protect your investment with our comprehensive insurance solutions. We offer various insurance plans to safeguard your vehicle against unforeseen circumstances.',
    icon: (
      <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Spare Parts',
    description: 'Get genuine spare parts for your vehicle at competitive prices. We stock a wide range of parts for various makes and models to ensure your vehicle performs at its best.',
    icon: (
      <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Roadside Assistance',
    description: 'Never worry about unexpected breakdowns with our 24/7 roadside assistance service. Our team is always ready to help you get back on the road quickly and safely.',
    icon: (
      <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
]

export default function ServicesPage() {
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
            <h1 className="section-title">Our Services</h1>
            <p className="text-lg text-primary/80 dark:text-light/80">
              Comprehensive automotive solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-display font-bold text-primary dark:text-light mb-3">
                  {service.title}
                </h3>
                <p className="text-primary/80 dark:text-light/80">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-primary dark:text-light text-center mb-12"
          >
            Why Choose Our Services?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="space-y-6">
                {[
                  {
                    title: 'Expert Technicians',
                    description: 'Our team of certified technicians brings years of experience and expertise to every service.',
                  },
                  {
                    title: 'Genuine Parts',
                    description: 'We use only genuine parts to ensure optimal performance and longevity of your vehicle.',
                  },
                  {
                    title: 'Transparent Pricing',
                    description: 'No hidden charges or surprises. We believe in transparent pricing for all our services.',
                  },
                  {
                    title: 'Customer Satisfaction',
                    description: 'Your satisfaction is our priority. We go the extra mile to exceed your expectations.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-bold text-primary dark:text-light">
                        {item.title}
                      </h4>
                      <p className="text-primary/80 dark:text-light/80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 bg-light dark:bg-dark shadow-lg rounded-lg overflow-hidden"
            >
              <div className="h-64 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400 text-center px-4">
                  [Service Image Placeholder]
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-primary dark:text-light text-center mb-12"
          >
            Our Service Process
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {[
              {
                title: 'Book an Appointment',
                description: 'Schedule a service appointment through our website, WhatsApp, or by calling us directly.',
                number: '01',
              },
              {
                title: 'Vehicle Inspection',
                description: 'Our technicians conduct a thorough inspection of your vehicle to identify any issues.',
                number: '02',
              },
              {
                title: 'Service Execution',
                description: 'We perform the necessary services and repairs using the right tools and genuine parts.',
                number: '03',
              },
              {
                title: 'Quality Check',
                description: 'After the service, we conduct a quality check to ensure everything is in perfect working condition.',
                number: '04',
              },
              {
                title: 'Vehicle Delivery',
                description: 'We deliver your vehicle back to you, explaining all the services performed and any recommendations.',
                number: '05',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-start mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold">
                  {step.number}
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-bold text-primary dark:text-light mb-2">
                    {step.title}
                  </h4>
                  <p className="text-primary/80 dark:text-light/80">{step.description}</p>
                </div>
              </motion.div>
            ))}
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
            Ready to Experience Premium Automotive Service?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 max-w-2xl mx-auto"
          >
            Book an appointment today and let our team of experts take care of your vehicle.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="https://wa.me/918770255122"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors font-bold shadow-lg"
            >
              Contact Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 