import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wallet, ShieldAlert, LineChart, MessageSquare, Clock, Users, ArrowRight, Phone } from 'lucide-react';

const CompactFeature = ({ icon: Icon, title, description, accentColor, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.4 }}
        className="flex items-start gap-4 p-4 rounded-xl bg-[#0A0E18]/60 border border-white/5 transition-all hover:border-white/10 hover:-translate-y-1 group"
        style={{ boxShadow: `inset 0 0 15px ${accentColor}05` }}
    >
        <div className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center transition-colors group-hover:scale-110"
             style={{ backgroundColor: `${accentColor}15`, border: `1px solid ${accentColor}30` }}>
            <Icon className="w-5 h-5" style={{ color: accentColor }} />
        </div>
        <div>
            <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
            <p className="text-[#94A3B8] text-xs leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

const FinanzasPage = () => {
    const accentColor = '#EF4444'; // Red for Finances

    return (
        <div className="min-h-screen pt-24 lg:pt-0 lg:flex lg:items-center px-4 sm:px-6 bg-[#05060A] overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none opacity-20" 
                 style={{ backgroundColor: '#B91C1C' }} />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none opacity-20" 
                 style={{ backgroundColor: accentColor }} />

            <div className="max-w-7xl mx-auto w-full relative z-10 py-8 lg:py-0">
                <Link to="/#sectores" className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-white text-sm transition-colors mb-6 lg:mb-8">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    Volver a Sectores
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    {/* LEFT COLUMN: HERO, KPIs, CTA */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-4 inline-block w-max"
                             style={{ backgroundColor: `${accentColor}15`, border: `1px solid ${accentColor}30`, color: accentColor }}>
                            <Wallet className="w-3.5 h-3.5" />
                            Finanzas y Cobranzas
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
                            Recuperación de cartera <br className="hidden lg:block"/>
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${accentColor}, #F87171)` }}>
                                Acelerada y Amigable
                            </span>
                        </h1>

                        <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                            VEXIA envía recordatorios y negocia compromisos de pago en un tono respetuoso vía WhatsApp, asegurando ingresos sin fricción.
                        </p>

                        {/* KPIs - Compact 2x2 Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {[
                                { label: 'Recuperación', value: '+45%', icon: LineChart },
                                { label: 'Contactabilidad', value: '+3x', icon: MessageSquare },
                                { label: 'Costos Call Center', value: '-50%', icon: Wallet },
                                { label: 'Compromisos', value: '78%', icon: ShieldAlert },
                            ].map((stat, idx) => (
                                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                                    className="p-3 rounded-xl bg-[#0A0E18]/80 border border-white/5 flex items-center gap-3">
                                    <stat.icon className="w-5 h-5 opacity-80" style={{ color: accentColor }} />
                                    <div>
                                        <div className="text-lg font-bold text-white leading-none">{stat.value}</div>
                                        <div className="text-[10px] text-[#94A3B8] uppercase mt-1 tracking-wider">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <motion.button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white shadow-lg w-full sm:w-auto"
                                style={{ background: `linear-gradient(135deg, ${accentColor}, #991B1B)`, boxShadow: `0 4px 20px ${accentColor}40` }}
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                Demo Financiera <ArrowRight className="w-4 h-4" />
                            </motion.button>
                            <motion.button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-colors w-full sm:w-auto"
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Phone className="w-4 h-4" /> Bajar Morosidad
                            </motion.button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: 6 FEATURES (Compact Grid) */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <CompactFeature 
                            icon={Clock} accentColor={accentColor} delay={0.1}
                            title="Avisos Preventivos" 
                            description="Envía las facturas días antes del vencimiento con gratitud y links transaccionales listos." />
                        <CompactFeature 
                            icon={MessageSquare} accentColor={accentColor} delay={0.2}
                            title="Cobranza Extrajudicial" 
                            description="Escalamiento progresivo automatizado según la antigüedad de la deuda del cliente." />
                        <CompactFeature 
                            icon={ShieldAlert} accentColor={accentColor} delay={0.3}
                            title="Promesas de Pago" 
                            description="Graba acuerdos bajo palabra y programa un bot para auto-verificar depósitos el día exacto." />
                        <CompactFeature 
                            icon={Wallet} accentColor={accentColor} delay={0.4}
                            title="Descuentos en Línea" 
                            description="Ofrece rebajas inteligentes en mora dura incentivando el pagó express del usuario." />
                        <CompactFeature 
                            icon={Users} accentColor={accentColor} delay={0.5}
                            title="Atención Previa de Dudas" 
                            description="Aclara boletas para el cliente que confunde cobros sin requerir llamados a tus agentes de cuenta." />
                        <CompactFeature 
                            icon={LineChart} accentColor={accentColor} delay={0.6}
                            title="Conciliación CRM" 
                            description="Aviso automático a sistema de finanzas cada vez que ingresa y se certifica un pago validado." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinanzasPage;
