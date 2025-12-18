import React, { useState, useEffect, useRef } from 'react'
import { MapPin, CheckCircle, X, Maximize2 } from 'lucide-react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const ServiceAreaMap = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const mapRef = useRef(null)
  const mapInstance = useRef(null)
  const circleMarker = useRef(null)

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
    { name: 'Lacy', featured: false },
    { name: 'Kent', featured: false },
    { name: 'Renton', featured: false },
    { name: 'Auburn', featured: false },
  ]

  const counties = [
    'Pierce County',
    'King County (Southern)',
    'Thurston County (Northern)',
  ]

  // Tacoma center coordinates
  const tacomaLat = 47.2529
  const tacomaLng = -122.4443
  const serviceRadius = 48.28 // kilometers (30 miles)

  const initMap = () => {
    if (!mapRef.current || mapInstance.current) return

    // Tacoma center coordinates
    const tacomaLat = 47.2529
    const tacomaLng = -122.4443
    const serviceRadiusKm = 48.28 // 30 miles in kilometers

    // Initialize Leaflet map
    const map = L.map(mapRef.current).setView([tacomaLat, tacomaLng], 10)
    mapInstance.current = map

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map)

    // Add circle marker pinned to Tacoma coordinates
    const circleLayer = L.circle([tacomaLat, tacomaLng], {
      radius: serviceRadiusKm * 1000, // Convert to meters for Leaflet
      color: '#1b4d3e',
      weight: 2,
      opacity: 0.7,
      fill: true,
      fillColor: '#1b4d3e',
      fillOpacity: 0.05,
      dashArray: '5, 5',
    }).addTo(map)

    // Add center point marker
    L.circleMarker([tacomaLat, tacomaLng], {
      radius: 6,
      color: '#f97316',
      fill: true,
      fillColor: '#f97316',
      fillOpacity: 1,
      weight: 2,
    }).addTo(map)

    // Add popup to center
    L.popup()
      .setLatLng([tacomaLat, tacomaLng])
      .setContent('<strong>Tacoma Center</strong><br>Service Area Hub')
      .addTo(map)

    circleMarker.current = circleLayer
  }

  useEffect(() => {
    if (isModalOpen && mapRef.current && !mapInstance.current) {
      initMap()
    }

    // Handle body overflow
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      // Cleanup map instance when modal closes
      if (!isModalOpen && mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [isModalOpen])

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
          {/* Static Map */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200 group">
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
                className="w-full pointer-events-none"
              ></iframe>
              
              {/* Radius Circle Overlay */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <svg className="w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                  {/* Service Radius */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="rgba(27, 77, 62, 0.05)"
                    stroke="#1b4d3e"
                    strokeWidth="0.8"
                    strokeDasharray="3,3"
                    opacity="0.7"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="none"
                    stroke="#1b4d3e"
                    strokeWidth="0.6"
                    strokeDasharray="3,3"
                    opacity="0.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="15"
                    fill="none"
                    stroke="#1b4d3e"
                    strokeWidth="0.4"
                    strokeDasharray="3,3"
                    opacity="0.3"
                  />
                  {/* Center */}
                  <circle
                    cx="50"
                    cy="50"
                    r="2.5"
                    fill="#f97316"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="3"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="0.6"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="r"
                      from="3"
                      to="6"
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

              {/* Expand Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="absolute bottom-4 right-4 bg-forest-green hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-10"
                aria-label="Expand map to full screen"
                title="Click to expand map"
              >
                <Maximize2 size={20} />
              </button>
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
                  <span className="text-sm font-medium text-gray-700">30-Mile Service Radius</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-gray-400"></div>
                  </div>
                  <span className="text-sm text-gray-600">Shaded coverage area</span>
                </div>
                <div className="pt-2 border-t border-gray-300">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-sm text-forest-green font-semibold hover:text-emerald-700 transition-colors"
                  >
                    → Click map icon to expand and explore
                  </button>
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

      {/* Full Screen Interactive Map Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col">
            {/* Header */}
            <div className="bg-forest-green text-white p-6 rounded-t-2xl flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">Interactive Service Area Map</h3>
                <p className="text-green-100 text-sm mt-1">Pan, zoom, and explore. The 30-mile radius circle stays fixed on Tacoma.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-white text-forest-green p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close map"
              >
                <X size={24} />
              </button>
            </div>

            {/* Map Container */}
            <div className="flex-1 relative overflow-hidden rounded-b-2xl">
              <div
                ref={mapRef}
                className="w-full h-full"
                style={{ position: 'relative' }}
              ></div>

              {/* Info Box */}
              <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs pointer-events-auto z-10">
                <h4 className="font-bold text-forest-green mb-2">Service Area</h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Radius:</strong> 30 miles
                </p>
                <p className="text-xs text-gray-600">
                  The green circle shows our service coverage. Pan and zoom to explore areas we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ServiceAreaMap

