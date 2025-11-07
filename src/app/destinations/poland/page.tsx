import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Study in Poland - Universities, Courses & Requirements | NEXTSTEP',
  description: 'Complete guide to studying in Poland. Discover top universities, English-taught programs, visa requirements, living costs, and student life in Warsaw, Krakow and other Polish cities.',
}

const PolandPage = () => {
  const countryInfo = {
    capital: 'Warsaw',
    population: '38 million',
    language: 'Polish (English widely spoken)',
    currency: 'Polish Złoty (PLN)',
    timeZone: 'GMT+1',
    climate: 'Continental (Warm summers, Cold winters)'
  }

  const topUniversities = [
    {
      name: 'University of Warsaw',
      location: 'Warsaw',
      founded: '1816',
      ranking: '#1 in Poland',
      programs: ['Business', 'Economics', 'International Relations', 'Psychology', 'Computer Science'],
      tuitionRange: '€3,000-6,000'
    },
    {
      name: 'Warsaw University of Technology',
      location: 'Warsaw',
      founded: '1826',
      ranking: 'Top Technical University',
      programs: ['Engineering', 'Computer Science', 'Architecture', 'Electronics', 'Management'],
      tuitionRange: '€4,000-8,000'
    },
    {
      name: 'Jagiellonian University',
      location: 'Krakow',
      founded: '1364',
      ranking: 'Oldest Polish University',
      programs: ['Medicine', 'Law', 'Philosophy', 'International Relations', 'Business'],
      tuitionRange: '€4,500-12,000'
    },
    {
      name: 'Gdansk University of Technology',
      location: 'Gdansk',
      founded: '1904',
      ranking: 'Leading Tech University',
      programs: ['Engineering', 'IT', 'Maritime Studies', 'Chemistry', 'Management'],
      tuitionRange: '€3,500-7,000'
    }
  ]

  const popularPrograms = [
    { field: 'Business & Management', universities: 12, duration: '1.5-2 years', avgCost: '€4,000' },
    { field: 'Medicine', universities: 8, duration: '6 years', avgCost: '€11,000' },
    { field: 'Engineering', universities: 10, duration: '2 years', avgCost: '€5,000' },
    { field: 'Computer Science & IT', universities: 9, duration: '2 years', avgCost: '€4,500' },
    { field: 'International Relations', universities: 7, duration: '2 years', avgCost: '€3,800' },
    { field: 'Economics & Finance', universities: 8, duration: '2 years', avgCost: '€4,200' }
  ]

  const livingCosts = [
    { category: 'Accommodation (Student Dorm)', cost: '€100-250/month' },
    { category: 'Private Apartment', cost: '€300-600/month' },
    { category: 'Food & Groceries', cost: '€150-300/month' },
    { category: 'Transportation', cost: '€15-30/month' },
    { category: 'Books & Supplies', cost: '€50-100/month' },
    { category: 'Entertainment', cost: '€100-200/month' }
  ]

  const visaRequirements = [
    'Valid passport (6+ months validity)',
    'University acceptance letter',
    'Proof of financial means (€500/month)',
    'Health insurance coverage',
    'Academic transcripts and certificates',
    'Language proficiency proof (if required)',
    'Completed visa application form',
    'Recent passport photographs'
  ]

  const advantages = [
    {
      title: 'EU Member Benefits',
      description: 'Work rights and easy travel across 27 European Union countries',
      icon: '🇪🇺'
    },
    {
      title: 'Growing Economy',
      description: 'Central Europe\'s largest economy with thriving tech and business sectors',
      icon: '📈'
    },
    {
      title: 'Rich History',
      description: 'Experience centuries of culture in historic cities like Krakow and Warsaw',
      icon: '🏰'
    },
    {
      title: 'Affordable Education',
      description: 'High-quality education at very reasonable tuition fees',
      icon: '💰'
    },
    {
      title: 'Central Location',
      description: 'Perfect base for exploring Europe with excellent transportation links',
      icon: '🗺️'
    },
    {
      title: 'Innovation Hubs',
      description: 'Growing startup ecosystem and international business centers',
      icon: '🚀'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B495A] to-[#6C8A92] text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8b2fe390-06f6-4b4b-a3e2-200870b6de4d.png" 
            alt="Poland Warsaw Old Town with university students and historic Central European architecture"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Study in Poland</h1>
            <p className="text-xl md:text-2xl text-[#E7F2F4] max-w-4xl mx-auto leading-relaxed">
              Discover world-class education in Central Europe's largest economy. Poland combines rich history, 
              modern universities, and excellent career opportunities in a dynamic, growing market.
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

      {/* Why Study in Poland */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Poland?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique advantages of pursuing your higher education in Poland
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
              Top Universities in Poland
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover leading Polish universities offering world-class education and research opportunities
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
                  <a href={`https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I'm%20interested%20in%20${encodeURIComponent(university.name)}%20in%20Poland.`} target="_blank" rel="noopener noreferrer">
                    Get Information
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Study Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most sought-after programs by international students in Poland
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{program.field}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Universities:</span>
                    <span className="font-medium">{program.universities}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Avg. Cost:</span>
                    <span className="font-medium text-green-600">{program.avgCost}/year</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Living Costs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Living Costs in Poland
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Poland offers very affordable living costs compared to Western European countries. 
                Here's a breakdown of typical monthly expenses for international students.
              </p>
              <div className="space-y-4">
                {livingCosts.map((cost, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{cost.category}</span>
                    <span className="font-bold text-[#0B495A]">{cost.cost}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800">
                  <strong>Total Monthly Budget:</strong> €715-1,480 (including accommodation and all expenses)
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Visa Requirements
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                For non-EU students, here are the essential documents needed for your Poland student visa application.
              </p>
              <div className="space-y-3">
                {visaRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#0B495A] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-[#E7F2F4] rounded-lg">
                <h4 className="font-semibold text-[#0B495A] mb-2">Need Help with Visa Application?</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Our visa specialists provide complete guidance through the application process.
                </p>
                <Button className="bg-[#0B495A] hover:bg-[#6C8A92] text-white" asChild>
                  <a href="https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I%20need%20help%20with%20Poland%20student%20visa%20application." target="_blank" rel="noopener noreferrer">
                    Get Visa Help
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0B495A] to-[#6C8A92] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Study in Poland?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#E7F2F4]">
            Let our Poland education specialists guide you through university selection, application process, 
            and visa requirements. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#0B495A] hover:bg-gray-100">
              <Link href="/contact">Free Poland Consultation</Link>
            </Button>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white border border-green-500 hover:border-green-600">
              <a href="https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I'm%20interested%20in%20studying%20in%20Poland.%20Can%20you%20help%20me?" target="_blank" rel="noopener noreferrer">
                Chat About Poland
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

export default PolandPage