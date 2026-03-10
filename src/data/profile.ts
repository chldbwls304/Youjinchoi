export interface SocialLink {
  name: string
  icon: string
  url: string
}

export interface Education {
  school: string
  degree: string
  field: string
  startYear: number
  endYear: number | null
}

export const profile = {
  name: 'Youjin Choi',
  title: 'Ph.D. Researcher',
  bio: 'I am an inclusive AI researcher working at the intersection of art, technology, and human-computer interaction (HCI). I design, build, and evaluate human-centered, multimodal generative systems that improve usability and accessibility, particularly for marginalized communities, including people with sensory impairments and neurodivergent users.',
  profileImage: '/profile.jpg',
  keywords: ['Inclusive AI Design', 'Human-AI Interaction', 'Multimodal Interaction', 'Accessibility', 'Digital Art'],
  affiliation: 'Gwangju Institute of Science and Technology (GIST)',
  advisor: 'Prof. Jin-Hyuk Hong',
}

export const education: Education[] = [
  {
    school: 'Gwangju Institute of Science and Technology (GIST)',
    degree: 'Ph.D.',
    field: 'AI Convergence',
    startYear: 2019,
    endYear: 2025,
  },
  {
    school: 'Seoul Institute of the Arts',
    degree: 'B.S.',
    field: 'Digital Art',
    startYear: 2013,
    endYear: 2018,
  },
]

export const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    icon: 'email',
    url: 'mailto:cyouijn@gmail.com',
  },
  {
    name: 'Google Scholar',
    icon: 'google',
    url: 'https://scholar.google.com/citations?user=youjinchoi',
  },
]
