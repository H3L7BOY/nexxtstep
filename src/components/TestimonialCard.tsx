"use client"

interface TestimonialCardProps {
  name: string
  course: string
  university: string
  country: string
  image: string
  testimonial: string
  rating: number
}

const TestimonialCard = ({ name, course, university, country, image, testimonial, rating }: TestimonialCardProps) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-[#0B495A] to-[#6C8A92] rounded-full flex items-center justify-center overflow-hidden">
           <img 
            src={image} 
            alt={`${name} - ${course} student`}
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full bg-gradient-to-br from-[#0B495A] to-[#6C8A92] flex items-center justify-center text-white text-xl font-bold hidden">
            {name.charAt(0)}
          </div>
        </div>
        <div className="ml-4">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-[#6C8A92]">{course}</p>
          <p className="text-xs text-gray-500">{university}, {country}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-3">
        <div className="flex">{renderStars()}</div>
        <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
      </div>
      
      <blockquote className="text-gray-700 italic leading-relaxed">
        "{testimonial}"
      </blockquote>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500">
          Successfully studying in {country} with NEXTSTEP's guidance
        </p>
      </div>
    </div>
  )
}

export default TestimonialCard