import { Grid, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';

import GlowCard from '../../components/ui/GlowCard';
import FadeIn from '../../components/ui/FadeIn';
import AnimatedCounter from '../../components/ui/AnimatedCounter';
import { GITHUB_STATS } from './github.data';

/** GitHubStatCards — the four count-up stat cards (contributions, repos, …). */
const GitHubStatCards = () => (
  <Grid container spacing={3} sx={{ mb: 4 }}>
    {GITHUB_STATS.map((stat, i) => (
      <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
        <FadeIn delay={i * 0.04}>
          <GlowCard sx={{ p: 3, textAlign: 'center' }}>
            <Typography sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '2rem', fontWeight: 700,
              color: stat.color,
              mb: 0.5,
              textShadow: `0 0 20px ${alpha(stat.color, 0.4)}`,
            }}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </Typography>
            <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary' }}>
              {stat.label}
            </Typography>
          </GlowCard>
        </FadeIn>
      </Grid>
    ))}
  </Grid>
);

export default GitHubStatCards;
