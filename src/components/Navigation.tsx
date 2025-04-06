'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Vehicles', href: '/vehicles' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState('/')

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 10)
    }

    // Set active item based on current path
    setActiveItem(window.location.pathname)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-2 bg-white/90 dark:bg-dark/90 shadow-lg backdrop-blur-lg' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="transition-transform duration-300 hover:scale-105">
            <Link href="/" className="flex items-center">
              <span className="mr-2 text-primary dark:text-white">
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 50 50" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M25 2C12.3 2 2 12.3 2 25C2 37.7 12.3 48 25 48C37.7 48 48 37.7 48 25C48 12.3 37.7 2 25 2Z" 
                    fill="url(#paint0_linear)" 
                  />
                  <path 
                    d="M14 33V17H21C22.3333 17 23.5 17.2917 24.5 17.875C25.5 18.4583 26.2917 19.25 26.875 20.25C27.4583 21.25 27.75 22.375 27.75 23.625C27.75 24.9167 27.4583 26.0833 26.875 27.125C26.2917 28.1667 25.5 28.9792 24.5 29.5625C23.5 30.1458 22.3333 30.4375 21 30.4375H17.625V33H14ZM17.625 27.1875H20.75C21.5833 27.1875 22.2292 26.9375 22.6875 26.4375C23.1458 25.9375 23.375 25.2708 23.375 24.4375C23.375 23.6458 23.1458 23 22.6875 22.5C22.2292 22 21.5833 21.75 20.75 21.75H17.625V27.1875Z" 
                    fill="white" 
                  />
                  <path 
                    d="M28 33L33.25 17H37.75L43 33H39.25L38.125 29.9375H32.875L31.75 33H28ZM33.875 26.625H37.125L35.5 21.25L33.875 26.625Z" 
                    fill="white" 
                  />
                  <defs>
                    <linearGradient id="paint0_linear" x1="2" y1="25" x2="48" y2="25" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3E92CC" />
                      <stop offset="1" stopColor="#FF8600" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Shree Shyam Motors
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-300">Premium Automotive Solutions</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 mx-1 rounded-lg transition-all relative group hover:translate-y-[-2px] ${
                    activeItem === item.href 
                      ? 'text-primary dark:text-white font-medium' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform origin-left transition-transform duration-300 ${
                    activeItem === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              </div>
            ))}
            <a
              href="https://wa.me/918770255122"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.045.073.045.419-.1.824z"
                  clipRule="evenodd"
                />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-primary dark:text-light hover:bg-primary/10 dark:hover:bg-light/10 transition-all active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg mt-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 overflow-hidden ${
            isOpen 
              ? 'max-h-[500px] opacity-100' 
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="p-4 space-y-1">
            {navItems.map((item, index) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    activeItem === item.href 
                      ? 'bg-primary/10 dark:bg-light/10 text-primary dark:text-white font-medium' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div>
              <a
                href="https://wa.me/918770255122"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 px-4 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-lg text-center transition-all"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.045.073.045.419-.1.824z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Chat on WhatsApp
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}