import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Header from './components/common/header/header';
import Footer from './components/common/footer/Footer';

function App() {

  return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
            </Routes>
          </main>

          <Footer />
        </div>

        
      </Router>
  )
}

export default App;
