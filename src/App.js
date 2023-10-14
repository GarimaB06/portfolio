import './App.scss'
import './styles/projects-demo.scss'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DocketeerDemo from "./components/DocketeerDemo"
import BookCaseDemo from "./components/BookCaseDemo";
import PetParentDemo from "./components/PetParentDemo";
import FauxtionaryDemo from "./components/FauxtionaryDemo"
function App() {
  return (
    <div className="App">
      <main className="main">
        <Router>
          <Header/>
          <Routes>
          <Route path='/' element={
          <>
          <Home/>
          <About/>
          <Skills />
           <Work />
           <Testimonials />
          <Contact />
          </>}
          />
		      <Route path="/docketeer" element={<DocketeerDemo />}></Route>
					<Route path="/bookcase" element={<BookCaseDemo />}></Route>
					<Route path="/petparent" element={<PetParentDemo />}></Route>
          <Route path="/fauxtionary" element={<FauxtionaryDemo />}></Route>
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App
