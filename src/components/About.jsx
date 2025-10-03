import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const About = () => {
  const { about } = portfolioData

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
          {/* Image and LinkedIn QR */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="flex flex-col flex-shrink-0 space-y-6 items-center justify-center"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary-200 dark:ring-primary-800">
              <img 
                src="/headshot.png" 
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* LinkedIn QR Code Card - Desktop */}
            <div className="hidden md:block max-w-sm w-fit">
              <div className="bg-gradient-to-br from-[#0077B5] to-[#005885] rounded-3xl p-5 space-y-5 shadow-xl">
                {/* QR Code */}
                <div className="bg-transparent rounded-2xl flex items-center justify-center">
                  <img 
                    src="/linkedin-qr-code.svg" 
                    alt="LinkedIn QR Code"
                    className="w-full h-auto max-w-[220px]"
                  />
                </div>
                
                {/* LinkedIn Button */}
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white hover:bg-gray-50 transition-colors rounded-full py-3 px-3 text-center"
                >
                  <span className="text-[#0077B5] font-semibold flex items-center justify-center gap-1">
                    Linked
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-[#0077B5] text-white text-xs font-bold rounded">
                      in
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* LinkedIn Button - Mobile */}
            <div className="md:hidden w-full max-w-xs">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-br from-[#0077B5] to-[#005885] hover:from-[#005885] hover:to-[#004266] transition-all rounded-full py-4 px-8 text-center shadow-lg"
              >
                <span className="text-white font-semibold flex items-center justify-center gap-2 text-lg">
                  Linked
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-white text-[#0077B5] text-sm font-bold rounded">
                    in
                  </span>
                </span>
              </a>
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
