/* ─────────────────────────────────────────────────────────────
   PROJECT DATA — one vivid accent per project (high contrast on
   the dark bg). Consumed by the /projects archive page.
───────────────────────────────────────────────────────────── */
export const ALL_PROJECTS = [
  {
    id: 'roomify',
    title: 'Roomify',
    subtitle: 'Hotel Booking Platform',
    desc: 'Full-stack hotel booking and sharing platform built with MVC. Features Passport.js auth, Mapbox geocoding, Cloudinary image resizing, Docker containerization, and GitHub Actions CI/CD to Docker Hub.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Bootstrap', 'Docker', 'Mapbox', 'Cloudinary'],
    accent: '#2DD4BF',
    github: 'https://github.com/sahitya1903/roomify',
    live: 'https://roomify.azurewebsites.net/',
    category: ['Full-Stack', 'Node.js'],
  },
  {
    id: 'resume-syncer',
    title: 'Resume Syncer',
    subtitle: 'Automated Overleaf Resume Syncer',
    desc: 'Published GitHub Actions Marketplace action automating a 5-stage pipeline: Selenium Overleaf scraping, Git commits, Google Drive sync, and portfolio updates using Service Account credentials.',
    tags: ['Python', 'GitHub Actions', 'Selenium', 'Google Drive API', 'Git'],
    accent: '#A3E635',
    github: 'https://github.com/sahitya1903/resume-syncer',
    live: 'https://github.com/marketplace/actions/overleaf-resume-syncer',
    liveLabel: 'Marketplace',
    category: ['DevOps'],
  },
  {
    id: 'drowsiness-detection',
    title: 'Alert Drive',
    subtitle: 'Real-time Driver Drowsiness Detection & Alert System',
    desc: 'Real-time driver drowsiness detection system using computer vision. Features OpenCV Haar Cascades for face/eye localization and a MobileNet model to classify eye states and trigger visual alerts.',
    tags: ['Python', 'TensorFlow', 'OpenCV'],
    accent: '#FBBF24',
    github: 'https://github.com/sahitya1903/alert-drive',
    live: 'https://alert-drive.streamlit.app',
    category: ['Python', 'AI / ML'],
  },
  {
    id: 'portfolio',
    title: 'Dev Portfolio V2',
    subtitle: 'This Website',
    desc: 'Current iteration of my personal portfolio. Built with React, Vite, and Material UI — featuring glassmorphism cards, Framer Motion animations, cursor glow, and a custom violet dark theme.',
    tags: ['React', 'Vite', 'MUI', 'Framer Motion'],
    accent: '#22D3EE',
    github: 'https://github.com/sahitya1903/portfolio',
    live: 'https://sahitya.codes',
    category: ['React', 'Frontend'],
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    subtitle: 'Real-time Weather Dashboard',
    desc: 'Real-time weather application built with React and MUI, powered by the OpenWeatherMap API. Features location-based search and dynamic card backgrounds reflecting the current weather conditions.',
    tags: ['React', 'Vite', 'MUI', 'OpenWeather API'],
    accent: '#38BDF8',
    github: 'https://github.com/sahitya1903/weather',
    live: 'https://sahitya1903.github.io/weather',
    category: ['React', 'Frontend'],
  },
  {
    id: 'animal-detection',
    title: 'Animal Detection & Alert System',
    subtitle: 'YOLO-based Security System',
    desc: 'Real-time animal detection system powered by YOLOv12x and OpenCV. Processes video streams to detect animals and trigger automated SMS alerts via Twilio API.',
    tags: ['Python', 'YOLO', 'OpenCV', 'Twilio'],
    accent: '#4ADE80',
    github: 'https://github.com/sahitya1903/animal-detection',
    live: null,
    category: ['Python', 'AI / ML'],
  },
  {
    id: 'webdev-MERN',
    title: 'Web Development with MERN & SQL',
    subtitle: 'MERN stack experiments',
    desc: 'Curated collection of MERN stack and SQL practice projects. Covers core HTML/CSS, styling frameworks (Tailwind/Bootstrap), REST APIs, SQL, MongoDB relations, and React/Redux Toolkit.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'SQL', 'Redux Toolkit'],
    accent: '#F472B6',
    github: 'https://github.com/sahitya1903/webdev-MERN',
    live: null,
    category: ['Mini Projects'],
  },
  {
    id: 'todo-list',
    title: 'Todo List App',
    subtitle: 'Simple & Responsive Task Manager',
    desc: 'A simple, responsive, and intuitive task manager application built using React, Vite, and custom CSS for styling.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    accent: '#FB7185',
    github: 'https://github.com/sahitya1903/todo-list',
    live: null,
    category: ['React', 'Vite', 'Frontend'],
  },
  {
    id: 'leetcode-practice',
    title: 'LeetCode Practice',
    subtitle: 'Automated Sync Repository',
    desc: 'Daily automated sync repository of solutions to various LeetCode problems, configured with a GitHub Actions workflow.',
    tags: ['DSA', 'Java', 'Python', 'JavaScript', 'SQL', 'GitHub Actions'],
    accent: '#FB923C',
    github: 'https://github.com/sahitya1903/leetcode-practice',
    live: null,
    category: ['DSA'],
  },
  {
    id: 'java-dsa',
    title: 'JavaDSA',
    subtitle: 'Data Structures & Algorithms',
    desc: 'Collection of Java implementations of classic data structures, sorting/searching algorithms, and object-oriented programming concepts.',
    tags: ['Java', 'DSA'],
    accent: '#EF4444',
    github: 'https://github.com/sahitya1903/java-dsa',
    live: null,
    category: ['Java', 'DSA'],
  },
  {
    id: 'python-projects',
    title: 'Python Practice & Projects',
    subtitle: 'DSA & Mini Projects',
    desc: 'Curated collection of Python programs ranging from fundamentals and data structures to CLI mini-projects and university assignments.',
    tags: ['Python', 'DSA'],
    accent: '#FACC15',
    github: 'https://github.com/sahitya1903/python-practice',
    live: null,
    category: ['Python', 'DSA', 'Mini Projects'],
  },
];

/* Projects surfaced in the Home "featured" teaser, in display order. */
export const FEATURED_IDS = ['roomify', 'resume-syncer', 'drowsiness-detection'];

/** The featured subset, resolved from ALL_PROJECTS (keeps one source of truth). */
export const featuredProjects = () =>
  FEATURED_IDS.map((id) => ALL_PROJECTS.find((p) => p.id === id)).filter(Boolean);

export const FILTER_KEYS = ['All', 'Full-Stack', 'AI / ML', 'DevOps', 'Frontend', 'DSA', 'Mini Projects'];

/** Projects visible for a given filter key. */
export const projectsForFilter = (filter) =>
  filter === 'All' ? ALL_PROJECTS : ALL_PROJECTS.filter((p) => p.category.includes(filter));

/** `{ [filterKey]: count }` — how many projects each filter matches. */
export const filterCounts = () =>
  FILTER_KEYS.reduce((acc, key) => {
    acc[key] = projectsForFilter(key).length;
    return acc;
  }, {});
