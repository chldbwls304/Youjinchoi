export interface News {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  image?: string
  category: string
  tags: string[]
}

export const news: News[] = [
  {
    id: 'news-1',
    title: 'Postdoctoral Researcher at GIST InnoCORE',
    excerpt: 'Starting new position as Postdoctoral Researcher at Gwangju Institute of Science and Technology, focusing on inclusive AI and multimodal interaction design.',
    content: 'Excited to announce my new role as Postdoctoral Researcher at GIST\'s AI Convergence department, supported by the InnoCORE Postdoc Fellowship. This position marks the beginning of my next chapter in researching inclusive AI systems that serve marginalized communities. I will be focusing on designing and evaluating human-centered, multimodal generative systems that improve accessibility for people with sensory impairments and neurodivergent users.',
    date: '2025-09-01',
    category: 'Announcement',
    tags: ['GIST', 'Postdoc', 'Inclusive AI', 'New Position'],
    image: '/news/gist-postdoc.jpg',
  },
  {
    id: 'news-2',
    title: 'Multiple CHI 2026 Papers Conditionally Accepted',
    excerpt: 'Three groundbreaking papers on generative AI for music therapy and emotional support accepted to CHI 2026, the premier conference in HCI.',
    content: 'I\'m thrilled to share that three of my research papers have been conditionally accepted to CHI 2026, the world\'s premier conference on Human Factors in Computing Systems. These papers showcase innovative work on generative AI applications for Deaf and Hard-of-Hearing individuals:\n\n1. "Designing a Generative AI-Assisted Music Psychotherapy Tool for Deaf and Hard-of-Hearing Individuals"\n2. "From Daily Song to Daily Self: Supporting Emotional Growth of Deaf and Hard-of-Hearing Individuals through Generative AI Songwriting"\n3. "PREFAB: PREFerence-based Affective Modeling for Low-Budget Self-Annotation"\n\nThese works represent collaborative efforts with outstanding researchers and reflect my commitment to making cutting-edge AI accessible and beneficial for underrepresented communities.',
    date: '2025-08-15',
    category: 'Research',
    tags: ['CHI 2026', 'Generative AI', 'Music', 'Deaf/Hard-of-Hearing'],
    image: '/news/chi2026.jpg',
  },
  {
    id: 'news-3',
    title: 'Outstanding Research Award 2025',
    excerpt: 'Honored to receive the Outstanding Research Award from the President of Gwangju Institute of Science and Technology.',
    content: 'I am deeply honored to receive the 2025 Outstanding Research Award from the President of GIST. This recognition reflects the dedication of our entire research team and the collaborative spirit that drives our work in inclusive AI design. The award acknowledges our contributions to advancing human-centered approaches to AI systems that genuinely serve the needs of people with disabilities and other marginalized communities. This achievement motivates me to continue pushing the boundaries of what\'s possible in accessible technology.',
    date: '2025-07-20',
    category: 'Award',
    tags: ['Award', 'Recognition', 'GIST', 'Research'],
    image: '/news/award-2025.jpg',
  },
  {
    id: 'news-4',
    title: 'Visiting Internship at Georgia Tech',
    excerpt: 'Completed visiting internship at Georgia Institute of Technology under Prof. Jennifer G Kim, collaborating on inclusive AI research.',
    content: 'Recently completed an enriching visiting internship at the College of Computing at Georgia Institute of Technology (October 2024 - January 2025) under the mentorship of Prof. Jennifer G Kim. During this period, I collaborated on cutting-edge research in inclusive AI and human-computer interaction, strengthening international research partnerships and gaining exposure to diverse perspectives in HCI research. The experience has been invaluable in expanding my research network and exploring new directions in my work.',
    date: '2025-02-15',
    category: 'Experience',
    tags: ['Georgia Tech', 'Internship', 'HCI', 'Collaboration'],
    image: '/news/gatech-internship.jpg',
  },
  {
    id: 'news-5',
    title: 'CSCW 2025 Paper on Equitable Music Activities',
    excerpt: 'Research on guaranteeing equitable musical activities in mixed-hearing groups accepted to CSCW 2025.',
    content: 'Delighted to share that our collaborative work on "Guaranteeing Equitable Musical Activities: Lessons Learned from Collaborative Music-Making in Mixed-Hearing Groups" has been accepted to CSCW 2025 (ACM SIGCHI Conference on Computer-Supported Cooperative Work & Social Computing). This research explores how technology can facilitate inclusive music-making experiences where deaf/hard-of-hearing and hearing participants can collaborate equally. The work challenges traditional barriers in collaborative music and proposes technological and social solutions for true equity.',
    date: '2025-05-01',
    category: 'Research',
    tags: ['CSCW 2025', 'Music', 'Collaboration', 'Accessibility'],
    image: '/news/cscw2025.jpg',
  },
  {
    id: 'news-6',
    title: 'Best Paper Award - HCI Korea 2024',
    excerpt: 'Received Best Paper Award at the Human Computer Interaction Korea conference for work on music accessibility.',
    content: 'I am proud to announce that our research received the Best Paper Award at the 2024 Human Computer Interaction Korea conference. This recognition celebrates our work on designing interactive systems that enable deaf and hard-of-hearing individuals to experience and create music in new ways. The award reflects the importance of participatory design and community-centered approaches in developing truly inclusive technologies.',
    date: '2024-12-10',
    category: 'Award',
    tags: ['HCI Korea', 'Best Paper', 'Music', 'Design'],
    image: '/news/hci-korea-award.jpg',
  },
]
