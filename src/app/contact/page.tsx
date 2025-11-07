import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ContactForm from '@/components/ContactForm'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact NEXTSTEP - Free Education Consultation | Study Abroad Experts',
  description: 'Get free consultation for European higher education. Contact NEXTSTEP\'s expert counselors via WhatsApp, email, or our inquiry form. Available 24/7 for student support.',
}

const ContactPage = () => {
  const contactMethods = [
    {
      icon: '📱',
      title: 'WhatsApp',
      description: 'Get instant replies to your queries',
      details: ['+371 26 321 512', '+48 516 875 116'],
      action: 'Chat Now',
      link: 'https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I\'m%20interested%20in%20studying%20abroad%20in%20Europe.%20Can%20you%20help%20me?'
    },
    {
      icon: '✉️',
      title: 'Email',
      description: 'Send detailed inquiries and documents',
      details: ['consultant.ns.nextstep@gmail.com'],
      action: 'Send Email',
      link: 'mailto:consultant.ns.nextstep@gmail.com?subject=Study Abroad Inquiry'
    },
    {
      icon: '📞',
      title: 'Phone',
      description: 'Speak directly with our consultants',
      details: ['+371 26 321 512', '+48 516 875 116'],
      action: 'Call Now',
      link: 'tel:+37126321512'
    },
    {
      icon: '🕒',
      title: 'Availability',
      description: '24/7 student support',
      details: ['Mon-Sun: Available', 'Emergency: Anytime'],
      action: 'Contact Us',
      link: '/contact'
    }
  ]

  const officeLocations = [
    {
      country: 'Latvia',
      city: 'Riga',
      address: 'Main Office - Central Riga',
      description: 'Our primary consultation center for Baltic region students',
      contact: '+371 26 321 512'
    },
    {
      country: 'Poland',
      city: 'Warsaw',
      address: 'Regional Office - Warsaw',
      description: 'Supporting students across Central and Eastern Europe',
      contact: '+48 516 875 116'
    }
  ]

  const faqs = [
    {
      question: 'How much does your consultation service cost?',
      answer: 'Our initial consultation is completely free. We provide detailed guidance about universities, courses, and application processes at no cost. Our paid services cover specific assistance like visa applications, document preparation, and ongoing support.'
    },
    {
      question: 'Which countries do you specialize in?',
      answer: 'We specialize in 7 European countries: Latvia, Poland, Czech Republic, Slovakia, Lithuania, Estonia, and Slovenia. We have partnerships with 50+ universities across these countries.'
    },
    {
      question: 'How long does the application process take?',
      answer: 'The timeline varies by country and program. Generally, it takes 3-6 months from initial consultation to university admission. Visa processing adds another 4-8 weeks. We provide detailed timelines during consultation.'
    },
    {
      question: 'Do you help with accommodation?',
      answer: 'Yes, we provide complete accommodation support including university dormitory applications, private housing search, lease assistance, and safety verification. We ensure you have secure housing before arrival.'
    },
    {
      question: 'What is your visa success rate?',
      answer: 'We maintain a 100% visa success rate for students who follow our guidance completely. Our visa specialists have extensive experience with European student visa requirements and ensure proper documentation.'
    },
    {
      question: 'Do you provide post-arrival support?',
      answer: 'Absolutely! Our 24/7 support continues after your arrival. We help with university registration, bank account opening, residence permits, part-time job search, and any other challenges you might face.'
    }
  ]

  const quickActions = [
    {
      title: 'Free University Matching',
      description: 'Get personalized university recommendations',
      action: 'Start Matching',
      icon: '🎯'
    },
    {
      title: 'Visa Consultation',
      description: 'Expert guidance on visa requirements',
      action: 'Get Visa Help',
      icon: '🛂'
    },
    {
      title: 'Cost Calculator',
      description: 'Estimate your study abroad expenses',
      action: 'Calculate Costs',
      icon: '💰'
    },
    {
      title: 'Application Checklist',
      description: 'Complete guide for applications',
      action: 'Get Checklist',
      icon: '📋'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B495A] to-[#6C8A92] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-[#E7F2F4] max-w-4xl mx-auto leading-relaxed">
              Ready to take your next step? Get expert guidance from our experienced education consultants. 
              We're here to help you achieve your European education dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred method to connect with our education experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{method.description}</p>
                <div className="space-y-1 mb-6">
                  {method.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm font-medium text-[#0B495A]">{detail}</p>
                  ))}
                </div>
                <Button asChild className="w-full bg-[#0B495A] hover:bg-[#6C8A92] text-white">
                  <a href={method.link} target={method.link.startsWith('http') ? '_blank' : '_self'} rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}>
                    {method.action}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Send Us Your Inquiry
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below with your details and study abroad goals. Our experts will 
                get back to you within 24 hours with personalized guidance.
              </p>
              <ContactForm />
            </div>
            
            {/* Office Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Offices
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We have strategic offices across Europe to provide local support and expertise 
                for students in different regions.
              </p>
              
              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{office.country}</h3>
                      <span className="text-sm font-medium text-[#0B495A]">{office.city}</span>
                    </div>
                    <p className="text-gray-700 font-medium mb-2">{office.address}</p>
                    <p className="text-gray-600 text-sm mb-3">{office.description}</p>
                    <p className="text-[#0B495A] font-medium">{office.contact}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-[#E7F2F4] rounded-xl">
                <h4 className="font-semibold text-[#0B495A] mb-3">Emergency Support</h4>
                <p className="text-gray-700 text-sm mb-4">
                  24/7 emergency support available for current students studying abroad. 
                  Contact us immediately if you need urgent assistance.
                </p>
                <div className="flex gap-3">
                  <Button size="sm" className="bg-[#0B495A] hover:bg-[#6C8A92] text-white" asChild>
                    <a href="https://wa.me/37126321512?text=EMERGENCY:%20I%20need%20immediate%20assistance." target="_blank" rel="noopener noreferrer">
                      Emergency WhatsApp
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="border-[#0B495A] text-[#0B495A] hover:bg-[#0B495A] hover:text-white" asChild>
                    <a href="tel:+37126321512">Call Now</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get immediate assistance with common requests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">{action.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{action.description}</p>
                <Button size="sm" className="bg-[#0B495A] hover:bg-[#6C8A92] text-white" asChild>
                  <a href={`https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I%20need%20help%20with:%20${encodeURIComponent(action.title)}`} target="_blank" rel="noopener noreferrer">
                    {action.action}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button className="bg-[#0B495A] hover:bg-[#6C8A92] text-white" asChild>
              <a href="https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I%20have%20some%20questions%20about%20your%20services." target="_blank" rel="noopener noreferrer">
                Ask Our Experts
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

export default ContactPage