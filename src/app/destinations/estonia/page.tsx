import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Study in Estonia - Universities, Courses & Requirements | NEXTSTEP',
  description: 'Complete guide to studying in Estonia. Discover top universities, English-taught programs, visa requirements, living costs, and student life in Tallinn and other Estonian cities.',
}

const EstoniaPage = () => {
  const countryInfo = {
    capital: 'Tallinn',
    population: '1.3 million',
    language: 'Estonian (English widely spoken)',
    currency: 'Euro (€)',
    timeZone: 'GMT+2',
    climate: 'Continental (Warm summers, Cold winters)'
  }

  const topUniversities = [
    {
      name: 'University of Tartu',
      location: 'Tartu',
      founded: '1632',
      ranking: '#1 in Estonia',
      programs: ['Medicine', 'Computer Science', 'Business', 'Psychology', 'International Relations'],
      tuitionRange: '€3,500-8,000'
    },
    {
      name: 'Tallinn University of Technology',
      location: 'Tallinn',
      founded: '1918',
      ranking: 'Top Technical University',
      programs: ['Engineering', 'IT', 'Cybersecurity', 'Business Administration', 'Design'],
      tuitionRange: '€4,000-7,500'
    },
    {
      name: 'Tallinn University',
      location: 'Tallinn',
      founded: '2005',
      ranking: 'Leading Modern University',
      programs: ['Education', 'Digital Technologies', 'Arts', 'Social Sciences', 'Health Sciences'],
      tuitionRange: '€3,800-6,800'
    },
    {
      name: 'Estonian Business School',
      location: 'Tallinn',
      founded: '1988',
      ranking: 'Top Private Business School',
      programs: ['Business Administration', 'Entrepreneurship', 'Finance', 'International Business', 'Innovation'],
      tuitionRange: '€4,500-9,000'
    }
  ]

  const advantages = [
    {
      title: 'Digital Pioneer',
      description: 'World\'s most digitally advanced society with cutting-edge e-governance',
      icon: '💻'
    },
    {
      title: 'Startup Nation',
      description: 'Birthplace of Skype, Bolt - thriving startup ecosystem and unicorns',
      icon: '🚀'
    },
    {
      title: 'E-Residency',
      description: 'Digital nomad friendly with innovative e-residency program',
      icon: '🌐'
    },
    {
      title: 'Medieval Beauty',
      description: 'UNESCO World Heritage capital with rich history and modern lifestyle',
      icon: '🏰'
    },
    {
      title: 'High Quality Life',
      description: 'Excellent safety, clean environment, and work-life balance',
      icon: '🌟'
    },
    {
      title: 'Tech Education',
      description: 'World-class technology and cybersecurity programs',
      icon: '🔒'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B495A] to-[#6C8A92] text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9593df3f-95a4-4565-acba-535b42ae65dc.png" 
            alt="Estonia Tallinn medieval Old Town with university students and Baltic digital architecture"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Study in Estonia</h1>
            <p className="text-xl md:text-2xl text-[#E7F2F4] max-w-4xl mx-auto leading-relaxed">
              Study in the world's most digitally advanced country. Estonia combines medieval charm with 
              cutting-edge technology, offering unparalleled opportunities in innovation and entrepreneurship.
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

      {/* Why Study in Estonia */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Estonia?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique advantages of pursuing your higher education in Estonia
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
              Top Universities in Estonia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover leading Estonian universities at the forefront of digital innovation
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
                  <a href={`https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I'm%20interested%20in%20${encodeURIComponent(university.name)}%20in%20Estonia.`} target="_blank" rel="noopener noreferrer">
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
            Ready to Study in Estonia?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#E7F2F4]">
            Join the digital revolution! Experience world-leading technology education in Estonia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#0B495A] hover:bg-gray-100">
              <Link href="/contact">Free Estonia Consultation</Link>
            </Button>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white border border-green-500 hover:border-green-600">
              <a href="https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I'm%20interested%20in%20studying%20in%20Estonia.%20Can%20you%20help%20me?" target="_blank" rel="noopener noreferrer">
                Chat About Estonia
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

export default EstoniaPage