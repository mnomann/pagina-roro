import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import type { NavLink } from '../types'

const navLinks: NavLink[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Sobre Mí', path: '/sobre-mi' },
  { label: 'Contacto', path: '/contacto' },
]

export default function Header() {
  const { pathname } = useLocation()
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const navRef = useRef<HTMLDivElement>(null)

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    const updateIndicator = () => {
      const nav = navRef.current
      if (!nav) return
      const links = nav.querySelectorAll<HTMLAnchorElement>('a')
      const activeIdx = navLinks.findIndex(l => l.path === pathname)
      if (activeIdx < 0 || !links[activeIdx]) return

      const navRect = nav.getBoundingClientRect()
      const linkRect = links[activeIdx].getBoundingClientRect()

      setIndicatorStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      })
    }

    requestAnimationFrame(updateIndicator)
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-surface/70 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            nombre-generico
          </Link>

          <nav
            ref={navRef}
            className="hidden md:flex items-center gap-1 relative"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2.5 text-base font-medium rounded-lg transition-all ${
                  isActive(link.path)
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-text hover:bg-accent-soft'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Indicador deslizante unico */}
            <motion.div
              className="absolute bottom-0 h-[3px] bg-accent rounded-full"
              animate={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
              }}
            />
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-text-secondary hover:text-text hover:bg-accent-soft transition-colors"
              aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text hover:bg-accent-soft transition-colors"
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
            className="md:hidden border-t border-border overflow-hidden"
            aria-label="Navegación móvil"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-accent bg-accent-soft'
                      : 'text-text-secondary hover:text-text hover:bg-accent-soft'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
