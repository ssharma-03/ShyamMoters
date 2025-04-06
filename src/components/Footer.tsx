'use client'

import React from 'react'
import Link from 'next/link'

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61556016134532&mibextid=2JQ9oc',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/shree_shyam_motors__',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.09 1.064.077 1.791.232 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.233.636.388 1.363.465 2.427.048 1.067.09 1.407.09 4.123v.08c0 2.643-.012 2.987-.09 4.043-.077 1.064-.232 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.233-1.363.388-2.427.465-1.067.048-1.407.09-4.123.09h-.08c-2.643 0-2.987-.012-4.043-.09-1.064-.077-1.791-.232-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.233-.636-.388-1.363-.465-2.427-.047-1.024-.09-1.379-.09-3.808v-.63c0-2.43.013-2.784.09-3.808.077-1.064.232-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.233 1.363-.388 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Threads',
    href: 'https://www.threads.net/@shree_shyam_motors__',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.186 8.672a3.36 3.36 0 1 0 0 6.72 3.36 3.36 0 0 0 0-6.72zm0 5.28a1.92 1.92 0 1 1 0-3.84 1.92 1.92 0 0 1 0 3.84z" />
        <path d="M12.186 2.4c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18.4c-4.64 0-8.4-3.76-8.4-8.4s3.76-8.4 8.4-8.4 8.4 3.76 8.4 8.4-3.76 8.4-8.4 8.4z" />
      </svg>
    ),
  },
]

const footerLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Vehicles', href: '/vehicles' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-primary-dark dark:from-dark dark:via-gray-900 dark:to-gray-950 text-light">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200/20 to-transparent"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 blur-3xl rounded-full bg-blue-500/10 dark:bg-blue-500/5"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 blur-3xl rounded-full bg-orange-500/10 dark:bg-orange-500/5"></div>
      </div>

      <div className="container-custom relative py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="opacity-0 animate-fadeIn flex flex-col">
              <h3 className="text-2xl font-display font-bold mb-4 text-white">Shree Shyam Motors</h3>
              <p className="text-light/80 mb-4">
                Your Premier Destination for Premium Automotive Solutions in Dhamnod
              </p>
              <div className="mt-2 space-y-3">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-1 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-light/90">In front of sai marriage garden, Dhamnod, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href="tel:8770255122" className="text-light/90 hover:text-white transition-colors">
                    +91 8770255122
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg 
                    className="w-5 h-5 text-orange-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                  <a href="mailto:contact@shreeshyammotors.com" className="text-light/90 hover:text-white transition-colors">
                    contact@shreeshyammotors.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div className="opacity-0 animate-fadeIn animate-delay-1000">
              <h3 className="text-xl font-display font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2.5">
                {footerLinks.slice(0, 4).map((link) => (
                  <li key={link.name}>
                    <div className="hover:translate-x-1 transition-all duration-300">
                      <Link 
                        href={link.href} 
                        className="text-light/80 hover:text-white transition-all duration-300 flex items-center"
                      >
                        <svg className="w-3 h-3 mr-2 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                        </svg>
                        {link.name}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <div className="opacity-0 animate-fadeIn animate-delay-1000">
              <h3 className="text-xl font-display font-bold mb-4 text-white">Legal</h3>
              <ul className="space-y-2.5">
                {footerLinks.slice(4).map((link) => (
                  <li key={link.name}>
                    <div className="hover:translate-x-1 transition-all duration-300">
                      <Link 
                        href={link.href} 
                        className="text-light/80 hover:text-white transition-all duration-300 flex items-center"
                      >
                        <svg className="w-3 h-3 mr-2 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                        </svg>
                        {link.name}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <div className="opacity-0 animate-fadeIn animate-delay-1000">
              <h3 className="text-xl font-display font-bold mb-4 text-white">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light/80 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <span className="sr-only">{social.name}</span>
                    <social.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="https://wa.me/918770255122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.045.073.045.419-.1.824z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-light/10 mt-12 pt-8 text-center text-light/60">
          <p>&copy; {new Date().getFullYear()} Shree Shyam Motors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}