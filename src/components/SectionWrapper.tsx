import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionWrapperProps {
  id: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export default function SectionWrapper({ id, title, subtitle, children, className = '' }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`py-16 md:py-24 ${className}`}
    >
      {title && (
        <div className="mb-12 text-center">
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-3">{title}</h2>
          {subtitle && (
            <p className="text-text-secondary text-xl max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </motion.section>
  )
}
