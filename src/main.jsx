import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Import Inter locally (all required weights)
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';

// Import JetBrains Mono locally (all required weights)
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/jetbrains-mono/600.css';

createRoot(document.getElementById('root')).render(
  <App />
)
