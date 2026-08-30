import { Box, Container } from '@mui/material';
import { alpha } from '@mui/material/styles';

import SectionHeader from '../../components/ui/SectionHeader';
import FadeIn from '../../components/ui/FadeIn';
import GlowCard from '../../components/ui/GlowCard';
import { SECTION_IDS } from '../../config/site';
import { VIOLET, VIOLET_LIGHT } from '../../theme/theme';
import useContactForm from './useContactForm';
import ContactForm from './ContactForm';
import ContactSuccess from './ContactSuccess';

/** ContactSection — "let's build something great together" + the EmailJS form. */
const ContactSection = () => {
  const { formRef, fields, errors, status, handleChange, handleSubmit, reset } = useContactForm();

  return (
    <Box
      component="section"
      id={SECTION_IDS.contact}
      sx={{ py: { xs: 3.5, md: 4.5 }, position: 'relative', overflow: 'hidden', background: 'transparent' }}
    >
      {/* Ambient orb */}
      <Box sx={{
        position: 'absolute', bottom: '10%', left: '-5%',
        width: 500, height: 500, borderRadius: '50%',
        background: `radial-gradient(circle, ${alpha(VIOLET, 0.05)} 0%, transparent 65%)`,
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title={<>Let's build something <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #06B6D4)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>great together..</Box></>}
        />

        <FadeIn delay={0.15}>
          <GlowCard sx={{ p: { xs: 3, md: 4 } }} glowIntensity={0.7}>
            {status === 'success' ? (
              <ContactSuccess onReset={reset} />
            ) : (
              <ContactForm
                formRef={formRef}
                fields={fields}
                errors={errors}
                status={status}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            )}
          </GlowCard>
        </FadeIn>
      </Container>
    </Box>
  );
};

export default ContactSection;
