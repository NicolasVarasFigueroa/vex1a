import { motion } from 'framer-motion';
import { Calendar, Database, FileText, Check, MessageCircle, ArrowRight } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

const SectorShowcase = ({
    title = "Tu restaurante vendiendo incluso cuando nadie responde",
    subtitle = "VEXIA atiende pedidos, confirma reservas y registra todo automáticamente, 24/7.",
    bullets = [
        "Responde pedidos y consultas al instante",
        "Confirma reservas sin intervención humana",
        "Registra pedidos en tu sistema",
        "Te avisa solo cuando hace falta"
    ],
    kpis = [
        { value: "0", label: "pedidos perdidos" },
        { value: "24/7", label: "atención" },
        { value: "<3s", label: "respuesta" }
    ],
    ctaPrimary = "Ver demo para restaurantes",
    ctaSecondary = "Hablar por WhatsApp",
    messages = [],
}) => {

    const flowTargets = [
        { icon: Calendar, label: "Agenda", color: "#22C55E" },
        { icon: Database, label: "CRM", color: "#3B82F6" },
        { icon: FileText, label: "Reportes", color: "#8B5CF6" },
    ];

    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-5 md:px-6">

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left: Visual */}
                    <motion.div
                        className="relative order-1 lg:order-1"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative">
                            {/* Phone Mockup */}
                            <PhoneMockup messages={messages} />

                            {/* Flow Lines and Targets - Desktop Only */}
                            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-8 space-y-8">
                                {flowTargets.map((target, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-center gap-3"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
                                    >
                                        {/* Flow Line */}
                                        <div className="relative w-12 h-px">
                                            <motion.div
                                                className="absolute inset-0"
                                                style={{
                                                    background: `linear-gradient(90deg, rgba(37,99,235,0.3), ${target.color}50)`
                                                }}
                                                initial={{ scaleX: 0 }}
                                                whileInView={{ scaleX: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
                                            />
                                            <motion.div
                                                className="absolute w-1.5 h-1.5 rounded-full top-1/2 -translate-y-1/2"
                                                style={{
                                                    background: target.color,
                                                    boxShadow: `0 0 8px ${target.color}`
                                                }}
                                                animate={{ left: ['0%', '100%'] }}
                                                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                                            />
                                        </div>

                                        {/* Target Icon */}
                                        <motion.div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                                            style={{
                                                background: `${target.color}15`,
                                                border: `1px solid ${target.color}30`,
                                                boxShadow: `0 0 20px ${target.color}10`
                                            }}
                                            whileHover={{
                                                scale: 1.1,
                                                boxShadow: `0 0 30px ${target.color}30`
                                            }}
                                        >
                                            <target.icon
                                                className="w-5 h-5"
                                                style={{ color: target.color }}
                                                strokeWidth={1.5}
                                            />
                                        </motion.div>
                                        <span className="text-xs text-[#94A3B8]">{target.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile: Flow icons below phone */}
                        <div className="lg:hidden flex justify-center gap-4 mt-6">
                            {flowTargets.map((target, i) => (
                                <motion.div
                                    key={i}
                                    className="flex flex-col items-center gap-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                >
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                                        style={{
                                            background: `${target.color}15`,
                                            border: `1px solid ${target.color}30`,
                                        }}
                                    >
                                        <target.icon
                                            className="w-4 h-4"
                                            style={{ color: target.color }}
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <span className="text-[10px] text-[#64748B]">{target.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        className="order-2 lg:order-2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Title */}
                        <h2
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4"
                            style={{ textShadow: '0 0 40px rgba(56,189,248,0.2)' }}
                        >
                            {title}
                        </h2>

                        {/* Subtitle */}
                        <p className="text-[#94A3B8] text-base lg:text-lg mb-6">
                            {subtitle}
                        </p>

                        {/* Bullets */}
                        <ul className="space-y-3 mb-8">
                            {bullets.map((bullet, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                >
                                    <div
                                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                        style={{ background: 'rgba(34,197,94,0.15)' }}
                                    >
                                        <Check className="w-3 h-3 text-[#22C55E]" />
                                    </div>
                                    <span className="text-[#E2E8F0] text-sm lg:text-base">{bullet}</span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* KPIs */}
                        <div className="flex gap-6 mb-8">
                            {kpis.map((kpi, i) => (
                                <motion.div
                                    key={i}
                                    className="px-4 py-2 rounded-xl"
                                    style={{
                                        background: 'rgba(37,99,235,0.08)',
                                        border: '1px solid rgba(37,99,235,0.15)',
                                    }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    whileHover={{
                                        borderColor: 'rgba(37,99,235,0.35)',
                                        boxShadow: '0 0 20px rgba(37,99,235,0.1)'
                                    }}
                                >
                                    <div
                                        className="text-xl font-bold text-[#3B82F6]"
                                        style={{ textShadow: '0 0 15px rgba(59,130,246,0.4)' }}
                                    >
                                        {kpi.value}
                                    </div>
                                    <div className="text-xs text-[#64748B]">{kpi.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <motion.button
                                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white"
                                style={{
                                    background: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
                                    boxShadow: '0 4px 25px rgba(37,99,235,0.4)',
                                }}
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: '0 8px 40px rgba(37,99,235,0.5)'
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {ctaPrimary}
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>

                            <motion.button
                                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-white border border-[#25D366]/40"
                                whileHover={{
                                    borderColor: '#25D366',
                                    backgroundColor: 'rgba(37,211,102,0.08)',
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                                {ctaSecondary}
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background glow */}
            <div
                className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
            />
        </section>
    );
};

export default SectorShowcase;
