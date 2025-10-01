import { motion } from 'framer-motion'
import { FiAward, FiMapPin, FiCalendar } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const Education = () => {
  const { education } = portfolioData

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      <div className="section-container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          className="section-title gradient-text"
        >
          Education
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="p-6 md:p-8">
                {/* Header with Icon and Title */}
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    {edu.logo ? (
                      <img 
                        src={edu.logo} 
                        alt={edu.school}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-logo flex items-center justify-center">
                        <FiAward className="w-12 h-12 md:w-16 md:h-16 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Title and Meta Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      {edu.degree}
                    </h3>
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <FiAward className="w-4 h-4 flex-shrink-0" />
                        <span className="font-medium">{edu.school}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                        <FiMapPin className="w-4 h-4 flex-shrink-0" />
                        <span>{edu.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                        <FiCalendar className="w-4 h-4 flex-shrink-0" />
                        <span>{edu.graduationDate}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="space-y-3 pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                    {edu.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-700/50 hover:border-purple-400 dark:hover:border-purple-500 transition-colors duration-200"
                      >
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
