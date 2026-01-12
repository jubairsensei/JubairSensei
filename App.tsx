import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Shared';
import Home from './pages/Home';
import { About, Resources, Projects, Blog } from './pages/ContentPages';
import { Community, Donation, Contact } from './pages/InteractionPages';
import { BRAND_NAME } from './constants';

// SEO Helper Component to handle title changes
const SeoHead = () => {
  const location = useLocation();

  useEffect(() => {
    let title = BRAND_NAME;
    switch(location.pathname) {
      case '/': title = `${BRAND_NAME} | Hack, Learn, Dominate!`; break;
      case '/about': title = `About | ${BRAND_NAME}`; break;
      case '/resources': title = `Resources | ${BRAND_NAME}`; break;
      case '/projects': title = `Projects | ${BRAND_NAME}`; break;
      case '/community': title = `Community | ${BRAND_NAME}`; break;
      case '/blog': title = `Blog | ${BRAND_NAME}`; break;
      case '/donate': title = `Support | ${BRAND_NAME}`; break;
      case '/contact': title = `Contact | ${BRAND_NAME}`; break;
      default: title = BRAND_NAME;
    }
    document.title = title;
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <SeoHead />
      <div className="flex flex-col min-h-screen bg-cyber-black text-white font-sans selection:bg-cyber-green selection:text-cyber-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/community" element={<Community />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/donate" element={<Donation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
