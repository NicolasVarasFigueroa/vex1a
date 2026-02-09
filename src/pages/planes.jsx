import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Planes = () => {
  const planes = [
    {
      name: "Para operaciones con reglas claras",
      tag: "Automatización operativa",
      descripcionCorta: "Ideal si tus procesos siguen pasos definidos",
      beneficios: [
        "Tareas repetitivas que se hacen solas",
        "Datos moviéndose entre sistemas sin errores",
        "Flujos automáticos de principio a fin",
        "Validaciones que antes hacías manual",
        "Reportes listos cuando los necesitas",
      ],
      price: "$300.000",
      currency: "CLP/mes",
      cta: "Ver si aplica para mi negocio",
    },
    {
      name: "Para operaciones que necesitan pensar",
      tag: "Agentes inteligentes",
      descripcionCorta: "Ideal si necesitas atención, decisiones o respuestas",
      beneficios: [
        "Agentes que entienden y responden como tu equipo",
        "Atención a clientes 24/7, sin perder calidad",
        "Decisiones automáticas basadas en contexto",
        "Integración con todo lo que ya usas",
        "Mejora continua: aprenden y mejoran",
      ],
      price: "$500.000",
      currency: "CLP/mes",
      featured: true,
      cta: "Quiero saber más",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="precios" className="relative py-16 md:py-28 lg:py-36 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-medium tracking-[0.2em] text-[#38BDF8] uppercase mb-6">
            Cómo empezar
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Elige cómo quieres que{" "}
            <span
              className="text-[#3B82F6]"
              style={{ textShadow: "0 0 20px rgba(56,189,248,0.4)" }}
            >
              te ayudemos
            </span>
          </h2>

          <p className="mt-4 md:mt-5 text-[#94A3B8] text-base md:text-lg max-w-xl mx-auto">
            No hay compromisos eternos. Empezamos por lo que más te duele y vamos
            escalando juntos.
          </p>
        </motion.div>

        {/* Plans grid */}
        <motion.div
          className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {planes.map((plan, index) => (
            <motion.div key={index} variants={cardVariants} className="group">
              <motion.div
                className="relative rounded-xl p-5 md:p-8 h-full overflow-hidden"
                style={{
                  background: plan.featured
                    ? "linear-gradient(135deg, rgba(13,18,32,0.98) 0%, rgba(7,10,18,0.99) 100%)"
                    : "linear-gradient(135deg, rgba(10,14,24,0.95) 0%, rgba(7,10,18,0.98) 100%)",
                  border: plan.featured
                    ? "1px solid rgba(37,99,235,0.25)"
                    : "1px solid rgba(37,99,235,0.1)",
                }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(37,99,235,0.4)",
                  boxShadow:
                    "0 25px 60px rgba(0,0,0,0.5), 0 0 50px rgba(37,99,235,0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Featured badge */}
                {plan.featured && (
                  <div className="absolute top-4 right-4">
                    <span
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white text-[10px] uppercase font-bold tracking-wider"
                      style={{ boxShadow: "0 0 20px rgba(37,99,235,0.4)" }}
                    >
                      Más popular
                    </span>
                  </div>
                )}

                {/* Top glow for featured */}
                {plan.featured && (
                  <div
                    className="absolute top-0 left-8 right-8 h-[2px]"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent)",
                    }}
                  />
                )}

                {/* Header */}
                <div className="mb-4 md:mb-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#3B82F6]/70 font-medium mb-2">
                    {plan.tag}
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 md:mb-2 group-hover:text-[#38BDF8] transition-colors duration-300">
                    {plan.name}
                  </h3>

                  <p className="text-sm text-[#64748B]">{plan.descripcionCorta}</p>
                </div>

                {/* Benefits */}
                <ul className="space-y-2 md:space-y-2.5 mb-5 md:mb-6">
                  {plan.beneficios.map((beneficio, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-[#94A3B8]"
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "rgba(37,99,235,0.15)" }}
                      >
                        <Check className="w-3 h-3 text-[#3B82F6]" />
                      </span>
                      {beneficio}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-5 md:mb-6 pb-5 md:pb-6 border-b border-[#2563EB]/10">
                  <div className="text-xs text-[#64748B] uppercase tracking-wide mb-1">
                    Desde
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                      {plan.price}
                    </span>
                    <span className="text-sm text-[#64748B]">{plan.currency}</span>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  className="w-full rounded-full py-3 md:py-3.5 text-sm font-semibold min-h-[48px] md:min-h-0"
                  style={
                    plan.featured
                      ? {
                          background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                          color: "white",
                          boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
                        }
                      : {
                          background: "rgba(37,99,235,0.1)",
                          border: "1px solid rgba(37,99,235,0.2)",
                          color: "white",
                        }
                  }
                  whileHover={
                    plan.featured
                      ? { boxShadow: "0 8px 30px rgba(37,99,235,0.4)" }
                      : {
                          borderColor: "rgba(37,99,235,0.4)",
                          boxShadow: "0 0 20px rgba(37,99,235,0.1)",
                        }
                  }
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

          {/* Webs */}
        <section id="webs" className="relative py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-5 md:px-6">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-medium tracking-[0.2em] text-[#38BDF8] uppercase mb-6">
                Sitios Web
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Páginas web <span className="text-[#3B82F6]">estáticas</span> y{" "}
                <span className="text-[#3B82F6]">funcionales</span>
              </h2>
              <p className="mt-4 text-[#94A3B8] max-w-xl mx-auto">
                Incluye dominio + hosting + SSL (primer año). Cambios y nuevas funciones se manejan como mantenimiento.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
              {/* Estática */}
              <div
                className="rounded-xl p-6 md:p-8"
                style={{
                  background: "linear-gradient(135deg, rgba(10,14,24,0.95) 0%, rgba(7,10,18,0.98) 100%)",
                  border: "1px solid rgba(37,99,235,0.1)",
                }}
              >
                <p className="text-xs uppercase tracking-[0.15em] text-[#3B82F6]/70 font-medium mb-2">
                  Web Estática
                </p>
                <h3 className="text-xl font-bold text-white mb-2">
                  Landing / Sitio corporativo
                </h3>
                <p className="text-sm text-[#64748B] mb-5">
                  Ideal para mostrar tu negocio, servicios y captar clientes.
                </p>

                <ul className="space-y-2.5 text-sm text-[#94A3B8] mb-6">
                  <li>• 1–5 secciones (Inicio, Servicios, Nosotros, Contacto)</li>
                  <li>• Responsive + SEO básico + velocidad</li>
                  <li>• Formulario + botón WhatsApp</li>
                  <li>• Dominio + hosting + SSL (1er año)</li>
                </ul>

                <div className="mb-6 pb-6 border-b border-[#2563EB]/10">
                  <div className="text-xs text-[#64748B] uppercase tracking-wide mb-1">Desde</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">$250.000</span>
                    <span className="text-sm text-[#64748B]">CLP (único pago)</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/569XXXXXXXX?text=Hola%20Vexia,%20quiero%20una%20web%20est%C3%A1tica"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center rounded-full py-3 text-sm font-semibold"
                  style={{
                    background: "rgba(37,99,235,0.1)",
                    border: "1px solid rgba(37,99,235,0.2)",
                    color: "white",
                  }}
                >
                  Cotizar web estática
                </a>
              </div>

              {/* Funcional */}
              <div
                className="rounded-xl p-6 md:p-8"
                style={{
                  background: "linear-gradient(135deg, rgba(13,18,32,0.98) 0%, rgba(7,10,18,0.99) 100%)",
                  border: "1px solid rgba(37,99,235,0.25)",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#3B82F6]/70 font-medium mb-2">
                      Web Funcional
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Sistema + panel admin
                    </h3>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white text-[10px] uppercase font-bold tracking-wider"
                    style={{ boxShadow: "0 0 20px rgba(37,99,235,0.4)" }}
                  >
                    Escalable
                  </span>
                </div>

                <p className="text-sm text-[#64748B] mb-5">
                  Para agendamiento, cotizaciones, usuarios, pagos, dashboards, etc.
                </p>

                <ul className="space-y-2.5 text-sm text-[#94A3B8] mb-6">
                  <li>• Backend + base de datos + seguridad</li>
                  <li>• Panel admin (gestión de contenido/usuarios)</li>
                  <li>• Integraciones (API/Webhooks)</li>
                  <li>• Dominio + hosting + SSL (1er año)</li>
                </ul>

                <div className="mb-6 pb-6 border-b border-[#2563EB]/10">
                  <div className="text-xs text-[#64748B] uppercase tracking-wide mb-1">Desde</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">$900.000</span>
                    <span className="text-sm text-[#64748B]">CLP (proyecto)</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/569XXXXXXXX?text=Hola%20Vexia,%20quiero%20una%20web%20funcional"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center rounded-full py-3 text-sm font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                    boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
                    color: "white",
                  }}
                >
                  Cotizar web funcional
                </a>
              </div>
            </div>

            {/* Mantenimiento */}
            <div
              className="mt-6 rounded-xl p-6 md:p-7"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(37,99,235,0.1)" }}
            >
              <h4 className="text-white font-semibold mb-2">Mantenimiento (mensual)</h4>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Cambios, mejoras, seguridad, respaldo y soporte. Lo nuevo se cobra como mantenimiento (bolsa de horas) o cotización aparte.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#94A3B8]">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Web estática: $30k–$80k</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Web funcional: $120k–$450k+</span>
              </div>
            </div>
          </div>
        </section>






        {/* Footer note */}
        <motion.p
          className="text-center text-xs md:text-sm text-[#64748B] mt-8 md:mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Incluye análisis inicial, implementación, y acompañamiento continuo.{" "}
          <span className="text-[#94A3B8]">No te dejamos solo.</span>
        </motion.p>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)",
        }}
      />
    </section>
  );
};

export default Planes;
