
import { Header } from './components/header';
import { Footer } from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Services } from './pages/services';
import { Portfolio } from './pages/portfolio';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/"  element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
