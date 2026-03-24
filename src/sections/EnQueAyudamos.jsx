import { motion } from "framer-motion";
import { Workflow, Globe, BarChart3 } from "lucide-react";

const EnQueAyudamos = () => {
  const pasos = [
    {
      numero: "01",
      icon: Workflow,
      titulo: "Automatización con IA",
      descripcion:
        "Integramos tus canales (WhatsApp, correo, CRM) en flujos automáticos 24/7.",
    },
    {
      numero: "02",
      icon: BarChart3,
      titulo: "Control Total con Datos",
      descripcion:
        "Dashboards precisos en tiempo real. Deja de adivinar y dirige tu negocio con seguridad.",
    },
    {
      numero: "03",
      icon: Globe,
      titulo: "Desarrollo Web (Opcional)",
      descripcion:
        "Sitios web ultra-rápidos y modernos, diseñados para captar leads y complementar tu automatización.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="como-ayudamos"
      className="relative py-16 md:py-28 lg:py-36 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 section-line" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-5 md:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.span
            variants={itemVariants}
            className="inline-block text-xs font-medium tracking-[0.2em] text-[#38BDF8] uppercase mb-6"
          >
            Qué hacemos
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
          >
            <span className="text-white">Soluciones en </span>
            <span className="text-[#3B82F6]" style={{ textShadow: "0 0 15px rgba(56,189,248,0.2)" }}>
              automatización IA, web y datos
            </span>
            <span className="text-[#64748B]">.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 md:mt-5 text-[var(--vexia-text-secondary)] text-base md:text-lg max-w-2xl mx-auto"
          >
            Sistemas diseñados para escalar tu negocio mediante <span className="text-white">inteligencia artificial y automatización de procesos.</span>
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6"
          variants={containerVariants}
        >
          {pasos.map((paso, index) => {
            const Icon = paso.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="group">
                <motion.div
                  className="card-system p-5 md:p-7 h-full flex flex-col justify-start"
                  transition={{ duration: 0.3 }}
                >
                  {/* Number watermark */}
                  <span className="absolute top-3 right-4 text-5xl font-bold text-white/[0.02] group-hover:text-[#3B82F6]/[0.06] transition-colors duration-500 pointer-events-none">
                    {paso.numero}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 md:mb-5"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Icon className="w-5 h-5 text-[#3B82F6]" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-base md:text-lg font-semibold text-white mb-1.5 md:mb-2 group-hover:text-[#38BDF8] transition-colors duration-300">
                    {paso.titulo}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {paso.descripcion}
                  </p>

                  {/* Top glow on hover removed as card-system handles it */}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-10 md:mt-14"
        >
          <div className="card-system px-6 py-3 rounded-full">
            <p className="text-sm text-[#A1A1AA] text-center">
              Tecnología con un único fin:{" "}
              <span className="text-white font-medium">
                automatizar tus procesos y multiplicar tus ganancias.
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 section-line" />
    </section>
  );
};

export default EnQueAyudamos;