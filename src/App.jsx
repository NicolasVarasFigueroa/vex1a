import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

// Home sections
import Hero from "./sections/Hero";
import EnQueAyudamos from "./sections/EnQueAyudamos";
import VexiaFlow from "./sections/VexiaFlow";
import Resultados from "./sections/Resultados";
import SectoresSection from "./sections/Sectores";
import PlanesSection from "./sections/Planes";

// Pages
import PlanesPage from "./pages/Planes";
import Nosotros from "./pages/Nosotros";
import Soluciones from "./pages/solution"; 
import SectoresPage from "./pages/Sectores";


function HomePage() {
  return (
    <>
      <Hero />
      <VexiaFlow />
      <EnQueAyudamos />
      <Resultados />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen text-white relative" style={{ backgroundColor: "#05060A" }}>
        <AnimatedBackground />

        <div className="relative z-10">
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />

              {/* Pages */}
              <Route path="/planes" element={<PlanesPage />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/solution" element={<Soluciones />} />
              <Route path="/sectores" element={<SectoresPage />} />

            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;