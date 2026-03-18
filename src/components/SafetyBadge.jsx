import React from 'react'
import { Shield, Award, FileCheck, HardHat, CheckCircle } from 'lucide-react'

const SafetyBadge = () => {
  const certifications = [
    {
      icon: Shield,
      title: 'Certified & Insured',
      description: 'Certified to work in all counties within 30mi of Tacoma, WA'
    },
    {
      icon: Award,
      title: 'Fully Insured',
      description: 'Complete liability and workers compensation coverage'
    },
    {
      icon: HardHat,
      title: 'OSHA Compliant',
      description: 'Strict adherence to all OSHA safety standards and protocols'
    },
    {
      icon: FileCheck,
      title: 'Multi-County Certified',
      description: 'Authorized to operate in all counties within our service area'
    }
  ]

  return (
    <section id="process" className="py-20 bg-white" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Badge/Banner */}
        <div className="bg-gradient-to-r from-forest-green to-slate-grey rounded-2xl shadow-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <div className="p-8 md:p-12 text-white">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-semibold">Corporate Validity & Safety</span>
              </div>
              
              <h2 id="process-heading" className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Built on Trust, Engineered for Safety
              </h2>
              
              <p className="text-lg text-gray-200 mb-6">
                We combine the work ethic of a local team with the precision and safety
                standards of a large-scale construction firm. Every project is executed
                with professionalism, transparency, and compliance.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-safety-orange flex-shrink-0" />
                  <span className="text-gray-100">All team members background checked</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-safety-orange flex-shrink-0" />
                  <span className="text-gray-100">Daily safety briefings and site inspections</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-safety-orange flex-shrink-0" />
                  <span className="text-gray-100">Detailed contracts and project documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-safety-orange flex-shrink-0" />
                  <span className="text-gray-100">Lifetime commitment to craftsmanship</span>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Element */}
            <div className="relative h-full min-h-[300px] bg-gradient-to-br from-slate-grey/80 to-forest-green/80 p-8 md:p-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
              
              <div className="relative z-10 text-center">
                <Shield className="h-32 w-32 text-white/90 mx-auto mb-6" />
                <div className="text-6xl font-heading font-bold text-white mb-2">100%</div>
                <div className="text-xl text-white/90 font-semibold">Compliant & Certified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="w-14 h-14 bg-forest-green/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-forest-green" />
                </div>
                
                <h3 className="text-lg font-heading font-bold text-slate-grey mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Process Timeline */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-heading font-bold text-slate-grey text-center mb-12">
            Our Professional Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Free site assessment and project discussion' },
              { step: '02', title: 'Design & Quote', desc: 'Detailed proposal with transparent pricing' },
              { step: '03', title: 'Permits', desc: 'We handle all necessary permits and approvals' },
              { step: '04', title: 'Construction', desc: 'Professional execution with daily updates' },
              { step: '05', title: 'Completion', desc: 'Final walkthrough and satisfaction guarantee' }
            ].map((phase, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-16 h-16 bg-forest-green text-white rounded-full flex items-center justify-center text-xl font-heading font-bold mx-auto mb-4 shadow-lg">
                  {phase.step}
                </div>
                <h4 className="font-heading font-bold text-slate-grey mb-2">{phase.title}</h4>
                <p className="text-sm text-gray-600">{phase.desc}</p>
                
                {idx < 4 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-forest-green to-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SafetyBadge
