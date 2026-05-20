import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
            >
              nombre-generico
            </Link>
            <p className="text-text-secondary text-base mt-1">Desarrollador</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Navegación del footer">
            <Link to="/" className="text-base text-text-secondary hover:text-accent transition-colors">Inicio</Link>
            <Link to="/proyectos" className="text-base text-text-secondary hover:text-accent transition-colors">Proyectos</Link>
            <Link to="/sobre-mi" className="text-base text-text-secondary hover:text-accent transition-colors">Sobre Mí</Link>
            <Link to="/contacto" className="text-base text-text-secondary hover:text-accent transition-colors">Contacto</Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-base text-text-muted">
            &copy; {currentYear} nombre-generico. Todos los derechos reservados.
          </p>
          <p className="text-sm text-text-muted mt-2">
            Diseñado y desarrollado por nombre-generico
          </p>
        </div>
      </div>
    </footer>
  )
}
