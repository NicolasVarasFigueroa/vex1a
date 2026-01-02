import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './sections/Hero';
import EnQueAyudamos from './sections/EnQueAyudamos';
import Resultados from './sections/Resultados';
import Sectores from './sections/Sectores';
import Planes from './sections/Planes';
import SectorLayout from './sections/sectores/SectorLayout';

function HomePage() {
    return (
        <>
            <Hero />
            <EnQueAyudamos />
            <Sectores />
            <Resultados />
            <Planes />
        </>
    );
}

function App() {
    return (
        <Router>
            <div className="min-h-screen text-white relative" style={{ backgroundColor: '#05060A' }}>
                <AnimatedBackground />

                <div className="relative z-10">
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/sectores/:slug" element={<SectorLayout />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
