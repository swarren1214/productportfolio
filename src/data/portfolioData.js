export const portfolioData = {
  personal: {
    name: 'Stephen Warren',
    role: 'Visionary Product Manager',
    email: 'swarren@mail.com',
    location: 'Santaquin, UT',
    phone: '801.857.8641',
    linkedin: 'https://linkedin.com/in/stephenwarren'
  },

  hero: {
    name: 'Stephen Warren',
    role: 'Visionary Product Manager',
    tagline: 'Visionary product manager with demonstrated history of elevating user interfaces and delivering world-class experiences through data-driven analysis and strategic design.',
    cta: [
      { text: 'View My Work', href: '#projects' },
      { text: 'Contact Me', href: '#contact', variant: 'outline' }
    ]
  },

  about: {
    title: 'About Me',
    bio: [
      'Product Management is a field where my passion for innovation, user-centered design, and strategic thinking converges. From an early age, I cultivated an entrepreneurial spirit, starting a side business building and repairing computers. Over time, this foundation evolved into a career focused on solving complex problems and delivering impactful solutions that balance business goals and user needs.',
      'In recent years, I have honed my skills as a Product Manager, leading cross-functional teams to develop and launch innovative solutions. At Aptive Environmental, I spearheaded the creation of an in-house vehicle routing software that improved operational efficiency, increasing average appointments per gallon from 1.5 to 2.0. I also designed and launched an intuitive user interface for operations leaders to track routes, schedule appointments, and manage employee shifts, resulting in $2M in annual cost savings.',
      'My background in UX/UI design further complements my Product Management expertise. Running a freelance design business allowed me to work closely with clients to identify core user pain points, create seamless workflows, and validate solutions through usability testing. This focus on user-centric design continues to influence my approach to product development, ensuring that every decision is grounded in empathy and data.'
    ],
    image: '/headshot.png',
    highlights: [
      { icon: 'Users', text: 'User Research' },
      { icon: 'Code', text: 'Data Analysis' },
      { icon: 'Lightbulb', text: 'Product Design' },
      { icon: 'Award', text: 'UX Strategy' }
    ]
  },

  skills: {
    'Product Management': [
      { name: 'User Research', icon: 'FaUsers', description: "I've led user research for internal enterprise tools used by thousands of field employees — combining interviews, observational ride-alongs, and data analysis to uncover friction points and turn them into actionable design requirements." },
      { name: 'Data Analysis', icon: 'FaChartLine', description: "Data is my compass. Whether I'm using SQL to pull insights from millions of appointment records or visualizing performance trends in a dashboard, I rely on data to guide product decisions, not just validate them." },
      { name: 'Product Design', icon: 'FaPencilRuler', description: "I bridge the gap between business strategy and user needs — shaping products from initial concept to polished experience. I've designed everything from route optimization workflows to licensing management systems." },
      { name: 'UX Strategy', icon: 'FaLightbulb', description: "I'm passionate about designing experiences that align user goals with business outcomes. My UX strategies always start with 'why,' ensuring every screen or flow has a measurable purpose." },
      { name: 'Software Strategy', icon: 'FaRocket', description: "From MVP scope to system architecture discussions, I help define what we build, why we build it, and how it scales. I've helped architect multi-tenant, microservice-based platforms from the ground up." },
      { name: 'Deployment Strategy', icon: 'FaCloudUploadAlt', description: "I've planned and executed product rollouts across hundreds of operational teams, ensuring smooth adoption through change management, training, and phased deployments." }
    ],
    'Design & Research': [
      { name: 'UX/UI Design', icon: 'FaFigma', description: "I believe great design is invisible — intuitive enough that users don't have to think. I've designed enterprise UIs that simplify complex data while staying clean and user-friendly." },
      { name: 'Figma', icon: 'FaFigma', description: "Figma is my design home base. I use it for prototyping, collaborating with engineers, and documenting design systems that make consistency effortless." },
      { name: 'Sketch', icon: 'FaPaintBrush', description: "Before Figma ruled the world, I was prototyping in Sketch. It taught me the fundamentals of visual hierarchy and the discipline of clean, reusable components." },
      { name: 'User Testing', icon: 'FaUserCheck', description: "Testing is where assumptions meet reality. I've facilitated everything from quick hallway tests to structured usability sessions to ensure our products work the way users expect." },
      { name: 'Wireframing', icon: 'FaDrawPolygon', description: "Wireframes are my thinking canvas. They help me rapidly iterate ideas and test logic flows before getting bogged down in visuals." },
      { name: 'Prototyping', icon: 'FaCube', description: "I love making ideas come to life — from interactive prototypes that mimic real user flows to clickable demos that help stakeholders feel the product before it's built." }
    ],
    'Leadership & Strategy': [
      { name: 'Business Analysis', icon: 'FaBriefcase', description: "I'm fluent in translating business needs into technical requirements — and vice versa. I find clarity in the chaos of competing priorities and align teams around measurable outcomes." },
      { name: 'Leadership', icon: 'FaUserTie', description: "I lead with empathy and clarity. Whether guiding engineers through a sprint or presenting strategy to executives, I aim to inspire confidence and collaboration." },
      { name: 'Communication', icon: 'FaComments', description: "Good ideas die in bad communication. I prioritize storytelling and transparency, tailoring messages to stakeholders — from devs to directors — so everyone stays aligned." },
      { name: 'Agile/Scrum', icon: 'FaTasks', description: "Agile isn't just a process; it's a mindset. I've led backlog grooming, sprint planning, and retros that keep teams shipping meaningful work without losing sight of the big picture." },
      { name: 'Stakeholder Mgmt', icon: 'FaHandshake', description: "I'm the bridge between vision and execution — aligning product, engineering, and operations leaders around shared goals and tradeoffs without letting anyone feel unheard." },
      { name: 'Strategy Planning', icon: 'FaChessKnight', description: "I thrive on long-term thinking. From product roadmaps to org-level efficiency strategies, I enjoy defining where we're headed — and how to measure success when we get there." }
    ]
  },

  projects: [
    {
      id: 1,
      title: 'Product Manager II',
      company: 'Aptive Environmental LLC',
      location: 'Provo, UT',
      period: '06/2023 - Present',
      logo: '/aptive_logo.png',
      achievements: [
        'Led the development of an in-house vehicle routing software, improving average appointments per gallon from 1.5 to 2.0.',
        'Identified a critical gap in the software development lifecycle by advocating for a dedicated UI for the routing and scheduling component.',
        'Designed and launched an intuitive user interface for operations leaders to track routes, schedule appointments, and manage employee shifts, achieving a $2M annual cost savings.',
        'Created custom algorithms to predict appointment durations based on factors like property size, optimizing scheduling efficiency.',
        'Developed a licensing platform to enforce compliance with licensing restrictions for sales and service representatives.',
        'Built analytics dashboards to monitor routing software performance and identify trends impacting key performance indicators.',
        'Established a backend system for tracking route changes made by the routing engine, enabling quicker resolution of field-reported issues.',
        'Defined requirements for a "Geo Scheduling" platform to automate route building, resulting in an estimated $2.6M in annual savings.'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Legrand North America',
      location: 'Pleasant Grove, UT',
      period: '05/2021 - 06/2023',
      logo: '/legrand_logo.png',
      achievements: [
        'Operated multiple teams of engineers to effectively plan and coordinate team sprints and execute key product deliverables.',
        'Oversaw the implementation of agile methodology to complete team sprints and deliver planned product increments on time.',
        'Drafted, reviewed, and revised necessary project documentation (i.e., PRD, EPS, and MOU) and distributed documents for approvals.',
        'Initiated effort to utilize existing DevOps software features to provide clarity and organization for timelines, increasing overall efficiency.',
        'Suggested and led effort to improve product management communication and feedback loops between departments.',
        'Redesigned product features to enhance usability, increasing user efficiency and output by 10-15%.'
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Product Management Contractor & UX Designer',
      company: 'Warren Design — Santaquin, UT',
      location: 'Santaquin, UT',
      period: '03/2018 - 06/2021',
      logo: '/logo.png', // Using the logo we added earlier
      achievements: [
        'Assessed client projects to determine viability/marketability and validate case for ROI.',
        'Conducted critical user research/interviews in order to gain insight & empathy regarding problems facing customers.',
        'Determined core feature sets and sketched workflow rough drafts for UX enhancements for client software.',
        'Evaluated UX in contrast with new UX to demonstrate usability and design enhancements.',
        'Created prototypes of client products using UX design software to validate design with users and improve user/client satisfaction by 98%.',
        'Generated and transferred style guides, color palettes, and other assets to engineering teams with a 100% success rate.'
      ],
      featured: true
    }
  ],

  contact: {
    title: 'Get In Touch',
    subtitle: 'I look forward to the opportunity to discuss how my experience and skills can contribute to the success of your team and products.',
    email: 'swarren@mail.com',
    socialLinks: [
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/stephenwarren',
        icon: 'FaLinkedin'
      },
      {
        platform: 'Email',
        url: 'mailto:swarren@mail.com',
        icon: 'FaEnvelope'
      },
      {
        platform: 'Phone',
        url: 'tel:8018578641',
        icon: 'FaPhone'
      },
      {
        platform: 'Location',
        url: 'https://maps.google.com/?q=Santaquin,UT',
        icon: 'FaMapMarkerAlt'
      }
    ],
    resumeUrl: '/resume.pdf'
  },

  // Education Section
  education: [
    {
      degree: 'Master of Business Administration, Technology Management Emphasis',
      school: 'Utah Valley University',
      location: 'Orem, UT',
      graduationDate: 'August 2022',
      logo: '/uvu_logo.png',
      description: 'Focused on strategic product management, technology innovation, and business analytics.',
      achievements: []
    },
    {
      degree: 'Bachelor of Science, Business Management',
      school: 'Utah Valley University',
      location: 'Orem, UT',
      graduationDate: 'August 2021',
      logo: '/uvu_logo.png',
      description: 'Foundation in business operations, management principles, and organizational leadership.',
      achievements: []
    }
  ],

  // Portfolio & Case Studies Section
  portfolio: [
    {
      id: 1,
      title: 'Vehicle Routing Optimization System',
      category: 'Product Strategy',
      description: 'Designed and launched an enterprise routing platform that increased field efficiency by 33% and saved $2M annually through intelligent scheduling algorithms and real-time optimization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      metrics: [
        { value: '33%', label: 'Efficiency Gain' },
        { value: '$2M', label: 'Annual Savings' }
      ],
      tags: ['Product Design', 'Data Analysis', 'UX Strategy'],
      caseStudyUrl: null
    },
    {
      id: 2,
      title: 'Geo-Based Scheduling Platform',
      category: 'Platform Development',
      description: 'Built requirements and coordinated development for an automated scheduling system that reduced manual route building time by 80% and projected $2.6M in operational savings.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      metrics: [
        { value: '80%', label: 'Time Saved' },
        { value: '$2.6M', label: 'Projected Savings' }
      ],
      tags: ['Requirements Analysis', 'Automation', 'Compliance'],
      caseStudyUrl: null
    },
    {
      id: 3,
      title: 'Enterprise Feature Redesign',
      category: 'UX Enhancement',
      description: 'Led cross-functional teams to redesign core product features, increasing user efficiency by 10-15% and improving overall product satisfaction scores.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      metrics: [
        { value: '15%', label: 'Efficiency Boost' },
        { value: '3', label: 'Teams Coordinated' }
      ],
      tags: ['Agile', 'Team Leadership', 'DevOps'],
      caseStudyUrl: null
    },
    {
      id: 4,
      title: 'Client UX Prototyping Suite',
      category: 'Design Systems',
      description: 'Created high-fidelity prototypes for multiple client products, achieving 98% user satisfaction through iterative testing and design validation.',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop',
      metrics: [
        { value: '98%', label: 'Satisfaction Rate' },
        { value: '5+', label: 'Client Projects' }
      ],
      tags: ['Prototyping', 'User Testing', 'Figma'],
      caseStudyUrl: null
    }
  ]
}
