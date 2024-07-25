import './App.scss';
import './styles/projects-demo.scss';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DocketeerDemo from "./components/DocketeerDemo";
import BookCaseDemo from "./components/BookCaseDemo";
import MaterialPlaygroundDemo from './components/MaterialPlaygroundDemo';
import FauxtionaryDemo from "./components/FauxtionaryDemo";
import CinemaScapeDemo from './components/CinemaScapeDemo';
import HelpdeskDemo from './components/HelpdeskDemo';
import WebcrawlDemo from './components/WebcrawlDemo';
import Carousel from './components/Carousel'; // Ensure this path is correct
import { ProjectsContent } from './components/Content'; // Ensure this path is correct

function App() {
  return (
    <div className="App">
      <main className="main">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={
              <>
                <Home />
                <About />
                <Skills />
                <Work />
                <Testimonials />
                <Contact />
                <Carousel items={ProjectsContent} />
              </>
            } />
            <Route path="/docketeer" element={<DocketeerDemo />} />
            <Route path="/bookcase" element={<BookCaseDemo />} />
            <Route path="/materialplayground" element={<MaterialPlaygroundDemo />} />
            <Route path="/fauxtionary" element={<FauxtionaryDemo />} />
            <Route path="/cinemascape" element={<CinemaScapeDemo />} />
            <Route path="/helpdesk" element={<HelpdeskDemo />} />
            <Route path="/webcrawl" element={<WebcrawlDemo />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
