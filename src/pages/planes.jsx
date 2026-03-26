import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Cpu, Smartphone, LayoutDashboard, Link as LinkIcon, CheckCircle2, MessageSquare, Phone, Zap, Infinity, Info, Briefcase, MessageCircle, Monitor } from "lucide-react";
import ContratoModal from "../components/ContratoModal";
import ContratoWebModal from "../components/ContratowebModal";

// Custom icons for socials mimicking the screenshot
const WhatsAppIcon = () => <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.573c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>;
const InstagramIcon = () => <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const MessengerIcon = () => <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
const TikTokIcon = () => <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>;

const Planes = () => {
  const [openContrato, setOpenContrato] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [openWebContrato, setOpenWebContrato] = useState(false);
  const [webType, setWebType] = useState("estatica");
  const [showWebs, setShowWebs] = useState(false);

  const planes = [
    {
      id: "normal",
      name: "Agente Normal",
      badges: [{ icon: <MessageSquare size={12}/>, text: "Básico", blue: true }],
      mes1: "Estrategia",
      mes2: "Desarrollo",
      mes3: "$250.000",
      conversaciones: "Atención 24/7 sin descansos",
      isCustomMes: false,
      btnColor: "bg-[#0F55D4] hover:bg-[#1D4ED8]",
      base: [
        { icon: <MessageSquare size={16} className="text-[#3B82F6] flex-shrink-0" />, text: "Respuestas automáticas a clientes" },
        { icon: <CheckCircle2 size={16} className="text-[#3B82F6] flex-shrink-0" />, text: "Preguntas frecuentes solucionadas" },
        { icon: <Smartphone size={16} className="text-[#3B82F6] flex-shrink-0" />, text: "Activación en plataformas base" },
        { icon: <LinkIcon size={16} className="text-[#3B82F6] flex-shrink-0" />, text: "Pase a humano cuando sea necesario" },
      ],
      equipo: { text: "Implementación", subtext: "Personalizada con ingeniero" },
      ia: {
        modelosText: "MODELOS\nBASE",
        modelosVal: "Respuestas\nRápidas",
        modelosSub: "IA Estándar",
        embudos: "Interno",
        socials: ["wa", "ig"]
      },
      precios: [
        { icon: <Info size={14}/>, text: "Ideal para automatizar lo más repetitivo" },
        { icon: <Monitor size={14}/>, text: "Consultoría mensual opcional" }
      ]
    },
    {
      id: "omnicanal",
      name: "Agente Multicanal",
      badges: [{ icon: <Zap size={12}/>, text: "Avanzado", blue: true }, { icon: <MessageSquare size={12}/>, text: "Popular", yellow: true }],
      mes1: "Entrenamiento",
      mes2: "Ajuste IA",
      mes3: "$450.000",
      conversaciones: "Interacciones complejas en todos lados",
      isCustomMes: false,
      btnColor: "bg-[#0F55D4] hover:bg-[#1D4ED8]",
      base: [
        { icon: <Cpu size={16} className="text-[#3B82F6] flex-shrink-0" />, text: "Vendedores IA con memoria y contexto" },
        { icon: <LinkIcon size={16} className="text-[#3B82F6] flex-shrink-0" />, text: "Integración base de datos y sistemas" },
        { icon: <Smartphone size={16} className="text-[#3B82F6] flex-shrink-0" />, text: "Triggers en TODAS las plataformas" },
        { icon: <Zap size={16} className="text-[#3B82F6] flex-shrink-0" />, text: "Aprendizaje continuo según interacción" },
      ],
      equipo: { text: "Implementación Avanzada", subtext: "Personalizada con ingeniero" },
      ia: {
        modelosText: "TODOS LOS\nMODELOS",
        modelosVal: "",
        modelosSub: "ChatGPT, Claude,\nGemini, etc.",
        embudos: "Múltiples",
        socials: ["wa", "ig", "msg", "tk"]
      },
      precios: [
        { icon: <Info size={14}/>, text: "Para escalar ventas y centralizar todo el chat" },
        { icon: <Monitor size={14}/>, text: "Consumo API avanzado según volumen" }
      ]
    },
    {
      id: "pro_bi",
      name: "Agente PRO + BI",
      badges: [{ icon: <LayoutDashboard size={12}/>, blue: true }, { icon: <Zap size={12}/>, yellow: true }, { icon: <Briefcase size={12}/>, purple: true }],
      mes1: "UN PLAN",
      mes2: "DISEÑADO A LA MEDIDA",
      mes3: "$750.000",
      conversaciones: "Todo completo + Business Intelligence",
      isCustomMes: true,
      btnColor: "bg-[#7C3AED] hover:bg-[#8B5CF6]",
      base: [
        { icon: <Zap size={16} className="text-[#A855F7] flex-shrink-0" />, text: "Agente Multicanal 100% completo" },
        { icon: <LayoutDashboard size={16} className="text-[#A855F7] flex-shrink-0" />, text: "Dashboards analíticos de la empresa" },
        { icon: <CheckCircle2 size={16} className="text-[#A855F7] flex-shrink-0" />, text: "Control de KPIs (Ventas, conversiones)" },
        { icon: <LinkIcon size={16} className="text-[#A855F7] flex-shrink-0" />, text: "Toma de decisiones con IA predictiva" },
      ],
      equipo: { text: "Consultoría 1 a 1", subtext: "Personalizada con ingenieros" },
      ia: {
        modelosText: "IA ROBUSTA\n+ DATOS",
        modelosVal: "",
        modelosSub: "Modelos Custom y\nAnálisis Predictivo",
        embudos: "Custom",
        socials: ["wa", "ig", "msg", "tk"]
      },
      precios: [
        { icon: <Info size={14}/>, text: "Triggers ilimitados, analítica y reportes" },
        { icon: <Monitor size={14}/>, text: "Para gerencia y control de crecimiento" }
      ]
    }
  ];

  const websData = [
    {
      id: "estatica",
      name: "Web Estática",
      badges: [{ icon: <LayoutDashboard size={12}/>, text: "Landing", blue: true }],
      mes1: "Estrategia",
      mes2: "Desarrollo",
      mes3: "$250.000",
      conversaciones: "Landing / Sitio corporativo",
      isCustomMes: false,
      btnColor: "bg-[#0F55D4] hover:bg-[#1D4ED8]",
      action: "estatica",
      base: [
        { icon: <CheckCircle2 size={16} className="text-[#3B82F6] flex-shrink-0" />, text: "1–5 secciones (Inicio, Servicios, Contacto)" },
        { icon: <Smartphone size={16} className="text-[#3B82F6] flex-shrink-0" />, text: "Diseño moderno y 100% responsivo" },
        { icon: <Zap size={16} className="text-[#3B82F6] flex-shrink-0" />, text: "Optimización SEO y alta velocidad" },
        { icon: <MessageSquare size={16} className="text-[#3B82F6] flex-shrink-0" />, text: "Formulario nativo y botón de WhatsApp" },
      ],
      equipo: { text: "Diseño UI/UX", subtext: "A medida de la marca" },
      iaLabel: "HOSTING Y SEGURIDAD",
      ia: {
        modelosText: "HOSTING\nBÁSICO",
        modelosVal: "Incluido",
        modelosSub: "Por el 1er año",
        embudos: "SSL",
        socials: []
      },
      precios: [
        { icon: <Info size={14}/>, text: "Precio fijo único pago por desarrollo" },
        { icon: <Monitor size={14}/>, text: "Mantenimiento mensual opcional: $30k–$80k" }
      ]
    },
    {
      id: "funcional",
      name: "Web Funcional",
      badges: [{ icon: <Cpu size={12}/>, text: "Sistemas", yellow: true }, { icon: <Briefcase size={12}/>, text: "Avanzado", purple: true }],
      conversaciones: "Plataformas, E-commerce, Paneles",
      isCustomMes: true,
      mes3: "$900.000",
      btnColor: "bg-[#7C3AED] hover:bg-[#8B5CF6]",
      action: "funcional",
      base: [
        { icon: <Cpu size={16} className="text-[#A855F7] flex-shrink-0" />, text: "Backend robusto y base de datos" },
        { icon: <LayoutDashboard size={16} className="text-[#A855F7] flex-shrink-0" />, text: "Panel de administración avanzado" },
        { icon: <CheckCircle2 size={16} className="text-[#A855F7] flex-shrink-0" />, text: "Integración de pasarelas de pago" },
        { icon: <LinkIcon size={16} className="text-[#A855F7] flex-shrink-0" />, text: "APIs y Webhooks a otros sistemas" },
      ],
      equipo: { text: "Desarrollo a la medida", subtext: "Equipo full-stack" },
      iaLabel: "INFRAESTRUCTURA",
      ia: {
        modelosText: "HOSTING\nAVANZADO",
        modelosVal: "AWS o\nGoogle",
        modelosSub: "Alta Escalabilidad",
        embudos: "SSL + BD",
        socials: []
      },
      precios: [
        { icon: <Info size={14}/>, text: "Valor desde, requiere evaluación del proyecto" },
        { icon: <Monitor size={14}/>, text: "Mantenimiento mensual opcional: $120k–$450k" }
      ]
    }
  ];

  const abrirContrato = (plan) => {
    setSelectedPlan(plan);
    setOpenContrato(true);
  };

  const aceptarContrato = () => {
    setOpenContrato(false);
    const planText = selectedPlan?.name || "Plan VEXIA";
    const msg = encodeURIComponent(`Hola Vexia, quiero agendar una demo y conocer el plan: ${planText}`);
    window.open(`https://wa.me/569XXXXXXXX?text=${msg}`, "_blank");
  };

  // Webs
  const abrirContratoWeb = (type) => {
    setWebType(type);
    setOpenWebContrato(true);
  };

  const aceptarContratoWeb = () => {
    setOpenWebContrato(false);
    const msg =
      webType === "estatica"
        ? "Hola Vexia, quiero contratar una WEB ESTÁTICA."
        : "Hola Vexia, quiero solicitar evaluación para una WEB FUNCIONAL.";
    window.open(`https://wa.me/569XXXXXXXX?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <>
      <section id="precios" className="relative py-16 md:py-28 lg:py-36 overflow-hidden bg-[#020617]">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-6">
          {/* Header */}
          <motion.div
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-medium tracking-[0.2em] text-[#38BDF8] uppercase mb-6">
              Nuestros Planes
            </span>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Diseñados para <span className="text-[#3B82F6]" style={{ textShadow: "0 0 20px rgba(56,189,248,0.4)" }}>escalar</span>
            </h2>
          </motion.div>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-12 relative z-20">
            <div className="bg-[#0A0F1C] p-1.5 rounded-full border border-white/5 inline-flex relative overflow-hidden">
              <button
                onClick={() => setShowWebs(false)}
                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${!showWebs ? 'text-white' : 'text-[#64748B] hover:text-white'}`}
              >
                {(!showWebs) && (
                  <motion.div layoutId="activeTab" className="absolute inset-0 bg-[#0F55D4] rounded-full shadow-[0_0_20px_rgba(56,189,248,0.3)]" style={{ zIndex: -1 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} />
                )}
                Planes IA
              </button>
              <button
                onClick={() => setShowWebs(true)}
                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${showWebs ? 'text-white' : 'text-[#64748B] hover:text-white'}`}
              >
                {(showWebs) && (
                  <motion.div layoutId="activeTab" className="absolute inset-0 bg-[#0F55D4] rounded-full shadow-[0_0_20px_rgba(56,189,248,0.3)]" style={{ zIndex: -1 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} />
                )}
                Otras Tecnologías
              </button>
            </div>
          </div>

          <div className="relative min-h-[600px]">
            <AnimatePresence mode="wait">
              {!showWebs && (
                <motion.div
                  key="ai-grid"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Plans grid */}
                  <div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                  >
            {planes.map((plan, index) => (
              <motion.div key={index} variants={cardVariants} className="group flex flex-col">
                <div
                  className="relative rounded-2xl p-6 md:p-8 h-full flex flex-col border"
                  style={{
                    background: "rgba(10,14,24,0.95)",
                    borderColor: plan.id === "corporate" ? "rgba(168,85,247,0.2)" : "rgba(37,99,235,0.15)",
                    boxShadow: plan.id === "corporate" ? "0 0 40px rgba(168,85,247,0.05)" : "none"
                  }}
                >
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <div className="flex gap-2">
                      {plan.badges.map((badge, i) => (
                        <div key={i} className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium
                          ${badge.blue ? 'border-[#3B82F6]/30 text-[#3B82F6] bg-[#3B82F6]/10' : ''}
                          ${badge.yellow ? 'border-[#EAB308]/30 text-[#EAB308] bg-[#EAB308]/10' : ''}
                          ${badge.purple ? 'border-[#A855F7]/30 text-[#A855F7] bg-[#A855F7]/10' : ''}
                        `}>
                          {badge.icon}
                          {badge.text && <span>{badge.text}</span>}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col gap-6 mb-8 mt-2">
                    {/* Funciones Base */}
                    <div>
                      <h4 className="text-xs text-[#64748B] font-bold mb-4">FUNCIONES BASE</h4>
                      <ul className="space-y-3">
                        {plan.base.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-[#E2E8F0]">
                            {item.icon}
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Equipo y Soporte */}
                    <div>
                      <h4 className="text-xs text-[#64748B] font-bold mb-4">IMPLEMENTACIÓN Y SOPORTE</h4>
                      <div className="border border-white/10 rounded-xl p-4 flex flex-col bg-transparent">
                          <span className="text-sm font-bold text-white">{plan.equipo.text}</span>
                          <span className="text-xs text-[#94A3B8] mt-1">{plan.equipo.subtext}</span>
                      </div>
                    </div>

                    {/* IA y Automatización */}
                    <div>
                      <h4 className="text-xs text-[#64748B] font-bold mb-4">IA Y AUTOMATIZACIÓN</h4>
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="border border-white/10 rounded-xl p-4 flex flex-col justify-center bg-transparent min-h-[85px]">
                          <span className="text-xs font-semibold text-white whitespace-pre-line leading-tight">{plan.ia.modelosText}</span>
                          {plan.ia.modelosVal && <span className="text-[13px] font-bold text-white mt-1 whitespace-pre-line leading-tight">{plan.ia.modelosVal}</span>}
                          {plan.ia.modelosSub && <span className="text-[10px] text-[#94A3B8] mt-1 whitespace-pre-line leading-tight">{plan.ia.modelosSub}</span>}
                        </div>
                        <div className="flex flex-col gap-3">
                          <div className="border border-white/10 rounded-xl p-3 flex items-center bg-transparent">
                            <span className="w-2 h-2 rounded-full bg-[#3B82F6] mr-2"></span>
                            <span className="text-xs font-bold text-white">{plan.ia.embudos}</span>
                          </div>
                          <div className="border border-white/10 rounded-xl p-2.5 flex justify-evenly items-center bg-transparent">
                            {plan.ia.socials.includes("wa") && <WhatsAppIcon />}
                            {plan.ia.socials.includes("ig") && <InstagramIcon />}
                            {plan.ia.socials.includes("msg") && <MessengerIcon />}
                            {plan.ia.socials.includes("tk") && <TikTokIcon />}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col pt-6 border-t border-white/5">
                    {/* Pricing Block */}
                    <div className="mb-6 flex flex-col min-h-[80px]">
                      {plan.isCustomMes ? (
                        <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col items-center justify-center">
                          <Briefcase className="w-8 h-8 text-[#A855F7] mb-2" />
                          <p className="font-bold text-white text-sm tracking-widest">UN PLAN</p>
                          <p className="text-xs text-[#94A3B8] mt-1 tracking-wider">DISEÑADO A LA MEDIDA</p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-xs text-[#94A3B8] uppercase tracking-widest font-semibold mb-2">Inversión mensual</p>
                          <div className="flex items-baseline mb-1">
                            <span className="text-4xl md:text-5xl font-bold text-white">{plan.mes3}</span>
                            <span className="text-sm text-[#94A3B8] ml-2">/mes</span>
                          </div>
                          <p className="text-xs text-[#64748B] mt-2 font-medium">{plan.conversaciones}</p>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => abrirContrato(plan)}
                      className={`w-full py-4 rounded-xl text-white font-bold tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${plan.btnColor}`}
                    >
                      Solicitar Presupuesto
                    </button>

                    {/* Precios extra */}
                    <div className="mt-6 pt-5 border-t border-white/5">
                      <h4 className="text-[10px] uppercase text-[#64748B] font-bold mb-3">TÉRMINOS Y CONDICIONES</h4>
                      <ul className="space-y-2">
                        {plan.precios.map((p, i) => (
                          <li key={i} className="flex items-center gap-2 text-[10px] md:text-xs text-[#94A3B8]">
                            <span className="text-[#3B82F6]/60">{p.icon}</span>
                            <span>{p.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
                  </div>
                </motion.div>
              )}

              {showWebs && (
                <motion.div
                  key="webs-grid"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* ✅ SECCIÓN WEBS */}
                  <section id="webs" className="relative md:py-8">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-medium tracking-[0.2em] text-[#38BDF8] uppercase mb-6">
                Sitios Web
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Páginas web <span className="text-[#3B82F6]">estáticas</span> y{" "}
                <span className="text-[#3B82F6]">funcionales</span>
              </h2>
              <p className="mt-4 text-[#94A3B8] max-w-xl mx-auto">
                Web estática con precio fijo. Web funcional requiere evaluación (puede variar según requisitos).
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {websData.map((plan, index) => (
                <motion.div key={index} variants={cardVariants} className="group flex flex-col">
                  <div
                    className="relative rounded-2xl p-6 md:p-8 h-full flex flex-col border"
                    style={{
                      background: "rgba(10,14,24,0.95)",
                      borderColor: plan.id === "funcional" ? "rgba(168,85,247,0.2)" : "rgba(37,99,235,0.15)",
                      boxShadow: plan.id === "funcional" ? "0 0 40px rgba(168,85,247,0.05)" : "none"
                    }}
                  >
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {plan.badges.map((badge, i) => (
                          <div key={i} className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium
                            ${badge.blue ? 'border-[#3B82F6]/30 text-[#3B82F6] bg-[#3B82F6]/10' : ''}
                            ${badge.yellow ? 'border-[#EAB308]/30 text-[#EAB308] bg-[#EAB308]/10' : ''}
                            ${badge.purple ? 'border-[#A855F7]/30 text-[#A855F7] bg-[#A855F7]/10' : ''}
                          `}>
                            {badge.icon}
                            {badge.text && <span>{badge.text}</span>}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex-grow flex flex-col gap-6 mb-8 mt-2">
                      {/* Funciones Base */}
                      <div>
                        <h4 className="text-xs text-[#64748B] font-bold mb-4">ESPECIFICACIONES</h4>
                        <ul className="space-y-3">
                          {plan.base.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-[#E2E8F0]">
                              {item.icon}
                              <span>{item.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Equipo y Soporte */}
                      <div>
                        <h4 className="text-xs text-[#64748B] font-bold mb-4">DISEÑO Y DESARROLLO</h4>
                        <div className="border border-white/10 rounded-xl p-4 flex flex-col bg-transparent">
                            <span className="text-sm font-bold text-white">{plan.equipo.text}</span>
                            <span className="text-xs text-[#94A3B8] mt-1">{plan.equipo.subtext}</span>
                        </div>
                      </div>

                      {/* Hosting / Infraestructura */}
                      <div>
                        <h4 className="text-xs text-[#64748B] font-bold mb-4">{plan.iaLabel}</h4>
                        <div className="grid grid-cols-2 gap-3 mb-3">
                          <div className="border border-white/10 rounded-xl p-4 flex flex-col justify-center bg-transparent min-h-[85px]">
                            <span className="text-xs font-semibold text-white whitespace-pre-line leading-tight">{plan.ia.modelosText}</span>
                            {plan.ia.modelosVal && <span className="text-[13px] font-bold text-white mt-1 whitespace-pre-line leading-tight">{plan.ia.modelosVal}</span>}
                            {plan.ia.modelosSub && <span className="text-[10px] text-[#94A3B8] mt-1 whitespace-pre-line leading-tight">{plan.ia.modelosSub}</span>}
                          </div>
                          <div className="border border-white/10 rounded-xl p-4 flex flex-col justify-center items-center bg-transparent">
                            <CheckCircle2 className="w-5 h-5 text-[#3B82F6] mb-1"/>
                            <span className="text-xs font-bold text-white">{plan.ia.embudos}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto flex flex-col pt-6 border-t border-white/5">
                      {/* Pricing Block */}
                      <div className="mb-6 flex flex-col min-h-[80px]">
                        {plan.isCustomMes ? (
                          <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col items-center justify-center">
                            <Briefcase className="w-8 h-8 text-[#A855F7] mb-2" />
                            <p className="font-bold text-white text-sm tracking-widest">UN PROYECTO</p>
                            <p className="text-xs text-[#94A3B8] mt-1 tracking-wider">DISEÑADO A LA MEDIDA</p>
                          </div>
                        ) : (
                          <div>
                            <p className="text-xs text-[#94A3B8] uppercase tracking-widest font-semibold mb-2">Inversión fija</p>
                            <div className="flex items-baseline mb-1">
                              <span className="text-4xl md:text-5xl font-bold text-white">{plan.mes3}</span>
                              <span className="text-sm text-[#94A3B8] ml-2">clp</span>
                            </div>
                            <p className="text-xs text-[#64748B] mt-2 font-medium">{plan.conversaciones}</p>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => abrirContratoWeb(plan.action)}
                        className={`w-full py-4 rounded-xl text-white font-bold tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${plan.btnColor}`}
                      >
                        {plan.isCustomMes ? "Solicitar Evaluación" : "Contratar Web Estática"}
                      </button>

                      {/* Precios extra */}
                      <div className="mt-6 pt-5 border-t border-white/5">
                        <h4 className="text-[10px] uppercase text-[#64748B] font-bold mb-3">MANTENIMIENTO Y CONDICIONES</h4>
                        <ul className="space-y-2">
                          {plan.precios.map((p, i) => (
                            <li key={i} className="flex items-center gap-2 text-[10px] md:text-xs text-[#94A3B8]">
                              <span className="text-[#3B82F6]/60">{p.icon}</span>
                              <span>{p.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div
              className="mt-6 rounded-xl p-6 md:p-7"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(37,99,235,0.1)",
              }}
            >
              <h4 className="text-white font-semibold mb-2">
                Mantenimiento (mensual)
              </h4>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Cambios, mejoras, seguridad, respaldo y soporte. Lo nuevo se cobra
                como mantenimiento (bolsa de horas) o cotización aparte.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#94A3B8]">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                  Web estática: $30k–$80k
                </span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                  Web funcional: $120k–$450k+
                </span>
              </div>
            </div>
                  </section>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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

      {/* Modal contrato Planes */}
      <ContratoModal
        open={openContrato}
        planName={selectedPlan?.tag || selectedPlan?.name || ""}
        onClose={() => setOpenContrato(false)}
        onAccept={aceptarContrato}
      />

      {/* Modal contrato Web */}
      <ContratoWebModal
        open={openWebContrato}
        webType={webType}
        onClose={() => setOpenWebContrato(false)}
        onAccept={aceptarContratoWeb}
      />
    </>
  );
};

export default Planes;