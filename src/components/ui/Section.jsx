import { Box, Container } from '@mui/material';

/**
 * Section — a Home-page section band: a semantic <section> with a stable id
 * (for hash links + scroll-spy), consistent vertical rhythm, and a centered
 * `lg` container.
 */
const Section = ({ children, id, sx = {}, containerSx = {} }) => (
  <Box component="section" id={id} sx={{ py: { xs: 3.5, md: 4.5 }, ...sx }}>
    <Container maxWidth="lg" sx={containerSx}>
      {children}
    </Container>
  </Box>
);

export default Section;
