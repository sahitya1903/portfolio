import { Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import Section from '../../components/ui/Section';
import SectionHeader from '../../components/ui/SectionHeader';
import FadeIn from '../../components/ui/FadeIn';
import ProjectCard from '../../components/ui/ProjectCard';
import { featuredProjects } from '../../data/projects';
import { SECTION_IDS } from '../../config/site';
import { VIOLET_LIGHT } from '../../theme/theme';

/** ProjectsPreview — the Home "featured work" teaser + link to the full archive. */
const ProjectsPreview = () => {
  const featured = featuredProjects();

  return (
    <Section id={SECTION_IDS.projects}>
      <SectionHeader
        title={<>Projects that <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #06B6D4)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ship value..</Box></>}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {featured.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.1}>
            <ProjectCard project={project} index={i} />
          </FadeIn>
        ))}
      </Box>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button
          id="view-all-projects"
          variant="contained"
          size="large"
          component={RouterLink}
          to="/projects"
          endIcon={<ArrowOutwardIcon />}
          sx={{ px: 4, py: 1.4, fontSize: '0.95rem', fontFamily: '"Playfair Display", serif' }}
        >
          View All Projects
        </Button>
      </Box>
    </Section>
  );
};

export default ProjectsPreview;
