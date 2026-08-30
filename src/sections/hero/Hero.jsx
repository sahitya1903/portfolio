import { Box, Container, Grid } from '@mui/material';

import { SECTION_IDS } from '../../config/site';
import HeroIntro from './HeroIntro';
import CodeCard from './CodeCard';
import SkillsStrip from './SkillsStrip';
import StatsBar from './StatsBar';

/** Hero — the landing band: intro + code card, then skills marquee + stat row. */
const Hero = () => (
  <Box
    component="section"
    id={SECTION_IDS.hero}
    sx={{
      minHeight: { xs: 'auto', md: '92vh' },
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'transparent',
    }}
  >
    {/* Ambient orb — right (large) */}
    <Box sx={{
      position: 'absolute', top: '5%', right: '-10%',
      width: 750, height: 750,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)',
      filter: 'blur(60px)',
      animation: 'float 10s ease-in-out infinite',
      pointerEvents: 'none',
    }} />
    {/* Ambient orb — left */}
    <Box sx={{
      position: 'absolute', bottom: '5%', left: '-12%',
      width: 600, height: 600,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 65%)',
      filter: 'blur(55px)',
      animation: 'floatReverse 12s ease-in-out infinite',
      pointerEvents: 'none',
    }} />
    {/* Ambient orb — center bottom */}
    <Box sx={{
      position: 'absolute', bottom: '-15%', left: '30%',
      width: 500, height: 500,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(91,33,182,0.06) 0%, transparent 65%)',
      filter: 'blur(70px)',
      animation: 'floatSlow 15s ease-in-out infinite',
      pointerEvents: 'none',
    }} />

    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: { xs: 2, md: 0 } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 7 }}>
          <HeroIntro />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <CodeCard />
        </Grid>
      </Grid>

      <SkillsStrip />
      <StatsBar />
    </Container>
  </Box>
);

export default Hero;
