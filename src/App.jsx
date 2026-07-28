// App is the whole "router": there are no routes — sections stack in page
// order and the navbar scroll-links to their ids. The footer below is a
// contact-info render site; all business identity values (phone, Instagram,
// hours) come from src/lib/contact.js — never hardcode them here.
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Calculator from './components/Calculator'
import ServicesGrid, { SERVICES } from './components/ServicesGrid'
import ProjectGallery from './components/ProjectGallery'
import AboutUs from './components/AboutUs'
import CustomerReviews from './components/CustomerReviews'
import SafetyBadge from './components/SafetyBadge'
import ServiceAreaMap from './components/ServiceAreaMap'
import Contact from './components/Contact'
import PrivacyPolicy from './components/PrivacyPolicy'
import CookieConsent from './components/CookieConsent'
import { Phone, Instagram } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL, INSTAGRAM_HANDLE, INSTAGRAM_URL, BUSINESS_HOURS } from './lib/contact'

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
                  href={PHONE_TEL}
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  {INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Services</h4>
              {/* Mirrors the ServicesGrid cards — sourced from the same array
                  so the footer can't drift from the actual service lineup. */}
              <ul className="space-y-2 text-gray-300">
                {SERVICES.map((service) => (
                  <li key={service.id}>{service.title}</li>
                ))}
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
                {BUSINESS_HOURS.map(({ days, hours }) => (
                  <div key={days} className="flex flex-col">
                    <span className="font-medium">{days}:</span>
                    <span>{hours}</span>
                  </div>
                ))}
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
