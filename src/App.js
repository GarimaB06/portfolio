import './App.scss'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}

export default App
