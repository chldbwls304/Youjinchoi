export interface Publication {
  id: string
  title: string
  authors: string[]
  conference: string
  year: number
  pdfUrl?: string
  doiUrl?: string
  abstract?: string
}

export const publications: Publication[] = [
  {
    id: 'pub-1',
    title: 'A Closed-Loop CPR Training Glove with Integrated Tactile Sensing and Haptic Feedback',
    authors: ['JaeYoung Moon', 'Mingzhuo Ma', 'Qifeng Yang', 'Seokhyun Hwang', 'Youjin Choi', 'Kyung-Joong Kim', 'Samuel Burden', 'Yiyue Luo'],
    conference: 'ICRA\'26: IEEE International Conference on Robotics & Automation',
    year: 2026,
    abstract: 'Conditionally accepted. Advanced haptic feedback system for medical training applications.',
  },
  {
    id: 'pub-2',
    title: 'Designing a Generative AI-Assisted Music Psychotherapy Tool for Deaf and Hard-of-Hearing Individuals',
    authors: ['Youjin Choi', 'JinYoung Yoo', 'JaeYoung Moon', 'Jennifer G Kim', 'Jin-Hyuk Hong'],
    conference: 'CHI \'26: Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems',
    year: 2026,
    abstract: 'Conditionally accepted. Novel application of generative AI for music therapy tailored to DHH individuals.',
  },
  {
    id: 'pub-3',
    title: 'From Daily Song to Daily Self: Supporting Emotional Growth of Deaf and Hard-of-Hearing Individuals through Generative AI Songwriting',
    authors: ['Youjin Choi', 'JinYoung Yoo', 'JaeYoung Moon', 'YoonJae Kim', 'Eun Young Lee', 'Jennifer G Kim', 'Jin-Hyuk Hong'],
    conference: 'CHI \'26: Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems',
    year: 2026,
    abstract: 'Conditionally accepted. Generative AI songwriting system supporting emotional expression and growth.',
  },
  {
    id: 'pub-4',
    title: 'Guaranteeing Equitable Musical Activities: Lessons Learned from Collaborative Music-Making in Mixed-Hearing Groups',
    authors: ['ChungHa Lee', 'Youjin Choi', 'Songmin Chung', 'Eunhye Cho', 'Jin-Hyuk Hong'],
    conference: 'CSCW\'25: ACM SIGCHI Conference on Computer-Supported Cooperative Work & Social Computing',
    year: 2025,
    doiUrl: 'https://dl.acm.org/doi/10.1145/3711113',
    abstract: 'Examining collaborative music-making experiences in mixed-hearing groups.',
  },
  {
    id: 'pub-5',
    title: 'Exploring the Potential of Music Generative AI for Music-Making by Deaf and Hard-of-Hearing People',
    authors: ['Youjin Choi', 'JaeYoung Moon', 'JinYoung Yoo', 'Jin-Hyuk Hong'],
    conference: 'CHI \'25: Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems',
    year: 2025,
    doiUrl: 'https://dl.acm.org/doi/10.1145/3706598.3714298',
    abstract: 'Comprehensive study of generative AI potentials for music creation by DHH individuals.',
  },
  {
    id: 'pub-6',
    title: 'Understanding the Potentials and Limitations of Prompt-based Music Generative AI',
    authors: ['Youjin Choi', 'JaeYoung Moon', 'JinYoung Yoo', 'Jin-Hyuk Hong'],
    conference: 'CHI \'25: Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems',
    year: 2025,
    doiUrl: 'https://dl.acm.org/doi/10.1145/3706598.3713762',
    abstract: 'Critical analysis of prompt-based approaches in music generation systems.',
  },
  {
    id: 'pub-7',
    title: 'A Way for Deaf and Hard-of-Hearing People to Enjoy Music by Exploring and Customizing Cross-modal Music Concepts',
    authors: ['Youjin Choi', 'Junryeol Jeon', 'ChungHa Lee', 'Yeo-Gyeong Noh', 'Jin-Hyuk Hong'],
    conference: 'CHI \'24: Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems',
    year: 2024,
    doiUrl: 'https://dl.acm.org/doi/10.1145/3613904.3642665',
    abstract: 'Cross-modal interaction system enabling DHH individuals to experience and customize music.',
  },
  {
    id: 'pub-8',
    title: 'We Play and Learn Rhythmically: Gesture-based Rhythm Game for Children with Intellectual Developmental Disabilities to Learn Manual Sign',
    authors: ['Youjin Choi', 'JooYeong Kim', 'ChanWoo Park', 'JeongYoun Kim', 'Ji Hyun Yi', 'Jin-Hyuk Hong'],
    conference: 'CHI \'22: Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems',
    year: 2022,
    doiUrl: 'https://dl.acm.org/doi/10.1145/3491102.3517456',
    abstract: 'Gesture-based interactive game for sign language learning with children with intellectual disabilities.',
  },
  {
    id: 'pub-9',
    title: 'Immersion Measurement in Watching Videos Using Eye-tracking Data',
    authors: ['Youjin Choi', 'JooYeong Kim', 'Jin-Hyuk Hong'],
    conference: 'IEEE Transaction on Affective Computing',
    year: 2022,
    doiUrl: 'https://ieeexplore.ieee.org/abstract/document/9904895',
    abstract: 'Novel approach to measure user immersion using eye-tracking data in video viewing.',
  },
  {
    id: 'pub-10',
    title: 'Enhancing Collaborative Signing Songwriting Experience of the d/Deaf Individuals',
    authors: ['Youjin Choi', 'ChungHa Lee', 'Songmin Chung', 'Eunhye Cho', 'Suhyeon Yoo', 'Jin-Hyuk Hong'],
    conference: 'International Journal of Human-Computer Studies',
    year: 2025,
    doiUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S1071581924001654',
    abstract: 'Framework for collaborative songwriting experiences tailored to Deaf/Hard-of-hearing individuals.',
  },
]
