import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Study in Lithuania - Universities, Courses & Requirements | NEXTSTEP',
  description: 'Complete guide to studying in Lithuania. Discover top universities, English-taught programs, visa requirements, living costs, and student life in Vilnius and other Lithuanian cities.',
}

const LithuaniaPage = () => {
  const countryInfo = {
    capital: 'Vilnius',
    population: '2.8 million',
    language: 'Lithuanian (English widely spoken)',
    currency: 'Euro (€)',
    timeZone: 'GMT+2',
    climate: 'Continental (Warm summers, Cold winters)'
  }

  const topUniversities = [
    {
      name: 'Vilnius University',
      location: 'Vilnius',
      founded: '1579',
      ranking: '#1 in Lithuania',
      programs: ['Medicine', 'Law', 'International Relations', 'Computer Science', 'Business'],
      tuitionRange: '€3,000-7,000'
    },
    {
      name: 'Vilnius Gediminas Technical University',
      location: 'Vilnius',
      founded: '1956',
      ranking: 'Top Technical University',
      programs: ['Engineering', 'Architecture', 'IT', 'Transport Engineering', 'Business Management'],
      tuitionRange: '€3,500-6,500'
    },
    {
      name: 'Kaunas University of Technology',
      location: 'Kaunas',
      founded: '1922',
      ranking: 'Leading Tech University',
      programs: ['Engineering', 'Computer Science', 'Business', 'Social Sciences', 'Arts'],
      tuitionRange: '€3,200-6,800'
    },
    {
      name: 'ISM University of Management',
      location: 'Vilnius',
      founded: '1999',
      ranking: 'Top Private Business School',
      programs: ['Business Administration', 'Economics', 'Finance', 'Management', 'Marketing'],
      tuitionRange: '€4,500-8,500'
    }
  ]

  const advantages = [
    {
      title: 'Innovation Leader',
      description: 'Baltic region leader in fintech, startups, and digital innovation',
      icon: '🚀'
    },
    {
      title: 'EU Member',
      description: 'Full EU benefits with Euro currency and European work opportunities',
      icon: '🇪🇺'
    },
    {
      title: 'Tech Hub',
      description: 'Growing IT sector with excellent job prospects for graduates',
      icon: '💻'
    },
    {
      title: 'Historic Cities',
      description: 'UNESCO World Heritage sites and vibrant student communities',
      icon: '🏛️'
    },
    {
      title: 'Affordable Education',
      description: 'High-quality education at reasonable costs with modern facilities',
      icon: '💰'
    },
    {
      title: 'Strategic Location',
      description: 'Gateway to Nordic and Eastern European markets',
      icon: '🗺️'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B495A] to-[#6C8A92] text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2a2fd9fa-50fc-4832-8984-b892fe4ba7dc.png" 
            alt="Lithuania Vilnius Old Town with university students and Baltic Gothic architecture"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Study in Lithuania</h1>
            <p className="text-xl md:text-2xl text-[#E7F2F4] max-w-4xl mx-auto leading-relaxed">
              Experience innovative education in the Baltic region's tech capital. Lithuania offers modern universities, 
              thriving startup ecosystem, and excellent opportunities in digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Country Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {Object.entries(countryInfo).map(([key, value], index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-lg font-semibold text-[#0B495A]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study in Lithuania */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Lithuania?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique advantages of pursuing your higher education in Lithuania
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Universities in Lithuania
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover leading Lithuanian universities offering world-class education and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topUniversities.map((university, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{university.name}</h3>
                  <span className="bg-[#0B495A] text-white text-xs font-medium px-2 py-1 rounded">
                    {university.ranking}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Location:</span>
                    <p className="font-medium">{university.location}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Founded:</span>
                    <p className="font-medium">{university.founded}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-500">Tuition Range:</span>
                    <p className="font-medium text-green-600">{university.tuitionRange}/year</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Popular Programs:</h4>
                  <div className="flex flex-wrap gap-2">
                    {university.programs.map((program, pIndex) => (
                      <span key={pIndex} className="bg-[#E7F2F4] text-[#0B495A] text-xs px-2 py-1 rounded">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-[#0B495A] hover:bg-[#6C8A92] text-white" asChild>
                  <a href={`https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I'm%20interested%20in%20${encodeURIComponent(university.name)}%20in%20Lithuania.`} target="_blank" rel="noopener noreferrer">
                    Get Information
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0B495A] to-[#6C8A92] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Study in Lithuania?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#E7F2F4]">
            Join the innovation capital of the Baltics! Let our specialists guide you to Lithuanian universities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#0B495A] hover:bg-gray-100">
              <Link href="/contact">Free Lithuania Consultation</Link>
            </Button>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white border border-green-500 hover:border-green-600">
              <a href="https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I'm%20interested%20in%20studying%20in%20Lithuania.%20Can%20you%20help%20me?" target="_blank" rel="noopener noreferrer">
                Chat About Lithuania
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

export default LithuaniaPage