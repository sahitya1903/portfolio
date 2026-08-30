import { useMemo, useState } from 'react';
import { Box, Container, Typography, Chip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { alpha } from '@mui/material/styles';

import GlowCard from '../components/ui/GlowCard';
import SectionHeader from '../components/ui/SectionHeader';
import ProjectCard from '../components/ui/ProjectCard';
import FilterChip from '../components/ui/FilterChip';
import { FILTER_KEYS, filterCounts, projectsForFilter } from '../data/projects';
import { VIOLET, VIOLET_LIGHT } from '../theme/theme';

/* ─────────────────────────────────────────────────────────────
   PROJECTS PAGE
───────────────────────────────────────────────────────────── */
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = useMemo(() => projectsForFilter(activeFilter), [activeFilter]);
  const counts = useMemo(() => filterCounts(), []);

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
              {FILTER_KEYS.map((filter) => (
                <FilterChip
                  key={filter}
                  label={filter}
                  count={counts[filter]}
                  isActive={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                />
              ))}
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
