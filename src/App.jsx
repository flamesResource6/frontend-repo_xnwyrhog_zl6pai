import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} React Native Developer Portfolio</footer>
      </main>
    </div>
  )
}

export default App
