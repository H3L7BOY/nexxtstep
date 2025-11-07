"use client"
import Link from 'next/link'

interface DestinationCardProps {
  country: string
  capital: string
  language: string
  currency: string
  image: string
  universities: number
  averageCost: string
  href: string
  highlights: string[]
}

const DestinationCard = ({ 
  country, 
  capital, 
  language, 
  currency, 
  image, 
  universities, 
  averageCost, 
  href,
  highlights 
}: DestinationCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-200">
      <div className="h-48 bg-gradient-to-br from-[#0B495A] to-[#6C8A92] relative overflow-hidden">
         <img 
          src={image} 
          alt={`Study in ${country} - ${capital}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-2xl font-bold text-white">{country}</h3>
          <p className="text-[#E7F2F4] text-sm">{capital}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <span className="text-gray-500">Language:</span>
            <p className="font-medium text-gray-900">{language}</p>
          </div>
          <div>
            <span className="text-gray-500">Currency:</span>
            <p className="font-medium text-gray-900">{currency}</p>
          </div>
          <div>
            <span className="text-gray-500">Universities:</span>
            <p className="font-medium text-[#0B495A]">{universities}+ Partner Unis</p>
          </div>
          <div>
            <span className="text-gray-500">Avg. Cost:</span>
            <p className="font-medium text-green-600">{averageCost}/year</p>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Why Choose {country}?</h4>
          <ul className="space-y-1">
            {highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-[#0B495A] rounded-full mr-2 flex-shrink-0"></div>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex gap-2">
          <Link
            href={href}
            className="flex-1 bg-[#0B495A] hover:bg-[#6C8A92] text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            Explore {country}
          </Link>
          <a
            href={`https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I'm%20interested%20in%20studying%20in%20${encodeURIComponent(country)}.%20Can%20you%20help%20me?`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-[#0B495A] text-[#0B495A] hover:bg-[#0B495A] hover:text-white rounded-lg text-sm font-medium transition-colors duration-200"
          >
            Inquire
          </a>
        </div>
      </div>
    </div>
  )
}

export default DestinationCard