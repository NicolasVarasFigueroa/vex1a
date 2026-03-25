import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollToTop from "./components/ScrollToTop";

// Home sections
import Hero from "./sections/Hero";
import EnQueAyudamos from "./sections/EnQueAyudamos";
import VexiaFlow from "./sections/VexiaFlow";
import Resultados from "./sections/Resultados";


// Pages
import PlanesPage from "./pages/planes";
import Nosotros from "./pages/nosotros";
import SectoresPage from "./pages/sectores";
import Service from "./pages/service";

// Sector Pages (1 by 1)
import RestaurantesPage from "./pages/sectores/Restaurantes";
import ClinicasPage from "./pages/sectores/Clinicas";
import EcommercePage from "./pages/sectores/Ecommerce";
import ServiciosProfesionalesPage from "./pages/sectores/ServiciosProfesionales";
import EducacionPage from "./pages/sectores/Educacion";
import FinanzasPage from "./pages/sectores/Finanzas";

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
      <ScrollToTop />
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
              <Route path="/sectores" element={<SectoresPage />} />
              <Route path="/sectores/restaurantes" element={<RestaurantesPage />} />
              <Route path="/sectores/clinicas-salud" element={<ClinicasPage />} />
              <Route path="/sectores/ecommerce" element={<EcommercePage />} />
              <Route path="/sectores/servicios-profesionales" element={<ServiciosProfesionalesPage />} />
              <Route path="/sectores/educacion-cursos" element={<EducacionPage />} />
              <Route path="/sectores/finanzas-cobranzas" element={<FinanzasPage />} />
              <Route path="/service" element={<Service />} />

            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;