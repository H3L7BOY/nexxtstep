import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ServiceCard from '@/components/ServiceCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Study Abroad Services - Complete European Education Support | NEXTSTEP',
  description: 'Comprehensive study abroad services including university selection, visa guidance, accommodation support, and 24x7 assistance for European higher education.',
}

const ServicesPage = () => {
  const allServices = [
    {
      icon: '📚',
      title: 'Study Abroad Consultation',
      description: 'Personalized guidance to help you choose the right course and university that aligns with your career goals and aspirations.',
      features: [
        'One-on-one counseling sessions',
        'Career assessment and planning',
        'Course and university matching',
        'Application strategy development',
        'Academic profile evaluation'
      ],
      isPopular: true
    },
    {
      icon: '🏛️',
      title: 'University & Course Choice',
      description: 'Expert assistance in selecting the best universities and programs based on your academic background and career objectives.',
      features: [
        'University ranking analysis',
        'Course curriculum review',
        'Admission requirements guidance',
        'Scholarship opportunity identification',
        'Campus and location assessment'
      ]
    },
    {
      icon: '📄',
      title: 'Documentation Support',
      description: 'Complete assistance with preparing and organizing all required documents for university applications and visa processes.',
      features: [
        'Document checklist creation',
        'Statement of Purpose writing',
        'Letter of Recommendation guidance',
        'Academic transcript evaluation',
        'Document translation services'
      ]
    },
    {
      icon: '✈️',
      title: 'Visa Guidance',
      description: 'Comprehensive visa application support with document preparation, interview coaching, and embassy liaison.',
      features: [
        'Visa application form assistance',
        'Document review and verification',
        'Interview preparation sessions',
        'Embassy appointment booking',
        'Visa status tracking'
      ]
    },
    {
      icon: '🗣️',
      title: 'Counselling Services',
      description: 'Professional counseling to address academic, cultural, and personal challenges during your study abroad journey.',
      features: [
        'Pre-departure counseling',
        'Cultural adaptation guidance',
        'Academic stress management',
        'Career transition counseling',
        'Personal development sessions'
      ]
    },
    {
      icon: '💰',
      title: 'Funding Assistance',
      description: 'Help securing financial support through scholarships, grants, and education loan guidance for your studies.',
      features: [
        'Scholarship research and applications',
        'Education loan guidance',
        'Financial planning assistance',
        'Grant opportunity identification',
        'Budget planning for studies'
      ]
    },
    {
      icon: '🏛️',
      title: 'Embassy Appointments',
      description: 'Assistance with scheduling and preparing for embassy appointments and visa interviews.',
      features: [
        'Appointment scheduling',
        'Interview preparation',
        'Document submission guidance',
        'Follow-up assistance',
        'Appeal process support if needed'
      ]
    },
    {
      icon: '✈️',
      title: 'Airport Pickup',
      description: 'Safe and reliable airport pickup services to ensure a smooth arrival in your destination country.',
      features: [
        'Pre-arranged transportation',
        'Meet and greet services',
        'Luggage assistance',
        'Direct transfer to accommodation',
        '24/7 arrival support'
      ]
    },
    {
      icon: '🏠',
      title: 'Accommodation Support',
      description: 'Help finding safe, affordable, and convenient housing options near your university campus.',
      features: [
        'University dormitory applications',
        'Private accommodation search',
        'Lease agreement assistance',
        'Safety and location verification',
        'Accommodation comparison'
      ]
    },
    {
      icon: '💼',
      title: 'Part-time Job Help',
      description: 'Guidance on finding legal part-time employment opportunities to support your studies and gain experience.',
      features: [
        'Work permit information',
        'Job search assistance',
        'Resume/CV preparation',
        'Interview coaching',
        'Legal employment guidance'
      ]
    },
    {
      icon: '📋',
      title: 'Post-arrival Documentation',
      description: 'Support with completing all necessary paperwork and registrations after arriving in your destination country.',
      features: [
        'University registration assistance',
        'Bank account opening guidance',
        'Health insurance registration',
        'Residence permit applications',
        'Local authority registrations'
      ]
    },
    {
      icon: '🔄',
      title: '24×7 Support',
      description: 'Round-the-clock assistance for any questions or emergencies throughout your study abroad journey.',
      features: [
        '24/7 helpline availability',
        'Emergency assistance',
        'Academic support guidance',
        'Personal problem resolution',
        'Continuous mentorship'
      ],
      isPopular: true
    }
  ]

  const serviceCategories = [
    {
      category: 'Pre-Departure Services',
      description: 'Complete preparation before you travel',
      services: ['Study Abroad Consultation', 'University & Course Choice', 'Documentation Support', 'Visa Guidance', 'Funding Assistance']
    },
    {
      category: 'Arrival Support',
      description: 'Smooth transition to your new country',
      services: ['Airport Pickup', 'Accommodation Support', 'Post-arrival Documentation']
    },
    {
      category: 'Ongoing Support',
      description: 'Continuous assistance throughout your studies',
      services: ['Counselling Services', 'Part-time Job Help', '24×7 Support']
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B495A] to-[#6C8A92] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-[#E7F2F4] max-w-4xl mx-auto leading-relaxed">
              Comprehensive support services designed to make your European education journey 
              smooth, successful, and stress-free from application to graduation.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Support Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services are organized to support you at every stage of your study abroad journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.category}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-sm text-[#0B495A] font-medium">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Detailed Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of services designed to ensure your success in European higher education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure your success at every step
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'Free consultation to understand your goals and assess your profile'
              },
              {
                step: '02',
                title: 'Planning & Strategy',
                description: 'Develop a personalized roadmap for your study abroad journey'
              },
              {
                step: '03',
                title: 'Application Process',
                description: 'Complete support through university applications and visa processes'
              },
              {
                step: '04',
                title: 'Post-Arrival Support',
                description: 'Ongoing assistance to ensure smooth transition and success'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#0B495A] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0B495A] to-[#6C8A92] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#E7F2F4]">
            Don't let your European education dreams wait. Get expert guidance from our experienced 
            consultants and take the first step today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#0B495A] hover:bg-gray-100">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white border border-green-500 hover:border-green-600">
              <a href="https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I'm%20interested%20in%20your%20services%20for%20studying%20in%20Europe.%20Can%20you%20help%20me?" target="_blank" rel="noopener noreferrer">
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

export default ServicesPage