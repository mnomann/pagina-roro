import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import type { ContactFormData } from '../types'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    entity: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', entity: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <footer className="bg-slate-50 border-t border-slate-200" id="contacto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">
              Contacto Institucional
            </h2>
            <p className="text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
              Complete el formulario y nos pondremos en contacto con usted para
              agendar una reunión.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto space-y-5"
            noValidate
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre completo"
                required
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="correo@entidad.cl"
                required
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all"
              />
            </div>

            <div>
              <input
                type="text"
                name="entity"
                value={formData.entity}
                onChange={handleChange}
                placeholder="Nombre de la entidad o municipio"
                required
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describa brevemente su requerimiento..."
                required
                rows={4}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all resize-vertical"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg shadow-md cursor-pointer transition-colors"
              >
                <Send className="w-4 h-4" />
                Enviar Mensaje
              </button>
            </div>
          </form>

          {submitted && (
            <div className="max-w-2xl mx-auto mt-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
              <p className="text-green-600 text-sm">
                Mensaje enviado correctamente. Nos pondremos en contacto pronto.
              </p>
            </div>
          )}
        </motion.section>

        <div className="mt-16 pt-8 border-t border-slate-200 text-center space-y-2">
          <p className="text-sm text-slate-500">
            Nexxuv es una marca comercial operada por Millahual Servicios
            Integrales SpA. Temuco, Región de la Araucanía, Chile.
          </p>
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Millahual Servicios Integrales SpA. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
