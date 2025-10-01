import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const Hero = () => {
  const { hero } = portfolioData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-logo">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            {hero.name}
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl text-indigo-100 font-semibold mb-6"
          >
            {hero.role}
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8"
          >
            {hero.tagline}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {hero.cta.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  button.variant === 'outline'
                    ? 'border-2 border-white text-white hover:bg-white hover:text-indigo-600'
                    : 'bg-white text-indigo-600 hover:bg-indigo-50 hover:shadow-lg'
                }`}
              >
                {button.text}
                <FiArrowRight />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
