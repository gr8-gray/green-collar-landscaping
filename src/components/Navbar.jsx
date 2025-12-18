import React, { useState } from 'react'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setServicesOpen(!servicesOpen)
    } else if (e.key === 'Escape') {
      setServicesOpen(false)
    }
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <img
              src="/photos/company logo.PNG"
              alt="Green Collar Landscaping"
              className="h-12 md:h-16 w-auto"
              width="64"
              height="64"
              fetchpriority="high"
            />
            <h1 className="text-xl md:text-2xl font-heading font-bold text-forest-green">
              Green<br className="sm:hidden" /> Collar<br className="hidden sm:block" />Landscaping
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Phone Number */}
            <a
              href="tel:253-212-6752"
              className="flex items-center text-slate-grey hover:text-forest-green font-medium transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden lg:inline">(253) 212-6752</span>
            </a>

            <a href="#home" className="text-slate-grey hover:text-forest-green font-medium transition-colors">
              Home
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className="flex items-center text-slate-grey hover:text-forest-green font-medium transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
                onKeyDown={handleKeyDown}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 pt-2 w-56"
                  role="menu"
                  aria-label="Services submenu"
                >
                  <div className="bg-white shadow-xl rounded-md py-2">
                    <a 
                      href="#paving" 
                      className="block px-4 py-2 text-slate-grey hover:bg-gray-100 hover:text-forest-green transition-colors focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-inset"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Paving & Patios
                    </a>
                    <a 
                      href="#fencing" 
                      className="block px-4 py-2 text-slate-grey hover:bg-gray-100 hover:text-forest-green transition-colors focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-inset"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Fencing Solutions
                    </a>
                    <a 
                      href="#walls" 
                      className="block px-4 py-2 text-slate-grey hover:bg-gray-100 hover:text-forest-green transition-colors focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-inset"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Retaining Walls
                    </a>
                    <a 
                      href="#turf" 
                      className="block px-4 py-2 text-slate-grey hover:bg-gray-100 hover:text-forest-green transition-colors focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-inset"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Synthetic Turf
                    </a>
                    <a 
                      href="#lawn-care" 
                      className="block px-4 py-2 text-slate-grey hover:bg-gray-100 hover:text-forest-green transition-colors focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-inset"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Lawn Care
                    </a>
                    <a 
                      href="#land-leveling" 
                      className="block px-4 py-2 text-slate-grey hover:bg-gray-100 hover:text-forest-green transition-colors focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-inset"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Land Leveling
                    </a>
                    <a 
                      href="#sod-replacement" 
                      className="block px-4 py-2 text-slate-grey hover:bg-gray-100 hover:text-forest-green transition-colors focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-inset"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Sod Replacement
                    </a>
                    <a 
                      href="#outdoor-design" 
                      className="block px-4 py-2 text-slate-grey hover:bg-gray-100 hover:text-forest-green transition-colors focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-inset"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Outdoor Design
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#gallery" className="text-slate-grey hover:text-forest-green font-medium transition-colors">
              Project Gallery
            </a>
            <a href="#process" className="text-slate-grey hover:text-forest-green font-medium transition-colors">
              Process & Safety
            </a>
            <a href="#contact" className="text-slate-grey hover:text-forest-green font-medium transition-colors">
              Contact
            </a>

            {/* CTA Button */}
            <a 
              href="#calculator" 
              className="bg-safety-orange text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-grey hover:text-forest-green focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {/* Phone Number */}
              <a
                href="tel:253-212-6752"
                className="flex items-center text-slate-grey hover:text-forest-green font-medium transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                (253) 212-6752
              </a>

              <a href="#home" className="text-slate-grey hover:text-forest-green font-medium transition-colors">
                Home
              </a>
              <div>
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onKeyDown={handleKeyDown}
                  className="flex items-center text-slate-grey hover:text-forest-green font-medium transition-colors w-full"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-label="Services menu"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-2" role="menu" aria-label="Services submenu">
                    <a 
                      href="#paving" 
                      className="block text-slate-grey hover:text-forest-green transition-colors focus:text-forest-green focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-inset rounded px-2 py-1"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Paving & Patios
                    </a>
                    <a 
                      href="#fencing" 
                      className="block text-slate-grey hover:text-forest-green transition-colors focus:text-forest-green focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-inset rounded px-2 py-1"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Fencing Solutions
                    </a>
                    <a 
                      href="#walls" 
                      className="block text-slate-grey hover:text-forest-green transition-colors focus:text-forest-green focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-inset rounded px-2 py-1"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Retaining Walls
                    </a>
                    <a href="#turf" className="block text-slate-grey hover:text-forest-green transition-colors">
                      Synthetic Turf
                    </a>
                    <a href="#lawn-care" className="block text-slate-grey hover:text-forest-green transition-colors">
                      Lawn Care
                    </a>
                    <a href="#land-leveling" className="block text-slate-grey hover:text-forest-green transition-colors">
                      Land Leveling
                    </a>
                    <a 
                      href="#turf" 
                      className="block text-slate-grey hover:text-forest-green transition-colors focus:text-forest-green focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-inset rounded px-2 py-1"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Synthetic Turf
                    </a>
                    <a 
                      href="#lawn-care" 
                      className="block text-slate-grey hover:text-forest-green transition-colors focus:text-forest-green focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-inset rounded px-2 py-1"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Lawn Care
                    </a>
                    <a 
                      href="#land-leveling" 
                      className="block text-slate-grey hover:text-forest-green transition-colors focus:text-forest-green focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-inset rounded px-2 py-1"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Land Leveling
                    </a>
                    <a 
                      href="#sod-replacement" 
                      className="block text-slate-grey hover:text-forest-green transition-colors focus:text-forest-green focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-inset rounded px-2 py-1"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Sod Replacement
                    </a>
                    <a 
                      href="#outdoor-design" 
                      className="block text-slate-grey hover:text-forest-green transition-colors focus:text-forest-green focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-inset rounded px-2 py-1"
                      role="menuitem"
                      tabIndex="0"
                    >
                      Outdoor Design
                    </a>
                  </div>
                )}
              </div>
              <a href="#gallery" className="text-slate-grey hover:text-forest-green font-medium transition-colors">
                Project Gallery
              </a>
              <a href="#process" className="text-slate-grey hover:text-forest-green font-medium transition-colors">
                Process & Safety
              </a>
              <a href="#contact" className="text-slate-grey hover:text-forest-green font-medium transition-colors">
                Contact
              </a>
              <a 
                href="#calculator" 
                className="bg-safety-orange text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
