import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import TestimonialCard from '@/components/TestimonialCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Success Stories & Testimonials - NEXTSTEP Education',
  description: 'Read inspiring success stories from students who achieved their European education dreams with NEXTSTEP. Real testimonials from students studying in Latvia, Poland, Czech Republic and more.',
}

const TestimonialsPage = () => {
  const successStories = [
    {
      name: 'Priya Sharma',
      course: 'Master in Computer Science',
      university: 'University of Latvia',
      country: 'Latvia',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f681781e-5b3a-494a-b3ad-10f6f62630f1.png',
      testimonial: 'NEXTSTEP made my dream of studying in Europe a reality. Their guidance through every step of the process was invaluable. From university selection to visa application, they were always there to help. Now I\'m pursuing my Masters in Computer Science at the University of Latvia and loving every moment.',
      rating: 5,
      year: '2023'
    },
    {
      name: 'Rahul Patel',
      course: 'MBA in International Business',
      university: 'Warsaw School of Economics',
      country: 'Poland',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c7197075-1d0f-4f18-b406-a34e2d034ddf.png',
      testimonial: 'The team at NEXTSTEP is incredibly professional and supportive. They helped me secure admission to one of Poland\'s top business schools and guided me through the entire visa process without any hassle. The pre-departure orientation was especially helpful.',
      rating: 5,
      year: '2022'
    },
    {
      name: 'Anita Gupta',
      course: 'Master in Digital Marketing',
      university: 'Prague University of Economics',
      country: 'Czech Republic',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5142de3d-3b73-48b9-ba11-e2007f0f9d8c.png',
      testimonial: 'From application to arrival, NEXTSTEP was with me every step. Their 24/7 support gave me confidence throughout the process. Now I\'m successfully pursuing my masters in Prague and have already secured an internship at a leading marketing agency.',
      rating: 5,
      year: '2023'
    },
    {
      name: 'Vikram Singh',
      course: 'Master in Mechanical Engineering',
      university: 'Technical University of Košice',
      country: 'Slovakia',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/114c50d0-83ed-42c8-aa60-da4a926c25ff.png',
      testimonial: 'NEXTSTEP helped me find the perfect engineering program in Slovakia. Their knowledge of different universities and courses is impressive. The visa guidance was thorough and I got my visa approved on the first attempt. Highly recommended!',
      rating: 5,
      year: '2022'
    },
    {
      name: 'Sneha Reddy',
      course: 'Master in International Relations',
      university: 'Vilnius University',
      country: 'Lithuania',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6ed65975-d8af-4932-bd41-014a759000e0.png',
      testimonial: 'Studying in Lithuania has been an amazing experience. NEXTSTEP not only helped with admissions but also assisted with accommodation and part-time job search. Their post-arrival support is exceptional. I feel fully supported throughout my journey.',
      rating: 5,
      year: '2023'
    },
    {
      name: 'Arjun Mehta',
      course: 'Master in Information Technology',
      university: 'Tallinn University of Technology',
      country: 'Estonia',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/020e65c6-d548-4bc7-aa3b-9668dd534605.png',
      testimonial: 'Estonia is perfect for tech studies, and NEXTSTEP helped me realize this dream. Their expertise in European education systems is unmatched. The digital-first approach of both Estonia and NEXTSTEP made the entire process smooth and efficient.',
      rating: 5,
      year: '2022'
    },
    {
      name: 'Kavya Nair',
      course: 'Master in Environmental Science',
      university: 'University of Ljubljana',
      country: 'Slovenia',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a903bb44-18d8-4b40-83b3-e08e55f9711e.png',
      testimonial: 'Slovenia\'s focus on sustainability aligns perfectly with my career goals. NEXTSTEP understood my aspirations and helped me find the ideal program. Their guidance on scholarship applications helped me secure partial funding for my studies.',
      rating: 5,
      year: '2023'
    },
    {
      name: 'Rajesh Kumar',
      course: 'PhD in Renewable Energy',
      university: 'Riga Technical University',
      country: 'Latvia',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/78f1c996-da72-4ffe-8356-d6ce1d3025c0.png',
      testimonial: 'As a PhD student, I needed specialized guidance for research programs. NEXTSTEP connected me with the right professors and helped navigate the complex application process. Their research program expertise is outstanding.',
      rating: 5,
      year: '2021'
    },
    {
      name: 'Meera Joshi',
      course: 'Master in Psychology',
      university: 'Charles University Prague',
      country: 'Czech Republic',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3702a34f-8b1b-4910-9266-7f7ed1082555.png',
      testimonial: 'NEXTSTEP made the impossible possible. I thought studying psychology in Europe was out of reach, but they found the perfect program for me. Their counseling helped me overcome my fears and take this life-changing step.',
      rating: 5,
      year: '2022'
    },
    {
      name: 'Amit Sharma',
      course: 'Master in Business Analytics',
      university: 'University of Economics Bratislava',
      country: 'Slovakia',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e0994811-d692-4cbb-aaf0-f4f859926740.png',
      testimonial: 'The data-driven approach of NEXTSTEP impressed me from day one. They analyzed my profile, matched me with suitable programs, and provided clear timelines. Everything was executed perfectly, just like a well-designed algorithm!',
      rating: 5,
      year: '2023'
    }
  ]

  const countries = ['All', 'Latvia', 'Poland', 'Czech Republic', 'Slovakia', 'Lithuania', 'Estonia', 'Slovenia']
  const years = ['All', '2023', '2022', '2021']

  const stats = [
    { number: '2000+', label: 'Success Stories' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '100%', label: 'Visa Success Rate' },
    { number: '50+', label: 'University Partners' },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B495A] to-[#6C8A92] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Success Stories</h1>
            <p className="text-xl md:text-2xl text-[#E7F2F4] max-w-4xl mx-auto leading-relaxed">
              Real stories from real students who achieved their European education dreams with NEXTSTEP. 
              Their success inspires us to help more students reach their goals.
            </p>
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

      {/* Filters Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Filter Success Stories
            </h2>
            <p className="text-gray-600">
              Explore testimonials by country, year, or program to find stories similar to your journey
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700">Country:</span>
              {countries.map((country) => (
                <button
                  key={country}
                  className="px-3 py-1 text-sm rounded-full border border-[#0B495A] text-[#0B495A] hover:bg-[#0B495A] hover:text-white transition-colors duration-200"
                >
                  {country}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700">Year:</span>
              {years.map((year) => (
                <button
                  key={year}
                  className="px-3 py-1 text-sm rounded-full border border-[#0B495A] text-[#0B495A] hover:bg-[#0B495A] hover:text-white transition-colors duration-200"
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="relative">
                <TestimonialCard {...story} />
                <div className="absolute top-4 right-4 bg-[#0B495A] text-white text-xs px-2 py-1 rounded">
                  Class of {story.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* How to Share Your Story */}
      <section className="py-20 bg-[#0B495A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Share Your Success Story
              </h2>
              <p className="text-[#E7F2F4] text-lg mb-8 leading-relaxed">
                Are you currently studying in Europe with NEXTSTEP's help? We'd love to hear about 
                your journey and share your story to inspire other students. Your experience could 
                be the motivation someone needs to take their next step.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#E7F2F4] rounded-full mr-3"></div>
                  <span>Share your university and course experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#E7F2F4] rounded-full mr-3"></div>
                  <span>Inspire future students with your journey</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#E7F2F4] rounded-full mr-3"></div>
                  <span>Get featured on our website and social media</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Share?</h3>
              <p className="text-[#E7F2F4] mb-6">
                Contact us to share your story and help inspire the next generation of students.
              </p>
              <div className="space-y-3">
  <Button
    asChild
    className="w-full bg-white text-[#0B495A] font-medium hover:bg-gray-100 transition-colors"
  >
    <a
      href="https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I'd%20like%20to%20share%20my%20success%20story%20studying%20in%20Europe."
      target="_blank"
      rel="noopener noreferrer"
    >
      Share via WhatsApp
    </a>
  </Button>

  <Button
    asChild
    variant="outline"
    className="w-full bg-transparent border-white text-white font-medium hover:bg-white hover:text-[#0B495A] transition-colors"
  >
    <a href="mailto:consultant.ns.nextstep@gmail.com?subject=Student Success Story Submission">
      Email Your Story
    </a>
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#E7F2F4]">
            Join thousands of successful students who trusted NEXTSTEP for their European education journey. 
            Your story could be next!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#0B495A] hover:bg-gray-100">
              <Link href="/contact">Start Your Journey</Link>
            </Button>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white border border-green-500 hover:border-green-600">
              <a href="https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I'm%20inspired%20by%20these%20success%20stories.%20I%20want%20to%20study%20in%20Europe%20too!" target="_blank" rel="noopener noreferrer">
                Chat with Us
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

export default TestimonialsPage