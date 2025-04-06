import React from 'react'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

// Load fonts
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700']
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Shree Shyam Motors - Premium Automotive Solutions',
  description: 'Shree Shyam Motors is a leading motor vehicle company in Dhamnod, India, offering premium automotive products and services.',
  keywords: 'Shree Shyam Motors, Dhamnod, automotive, motor vehicles, car dealership, vehicle service',
  authors: [{ name: 'Shree Shyam Motors' }],
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="flex flex-col min-h-screen bg-light dark:bg-dark text-gray-800 dark:text-gray-200 font-sans antialiased">
        <header>
          <Navigation />
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}