import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Building2, Heart, ShoppingCart, Briefcase, GraduationCap, Wallet } from 'lucide-react';

const LazyVideo = ({ src, isHovered }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && videoRef.current) {
                    videoRef.current.play().catch(() => { });
                }
            },
            { threshold: 0.3 }
        );
        if (videoRef.current) observer.observe(videoRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <video
            ref={videoRef}
            muted loop playsInline autoPlay preload="metadata"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${isHovered ? 'opacity-80 scale-105' : 'opacity-40 scale-100'}`}
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true, margin: '-50px' }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group"
        >
            <Link to={`/sectores/${sector.slug}`} className="relative block rounded-xl overflow-hidden h-64">
                <motion.div
                    className="relative h-full"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                >
                    <LazyVideo src={sector.video} isHovered={isHovered} />

                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/70 to-[#05060A]/30" />

                    {/* Border glow */}
                    <motion.div
                        className="absolute inset-0 rounded-xl"
                        style={{ border: '1px solid rgba(37,99,235,0.1)' }}
                        animate={{
                            borderColor: isHovered ? 'rgba(37,99,235,0.35)' : 'rgba(37,99,235,0.1)',
                            boxShadow: isHovered ? '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(37,99,235,0.08)' : 'none'
                        }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                        {/* Icon */}
                        <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{
                                background: 'rgba(37,99,235,0.1)',
                                border: '1px solid rgba(37,99,235,0.2)',
                            }}
                        >
                            <Icon className="w-4 h-4 text-[#3B82F6]" strokeWidth={1.5} />
                        </div>

                        {/* Text */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-1.5 group-hover:text-[#38BDF8] transition-colors duration-300">
                                {sector.name}
                            </h3>
                            <p className="text-sm text-[#94A3B8] leading-relaxed mb-3">{sector.headline}</p>

                            {/* CTA */}
                            <motion.div
                                className="flex items-center gap-2 text-sm font-medium text-[#3B82F6]/70 group-hover:text-[#38BDF8]"
                                animate={{ x: isHovered ? 5 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span>Ver cómo te ayudamos</span>
                                <span>→</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
};

const Sectores = () => {
    const sectores = [
        { slug: 'restaurantes', name: 'Restaurantes & Delivery', headline: 'Te ayudamos a atender más pedidos sin sumar personal.', video: '/videos/restaurantes.mp4', icon: Building2 },
        { slug: 'clinicas-salud', name: 'Clínicas y Salud', headline: 'Te ayudamos a que los pacientes lleguen a su cita.', video: '/videos/Salud.mp4', icon: Heart },
        { slug: 'ecommerce', name: 'E-commerce & Retail', headline: 'Te ayudamos a recuperar ventas que hoy se pierden.', video: '/videos/ecommerce.mp4', icon: ShoppingCart },
        { slug: 'servicios-profesionales', name: 'Servicios Profesionales', headline: 'Te ayudamos a que ningún lead se quede sin respuesta.', video: '/videos/Servicios Profesionales.mp4', icon: Briefcase },
        { slug: 'educacion-cursos', name: 'Educación & Cursos', headline: 'Te ayudamos a que los estudiantes no deserten.', video: '/videos/educacion.mp4', icon: GraduationCap },
        { slug: 'finanzas-cobranzas', name: 'Finanzas y Cobranzas', headline: 'Te ayudamos a cobrar más, con menos esfuerzo.', video: '/videos/cobranza.mp4', icon: Wallet },
    ];

    return (
        <section id="sectores" className="relative py-28 lg:py-36 overflow-hidden">
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)' }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-xs font-medium tracking-[0.2em] text-[#38BDF8] uppercase mb-6">
                        Tu industria
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Entendemos los desafíos{' '}
                        <span
                            className="text-[#3B82F6]"
                            style={{ textShadow: '0 0 20px rgba(56,189,248,0.4)' }}
                        >
                            de tu sector
                        </span>
                    </h2>
                    <p className="mt-4 text-[#94A3B8] text-lg max-w-xl mx-auto">
                        No aplicamos la misma solución para todos. Diseñamos automatización específica para cómo funciona tu industria.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sectores.map((sector, index) => (
                        <SectorCard key={sector.slug} sector={sector} index={index} />
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-sm text-[#64748B]">
                        ¿No ves tu sector? <span className="text-[#3B82F6] cursor-pointer hover:underline">Cuéntanos sobre tu negocio →</span>
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
