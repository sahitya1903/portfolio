import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';

/** ContactSuccess — the post-submit confirmation state. */
const ContactSuccess = ({ onReset }) => (
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
    <Button variant="outlined" onClick={onReset} sx={{ px: 4 }}>
      Send another message
    </Button>
  </Box>
);

export default ContactSuccess;
