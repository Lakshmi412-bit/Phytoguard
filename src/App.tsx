import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Prediction from "./pages/Prediction";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/"           element={<Home />} />
      <Route path="/about"      element={<About />} />
      <Route path="/prediction" element={<Prediction />} />
      <Route path="/contact"    element={<Contact />} />
      <Route path="*"           element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
