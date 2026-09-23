import './App.css'
import Hero from './section/Hero'
import SkillsMarquee from './section/SkillsMarquee'
import Projects from './section/Projects'
import About from './section/About'

function App() {

  return (
    <div className="text-ink font-body bg-paper">
      <Hero />
      <SkillsMarquee />
      <Projects />
      <About />
    </div>
  )
}

export default App
