'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Metadata moved to metadata.ts in the same folder

export default function AboutPage() {
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
            <h1 className="section-title">About Shree Shyam Motors</h1>
            <p className="text-lg text-primary/80 dark:text-light/80">
              Your premier destination for premium automotive solutions in Dhamnod, India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-primary dark:text-light mb-6">
                Our Story
              </h2>
              <p className="mb-4 text-primary/80 dark:text-light/80">
                Shree Shyam Motors was established with a vision to provide premium automotive solutions to the people of Dhamnod and surrounding regions. We started our journey with a small showroom and a team of dedicated professionals passionate about automobiles.
              </p>
              <p className="text-primary/80 dark:text-light/80">
                Over the years, we have grown to become a trusted name in the automotive industry, known for our commitment to quality, customer satisfaction, and innovation. Today, we offer a wide range of vehicles, services, and automotive solutions to meet the diverse needs of our customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-light dark:bg-dark shadow-lg rounded-lg overflow-hidden"
            >
              <div className="h-64 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400 text-center px-4">
                  [Company Image Placeholder]
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-primary dark:text-light text-center mb-12"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'We are committed to providing high-quality vehicles and services that exceed customer expectations.',
                icon: (
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Innovation',
                description: 'We continuously innovate and adapt to the changing automotive landscape to provide cutting-edge solutions.',
                icon: (
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: 'Customer Focus',
                description: 'We put our customers at the center of everything we do, ensuring their satisfaction and building long-term relationships.',
                icon: (
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-display font-bold text-primary dark:text-light mb-2">
                  {value.title}
                </h3>
                <p className="text-primary/80 dark:text-light/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-primary dark:text-light text-center mb-12"
          >
            Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Team Member 1',
                position: 'CEO & Founder',
              },
              {
                name: 'Team Member 2',
                position: 'Service Manager',
              },
              {
                name: 'Team Member 3',
                position: 'Sales Executive',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark/50 rounded-lg overflow-hidden shadow-md text-center"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400 px-4">
                    [Team Member Photo]
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-primary dark:text-light mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary/80 dark:text-light/80">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 