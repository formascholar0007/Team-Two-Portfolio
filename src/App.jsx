import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { Project } from './components/Project';
import { Numbox } from './components/Numbox';
import { Contact } from './components/Contact';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import './App.css';
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
      <Contact/>
    </>
  )
}
export default App;


