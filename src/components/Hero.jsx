import React from 'react'
import { ArrowRight, Shield, Award, MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-forest-green to-slate-grey text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Tacoma, Washington</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Hardscaping Solutions Engineered for the Pacific Northwest
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 font-light">
              Certified & Insured in Tacoma, WA
            </p>

            <p className="text-lg text-gray-300">
              Professional hardscaping services including paving, fencing, retaining walls, and synthetic turf. 
              Built to withstand the Pacific Northwest climate with precision and durability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#calculator" 
                className="inline-flex items-center justify-center bg-safety-orange text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Get An Instant Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/20 transition-colors border-2 border-white/30"
              >
                View Our Services
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-safety-orange" />
                <span className="text-sm font-medium">Certified & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-safety-orange" />
                <span className="text-sm font-medium">OSHA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-safety-orange" />
                <span className="text-sm font-medium">30mi from Tacoma</span>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Project Photos */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main featured image */}
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="/photos/paving 5 after 1.jpg"
                  alt="Professional paving installation"
                  className="w-full h-full object-cover"
                  width="600"
                  height="600"
                  fetchpriority="high"
                />
              </div>

              {/* Small overlay images */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/photos/turf after 1.jpg"
                  alt="Synthetic turf"
                  className="w-full h-full object-cover"
                  width="200"
                  height="200"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/photos/fence after.jpg"
                  alt="Fencing"
                  className="w-full h-full object-cover"
                  width="150"
                  height="150"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 48H1440V0C1440 0 1080 48 720 48C360 48 0 0 0 0V48Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
