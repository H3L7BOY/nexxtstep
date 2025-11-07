import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const HomePage = () => {
  const stats = [
    { number: '2000+', label: 'Students Placed' },
    { number: '50+', label: 'Partner Universities' },
    { number: '7', label: 'European Countries' },
    { number: '24/7', label: 'Support Available' },
  ]

  const whyChooseUs = [
    {
      icon: '🎓',
      title: 'Expert Guidance',
      description: 'Our experienced consultants have in-depth knowledge of European education systems and admission processes.',
    },
    {
      icon: '🏆',
      title: '100% Success Rate',
      description: 'We take pride in our track record of successful student placements in top European universities.',
    },
    {
      icon: '💼',
      title: 'End-to-End Support',
      description: 'From university selection to post-arrival support, we handle every aspect of your study abroad journey.',
    },
    {
      icon: '🌍',
      title: 'Multiple Destinations',
      description: 'Choose from 7+ European countries with diverse programs and opportunities for international students.',
    },
  ]

  const featuredServices = [
    {
      icon: '📚',
      title: 'Study Abroad Consultation',
      description: 'Personalized guidance to help you choose the right course and university for your career goals.',
      features: [
        'One-on-one counseling sessions',
        'Career assessment and planning',
        'Course and university matching',
        'Application strategy development'
      ],
      isPopular: true
    },
    {
      icon: '📄',
      title: 'Visa Guidance',
      description: 'Complete visa application support with document preparation and interview coaching.',
      features: [
        'Visa application assistance',
        'Document review and preparation',
        'Interview preparation sessions',
        'Embassy appointment booking'
      ]
    },
    {
      icon: '🏠',
      title: 'Accommodation Support',
      description: 'Help finding safe and affordable housing options near your university.',
      features: [
        'University dormitory applications',
        'Private accommodation search',
        'Lease agreement assistance',
        'Safety and location guidance'
      ]
    }
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      course: 'Master in Computer Science',
      university: 'University of Latvia',
      country: 'Latvia',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6a28e231-8d70-46a0-a473-1359b6cb5d5e.png',
      testimonial: 'NEXTSTEP made my dream of studying in Europe a reality. Their guidance through every step was invaluable.',
      rating: 5
    },
    {
      name: 'Rahul Patel',
      course: 'MBA in International Business',
      university: 'Warsaw School of Economics',
      country: 'Poland',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bc98dc11-fe2c-4d1b-aae9-f0704825580d.png',
      testimonial: 'The team at NEXTSTEP is incredibly professional and supportive. They helped me secure admission and visa without any hassle.',
      rating: 5
    },
    {
      name: 'Anita Gupta',
      course: 'Master in Marketing',
      university: 'Prague University of Economics',
      country: 'Czech Republic',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2ea96d06-3d16-4370-a909-ceb54dd285d7.png',
      testimonial: 'From application to arrival, NEXTSTEP was with me every step. Now I\'m successfully pursuing my masters in Prague!',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B495A] via-[#6C8A92] to-slate-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Best Step Towards
              <span className="block text-[#E7F2F4]">European Education</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-[#E7F2F4]">
              Expert guidance for studying in Europe. From university selection to post-arrival support, 
              we make your study abroad dreams come true.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#0B495A] hover:bg-gray-100 text-lg px-8 py-6">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white border border-green-500 hover:border-green-600 text-lg px-8 py-6">
                <a href="https://wa.me/37126321512" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
        

      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0B495A] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NEXTSTEP Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose NEXTSTEP?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to making your European education journey smooth, successful, and stress-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services designed to ensure your success in European higher education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-[#0B495A] hover:bg-[#6C8A92] text-white">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our successful students who are now thriving in European universities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-[#0B495A] text-[#0B495A] hover:bg-[#0B495A] hover:text-white">
              <Link href="/testimonials">Read More Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0B495A] to-[#6C8A92] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your European Education Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#E7F2F4]">
            Get expert guidance from our experienced consultants. Book your free consultation today 
            and take the first step towards your dream university.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#0B495A] hover:bg-gray-100">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white border border-green-500 hover:border-green-600">
              <a href="https://wa.me/37126321512" target="_blank" rel="noopener noreferrer">
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

export default HomePage