import Layout from './layout/Layout';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';

import './App.css';
export default function App() {
  return (
    <div className="App">
      <h1>My Articles</h1>
      <Layout />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="articles/:id" element={<Article />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Outlet />
    </div>
  );
}
