import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, Code, Palette, Database, Server, Construction } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import type { Skill } from '../types'

const skills: Skill[] = [
  { name: 'React', icon: 'Code', level: 90, category: 'frontend' },
  { name: 'TypeScript', icon: 'Code', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'Palette', level: 90, category: 'frontend' },
  { name: 'Node.js', icon: 'Server', level: 75, category: 'backend' },
  { name: 'PostgreSQL', icon: 'Database', level: 70, category: 'backend' },
  { name: 'MongoDB', icon: 'Database', level: 65, category: 'backend' },
  { name: 'Docker', icon: 'Server', level: 60, category: 'devops' },
  { name: 'Git', icon: 'Code', level: 85, category: 'tools' },
]

const iconMap: Record<string, typeof Code> = {
  Code,
  Palette,
  Database,
  Server,
}

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  devops: 'DevOps',
  tools: 'Herramientas',
}

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 overflow-hidden">
        <div className="hero-glow" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-text-secondary text-xl md:text-2xl mb-4"
          >
            Hola, soy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animated-gradient mb-4"
          >
            nombre-generico
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-2xl md:text-3xl mb-6"
          >
            Desarrollador
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-text-secondary text-lg max-w-xl mx-auto mb-8"
          >
            Creo aplicaciones web modernas, funcionales y con experiencias de usuario excepcionales.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/proyectos"
              className="px-8 py-4 bg-accent text-white rounded-xl font-medium hover:bg-[var(--color-accent-hover)] transition-all hover:translate-y-[-2px] shadow-lg shadow-accent/25 text-lg"
            >
              Ver Proyectos
            </Link>
            <Link
              to="/contacto"
              className="px-8 py-4 border border-border text-text rounded-xl font-medium hover:bg-accent-soft hover:border-accent/30 hover:translate-y-[-2px] transition-all text-lg"
            >
              Contactar
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16"
          >
            <ChevronDown size={32} className="mx-auto text-text-muted animate-bounce" />
          </motion.div>
        </div>
      </section>

      <SectionWrapper id="skills" title="Tecnologías con las que trabajo">
        <div className="max-w-4xl mx-auto px-4">
          {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((category) => (
            <div key={category} className="mb-10">
              <h3 className="text-xl font-semibold text-text mb-4 capitalize">{categoryLabels[category]}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill, index) => {
                    const Icon = iconMap[skill.icon] ?? Code
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-surface-elevated rounded-xl p-5 border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all hover:translate-y-[-2px]"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Icon size={24} className="text-accent" />
                          <span className="text-base font-medium text-text">{skill.name}</span>
                        </div>
                        <div className="w-full bg-border rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-accent rounded-full h-2"
                          />
                        </div>
                      </motion.div>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="featured-projects"
        title="Proyectos Destacados"
        subtitle="Próximamente — Actualmente trabajando en nuevos proyectos para mostrar."
      >
        <div className="max-w-md mx-auto px-4">
          <div className="bg-surface-elevated rounded-xl border border-border p-10 text-center hover:border-accent/20 transition-all">
            <Construction size={48} className="mx-auto text-text-muted mb-4" />
            <p className="text-text-secondary text-lg mb-6">
              Estoy construyendo proyectos emocionantes. ¡Muy pronto estarán aquí!
            </p>
            <Link
              to="/contacto"
              className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-[var(--color-accent-hover)] transition-colors text-lg"
            >
              Contáctame para colaborar
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
