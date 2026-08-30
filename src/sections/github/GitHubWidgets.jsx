import { Box } from '@mui/material';

/** GitHubWidgets — the remote stat-summary + top-languages cards. */
const GitHubWidgets = ({ username }) => (
  <Box sx={{ mt: 3, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
    <Box
      component="img"
      loading="lazy"
      src={`https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${username}&theme=transparent`}
      alt="GitHub Stats"
      onError={(e) => { e.currentTarget.style.display = 'none'; }}
      sx={{
        width: '100%',
        maxWidth: { xs: '380px', sm: '450px' },
        height: { xs: '140px', sm: '185px' },
        display: 'block',
        margin: '0 auto',
        objectFit: 'contain',
      }}
    />
    <Box
      component="img"
      loading="lazy"
      src={`https://github-readme-stats-fast.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=006AFF&text_color=94A3B8&bg_color=00000000`}
      alt="Top Languages"
      onError={(e) => { e.currentTarget.style.display = 'none'; }}
      sx={{
        width: '100%',
        maxWidth: { xs: '380px', sm: '380px' },
        height: { xs: '140px', sm: '185px' },
        display: 'block',
        margin: '0 auto',
        objectFit: 'contain',
      }}
    />
  </Box>
);

export default GitHubWidgets;
