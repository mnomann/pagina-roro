export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image?: string
  demoUrl?: string
  repoUrl?: string
}

export interface Skill {
  name: string
  icon: string
  level: number
  category: 'frontend' | 'backend' | 'devops' | 'tools'
}

export interface NavLink {
  label: string
  path: string
}
