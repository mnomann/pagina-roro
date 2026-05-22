import { motion } from 'framer-motion'
import {
  Building2, Users, Smartphone,
  Bot, Monitor, Radio,
  Code, Workflow, ClipboardCheck,
  ArrowRight, ChevronDown
} from 'lucide-react'
import type { GovTechModule, SuccessCase, Capability } from '../types'

const govTechModules: GovTechModule[] = [
  {
    id: 'municipio',
    title: 'Módulo Municipio / DIDECO',
    description: '',
    icon: 'Building2',
    features: [
      'Tableros analíticos en tiempo real para la toma de decisiones',
      'Control de vigencias y centralización de datos locales',
      'Aceleración de procesos administrativos municipales',
    ],
  },
  {
    id: 'juntas',
    title: 'Módulo Juntas de Vecinos',
    description: '',
    icon: 'Users',
    features: [
      'Automatización de actas bajo la Ley N° 19.418',
      'Eliminación de la burocracia del papel',
      'Aceleración de solicitudes vecinales',
    ],
  },
  {
    id: 'vecinal',
    title: 'Módulo Vecinal',
    description: '',
    icon: 'Smartphone',
    features: [
      'Canal digital móvil directo de información',
      'Transparencia para cada sector',
      'Comunicación inmediata con delegados municipales',
    ],
  },
]

const successCases: SuccessCase[] = [
  {
    id: 'pjud',
    title: 'Automatización de Procesos Legales',
    subtitle: '(Extracción PJUD)',
    client: '',
    description:
      'Desarrollo de un bot inteligente basado en Python para el monitoreo, lectura automatizada y alertas de causas en el Poder Judicial de Chile, optimizando radicalmente los tiempos de respuesta de firmas legales.',
    icon: 'Bot',
    technologies: ['Python', 'Web Scraping', 'Automatización', 'Alertas'],
  },
  {
    id: 'iworld',
    title: 'Infraestructura Digital y Consultoría',
    subtitle: '(iWorld)',
    client: '',
    description:
      'Implementación de arquitectura tecnológica integral y flujos de marketing digital avanzado para iWorld, servicio técnico especializado Apple y venta de accesorios líder en la zona.',
    icon: 'Monitor',
    technologies: ['Arquitectura TI', 'Marketing Digital', 'E-commerce'],
  },
  {
    id: 'gps',
    title: 'Plataformas Corporativas de Telemetría',
    subtitle: '(Seguimiento GPS)',
    client: '',
    description:
      'Estructuración y desarrollo de plataformas web empresariales para el control y gestión de datos logísticos basados en hardware GPS.',
    icon: 'Radio',
    technologies: ['Desarrollo Web', 'GPS Tracking', 'Data Analytics', 'API REST'],
  },
]

const capabilities: Capability[] = [
  {
    id: 'software',
    title: 'Desarrollo de Software',
    description:
      'Construcción de aplicaciones web y sistemas a la medida con tecnologías modernas y escalables.',
    icon: 'Code',
    technologies: ['Python', 'React', 'TypeScript', 'Bases de datos SQL/NoSQL'],
  },
  {
    id: 'automatizacion',
    title: 'Automatización de Flujos',
    description:
      'Integración y automatización de procesos críticos de negocio mediante plataformas low-code y APIs.',
    icon: 'Workflow',
    technologies: ['Salesforce', 'Make', 'Zapier', 'API REST'],
  },
  {
    id: 'consultoria',
    title: 'Consultoría de Procesos',
    description:
      'Diagnóstico, rediseño y optimización de procesos críticos para la transformación digital de su organización.',
    icon: 'ClipboardCheck',
    technologies: ['Auditoría TI', 'Transformación Digital', 'Metodologías Ágiles'],
  },
]

const govTechIconMap: Record<string, typeof Building2> = {
  Building2,
  Users,
  Smartphone,
}

const successIconMap: Record<string, typeof Bot> = {
  Bot,
  Monitor,
  Radio,
}

const capabilityIconMap: Record<string, typeof Code> = {
  Code,
  Workflow,
  ClipboardCheck,
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <>
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="min-h-[calc(100vh-4rem)] bg-white flex items-center justify-center px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight max-w-4xl"
          >
            Transformación Digital y Soluciones Inteligentes para Empresas y Gobiernos Locales.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mt-6"
          >
            Optimizamos procesos complejos, automatizamos flujos de datos y construimos software a la medida para conectar organizaciones de manera eficiente.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10"
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white rounded-lg shadow-lg shadow-sky-600/25 font-medium text-lg hover:bg-sky-700 hover:scale-105 transition-all duration-300"
            >
              Contacto Institucional
              <ArrowRight size={20} />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16"
          >
            <ChevronDown size={28} className="mx-auto text-slate-400 animate-bounce" />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="govtech"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="bg-slate-50 py-20 md:py-24 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
            Modernización de la Gestión Comunitaria
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mt-4">
            Sistema trilateral de gestión municipal automatizada
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {govTechModules.map((module) => {
              const Icon = govTechIconMap[module.icon] ?? Building2
              return (
                <motion.div
                  key={module.id}
                  variants={fadeInUp}
                  className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                    <Icon size={28} className="text-sky-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mt-6">
                    {module.title}
                  </h3>
                  <ul className="mt-4">
                    {module.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`py-2 text-slate-600 ${idx < module.features.length - 1 ? 'border-b border-slate-100' : ''}`}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="casos"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="bg-white py-20 md:py-24 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
            Ingeniería Desplegada
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mt-4">
            Proyectos que demuestran nuestra capacidad técnica
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {successCases.map((caso) => {
              const Icon = successIconMap[caso.icon] ?? Bot
              return (
                <motion.div
                  key={caso.id}
                  variants={fadeInUp}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
                      <Icon size={24} className="text-sky-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mt-4">
                      {caso.title}
                    </h3>
                    <p className="text-sm text-sky-600 font-medium mt-1">
                      {caso.subtitle}
                    </p>
                    <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                      {caso.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {caso.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="capacidades"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="bg-slate-50 py-20 md:py-24 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
            Capacidades Técnicas
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mt-4">
            Tecnologías y metodologías que potencian su organización
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {capabilities.map((cap) => {
              const Icon = capabilityIconMap[cap.icon] ?? Code
              return (
                <motion.div
                  key={cap.id}
                  variants={fadeInUp}
                  className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center mb-5">
                    <Icon size={32} className="text-sky-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {cap.title}
                  </h3>
                  <p className="text-slate-600 mt-3">
                    {cap.description}
                  </p>
                  <p className="text-sm text-slate-500 mt-4">
                    {cap.technologies.join(' · ')}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
