export interface NavLink {
  label: string
  href: string
}

export interface GovTechModule {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

export interface SuccessCase {
  id: string
  title: string
  subtitle: string
  client: string
  description: string
  technologies: string[]
  icon: string
}

export interface Capability {
  id: string
  title: string
  description: string
  technologies: string[]
  icon: string
}

export interface ContactFormData {
  name: string
  email: string
  entity: string
  message: string
}
