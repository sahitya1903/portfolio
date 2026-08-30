import { useEffect, useState } from 'react';

/**
 * useScrollSpy — tracks which section is most visible in the viewport.
 *
 * Uses a single `IntersectionObserver` (off the main-thread scroll path) plus a
 * scroll fallback that snaps to the last section once the page is scrolled to
 * the bottom. Returns the active section id, or '' when disabled / none visible.
 *
 * @param {string[]} sectionIds - element ids to watch, in document order.
 * @param {{ enabled?: boolean }} options - `enabled: false` clears + skips work.
 */
const useScrollSpy = (sectionIds, { enabled = true } = {}) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (!enabled) {
      const timer = setTimeout(() => setActiveSection(''), 0);
      return () => clearTimeout(timer);
    }

    const lastId = sectionIds[sectionIds.length - 1];
    const visibilities = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilities[entry.target.id] = entry.isIntersecting ? entry.intersectionRect.height : 0;
        });

        let maxVisibleHeight = 0;
        let activeId = '';

        sectionIds.forEach((id) => {
          if (visibilities[id] > maxVisibleHeight) {
            maxVisibleHeight = visibilities[id];
            activeId = id;
          }
        });

        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120) {
          activeId = lastId;
        }

        setActiveSection(activeId);
      },
      {
        root: null,
        rootMargin: '-10% 0px -20% 0px',
        threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScrollFallback = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection(lastId);
      }
    };
    window.addEventListener('scroll', handleScrollFallback, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollFallback);
    };
  }, [enabled, sectionIds]);

  return activeSection;
};

export default useScrollSpy;
