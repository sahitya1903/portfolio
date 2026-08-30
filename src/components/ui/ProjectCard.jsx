import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { alpha } from '@mui/material/styles';

import GlowCard from './GlowCard';
import TechBadge from './TechBadge';
import { REVEAL_EASE } from '../../hooks/useRevealOnce';
import { BORDER } from '../../theme/theme';

const linkSx = (color) => ({
  display: 'inline-flex', alignItems: 'center', gap: 0.6, textDecoration: 'none',
  fontFamily: '"JetBrains Mono", monospace', fontSize: '0.76rem', color,
  transition: 'color 0.2s ease', '&:hover': { color: 'text.primary' },
});

/**
 * ProjectCard — one entry in the /projects archive: accent rail, title with
 * serial badge, clamped blurb, tech chips, and Code / Live-demo links.
 */
const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4, delay: Math.min(index, 8) * 0.05, ease: REVEAL_EASE }}
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
              sx={linkSx('text.secondary')}
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
                sx={linkSx(project.accent)}
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

export default ProjectCard;
