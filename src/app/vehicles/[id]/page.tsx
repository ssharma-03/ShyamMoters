import React from 'react'
import { Metadata } from 'next'
import { motion } from 'framer-motion'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // This would typically fetch the vehicle data from an API or database
  // For now we'll use a placeholder
  return {
    title: `Vehicle Details | Shree Shyam Motors`,
    description: `Detailed information about vehicle #${params.id} at Shree Shyam Motors in Dhamnod, India.`,
  }
}

export default function VehicleDetail({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the vehicle details based on the ID
  // For now, we'll use placeholder data
  const vehicle = {
    id: params.id,
    name: `Vehicle Model ${params.id}`,
    category: parseInt(params.id) % 2 === 0 ? 'Cars' : 'Two Wheelers',
    price: `₹${parseInt(params.id) * 100000}`,
    description: 'This is a detailed description of the vehicle. It would include information about the features, specifications, and benefits of owning this particular model.',
    features: [
      'Feature 1: Detailed explanation of this feature',
      'Feature 2: Detailed explanation of this feature',
      'Feature 3: Detailed explanation of this feature',
      'Feature 4: Detailed explanation of this feature',
      'Feature 5: Detailed explanation of this feature',
    ],
    specifications: {
      engine: '1.5L 4-Cylinder',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      mileage: '18 kmpl',
      seatingCapacity: '5',
      color: 'Multiple options available',
    },
    image: '/images/placeholder-vehicle-detail.jpg',
  }

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
            <h1 className="section-title">{vehicle.name}</h1>
            <p className="text-lg text-primary/80 dark:text-light/80">
              {vehicle.category} - {vehicle.price}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Details */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vehicle Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-dark/50 rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-80 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400 text-center px-4">
                  [{vehicle.name} Image]
                </p>
              </div>
            </motion.div>

            {/* Vehicle Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-display font-bold text-primary dark:text-light mb-4">
                About this Vehicle
              </h2>
              <p className="mb-6 text-primary/80 dark:text-light/80">
                {vehicle.description}
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-display font-bold text-primary dark:text-light mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-accent mt-1 mr-2"
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
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-display font-bold text-primary dark:text-light mb-3">
                  Specifications
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(vehicle.specifications).map(([key, value], index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-sm text-primary/60 dark:text-light/60 capitalize">
                        {key}
                      </span>
                      <span className="text-primary/80 dark:text-light/80">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/918770255122?text=I'm interested in ${vehicle.name} (ID: ${vehicle.id})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 text-center"
                >
                  Inquire Now
                </a>
                <Link
                  href="/vehicles"
                  className="px-6 py-3 bg-transparent border-2 border-primary dark:border-light text-primary dark:text-light rounded-lg hover:bg-primary/10 transition-colors text-center flex-1"
                >
                  Back to Vehicles
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Vehicles */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-primary dark:text-light text-center mb-12"
          >
            Similar Vehicles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * id }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark/50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400 text-center px-4">
                      [Similar Vehicle {id} Image]
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 bg-accent text-white px-3 py-1 rounded-bl-lg">
                    {id % 2 === 0 ? 'Cars' : 'Two Wheelers'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-display font-bold text-primary dark:text-light">
                      Similar Model {id}
                    </h3>
                    <p className="text-lg font-bold text-accent">₹{id * 150000}</p>
                  </div>
                  <p className="text-primary/80 dark:text-light/80 mb-4 line-clamp-2">
                    Brief description of the similar vehicle that might interest the visitor.
                  </p>
                  <Link
                    href={`/vehicles/${id}`}
                    className="text-secondary hover:text-secondary/80 font-medium transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 