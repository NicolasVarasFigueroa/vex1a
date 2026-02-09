// src/pages/Soluciones.jsx
import { motion } from "framer-motion";
import {
  Workflow,
  Bot,
  Globe,
  Check,
  Zap,
  ShieldCheck,
  ArrowRight,
  MessagesSquare,
  FileSpreadsheet,
  CalendarCheck,
  CreditCard,
  Headphones,
  Settings2,
} from "lucide-react";

const Solution= () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: (d = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const soluciones = [
    {
      icon: <Workflow className="w-4 h-4 text-[#38BDF8]" />,
      title: "Automatización operativa",
      desc: "Conectamos tus herramientas y dejamos flujos automáticos de principio a fin.",
      bullets: [
        "Aprobaciones y validaciones automáticas",
        "Integración entre sistemas (Sheets/CRM/Email/ERP)",
        "Reportes que se generan solos",
        "Menos errores humanos y más control",
      ],
      cta: "Quiero automatizar",
      waText: "Hola Vexia, quiero automatizar procesos en mi empresa",
      featured: false,
    },
    {
      icon: <Bot className="w-4 h-4 text-[#38BDF8]" />,
      title: "Agentes IA (atención y decisiones)",
      desc: "Agentes que responden, clasifican, priorizan y ayudan a tu equipo 24/7.",
      bullets: [
        "Atención al cliente (FAQ + seguimiento)",
        "Calificación de leads y cotizaciones",
        "Clasificación de tickets y derivación",
        "Respuestas con contexto y tono de marca",
      ],
      cta: "Quiero un agente IA",
      waText: "Hola Vexia, quiero un agente IA para atención/operación",
      featured: true,
    },
    {
      icon: <Globe className="w-4 h-4 text-[#38BDF8]" />,
      title: "Páginas web (estáticas y funcionales)",
      desc: "Sitios rápidos y modernos o sistemas completos con panel y base de datos.",
      bullets: [
        "Landing / web corporativa",
        "Web funcional con panel admin",
        "Formularios, agenda, cotizador, pagos",
        "Dominio + hosting + SSL (1er año)",
      ],
      cta: "Quiero mi web",
      waText: "Hola Vexia, quiero cotizar una página web",
      featured: false,
    },
  ];

  const casos = [
    {
      icon: <MessagesSquare className="w-4 h-4 text-[#60A5FA]" />,
      title: "Ventas",
      desc: "Captura y seguimiento sin perder leads.",
      items: ["Cotizador automático", "WhatsApp + CRM", "Calificación de prospectos", "Emails de seguimiento"],
    },
    {
      icon: <Headphones className="w-4 h-4 text-[#60A5FA]" />,
      title: "Atención al cliente",
      desc: "Respuestas rápidas y orden en los tickets.",
      items: ["Agente 24/7", "Clasificación y derivación", "Base de conocimiento", "Encuestas post-atención"],
    },
    {
      icon: <FileSpreadsheet className="w-4 h-4 text-[#60A5FA]" />,
      title: "Administración",
      desc: "Menos Excel manual, más control.",
      items: ["Rendiciones y aprobaciones", "Reportes automáticos", "Validación de datos", "Alertas por correo"],
    },
    {
      icon: <CalendarCheck className="w-4 h-4 text-[#60A5FA]" />,
      title: "Operaciones",
      desc: "Flujos claros y trazables.",
      items: ["Asignación de tareas", "Checklists", "Seguimiento de estados", "Integración con herramientas"],
    },
    {
      icon: <CreditCard className="w-4 h-4 text-[#60A5FA]" />,
      title: "Cobranza y pagos",
      desc: "Recordatorios y conciliación.",
      items: ["Recordatorios automáticos", "Registro de pagos", "Conciliación simple", "Reportes mensuales"],
    },
    {
      icon: <Settings2 className="w-4 h-4 text-[#60A5FA]" />,
      title: "Integraciones",
      desc: "Conectamos lo que ya usas.",
      items: ["API/Webhooks", "Google Workspace", "CRMs", "Bases de datos"],
    },
  ];

  const proceso = [
    { n: "01", title: "Diagnóstico", desc: "Entendemos tu operación, dolores y herramientas." },
    { n: "02", title: "Propuesta", desc: "Definimos alcance, tiempos, costo y entregables." },
    { n: "03", title: "Implementación", desc: "Construimos y probamos contigo (entregas por etapas)." },
    { n: "04", title: "Soporte", desc: "Acompañamiento, mejoras y mantenimiento si lo necesitas." },
  ];

  return (
    <div className="min-h-screen bg-[#05060A] text-white">
      {/* HERO */}
      <section className="relative pt-28 md:pt-36 pb-14 md:pb-20 overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.25) 0%, rgba(56,189,248,0.12) 30%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(37,99,235,0.35), transparent)",
          }}
        />

        <div className="max-w-4xl mx-auto px-5 md:px-6 relative z-10 text-center">
          <motion.p
            className="inline-flex items-center justify-center text-[11px] uppercase tracking-[0.3em] text-[#38BDF8] font-semibold px-4 py-2 rounded-full border border-[#38BDF8]/15 bg-white/[0.03]"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            Soluciones
          </motion.p>

          <motion.h1
            className="mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-tight"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.08}
          >
            Soluciones que{" "}
            <span
              className="text-[#3B82F6]"
              style={{ textShadow: "0 0 20px rgba(56,189,248,0.35)" }}
            >
              automatizan
            </span>{" "}
            y hacen tu operación más eficiente.
          </motion.h1>

          <motion.p
            className="mt-5 text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.14}
          >
            Implementamos automatización, agentes IA y desarrollo web para que tu negocio
            ahorre tiempo, reduzca errores y tenga control real.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-3"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
          >
            <a
              href="https://wa.me/569XXXXXXXX?text=Hola%20Vexia,%20quiero%20cotizar%20una%20soluci%C3%B3n"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              style={{
                background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                boxShadow: "0 8px 25px rgba(37,99,235,0.25)",
              }}
            >
              Cotizar por WhatsApp
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>

            <a
              href="/planes"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              Ver planes
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3 SOLUCIONES */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-5 md:px-6">
          <motion.div
            className="grid gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          >
            {soluciones.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7 relative overflow-hidden"
                style={
                  s.featured
                    ? { border: "1px solid rgba(37,99,235,0.25)" }
                    : undefined
                }
              >
                {s.featured && (
                  <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-30"
                    style={{ background: "radial-gradient(circle, rgba(56,189,248,0.25), transparent 60%)" }}
                  />
                )}

                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(37,99,235,0.12)",
                      border: "1px solid rgba(37,99,235,0.18)",
                    }}
                  >
                    {s.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <h3 className="text-lg md:text-xl font-semibold">{s.title}</h3>
                      {s.featured && (
                        <span
                          className="px-3 py-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white text-[10px] uppercase font-bold tracking-wider"
                          style={{ boxShadow: "0 0 20px rgba(37,99,235,0.35)" }}
                        >
                          Más pedido
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                      {s.desc}
                    </p>

                    <div className="mt-4 grid gap-2 md:grid-cols-2">
                      {s.bullets.map((b) => (
                        <div key={b} className="flex items-start gap-2">
                          <span
                            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: "rgba(37,99,235,0.15)" }}
                          >
                            <Check className="w-3.5 h-3.5 text-[#3B82F6]" />
                          </span>
                          <p className="text-sm text-[#94A3B8]">{b}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={`https://wa.me/569XXXXXXXX?text=${encodeURIComponent(s.waText)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
                        style={
                          s.featured
                            ? {
                                background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                                boxShadow: "0 8px 25px rgba(37,99,235,0.25)",
                              }
                            : {
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.08)",
                              }
                        }
                      >
                        {s.cta}
                      </a>

                      <a
                        href="/planes"
                        className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition"
                      >
                        Ver precios
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-5 md:px-6">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <h2 className="text-2xl md:text-3xl font-bold">Casos de uso</h2>
            <p className="mt-3 text-[#94A3B8] max-w-2xl mx-auto">
              Ejemplos reales de lo que podemos implementar según tu área.
            </p>
          </motion.div>

          <motion.div
            className="mt-7 grid gap-4 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          >
            {casos.map((c) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(37,99,235,0.12)",
                      border: "1px solid rgba(37,99,235,0.18)",
                    }}
                  >
                    {c.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                    <p className="mt-1 text-sm text-[#94A3B8]">{c.desc}</p>

                    <div className="mt-4 grid gap-2">
                      {c.items.map((i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span
                            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: "rgba(37,99,235,0.15)" }}
                          >
                            <Zap className="w-3.5 h-3.5 text-[#3B82F6]" />
                          </span>
                          <p className="text-sm text-[#94A3B8]">{i}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-5 md:px-6">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <h2 className="text-2xl md:text-3xl font-bold">Nuestro proceso</h2>
            <p className="mt-3 text-[#94A3B8] max-w-2xl mx-auto">
              Rápido, ordenado y con entregas visibles.
            </p>
          </motion.div>

          <motion.div
            className="mt-7 grid gap-4 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          >
            {proceso.map((p) => (
              <motion.div
                key={p.n}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="text-[11px] tracking-[0.25em] text-[#38BDF8] font-semibold">{p.n}</div>
                  <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
                </div>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-10 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <a
              href="https://wa.me/569XXXXXXXX?text=Hola%20Vexia,%20quiero%20cotizar%20una%20soluci%C3%B3n%20para%20mi%20empresa"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold"
              style={{
                background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                boxShadow: "0 8px 25px rgba(37,99,235,0.25)",
              }}
            >
              Hablemos por WhatsApp
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div
        className="h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.35), transparent)",
        }}
      />
    </div>
  );
};

export default Solution;
