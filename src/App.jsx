import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Contact from './pages/contact/Contact.jsx';
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import Books from './pages/books/Books.jsx';
import Header from './components/common/header/Header.jsx';
import Footer from './components/common/footer/Footer.jsx';

function App() {

  return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path='/books' element={<Books />}/>
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>

        
      </Router>
  )
}

export default App;
