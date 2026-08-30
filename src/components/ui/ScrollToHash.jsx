import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToHash — on navigation, smooth-scrolls to the element named by the URL
 * hash (once it's mounted), or jumps to the top when there's no hash. Renders
 * nothing; mount it once inside the router.
 */
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

export default ScrollToHash;
