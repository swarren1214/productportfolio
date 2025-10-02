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
      { text: 'View My Work', href: '#portfolio' },
      { text: 'Contact Me', href: '#contact', variant: 'outline' }
    ]
  },

  about: {
    title: 'About Me',
    bio: [
      'Product Management is where my passion for innovation, strategic execution, and user-centered design converge. I\'ve built my career on solving complex operational challenges and translating them into scalable, intuitive products that drive measurable business impact.',
      'At Aptive Environmental, I serve as a Product Manager leading the development of Aspyn, a multi-tenant, microservice-based platform that powers field operations, routing, scheduling, licensing, and compliance for one of the largest pest control companies in the U.S. I spearheaded the creation of our in-house routing optimization engine (ARO), which improved operational efficiency by increasing appointments per gallon from 1.5 to 2.0 and reducing fleet travel time by 23%. I also defined and delivered a dedicated routing and scheduling UI that gave operations leaders unprecedented visibility into routes, appointments, and technician shifts—resulting in $2M in annual cost savings.',
      'Beyond routing, I launched a licensing and compliance platform to ensure EPA and state regulatory adherence, significantly reducing audit risk and streamlining technician credential management. I also established data-driven dashboards for managers, enabling real-time KPI tracking, performance monitoring, and proactive compliance oversight.',
      'My background in UX/UI design continues to shape my approach as a Product Manager. Having run a freelance design business, I learned the importance of uncovering real user pain points, validating solutions through usability testing, and creating experiences that feel both seamless and powerful. That foundation now informs my product philosophy: every decision must be grounded in empathy, data, and measurable outcomes.',
      'Today, I thrive at the intersection of technology, operations, and user experience—driving products that deliver strategic business value while making complex workflows intuitive for end users.'
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
      period: '08/2023 - Present',
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
      period: '05/2021 - 08/2023',
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
      company: 'Warren Design',
      location: 'Santaquin, UT',
      period: '03/2019 - 05/2021',
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
      title: 'Deli Dash',
      category: 'Mobile Game Development',
      description: 'Built a fast-paced mobile game from scratch over 18 months, leading product design and UX while learning critical lessons about product-market fit and iteration speed.',
      image: '/deli-dash-cover.png',
      metrics: [
        { value: '18mo', label: 'Development Time' },
        { value: '100s+', label: 'Downloads' }
      ],
      tags: ['Product Design', 'UX Design', 'User Testing', 'Mobile'],
      caseStudy: {
        title: '🎮 Deli Dash: Building a Fast-Paced Mobile Game from Scratch',
        overview: 'Deli Dash is a fast-paced mobile game where players race against time to assemble sandwiches by tapping ingredient buttons in the correct sequence. What began as a fun side project between two friends evolved into a full-fledged mobile game with a dedicated fanbase and competitive leaderboard culture.\n\nOver 18 months, we built and launched the game from the ground up — my friend focusing on the engineering and backend architecture, while I led product design, user experience, and gameplay mechanics. Despite being a passion project, Deli Dash taught us valuable lessons about product-market fit, iteration speed, and the importance of getting real user feedback early.',
        role: {
          title: '💡 My Role',
          description: 'I served as Product Manager and UX Designer, responsible for:',
          responsibilities: [
            'Defining the core gameplay loop and ensuring it was simple yet addictively challenging.',
            'Designing intuitive tap-based interactions and visual feedback loops to keep players engaged.',
            'Conducting informal user testing with early beta players to refine pacing and difficulty.',
            'Creating UI mockups and user flows, including menus, scoreboards, and in-game purchase flows.',
            'Prioritizing features like leaderboards and power boosts to drive engagement and competition.'
          ],
          footer: 'My partner handled engineering, game logic, and Unity implementation, while I focused on ensuring the product felt polished, cohesive, and rewarding.'
        },
        challenge: {
          title: '🏁 The Challenge',
          description: 'We set out to create a casual mobile game that was both easy to learn and hard to master. Our biggest challenges were:',
          points: [
            'Limited time — this was an after-hours project built slowly over 18 months.',
            'No formal user testing until after launch, which limited early feedback.',
            'Balancing fun, difficulty, and replayability with limited analytics tools.'
          ],
          footer: 'In hindsight, our biggest learning was that waiting until we felt the game was "perfect" delayed valuable insights that real users could have provided earlier.'
        },
        launch: {
          title: '🚀 The Launch',
          description: 'We launched Deli Dash on both iOS and Android stores.\nWithin weeks, players were competing fiercely on leaderboards, some logging hours of gameplay to climb higher ranks. Despite modest marketing, word-of-mouth spread among competitive casual gamers who enjoyed the pressure of quick decision-making and fast reflexes.',
          metrics: [
            'Hundreds of downloads within the first few weeks.',
            'Dozens of highly engaged players logging multi-hour play sessions.',
            'Steady ad and in-app purchase revenue post-launch.'
          ]
        },
        lessons: {
          title: '💬 Lessons Learned',
          items: [
            {
              number: '1',
              title: 'Launch early, learn fast.',
              description: 'We waited too long to release our MVP. Early playtesting would have exposed balance issues and user pain points we didn\'t notice internally.'
            },
            {
              number: '2',
              title: 'Engagement doesn\'t require scale.',
              description: 'Even with a small user base, the enthusiasm of competitive players proved that depth of engagement can matter more than total downloads.'
            },
            {
              number: '3',
              title: 'Clarity beats complexity.',
              description: 'Simple, responsive interactions paired with satisfying sound effects and visual feedback can keep users immersed far longer than we expected.'
            },
            {
              number: '4',
              title: 'Collaboration thrives with ownership.',
              description: 'Our two-person team structure worked because we each had full ownership of our domains — I drove product and design decisions, while my partner handled engineering execution.'
            }
          ]
        },
        improvements: {
          title: '🧠 What I\'d Do Differently',
          description: 'If I could go back, I\'d:',
          points: [
            'Launch a public beta within 4–6 months.',
            'Implement analytics and event tracking earlier.',
            'Add more social and progression-based incentives beyond the leaderboard (like daily challenges or unlockables).'
          ]
        },
        outcome: {
          title: '🧾 Outcome',
          description: 'While Deli Dash wasn\'t a financial windfall, it was a creative and professional success. We proved that a small, passionate team could design, build, and launch a polished mobile game from scratch — all while learning core principles of user feedback loops, engagement mechanics, and iterative product design.'
        },
        takeaway: {
          title: '🎯 Takeaway',
          description: 'Deli Dash reinforced a truth I\'ve carried into every project since:',
          quote: '"Perfection is the enemy of progress. The sooner users touch your product, the faster you\'ll build something they love."'
        },
        images: [
          { url: '/deli-dash-team.jpg', caption: 'Daniel and I showing off our new mobile game', featured: true },
          { url: '/deli-dash-store.png', caption: 'In-app purchase store with Deli Dollars, powerups, and customization options' },
          { url: '/deli-dash-leaderboard.png', caption: 'Competitive leaderboard system that drove player engagement and retention' },
          { url: '/deli-dash-settings.png', caption: 'Clean settings UI with region selection, audio controls, and purchase restoration' },
          { url: '/deli-dash-gameplay.png', caption: 'Core gameplay: Race against time to assemble sandwiches by tapping ingredients in the correct sequence' }
        ]
      }
    },
    {
      id: 2,
      title: 'DLM Config',
      category: 'Commercial Lighting Control',
      description: 'Redesigned Legrand\'s mobile configuration app for commercial lighting systems, reducing setup time by 50% and transforming field technician productivity through stabilization and UX innovation.',
      image: '/dlm-config-cover.png',
      metrics: [
        { value: '50%', label: 'Faster Setup' },
        { value: '40%+', label: 'Reduced Tap Depth' }
      ],
      tags: ['Product Management', 'UX Research', 'Field Testing', 'Enterprise'],
      caseStudy: {
        title: '💡 DLM Config: Redesigning Commercial Lighting Control for Real-World Usability',
        overview: 'DLM Config is Legrand\'s mobile application for configuring commercial lighting control systems in the field. When I joined Legrand as a Product Manager, I oversaw three products across their Digital Lighting Management (DLM) ecosystem:\n\n1. DLM Config (Mobile) — The technician-facing app for configuring DLM devices on-site.\n2. LMCS (Desktop) — A more powerful configuration suite for system designers and advanced installers.\n3. LMDS (Web) — Legrand\'s internal system-design software to accelerate project proposals and increase daily submission volume.\n\nWhile each product played a vital role in the commercial-lighting lifecycle, DLM Config became my primary focus due to its impact on field productivity and customer satisfaction.',
        role: {
          title: '⚙️ My Role',
          description: 'As Product Manager for the DLM software suite, I was responsible for:',
          responsibilities: [
            'Driving the product vision for the mobile and desktop applications.',
            'Conducting user research and stakeholder interviews to identify friction points in real installation workflows.',
            'Partnering closely with engineering to stabilize a buggy Xamarin-based codebase.',
            'Prototyping and validating new UX flows to improve reliability and speed.',
            'Leading cross-functional demos and presenting updates to internal and external stakeholders.'
          ]
        },
        challenge: {
          title: '🚧 The Challenge',
          description: 'When I inherited DLM Config, it was suffering from poor stability and usability. Built on Xamarin, the app frequently crashed, disconnected from devices, and created frustration among installers in the field.\n\nThrough structured interviews and field-use observation, I discovered that daylight-harvesting calibration was the single largest pain point. This workflow—used to calibrate lighting levels in spaces with natural daylight—was overly complex, unstable, and unpredictable.',
          points: [
            'Unclear calibration feedback during setup.',
            'Inconsistent sensor-reading behavior between devices.',
            'Excessive trial-and-error required to achieve accurate results.'
          ],
          footer: 'Installers described it as "guesswork," and even experienced technicians struggled to complete calibrations successfully. This qualitative research guided our prioritization: before any new features, we had to make daylight harvesting simple, stable, and trustworthy.'
        },
        discovery: {
          title: '🔍 Discovery & Research',
          description: 'I conducted a series of stakeholder interviews with regional field teams, sales engineers, and system designers to pinpoint where the workflow failed. Common feedback included:',
          points: [
            'Unclear calibration feedback during setup.',
            'Inconsistent sensor-reading behavior between devices.',
            'Excessive trial-and-error required to achieve accurate results.'
          ],
          footer: 'This qualitative research guided our prioritization: before any new features, we had to make daylight harvesting simple, stable, and trustworthy.'
        },
        design: {
          title: '🧪 Design & Iteration',
          description: 'Working closely with UX and engineering, we developed multiple prototypes for a new Daylight Harvesting Workflow that:',
          points: [
            'Provided clear step-by-step guidance for installers.',
            'Introduced real-time sensor feedback during calibration.',
            'Simplified data visualization for light-level targets.',
            'Reduced tap depth and screen transitions by > 40%.'
          ],
          footer: 'We ran several design-iteration cycles, using mock installations to simulate real-world usage and validate improvements before development.'
        },
        launch: {
          title: '🚀 Launch & Reception',
          description: 'After finalizing the design, we implemented and released the new workflow in the mobile app. I had the privilege of unveiling it at the annual Legrand Sales Conference to hundreds of vendors and field reps.\n\nThe response was overwhelmingly positive—sales engineers described the update as "a game-changer" for field efficiency and customer confidence. The new workflow quickly became one of the most-used features in DLM Config.',
          metrics: [
            'Stability first: Crash rates reduced significantly after Xamarin refactors.',
            'Efficiency: Installers reported 50% faster daylight-harvesting setup times.',
            'Adoption: Positive internal feedback drove rollout across additional product lines.',
            'Alignment: Unified the mobile and desktop experiences around consistent workflows.'
          ]
        },
        lessons: {
          title: '🧠 Lessons Learned',
          items: [
            {
              number: '1',
              title: 'Stabilize before you innovate.',
              description: 'A poor technical foundation undermines every UX improvement.'
            },
            {
              number: '2',
              title: 'Listen where the pain is loudest.',
              description: 'Direct user interviews pinpointed the workflow that truly mattered.'
            },
            {
              number: '3',
              title: 'Visible progress builds trust.',
              description: 'Demonstrating improvements publicly (at the sales conference) created internal momentum and stakeholder buy-in.'
            }
          ]
        },
        outcome: {
          title: '🎯 Impact',
          description: 'The DLM Config overhaul not only simplified one of Legrand\'s most complex configuration workflows but also strengthened cross-team collaboration and reinforced user-driven design principles across the entire DLM product family.'
        },
        takeaway: {
          title: '',
          description: '',
          quote: '"Perfection isn\'t stability—it\'s confidence. We built an app technicians could finally rely on."'
        },
        images: []
      }
    },
    {
      id: 3,
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
      id: 4,
      title: 'Vehicle Routing Optimization System',
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
      id: 5,
      title: 'Geo-Based Scheduling Platform',
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
      id: 6,
      title: 'Enterprise Feature Redesign',
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
