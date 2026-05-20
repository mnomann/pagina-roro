import { motion } from 'framer-motion'
import { Mail, MapPin, ExternalLink } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      title="Contacto"
      subtitle="Estoy abierto a nuevas oportunidades. No dudes en escribirme."
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda: CTA principal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface-elevated rounded-xl border border-border p-8 md:p-10 text-center hover:border-accent/20 transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 ring-4 ring-accent/5">
              <Mail size={32} className="text-accent" />
            </div>
            <h3 className="text-2xl font-semibold text-text mb-3">
              Envíame un correo
            </h3>
            <p className="text-text-secondary text-lg mb-2">
              Escríbeme directamente a mi bandeja de entrada.
            </p>
            <p className="text-text-muted text-base mb-8">
              Te responderé lo antes posible.
            </p>

            <a
              href="https://mail.google.com/mail/u/0/?to=hestor.chavez@gmail.com&tf=cm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-xl text-lg font-medium hover:bg-[var(--color-accent-hover)] transition-all hover:translate-y-[-2px] shadow-lg shadow-accent/20"
            >
              <Mail size={22} />
              Enviar Correo
              <ExternalLink size={18} />
            </a>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-text-muted text-sm">ó escribe directamente a:</p>
              <a
                href="https://mail.google.com/mail/u/0/?to=hestor.chavez@gmail.com&tf=cm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-base font-medium hover:underline mt-1 inline-block"
              >
                hestor.chavez@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Columna derecha: Informacion de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-surface-elevated rounded-xl border border-border p-6 hover:border-accent/20 transition-all">
              <h3 className="text-xl font-semibold text-text mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail size={24} className="text-accent mt-0.5" />
                  <div>
                    <p className="text-base font-medium text-text">Email</p>
                    <a
                      href="https://mail.google.com/mail/u/0/?to=hestor.chavez@gmail.com&tf=cm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-text-secondary hover:text-accent transition-colors"
                    >
                      hestor.chavez@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={24} className="text-accent mt-0.5" />
                  <div>
                    <p className="text-base font-medium text-text">Ubicación</p>
                    <p className="text-base text-text-secondary">Disponible para trabajo remoto</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
