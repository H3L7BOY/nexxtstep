import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Study in Slovenia - Universities, Courses & Requirements | NEXTSTEP',
  description: 'Complete guide to studying in Slovenia. Discover top universities, English-taught programs, visa requirements, living costs, and student life in Ljubljana and other Slovenian cities.',
}

const SloveniaPage = () => {
  const countryInfo = {
    capital: 'Ljubljana',
    population: '2.1 million',
    language: 'Slovenian (English widely spoken)',
    currency: 'Euro (€)',
    timeZone: 'GMT+1',
    climate: 'Continental/Alpine (Mild summers, Cold winters)'
  }

  const topUniversities = [
    {
      name: 'University of Ljubljana',
      location: 'Ljubljana',
      founded: '1919',
      ranking: '#1 in Slovenia',
      programs: ['Medicine', 'Engineering', 'Economics', 'Social Sciences', 'Arts'],
      tuitionRange: '€4,500-9,000'
    },
    {
      name: 'University of Maribor',
      location: 'Maribor',
      founded: '1975',
      ranking: 'Leading Northern University',
      programs: ['Engineering', 'Business', 'Medicine', 'Agriculture', 'Education'],
      tuitionRange: '€4,200-8,500'
    },
    {
      name: 'University of Primorska',
      location: 'Koper/Portorož',
      founded: '2003',
      ranking: 'Modern Coastal University',
      programs: ['Tourism', 'Management', 'Health Sciences', 'Humanities', 'Mathematics'],
      tuitionRange: '€4,000-7,500'
    },
    {
      name: 'IEDC-Bled School of Management',
      location: 'Bled',
      founded: '1986',
      ranking: 'Top Business School',
      programs: ['Executive MBA', 'International Management', 'Strategy', 'Leadership', 'Innovation'],
      tuitionRange: '€6,000-15,000'
    }
  ]

  const advantages = [
    {
      title: 'Green Capital',
      description: 'European Green Capital with focus on sustainability and eco-innovation',
      icon: '🌱'
    },
    {
      title: 'Alpine Beauty',
      description: 'Stunning natural landscapes combining Alps, coast, and wine regions',
      icon: '🏔️'
    },
    {
      title: 'Central Location',
      description: 'Gateway to Italy, Austria, Hungary, and the Balkans',
      icon: '🗺️'
    },
    {
      title: 'High Safety',
      description: 'One of the safest countries in the world with excellent quality of life',
      icon: '🛡️'
    },
    {
      title: 'Tourism Excellence',
      description: 'World-class tourism and hospitality programs with industry connections',
      icon: '🏨'
    },
    {
      title: 'Innovation Focus',
      description: 'Strong emphasis on research, sustainability, and technological innovation',
      icon: '💡'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B495A] to-[#6C8A92] text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27fc6086-32f7-4670-9499-8f434b798623.png" 
            alt="Slovenia Ljubljana Dragon Bridge with university students and Alpine Central European architecture"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Study in Slovenia</h1>
            <p className="text-xl md:text-2xl text-[#E7F2F4] max-w-4xl mx-auto leading-relaxed">
              Experience education in Europe's green capital. Slovenia offers stunning Alpine beauty, 
              sustainable innovation, and excellent programs in a safe, welcoming environment.
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

      {/* Why Study in Slovenia */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Slovenia?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique advantages of pursuing your higher education in Slovenia
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
              Top Universities in Slovenia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover leading Slovenian universities combining tradition with innovation
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
                  <a href={`https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I'm%20interested%20in%20${encodeURIComponent(university.name)}%20in%20Slovenia.`} target="_blank" rel="noopener noreferrer">
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
            Ready to Study in Slovenia?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#E7F2F4]">
            Experience the perfect blend of nature, innovation, and education in Slovenia's green paradise!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#0B495A] hover:bg-gray-100">
              <Link href="/contact">Free Slovenia Consultation</Link>
            </Button>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white border border-green-500 hover:border-green-600">
              <a href="https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I'm%20interested%20in%20studying%20in%20Slovenia.%20Can%20you%20help%20me?" target="_blank" rel="noopener noreferrer">
                Chat About Slovenia
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

export default SloveniaPage