import { motion } from 'framer-motion'
import { Target, Hammer, Award } from 'lucide-react'

const AboutUs = () => {
  return (
    <section className="py-20 bg-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-forest-green/10 px-4 py-2 rounded-full mb-6">
              <Target className="h-5 w-5 text-forest-green" />
              <span className="text-sm font-semibold text-forest-green">About Green Collar Landscaping</span>
            </div>

            <h2 id="about-heading" className="text-4xl md:text-5xl font-heading font-bold text-slate-grey mb-6">
              Your vision. Our engineering. Built to last.
            </h2>

            <div className="prose prose-lg text-gray-600 space-y-4">
              <p className="leading-relaxed">
                At Green Collar Landscaping LLC, we don't just dig dirt—we build foundations. 
                Specializing in paving, structural retaining walls, fencing, and premium turf, 
                we deliver high-performance outdoor infrastructure designed to withstand the 
                Tacoma climate.
              </p>

              <p className="leading-relaxed">
                We combine the work ethic of a local team with the precision and safety
                standards of a large-scale construction firm. Whether you need a retaining
                wall to manage a slope or a paver patio for entertaining, we provide
                transparent pricing, engineered durability, and a lifetime commitment to
                craftsmanship.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-forest-green mb-2">1</div>
                <div className="text-sm text-gray-600 font-medium">Year Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-forest-green mb-2">60+</div>
                <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-forest-green mb-2">30mi</div>
                <div className="text-sm text-gray-600 font-medium">Travel Radius from Tacoma</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-forest-green mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">Certified & Insured</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Top Left Card */}
              <div className="bg-gradient-to-br from-forest-green to-slate-grey rounded-xl p-6 text-white shadow-xl">
                <Hammer className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-heading font-bold mb-2">Expert Craftsmanship</h3>
                <p className="text-sm text-gray-200">
                  Precision installation with attention to every detail
                </p>
              </div>

              {/* Top Right Card */}
              <div className="bg-gradient-to-br from-safety-orange to-orange-600 rounded-xl p-6 text-white shadow-xl mt-8">
                <Award className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-heading font-bold mb-2">Quality Materials</h3>
                <p className="text-sm text-gray-100">
                  Premium products built for Pacific Northwest weather
                </p>
              </div>

              {/* Bottom Left Card */}
              <div className="bg-gradient-to-br from-slate-500 to-slate-700 rounded-xl p-6 text-white shadow-xl -mt-4">
                <Target className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-heading font-bold mb-2">On-Time Delivery</h3>
                <p className="text-sm text-gray-200">
                  Efficient project management keeps us on schedule
                </p>
              </div>

              {/* Bottom Right - Company Logo */}
              <div className="bg-gradient-to-br from-forest-green/20 to-slate-grey/20 rounded-xl p-4 flex items-center justify-center mt-4 border-4 border-forest-green/30">
                <img
                  src="/photos/company logo.PNG"
                  alt="Green Collar Landscaping Logo"
                  className="w-full h-full object-contain"
                  width="300"
                  height="300"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-safety-orange/20 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-forest-green/20 rounded-full -z-10"></div>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-heading font-bold text-slate-grey text-center mb-12">
            Why Choose Green Collar?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏗️</span>
              </div>
              <h4 className="text-xl font-heading font-bold text-slate-grey mb-3">
                Engineered Solutions
              </h4>
              <p className="text-gray-600">
                Every project is designed with structural integrity and long-term durability in mind.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h4 className="text-xl font-heading font-bold text-slate-grey mb-3">
                Transparent Pricing
              </h4>
              <p className="text-gray-600">
                No hidden fees, no surprises. Just honest, upfront estimates you can trust.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌲</span>
              </div>
              <h4 className="text-xl font-heading font-bold text-slate-grey mb-3">
                Local Expertise
              </h4>
              <p className="text-gray-600">
                We know Tacoma's climate, soil, and regulations. Your project is in experienced hands.
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Owners Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-heading font-bold text-slate-grey text-center mb-4">
            Meet the Owners
          </h3>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The professionals behind every project. Our experienced team brings dedication,
            expertise, and a commitment to excellence to your outdoor transformation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Owner Antonio */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-forest-green/20">
              <img
                src="/photos/owner antonio on excavator.PNG"
                alt="Antonio - Owner & Operator"
                className="w-full h-80 rounded-lg mb-4 object-contain"
                loading="lazy"
                width="400"
                height="400"
              />
              <h4 className="text-xl font-heading font-bold text-slate-grey mb-2">
                Antonio
              </h4>
              <p className="text-forest-green font-semibold mb-3">Owner & Heavy Equipment Operator</p>
              <p className="text-gray-600 text-sm">
                With expertise in excavation and site preparation, Antonio ensures every project
                starts with a solid foundation. His precision with heavy equipment and attention
                to detail set the standard for quality from day one.
              </p>
            </div>

            {/* Co-Owner */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-forest-green/20">
              <img
                src="/photos/co owner randell lair.PNG"
                alt="Randell Lair - Co-Owner"
                className="w-full h-80 rounded-lg mb-4 object-contain"
                loading="lazy"
                width="400"
                height="400"
              />
              <h4 className="text-xl font-heading font-bold text-slate-grey mb-2">
                Randell Lair
              </h4>
              <p className="text-forest-green font-semibold mb-3">Co-Owner & Project Manager</p>
              <p className="text-gray-600 text-sm">
                Managing projects from consultation to completion, Randell ensures seamless
                communication and quality control throughout your project. Dedicated to customer
                satisfaction and delivering results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
