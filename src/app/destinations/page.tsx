import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import DestinationCard from '@/components/DestinationCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Study Destinations in Europe - Universities & Programs | NEXTSTEP',
  description: 'Explore top European study destinations including Latvia, Poland, Czech Republic, Slovakia, Lithuania, Estonia, and Slovenia. Find the perfect country for your higher education.',
}

const DestinationsPage = () => {
  const destinations = [
    {
      country: 'Latvia',
      capital: 'Riga',
      language: 'Latvian, English',
      currency: 'Euro (€)',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0eae77a5-dd71-465f-a0b0-275cb79cdbf5.png',
      universities: 15,
      averageCost: '€4,000-8,000',
      href: '/destinations/latvia',
      highlights: [
        'High-quality education at affordable costs',
        'English-taught programs available',
        'EU member with excellent work opportunities',
        'Rich cultural heritage and modern infrastructure',
        'Gateway to Nordic and Eastern European markets'
      ]
    },
    {
      country: 'Poland',
      capital: 'Warsaw',
      language: 'Polish, English',
      currency: 'Polish Złoty (PLN)',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8b2fe390-06f6-4b4b-a3e2-200870b6de4d.png',
      universities: 20,
      averageCost: '€3,000-6,000',
      href: '/destinations/poland',
      highlights: [
        'Strong economy with growing tech sector',
        'Renowned universities with global recognition',
        'Vibrant student life and cultural diversity',
        'Central European location with excellent connectivity',
        'Growing startup ecosystem and job opportunities'
      ]
    },
    {
      country: 'Czech Republic',
      capital: 'Prague',
      language: 'Czech, English',
      currency: 'Czech Koruna (CZK)',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fe0cab0c-102c-42e6-a88c-3fa1bfe75707.png',
      universities: 18,
      averageCost: '€4,000-9,000',
      href: '/destinations/czech-republic',
      highlights: [
        'Historic universities with centuries of tradition',
        'Beautiful capital city with UNESCO heritage sites',
        'Strong industrial and technological sectors',
        'Central location in the heart of Europe',
        'Excellent research facilities and innovation hubs'
      ]
    },
    {
      country: 'Slovakia',
      capital: 'Bratislava',
      language: 'Slovak, English',
      currency: 'Euro (€)',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/719766c2-d2c6-41f0-9eaf-e4ea7b86901b.png',
      universities: 12,
      averageCost: '€3,500-7,000',
      href: '/destinations/slovakia',
      highlights: [
        'Modern educational system with EU standards',
        'Strategic location between Vienna and Budapest',
        'Growing automotive and IT industries',
        'Beautiful landscapes and outdoor activities',
        'Strong focus on STEM and engineering programs'
      ]
    },
    {
      country: 'Lithuania',
      capital: 'Vilnius',
      language: 'Lithuanian, English',
      currency: 'Euro (€)',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2a2fd9fa-50fc-4832-8984-b892fe4ba7dc.png',
      universities: 14,
      averageCost: '€3,000-6,500',
      href: '/destinations/lithuania',
      highlights: [
        'Baltic region leader in innovation and startups',
        'Excellent digital infrastructure and tech sector',
        'Historic cities with vibrant student communities',
        'Strong emphasis on research and development',
        'Gateway to Scandinavian and Russian markets'
      ]
    },
    {
      country: 'Estonia',
      capital: 'Tallinn',
      language: 'Estonian, English',
      currency: 'Euro (€)',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9593df3f-95a4-4565-acba-535b42ae65dc.png',
      universities: 10,
      averageCost: '€3,500-7,500',
      href: '/destinations/estonia',
      highlights: [
        'Most digitally advanced society in the world',
        'Strong focus on technology and innovation',
        'Unicorn startup birthplace (Skype, Bolt)',
        'Beautiful medieval capital and nature',
        'E-residency program and digital nomad friendly'
      ]
    },
    {
      country: 'Slovenia',
      capital: 'Ljubljana',
      language: 'Slovenian, English',
      currency: 'Euro (€)',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27fc6086-32f7-4670-9499-8f434b798623.png',
      universities: 8,
      averageCost: '€4,500-8,500',
      href: '/destinations/slovenia',
      highlights: [
        'Green capital of Europe with sustainable focus',
        'High-quality education in beautiful Alpine setting',
        'Strong tourism and hospitality programs',
        'Gateway to Italy, Austria, and the Balkans',
        'Excellent quality of life and safety'
      ]
    }
  ]

  const whyStudyInEurope = [
    {
      icon: '🎓',
      title: 'World-Class Education',
      description: 'European universities consistently rank among the world\'s best, offering internationally recognized degrees and cutting-edge research opportunities.'
    },
    {
      icon: '💰',
      title: 'Affordable Tuition',
      description: 'Compared to other popular destinations, European education offers excellent value with lower tuition fees and living costs.'
    },
    {
      icon: '🌍',
      title: 'Cultural Diversity',
      description: 'Experience rich cultural heritage, learn new languages, and build a global network in the heart of Europe.'
    },
    {
      icon: '🏢',
      title: 'Career Opportunities',
      description: 'Access to Europe\'s strong economy, innovative industries, and multinational corporations for internships and careers.'
    },
    {
      icon: '🛂',
      title: 'Easy Travel',
      description: 'Schengen Area access allows easy travel across 26+ European countries during your studies.'
    },
    {
      icon: '🔬',
      title: 'Innovation Hubs',
      description: 'Study in countries leading technological innovation, sustainability, and research in various fields.'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B495A] to-[#6C8A92] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Study Destinations</h1>
            <p className="text-xl md:text-2xl text-[#E7F2F4] max-w-4xl mx-auto leading-relaxed">
              Discover the perfect European destination for your higher education journey. 
              Each country offers unique opportunities, world-class universities, and vibrant student life.
            </p>
          </div>
        </div>
      </section>

      {/* Why Study in Europe */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Europe for Higher Education?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Europe offers unparalleled advantages for international students seeking world-class education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyStudyInEurope.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore European Study Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from 7 carefully selected European countries, each offering unique advantages and opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare key aspects of our partner destinations at a glance
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-[#0B495A] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Country</th>
                  <th className="px-6 py-4 text-left font-semibold">Language</th>
                  <th className="px-6 py-4 text-left font-semibold">Currency</th>
                  <th className="px-6 py-4 text-left font-semibold">Universities</th>
                  <th className="px-6 py-4 text-left font-semibold">Avg. Cost/Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {destinations.map((destination, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 font-medium text-gray-900">{destination.country}</td>
                    <td className="px-6 py-4 text-gray-700">{destination.language}</td>
                    <td className="px-6 py-4 text-gray-700">{destination.currency}</td>
                    <td className="px-6 py-4 text-[#0B495A] font-medium">{destination.universities}+</td>
                    <td className="px-6 py-4 text-green-600 font-medium">{destination.averageCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0B495A] to-[#6C8A92] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Found Your Ideal Destination?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#E7F2F4]">
            Let our expert consultants guide you through the application process and help you secure admission 
            to your dream university in Europe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#0B495A] hover:bg-gray-100">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white border border-green-500 hover:border-green-600">
              <a href="https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I'm%20interested%20in%20studying%20in%20Europe.%20Can%20you%20help%20me%20choose%20the%20right%20destination?" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default DestinationsPage