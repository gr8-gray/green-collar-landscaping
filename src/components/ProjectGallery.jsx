import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

// Project data organized by pairs
const PROJECTS = {
  paving: [
    {
      id: 'pave-1',
      title: 'Large Patio Installation',
      before: ['/photos/big pave b4.jpg'],
      after: ['/photos/big pave after.jpg']
    },
    {
      id: 'pave-2',
      title: 'Designer Paving Project',
      before: ['/photos/design -paving b4.JPG'],
      after: ['/photos/design paving after.JPG']
    },
    {
      id: 'pave-3',
      title: 'Backyard Transformation',
      before: ['/photos/paving b4 3.jpg'],
      after: ['/photos/paving after 3.jpg']
    },
    {
      id: 'pave-4',
      title: 'Multi-Level Patio',
      before: ['/photos/paving 4 b4.jpg', '/photos/paving 4 b4 angle 2.jpg'],
      after: ['/photos/paving 4 after 1.jpg', '/photos/paving 4 after angle 2.jpg']
    },
    {
      id: 'pave-5',
      title: 'Curved Paver Design',
      before: ['/photos/paving 5 b4 angle 1.jpg', '/photos/paving 5 b4 angle 2.jpg'],
      after: ['/photos/paving 5 after 1.jpg', '/photos/paving 5 after 2.jpg']
    },
    {
      id: 'pave-6',
      title: 'Driveway Extension',
      before: ['/photos/paving 6 b4.jpg'],
      after: ['/photos/paving 6 after 1.jpg', '/photos/paving 6 after 2.jpg']
    },
    {
      id: 'pave-7',
      title: 'Walkway Installation',
      before: ['/photos/paving 7 b4 1.jpg'],
      after: ['/photos/paving 7 after 1.jpg']
    },
    {
      id: 'pave-8',
      title: 'Custom Stone Steps',
      before: ['/photos/paving 8 b4 steps.jpg'],
      after: ['/photos/paving8 after steps.jpg']
    }
  ],
  fencing: [
    {
      id: 'fence-1',
      title: 'Privacy Fence Installation',
      before: ['/photos/fence b4.jpg'],
      after: ['/photos/fence after.jpg']
    }
  ],
  turf: [
    {
      id: 'turf-1',
      title: 'Backyard Turf Conversion',
      before: ['/photos/turf b4 1.PNG', '/photos/turf b4 1 angle 2.jpg'],
      after: ['/photos/turf after 1.jpg', '/photos/turf after 1 angle 2.jpg']
    },
    {
      id: 'turf-2',
      title: 'Synthetic Lawn Installation',
      before: ['/photos/turf 2 b4 1.jpg'],
      after: ['/photos/turf 2 after 1.jpg']
    }
  ],
  outdoor: [
    {
      id: 'outdoor-1',
      title: 'Complete Outdoor Redesign',
      before: ['/photos/lc-otdes1 b4 angle 1.jpg', '/photos/lc-otdes1 b4 angle 2.jpg'],
      after: ['/photos/lc-otdes1 after angle 1.jpg', '/photos/lc-otdes1 after angle 2.jpg']
    },
    {
      id: 'outdoor-2',
      title: 'Raised Turf Installation with Steps',
      before: ['/photos/raised turf before.jpg'],
      after: ['/photos/raised turf after 1.jpg', '/photos/raised turf after 2.jpg']
    },
    {
      id: 'steps-1',
      title: 'Stone Step Creation',
      before: ['/photos/step creation b4.jpg'],
      after: ['/photos/steps after.jpg']
    }
  ],
  retaining: [
    {
      id: 'retaining-1',
      title: 'Structural Retaining Wall',
      before: ['/photos/retaining wall 1 b4.jpg'],
      after: ['/photos/retaining wall 1 after.jpg']
    },
    {
      id: 'retaining-2',
      title: 'Multi-Level Retaining System',
      before: ['/photos/retaining wall 2 angle 2.jpg'],
      after: ['/photos/retaining wall 2 completed.jpg', '/photos/retaining wall 2 angle 3.jpg']
    },
    {
      id: 'retaining-3',
      title: 'Custom Retaining Wall Installation',
      before: ['/photos/new retaining wall before.PNG'],
      after: ['/photos/new retaining wall after.PNG', '/photos/new retaining wall angle 2 after.PNG']
    }
  ]
}

const CATEGORIES = [
  { id: 'all', name: 'All Projects' },
  { id: 'paving', name: 'Paving & Patios' },
  { id: 'retaining', name: 'Retaining Walls' },
  { id: 'fencing', name: 'Fencing' },
  { id: 'turf', name: 'Synthetic Turf' },
  { id: 'outdoor', name: 'Outdoor Design' }
]

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showBefore, setShowBefore] = useState(true)

  // Get filtered projects
  const getFilteredProjects = () => {
    if (selectedCategory === 'all') {
      return Object.values(PROJECTS).flat()
    }
    return PROJECTS[selectedCategory] || []
  }

  const filteredProjects = getFilteredProjects()

  // Handle image navigation in lightbox
  const nextImage = () => {
    if (!selectedProject) return
    const images = showBefore ? selectedProject.before : selectedProject.after
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    if (!selectedProject) return
    const images = showBefore ? selectedProject.before : selectedProject.after
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openLightbox = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    setShowBefore(true)
  }

  const closeLightbox = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-grey mb-4">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the transformation. Browse our completed projects showcasing quality craftsmanship 
            and attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-forest-green text-white shadow-lg'
                  : 'bg-gray-100 text-slate-grey hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="group relative cursor-pointer"
              onClick={() => openLightbox(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                {/* Before Image */}
                <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                  <img
                    src={project.before[0]}
                    alt={`${project.title} - Before`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    BEFORE
                  </div>
                </div>

                {/* After Image */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <img
                    src={project.after[0]}
                    alt={`${project.title} - After`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                  <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    AFTER
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-heading font-bold text-lg">{project.title}</h3>
                    <p className="text-sm text-gray-200">Click to view details</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:text-safety-orange transition-colors"
                >
                  <X className="h-8 w-8" />
                </button>

                {/* Title */}
                <h3 className="text-white text-2xl font-heading font-bold mb-4 text-center">
                  {selectedProject.title}
                </h3>

                {/* Before/After Toggle */}
                <div className="flex justify-center gap-4 mb-4">
                  <button
                    onClick={() => { setShowBefore(true); setCurrentImageIndex(0); }}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                      showBefore
                        ? 'bg-red-600 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    BEFORE
                  </button>
                  <button
                    onClick={() => { setShowBefore(false); setCurrentImageIndex(0); }}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                      !showBefore
                        ? 'bg-green-600 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    AFTER
                  </button>
                </div>

                {/* Image Display */}
                <div className="relative">
                  <img
                    src={(showBefore ? selectedProject.before : selectedProject.after)[currentImageIndex]}
                    alt={`${selectedProject.title} - ${showBefore ? 'Before' : 'After'}`}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                    width="1200"
                    height="900"
                  />

                  {/* Navigation Arrows (if multiple images) */}
                  {(showBefore ? selectedProject.before : selectedProject.after).length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-all"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-all"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  {(showBefore ? selectedProject.before : selectedProject.after).length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                      {currentImageIndex + 1} / {(showBefore ? selectedProject.before : selectedProject.after).length}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectGallery
