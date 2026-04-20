import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Features from "./page/Features";
import About from "./page/About";
import Price from "./page/Price";
import Blogs from "./page/Blogs";
import useLenis from "./hooks/useLenis";
import ScrollToTop from "./hooks/ScrollToTop";


function App() {
  useLenis();
  return (
      <div >
        <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>
      </div>
  );
}

export default App;