import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Container, Typography, Button, TextField, Grid, CircularProgress, Alert } from '@mui/material';
import { motion } from 'framer-motion';

import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import { alpha } from '@mui/material/styles';

import GlowCard from '../components/ui/GlowCard';
import SectionHeader from '../components/ui/SectionHeader';
import { VIOLET, VIOLET_LIGHT, BORDER } from '../theme/theme';

/* ─────────────────────────────────────────────────────────────
   EMAILJS CONFIG  — set these in your .env file:
     VITE_EMAILJS_SERVICE_ID
     VITE_EMAILJS_TEMPLATE_ID
     VITE_EMAILJS_PUBLIC_KEY
───────────────────────────────────────────────────────────── */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';



/* ─────────────────────────────────────────────────────────────
   FADE-IN WRAPPER
───────────────────────────────────────────────────────────── */
const FadeIn = ({ children, delay = 0, y = 24 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────
   CONTACT PAGE
───────────────────────────────────────────────────────────── */
const Contact = () => {
  const formRef = useRef(null);
  const [fields, setFields] = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const validate = () => {
    const e = {};
    if (!fields.from_name.trim()) e.from_name = 'Name is required';
    if (!fields.from_email.trim()) e.from_email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(fields.from_email)) e.from_email = 'Enter a valid email';
    if (!fields.subject.trim()) e.subject = 'Subject is required';
    if (!fields.message.trim()) e.message = 'Message is required';
    else if (fields.message.trim().length < 20) e.message = 'Message should be at least 20 characters';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('sending');
    try {
      console.log('EmailJS Config being used:', {
        SERVICE_ID: SERVICE_ID ? 'Loaded' : 'Missing',
        TEMPLATE_ID: TEMPLATE_ID ? 'Loaded' : 'Missing',
        PUBLIC_KEY: PUBLIC_KEY ? `Loaded (${PUBLIC_KEY.length} chars)` : 'Missing'
      });
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      setFields({ from_name: '', from_email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus(err?.text || err?.message || 'Unknown error occurred');
    }
  };

  return (
    <>
      <Box
        component="section"
        id="contact"
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          background: (theme) => theme.palette.mode === 'dark' ? 'transparent' : 'linear-gradient(180deg, #FFFFFF 0%, #F8F7FF 100%)',
          borderTop: 'none',
        }}
      >        {/* Ambient orb */}
        <Box sx={{
          position: 'absolute', bottom: '10%', left: '-5%',
          width: 500, height: 500, borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(VIOLET, 0.05)} 0%, transparent 65%)`,
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <SectionHeader
            label="Contact"
            title={<>Let's build something <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #06B6D4)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>great together..</Box></>}
          />

          <FadeIn delay={0.15}>
            <Box sx={{ maxWidth: 760, mx: 'auto' }}>
              <GlowCard sx={{ p: { xs: 3, md: 4 } }} glowIntensity={0.7}>
                {status === 'success' ? (
                  /* ── Success state ── */
                  <Box sx={{ textAlign: 'center', py: 6 }}>
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    >
                      <CheckCircleOutlineIcon sx={{ fontSize: 64, color: '#10B981', mb: 2 }} />
                    </motion.div>
                    <Typography variant="h3" sx={{ color: 'text.primary', mb: 1.5 }}>
                      Message sent!
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </Typography>
                    <Button
                      variant="outlined"
                      onClick={() => setStatus('idle')}
                      sx={{ px: 4 }}
                    >
                      Send another message
                    </Button>
                  </Box>
                ) : (
                  /* ── Form ── */
                  <>
                    <Typography
                      sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 600,
                        fontSize: '1.25rem',
                        color: 'text.primary',
                        mb: 0.5,
                      }}
                    >
                      Send a message
                    </Typography>
                    <Typography sx={{ fontSize: '0.82rem', color: 'text.secondary', mb: 3.5 }}>
                      Fill in the details below and I'll get back to you soon.
                    </Typography>

                    {status !== 'idle' && status !== 'sending' && status !== 'success' && (
                      <Alert
                        severity="error"
                        sx={{ mb: 3, background: alpha('#EF4444', 0.08), border: `1px solid ${alpha('#EF4444', 0.3)}`, color: '#FCA5A5', borderRadius: '8px' }}
                      >
                        Error: {status}. Please try emailing me directly at sahitya7985@gmail.com
                      </Alert>
                    )}

                    <Box
                      component="form"
                      ref={formRef}
                      onSubmit={handleSubmit}
                      sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
                      noValidate
                    >
                      <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Your Name"
                            name="from_name"
                            value={fields.from_name}
                            onChange={handleChange}
                            error={!!errors.from_name}
                            helperText={errors.from_name}
                            autoComplete="name"
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Email Address"
                            name="from_email"
                            type="email"
                            value={fields.from_email}
                            onChange={handleChange}
                            error={!!errors.from_email}
                            helperText={errors.from_email}
                            autoComplete="email"
                          />
                        </Grid>
                      </Grid>

                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={fields.subject}
                        onChange={handleChange}
                        error={!!errors.subject}
                        helperText={errors.subject}
                      />

                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={6}
                        value={fields.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message || `${fields.message.length} / 2000`}
                        inputProps={{ maxLength: 2000 }}
                      />

                      <Button
                        id="contact-submit"
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={status === 'sending'}
                        endIcon={status === 'sending' ? <CircularProgress size={16} color="inherit" /> : <SendIcon sx={{ fontSize: '16px !important' }} />}
                        sx={{ alignSelf: 'flex-start', px: 4, py: 1.4, fontSize: '0.95rem', fontFamily: '"Playfair Display", serif' }}
                      >
                        {status === 'sending' ? 'Sending…' : 'Send Message'}
                      </Button>
                    </Box>
                  </>
                )}
              </GlowCard>
            </Box>
          </FadeIn>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
