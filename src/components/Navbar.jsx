import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo-vexia.png";
import waIcon from "../assets/logo-whatsapp.webp";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Soluciones", href: "/solution" },
    { name: "Sectores", href: "/sectores" }, // ✅ ahora es page
    { name: "Planes", href: "/planes" },
    { name: "Nosotros", href: "/nosotros" },
  ];

  const goTo = (path) => {
    setMobileOpen(false);
    navigate(path);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "h-24" : "h-28"
        }`}
        style={
          scrolled
            ? {
                backgroundColor: "rgba(5,6,10,0.9)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(37,99,235,0.1)",
              }
            : { backgroundColor: "transparent" }
        }
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center h-full shrink-0">
            <img
              src={logo}
              alt="Vexia"
              className={`block w-auto object-contain transition-all duration-300 ${
                scrolled ? "h-16" : "h-20"
              }`}
              draggable="false"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 leading-none">
            {links.map((link, index) => {
              const isPage = link.href.startsWith("/") && !link.href.includes("#");
              const isActive = isPage && location.pathname === link.href;

              return (
                <motion.button
                  key={link.name}
                  type="button"
                  onClick={() => goTo(link.href)}
                  className={`relative text-xs uppercase tracking-[0.15em] font-medium transition-colors ${
                    isActive ? "text-[#3B82F6]" : "text-[#94A3B8] hover:text-white"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-3 left-0 right-0 h-[2px] bg-[#3B82F6] rounded-full"
                      layoutId="navbar-indicator"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <motion.button
              className="text-xs uppercase tracking-wide font-semibold text-white px-5 py-2.5 rounded-full"
              style={{
                background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                boxShadow: "0 4px 15px rgba(37,99,235,0.3)",
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 6px 25px rgba(37,99,235,0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => goTo("/planes")} // opcional: que el CTA vaya a planes
            >
              Empezar ahora
            </motion.button>

            <motion.a
              href="https://wa.me/569XXXXXXXX?text=Hola%20Vexia,%20quiero%20cotizar%20una%20automatizaci%C3%B3n"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 hover:bg-white/10 transition"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Hablar por WhatsApp"
              title="WhatsApp"
            >
              <img src={waIcon} alt="WhatsApp" className="h-5 w-5 object-contain" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#94A3B8] hover:text-white transition-colors p-2 -mr-2 shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: "rgba(5,6,10,0.98)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <button
                    type="button"
                    onClick={() => goTo(link.href)}
                    className="text-xl text-white hover:text-[#3B82F6] transition-colors py-2"
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}

              <motion.button
                className="mt-6 text-base font-semibold text-white px-10 py-4 rounded-full min-h-[56px] w-full max-w-xs"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                  boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => goTo("/planes")}
              >
                Empezar ahora
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;