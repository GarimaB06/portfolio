import './App.scss'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import WebProjects from "./WebProjects";
import DocketeerDemo from "./components/DocketeerDemo"
import BookCaseDemo from "./components/BookCaseDemo";
import PetParentDemo from "./components/PetParentDemo";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        {/* <Home />
        <About />
        <Skills />
        <Work />
        <Testimonials />
        <Contact /> */}
        {/* <WebProjects/> */}
        	<Router>
				<div>
					<Link to="/docketeer">
						Docketeer
						<i className="bx bx-right-arrow-alt work__button-icon"></i>
					</Link>
					<Link to="/bookcase">
						MyBookcase
						<i className="bx bx-right-arrow-alt work__button-icon"></i>
					</Link>
					<Link to="/petparent">
						Pet Parent
						<i className="bx bx-right-arrow-alt work__button-icon"></i>
					</Link>
				</div>
				<Routes>
          <Route exact path='/' element={<>
           <Home />
        <About />
        <Skills />
        <Work />
        <Testimonials />
        <Contact />
          </>}></Route>
					<Route path="/docketeer" element={<DocketeerDemo />}></Route>
					<Route path="/bookcase" element={<BookCaseDemo />}></Route>
					<Route path="/petparent" element={<PetParentDemo />}></Route>
				</Routes>
			</Router>
      </main>
    </div>
  )
}

export default App
