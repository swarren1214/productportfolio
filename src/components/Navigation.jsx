import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import { portfolioData } from '../data/portfolioData'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'References', href: '#references' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 dark:bg-gray-900/5 backdrop-blur-md shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
          >
            <img 
              src="/warren-design-logo.svg" 
              alt="Logo" 
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 brightness-0 dark:brightness-100"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {portfolioData.personal.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100/25 dark:hover:bg-gray-800/25 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/5 dark:bg-gray-900/5 backdrop-blur-md">
          <div className="section-container py-4 space-y-2">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block py-2 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
