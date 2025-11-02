import { useState, useEffect } from 'react'

export default function Nav({ onContactClick }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-victus-card/80 backdrop-blur-xl shadow-md border-b border-victus-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-victus-violet to-victus-cyan rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">V</span>
          </div>
          <span className="font-display font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-victus-violet to-victus-cyan">
            Victus Launch
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollTo('packages')} className="text-victus-text hover:text-victus-cyan transition-colors">
            Packages
          </button>
          <button onClick={() => scrollTo('faq')} className="text-victus-text hover:text-victus-cyan transition-colors">
            FAQ
          </button>
          <button 
            onClick={onContactClick}
            className="px-6 py-2.5 bg-gradient-to-r from-victus-violet to-victus-cyan text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-semibold"
          >
            Free Consultation
          </button>
        </div>

        <button 
          onClick={onContactClick}
          className="md:hidden px-4 py-2 bg-gradient-to-r from-victus-violet to-victus-cyan text-white rounded-lg text-sm font-semibold"
        >
          Contact
        </button>
      </div>
    </nav>
  )
}

