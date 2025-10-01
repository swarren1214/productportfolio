import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar, FiBriefcase } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const Projects = () => {
  const { projects } = portfolioData
  const featuredProjects = projects.filter(p => p.featured !== false)

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          className="section-title gradient-text"
        >
          Experience
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="p-6 md:p-8">
                {/* Header with Logo and Title */}
                <div className="flex items-start gap-4 mb-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    {project.logo ? (
                      <img 
                        src={project.logo} 
                        alt={project.company}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-logo flex items-center justify-center">
                        <span className="text-white text-3xl md:text-4xl font-bold">
                          {project.company?.charAt(0) || 'P'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title and Meta Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      {project.title}
                    </h3>
                    
                    <div className="space-y-1">
                      {project.company && (
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <FiBriefcase className="w-4 h-4 flex-shrink-0" />
                          <span className="font-medium">{project.company}</span>
                        </div>
                      )}
                      
                      {project.location && (
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                          <FiMapPin className="w-4 h-4 flex-shrink-0" />
                          <span>{project.location}</span>
                        </div>
                      )}
                      
                      {project.period && (
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                          <FiCalendar className="w-4 h-4 flex-shrink-0" />
                          <span>{project.period}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Achievements Bullets */}
                {project.achievements && project.achievements.length > 0 && (
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
