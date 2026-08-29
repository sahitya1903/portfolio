import { useState } from 'react';
import { Box, Container, Typography, Chip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { alpha } from '@mui/material/styles';

import GlowCard from '../components/ui/GlowCard';
import TechBadge from '../components/ui/TechBadge';
import SectionHeader from '../components/ui/SectionHeader';
import { VIOLET, VIOLET_LIGHT, BORDER } from '../theme/theme';

/* ─────────────────────────────────────────────────────────────
   DATA — one vivid accent per project (high contrast on the dark bg)
───────────────────────────────────────────────────────────── */
const ALL_PROJECTS = [
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
  }
];

const FILTER_KEYS = ['All', 'Full-Stack', 'AI / ML', 'DevOps', 'Frontend', 'DSA', 'Mini Projects'];

/* ─────────────────────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────────────────────── */
const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4, delay: Math.min(index, 8) * 0.05, ease: [0.22, 1, 0.36, 1] }}
  >
    <GlowCard sx={{ p: { xs: 2.5, md: 3 }, height: '100%' }} glowIntensity={0.7}>
      <Box sx={{ display: 'flex', gap: { xs: 2, md: 2.5 }, height: '100%' }}>
        {/* Inset rail — the project's accent colour */}
        <Box sx={{
          flexShrink: 0, width: '4px', alignSelf: 'stretch', borderRadius: '999px',
          background: project.accent,
        }} />

        <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {/* Title + index, subtitle underneath */}
          <Box>
            <Typography sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontSize: '1.2rem', color: 'text.primary' }}>
              {project.title}
              <Box component="span" sx={{
                display: 'inline-block',
                ml: 1,
                verticalAlign: 'middle',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.62rem',
                color: project.accent,
                border: `1px solid ${alpha(project.accent, 0.3)}`,
                background: alpha(project.accent, 0.06),
                px: 1, py: 0.25,
                borderRadius: '4px',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}>
                {String(index + 1).padStart(2, '0')}
              </Box>
            </Typography>
            <Typography sx={{ mt: 0.5, fontSize: '0.75rem', color: project.accent, fontFamily: '"JetBrains Mono", monospace' }}>
              {project.subtitle}
            </Typography>
          </Box>

          <Typography sx={{
            fontSize: '0.87rem', color: 'text.secondary', lineHeight: 1.6,
            display: '-webkit-box', WebkitLineClamp: { xs: 3, md: 2 }, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {project.desc}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {project.tags.slice(0, 6).map((tag) => (
              <TechBadge key={tag} label={tag} color={project.accent} />
            ))}
          </Box>

          {/* Footer — links only */}
          <Box sx={{
            display: 'flex', gap: 2.5, flexWrap: 'wrap',
            mt: 0.5, pt: 1.75, borderTop: `1px solid ${BORDER}`,
          }}>
            <Box
              component="a"
              id={`project-${project.id}-github`}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex', alignItems: 'center', gap: 0.6, textDecoration: 'none',
                fontFamily: '"JetBrains Mono", monospace', fontSize: '0.76rem', color: 'text.secondary',
                transition: 'color 0.2s ease', '&:hover': { color: 'text.primary' },
              }}
            >
              <GitHubIcon sx={{ fontSize: 14 }} /> Code
            </Box>
            {project.live && (
              <Box
                component="a"
                id={`project-${project.id}-live`}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'inline-flex', alignItems: 'center', gap: 0.6, textDecoration: 'none',
                  fontFamily: '"JetBrains Mono", monospace', fontSize: '0.76rem', color: project.accent,
                  transition: 'color 0.2s ease', '&:hover': { color: 'text.primary' },
                }}
              >
                {project.liveLabel || 'Live Demo'} <OpenInNewIcon sx={{ fontSize: 12 }} />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </GlowCard>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────
   PROJECTS PAGE
───────────────────────────────────────────────────────────── */
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category.includes(activeFilter));

  // Count projects per filter for badges
  const filterCounts = FILTER_KEYS.reduce((acc, key) => {
    acc[key] = key === 'All'
      ? ALL_PROJECTS.length
      : ALL_PROJECTS.filter((p) => p.category.includes(key)).length;
    return acc;
  }, {});

  return (
    <Box component="main">
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient orb */}
        <Box sx={{
          position: 'absolute', top: '10%', right: '-5%',
          width: 600, height: 600, borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(VIOLET, 0.1)} 0%, transparent 65%)`,
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <Box sx={{
          position: 'absolute', bottom: '5%', left: '-8%',
          width: 450, height: 450, borderRadius: '50%',
          background: `radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 65%)`,
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <SectionHeader
            title={<>Projects that <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #06B6D4)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ship value..</Box></>}
          />

          {/* Filter chips with count badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center', mb: 6 }}>
              {FILTER_KEYS.map((filter) => {
                const isActive = activeFilter === filter;
                const count = filterCounts[filter];
                return (
                  <Chip
                    key={filter}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                        <span>{filter}</span>
                        <Box component="span" sx={{
                          fontSize: '0.6rem',
                          background: isActive ? alpha(VIOLET, 0.3) : 'rgba(255,255,255,0.06)',
                          color: isActive ? VIOLET_LIGHT : 'text.secondary',
                          px: 0.75, py: 0.1,
                          borderRadius: '4px',
                          fontWeight: 700,
                          minWidth: '18px',
                          textAlign: 'center',
                          lineHeight: 1.5,
                        }}>
                          {count}
                        </Box>
                      </Box>
                    }
                    onClick={() => setActiveFilter(filter)}
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.75rem',
                      fontWeight: isActive ? 600 : 400,
                      cursor: 'pointer',
                      background: isActive ? alpha(VIOLET, 0.2) : 'transparent',
                      color: isActive ? VIOLET_LIGHT : 'text.secondary',
                      border: `1px solid ${isActive ? alpha(VIOLET, 0.6) : 'rgba(255,255,255,0.07)'}`,
                      borderRadius: '8px',
                      height: 34,
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? `0 0 16px ${alpha(VIOLET, 0.3)}` : 'none',
                      '&:hover': {
                        background: alpha(VIOLET, 0.12),
                        color: VIOLET_LIGHT,
                        borderColor: alpha(VIOLET, 0.45),
                        transform: 'translateY(-1px)',
                      },
                    }}
                  />
                );
              })}
            </Box>
          </motion.div>

          {/* Results count */}
          <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.72rem', color: 'text.secondary' }}>
              {filtered.length} project{filtered.length !== 1 ? 's' : ''} found
            </Typography>
            {activeFilter !== 'All' && (
              <Chip
                label={`filter: ${activeFilter}`}
                size="small"
                onDelete={() => setActiveFilter('All')}
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.65rem',
                  height: 20,
                  background: alpha(VIOLET, 0.12),
                  color: VIOLET_LIGHT,
                  border: `1px solid ${alpha(VIOLET, 0.3)}`,
                  borderRadius: '4px',
                  '& .MuiChip-deleteIcon': { color: VIOLET_LIGHT, fontSize: '14px', '&:hover': { color: '#fff' } },
                }}
              />
            )}
          </Box>

          {/* Project cards */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <AnimatePresence>
              {filtered.length > 0 ? (
                filtered.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <GlowCard sx={{ p: 6, textAlign: 'center' }}>
                    <Typography sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '2rem',
                      mb: 1.5,
                      opacity: 0.3,
                    }}>
                      ¯\_(ツ)_/¯
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.85rem' }}>
                      No projects match this filter.
                    </Typography>
                  </GlowCard>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Projects;
