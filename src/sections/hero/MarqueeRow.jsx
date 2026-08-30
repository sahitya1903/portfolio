import { Box } from '@mui/material';
import SkillIcon from './SkillIcon';

/**
 * MarqueeRow — renders `items` twice side by side and translates -50% on loop,
 * for a seamless infinite scroll. Respects prefers-reduced-motion.
 */
const MarqueeRow = ({ items, reverse = false, duration = 46 }) => {
  const group = (key) => (
    <Box
      key={key}
      aria-hidden={key === 'b'}
      sx={{ display: 'flex', alignItems: 'center', gap: 3, pr: 3, flexShrink: 0 }}
    >
      {items.map((s, i) => (
        <SkillIcon key={i} Icon={s.Icon} color={s.color} label={s.label} />
      ))}
    </Box>
  );

  return (
    <Box
      className="marquee-row"
      sx={{
        display: 'flex',
        width: 'max-content',
        animation: `marquee ${duration}s linear infinite${reverse ? ' reverse' : ''}`,
        '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
      }}
    >
      {group('a')}
      {group('b')}
    </Box>
  );
};

export default MarqueeRow;
