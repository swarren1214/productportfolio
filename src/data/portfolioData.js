export const portfolioData = {
  personal: {
    name: 'Stephen Warren',
    role: 'Visionary Product Manager',
    email: 'swarren@mail.com',
    location: 'Santaquin, UT',
    phone: '801.857.8641',
    linkedin: 'https://www.linkedin.com/in/stephen-s-warren/'
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
    sections: [
      {
        heading: 'Product Leadership',
        content: 'As a Product Manager, I\'m passionate about building platforms that transform complex operations into intuitive, scalable solutions. My work blends innovation, user-centered design, and strategic execution to deliver measurable business impact.'
      },
      {
        heading: 'Recent Accomplishments at Aptive',
        items: [
          {
            title: 'Aspyn Platform',
            description: 'Leading the development of a multi-tenant, microservice-based enterprise platform powering field operations, routing, scheduling, licensing, and compliance for a $500M+ pest control business.'
          },
          {
            title: 'Routing Optimization (ARO)',
            description: 'Spearheaded the creation of an in-house routing engine, improving appointments per gallon from 1.5 → 2.0 and reducing fleet travel time by 23%, driving $2M+ in annual cost savings.'
          },
          {
            title: 'Operational UI',
            description: 'Designed and launched a dedicated routing and scheduling interface that gave leaders real-time visibility into routes, appointments, and technician shifts.'
          },
          {
            title: 'Licensing & Compliance',
            description: 'Built a compliance platform ensuring EPA and state regulatory adherence, reducing audit risk and streamlining technician credential management.'
          },
          {
            title: 'Data & Analytics',
            description: 'Delivered dashboards that enabled managers to track KPIs, monitor performance, and enforce compliance in real time.'
          }
        ]
      },
      {
        heading: 'Product Philosophy',
        content: 'Grounded with a background in UX/UI design, I believe every product decision should be informed by empathy, data, and measurable outcomes. My focus is making complex workflows simple—helping users and businesses achieve more with less friction.'
      }
    ],
    image: '/headshot.png',
    highlights: [
      { icon: 'Users', text: 'User Research' },
      { icon: 'Code', text: 'Data Analysis' },
      { icon: 'Lightbulb', text: 'Product Design' },
      { icon: 'Award', text: 'UX Strategy' },
      { icon: 'Code', text: 'Agile/Scrum' },
      { icon: 'Award', text: 'Data Dashboards' },
      { icon: 'Users', text: 'Leadership' },
      { icon: 'Lightbulb', text: 'Strategy Planning' }
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
        url: 'https://www.linkedin.com/in/stephen-s-warren/',
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
      title: 'Project Cleo',
      category: 'Enterprise Platform Development',
      description: 'Led Field Ops and Licensing development within Aptive\'s next-generation multi-tenant platform, leveraging AI acceleration while championing user-centered design to deliver enterprise-scale solutions in under 12 months.',
      image: '/project-cleo-cover.png',
      metrics: [
        { value: '<12mo', label: 'Delivery Time' },
        { value: '$500M+', label: 'Projected Growth' }
      ],
      tags: ['Product Management', 'AI Development', 'UX Research', 'Enterprise Architecture'],
      caseStudy: {
        title: '💡 Project Cleo: Accelerating Enterprise Platform Development with AI',
        overview: 'Project Cleo is the codename for Aptive Environmental\'s next-generation, multi-tenant enterprise platform designed to unify every core business function — from customer acquisition to service delivery.\n\nThe platform includes a suite of interconnected applications:\n• CRM – Customer management and contract visibility\n• Sales – Lead tracking and conversion\n• Field Ops – Scheduling, routing, and service execution\n• Licensing – Regulatory compliance and credential management\n• Pay – Compensation processing for sales and service teams\n• Comms – Customer communication and notifications\n• Admin – Permissions, user management, and access control\n• Roadmap – Internal product planning and release tracking\n• Onboarding & Housing – Seasonal employee housing and readiness tracking\n\nThe system also integrates with external enterprise platforms like Workday, Genesys, Motive, and FusionAuth, creating a unified operating environment across all departments.\n\nThe goal: build an enterprise platform capable of managing thousands of users and tens of thousands of daily service appointments — in under a year.',
        role: {
          title: '⚙️ My Role',
          description: 'As Product Manager for Field Ops and Licensing, I oversaw the design, development, and integration of two mission-critical applications within Cleo, while collaborating closely with other product teams to ensure seamless end-to-end functionality across the entire ecosystem.\n\nKey responsibilities and contributions:',
          responsibilities: [
            'Defined product strategy, requirements, and cross-app dependencies for Field Ops and Licensing.',
            'Facilitated end-to-end integration testing across all applications to validate data flow, authentication, and user experience continuity.',
            'Partnered with engineering to define architecture and ensure consistent design patterns across modules.',
            'Personally contributed over 10,000 lines of production code, applying vibe coding principles to create shared UI components and maintain a cohesive experience across apps.'
          ]
        },
        challenge: {
          title: '🤖 The Role of AI in Development',
          description: 'AI became a key force multiplier during Project Cleo\'s compressed delivery timeline. Large Language Models were used to:',
          points: [
            'Generate test scaffolding for unit, integration, and API tests.',
            'Automate technical documentation for engineers and internal stakeholders.',
            'Refactor boilerplate code and accelerate integration with third-party systems (VROOM, Workday, Genesys, Motive, and others).'
          ],
          footer: 'These efficiencies freed the team to focus on the business-critical logic that drives Aptive\'s operations — including scheduling, regulatory compliance, and performance tracking.\n\n"AI made us faster, but not wiser. It could write code, but it couldn\'t design clarity."'
        },
        discovery: {
          title: '🧠 The Early Tradeoff: Speed Over Design',
          description: 'At the outset, the team prioritized rapid delivery over user experience. The goal was to get the platform running — fast. As a result, UX research and design were intentionally deferred to later phases.\n\nThis decision quickly exposed a major gap:',
          points: [
            'Interfaces felt inconsistent across modules.',
            'Workflows required insider knowledge to navigate.',
            'Teams experienced frustration and rework as usability issues surfaced in testing and production.'
          ],
          footer: 'AI had proven invaluable for accelerating code, but it was terrible at understanding human behavior. It couldn\'t anticipate user intent, workflow complexity, or accessibility — all crucial to enterprise adoption.\n\nWith a background in UX, I became a strong advocate for a course correction. I championed the idea that research should inform architecture, not just decorate it. We needed to design around how people actually worked — not how fast the system could be assembled.'
        },
        design: {
          title: '🧭 Course Correction: Building for Humans',
          description: 'In later phases, we reintroduced user research and UX design as foundational components of the development process:',
          points: [
            'Field Observations: Ride-alongs and interviews revealed friction in how technicians logged services and tracked routes.',
            'Workflow Mapping: Dispatchers and managers co-created visual dashboards to simplify complex routing and scheduling tasks.',
            'Licensing Redesign: Compliance workflows were rebuilt to support expiration tracking, jurisdictional visibility, and easy document uploads.',
            'Unified Design System: I helped implement a component-based library to enforce visual and interaction consistency across every Cleo module.'
          ],
          footer: 'This pivot restored balance between speed and usability, and transformed the platform from "functional" to intuitive and scalable.'
        },
        algorithms: {
          title: '🧮 Intelligent Scheduling Algorithms',
          description: 'To optimize Field Ops performance, I personally developed two proprietary algorithms that transformed how Aptive schedules and manages service appointments:',
          points: [
            'Geo-Scheduling Algorithm: Intelligently assigns appointments based on geographic proximity, technician skills, and route efficiency — reducing drive time and maximizing daily capacity.',
            'Zone Coverage Algorithm: Accurately calculates service capacity and demand within geographic zones, enabling smarter scheduling decisions and balanced workload distribution.'
          ],
          footer: 'These algorithms increased route efficiency by 15-20% and enabled data-driven capacity planning across thousands of daily appointments.',
          documents: [
            {
              title: 'Geo-Scheduling Algorithm',
              description: 'Detailed documentation of the algorithm that optimizes appointment scheduling based on geographic clustering and route efficiency.',
              url: '/geo-scheduling-algorithm.pdf',
              filename: 'geo-scheduling-algorithm.pdf'
            },
            {
              title: 'Zone Coverage Algorithm',
              description: 'Technical specification for calculating service capacity and demand within geographic zones for intelligent scheduling.',
              url: '/zone-coverage-algorithm.pdf',
              filename: 'zone-coverage-algorithm.pdf'
            }
          ]
        },
        launch: {
          title: '🚀 Results',
          description: 'By combining AI acceleration with renewed focus on design and product strategy, Project Cleo achieved:',
          metrics: [
            'A Field Ops system capable of real-time scheduling, routing, and service management.',
            'A Licensing platform ensuring compliance across 50 states, reducing audit risk and administrative overhead.',
            'Full integration across CRM, Pay, Comms, and Admin — enabling unified workflows and cross-team visibility.',
            'A cohesive UI and UX powered by reusable design components and cross-app consistency.',
            '$2M+ in projected annual savings from routing optimization and operational efficiency.',
            'Completion within twelve months, setting a new internal benchmark for enterprise delivery.'
          ]
        },
        lessons: {
          title: '💬 Lessons Learned',
          items: [
            {
              number: '1',
              title: 'AI can code, but it can\'t empathize.',
              description: 'Speed means nothing if users can\'t use what you\'ve built.'
            },
            {
              number: '2',
              title: 'Research must inform architecture.',
              description: 'Good UX isn\'t decoration — it\'s structural.'
            },
            {
              number: '3',
              title: 'Integration is the true measure of enterprise success.',
              description: 'A platform is only as strong as the handoffs between its apps.'
            },
            {
              number: '4',
              title: 'Hands-on product management creates alignment.',
              description: 'Writing code and testing integrations firsthand built credibility and cohesion across teams.'
            }
          ]
        },
        outcome: {
          title: '🎯 Takeaway',
          description: 'Project Cleo proved that AI-driven acceleration can dramatically shorten the development timeline — but it also underscored the irreplaceable role of human-centered design and product intuition.'
        },
        takeaway: {
          title: '',
          description: '',
          quote: '"AI built it fast. We made it right."'
        },
        images: []
      }
    },
    {
      id: 4,
      title: 'Deli Dash',
      category: 'Mobile Game Development',
      description: 'Built a fast-paced mobile game from scratch over 18 months, leading product design and UX while learning critical lessons about product-market fit and iteration speed.',
      image: '/deli-dash-cover.png',
      metrics: [
        { value: '18mo', label: 'Development Time' },
        { value: '2,000k+', label: 'Downloads' }
      ],
      tags: ['Product Design', 'UX Design', 'User Testing', 'Mobile'],
      caseStudy: {
        title: '🎮 Deli Dash: Building a Fast-Paced Mobile Game from Scratch',
        overview: 'Deli Dash is a fast-paced mobile game where players race against time to assemble sandwiches by tapping ingredient buttons in the correct sequence. What began as a fun side project between two friends evolved into a full-fledged mobile game with a dedicated fanbase and competitive leaderboard culture.\n\nOver 18 months, we built and launched the game from the ground up — my friend focusing on the engineering and backend architecture, while I led product design, user experience, and gameplay mechanics. Despite being a passion project, Deli Dash taught us valuable lessons about product-market fit, iteration speed, and the importance of getting real user feedback early.',
        appStoreUrl: 'https://apps.apple.com/us/app/deli-dash/id1533511215',
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
        video: {
          title: '🎮 Gameplay Demo',
          description: 'Watch Deli Dash in action! This gameplay video showcases the core mechanics, fast-paced sandwich assembly, and competitive elements that kept players engaged.',
          url: '/deli-dash-video.mov',
          caption: 'Deli Dash gameplay demonstration'
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
          { url: '/deli-dash-team.jpeg', caption: 'Daniel and I showing off our new mobile game', featured: true },
          { url: '/deli-dash-store.png', caption: 'In-app purchase store with Deli Dollars, powerups, and customization options' },
          { url: '/deli-dash-leaderboard.png', caption: 'Competitive leaderboard system that drove player engagement and retention' },
          { url: '/deli-dash-settings.png', caption: 'Clean settings UI with region selection, audio controls, and purchase restoration' },
          { url: '/deli-dash-gameplay.png', caption: 'Core gameplay: Race against time to assemble sandwiches by tapping ingredients in the correct sequence' }
        ]
      }
    },
    {
      id: 3,
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
        video: {
          title: '🎥 Product Demo & Tutorial',
          description: 'As Product Manager, I created this tutorial video to showcase the new daylight harvesting feature and provide technicians with a step-by-step guide on how to use it effectively in the field.',
          url: '/dlm-config-video.mp4',
          caption: 'Feature tutorial demonstrating the new daylight harvesting workflow'
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
      id: 2,
      title: 'ARO (Aptive Routing Optimization)',
      category: 'Routing & Scheduling Intelligence',
      description: 'Led product management for Aptive\'s routing engine, increasing appointments per gallon from 1.5 to 2.0 and achieving 33% efficiency gains through research-driven optimization and systems thinking.',
      image: '/aro-cover.png',
      metrics: [
        { value: '33%', label: 'Efficiency Gain' },
        { value: '1.5 → 2.0', label: 'Appts/Gallon' }
      ],
      tags: ['Product Management', 'User Research', 'Data Analysis', 'Enterprise'],
      caseStudy: {
        title: '🚚 ARO (Aptive Routing Optimization): Building Intelligence Through Research and Real-World Complexity',
        overview: 'Aptive Routing Optimization (ARO) is the routing and scheduling engine that powers Aptive\'s national Field Operations network. As the Product Manager for ARO, I led efforts to understand, rebuild, and refine how Aptive manages tens of thousands of service appointments across the United States — balancing geographic, operational, and business constraints in a single, scalable system.\n\nWhile ARO became a powerful operational tool, its greatest success wasn\'t just technological — it was a research-driven understanding of how business rules, integrations, and data models shape routing behavior at scale.',
        role: {
          title: '🧭 My Role',
          description: 'I owned product management for Aptive\'s routing and scheduling software, leading discovery, research, and cross-functional coordination across data science, engineering, and operations teams. My responsibilities included:',
          responsibilities: [
            'Conducting extensive user and stakeholder research to identify pain points with existing routing tools.',
            'Translating complex routing complaints into diagnosable causes — separating technology limitations from business rules.',
            'Partnering with engineers to improve algorithms while aligning with CRM and operational data models.',
            'Defining success metrics like appointments per gallon and route efficiency, which later became core KPIs.',
            'Using findings from ARO to guide the design of the next-generation routing engine built within Aptive\'s new platform.'
          ]
        },
        challenge: {
          title: '🔍 Research & Discovery',
          description: 'Routing optimization is one of the most complex areas of Field Operations. Early research made it clear that perceived routing "failures" (like route crossovers or long drive times) often stemmed not from the routing algorithms themselves, but from business-imposed constraints — such as strict technician service zones, skill requirements, or customer time windows.',
          points: [
            'Field interviews with Operations Managers and technicians to identify recurring frustrations.',
            'Root cause analysis sessions with engineering to trace problems to logic boundaries or CRM data integrity.',
            'Quantitative studies comparing route metrics across offices and scenarios, helping distinguish operational variance from software behavior.'
          ],
          footer: 'The outcome of this research helped us reframe internal narratives: routing wasn\'t "broken" — it was faithfully reflecting business logic that didn\'t always align with field realities.'
        },
        technical: {
          title: '⚙️ Technical Context',
          description: 'ARO was built using open-source optimization frameworks (VROOM and OSRM) augmented with Aptive\'s proprietary logic. It handled:',
          points: [
            'Tens of thousands of daily appointments nationwide.',
            'Dynamic clustering based on proximity, skill, and time windows.',
            'Predictive service durations modeled from property and historical data.',
            'Integration with the legacy CRM, which introduced challenges in data consistency and latency.'
          ],
          footer: 'This CRM integration was one of the most persistent sources of complexity — routing data had to synchronize with a system never designed for near real-time updates. This friction limited ARO\'s full potential and underscored the need for a unified data model — a key driver behind Aptive\'s new technology platform initiative.'
        },
        launch: {
          title: '📈 Key Results',
          description: 'Even within those constraints, ARO delivered measurable improvements:',
          metrics: [
            '1.5 → 2.0 appointments per gallon, a substantial fuel efficiency gain.',
            '33% increase in routing efficiency, reducing travel time and increasing SPH (Services Per Hour).',
            'Daily routing of tens of thousands of appointments across 70+ service centers.'
          ],
          footer: 'These results validated ARO\'s core optimization models while revealing deeper system dependencies that the new platform would later address.'
        },
        lessons: {
          title: '🧠 Lessons Learned',
          items: [
            {
              number: '1',
              title: 'Research first, optimize second.',
              description: 'Routing is a systems problem — the algorithm is just one part of a broader network of business logic, data, and user behavior.'
            },
            {
              number: '2',
              title: 'Business rules can outweigh algorithmic intelligence.',
              description: 'The best route mathematically isn\'t always the best operationally — and business context must define those boundaries consciously.'
            },
            {
              number: '3',
              title: 'Integration defines reality.',
              description: 'A routing engine is only as good as the data it consumes. Legacy integrations created blind spots that the new platform aims to eliminate.'
            },
            {
              number: '4',
              title: 'ARO was a stepping stone, not a finish line.',
              description: 'The insights gained from ARO directly informed the architecture and design of Aptive\'s next-generation Field Ops system — built on a modern microservice platform with unified data pipelines.'
            }
          ]
        },
        outcome: {
          title: '🔮 The Next Chapter',
          description: 'ARO was more than a product — it was a learning engine. It revealed how technology, data models, and business constraints converge in real-world logistics, and it laid the foundation for a completely new Field Operations platform now in development.\n\nThe upcoming platform, built with ARO\'s lessons at its core, will deliver adaptive, context-aware routing that learns continuously — not just from data, but from the business itself.'
        },
        takeaway: {
          title: '',
          description: '',
          quote: '"ARO showed us that optimization isn\'t about perfect routes. It\'s about perfect understanding."'
        },
        images: []
      }
    }
  ],

  // References Section
  references: [
    {
      name: 'Khuyen Bui',
      phone: '206.300.5190',
      title: 'VP of Engineering at Aptive',
      testimonial: 'Khuyen is a very analytical and ROI driven leader. He and I would talk regularly about my product and what KPIs were being measured for success on my product. He has been an invaluable resource for me and an advocate for my career.',
      linkedin: 'https://www.linkedin.com/in/khuyenbui/',
      image: '/khuyen-bui.png'
    },
    {
      name: 'Josh Rich',
      phone: '801.310.1205',
      title: 'Product Manager at Aptive',
      testimonial: 'Josh is a talented Product Manager at Aptive with substantial experience in the field. He and I have become well acquainted and we have mutual admiration for each other\'s skills and strengths.',
      linkedin: 'https://www.linkedin.com/in/joshua-rich-86b3b117a/',
      image: '/josh-rich.png'
    },
    {
      name: 'Jon Jensen',
      phone: '435.764.5801',
      title: 'Senior UX Designer at Aptive',
      testimonial: 'Jon Jensen was also one of my designers at Aptive (he was eventually moved to other projects), but he and I collaborated closely on my product.',
      linkedin: 'https://www.linkedin.com/in/jon-jensen-uxc-a806a329/',
      image: '/jon-jensen.png'
    },
    {
      name: 'Grady Kelly',
      phone: '801.913.7024',
      title: 'Director of Design at Aptive',
      testimonial: 'Grady and I worked closely together on many projects at Aptive. He was my designer for a time on our routing UI, and he also has been a great resource for me to prove out ideas.',
      linkedin: 'https://www.linkedin.com/in/grady/',
      image: '/grady-kelly.png'
    },
    {
      name: 'Neal Thacker',
      phone: '404.434.0817',
      title: 'Engineering Manager at Aptive',
      testimonial: 'Neal and I worked in tandem at Aptive both on ARO as well as Project Cleo (the new microservices platform). Together we built and shipped many features and innovative solutions that empowered and transformed Aptive.',
      linkedin: 'https://www.linkedin.com/in/neal-thacker-b5745192/',
      image: '/neal-thacker.png'
    },
    {
      name: 'Michael Thurman',
      phone: '801.921.1580',
      title: 'Product Manager at Awardco',
      testimonial: 'Michael Thurman and I have worked closely together at Legrand as he was one of the PMs on the team prior to joining the team at Awardco. He was also in the MBA program with me at Utah Valley University.',
      linkedin: 'https://www.linkedin.com/in/michael-thurman/',
      image: '/michael-thurman.png'
    },
  ]
}
