import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import * as Icons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'
import { FiX } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const Skills = () => {
  const { skills } = portfolioData
  const [selectedSkill, setSelectedSkill] = useState(null)

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const getIcon = (iconName) => {
    const Icon = Icons[iconName] || SiIcons[iconName]
    return Icon || Icons.FaCode
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      <div className="section-container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          className="section-title gradient-text"
        >
          Skills & Technologies
        </motion.h2>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                {category}
              </h3>
              
              <motion.div
                key={`${category}-container`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
              >
                {skillList.map((skill, index) => {
                  const IconComponent = getIcon(skill.icon)
                  // Cycle through gradient colors for variety
                  const colors = [
                    'text-orange-500 dark:text-orange-400',
                    'text-pink-500 dark:text-pink-400',
                    'text-purple-600 dark:text-purple-400',
                    'text-indigo-600 dark:text-indigo-400',
                    'text-blue-600 dark:text-blue-400'
                  ]
                  const colorClass = colors[index % colors.length]
                  
                  return (
                    <motion.div
                      key={`${category}-${index}`}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      onClick={() => setSelectedSkill({ ...skill, category, colorClass })}
                      className="flex flex-col items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer border border-transparent hover:border-purple-300 dark:hover:border-purple-700"
                      style={{ willChange: 'auto' }}
                    >
                      <div className="w-12 h-12 flex items-center justify-center">
                        <IconComponent className={`w-10 h-10 ${colorClass}`} />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <FiX className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </button>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    {(() => {
                      const IconComponent = getIcon(selectedSkill.icon)
                      return <IconComponent className={`w-16 h-16 ${selectedSkill.colorClass}`} />
                    })()}
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {selectedSkill.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {selectedSkill.category}
                      </p>
                    </div>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"></div>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedSkill.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills
