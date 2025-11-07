import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Study in Slovakia - Universities, Courses & Requirements | NEXTSTEP',
  description: 'Complete guide to studying in Slovakia. Discover top universities, English-taught programs, visa requirements, living costs, and student life in Bratislava and other Slovak cities.',
}

const SlovakiaPage = () => {
  const countryInfo = {
    capital: 'Bratislava',
    population: '5.4 million',
    language: 'Slovak (English widely spoken)',
    currency: 'Euro (€)',
    timeZone: 'GMT+1',
    climate: 'Continental (Warm summers, Cold winters)'
  }

  const topUniversities = [
    {
      name: 'Comenius University',
      location: 'Bratislava',
      founded: '1919',
      ranking: '#1 in Slovakia',
      programs: ['Medicine', 'Law', 'Natural Sciences', 'Mathematics', 'Education'],
      tuitionRange: '€3,500-8,000'
    },
    {
      name: 'Slovak University of Technology',
      location: 'Bratislava',
      founded: '1937',
      ranking: 'Top Technical University',
      programs: ['Engineering', 'IT', 'Architecture', 'Chemical Technology', 'Materials Science'],
      tuitionRange: '€4,000-7,500'
    },
    {
      name: 'University of Economics Bratislava',
      location: 'Bratislava',
      founded: '1940',
      ranking: 'Leading Business School',
      programs: ['Economics', 'Business', 'Management', 'Finance', 'International Commerce'],
      tuitionRange: '€4,200-6,800'
    },
    {
      name: 'Technical University of Košice',
      location: 'Košice',
      founded: '1952',
      ranking: 'Top Eastern Slovakia University',
      programs: ['Engineering', 'Computer Science', 'Mining', 'Manufacturing', 'Aeronautics'],
      tuitionRange: '€3,800-7,000'
    }
  ]

  const popularPrograms = [
    { field: 'Medicine', universities: 5, duration: '6 years', avgCost: '€7,500' },
    { field: 'Engineering', universities: 6, duration: '2 years', avgCost: '€4,800' },
    { field: 'Business & Economics', universities: 7, duration: '2 years', avgCost: '€4,500' },
    { field: 'Computer Science & IT', universities: 5, duration: '2 years', avgCost: '€4,200' },
    { field: 'Architecture', universities: 3, duration: '2 years', avgCost: '€4,600' },
    { field: 'Natural Sciences', universities: 4, duration: '2 years', avgCost: '€3,900' }
  ]

  const livingCosts = [
    { category: 'Accommodation (Student Dorm)', cost: '€120-250/month' },
    { category: 'Private Apartment', cost: '€250-500/month' },
    { category: 'Food & Groceries', cost: '€150-280/month' },
    { category: 'Transportation', cost: '€15-30/month' },
    { category: 'Books & Supplies', cost: '€40-80/month' },
    { category: 'Entertainment', cost: '€80-150/month' }
  ]

  const advantages = [
    {
      title: 'EU Benefits',
      description: 'Full EU membership with Euro currency and Schengen area access',
      icon: '🇪🇺'
    },
    {
      title: 'Strategic Location',
      description: 'Between Vienna and Budapest - heart of Central Europe',
      icon: '🗺️'
    },
    {
      title: 'Growing Economy',
      description: 'Strong automotive and IT sectors with excellent job prospects',
      icon: '📈'
    },
    {
      title: 'Low Costs',
      description: 'Very affordable living and studying costs compared to Western Europe',
      icon: '💰'
    },
    {
      title: 'Beautiful Nature',
      description: 'Stunning mountains, castles, and outdoor recreation opportunities',
      icon: '🏔️'
    },
    {
      title: 'Modern Education',
      description: 'Updated curricula meeting EU standards with English programs',
      icon: '🎓'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B495A] to-[#6C8A92] text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/719766c2-d2c6-41f0-9eaf-e4ea7b86901b.png" 
            alt="Slovakia Bratislava Danube River with university students and Central European architecture"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Study in Slovakia</h1>
            <p className="text-xl md:text-2xl text-[#E7F2F4] max-w-4xl mx-auto leading-relaxed">
              Discover quality education in the heart of Europe. Slovakia offers modern universities, 
              affordable costs, and strategic location between major European capitals.
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

      {/* Why Study in Slovakia */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Slovakia?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique advantages of pursuing your higher education in Slovakia
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
              Top Universities in Slovakia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover leading Slovak universities offering excellent education and research opportunities
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
                  <a href={`https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I'm%20interested%20in%20${encodeURIComponent(university.name)}%20in%20Slovakia.`} target="_blank" rel="noopener noreferrer">
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
            Ready to Study in Slovakia?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#E7F2F4]">
            Let our Slovakia education specialists guide you through the process. Start your European education journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#0B495A] hover:bg-gray-100">
              <Link href="/contact">Free Slovakia Consultation</Link>
            </Button>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white border border-green-500 hover:border-green-600">
              <a href="https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I'm%20interested%20in%20studying%20in%20Slovakia.%20Can%20you%20help%20me?" target="_blank" rel="noopener noreferrer">
                Chat About Slovakia
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

export default SlovakiaPage