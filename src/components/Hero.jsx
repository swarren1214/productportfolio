import { motion } from 'framer-motion'
import { FiArrowRight, FiTrendingUp, FiTarget, FiUsers, FiLayers, FiZap, FiBarChart2, FiCompass, FiCpu } from 'react-icons/fi'
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

  // Floating animated icons representing Product Management
  const floatingIcons = [
    { Icon: FiTrendingUp, delay: 0, duration: 15, x: '10%', y: '15%', size: 'text-4xl' },
    { Icon: FiTarget, delay: 2, duration: 18, x: '85%', y: '20%', size: 'text-5xl' },
    { Icon: FiUsers, delay: 1, duration: 20, x: '15%', y: '75%', size: 'text-6xl' },
    { Icon: FiLayers, delay: 3, duration: 16, x: '80%', y: '70%', size: 'text-4xl' },
    { Icon: FiZap, delay: 4, duration: 19, x: '5%', y: '45%', size: 'text-5xl' },
    { Icon: FiBarChart2, delay: 1.5, duration: 17, x: '90%', y: '45%', size: 'text-6xl' },
    { Icon: FiCompass, delay: 2.5, duration: 21, x: '50%', y: '10%', size: 'text-4xl' },
    { Icon: FiCpu, delay: 3.5, duration: 22, x: '50%', y: '85%', size: 'text-5xl' },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-logo relative overflow-hidden">
      {/* Animated Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => {
          const Icon = item.Icon
          return (
            <motion.div
              key={index}
              className={`absolute ${item.size} text-white/10`}
              style={{
                left: item.x,
                top: item.y,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon />
            </motion.div>
          )
        })}
      </div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent pointer-events-none"></div>

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto bg-black/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16"
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
