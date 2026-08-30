import { Box, Container } from '@mui/material';

import SectionHeader from '../../components/ui/SectionHeader';
import { SECTION_IDS } from '../../config/site';
import { VIOLET_LIGHT } from '../../theme/theme';
import { EXPERIENCES } from './experience.data';
import TimelineLine from './TimelineLine';
import TimelineItem from './TimelineItem';

/** ExperienceSection — the "Journey & Milestones" two-column timeline. */
const ExperienceSection = () => (
  <Box component="section" id={SECTION_IDS.experience} sx={{ py: { xs: 3.5, md: 4.5 }, background: 'transparent' }}>
    <Container maxWidth="lg">
      <SectionHeader
        title={<>Journey & <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #10B981)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Milestones..</Box></>}
      />
      <Box sx={{ position: 'relative' }}>
        <TimelineLine />
        {EXPERIENCES.map((exp, i) => (
          <TimelineItem
            key={`${exp.title}-${i}`}
            exp={exp}
            index={i}
            isLast={i === EXPERIENCES.length - 1}
          />
        ))}
      </Box>
    </Container>
  </Box>
);

export default ExperienceSection;
