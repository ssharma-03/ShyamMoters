'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div>
      {isSubmitted ? (
        <div
          className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg mb-6 opacity-0 animate-fadeIn"
        >
          <p className="font-medium">Thank you for your message!</p>
          <p className="text-sm mt-1">We will get back to you as soon as possible.</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary dark:text-light mb-1">
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-4 py-2 border ${
              errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:ring-opacity-50 bg-white dark:bg-dark/50`}
            placeholder="John Doe"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary dark:text-light mb-1">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 border ${
              errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:ring-opacity-50 bg-white dark:bg-dark/50`}
            placeholder="john@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary dark:text-light mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:ring-opacity-50 bg-white dark:bg-dark/50"
            placeholder="+91 1234567890"
            {...register('phone')}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-primary dark:text-light mb-1">
            Subject *
          </label>
          <input
            id="subject"
            type="text"
            className={`w-full px-4 py-2 border ${
              errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:ring-opacity-50 bg-white dark:bg-dark/50`}
            placeholder="Service Inquiry"
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-primary dark:text-light mb-1">
            Your Message *
          </label>
          <textarea
            id="message"
            rows={5}
            className={`w-full px-4 py-2 border ${
              errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:ring-opacity-50 bg-white dark:bg-dark/50`}
            placeholder="Please provide details about your inquiry..."
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message should be at least 10 characters',
              },
            })}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center transform transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  )
} 