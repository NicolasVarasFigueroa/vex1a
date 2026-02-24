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
      icon: Globe,
      tag: "Desarrollo Web",
      title: "Sitios web y sistemas a medida",
      description:
        "Diseñamos y desarrollamos páginas web corporativas, landing pages y sistemas funcionales para mejorar la presencia digital y la operación de tu empresa.",
      items: [
        "Landing pages y sitios corporativos",
        "Webs funcionales con panel de administración",
        "Formularios, WhatsApp y correo integrados",
        "Diseño responsive (móvil / tablet / desktop)",
        "Dominio + hosting + SSL (según plan)",
      ],
      cta: "Cotizar desarrollo web",
      waText: "Hola Vexia, quiero cotizar un desarrollo web para mi empresa",
      featured: false,
    },
    {
      icon: Workflow,
      tag: "Automatización",
      title: "Automatización de procesos operativos",
      description:
        "Conectamos herramientas y automatizamos flujos para reducir tareas manuales, errores y tiempos de respuesta en tu operación diaria.",
      items: [
        "Automatización de tareas repetitivas",
        "Flujos entre formularios, correo, planillas y CRM",
        "Notificaciones automáticas y seguimiento",
        "Validaciones y reglas de negocio",
        "Procesos internos más rápidos y ordenados",
      ],
      cta: "Quiero automatizar mi empresa",
      waText: "Hola Vexia, quiero automatizar procesos en mi empresa",
      featured: true,
    },
    {
      icon: BarChart3,
      tag: "BI / Analítica",
      title: "Dashboards e indicadores para decisiones",
      description:
        "Convertimos tus datos en información útil con paneles visuales, reportes y KPIs para que tomes decisiones con mayor claridad y control.",
      items: [
        "Dashboards de ventas, operación y gestión",
        "Consolidación de datos de distintas fuentes",
        "KPIs personalizados por área",
        "Reportes visuales y seguimiento",
        "Base para decisiones con datos reales",
      ],
      cta: "Quiero un dashboard",
      waText: "Hola Vexia, quiero una solución BI / dashboard para mi empresa",
      featured: false,
    },
  ];

  const proceso = [
    {
      icon: Zap,
      title: "Diagnóstico",
      desc: "Entendemos tu necesidad, tu flujo actual y el objetivo de negocio.",
    },
    {
      icon: Workflow,
      title: "Propuesta",
      desc: "Definimos alcance, entregables, tiempos y una solución clara.",
    },
    {
      icon: Database,
      title: "Implementación",
      desc: "Construimos, integramos, probamos y dejamos funcionando.",
    },
    {
      icon: Shield,
      title: "Soporte",
      desc: "Acompañamiento, mejoras y mantenimiento opcional.",
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
              Servicios para impulsar tu empresa con{" "}
              <span
                className="text-[#3B82F6]"
                style={{ textShadow: "0 0 20px rgba(56,189,248,0.35)" }}
              >
                tecnología útil
              </span>
            </h1>

            <p className="mt-5 text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              En VEXIA combinamos desarrollo web, automatización y BI para
              ayudarte a vender más, operar mejor y tomar decisiones con datos.
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
      <section className="pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <div className="grid gap-5 lg:grid-cols-3">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icon;
              return (
                <motion.div
                  key={servicio.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group"
                >
                  <div
                    className="relative h-full rounded-2xl p-6 border overflow-hidden"
                    style={{
                      background: servicio.featured
                        ? "linear-gradient(135deg, rgba(13,18,32,0.98) 0%, rgba(7,10,18,0.99) 100%)"
                        : "linear-gradient(135deg, rgba(10,14,24,0.95) 0%, rgba(7,10,18,0.98) 100%)",
                      borderColor: servicio.featured
                        ? "rgba(37,99,235,0.22)"
                        : "rgba(255,255,255,0.08)",
                    }}
                  >
                    {servicio.featured && (
                      <>
                        <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent" />
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white">
                            Destacado
                          </span>
                        </div>
                      </>
                    )}

                    <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#2563EB]/20 bg-[#2563EB]/10">
                      <Icon className="w-5 h-5 text-[#3B82F6]" />
                    </div>

                    <p className="mt-4 text-xs uppercase tracking-[0.15em] text-[#38BDF8]/80 font-medium">
                      {servicio.tag}
                    </p>

                    <h3 className="mt-2 text-xl font-bold leading-snug group-hover:text-[#38BDF8] transition-colors">
                      {servicio.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                      {servicio.description}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {servicio.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-[#C7D2E0]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#3B82F6] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`https://wa.me/569XXXXXXXX?text=${encodeURIComponent(
                        servicio.waText
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#38BDF8] hover:text-white transition-colors"
                    >
                      {servicio.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
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
                Cómo implementamos una solución en tu empresa
              </h2>
              <p className="mt-3 text-[#94A3B8]">
                Método claro y ordenado para entregar valor rápido, con buena
                comunicación y resultados visibles.
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
            <h2 className="text-2xl md:text-3xl font-bold">
              ¿Quieres una solución a medida para tu negocio?
            </h2>
            <p className="mt-3 text-[#94A3B8] max-w-2xl mx-auto">
              Cuéntanos tu necesidad y te orientamos con la mejor opción:
              desarrollo web, automatización, BI o una combinación.
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