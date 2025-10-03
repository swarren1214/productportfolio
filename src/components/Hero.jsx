import { motion } from 'framer-motion'
import { FiArrowRight, FiTrendingUp, FiTarget, FiUsers, FiLayers, FiZap, FiBarChart2, FiCompass, FiCpu, FiBox, FiCheckCircle, FiGrid, FiMonitor, FiPieChart, FiSettings, FiActivity, FiAward, FiClock, FiPackage, FiSliders, FiTool, FiFilter, FiCode, FiDatabase, FiGlobe, FiHexagon, FiLink, FiMap, FiShare2, FiStar, FiTrello, FiClipboard } from 'react-icons/fi'
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

  // Floating animated icons representing Product Management - 200% increased density with all unique icons
  const floatingIcons = [
    { Icon: FiTrendingUp, delay: 0, duration: 15, x: '10%', y: '15%', size: 'text-3xl' },
    { Icon: FiTarget, delay: 2, duration: 18, x: '85%', y: '20%', size: 'text-6xl' },
    { Icon: FiUsers, delay: 1, duration: 20, x: '15%', y: '75%', size: 'text-7xl' },
    { Icon: FiLayers, delay: 3, duration: 16, x: '80%', y: '70%', size: 'text-4xl' },
    { Icon: FiZap, delay: 4, duration: 19, x: '5%', y: '45%', size: 'text-5xl' },
    { Icon: FiBarChart2, delay: 1.5, duration: 17, x: '90%', y: '45%', size: 'text-7xl' },
    { Icon: FiCompass, delay: 2.5, duration: 21, x: '50%', y: '10%', size: 'text-3xl' },
    { Icon: FiCpu, delay: 3.5, duration: 22, x: '50%', y: '85%', size: 'text-6xl' },
    { Icon: FiBox, delay: 0.5, duration: 16, x: '25%', y: '30%', size: 'text-2xl' },
    { Icon: FiCheckCircle, delay: 1.8, duration: 19, x: '70%', y: '35%', size: 'text-5xl' },
    { Icon: FiGrid, delay: 2.2, duration: 17, x: '35%', y: '65%', size: 'text-4xl' },
    { Icon: FiMonitor, delay: 3.8, duration: 20, x: '65%', y: '55%', size: 'text-3xl' },
    { Icon: FiPieChart, delay: 1.2, duration: 18, x: '20%', y: '55%', size: 'text-6xl' },
    { Icon: FiSettings, delay: 4.2, duration: 21, x: '75%', y: '15%', size: 'text-2xl' },
    { Icon: FiActivity, delay: 0.8, duration: 15, x: '40%', y: '25%', size: 'text-5xl' },
    { Icon: FiAward, delay: 2.8, duration: 19, x: '60%', y: '80%', size: 'text-7xl' },
    // Additional 16 icons for 200% density increase
    { Icon: FiClock, delay: 0.3, duration: 17, x: '12%', y: '40%', size: 'text-4xl' },
    { Icon: FiPackage, delay: 1.6, duration: 16, x: '30%', y: '18%', size: 'text-2xl' },
    { Icon: FiSliders, delay: 3.2, duration: 20, x: '55%', y: '32%', size: 'text-5xl' },
    { Icon: FiTool, delay: 2.1, duration: 18, x: '78%', y: '50%', size: 'text-3xl' },
    { Icon: FiFilter, delay: 1.4, duration: 19, x: '45%', y: '68%', size: 'text-6xl' },
    { Icon: FiCode, delay: 3.9, duration: 15, x: '22%', y: '88%', size: 'text-4xl' },
    { Icon: FiDatabase, delay: 0.7, duration: 21, x: '68%', y: '12%', size: 'text-2xl' },
    { Icon: FiGlobe, delay: 2.4, duration: 17, x: '92%', y: '65%', size: 'text-5xl' },
    { Icon: FiHexagon, delay: 1.1, duration: 19, x: '8%', y: '28%', size: 'text-3xl' },
    { Icon: FiLink, delay: 3.6, duration: 16, x: '38%', y: '48%', size: 'text-7xl' },
    { Icon: FiMap, delay: 0.9, duration: 20, x: '72%', y: '78%', size: 'text-4xl' },
    { Icon: FiShare2, delay: 2.7, duration: 18, x: '18%', y: '62%', size: 'text-2xl' },
    { Icon: FiStar, delay: 1.3, duration: 15, x: '58%', y: '22%', size: 'text-6xl' },
    { Icon: FiTrello, delay: 3.3, duration: 21, x: '82%', y: '38%', size: 'text-5xl' },
    { Icon: FiClipboard, delay: 0.6, duration: 17, x: '42%', y: '92%', size: 'text-3xl' },
    { Icon: FiArrowRight, delay: 2.9, duration: 19, x: '28%', y: '8%', size: 'text-4xl' },
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
          className="text-center max-w-5xl mx-auto bg-white/10 dark:bg-black/10 border border-white/10 dark:border-black/10 backdrop-blur-sm shadow-lg rounded-3xl p-8 md:p-12 lg:p-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Stephen Warren
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl text-gray-800/50 dark:text-white/50 font-semibold mb-6"
          >
            Visionary Product Manager
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-800/75 dark:text-white/75 max-w-2xl mx-auto mb-8"
          >
            Elevating interfaces • Optimizing operations • Delivering measurable impact
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {hero.cta.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-white ${
                  button.variant === 'outline'
                    ? 'bg-secondary-600 border border-white hover:bg-secondary-800'
                    : 'bg-primary-600 hover:bg-primary-800'
                } hover:shadow-lg`}
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
