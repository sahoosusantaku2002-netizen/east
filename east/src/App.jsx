import { useScrollAnimation } from './hooks/useScrollAnimation';
import TopBar from './components/TopBar';
import NewsTicker from './components/NewsTicker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickAccessBar from './components/QuickAccessBar';
import Stats from './components/Stats';
import WelcomeSection from './components/WelcomeSection';
import About from './components/About';
import LeadershipMessage from './components/LeadershipMessage';
import NoticeBoard from './components/NoticeBoard';
import Announcements from './components/Announcements';
import Courses from './components/Courses';
import Facilities from './components/Facilities';
import Placements from './components/Placements';
import AchievementsAlumni from './components/AchievementsAlumni';
import Gallery from './components/Gallery';
import DirectionAndLinks from './components/DirectionAndLinks';
import QuickLinksBar from './components/QuickLinksBar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <NewsTicker />
      <Navbar />
      <Hero />
      <QuickAccessBar />
      <Stats />
      <WelcomeSection />
      <About />
      <LeadershipMessage />
      <NoticeBoard />
      <Announcements />
      <Courses />
      <Facilities />
      <Placements />
      <AchievementsAlumni />
      <Gallery />
      <DirectionAndLinks />
      <QuickLinksBar />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
