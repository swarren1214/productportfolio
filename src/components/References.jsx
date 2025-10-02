import { motion } from 'framer-motion'
import { FiPhone, FiBriefcase } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

const References = () => {
  const { references } = portfolioData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="references" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="section-title gradient-text"
        >
          Professional References
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
        >
          Colleagues and mentors who can speak to my work ethic, skills, and impact
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {references.map((reference, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-600"
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                    {reference.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {reference.name}
                    </h3>
                  </div>
                </div>
                
                {/* Title */}
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <FiBriefcase className="flex-shrink-0" />
                  <span className="italic">{reference.title}</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <FiPhone className="flex-shrink-0" />
                  <a 
                    href={`tel:${reference.phone.replace(/\./g, '')}`}
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {reference.phone}
                  </a>
                </div>
              </div>

              {/* Testimonial */}
              <div className="pt-4 border-t border-gray-300 dark:border-gray-600">
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic">
                  "{reference.testimonial}"
                </p>
              </div>

              {/* LinkedIn Button */}
              {reference.linkedin && (
                <div className="mt-4">
                  <a
                    href={reference.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium w-full justify-center"
                  >
                    <FaLinkedin className="text-lg" />
                    <span>View LinkedIn Profile</span>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Additional references available upon request
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default References
