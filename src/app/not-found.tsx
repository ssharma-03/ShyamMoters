'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <main className="pt-20 pb-16 min-h-screen flex items-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <h1 className="text-6xl font-display font-bold text-primary dark:text-light mb-6">404</h1>
          <h2 className="text-2xl font-bold text-primary dark:text-light mb-4">Page Not Found</h2>
          <p className="text-primary/80 dark:text-light/80 mb-8">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="btn-primary inline-block"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  )
} 