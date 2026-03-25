import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Bell, Users, Clock, ShieldCheck, ArrowRight, Phone } from 'lucide-react';

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

const EducacionPage = () => {
    const accentColor = '#F59E0B'; // Amber for Education

    return (
        <div className="min-h-screen pt-24 lg:pt-0 lg:flex lg:items-center px-4 sm:px-6 bg-[#05060A] overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none opacity-20" 
                 style={{ backgroundColor: '#D97706' }} />
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
                            <GraduationCap className="w-3.5 h-3.5" />
                            Educación & Cursos
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
                            Sube matrículas y <br className="hidden lg:block"/>
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${accentColor}, #FCD34D)` }}>
                                Frena la Deserción
                            </span>
                        </h1>

                        <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                            VEXIA inscribe nuevos alumnos a cualquier hora y envía recordatorios clave para mantener a tu comunidad estudiantil activa.
                        </p>

                        {/* KPIs - Compact 2x2 Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {[
                                { label: 'Matriculados', value: '+45%', icon: Users },
                                { label: 'Deserción', value: '-60%', icon: ShieldCheck },
                                { label: 'Respuesta', value: '< 2s', icon: Clock },
                                { label: 'Soporte', value: '24/7', icon: BookOpen },
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
                                style={{ background: `linear-gradient(135deg, ${accentColor}, #D97706)`, boxShadow: `0 4px 20px ${accentColor}40` }}
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                Demo Institucional <ArrowRight className="w-4 h-4" />
                            </motion.button>
                            <motion.button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-colors w-full sm:w-auto"
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Phone className="w-4 h-4" /> Hablar con Experto
                            </motion.button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: 6 FEATURES (Compact Grid) */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <CompactFeature 
                            icon={GraduationCap} accentColor={accentColor} delay={0.1}
                            title="Admisión 24/7 Automática" 
                            description="Informa aranceles, mallas curriculares e impulsa al postulante a inscribirse directo." />
                        <CompactFeature 
                            icon={BookOpen} accentColor={accentColor} delay={0.2}
                            title="Soporte Académico" 
                            description="Aclara dudas sobre notas institucionales, inicio de clases o solicitud de certificados." />
                        <CompactFeature 
                            icon={Bell} accentColor={accentColor} delay={0.3}
                            title="Alertas Estudiantiles" 
                            description="Notifica masivamente cambios de aulas, evaluaciones o suspensiones sorpresivas al celular." />
                        <CompactFeature 
                            icon={ShieldCheck} accentColor={accentColor} delay={0.4}
                            title="Control de Deserción" 
                            description="Activa alarmas si un alumno falta crónicamente y le escribe un WhatsApp empático a tiempo." />
                        <CompactFeature 
                            icon={Users} accentColor={accentColor} delay={0.5}
                            title="Venta Cruzada Ex-Alumnos" 
                            description="Difunde diplomados y posgrados targeteados a egresados vía mensajería proactiva." />
                        <CompactFeature 
                            icon={Clock} accentColor={accentColor} delay={0.6}
                            title="Cobranza Amigable" 
                            description="Recordatorios de cuotas sin fricción cuidando la relación educativa-institucional con el aprendiz." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducacionPage;
