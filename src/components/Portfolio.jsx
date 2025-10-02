import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiExternalLink, FiX } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'
import { useState } from 'react'

const Portfolio = () => {
  const { portfolio } = portfolioData
  const [selectedProject, setSelectedProject] = useState(null)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      <div className="section-container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          className="section-title gradient-text"
        >
          Portfolio & Case Studies
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-center text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
        >
          Deep dives into product challenges, solutions, and measurable outcomes
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {portfolio.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              onClick={() => {
                if (project.caseStudy) {
                  setSelectedProject(project)
                  setCarouselIndex(0) // Reset carousel to first image
                }
              }}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                project.caseStudy ? 'cursor-pointer' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-logo">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {project.category && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                    {project.category}
                  </span>
                )}

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                {/* Key Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 rounded-lg">
                        <div className="text-2xl font-bold gradient-text">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="pt-4">
                  {project.caseStudy ? (
                    <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold transition-colors">
                      <span>Read Full Case Study</span>
                      <FiArrowRight className="w-4 h-4" />
                    </div>
                  ) : project.caseStudyUrl ? (
                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold transition-colors"
                    >
                      <span>View Case Study</span>
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 font-semibold cursor-not-allowed">
                      <span>Case Study Coming Soon</span>
                      <FiArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full-Page Case Study Modal */}
        <AnimatePresence>
          {selectedProject?.caseStudy && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Sticky Header with Close Button */}
                <div className="sticky top-0 z-20 flex-shrink-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-t-2xl border-b border-gray-200 dark:border-gray-800 px-4 md:px-8 py-3 md:py-4 flex items-center justify-between gap-4">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text line-clamp-2 flex-1 min-w-0">
                    {selectedProject.caseStudy.title}
                  </h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-shrink-0 p-2 md:p-2.5 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-lg"
                  >
                    <FiX className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>

                {/* Scrollable Modal Content */}
                <div className="overflow-y-auto flex-1 p-8 md:p-12 space-y-12">
                  {/* Hero Section */}
                  <div className="space-y-6">
                    
                    {/* Hero Image Placeholder */}
                    <div className="relative h-64 md:h-96 rounded-xl overflow-hidden bg-gradient-logo">
                      {selectedProject.image && (
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
                      )}
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🧩 Overview</h3>
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                        {selectedProject.caseStudy.overview}
                      </p>
                    </div>
                  </div>

                  {/* My Role Section */}
                  {selectedProject.caseStudy.role && (
                    <div className="space-y-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedProject.caseStudy.role.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {selectedProject.caseStudy.role.description}
                      </p>
                      <ul className="space-y-2 ml-4">
                        {selectedProject.caseStudy.role.responsibilities.map((item, idx) => (
                          <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {selectedProject.caseStudy.role.footer && (
                        <p className="text-gray-700 dark:text-gray-300 italic mt-4">
                          {selectedProject.caseStudy.role.footer}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Featured Team Image - Show right after Role section */}
                  {selectedProject.caseStudy.images && selectedProject.caseStudy.images.find(img => img.featured) && (
                    <div className="space-y-4">
                      {(() => {
                        const featuredImg = selectedProject.caseStudy.images.find(img => img.featured)
                        return (
                          <div className="relative rounded-xl overflow-hidden shadow-xl">
                            <img
                              src={featuredImg.url}
                              alt={featuredImg.caption}
                              className="w-full h-auto object-contain max-h-[300px]"
                              onError={(e) => {
                                e.target.style.display = 'none'
                                e.target.parentElement.innerHTML = `<div class="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-700 p-12 text-center"><p class="text-gray-400 dark:text-gray-500">Image: ${featuredImg.caption}</p></div>`
                              }}
                            />
                            <p className="text-center text-gray-700 dark:text-gray-300 italic mt-4 text-lg">
                              {featuredImg.caption}
                            </p>
                          </div>
                        )
                      })()}
                    </div>
                  )}

                  {/* Challenge Section */}
                  {selectedProject.caseStudy.challenge && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedProject.caseStudy.challenge.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {selectedProject.caseStudy.challenge.description}
                      </p>
                      <ul className="space-y-2 ml-4">
                        {selectedProject.caseStudy.challenge.points.map((point, idx) => (
                          <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      {selectedProject.caseStudy.challenge.footer && (
                        <p className="text-gray-700 dark:text-gray-300 italic mt-4">
                          {selectedProject.caseStudy.challenge.footer}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Launch Section */}
                  {selectedProject.caseStudy.launch && (
                    <div className="space-y-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedProject.caseStudy.launch.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                        {selectedProject.caseStudy.launch.description}
                      </p>
                      {selectedProject.caseStudy.launch.metrics && (
                        <div className="mt-4">
                          <p className="font-semibold text-gray-900 dark:text-white mb-2">Key Metrics:</p>
                          <ul className="space-y-2 ml-4">
                            {selectedProject.caseStudy.launch.metrics.map((metric, idx) => (
                              <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                <span>{metric}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Lessons Learned Section */}
                  {selectedProject.caseStudy.lessons && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedProject.caseStudy.lessons.title}
                      </h3>
                      <div className="grid gap-6">
                        {selectedProject.caseStudy.lessons.items.map((lesson, idx) => (
                          <div key={idx} className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-logo rounded-full flex items-center justify-center text-white font-bold">
                              {lesson.number}
                            </div>
                            <div className="space-y-1">
                              <h4 className="font-bold text-gray-900 dark:text-white">{lesson.title}</h4>
                              <p className="text-gray-700 dark:text-gray-300">{lesson.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Images Gallery - Carousel */}
                  {selectedProject.caseStudy.images && selectedProject.caseStudy.images.filter(img => !img.featured).length > 0 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">📱 Product Screenshots</h3>
                      {(() => {
                        const images = selectedProject.caseStudy.images.filter(img => !img.featured)
                        
                        const nextSlide = () => {
                          setCarouselIndex((prev) => (prev + 1) % images.length)
                        }
                        
                        const prevSlide = () => {
                          setCarouselIndex((prev) => (prev - 1 + images.length) % images.length)
                        }
                        
                        return (
                          <div className="relative">
                            {/* Main Image Display */}
                            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 shadow-xl">
                              <div className="flex items-center justify-center p-8 min-h-[400px]">
                                <img
                                  src={images[carouselIndex].url}
                                  alt={images[carouselIndex].caption}
                                  className="max-h-[400px] max-w-full object-contain rounded-lg"
                                  onError={(e) => {
                                    e.target.style.display = 'none'
                                    e.target.parentElement.innerHTML = `<div class="text-gray-400 dark:text-gray-500 text-center p-8"><p class="text-sm">Image placeholder: ${images[carouselIndex].caption}</p></div>`
                                  }}
                                />
                              </div>
                              
                              {/* Navigation Arrows */}
                              {images.length > 1 && (
                                <>
                                  <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                                    aria-label="Previous image"
                                  >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                  </button>
                                  <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                                    aria-label="Next image"
                                  >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                </>
                              )}
                            </div>
                            
                            {/* Caption */}
                            <p className="text-center text-gray-700 dark:text-gray-300 italic mt-4 text-base">
                              {images[carouselIndex].caption}
                            </p>
                            
                            {/* Dot Indicators */}
                            {images.length > 1 && (
                              <div className="flex justify-center gap-2 mt-6">
                                {images.map((_, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => setCarouselIndex(idx)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                                      idx === carouselIndex
                                        ? 'bg-purple-600 dark:bg-purple-400 w-8'
                                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                    }`}
                                    aria-label={`Go to image ${idx + 1}`}
                                  />
                                ))}
                              </div>
                            )}
                            
                            {/* Thumbnail Navigation */}
                            {images.length > 1 && (
                              <div className="mt-6 grid grid-cols-4 md:grid-cols-5 gap-3">
                                {images.map((img, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => setCarouselIndex(idx)}
                                    className={`relative rounded-lg overflow-hidden transition-all ${
                                      idx === carouselIndex
                                        ? 'ring-4 ring-purple-600 dark:ring-purple-400 scale-105'
                                        : 'ring-2 ring-gray-200 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-600 opacity-70 hover:opacity-100'
                                    }`}
                                  >
                                    <div className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center p-2">
                                      <img
                                        src={img.url}
                                        alt={`Thumbnail ${idx + 1}`}
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        )
                      })()}
                    </div>
                  )}

                  {/* What I'd Do Differently */}
                  {selectedProject.caseStudy.improvements && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedProject.caseStudy.improvements.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {selectedProject.caseStudy.improvements.description}
                      </p>
                      <ul className="space-y-2 ml-4">
                        {selectedProject.caseStudy.improvements.points.map((point, idx) => (
                          <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Outcome Section */}
                  {selectedProject.caseStudy.outcome && (
                    <div className="space-y-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedProject.caseStudy.outcome.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {selectedProject.caseStudy.outcome.description}
                      </p>
                    </div>
                  )}

                  {/* Takeaway Section */}
                  {selectedProject.caseStudy.takeaway && (
                    <div className="space-y-4 border-l-4 border-purple-500 pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedProject.caseStudy.takeaway.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {selectedProject.caseStudy.takeaway.description}
                      </p>
                      <blockquote className="text-xl md:text-2xl font-semibold text-purple-600 dark:text-purple-400 italic">
                        {selectedProject.caseStudy.takeaway.quote}
                      </blockquote>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio
