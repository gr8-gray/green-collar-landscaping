import { motion } from 'framer-motion'
import { Square, Grid, Box, Leaf, Sprout, Layers, Palmtree, Pencil, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    id: 'paving',
    title: 'Paving & Patios',
    icon: Square,
    description: 'Durable paver installations for patios, walkways, and driveways. Engineered to withstand heavy rain and freeze-thaw cycles.',
    features: ['Custom paver patterns', 'Proper drainage design', 'Long-lasting materials', 'Professional grading'],
    color: 'from-slate-500 to-slate-700'
  },
  {
    id: 'fencing',
    title: 'Fencing Solutions',
    icon: Grid,
    description: 'Sturdy, weather-resistant fencing for security, privacy, and property definition. Built to last in Pacific Northwest conditions.',
    features: ['Wood & composite options', 'Reinforced posts', 'Custom heights & styles', 'Gate installations'],
    color: 'from-amber-600 to-amber-800'
  },
  {
    id: 'walls',
    title: 'Retaining Walls',
    icon: Box,
    description: 'Structural retaining walls engineered for slope management and erosion control. Combines functionality with aesthetic appeal.',
    features: ['Structural engineering', 'Proper drainage systems', 'Natural stone & block', 'Terraced designs'],
    color: 'from-stone-500 to-stone-700'
  },
  {
    id: 'turf',
    title: 'Synthetic Turf',
    icon: Leaf,
    description: 'Premium artificial turf installations that look natural year-round. Low maintenance, water-efficient, and pet-friendly.',
    features: ['Natural appearance', 'Excellent drainage', 'UV resistant', 'Pet & kid friendly'],
    color: 'from-green-600 to-green-800'
  },
  {
    id: 'lawn-care',
    title: 'Lawn Care',
    icon: Sprout,
    description: 'Professional lawn maintenance and care services to keep your outdoor space healthy and beautiful throughout the seasons.',
    features: ['Regular mowing & edging', 'Fertilization programs', 'Weed control', 'Seasonal treatments'],
    color: 'from-emerald-500 to-emerald-700'
  },
  {
    id: 'land-leveling',
    title: 'Land Leveling',
    icon: Layers,
    description: 'Professional grading and land leveling services for improved drainage, foundation preparation, and landscape aesthetics.',
    features: ['Precision grading', 'Drainage solutions', 'Site preparation', 'Excavation services'],
    color: 'from-orange-600 to-orange-800'
  },
  {
    id: 'sod-replacement',
    title: 'Sod Replacement',
    icon: Palmtree,
    description: 'Expert sod installation and replacement for instant, lush green lawns. Quality sod varieties suited for Pacific Northwest climate.',
    features: ['Premium sod selection', 'Soil preparation', 'Professional installation', 'Post-install care guidance'],
    color: 'from-lime-600 to-lime-800'
  },
  {
    id: 'outdoor-design',
    title: 'Outdoor Design',
    icon: Pencil,
    description: 'Custom landscape design services that transform your outdoor space into a functional and beautiful extension of your home.',
    features: ['Custom design plans', '3D visualizations', 'Plant selection', 'Hardscape integration'],
    color: 'from-purple-600 to-purple-800'
  }
]

const ServicesGrid = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-heading font-bold text-slate-grey mb-4">
            Our Hardscaping & Landscaping Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive outdoor services engineered for the Pacific Northwest climate.
            Every project is built with precision, durability, and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                    {/* Card Header */}
                    <div className={`bg-gradient-to-br ${service.color} p-6 relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="relative z-10">
                        <Icon className="h-10 w-10 text-white mb-3" />
                        <h3 className="text-xl font-heading font-bold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5">
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="flex-shrink-0 w-4 h-4 rounded-full bg-forest-green/10 flex items-center justify-center mt-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-forest-green"></div>
                            </div>
                            <span className="ml-2 text-slate-grey text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <a
                        href="#calculator"
                        className="inline-flex items-center text-forest-green font-semibold hover:text-safety-orange transition-colors text-sm"
                      >
                        Get Estimate
                        <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-heading font-bold text-slate-grey mb-4">
              Not sure which service you need?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Our team can help you choose the right solution for your property. 
              We'll assess your site and provide expert recommendations.
            </p>
            <a
              href="#contact"
              className="inline-block bg-forest-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-forest-green/90 transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
