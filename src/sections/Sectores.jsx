import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Building2, Heart, ShoppingCart, Briefcase, GraduationCap, Wallet, ArrowRight, MousePointerClick } from 'lucide-react';

const LazyVideo = ({ src, isHovered }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && videoRef.current) {
                    videoRef.current.play().catch(() => { });
                } else if (!entry.isIntersecting && videoRef.current) {
                    videoRef.current.pause();
                }
            },
            { threshold: 0.1 }
        );
        if (videoRef.current) observer.observe(videoRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <video
            ref={videoRef}
            muted loop playsInline autoPlay preload="metadata"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isHovered ? 'opacity-70 scale-105' : 'opacity-30 scale-100'}`}
        >
            <source src={src} type="video/mp4" />
        </video>
    );
};

const SectorCard = ({ sector, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = sector.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true, margin: '-50px' }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group h-full"
        >
            <Link to={`/sectores/${sector.slug}`} className="relative flex flex-col w-full text-left rounded-2xl overflow-hidden min-h-[18rem] md:min-h-[20rem] bg-[#0A0E18] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-white/10"
                style={{ 
                    boxShadow: isHovered ? `0 20px 40px -10px ${sector.color}30, inset 0 0 20px ${sector.color}05` : 'none',
                }}
            >
                <LazyVideo src={sector.video} isHovered={isHovered} />

                {/* Gradient Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/80 to-[#05060A]/40" />

                <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-between z-10 w-full h-full">
                    <div className="flex justify-between items-start">
                        {/* Icon */}
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                            style={{
                                background: `${sector.color}15`,
                                border: `1px solid ${sector.color}30`,
                            }}
                        >
                            <Icon className="w-5 h-5" style={{ color: sector.color }} strokeWidth={2} />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300"
                            style={{ color: isHovered ? sector.color : 'white' }}>
                            {sector.name}
                        </h3>
                        <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">{sector.headline}</p>

                        {/* CTA Button */}
                        <div className="mt-auto">
                            <span 
                                className="inline-flex items-center justify-between w-full gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300"
                                style={{ 
                                    backgroundColor: isHovered ? sector.color : 'rgba(255,255,255,0.03)',
                                    color: isHovered ? '#fff' : sector.color,
                                    border: `1px solid ${isHovered ? 'transparent' : `${sector.color}30`}`,
                                    boxShadow: isHovered ? `0 0 20px ${sector.color}40` : 'none'
                                }}
                            >
                                <span className="flex items-center gap-2">
                                    <MousePointerClick className="w-4 h-4" />
                                    Haz click para ver tu sector
                                </span>
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

const Sectores = () => {
    const sectores = [
        { slug: "restaurantes", name: "Restaurantes & Delivery", headline: "Atiende pedidos, cobra y controla stock en piloto automático 24/7.", icon: Building2, color: "#38BDF8", video: "/videos/restaurantes.mp4" },
        { slug: "clinicas-salud", name: "Clínicas y Salud", headline: "Confirma horas, llena ausencias y responde consultas médicas al instante.", icon: Heart, color: "#10B981", video: "/videos/Salud.mp4" },
        { slug: "ecommerce", name: "E-commerce & Retail", headline: "Recupera carritos abandonados y da tracking de envíos sin demoras.", icon: ShoppingCart, color: "#8B5CF6", video: "/videos/ecommerce.mp4" },
        { slug: "servicios-profesionales", name: "Servicios Profesionales", headline: "Califica leads en caliente y agéndalos directo en tu calendario.", icon: Briefcase, color: "#3B82F6", video: "/videos/Servicios Profesionales.mp4" },
        { slug: "educacion-cursos", name: "Educación & Cursos", headline: "Matricula sin fricción y previene la deserción con alertas tempranas.", icon: GraduationCap, color: "#F59E0B", video: "/videos/educacion.mp4" },
        { slug: "finanzas-cobranzas", name: "Finanzas y Cobranzas", headline: "Acelera la recuperación y negocia pagos en un tono amigable.", icon: Wallet, color: "#EF4444", video: "/videos/cobranza.mp4" },
    ];

    return (
        <section id="sectores" className="relative py-16 md:py-28 lg:py-36 overflow-hidden bg-[#05060A]">
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)' }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-10 md:mb-14"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-xs font-medium tracking-[0.2em] text-[#38BDF8] uppercase mb-6">
                        Automatización por Industria
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Entendemos los desafíos{' '}
                        <span
                            className="text-[#3B82F6]"
                            style={{ textShadow: '0 0 30px rgba(56,189,248,0.5)' }}
                        >
                            de tu sector
                        </span>
                    </h2>
                    <p className="mt-3 md:mt-4 text-[#94A3B8] text-base md:text-lg max-w-xl mx-auto">
                        <strong className="text-white font-medium">Selecciona tu industria haciendo click en las tarjetas</strong> para descubrir tu automatización específica.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {sectores.map((sector, index) => (
                        <SectorCard key={sector.slug} sector={sector} index={index} />
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    className="text-center mt-12 md:mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-sm text-[#64748B] flex flex-col sm:flex-row items-center justify-center gap-2">
                        <span>¿No ves tu sector?</span>
                        <a
                            href="https://wa.me/569XXXXXXXX?text=Hola%20Vexia,%20mi%20sector%20es%20____%20y%20quiero%20ver%20c%C3%B3mo%20automatizar"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white font-medium hover:text-[#3B82F6] transition-colors border-b border-white/20 hover:border-[#3B82F6] pb-0.5"
                        >
                             Cuéntanos sobre tu negocio
                        </a>
                    </p>
                </motion.div>
            </div>

            <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)' }}
            />
        </section>
    );
};

export default Sectores;
