import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/home/Home.jsx';
import Gallery from './pages/gallery/Gallery.jsx';
import About from './pages/about/About.jsx';
import Layout from './pages/layout/Layout.jsx';
import Contact from './pages/contact/Contact.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="home" element={<Layout/>}>
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
