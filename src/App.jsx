import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import './App.css';
import AboutMe from './components/AboutMe';
import { Services } from './components/Services';

function App() {
 
  // const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
    </>
  )
}

export default App


