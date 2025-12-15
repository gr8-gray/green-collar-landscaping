import React from 'react'
import { MapPin, CheckCircle } from 'lucide-react'

const ServiceAreaMap = () => {
  const cities = [
    { name: 'Tacoma', featured: true },
    { name: 'Puyallup', featured: false },
    { name: 'Lakewood', featured: false },
    { name: 'University Place', featured: false },
    { name: 'Gig Harbor', featured: false },
    { name: 'Spanaway', featured: false },
    { name: 'Parkland', featured: false },
    { name: 'Bonney Lake', featured: false },
    { name: 'Sumner', featured: false },
    { name: 'Edgewood', featured: false },
    { name: 'Fife', featured: false },
    { name: 'Federal Way', featured: false },
  ]

  const counties = [
    'Pierce County',
    'King County (Southern)',
    'Thurston County (Northern)',
  ]

  return (
    <section className="py-20 bg-white" aria-labelledby="service-area-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-green rounded-full mb-4">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h2 id="service-area-heading" className="text-4xl md:text-5xl font-heading font-bold text-slate-grey mb-4">
            Our Service Area
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving Tacoma and surrounding communities within a 30-mile radius
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200">
              {/* Google Maps Embed */}
              <iframe
                title="Green Collar Landscaping Service Area Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172327.9337239344!2d-122.63868193925784!3d47.25287597073499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490472e8a1239ed%3A0xe99a582ff7f85e7!2sTacoma%2C%20WA!5e0!3m2!1sen!2sus!4v1702345678901!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
              
              {/* Radius Circle Overlay */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                  {/* Outer radius circle - 30 miles */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="#1b4d3e"
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                    opacity="0.6"
                  />
                  {/* Middle radius circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="none"
                    stroke="#1b4d3e"
                    strokeWidth="0.4"
                    strokeDasharray="2,2"
                    opacity="0.4"
                  />
                  {/* Inner radius circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="15"
                    fill="none"
                    stroke="#1b4d3e"
                    strokeWidth="0.3"
                    strokeDasharray="2,2"
                    opacity="0.3"
                  />
                  {/* Center point - Tacoma */}
                  <circle
                    cx="50"
                    cy="50"
                    r="2"
                    fill="#f97316"
                    opacity="0.8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="2.5"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="0.5"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="r"
                      from="2.5"
                      to="5"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.6"
                      to="0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
            </div>
            
            {/* Map Legend */}
            <div className="mt-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg">
              <h4 className="text-sm font-semibold text-slate-grey mb-3">Map Legend</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <div className="w-3 h-3 bg-safety-orange rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Tacoma Base Location</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <circle
                        cx="10"
                        cy="10"
                        r="7"
                        fill="none"
                        stroke="#1b4d3e"
                        strokeWidth="1.5"
                        strokeDasharray="2,2"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Service Radius Zones</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-gray-400"></div>
                  </div>
                  <span className="text-sm text-gray-600">Up to 30 miles from Tacoma</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cities & Counties List */}
          <div className="space-y-8">
            {/* Cities */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-slate-grey mb-6">
                Cities We Serve
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {cities.map((city) => (
                  <div key={city.name} className="flex items-center space-x-2">
                    <CheckCircle className={`h-5 w-5 flex-shrink-0 ${city.featured ? 'text-forest-green' : 'text-safety-orange'}`} />
                    <span className={`${city.featured ? 'font-semibold text-forest-green' : 'text-gray-700'}`}>
                      {city.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Counties */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-slate-grey mb-6">
                County Coverage
              </h3>
              <div className="space-y-3">
                {counties.map((county) => (
                  <div key={county} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-forest-green flex-shrink-0" />
                    <span className="font-medium text-gray-700">{county}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-forest-green to-slate-grey rounded-xl p-6 text-white">
              <p className="font-semibold mb-2">Not sure if we serve your area?</p>
              <p className="text-gray-200 text-sm mb-4">
                Give us a call to confirm! We're always looking to expand our service areas for the right projects.
              </p>
              <a
                href="tel:253-212-6752"
                className="inline-flex items-center bg-safety-orange text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Call (253) 212-6752
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceAreaMap
