import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './css/style.css';
import App from './App.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

// Helper component to handle GitHub Pages 404 redirection query string
function RouterFixer() {
  const queryParams = new URLSearchParams(window.location.search);
  const p = queryParams.get('p');
  if (p) {
    window.history.replaceState(null, null, window.location.pathname + '#' + p);
    // Alternatively, if using standard BrowserRouter path mapping:
    window.history.replaceState(null, null, '/km-store' + p);
  }
  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* basename tells React Router to strip /km-store/ out of the URL matching */}
    <BrowserRouter basename="/km-store">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);