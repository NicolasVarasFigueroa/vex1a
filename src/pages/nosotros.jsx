// src/pages/Nosotros.jsx
import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, Code2, Target, Workflow } from "lucide-react";

const Nosotros = () => {
  const values = [
    {
      icon: <Code2 className="w-4 h-4 text-[#38BDF8]" />,
      title: "Ingeniería aplicada",
      desc: "No vendemos humo: diseñamos, probamos y dejamos funcionando soluciones reales.",
    },
    {
      icon: <Zap className="w-4 h-4 text-[#38BDF8]" />,
      title: "Velocidad + orden",
      desc: "Implementamos rápido, pero con estructura (documentación, versiones y buenas prácticas).",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />,
      title: "Transparencia",
      desc: "Alcance claro, entregables definidos y comunicación directa durante todo el proyecto.",
    },
    {
      icon: <Target className="w-4 h-4 text-[#38BDF8]" />,
      title: "Enfoque en resultados",
      desc: "Menos tareas manuales, menos errores y más control en tu operación.",
    },
  ];

  const whyTrust = [
    "Levantamiento y diagnóstico antes de construir",
    "Prototipo/maqueta para validar antes de implementar",
    "Entregas por etapas (ves avances reales)",
    "Código mantenible + documentación mínima",
    "Soporte y mejora continua (mantenimiento opcional)",
  ];

  const steps = [
    { n: "01", title: "Diagnóstico", desc: "Entendemos tu operación, dolores y herramientas actuales.", icon: <Workflow className="w-4 h-4 text-[#60A5FA]" /> },
    { n: "02", title: "Propuesta", desc: "Definimos flujo, alcance, tiempos y costo. Todo por escrito.", icon: <Target className="w-4 h-4 text-[#60A5FA]" /> },
    { n: "03", title: "Implementación", desc: "Construimos, integramos y probamos con tu equipo.", icon: <Code2 className="w-4 h-4 text-[#60A5FA]" /> },
    { n: "04", title: "Entrega y soporte", desc: "Capacitación breve + monitoreo. Mantenimiento si lo necesitas.", icon: <ShieldCheck className="w-4 h-4 text-[#60A5FA]" /> },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: (d = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <div className="min-h-screen bg-[#05060A] text-white">
      {/* HERO */}
      <section className="relative pt-28 md:pt-36 pb-14 md:pb-20 overflow-hidden">
        {/* soft glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.25) 0%, rgba(56,189,248,0.12) 30%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.35), transparent)",
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
            Nosotros
          </motion.p>

          <motion.h1
            className="mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-tight"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.08}
          >
            Somos{" "}
            <span
              className="text-[#3B82F6]"
              style={{ textShadow: "0 0 20px rgba(56,189,248,0.35)" }}
            >
              ingenieros informáticos
            </span>{" "}
            enfocados en entregar soluciones reales.
          </motion.h1>

          <motion.p
            className="mt-5 text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.14}
          >
            Diseñamos e implementamos automatización operativa, agentes IA y desarrollo web
            para que tu negocio opere sin fricción: menos tareas manuales, menos errores y más control.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-3"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
          >
            <a
              href="https://wa.me/569XXXXXXXX?text=Hola%20Vexia,%20quiero%20hablar%20sobre%20una%20soluci%C3%B3n%20para%20mi%20empresa"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              style={{
                background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                boxShadow: "0 8px 25px rgba(37,99,235,0.25)",
              }}
            >
              Hablar por WhatsApp
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

      {/* VALORES */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-5 md:px-6">
          <motion.div
            className="grid gap-4 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.18)" }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* POR QUÉ CONFIAR */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-5 md:px-6">
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-30"
              style={{ background: "radial-gradient(circle, rgba(56,189,248,0.25), transparent 60%)" }}
            />
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              ¿Por qué confiar en nosotros?
            </h2>
            <p className="mt-3 text-[#94A3B8] leading-relaxed max-w-2xl mx-auto text-center">
              Trabajamos con procesos claros y entregables visibles. Tu empresa entiende qué se hará,
              cuándo se hará y qué resultado se espera.
            </p>

            <div className="mt-7 grid gap-3 md:grid-cols-2">
              {whyTrust.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(37,99,235,0.15)" }}
                  >
                    <Check className="w-4 h-4 text-[#3B82F6]" />
                  </span>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-5 md:px-6">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <h2 className="text-2xl md:text-3xl font-bold">Cómo trabajamos</h2>
            <p className="mt-3 text-[#94A3B8] max-w-2xl mx-auto">
              Método simple, rápido y ordenado para entregar valor desde el inicio.
            </p>
          </motion.div>

          <motion.div
            className="mt-7 grid gap-4 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
          >
            {steps.map((s) => (
              <motion.div
                key={s.n}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.18)" }}
                  >
                    {s.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-[11px] tracking-[0.25em] text-[#38BDF8] font-semibold">
                        {s.n}
                      </div>
                      <div className="text-white font-semibold">{s.title}</div>
                    </div>
                    <div className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                      {s.desc}
                    </div>
                  </div>
                </div>
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
              href="https://wa.me/569XXXXXXXX?text=Hola%20Vexia,%20quiero%20agendar%20un%20diagn%C3%B3stico"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold"
              style={{
                background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                boxShadow: "0 8px 25px rgba(37,99,235,0.25)",
              }}
            >
              Agendar diagnóstico
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

export default Nosotros;
