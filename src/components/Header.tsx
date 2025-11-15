'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/nextstep-logo.jpg"
                alt="NEXTSTEP Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
              <div className="ml-2 flex flex-col leading-tight">
  <span className="text-base sm:text-xl font-bold text-[#0B495A]">
    NEXTSTEP
  </span>
  <p className="text-[10px] sm:text-xs font-medium text-[#6C8A92]">
    FOR YOUR BEST STEP
  </p>
</div>

            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#0B495A] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              asChild
              variant="outline" 
              className="border-[#0B495A] text-[#0B495A] hover:bg-[#0B495A] hover:text-white"
            >
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button 
              asChild
              className="bg-[#0B495A] hover:bg-[#6C8A92] text-white"
            >
              <Link href="https://wa.me/37126321512" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#0B495A] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0B495A]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-center">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`} />
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0B495A] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button 
                asChild
                variant="outline" 
                className="w-full border-[#0B495A] text-[#0B495A] hover:bg-[#0B495A] hover:text-white"
              >
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <Button 
                asChild
                className="w-full bg-[#0B495A] hover:bg-[#6C8A92] text-white"
              >
                <Link href="https://wa.me/37126321512" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header