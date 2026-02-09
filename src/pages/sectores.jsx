// src/pages/Sectores.jsx
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Building2,
  Heart,
  ShoppingCart,
  Briefcase,
  GraduationCap,
  Wallet,
} from "lucide-react";

const LazyVideo = ({ src, isHovered }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
        isHovered ? "opacity-80 scale-105" : "opacity-40 scale-100"
      }`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

const SectorCard = ({ sector, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = sector.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <button
        type="button"
        onClick={onClick}
        className="relative block w-full text-left rounded-xl overflow-hidden h-48 sm:h-60 lg:h-72"
      >
        <motion.div className="relative h-full" whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
          <LazyVideo src={sector.video} isHovered={isHovered} />

          <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/70 to-[#05060A]/30" />

          <motion.div
            className="absolute inset-0 rounded-xl"
            style={{ border: "1px solid rgba(37,99,235,0.1)" }}
            animate={{
              borderColor: isHovered ? "rgba(37,99,235,0.35)" : "rgba(37,99,235,0.1)",
              boxShadow: isHovered
                ? "0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(37,99,235,0.08)"
                : "none",
            }}
            transition={{ duration: 0.3 }}
          />

          <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between z-10">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: "rgba(37,99,235,0.1)",
                border: "1px solid rgba(37,99,235,0.2)",
              }}
            >
              <Icon className="w-4 h-4 text-[#3B82F6]" strokeWidth={1.5} />
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-1.5 group-hover:text-[#38BDF8] transition-colors duration-300">
                {sector.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-2 sm:mb-3">
                {sector.headline}
              </p>

              <motion.div
                className="flex items-center gap-2 text-sm font-medium text-[#3B82F6]/70 group-hover:text-[#38BDF8]"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <span>Ver soluciones del sector</span>
                <span>→</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </button>
    </motion.div>
  );
};

const Sectores = () => {
  const navigate = useNavigate();

  const sectores = [
    { slug: "restaurantes", name: "Restaurantes & Delivery", headline: "Te ayudamos a atender más pedidos sin sumar personal.", video: "/videos/restaurantes.mp4", icon: Building2 },
    { slug: "clinicas-salud", name: "Clínicas y Salud", headline: "Te ayudamos a que los pacientes lleguen a su cita.", video: "/videos/Salud.mp4", icon: Heart },
    { slug: "ecommerce", name: "E-commerce & Retail", headline: "Te ayudamos a recuperar ventas que hoy se pierden.", video: "/videos/ecommerce.mp4", icon: ShoppingCart },
    { slug: "servicios-profesionales", name: "Servicios Profesionales", headline: "Te ayudamos a que ningún lead se quede sin respuesta.", video: "/videos/Servicios Profesionales.mp4", icon: Briefcase },
    { slug: "educacion-cursos", name: "Educación & Cursos", headline: "Te ayudamos a que los estudiantes no deserten.", video: "/videos/educacion.mp4", icon: GraduationCap },
    { slug: "finanzas-cobranzas", name: "Finanzas y Cobranzas", headline: "Te ayudamos a cobrar más, con menos esfuerzo.", video: "/videos/cobranza.mp4", icon: Wallet },
  ];

  return (
    <div className="min-h-screen bg-[#05060A] text-white">
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.35), transparent)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-medium tracking-[0.2em] text-[#38BDF8] uppercase mb-6">
              Sectores
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Entendemos los desafíos{" "}
              <span className="text-[#3B82F6]" style={{ textShadow: "0 0 20px rgba(56,189,248,0.4)" }}>
                de tu industria
              </span>
            </h1>

            <p className="mt-4 md:mt-5 text-[#94A3B8] text-base md:text-lg leading-relaxed">
              No aplicamos la misma solución para todos. Elegimos qué automatizar, qué integrar y dónde poner agentes IA según cómo funciona tu operación.
            </p>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Link
                to="/planes"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                Ver planes
              </Link>

              <a
                href="https://wa.me/569XXXXXXXX?text=Hola%20Vexia,%20quiero%20hablar%20sobre%20una%20soluci%C3%B3n%20para%20mi%20empresa"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                  boxShadow: "0 8px 25px rgba(37,99,235,0.25)",
                }}
              >
                Hablar por WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-6">
          <motion.div
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            {sectores.map((sector, index) => (
              <SectorCard
                key={sector.slug}
                sector={sector}
                index={index}
                onClick={() => navigate(`/sectores/${sector.slug}`)}
              />
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-10 md:mt-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm text-[#64748B]">
              ¿No ves tu sector?{" "}
              <a
                href="https://wa.me/569XXXXXXXX?text=Hola%20Vexia,%20mi%20sector%20es%20____%20y%20quiero%20ver%20c%C3%B3mo%20automatizar"
                target="_blank"
                rel="noreferrer"
                className="text-[#3B82F6] hover:underline"
              >
                Cuéntanos sobre tu negocio →
              </a>
            </p>
          </motion.div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)",
          }}
        />
      </section>
    </div>
  );
};

export default Sectores;
