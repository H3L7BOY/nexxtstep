import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B495A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/nextstep-logo.jpg"
                alt="NEXTSTEP Logo"
                width={50}
                height={50}
                className="rounded-md"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">NEXTSTEP</h3>
                <p className="text-sm text-[#E7F2F4]">FOR YOUR BEST STEP</p>
              </div>
            </Link>
            <p className="text-[#E7F2F4] text-sm leading-relaxed mb-6 max-w-md">
              Your trusted partner for European higher education. We guide students through every step of their study abroad journey with personalized support and expert guidance.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://wa.me/37126321512"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6C8A92] hover:bg-[#939B9D] px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                WhatsApp
              </Link>
              <Link
                href="mailto:consultant.ns.nextstep@gmail.com"
                className="bg-[#6C8A92] hover:bg-[#939B9D] px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Email
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Services', href: '/services' },
                { name: 'Destinations', href: '/destinations' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#E7F2F4] hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-[#E7F2F4] mb-1">Email:</p>
                <Link
                  href="mailto:consultant.ns.nextstep@gmail.com"
                  className="text-white hover:text-[#E7F2F4] transition-colors duration-200"
                >
                  consultant.ns.nextstep@gmail.com
                </Link>
              </div>
              <div>
                <p className="text-[#E7F2F4] mb-1">WhatsApp:</p>
                <div className="space-y-1">
                  <Link
                    href="https://wa.me/37126321512"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white hover:text-[#E7F2F4] transition-colors duration-200"
                  >
                    +371 26 321 512
                  </Link>
                  <Link
                    href="https://wa.me/48516875116"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white hover:text-[#E7F2F4] transition-colors duration-200"
                  >
                    +48 516 875 116
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#6C8A92] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#E7F2F4] text-sm">
              © {currentYear} NEXTSTEP. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
              <Link href="/privacy" className="text-[#E7F2F4] hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#E7F2F4] hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer