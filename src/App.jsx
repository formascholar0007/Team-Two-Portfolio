import 'animate.css';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { Project } from './components/Project';
import { Numbox } from './components/Numbox';
import { Contact } from './components/Contact';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import OurVlog from './components/OurVlog';
import HireMe from './components/HireMe';
import Footerbar from './components/Footerbar';

function App() { 
  return (
    <>
     <Navbar />
      <Hero />
      <AboutMe />
      <Education />
      <Services />
      <Project/>
      <Numbox />
      <OurVlog />
      <HireMe />
      <Contact/>
      <Footerbar />
      
    </>
  )
}
export default App;
