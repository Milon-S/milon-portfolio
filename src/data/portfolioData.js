export const personalInfo = {
  name: "Md. Milon Sarker",
  role: "Fresh CSE Graduate | Full-Stack Development (MERN) | IT Infrastructure Enthusiast",
  statusBadge: "OPEN TO FULL-STACK & IT ROLES",
  degree: "B.Sc. in Computer Science & Engineering",
  institution: "City University, Dhaka",
  cgpa: "3.55 / 4.00",
  email: "milons.devai@gmail.com",
  phone: "+880 1786-513661",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/Milon-S",
  linkedin: "https://www.linkedin.com/in/md-milon-sarker-852578263/",
  bio: "Computer Science & Engineering graduate with a strong academic background and a passion for Information Technology. Eager to begin my career in a dynamic organization where I can apply my technical knowledge in Full-Stack Development (MERN) and IT Infrastructure to solve real-world challenges.",
  avatar: "/profile.jpg"
};

export const aboutData = {
  shortBio: "I am a dedicated Computer Science & Engineering graduate from City University, Dhaka with a CGPA of 3.55. My expertise spans building full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js) and managing IT server environments, Linux/Windows operating systems, and network virtualization.",
  philosophy: "I believe in building clean, scalable software systems while maintaining a deep understanding of the underlying server infrastructure, system security, and machine learning models that power modern digital solutions.",
  highlights: [
    {
      title: "Full-Stack Development (MERN)",
      description: "Proficient in React, Node.js, Express, and MongoDB with REST APIs, JWT authentication, and payment gateway integration."
    },
    {
      title: "IT Infrastructure",
      description: "Solid grounding in Linux/Ubuntu administration, Windows Server, VMware/Hyper-V virtualization, and networking basics."
    },
    {
      title: "Machine Learning & Research",
      description: "Applied Machine Learning experience utilizing Python, Scikit-Learn, Stacking Ensembles, and SMOTE balancing."
    },
    {
      title: "Leadership & Community",
      description: "4-Year elected Class Representative, CUCC Executive Member, and ICT Olympiad Bangladesh Ambassador."
    }
  ]
};

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 90, icon: "Code2" },
      { name: "JavaScript (ES6+)", level: 92, icon: "FileCode2" },
      { name: "Tailwind CSS", level: 88, icon: "Palette" },
      { name: "HTML5 & CSS3", level: 95, icon: "Layout" },
      { name: "React Router DOM", level: 85, icon: "Route" }
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 85, icon: "Server" },
      { name: "Express.js", level: 88, icon: "Cpu" },
      { name: "RESTful API Design", level: 90, icon: "Network" },
      { name: "JWT Auth & RBAC", level: 85, icon: "ShieldCheck" },
      { name: "bKash Payment Gateway", level: 82, icon: "CreditCard" }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", level: 88, icon: "Database" },
      { name: "MongoDB Atlas", level: 85, icon: "Cloud" },
      { name: "MySQL", level: 80, icon: "Table" }
    ]
  },
  {
    category: "IT Infrastructure & Systems",
    skills: [
      { name: "Ubuntu / Linux (RHEL/SUSE)", level: 85, icon: "Terminal" },
      { name: "Windows Server Administration", level: 80, icon: "Monitor" },
      { name: "Virtualization (VMware/Hyper-V)", level: 78, icon: "Layers" },
      { name: "Networking Fundamentals", level: 82, icon: "Wifi" },
      { name: "Data Backup & Systems", level: 80, icon: "HardDrive" },
      { name: "Git & GitHub", level: 90, icon: "GitBranch" },
      { name: "Postman", level: 88, icon: "Send" }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Leadership (CR 4 Years)", level: 95, icon: "Users" },
      { name: "Fast Learner", level: 95, icon: "Zap" },
      { name: "Team Management", level: 90, icon: "UserCheck" },
      { name: "Communication", level: 88, icon: "MessageSquare" },
      { name: "Problem Solving", level: 90, icon: "Lightbulb" }
    ]
  }
];

export const projectsData = [
  {
    id: "aura",
    title: "AURA - AI-Driven Campus Marketplace",
    type: "Full-Stack Web Application",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "bKash Gateway"],
    period: "Jun 2026 – Jul 2026",
    description: "Developed a full-stack campus marketplace platform enabling university students to buy and sell products securely within their university community.",
    highlights: [
      "Engineered responsive front-end using React.js and Tailwind CSS with real-time UI filtering.",
      "Designed secure database schemas and RESTful APIs in Node.js/Express.js to handle listings, cart, and transactions.",
      "Integrated bKash payment gateway and JWT Role-Based Access Control (RBAC) for safe transactions.",
      "Implemented search indexing and category filters to streamline peer-to-peer campus trading."
    ],
    github: "https://github.com/Milon-S",
    liveUrl: "#",
    featured: true
  },
  {
    id: "fertilizer-rec",
    title: "Site-Specific Fertilizer Recommendation System",
    type: "ML Thesis Project",
    tags: ["Python", "Scikit-Learn", "Stacking Ensemble", "SMOTE", "Google Colab"],
    period: "May 2026 – Jul 2026",
    description: "Engineered an advanced machine learning decision model utilizing Stacking Ensembles and SMOTE class balancing for precision crop nutrition.",
    highlights: [
      "Trained ML models using Scikit-Learn to evaluate multi-feature soil data and micro-nutrient profiles.",
      "Applied SMOTE (Synthetic Minority Over-sampling Technique) to balance skewed soil distribution datasets.",
      "Built a Stacking Ensemble classifier combining Random Forest, XGBoost, and SVM base learners to achieve high recommendation accuracy.",
      "Executed data pre-processing and hyperparameter tuning inside Google Colab environment."
    ],
    github: "https://github.com/Milon-S",
    liveUrl: "#",
    featured: true
  },
  {
    id: "iot-water-saver",
    title: "IoT-Based Hands-Free Water Saver",
    type: "Embedded System / IoT (Award Winning)",
    tags: ["Arduino", "C++", "Sensors", "IoT Hardware", "Circuit Design"],
    period: "Dec 2025",
    description: "Award-winning IoT water conservation hardware prototype awarded 1st Place at the Digital System Design Project Showcase.",
    highlights: [
      "Designed hardware schematic and sensor-activated valve system using Arduino Microcontroller.",
      "Programmed rapid ultrasonic proximity detection to prevent water waste in handwashing stations.",
      "Won 1st Place out of all departmental engineering project submissions at City University Showcase."
    ],
    github: "https://github.com/Milon-S",
    liveUrl: "#",
    featured: true
  }
];

export const experienceData = [
  {
    role: "Class Representative (CR)",
    organization: "Dept. of CSE, City University, Dhaka",
    period: "Nov 2022 – Jul 2026",
    type: "Leadership & Student Management",
    description: "Elected to represent the Department of Computer Science & Engineering batch across 4 complete academic years.",
    highlights: [
      "Served continuously since the first semester, bridging faculty communications and student feedback.",
      "Coordinated academic course schedules, exam routines, lab sessions, and departmental activities.",
      "Organized class study circles, peer programming sessions, and university event participation."
    ]
  },
  {
    role: "Executive Member",
    organization: "City University Computer Club (CUCC)",
    period: "Jun 2024 – Dec 2024",
    type: "Tech Club Leadership",
    description: "Key organizer in campus tech community events and developer workshops.",
    highlights: [
      "Coordinated coding competitions, workshop registrations, and technical seminars for CSE students.",
      "Facilitated peer skill development workshops covering Git, web development basics, and programming problem solving.",
      "Managed club outreach and student engagement initiatives."
    ]
  },
  {
    role: "Ambassador",
    organization: "ICT Olympiad Bangladesh",
    period: "Aug 2025 – Sep 2026",
    type: "National Event Outreach",
    description: "Volunteered as ambassador promoting nationwide ICT skills competitions.",
    highlights: [
      "Promoted ICT-focused competitive programming and tech awareness across university departments.",
      "Guided student participants through registration and contest guidelines.",
      "Supported nation-wide outreach activities for ICT skill building in Bangladesh."
    ]
  }
];

export const educationData = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "City University, Dhaka",
    period: "Nov 2022 – Jul 2026",
    score: "CGPA: 3.55 / 4.00",
    details: "Specialization in Full-Stack Development (MERN), Machine Learning Thesis, and System/Network Infrastructure."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Ashulia Uchcha Madhyamic Bidhyalaya",
    period: "2018 – 2020",
    score: "GPA: 4.58 / 5.00",
    details: "Science Group with concentration in Mathematics, Physics, and ICT."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Panchagarh B. P. Govt. High School",
    period: "2016 – 2018",
    score: "GPA: 4.61 / 5.00",
    details: "Science Group with strong foundational science & math achievements."
  }
];

export const certificationsData = [
  {
    title: "1st Place Winner — Digital System Design Showcase",
    issuer: "City University Dept. of CSE",
    date: "Dec 2025",
    badge: "🏆 1st Place Award",
    description: "Awarded 1st place for designing and building the IoT-Based Hands-Free Water Saver system."
  },
  {
    title: "NASA Space Apps Challenge 2025 Participant",
    issuer: "NASA Space Apps Challenge",
    date: "2025",
    badge: "🚀 Global Hackathon",
    description: "Participated in the world's largest space hackathon solving Earth & Space challenge problems."
  },
  {
    title: "Certificate of Achievement: Agent X",
    issuer: "NetCom Learning",
    date: "Sep 2025",
    badge: "📜 Certified",
    description: "Professional certification in tech & systems training."
  },
  {
    title: "AI4BD TECH CARNIVAL",
    issuer: "Artificial Intelligence Bangladesh",
    date: "Dec 2025",
    badge: "🤖 AI Summit",
    description: "Participated in national artificial intelligence carnival workshops and tech exhibitions."
  }
];
