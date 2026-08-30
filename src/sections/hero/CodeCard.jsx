import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import GlowCard from '../../components/ui/GlowCard';
import { REVEAL_EASE } from '../../hooks/useRevealOnce';
import { VIOLET_LIGHT, BORDER } from '../../theme/theme';

const CODE_LINES = [
  { indent: 0, color: '#A78BFA', text: 'const developer = {' },
  { indent: 1, color: '#94A3B8', text: <><Box component="span" sx={{ color: '#7DD3FC' }}>name</Box>: <Box component="span" sx={{ color: '#86EFAC' }}>"Sahitya Kushwaha"</Box>,</> },
  { indent: 1, color: '#94A3B8', text: <><Box component="span" sx={{ color: '#7DD3FC' }}>domain</Box>: <Box component="span" sx={{ color: '#86EFAC' }}>"sahitya.codes"</Box>,</> },
  { indent: 1, color: '#94A3B8', text: <><Box component="span" sx={{ color: '#7DD3FC' }}>role</Box>: <Box component="span" sx={{ color: '#86EFAC' }}>"Full-Stack Dev"</Box>,</> },
  { indent: 1, color: '#94A3B8', text: <><Box component="span" sx={{ color: '#7DD3FC' }}>stack</Box>: [<Box component="span" sx={{ color: '#86EFAC' }}>"React"</Box>, <Box component="span" sx={{ color: '#86EFAC' }}>"Node"</Box>],</> },
  { indent: 0, color: '#A78BFA', text: '};' },
  { indent: 0, color: '#A78BFA', text: <><Box component="span" sx={{ color: '#7DD3FC' }}>console</Box>.log(<Box component="span" sx={{ color: '#86EFAC' }}>"Ready to build!"</Box>);</> },
];

/** CodeCard — the floating "editor" card in the hero's right column. */
const CodeCard = () => (
  <motion.div
    initial={{ opacity: 0, x: 40, scale: 0.95 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 0.65, delay: 0.12, ease: REVEAL_EASE }}
  >
    <Box sx={{ animation: 'float 7s ease-in-out infinite', maxWidth: 380, ml: { md: 'auto' } }}>
      <GlowCard sx={{
        p: 2.5,
        background: 'linear-gradient(160deg, #0D0D18 0%, #090912 100%)',
        borderColor: BORDER,
        boxShadow: '0 24px 64px rgba(0,0,0,0.32), 0 8px 24px rgba(124,58,237,0.18)',
        '&:hover': { borderColor: 'rgba(124,58,237,0.45)' },
      }}>
        {/* Terminal header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 2.5 }}>
          {['#EF4444', '#F59E0B', '#10B981'].map((c) => (
            <Box key={c} sx={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.9 }} />
          ))}
          <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.63rem', color: '#334155', ml: 1.5 }}>
            sahitya.codes ~ main
          </Typography>
        </Box>

        {/* Code snippet */}
        <Box sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', lineHeight: 1.9 }}>
          {CODE_LINES.map((line, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                '&::before': {
                  content: `"${String(i + 1).padStart(2, ' ')}"`,
                  color: '#334155',
                  mr: 2.5,
                  fontSize: '0.68rem',
                  userSelect: 'none',
                  flexShrink: 0,
                  minWidth: '18px',
                },
              }}
            >
              <Box component="span" sx={{ color: line.color, pl: line.indent * 1.5 }}>{line.text}</Box>
            </Box>
          ))}
        </Box>

        {/* Cursor blink */}
        <Box sx={{
          display: 'inline-block', width: '2px', height: '15px',
          background: VIOLET_LIGHT, mt: 0.5, ml: 0.5,
          animation: 'cursor-blink 1.2s step-end infinite',
          verticalAlign: 'middle',
          borderRadius: '1px',
        }} />
      </GlowCard>
    </Box>
  </motion.div>
);

export default CodeCard;
