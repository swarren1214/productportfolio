import { motion } from 'framer-motion'
import { FiCode, FiAward, FiUsers, FiZap } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const About = () => {
  const { about } = portfolioData

  const iconMap = {
    Code: FiCode,
    Award: FiAward,
    Users: FiUsers,
    Lightbulb: FiZap
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="section-title gradient-text"
        >
          {about.title}
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Image and Highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="flex-shrink-0 space-y-6"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary-200 dark:ring-primary-800 mx-auto md:mx-0">
              <img 
                src="/headshot.png" 
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto md:mx-0">
              {about.highlights.map((highlight, index) => {
                const Icon = iconMap[highlight.icon] || FiCode
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                  >
                    <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {highlight.text}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="flex-1 space-y-8"
          >
            {about.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {section.heading}
                </h3>
                
                {section.content && (
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                )}
                
                {section.items && (
                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="space-y-1">
                        <div className="flex items-start gap-2">
                          <span className="text-primary-600 dark:text-primary-400 font-bold mt-1">•</span>
                          <div>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {item.title}:
                            </span>
                            <span className="text-gray-600 dark:text-gray-300">
                              {' '}{item.description}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
