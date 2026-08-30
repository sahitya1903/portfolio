/**
 * A nav link is active when we're on Home and its section is the scroll-spy
 * target, or when we're on its standalone route (hybrid routing).
 */
export const isNavLinkActive = (link, pathname, activeSection) => {
  const sectionId = link.hash.startsWith('/#') ? link.hash.slice(2) : null;
  if (pathname === '/' && sectionId) return activeSection === sectionId;
  return pathname === link.route;
};
