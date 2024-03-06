import './App.css'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
  
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About/>
      <Portfolio/>
      <Skills/>
      <Resume/>
      <Contact/>
      <Footer/>     
      
    </div>
  )
}

export default App
