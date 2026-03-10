export interface Project {
  id: string
  title: string
  description: string
  period: string
  tags: string[]
  image?: string
  githubUrl?: string
  demoUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Physical AI in Action: XR-Enhanced Robotics for Inclusive Interaction',
    description: 'Research on interpretable and immersive human-robot interaction using extended reality (XR) technologies.',
    period: '08/2025 - Present',
    tags: ['Robotics', 'XR', 'Inclusive AI', 'HCI', 'Physical Computing'],
    featured: true,
  },
  {
    id: 'project-2',
    title: 'LLM-based Sound Visualization Technology for Deaf and Hard-of-Hearing',
    description: 'Development of context-aware non-speech sound visualization system to improve sound accessibility.',
    period: '03/2025 - Present',
    tags: ['LLM', 'Sound Processing', 'Accessibility', 'AI', 'Interaction Design'],
    featured: true,
  },
  {
    id: 'project-3',
    title: 'AI-based Metaverse Education System',
    description: 'Convergence culture virtual studio leveraging generative AI for immersive educational experiences.',
    period: '09/2025 - Present',
    tags: ['Metaverse', 'Generative AI', 'Education', 'Virtual Reality', 'Content Creation'],
    featured: true,
  },
  {
    id: 'project-4',
    title: 'Music Sensory Substitution System for Deaf Community',
    description: 'Technology to visualize and sonify music for hearing-impaired individuals to enjoy and create music. Winner of Korea Creative Content Award.',
    period: '09/2021 - 12/2023',
    tags: ['Multimodal Interaction', 'Music Technology', 'Accessibility', 'Generative AI', 'User Study'],
    featured: true,
  },
  {
    id: 'project-5',
    title: 'User State Modeling for Multimedia Content',
    description: 'Framework for comparative analysis and modeling of users\' internal states (emotion, engagement, immersion) across multimedia.',
    period: '09/2023 - 08/2025',
    tags: ['User Modeling', 'Affective Computing', 'Eye-tracking', 'Data Analysis', 'ML'],
    featured: true,
  },
  {
    id: 'project-6',
    title: 'Game AI with Dynamic Difficulty Adjustment',
    description: 'Human-centered game AI research laboratory developing adaptive AI that models player states and preferences.',
    period: '06/2021 - 12/2023',
    tags: ['Game AI', 'Player Modeling', 'Monte-Carlo Tree Search', 'Python', 'Game Design'],
    featured: false,
  },
  {
    id: 'project-7',
    title: 'Gesture-based Assistive Learning Tool for Children with Disabilities',
    description: 'Developed intelligent authoring tool and content creation technologies for enhancing accessibility in social communication.',
    period: '01/2019 - 12/2020',
    tags: ['Gesture Recognition', 'Assistive Technology', 'Child-Computer Interaction', 'Accessibility', 'Learning'],
    featured: false,
  },
]

export const getFeaturedProjects = () => projects.filter(p => p.featured)
