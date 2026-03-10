export type MediaType = 'image' | 'video'

export interface Artwork {
  id: string
  title: string
  description: string
  longDescription?: string
  year: number
  thumbnail: string
  media: {
    type: MediaType
    url: string
  }
  tools: string[]
}

export const artworks: Artwork[] = [
  {
    id: 'art-1',
    title: 'Beyond The Reality: Shall we dance? & AI-GO-Rhythm',
    description: 'Interactive AI art installation with projection mapping',
    longDescription: 'Interactive AI art exploration combining projection mapping and generative visual systems. Features dynamic, rhythm-responsive visual experiences.',
    year: 2023,
    thumbnail: '/artwork/ai-rhythm-thumb.jpg',
    media: {
      type: 'image',
      url: '/artwork/ai-go-rhythm.jpg',
    },
    tools: ['Projection Mapping', 'Generative AI', 'Processing', 'Interactive Design'],
  },
  {
    id: 'art-2',
    title: 'AI-GO-Rhythm',
    description: 'Interactive AI art with projection mapping',
    longDescription: 'Rhythm-responsive interactive art piece combining AI-generated visuals with motion sensing and projection mapping technology.',
    year: 2022,
    thumbnail: '/artwork/ai-go-rhythm-2-thumb.jpg',
    media: {
      type: 'image',
      url: '/artwork/ai-go-rhythm-2.jpg',
    },
    tools: ['Projection Mapping', 'Motion Sensing', 'Generative AI', 'Python'],
  },
  {
    id: 'art-3',
    title: 'This is to inform you that it may be limited to ( ) if you do not wear a mask',
    description: 'Interactive AI art at Seoul Arts Center and Gwangju Design Biennale',
    longDescription: 'Social commentary interactive art installation exploring themes of identity and control through projection mapping and interactive elements.',
    year: 2021,
    thumbnail: '/artwork/mask-installation-thumb.jpg',
    media: {
      type: 'image',
      url: '/artwork/mask-installation.jpg',
    },
    tools: ['Projection Mapping', 'Interactive Installation', 'Motion Tracking'],
  },
  {
    id: 'art-4',
    title: 'The Acting of GOD',
    description: 'Interactive performance with projection mapping',
    longDescription: 'Large-scale interactive performance piece featuring live performers with synchronized projection mapping and generative visuals.',
    year: 2017,
    thumbnail: '/artwork/acting-of-god-thumb.jpg',
    media: {
      type: 'image',
      url: '/artwork/acting-of-god.jpg',
    },
    tools: ['Projection Mapping', 'Live Performance', 'Interactive Design', 'Processing'],
  },
  {
    id: 'art-5',
    title: 'Industry',
    description: 'Robotic performance with live elements',
    longDescription: 'Experimental robotic performance exploring the intersection of human and mechanical movement, automation, and industrial aesthetics.',
    year: 2017,
    thumbnail: '/artwork/industry-thumb.jpg',
    media: {
      type: 'image',
      url: '/artwork/industry.jpg',
    },
    tools: ['Robotics', 'Arduino', 'Motion Control', 'Live Performance'],
  },
  {
    id: 'art-6',
    title: 'Rubber Lover',
    description: 'Interactive performance by Team Going',
    longDescription: 'Collaborative interactive performance piece exploring material interaction and sensory experience.',
    year: 2017,
    thumbnail: '/artwork/rubber-lover-thumb.jpg',
    media: {
      type: 'image',
      url: '/artwork/rubber-lover.jpg',
    },
    tools: ['Interactive Performance', 'Physical Computing', 'Collaborative Art'],
  },
  {
    id: 'art-7',
    title: '망;서리다 (Sadness are fogged up)',
    description: 'Interactive installation art with projection mapping',
    longDescription: 'Poetic interactive installation exploring emotions and atmospheric effects through digital media and projection technology.',
    year: 2016,
    thumbnail: '/artwork/sadness-thumb.jpg',
    media: {
      type: 'image',
      url: '/artwork/sadness.jpg',
    },
    tools: ['Projection Mapping', 'Interactive Installation', 'Digital Media', 'Processing'],
  },
  {
    id: 'art-8',
    title: 'Escapathy',
    description: 'Interactive performance and live installation',
    longDescription: 'Immersive interactive performance experience combining live performance with responsive digital systems and projection.',
    year: 2015,
    thumbnail: '/artwork/escapathy-thumb.jpg',
    media: {
      type: 'image',
      url: '/artwork/escapathy.jpg',
    },
    tools: ['Live Performance', 'Interactive Installation', 'Projection Mapping', 'Generative Systems'],
  },
]
