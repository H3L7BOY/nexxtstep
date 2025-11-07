import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About NEXTSTEP - Your Trusted European Education Partner',
  description: 'Learn about NEXTSTEP\'s mission, vision, and commitment to helping students achieve their European higher education goals. Experienced team, proven track record.',
}

const AboutPage = () => {
  const teamValues = [
    {
      icon: '🎯',
      title: 'Mission',
      description: 'To empower students with world-class European education opportunities through expert guidance, personalized support, and unwavering commitment to their success.'
    },
    {
      icon: '👁️',
      title: 'Vision', 
      description: 'To become the most trusted education consultancy, bridging the gap between ambitious students and prestigious European universities.'
    },
    {
      icon: '💡',
      title: 'Values',
      description: 'Integrity, Excellence, Student-Centricity, Innovation, and Transparency in everything we do.'
    }
  ]

  const expertise = [
    {
      area: 'European Education Systems',
      description: 'Deep understanding of admission processes, academic requirements, and cultural nuances across 7+ European countries.',
      years: '10+'
    },
    {
      area: 'Visa & Immigration',
      description: 'Expert knowledge of student visa requirements, documentation, and immigration policies for European nations.',
      years: '8+'
    },
    {
      area: 'Student Support Services',
      description: 'Comprehensive pre and post-arrival support including accommodation, part-time jobs, and cultural adaptation.',
      years: '10+'
    },
    {
      area: 'Career Guidance',
      description: 'Strategic career counseling to align academic choices with long-term professional goals in the global market.',
      years: '12+'
    }
  ]

  const achievements = [
    { metric: '2000+', label: 'Students Successfully Placed' },
    { metric: '50+', label: 'Partner Universities' },
    { metric: '100%', label: 'Visa Success Rate' },
    { metric: '7+', label: 'European Countries' },
    { metric: '24/7', label: 'Student Support' },
    { metric: '10+', label: 'Years of Experience' }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B495A] to-[#6C8A92] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About NEXTSTEP</h1>
            <p className="text-xl md:text-2xl text-[#E7F2F4] max-w-4xl mx-auto leading-relaxed">
              Your trusted partner in achieving European higher education dreams. 
              We believe every student deserves their best step towards a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  NEXTSTEP was founded with a simple yet powerful vision: to make European higher education 
                  accessible to students worldwide. Our journey began when our founders, experienced education 
                  consultants, recognized the challenges students face when navigating complex admission processes 
                  and cultural barriers.
                </p>
                <p>
                  Over the years, we've built strong partnerships with over 50 prestigious universities across 
                  7 European countries. Our success is measured not just in numbers, but in the countless success 
                  stories of students who are now thriving in their chosen fields across Europe.
                </p>
                <p>
                  Today, NEXTSTEP stands as a beacon of trust and excellence in the education consulting industry, 
                  with a team of dedicated professionals who share a common passion: helping students achieve their 
                  academic and professional aspirations.
                </p>
              </div>
            </div>
            <div className="lg:order-first">
              <div className="bg-gradient-to-br from-[#E7F2F4] to-white p-8 rounded-2xl">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6bba02b3-545d-4251-9a96-d49a4e7cd32c.png" 
                  alt="NEXTSTEP education consultancy team in modern office setting"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong principles and driven by student success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Years of experience and deep knowledge in key areas that matter most to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{area.area}</h3>
                  <span className="bg-[#0B495A] text-white text-sm font-medium px-3 py-1 rounded-full">
                    {area.years} Years
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-[#0B495A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-[#E7F2F4] max-w-3xl mx-auto">
              Numbers that reflect our commitment to student success
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#E7F2F4] mb-2">
                  {achievement.metric}
                </div>
                <div className="text-sm md:text-base text-[#939B9D]">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student-First Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9ee3e315-8a77-4c5f-aef9-386906f8e082.png" 
                alt="Students celebrating success at European university campus"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Student-First Philosophy
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At NEXTSTEP, every decision we make is centered around one question: 
                  "How does this benefit our students?" This student-first philosophy drives 
                  everything from our service design to our partnership selection.
                </p>
                <p>
                  We understand that studying abroad is more than just academics – it's a 
                  life-changing experience that shapes careers, perspectives, and futures. 
                  That's why we provide comprehensive support that goes beyond admission assistance.
                </p>
                <p>
                  Our commitment extends throughout your entire journey – from the initial 
                  consultation to post-graduation career support. We're not just consultants; 
                  we're your partners in success.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-[#0B495A] hover:bg-[#6C8A92] text-white">
                  <Link href="/contact">Start Your Journey</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#6C8A92] to-[#0B495A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Your Next Step?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#E7F2F4]">
            Join thousands of successful students who trusted NEXTSTEP for their European education journey. 
            Your dream university is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#0B495A] hover:bg-gray-100">
              <Link href="/contact">Get Free Consultation</Link>
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

export default AboutPage