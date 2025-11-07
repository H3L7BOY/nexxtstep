'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    country: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState<any>(null)

  const countries = [
    'Latvia',
    'Poland', 
    'Czech Republic',
    'Slovakia',
    'Lithuania',
    'Estonia',
    'Slovenia',
    'Other European Country'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Store submitted data for success message
    setSubmittedData(formData)
    
    // Create detailed WhatsApp message with all form data
    const whatsappMessage = `🎓 *NEXTSTEP INQUIRY*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *WhatsApp:* ${formData.whatsapp}
🌍 *Country Interest:* ${formData.country}

💬 *Message:*
${formData.message}

---
Sent via NEXTSTEP website contact form`

    // Create professional email to consultant
    const emailSubject = `New Student Inquiry: ${formData.name} - ${formData.country}`
    const emailBody = `Dear NEXTSTEP Team,

New student inquiry received through the website:

Student Details:
- Name: ${formData.name}
- Email: ${formData.email}
- WhatsApp: ${formData.whatsapp}
- Country of Interest: ${formData.country}

Message:
${formData.message}

Please follow up within 24 hours.

Quick Actions:
- Reply to: ${formData.email}
- WhatsApp: https://wa.me/${formData.whatsapp.replace(/[^0-9]/g, '')}

Best regards,
NEXTSTEP Website System`

    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Open both communication channels
      window.open(`https://wa.me/37126321512?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
      window.open(`mailto:consultant.ns.nextstep@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`, '_blank')
      
      setSubmitted(true)
    } catch (error) {
      console.error('Error processing form:', error)
      setSubmitted(true)
    }
    
    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-600 mb-6">
          ✅ Your inquiry has been sent! We've opened WhatsApp and Email for you to connect directly with our consultants.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <p className="text-blue-800 font-medium mb-2">📱 What just happened?</p>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• ✅ WhatsApp opened with your inquiry details</li>
            <li>• ✅ Email draft created for <strong>consultant.ns.nextstep@gmail.com</strong></li>
            <li>• ✅ Your details: <strong>{submittedData?.name}</strong> interested in <strong>{submittedData?.country}</strong></li>
            <li>• ⏰ Response within 24 hours guaranteed</li>
          </ul>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 text-sm">
            <strong>📞 Direct Contact Available:</strong><br />
            WhatsApp: <a href="https://wa.me/37126321512" className="font-medium underline" target="_blank" rel="noopener noreferrer">+371 26 321 512</a> | <a href="https://wa.me/48516875116" className="font-medium underline" target="_blank" rel="noopener noreferrer">+48 516 875 116</a><br />
            Email: <a href="mailto:consultant.ns.nextstep@gmail.com" className="font-medium underline">consultant.ns.nextstep@gmail.com</a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
            Full Name *
          </Label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="mt-1"
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="mt-1"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-700">
            WhatsApp Number *
          </Label>
          <Input
            id="whatsapp"
            type="tel"
            required
            value={formData.whatsapp}
            onChange={(e) => handleInputChange('whatsapp', e.target.value)}
            className="mt-1"
            placeholder="+1234567890"
          />
        </div>
        
        <div>
          <Label htmlFor="country" className="text-sm font-medium text-gray-700">
            Country of Interest *
          </Label>
          <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Select a country</SelectItem>
              {countries.map((country) => (
                <SelectItem key={country} value={country.toLowerCase().replace(/\s+/g, '-')}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message *
        </Label>
        <Textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          className="mt-1"
          placeholder="Tell us about your study abroad goals, preferred courses, or any specific questions you have..."
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#0B495A] hover:bg-[#6C8A92] text-white flex-1"
        >
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </Button>
        
        <Button
          type="button"
          variant="outline"
          className="border-[#0B495A] text-[#0B495A] hover:bg-[#0B495A] hover:text-white flex-1"
          asChild
        >
          <a
            href="https://wa.me/37126321512?text=Hi%20NEXTSTEP,%20I'm%20interested%20in%20studying%20abroad%20in%20Europe.%20Can%20you%20help%20me?"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </Button>
      </div>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our privacy policy and consent to being contacted regarding your inquiry.
      </p>
    </form>
  )
}

export default ContactForm