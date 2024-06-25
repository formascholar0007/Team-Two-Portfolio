import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import AboutMe from './components/AboutMe';
import { Services } from './components/Services';
import Education from './components/Education';
import OurVlog from './components/OurVlog';
import HireMe from './components/HireMe';
function App() { 
  return (
    <>
     <Navbar />
      <Hero />
      <AboutMe />
      <Education />
      <Services />
      <OurVlog />
      <HireMe />

    </>
  )
}
export default App;


