import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import Contact from '@/pages/Contact';
import Explore from '@/pages/Explore';

export default function App() {
  useEffect(() => {
    const handleLinkClick = async (e) => {
      const link = e.target.closest('a');
      
      // Ignore non-links, external links, new tabs, or React Router internal links
      if (!link || link.origin !== window.location.origin || link.target === '_blank') return;

      // ONLY intercept links meant for PHP endpoints (e.g., links ending in .php or specific backend paths)
      const isPhpRoute = link.pathname.endsWith('.php') || link.classList.contains('php-link');
      if (!isPhpRoute) return;

      e.preventDefault();

      try {
        const response = await fetch(link.href);
        const html = await response.text();
        
        const container = document.getElementById('content-area');
        if (container) {
          container.innerHTML = html;
          window.history.pushState(null, '', link.href);
        }
      } catch (err) {
        console.error('PHP page load failed:', err);
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <BrowserRouter>
      <div id="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explores" element={<Explore />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}