import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Square, Grid, Box, Leaf, Calculator as CalcIcon } from 'lucide-react'

// ========================================
// PRICING CONSTANTS (Easily Adjustable)
// ========================================
const PRICING_CONFIG = {
  laborRate: 156.25, // Per hour
  
  materials: {
    paving: 20.00,      // Per sq ft
    fencing: 50.00,     // Per sq ft
    walls: 40.00,       // Per linear ft
    turf: 15.00,        // Per sq ft
  },
  
  installSpeed: {
    // Based on real job data:
    // - 300 sq ft paving = 16 hours
    // - 75 sq ft fencing = 16 hours
    // - 600 sq ft turf = 16 hours  
    // - 100 linear ft retaining wall = 16 hours
    paving: 18.75,      // sq ft per hour (300 sq ft ÷ 16 hours)
    fencing: 4.6875,    // sq ft per hour (75 sq ft ÷ 16 hours)
    walls: 6.25,        // linear ft per hour (100 linear ft ÷ 16 hours)
    turf: 37.5,         // sq ft per hour (600 sq ft ÷ 16 hours)
  }
}

const PROJECT_TYPES = [
  {
    id: 'paving',
    name: 'Paving & Patios',
    icon: Square,
    unit: 'sq ft',
    color: 'from-slate-500 to-slate-700'
  },
  {
    id: 'fencing',
    name: 'Fencing Solutions',
    icon: Grid,
    unit: 'sq ft',
    color: 'from-amber-600 to-amber-800'
  },
  {
    id: 'walls',
    name: 'Retaining Walls',
    icon: Box,
    unit: 'linear ft',
    color: 'from-stone-500 to-stone-700'
  },
  {
    id: 'turf',
    name: 'Synthetic Turf',
    icon: Leaf,
    unit: 'sq ft',
    color: 'from-green-600 to-green-800'
  }
]

const Calculator = () => {
  const [selectedProject, setSelectedProject] = useState('paving')
  const [dimensions, setDimensions] = useState(100)
  const [showResults, setShowResults] = useState(false)

  // Calculate estimate based on selected project and dimensions
  // Labor is already included in material rates
  const calculateEstimate = () => {
    const materialRate = PRICING_CONFIG.materials[selectedProject]
    const totalEstimate = materialRate * dimensions
    
    return {
      totalEstimate
    }
  }

  const estimate = calculateEstimate()
  const selectedType = PROJECT_TYPES.find(p => p.id === selectedProject)

  const handleCalculate = () => {
    setShowResults(true)
  }

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-safety-orange rounded-full mb-4">
            <CalcIcon className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-grey mb-4">
            Smart Quote Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate for your hardscaping project. Select your service and dimensions 
            to see real-time pricing with transparent material and labor breakdowns.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-200">
          
          {/* Step 1: Project Type Selection */}
          <div className="mb-10">
            <h3 className="text-2xl font-heading font-semibold text-slate-grey mb-6">
              Step 1: Select Your Project Type
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {PROJECT_TYPES.map((type) => {
                const Icon = type.icon
                const isSelected = selectedProject === type.id
                
                return (
                  <motion.button
                    key={type.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedProject(type.id)
                      setShowResults(false)
                    }}
                    className={`relative p-6 rounded-xl transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-br ' + type.color + ' text-white shadow-lg ring-4 ring-safety-orange'
                        : 'bg-white text-slate-grey hover:shadow-md border-2 border-gray-200'
                    }`}
                  >
                    <Icon className={`h-10 w-10 mx-auto mb-3 ${isSelected ? 'text-white' : 'text-forest-green'}`} />
                    <div className="text-sm font-semibold text-center">{type.name}</div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Step 2: Dimensions Input */}
          <div className="mb-10">
            <h3 className="text-2xl font-heading font-semibold text-slate-grey mb-6">
              Step 2: Enter Project Dimensions
            </h3>
            
            <div className="bg-white rounded-xl p-6 shadow-inner">
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-medium text-slate-grey">
                  Dimensions ({selectedType?.unit})
                </label>
                <input
                  type="number"
                  value={dimensions}
                  onChange={(e) => {
                    setDimensions(Math.max(1, parseInt(e.target.value) || 0))
                    setShowResults(false)
                  }}
                  className="w-32 px-4 py-2 text-xl font-bold text-center border-2 border-forest-green rounded-lg focus:outline-none focus:ring-2 focus:ring-safety-orange"
                  min="1"
                />
              </div>
              
              {/* Slider */}
              <input
                type="range"
                min="10"
                max="1000"
                value={dimensions}
                onChange={(e) => {
                  setDimensions(parseInt(e.target.value))
                  setShowResults(false)
                }}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #1b4d3e 0%, #1b4d3e ${(dimensions / 1000) * 100}%, #e5e7eb ${(dimensions / 1000) * 100}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>10 {selectedType?.unit}</span>
                <span>1000 {selectedType?.unit}</span>
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="text-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCalculate}
              className="bg-safety-orange text-white px-12 py-4 rounded-lg font-heading font-bold text-xl hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Calculate Estimate
            </motion.button>
          </div>

          {/* Results */}
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-lg border-4 border-forest-green"
            >
              <h3 className="text-3xl font-heading font-bold text-center text-slate-grey mb-6">
                Your Project Estimate
              </h3>
              
              <div className="mb-6">
                <div className="flex justify-between items-center py-6 bg-forest-green/10 rounded-lg px-6">
                  <span className="text-2xl font-heading font-bold text-forest-green">
                    Total Estimate
                  </span>
                  <span className="text-4xl font-heading font-bold text-forest-green">
                    ${estimate.totalEstimate.toFixed(2)}
                  </span>
                </div>
                <p className="text-center text-sm text-gray-600 mt-4">
                  Price includes materials and labor
                </p>
              </div>

              <div className="text-center space-y-4">
                <p className="text-sm text-gray-600 italic">
                  *This is an estimate based on standard conditions. Final pricing may vary based on 
                  site conditions, materials selected, and project complexity.
                </p>
                
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-forest-green text-white px-10 py-4 rounded-lg font-heading font-bold text-xl hover:bg-forest-green/90 transition-colors shadow-lg"
                >
                  Book This Job → ${estimate.totalEstimate.toFixed(2)}
                </motion.a>
              </div>
            </motion.div>
          )}
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <CalcIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div className="ml-3">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                Transparent Pricing Guarantee
              </h4>
              <p className="text-blue-800">
                Our estimates include all material and labor costs. We believe in upfront, honest pricing 
                with no hidden fees. Get in touch for a detailed, site-specific quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculator
