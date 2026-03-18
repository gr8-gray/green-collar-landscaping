import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Calculator from './components/Calculator'
import ServicesGrid from './components/ServicesGrid'
import ProjectGallery from './components/ProjectGallery'
import AboutUs from './components/AboutUs'
import CustomerReviews from './components/CustomerReviews'
import SafetyBadge from './components/SafetyBadge'
import ServiceAreaMap from './components/ServiceAreaMap'
import Contact from './components/Contact'
import PrivacyPolicy from './components/PrivacyPolicy'
import CookieConsent from './components/CookieConsent'
import { Phone, Instagram } from 'lucide-react'

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Calculator />
      <ServicesGrid />
      <ProjectGallery />
      <AboutUs />
      <CustomerReviews />
      <SafetyBadge />
      <ServiceAreaMap />
      <Contact />

      {/* Privacy Policy Modal */}
      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />

      {/* Cookie Consent Banner */}
      <CookieConsent onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      {/* Footer */}
      <footer className="bg-slate-grey text-white py-12" role="contentinfo" aria-label="Site footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-4">Green Collar<br className="md:hidden" /> Landscaping LLC</h3>
              <p className="text-gray-300 mb-4">Hardscaping Solutions Engineered for the Pacific Northwest</p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:253-212-6752"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (253) 212-6752
                </a>
                <a
                  href="https://www.instagram.com/greencollarlandscaping_?igsh=emtmZmg4OXdjcnJx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  @greencollarlandscaping_
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Paving & Patios</li>
                <li>Fencing Solutions</li>
                <li>Retaining Walls</li>
                <li>Synthetic Turf</li>
                <li>Lawn Care</li>
                <li>Land Leveling</li>
                <li>Sod Replacement</li>
                <li>Outdoor Design</li>
              </ul>
            </div>

            {/* Trust Indicators */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Trust Indicators</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Certified & Insured</li>
                <li>✓ OSHA Compliant Safety Standards</li>
                <li>✓ 30mi Radius from Tacoma, WA</li>
              </ul>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex flex-col">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">Saturday:</span>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-600 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Green Collar Landscaping LLC. All rights reserved.</p>
            <p className="mt-2">
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="hover:text-white transition-colors underline cursor-pointer bg-transparent border-none"
              >
                Privacy Policy
              </button>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
