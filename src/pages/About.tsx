import { motion } from 'framer-motion'
import { Calendar, GraduationCap } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

export default function About() {
  return (
    <>
      <SectionWrapper id="about" title="Sobre Mí">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 mx-auto md:mx-0 ring-4 ring-accent/20 shadow-xl shadow-accent/10">
              <span className="text-3xl md:text-4xl font-bold text-white">NG</span>
            </div>
            <div>
              <p className="text-text-secondary text-lg leading-relaxed mb-4">
                Soy un desarrollador apasionado por crear aplicaciones web modernas y funcionales.
                Con experiencia en tecnologías frontend y backend, me especializo en construir
                experiencias de usuario excepcionales utilizando React, TypeScript y las mejores
                prácticas del desarrollo web.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Me encanta aprender nuevas tecnologías y enfrentar desafíos que me permitan crecer
                profesionalmente. Busco siempre escribir código limpio, mantenible y accesible.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="experience" title="Experiencia">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          {[
            { year: '2025 - Presente', role: 'Desarrollador Frontend', company: 'Empresa Actual', description: 'Liderando el desarrollo de aplicaciones web modernas.' },
            { year: '2023 - 2025', role: 'Desarrollador Web', company: 'Empresa Anterior', description: 'Desarrollo de sitios web y aplicaciones interactivas.' },
            { year: '2022 - 2023', role: 'Desarrollador Junior', company: 'Primera Empresa', description: 'Inicio en el mundo del desarrollo web profesional.' },
          ].map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative pl-8 border-l-2 border-accent hover:border-l-[3px] transition-all"
            >
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-accent ring-4 ring-accent/20" />
              <div className="flex items-center gap-2 text-base text-accent mb-1">
                <Calendar size={14} />
                <span>{exp.year}</span>
              </div>
              <h3 className="text-xl font-semibold text-text">{exp.role}</h3>
              <p className="text-text-secondary text-base font-medium">{exp.company}</p>
              <p className="text-text-muted text-base mt-1">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="education" title="Educación">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative pl-8 border-l-2 border-accent hover:border-l-[3px] transition-all">
            <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-accent ring-4 ring-accent/20" />
            <div className="flex items-center gap-2 text-base text-accent mb-1">
              <GraduationCap size={14} />
              <span>2018 - 2022</span>
            </div>
            <h3 className="text-xl font-semibold text-text">Ingeniería en Sistemas</h3>
            <p className="text-text-secondary text-base">Universidad Ejemplo</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="technical-skills" title="Habilidades Técnicas">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {[
              'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js',
              'Express', 'PostgreSQL', 'MongoDB', 'Git', 'Docker',
              'Figma', 'Next.js', 'GraphQL', 'REST APIs',
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 bg-accent-soft text-accent rounded-full text-base font-medium border border-accent/20 hover:bg-accent hover:text-white transition-all hover:shadow-lg hover:shadow-accent/20 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
