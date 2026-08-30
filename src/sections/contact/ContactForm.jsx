import { Box, Typography, Button, TextField, Grid, CircularProgress, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { alpha } from '@mui/material/styles';

import { SITE } from '../../config/site';

/** ContactForm — the message form itself (fields, validation display, submit). */
const ContactForm = ({ formRef, fields, errors, status, onChange, onSubmit }) => {
  const isError = status !== 'idle' && status !== 'sending' && status !== 'success';

  return (
    <>
      <Typography sx={{
        fontFamily: '"Playfair Display", serif',
        fontWeight: 600,
        fontSize: '1.25rem',
        color: 'text.primary',
        mb: 0.5,
      }}>
        Send a message
      </Typography>

      {isError && (
        <Alert
          severity="error"
          sx={{ mb: 3, background: alpha('#EF4444', 0.08), border: `1px solid ${alpha('#EF4444', 0.3)}`, color: '#FCA5A5', borderRadius: '8px' }}
        >
          Error: {status}. Please try emailing me directly at {SITE.email}
        </Alert>
      )}

      <Box component="form" ref={formRef} onSubmit={onSubmit} noValidate>
        <Grid container spacing={2.5} alignItems="stretch">
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, height: '100%' }}>
              <TextField
                fullWidth label="Your Name" name="from_name"
                value={fields.from_name} onChange={onChange}
                error={!!errors.from_name} helperText={errors.from_name}
                autoComplete="name"
              />
              <TextField
                fullWidth label="Email Address" name="from_email" type="email"
                value={fields.from_email} onChange={onChange}
                error={!!errors.from_email} helperText={errors.from_email}
                autoComplete="email"
              />
              <TextField
                fullWidth label="Subject" name="subject"
                value={fields.subject} onChange={onChange}
                error={!!errors.subject} helperText={errors.subject}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }} sx={{ display: 'flex' }}>
            <TextField
              fullWidth label="Message" name="message" multiline minRows={7}
              value={fields.message} onChange={onChange}
              error={!!errors.message}
              helperText={errors.message || `${fields.message.length} / 2000`}
              inputProps={{ maxLength: 2000 }}
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                '& .MuiInputBase-root': { flexGrow: 1, alignItems: 'flex-start' },
                '& .MuiInputBase-inputMultiline': {
                  boxSizing: 'border-box',
                  height: { xs: 'auto', md: '100% !important' },
                },
              }}
            />
          </Grid>

          <Grid size={12}>
            <Button
              id="contact-submit"
              type="submit"
              variant="contained"
              size="large"
              disabled={status === 'sending'}
              endIcon={status === 'sending' ? <CircularProgress size={16} color="inherit" /> : <SendIcon sx={{ fontSize: '16px !important' }} />}
              sx={{ px: 4, py: 1.4, fontSize: '0.95rem', fontFamily: '"Playfair Display", serif' }}
            >
              {status === 'sending' ? 'Sending…' : 'Send'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ContactForm;
