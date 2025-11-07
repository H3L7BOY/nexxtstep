interface ServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
  isPopular?: boolean
}

const ServiceCard = ({ icon, title, description, features, isPopular }: ServiceCardProps) => {
  return (
    <div className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border ${
      isPopular ? 'border-[#0B495A] ring-2 ring-[#0B495A] ring-opacity-20' : 'border-gray-200'
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#0B495A] text-white text-xs font-medium px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#0B495A] to-[#6C8A92] rounded-lg flex items-center justify-center text-white text-xl font-bold">
          {icon}
        </div>
        <h3 className="ml-4 text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E7F2F4] flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-[#0B495A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="ml-3 text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex gap-2">
        <a
          href={`https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I'm%20interested%20in%20your%20service:%20${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#0B495A] hover:bg-[#6C8A92] text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
        >
          Get Started
        </a>
        <a
          href="/services"
          className="px-4 py-2 border border-[#0B495A] text-[#0B495A] hover:bg-[#0B495A] hover:text-white rounded-lg text-sm font-medium transition-colors duration-200 text-center inline-block"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}

export default ServiceCard