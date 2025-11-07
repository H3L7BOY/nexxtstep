import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NEXTSTEP - Your Best Step Towards European Education | Study Abroad Consultancy',
  description: 'NEXTSTEP is your trusted education consultancy for studying in Europe. We provide comprehensive services including university selection, visa guidance, accommodation, and 24×7 support for students pursuing higher education in Latvia, Poland, Czech Republic, and more.',
  keywords: 'study abroad, European education, education consultancy, student visa, university admission, Latvia, Poland, Czech Republic, Slovakia, Lithuania, Estonia, Slovenia',
  authors: [{ name: 'NEXTSTEP Education Consultancy' }],
  creator: 'NEXTSTEP',
  publisher: 'NEXTSTEP Education Consultancy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nextstep-education.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NEXTSTEP - Your Best Step Towards European Education',
    description: 'Expert education consultancy services for students pursuing higher education in Europe. Comprehensive support from application to arrival.',
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'NEXTSTEP Education Consultancy',
    images: [
      {
        url: '/nextstep-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'NEXTSTEP Education Consultancy Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXTSTEP - Your Best Step Towards European Education',
    description: 'Expert education consultancy services for European higher education',
    images: ['/nextstep-logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#0B495A" />
        <meta name="msapplication-TileColor" content="#0B495A" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}