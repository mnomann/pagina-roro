import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { NavLink } from '../types'

const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nodo GovTech', href: '#govtech' },
  { label: 'Casos de Éxito', href: '#casos' },
  { label: 'Capacidades', href: '#capacidades' },
  { label: 'Contacto', href: '#contacto' },
]

function handleSmoothScroll(href: string) {
  const id = href.replace('#', '')
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    handleSmoothScroll(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link
            to="/"
            className="text-2xl font-bold text-sky-600"
          >
            Nexxuv
          </Link>

          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to="/"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="px-4 py-2 rounded-lg text-slate-600 hover:text-sky-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contacto')
              }}
              className="ml-2 px-5 py-2.5 rounded-lg bg-sky-600 text-white shadow-md hover:bg-sky-700 hover:scale-105 transition-all"
            >
              Contacto Institucional
            </Link>
          </nav>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-sky-600 transition-colors"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-slate-200 bg-white overflow-hidden"
            aria-label="Navegación móvil"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to="/"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="block px-4 py-2.5 rounded-lg text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('#contacto')
                }}
                className="block px-4 py-2.5 rounded-lg bg-sky-600 text-white text-center shadow-md hover:bg-sky-700 transition-colors"
              >
                Contacto Institucional
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
