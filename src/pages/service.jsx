import { motion } from "framer-motion";
import {
  Globe,
  Workflow,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Database,
} from "lucide-react";

const Service = () => {
  const servicios = [
    {
      icon: Workflow,
      tag: "Automatización e IA",
      title: "Procesos en Piloto Automático",
      description:
        "Integramos tus herramientas para eliminar el trabajo manual. Tu operación lista para escalar sin trabas.",
      items: [
        "Gestión y ventas con IA",
        "CRM y WhatsApp integrados 100%",
        "Reducción directa de costos",
      ],
      cta: "Quiero automatizar mi empresa",
      waText: "Hola Vexia, quiero automatizar mis procesos",
      featured: true,
      theme: {
        gradient: "from-emerald-400 to-teal-500",
        shadow: "rgba(16, 185, 129, 0.15)",
        text: "text-emerald-400",
        bgIcon: "bg-emerald-500/10",
        borderIcon: "border-emerald-500/20",
      }
    },
    {
      icon: BarChart3,
      tag: "BI / Analítica",
      title: "Control Total con Datos Reales",
      description:
        "Dashboards precisos enfocados en tu rentabilidad. Deja de adivinar y dirige con visión clara.",
      items: [
        "Métricas clave de un vistazo",
        "Cruce automático de sistemas",
        "Decisiones ágiles basadas en hechos",
      ],
      cta: "Quiero medir mi negocio",
      waText: "Hola Vexia, necesito tableros de control para mi empresa",
      featured: false,
      theme: {
        gradient: "from-blue-400 to-cyan-500",
        shadow: "rgba(56, 189, 248, 0.15)",
        text: "text-blue-400",
        bgIcon: "bg-blue-500/10",
        borderIcon: "border-blue-500/20",
      }
    },
    {
      icon: Globe,
      tag: "Desarrollo Web",
      title: "Plataformas Web Elevadas",
      description:
        "Sitios web rápidos, modernos y optimizados para captar leads y agilizar tu operación diaria.",
      items: [
        "Alta velocidad garantizada",
        "Formularios listos para CRM",
        "Diseño Premium adaptable",
      ],
      cta: "Cotizar plataforma web",
      waText: "Hola Vexia, quiero cotizar un sitio web para mi empresa",
      featured: false,
      theme: {
        gradient: "from-fuchsia-500 to-purple-600",
        shadow: "rgba(168, 85, 247, 0.15)",
        text: "text-purple-400",
        bgIcon: "bg-purple-500/10",
        borderIcon: "border-purple-500/20",
      }
    },
  ];

  const proceso = [
    {
      icon: Zap,
      title: "Diagnóstico",
      desc: "Analizamos tu operación al detalle para encontrar cuellos de botella.",
    },
    {
      icon: Workflow,
      title: "Propuesta",
      desc: "Diseñamos la solución exacta, con tiempos y costos transparentes.",
    },
    {
      icon: Database,
      title: "Implementación",
      desc: "Desarrollamos e integramos todo. Listo para usar.",
    },
    {
      icon: Shield,
      title: "Soporte",
      desc: "Te acompañamos mes a mes para asegurar que todo funcione perfecto.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#05060A] text-white">
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-14 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(37,99,235,0.35), transparent)",
          }}
        />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[#2563EB]/10 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-5 md:px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-[#2563EB]/30 bg-[#0B1220]/70 px-4 py-2 text-xs font-medium tracking-[0.2em] text-[#38BDF8] uppercase">
              Service
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Tecnología útil para{" "}
              <span
                className="text-[#3B82F6]"
                style={{ textShadow: "0 0 20px rgba(56,189,248,0.35)" }}
              >
                escalar tu empresa
              </span>
            </h1>

            <p className="mt-5 text-[var(--vexia-text-secondary)] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Combinamos Procesos de IA, Inteligencia de Datos y Desarrollo a medida para que operes sin fricciones y recuperes tu tiempo libre.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="/planes"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                  boxShadow: "0 8px 25px rgba(37,99,235,0.25)",
                }}
              >
                Ver planes
              </a>

              <a
                href="https://wa.me/569XXXXXXXX?text=Hola%20Vexia,%20quiero%20evaluar%20una%20soluci%C3%B3n%20para%20mi%20empresa"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servicios */}
      <section className="pb-14 md:pb-24">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icon;
              return (
                <motion.div
                  key={servicio.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group h-full"
                >
                  <motion.div
                    className={`relative flex flex-col h-full rounded-3xl p-6 md:p-8 border overflow-hidden transition-all duration-500 bg-[#070A12]/80 backdrop-blur-xl group-hover:-translate-y-2`}
                    style={{
                      borderColor: servicio.featured
                        ? "rgba(16, 185, 129, 0.3)"
                        : "rgba(255,255,255,0.05)",
                      boxShadow: `0 0 30px ${servicio.theme.shadow}`,
                    }}
                    whileHover={{
                      boxShadow: `0 20px 40px ${servicio.theme.shadow}`,
                    }}
                  >
                    {/* Glowing background orb for the card */}
                    <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${servicio.theme.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 pointer-events-none`} />

                    {servicio.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className={`px-3 py-1 rounded-full text-[10px] md:text-xs uppercase font-bold tracking-wider bg-gradient-to-r ${servicio.theme.gradient} text-white shadow-lg`}>
                          Recomendado
                        </span>
                      </div>
                    )}

                    {/* Icon/Visual side */}
                    <motion.div 
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${servicio.theme.borderIcon} ${servicio.theme.bgIcon} mb-6 relative z-10`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className={`w-8 h-8 ${servicio.theme.text}`} strokeWidth={1.5} />
                    </motion.div>

                    <p className={`text-xs uppercase tracking-[0.2em] ${servicio.theme.text} font-bold mb-3`}>
                      {servicio.tag}
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold leading-tight text-white mb-4 relative z-10 transition-colors duration-300">
                      {servicio.title}
                    </h3>

                    <p className="text-sm md:text-base text-[var(--vexia-text-secondary)] leading-relaxed mb-8 flex-grow relative z-10">
                      {servicio.description}
                    </p>

                    <ul className="flex flex-col gap-3 mb-8 relative z-10">
                      {servicio.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-[#D4D4D8] font-medium bg-white/[0.02] border border-white/5 rounded-xl px-3 py-2"
                        >
                          <CheckCircle2 className={`w-4 h-4 ${servicio.theme.text} shrink-0 mt-0.5`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto relative z-10 pt-4 border-t border-white/5">
                      <a
                        href={`https://wa.me/569XXXXXXXX?text=${encodeURIComponent(
                          servicio.waText
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 text-sm font-semibold ${servicio.theme.text} hover:text-white transition-colors group/btn`}
                      >
                        {servicio.cta}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs uppercase tracking-[0.2em] text-[#38BDF8] font-medium">
                Proceso de trabajo
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold">
                Tu proyecto listo en 4 pasos
              </h2>
              <p className="mt-3 text-[var(--vexia-text-secondary)]">
                Método ágil y transparente para entregar valor rápido sin interrumpir tu operación.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {proceso.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#3B82F6]" />
                    </div>
                    <h3 className="mt-3 font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA final */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-5 md:px-6">
          <motion.div
            className="text-center rounded-2xl border border-[#2563EB]/15 bg-gradient-to-b from-[#0A0F1C] to-[#070A12] p-8 md:p-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              ¿Listo para escalar tu empresa?
            </h2>
            <p className="mt-3 text-[var(--vexia-text-secondary)] max-w-2xl mx-auto">
              Hablemos hoy. Evaluaremos tu caso sin compromiso y trazaremos el plan exacto para tu crecimiento.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/569XXXXXXXX?text=Hola%20Vexia,%20quiero%20evaluar%20una%20soluci%C3%B3n%20para%20mi%20empresa"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                  boxShadow: "0 8px 25px rgba(37,99,235,0.25)",
                }}
              >
                Solicitar evaluación
              </a>

              <a
                href="/nosotros"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                Conocer al equipo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(37,99,235,0.35), transparent)",
        }}
      />
    </div>
  );
};

export default Service;