import { Box, Button, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import Section from '../../components/ui/Section';
import SectionHeader from '../../components/ui/SectionHeader';
import FadeIn from '../../components/ui/FadeIn';
import GlowCard from '../../components/ui/GlowCard';
import { SITE, GITHUB_URL, SECTION_IDS } from '../../config/site';
import { VIOLET_LIGHT } from '../../theme/theme';
import GitHubStatCards from './GitHubStatCards';
import ContributionGraph from './ContributionGraph';
import GitHubWidgets from './GitHubWidgets';

/** GitHubSection — open-source footprint: stat cards, contribution graph, widgets. */
const GitHubSection = () => (
  <Section id={SECTION_IDS.github}>
    <SectionHeader
      title={<>Open source <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #10B981)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>footprint..</Box></>}
    />

    <GitHubStatCards />

    <FadeIn>
      <GlowCard sx={{ p: 3, overflow: 'hidden' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5, flexWrap: 'wrap', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <GitHubIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
            <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', color: 'text.secondary' }}>
              @{SITE.githubUsername}
            </Typography>
          </Box>
          <Button
            id="github-profile-link"
            variant="outlined"
            size="small"
            endIcon={<ArrowOutwardIcon sx={{ fontSize: '13px !important' }} />}
            component="a"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontSize: '0.78rem' }}
          >
            Visit Profile
          </Button>
        </Box>

        <ContributionGraph username={SITE.githubUsername} />
        <GitHubWidgets username={SITE.githubUsername} />
      </GlowCard>
    </FadeIn>
  </Section>
);

export default GitHubSection;
