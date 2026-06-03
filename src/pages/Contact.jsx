import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Container, Typography, Button, TextField, Grid, CircularProgress, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
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

const SOCIAL_ITEMS = [
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    value: '@sahitya1903',
    href: 'https://github.com/sahitya1903',
    color: '#F8FAFC',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'sahityakushwaha',
    href: 'https://linkedin.com/in/sahityakushwaha',
    color: '#0A66C2',
  },
  {
    icon: <EmailOutlinedIcon />,
    label: 'Email',
    value: 'sahitya7985@gmail.com',
    href: 'mailto:sahitya7985@gmail.com',
    color: VIOLET_LIGHT,
  },
];

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
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      setFields({ from_name: '', from_email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <Box component="main">
      <Box
        component="section"
        sx={{ py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}
      >
        {/* Ambient orb */}
        <Box sx={{
          position: 'absolute', bottom: '10%', left: '-5%',
          width: 500, height: 500, borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(VIOLET, 0.1)} 0%, transparent 65%)`,
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <SectionHeader
            label="Contact"
            title={<>Let's build something <Box component="span" sx={{ background: `linear-gradient(135deg, ${VIOLET_LIGHT}, #06B6D4)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>great together</Box></>}
            subtitle="Have a project in mind, want to collaborate, or just want to chat about tech? I'd love to hear from you."
          />

          <Grid container spacing={4}>
            {/* Left — contact info */}
            <Grid size={{ xs: 12, md: 4 }}>
              <FadeIn delay={0.1}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {/* Availability pill */}
                  <GlowCard sx={{ p: 3 }} glowIntensity={0.6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                      <Box sx={{
                        width: 10, height: 10, borderRadius: '50%',
                        background: '#10B981', boxShadow: '0 0 8px #10B981',
                        animation: 'pulse-glow 2s infinite',
                        flexShrink: 0,
                      }} />
                      <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#94A3B8' }}>
                        Open to opportunities
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.7 }}>
                      I'm currently looking for internships and collaboration opportunities. My response time is usually within 24 hours.
                    </Typography>
                  </GlowCard>

                  {/* Social links */}
                  {SOCIAL_ITEMS.map((item, i) => (
                    <FadeIn key={item.label} delay={0.15 + i * 0.08}>
                      <Box
                        component="a"
                        href={item.href}
                        target={item.label !== 'Email' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        sx={{ textDecoration: 'none', display: 'block' }}
                      >
                        <GlowCard sx={{ p: 2.5, cursor: 'pointer' }} glowIntensity={0.5}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box sx={{
                              width: 38, height: 38, borderRadius: '10px',
                              background: alpha(item.color === '#F8FAFC' ? VIOLET : item.color, 0.1),
                              border: `1px solid ${alpha(item.color === '#F8FAFC' ? VIOLET : item.color, 0.25)}`,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              color: item.color === '#F8FAFC' ? '#94A3B8' : item.color,
                              '& svg': { fontSize: 18 },
                              flexShrink: 0,
                            }}>
                              {item.icon}
                            </Box>
                            <Box>
                              <Typography sx={{ fontSize: '0.7rem', color: '#475569', fontFamily: '"JetBrains Mono", monospace', mb: 0.1 }}>
                                {item.label}
                              </Typography>
                              <Typography sx={{ fontSize: '0.82rem', fontWeight: 500, color: '#94A3B8' }}>
                                {item.value}
                              </Typography>
                            </Box>
                          </Box>
                        </GlowCard>
                      </Box>
                    </FadeIn>
                  ))}

                  {/* Note */}
                  <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem', color: '#334155', textAlign: 'center', pt: 1 }}>
                    sahitya.codes · Class of 2026
                  </Typography>
                </Box>
              </FadeIn>
            </Grid>

            {/* Right — contact form */}
            <Grid size={{ xs: 12, md: 8 }}>
              <FadeIn delay={0.2}>
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
                      <Typography variant="body1" sx={{ color: '#64748B', mb: 4 }}>
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
                      <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: 'text.primary', mb: 0.5 }}>
                        Send a message
                      </Typography>
                      <Typography sx={{ fontSize: '0.82rem', color: '#475569', mb: 3.5 }}>
                        Fill in the details below and I'll get back to you soon.
                      </Typography>

                      {status === 'error' && (
                        <Alert
                          severity="error"
                          sx={{ mb: 3, background: alpha('#EF4444', 0.08), border: `1px solid ${alpha('#EF4444', 0.3)}`, color: '#FCA5A5', borderRadius: '8px' }}
                        >
                          Something went wrong. Please try emailing me directly at sahitya7985@gmail.com
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
                          sx={{ alignSelf: 'flex-start', px: 4, py: 1.4, fontSize: '0.95rem' }}
                        >
                          {status === 'sending' ? 'Sending…' : 'Send Message'}
                        </Button>
                      </Box>
                    </>
                  )}
                </GlowCard>
              </FadeIn>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
