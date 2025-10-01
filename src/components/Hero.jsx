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

  // Particle orbit animations
  const particles = [
    { size: 8, delay: 0, duration: 20, radius: 200, color: 'bg-orange-400' },
    { size: 6, delay: 2, duration: 25, radius: 250, color: 'bg-pink-400' },
    { size: 10, delay: 4, duration: 22, radius: 300, color: 'bg-purple-400' },
    { size: 7, delay: 1, duration: 28, radius: 180, color: 'bg-indigo-400' },
    { size: 9, delay: 3, duration: 24, radius: 270, color: 'bg-blue-400' },
    { size: 5, delay: 5, duration: 26, radius: 220, color: 'bg-pink-300' },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-logo relative overflow-hidden">
      {/* Animated Particle Orbits */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className={`absolute ${particle.color} rounded-full opacity-40 blur-sm`}
            style={{
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              x: [
                Math.cos(0) * particle.radius,
                Math.cos(Math.PI / 2) * particle.radius,
                Math.cos(Math.PI) * particle.radius,
                Math.cos(3 * Math.PI / 2) * particle.radius,
                Math.cos(2 * Math.PI) * particle.radius,
              ],
              y: [
                Math.sin(0) * particle.radius,
                Math.sin(Math.PI / 2) * particle.radius,
                Math.sin(Math.PI) * particle.radius,
                Math.sin(3 * Math.PI / 2) * particle.radius,
                Math.sin(2 * Math.PI) * particle.radius,
              ],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
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
