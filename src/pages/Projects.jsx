import { useState } from 'react';
import { Box, Container, Typography, Button, Chip, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { alpha } from '@mui/material/styles';

import GlowCard from '../components/ui/GlowCard';
import TechBadge from '../components/ui/TechBadge';
import SectionHeader from '../components/ui/SectionHeader';
import { VIOLET, VIOLET_LIGHT, BORDER } from '../theme/theme';

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const ALL_PROJECTS = [
  {
    id: 'roomify',
    title: 'Roomify',
    subtitle: 'Hotel Booking Platform',
    desc: 'A full-stack hotel booking and rental platform. Enables landlords to list properties and tenants to discover, filter, and book rooms — with real-time availability, JWT auth, and an admin dashboard.',
    tags: ['EJS', 'Node.js', 'Express.js', 'MongoDB', 'MUI'],
    accent: VIOLET,
    accentLight: VIOLET_LIGHT,
    github: 'https://github.com/sahitya1903/roomify',
    live: 'https://roomify-1gzx.onrender.com',
    stats: [
      { label: 'Type', value: 'Full-Stack' },
      { label: 'Stack', value: 'EJS + Node.js' },
      { label: 'Status', value: 'Live' },
    ],
    category: ['Full-Stack', 'Node.js'],
  },
  {
    id: 'drowsiness-detection',
    title: 'Driver Drowsiness Detection',
    subtitle: 'Real-time Alert System',
    desc: 'Real-time drowsiness detection using computer vision and deep learning. Monitors eye aspect ratio and facial landmarks via a webcam to trigger audio alerts — preventing accidents before they happen.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Streamlit'],
    accent: '#D97706',
    accentLight: '#FBBF24',
    github: 'https://github.com/sahitya1903/drowsiness-detection',
    live: 'https://drowsiness-detection-0.streamlit.app',
    stats: [
      { label: 'Type', value: 'AI / ML' },
      { label: 'Model', value: 'CNN' },
      { label: 'Status', value: 'Live' },
    ],
    category: ['Python', 'AI / ML'],
  },
  {
    id: 'portfolio',
    title: 'Dev Portfolio V2',
    subtitle: 'This Website',
    desc: 'Current iteration of my personal portfolio. Built with React, Vite, and Material UI — featuring glassmorphism cards, Framer Motion animations, cursor glow, and a custom violet dark theme.',
    tags: ['React', 'Vite', 'MUI', 'Framer Motion'],
    accent: '#06B6D4',
    accentLight: '#67E8F9',
    github: 'https://github.com/sahitya1903/portfolio',
    live: 'https://sahitya.codes',
    stats: [
      { label: 'Type', value: 'Frontend' },
      { label: 'Stack', value: 'React + Vite' },
      { label: 'Status', value: 'Live' },
    ],
    category: ['React', 'Frontend'],
  },
  {
    id: 'animal-detection',
    title: 'Animal Detection & Alert System',
    subtitle: 'YOLO-based Security System',
    desc: 'Real-time animal detection system powered by YOLOv12 and OpenCV. Processes live video streams to detect animals and fire automated alerts — built for wildlife monitoring and farm perimeter security.',
    tags: ['Python', 'YOLO', 'OpenCV'],
    accent: '#15803D',
    accentLight: '#4ADE80',
    github: 'https://github.com/sahitya1903/animal-detection',
    live: null,
    stats: [
      { label: 'Type', value: 'AI / ML' },
      { label: 'Model', value: 'YOLOv12' },
      { label: 'Status', value: 'Completed' },
    ],
    category: ['Python', 'AI / ML'],
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    subtitle: 'Real-time Weather Dashboard',
    desc: 'A weather application built with React and MUI, powered by the OpenWeather API. Displays real-time weather data, forecasts, and location-based search.',
    tags: ['React', 'Vite', 'MUI', 'OpenWeather API'],
    accent: '#0284C7',
    accentLight: '#38BDF8',
    github: 'https://github.com/sahitya1903/weather',
    live: null,
    stats: [
      { label: 'Type', value: 'Frontend' },
      { label: 'Stack', value: 'React + Vite' },
      { label: 'Status', value: 'Completed' },
    ],
    category: ['React', 'Frontend'],
  },
  {
    id: 'todo-list',
    title: 'Todo List App',
    subtitle: 'Simple & Responsive Task Manager',
    desc: 'A simple and responsive Todo List application built using React and Vite. Manage your daily tasks efficiently with an intuitive user interface.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    accent: '#4F46E5',
    accentLight: '#818CF8',
    github: 'https://github.com/sahitya1903/todo-list',
    live: null,
    stats: [
      { label: 'Type', value: 'Frontend' },
      { label: 'Stack', value: 'React + Vite' },
      { label: 'Status', value: 'Completed' },
    ],
    category: ['React', 'Vite', 'Frontend'],
  },
  {
    id: 'webdev-MERN',
    title: 'Web Development with MERN & SQL',
    subtitle: 'MERN stack experiments',
    desc: 'A curated collection of MERN stack experiments and practice projects. Covers REST API design, JWT auth patterns, state management, and component architecture.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    accent: '#DB2777',
    accentLight: '#F472B6',
    github: 'https://github.com/sahitya1903/webdev-MERN',
    live: null,
    stats: [
      { label: 'Type', value: 'Mini Projects' },
      { label: 'Stack', value: 'MERN' },
      { label: 'Status', value: 'Ongoing' },
    ],
    category: ['Full-Stack', 'MERN'],
  },
  {
    id: 'leetcode-practice',
    title: 'LeetCode Practice',
    subtitle: 'Automated Sync Repository',
    desc: 'A collection of solutions to various LeetCode problems across multiple programming languages. Configured with a GitHub Actions workflow to automatically synchronize submissions from LeetCode daily.',
    tags: ['Java', 'Python', 'JavaScript', 'SQL', 'GitHub Actions'],
    accent: '#FFA116',
    accentLight: '#FFB84D',
    github: 'https://github.com/sahitya1903/leetcode-practice',
    live: null,
    stats: [
      { label: 'Type', value: 'DSA Practice' },
      { label: 'Sync Tool', value: 'leetcode-sync' },
      { label: 'Status', value: 'Ongoing' },
    ],
    category: ['DSA'],
  },
  {
    id: 'java-dsa',
    title: 'JavaDSA',
    subtitle: 'Data Structures & Algorithms',
    desc: 'A collection of Java programs ranging from basic language fundamentals to advanced data structure implementations for practice and learning purposes.',
    tags: ['Java', 'DSA', 'Algorithms'],
    accent: '#EA580C',
    accentLight: '#FB923C',
    github: 'https://github.com/sahitya1903/JavaDSA',
    live: null,
    stats: [
      { label: 'Type', value: 'DSA Practice' },
      { label: 'Language', value: 'Java' },
      { label: 'Status', value: 'Ongoing' },
    ],
    category: ['DSA', 'Java'],
  },
  {
    id: 'python-projects',
    title: 'Python Practice & Projects',
    subtitle: 'DSA & Mini Projects',
    desc: 'A curated collection of Python programs ranging from basic language fundamentals to advanced data structure implementations, mini-projects and university course assignments.',
    tags: ['Python', 'DSA'],
    accent: '#EAB308',
    accentLight: '#FDE047',
    github: 'https://github.com/sahitya1903/Python',
    live: null,
    stats: [
      { label: 'Type', value: 'Mini Projects' },
      { label: 'Language', value: 'Python 3.x' },
      { label: 'Status', value: 'Ongoing' },
    ],
    category: ['Python', 'DSA'],
  }
];

const FILTERS = ['All', 'Full-Stack', 'AI / ML', 'Frontend','DSA'];

/* ─────────────────────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────────────────────── */
const ProjectCard = ({ project, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.96 }}
    transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
  >
    <GlowCard sx={{ p: { xs: 3, md: 4 }, height: '100%' }} glowIntensity={0.7}>
      <Grid container spacing={3} alignItems="flex-start">
        {/* Left: Content */}
        <Grid size={{ xs: 12, md: 8 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1, flexWrap: 'wrap' }}>
            <Typography
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 600,
                fontSize: '1.25rem',
                color: 'text.primary',
              }}
            >
              {project.title}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: '0.78rem', color: project.accentLight, fontFamily: '"JetBrains Mono", monospace', mb: 1.5 }}>
            {project.subtitle}
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748B', mb: 2.5, lineHeight: 1.75, fontSize: '0.88rem' }}>
            {project.desc}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {project.tags.map((tag) => (
              <TechBadge key={tag} label={tag} color={project.accent} />
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              id={`project-${project.id}-github`}
              variant="outlined"
              size="small"
              startIcon={<GitHubIcon sx={{ fontSize: '15px !important' }} />}
              component="a"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontSize: '0.78rem' }}
            >
              Code
            </Button>
            {project.live && (
              <Button
                id={`project-${project.id}-live`}
                variant="contained"
                size="small"
                endIcon={<OpenInNewIcon sx={{ fontSize: '13px !important' }} />}
                component="a"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontSize: '0.78rem' }}
              >
                Live Demo
              </Button>
            )}
          </Box>
        </Grid>

        {/* Right: Stats */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{
            background: 'rgba(255,255,255,0.02)',
            border: `1px solid ${BORDER}`,
            borderRadius: '10px',
            p: 2.5,
          }}>
            {project.stats.map(({ label, value }) => (
              <Box
                key={label}
                sx={{
                  display: 'flex', justifyContent: 'space-between', py: 1,
                  borderBottom: `1px solid ${BORDER}`,
                  '&:last-child': { borderBottom: 'none', pb: 0 },
                }}
              >
                <Typography sx={{ fontSize: '0.75rem', color: '#475569', fontFamily: '"JetBrains Mono", monospace' }}>
                  {label}
                </Typography>
                <Typography sx={{ fontSize: '0.75rem', color: project.accentLight, fontFamily: '"JetBrains Mono", monospace', fontWeight: 600 }}>
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
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
          width: 500, height: 500, borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(VIOLET, 0.1)} 0%, transparent 65%)`,
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <SectionHeader
            label="All Work"
            title={<>Projects that <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #06B6D4)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ship value..</Box></>}
            // subtitle="A complete showcase of everything I've built — from full-stack web apps to AI/ML systems."
          />

          {/* Filter chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center', mb: 6 }}>
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <Chip
                    key={filter}
                    label={filter}
                    onClick={() => setActiveFilter(filter)}
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.75rem',
                      fontWeight: isActive ? 600 : 400,
                      cursor: 'pointer',
                      background: isActive ? alpha(VIOLET, 0.2) : 'transparent',
                      color: isActive ? VIOLET_LIGHT : '#64748B',
                      border: `1px solid ${isActive ? alpha(VIOLET, 0.6) : BORDER}`,
                      borderRadius: '8px',
                      height: 32,
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? `0 0 12px ${alpha(VIOLET, 0.25)}` : 'none',
                      '&:hover': {
                        background: alpha(VIOLET, 0.1),
                        color: VIOLET_LIGHT,
                        borderColor: alpha(VIOLET, 0.4),
                      },
                    }}
                  />
                );
              })}
            </Box>
          </motion.div>

          {/* Results count */}
          <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.72rem', color: '#475569' }}>
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
            <AnimatePresence mode="popLayout">
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
                    <Typography sx={{ color: '#475569', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.85rem' }}>
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
