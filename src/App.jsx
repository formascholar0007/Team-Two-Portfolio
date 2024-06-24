import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import AboutMe from './components/AboutMe';
import { Services } from './components/Services';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import './App.css';
function App() { 
  return (
    <>
     <Navbar />
      <Hero />
      <AboutMe />
      <Hero />
      <AboutMe />
      <Education />
      <Services />

    </>
  )
}
export default App;


