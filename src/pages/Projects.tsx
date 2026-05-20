import { FolderOpen } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Proyectos">
      <div className="max-w-lg mx-auto px-4">
        <div className="bg-surface-elevated rounded-xl border border-border p-12 text-center hover:border-accent/20 transition-all">
          <FolderOpen size={48} className="mx-auto text-text-muted mb-4" />
          <p className="text-text-secondary text-lg">No hay proyectos publicados aún. Vuelve pronto.</p>
        </div>
      </div>
    </SectionWrapper>
  )
}
