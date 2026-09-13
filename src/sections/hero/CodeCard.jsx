import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

import GlowCard from '../../components/ui/GlowCard';
import { REVEAL_EASE } from '../../hooks/useRevealOnce';

/** CodeCard — the floating "editor" card in the hero's right column. */
const CodeCard = () => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;

  const codeTokens = {
    keyword: '#2563EB', // Cobalt
    identifier: '#0369A1', // Sky Blue
    string: '#047857', // Emerald
    text: '#334155', // Slate
    gutter: '#64748B',
  };

  const codeLines = [
    { indent: 0, color: codeTokens.keyword, text: 'const developer = {' },
    {
      indent: 1,
      color: codeTokens.text,
      text: (
        <>
          <Box component="span" sx={{ color: codeTokens.identifier }}>name</Box>: <Box component="span" sx={{ color: codeTokens.string }}>"Sahitya Kushwaha"</Box>,
        </>
      ),
    },
    {
      indent: 1,
      color: codeTokens.text,
      text: (
        <>
          <Box component="span" sx={{ color: codeTokens.identifier }}>domain</Box>: <Box component="span" sx={{ color: codeTokens.string }}>"sahitya.codes"</Box>,
        </>
      ),
    },
    {
      indent: 1,
      color: codeTokens.text,
      text: (
        <>
          <Box component="span" sx={{ color: codeTokens.identifier }}>role</Box>: <Box component="span" sx={{ color: codeTokens.string }}>"Full-Stack Dev"</Box>,
        </>
      ),
    },
    {
      indent: 1,
      color: codeTokens.text,
      text: (
        <>
          <Box component="span" sx={{ color: codeTokens.identifier }}>stack</Box>: [<Box component="span" sx={{ color: codeTokens.string }}>"React"</Box>, <Box component="span" sx={{ color: codeTokens.string }}>"Node"</Box>],
        </>
      ),
    },
    { indent: 0, color: codeTokens.keyword, text: '};' },
    {
      indent: 0,
      color: codeTokens.keyword,
      text: (
        <>
          <Box component="span" sx={{ color: codeTokens.identifier }}>console</Box>.log(<Box component="span" sx={{ color: codeTokens.string }}>"Ready to build!"</Box>);
        </>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.65, delay: 0.12, ease: REVEAL_EASE }}
    >
      <Box sx={{ animation: 'float 7s ease-in-out infinite', maxWidth: 380, ml: { md: 'auto' } }}>
        <GlowCard
          sx={{
            p: 2.5,
            background: 'linear-gradient(160deg, #FFFFFF 0%, #F8FAFC 100%)',
            borderColor: 'rgba(15, 23, 42, 0.08)',
            boxShadow: '0 20px 48px rgba(37,99,235,0.08), 0 4px 12px rgba(0,0,0,0.04)',
            '&:hover': {
              borderColor: 'rgba(37,99,235,0.45)',
            },
          }}
        >
          {/* Terminal header */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 2.5 }}>
            {['#EF4444', '#F59E0B', '#10B981'].map((c) => (
              <Box key={c} sx={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.9 }} />
            ))}
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.63rem',
                color: '#64748B',
                ml: 1.5,
              }}
            >
              sahitya.codes ~ main
            </Typography>
          </Box>

          {/* Code snippet */}
          <Box sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', lineHeight: 1.9 }}>
            {codeLines.map((line, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  '&::before': {
                    content: `"${String(i + 1).padStart(2, ' ')}"`,
                    color: codeTokens.gutter,
                    mr: 2.5,
                    fontSize: '0.68rem',
                    userSelect: 'none',
                    flexShrink: 0,
                    minWidth: '18px',
                  },
                }}
              >
                <Box component="span" sx={{ color: line.color, pl: line.indent * 1.5 }}>
                  {line.text}
                </Box>
              </Box>
            ))}
          </Box>

          {/* Cursor blink */}
          <Box
            sx={{
              display: 'inline-block',
              width: '2px',
              height: '15px',
              background: primaryColor,
              mt: 0.5,
              ml: 0.5,
              animation: 'cursor-blink 1.2s step-end infinite',
              verticalAlign: 'middle',
              borderRadius: '1px',
            }}
          />
        </GlowCard>
      </Box>
    </motion.div>
  );
};

export default CodeCard;
