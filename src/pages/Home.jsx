import Hero from '../sections/hero/Hero';
import ProjectsPreview from '../sections/projects/ProjectsPreview';
import ExperienceSection from '../sections/experience/ExperienceSection';
import GitHubSection from '../sections/github/GitHubSection';
import ContactSection from '../sections/contact/ContactSection';

/** Home — the single-scroll landing page: every section in document order. */
const Home = () => (
  <>
    <Hero />
    <ProjectsPreview />
    <ExperienceSection />
    <GitHubSection />
    <ContactSection />
  </>
);

export default Home;
