import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Zap, TrendingUp, Search, MessageCircle, Truck, ArrowRight, RefreshCcw, MousePointerClick } from 'lucide-react';

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

const EcommercePage = () => {
    const accentColor = '#8B5CF6'; // Violet for E-commerce

    return (
        <div className="min-h-screen pt-24 lg:pt-0 lg:flex lg:items-center px-4 sm:px-6 bg-[#05060A] overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none opacity-20" 
                 style={{ backgroundColor: '#DB2777' }} />
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
                            <ShoppingCart className="w-3.5 h-3.5" />
                            E-commerce & Retail
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
                            Ventas Rescatadas al <br className="hidden lg:block"/>
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${accentColor}, #F472B6)` }}>
                                Instante con IA
                            </span>
                        </h1>

                        <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                            VEXIA rescata a los clientes que se van sin pagar y responde dudas sobre envíos en segundos, automatizando el post-venta de tu tienda las 24 horas.
                        </p>

                        {/* KPIs - Compact 2x2 Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {[
                                { label: 'Recupero', value: '+35%', icon: TrendingUp },
                                { label: 'T. Respuesta', value: '< 1s', icon: Zap },
                                { label: 'Resolución', value: '90%', icon: MessageCircle },
                                { label: 'Retención', value: '+2x', icon: RefreshCcw },
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
                                style={{ background: `linear-gradient(135deg, ${accentColor}, #DB2777)`, boxShadow: `0 4px 20px ${accentColor}40` }}
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                Ver Integración Shopify <ArrowRight className="w-4 h-4" />
                            </motion.button>
                            <motion.button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-colors w-full sm:w-auto"
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <MousePointerClick className="w-4 h-4" /> Calcular ROI
                            </motion.button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: 6 FEATURES (Compact Grid) */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <CompactFeature 
                            icon={ShoppingCart} accentColor={accentColor} delay={0.1}
                            title="Recuperación de Carritos" 
                            description="Envía un mensaje dinámico con o sin descuento justo cuando el cliente abandona." />
                        <CompactFeature 
                            icon={Truck} accentColor={accentColor} delay={0.2}
                            title="Tracking de Envíos" 
                            description="Conectado a tu courier (Starken, etc.) para responder en vivo dónde está el paquete." />
                        <CompactFeature 
                            icon={Search} accentColor={accentColor} delay={0.3}
                            title="Asesor de Tallas / Stock" 
                            description="Consulta el inventario y sugiere productos equivalentes basados en las dudas del cliente." />
                        <CompactFeature 
                            icon={MessageCircle} accentColor={accentColor} delay={0.4}
                            title="Atención Pre-Venta 24/7" 
                            description="Respuestas sin demora sobre métodos de pago y garantías por WhatsApp o Instagram." />
                        <CompactFeature 
                            icon={RefreshCcw} accentColor={accentColor} delay={0.5}
                            title="Logística de Devolución" 
                            description="Guía al usuario para procesar devoluciones o cambios pidiendo fotos e información clave." />
                        <CompactFeature 
                            icon={TrendingUp} accentColor={accentColor} delay={0.6}
                            title="Re-marketing y Up-sell" 
                            description="Mensajes proactivos por WhatsApp recomendando re-compra de productos habituales." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcommercePage;
