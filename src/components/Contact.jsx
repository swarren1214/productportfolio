import { motion } from 'framer-motion'
import { FiMail, FiDownload } from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

const Contact = () => {
  const { contact } = portfolioData

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  const getIcon = (iconName) => {
    return FaIcons[iconName] || FaIcons.FaLink
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-title gradient-text">
            {contact.title}
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            {contact.subtitle}
          </p>

          {/* Email */}
          <div className="mb-8">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-3 text-2xl font-semibold text-primary-600 dark:text-primary-400 hover:underline"
            >
              <FiMail />
              {contact.email}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {contact.socialLinks.map((link, index) => {
              const IconComponent = getIcon(link.icon)
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={link.platform}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.a>
              )
            })}
          </div>

          {/* Resume Download */}
          <div>
            <a
              href={contact.resumeUrl}
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <FiDownload className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="section-container mt-20 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} {portfolioData.personal.name}. Built with React, Vite, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </section>
  )
}

export default Contact
