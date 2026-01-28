import { motion } from 'framer-motion';
import { MessageCircle, Settings, Sparkles } from 'lucide-react';

const EnQueAyudamos = () => {
    const pasos = [
        {
            numero: '01',
            icon: MessageCircle,
            titulo: 'Escuchamos tu operación',
            descripcion: 'Entendemos cómo funciona tu negocio hoy, dónde están los cuellos de botella y qué tareas te quitan más tiempo.',
        },
        {
            numero: '02',
            icon: Settings,
            titulo: 'Diseñamos tu solución',
            descripcion: 'Creamos los flujos y agentes que necesitas, integrados con las herramientas que ya usas. Sin disrupciones.',
        },
        {
            numero: '03',
            icon: Sparkles,
            titulo: 'Lo hacemos funcionar',
            descripcion: 'Implementamos todo, lo monitoreamos y lo mantenemos. Tú solo ves los resultados.',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    return (
        <section id="como-ayudamos" className="relative py-16 md:py-28 lg:py-36 overflow-hidden">
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)' }}
            />

            <motion.div
                className="relative z-10 max-w-5xl mx-auto px-5 md:px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <motion.span
                        variants={itemVariants}
                        className="inline-block text-xs font-medium tracking-[0.2em] text-[#38BDF8] uppercase mb-6"
                    >
                        Así te ayudamos
                    </motion.span>

                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
                    >
                        <span className="text-white">Nosotros hacemos el trabajo, </span>
                        <br className="hidden sm:block" />
                        <span
                            className="text-[#3B82F6]"
                            style={{ textShadow: '0 0 20px rgba(56,189,248,0.4)' }}
                        >
                            tú ves los resultados
                        </span>
                        <span className="text-[#64748B]">.</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="mt-4 md:mt-5 text-[#94A3B8] text-base md:text-lg max-w-2xl mx-auto"
                    >
                        Te acompañamos de principio a fin. No te dejamos con un software y un manual.
                        <span className="text-white"> Te entregamos una operación funcionando.</span>
                    </motion.p>
                </div>

                {/* Cards */}
                <motion.div
                    className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6"
                    variants={containerVariants}
                >
                    {pasos.map((paso, index) => {
                        const Icon = paso.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group"
                            >
                                <motion.div
                                    className="relative rounded-xl p-5 md:p-7 h-full overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(10,14,24,0.95) 0%, rgba(7,10,18,0.98) 100%)',
                                        border: '1px solid rgba(37,99,235,0.1)',
                                    }}
                                    whileHover={{
                                        y: -6,
                                        borderColor: 'rgba(37,99,235,0.3)',
                                        boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 40px rgba(37,99,235,0.08)'
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Number watermark */}
                                    <span className="absolute top-3 right-4 text-5xl font-bold text-white/[0.02] group-hover:text-[#2563EB]/[0.06] transition-colors duration-500">
                                        {paso.numero}
                                    </span>

                                    {/* Icon */}
                                    <div
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-4 md:mb-5"
                                        style={{
                                            background: 'rgba(37,99,235,0.1)',
                                            border: '1px solid rgba(37,99,235,0.2)',
                                        }}
                                    >
                                        <Icon className="w-5 h-5 text-[#3B82F6]" strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-base md:text-lg font-semibold text-white mb-1.5 md:mb-2 group-hover:text-[#38BDF8] transition-colors duration-300">
                                        {paso.titulo}
                                    </h3>
                                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                                        {paso.descripcion}
                                    </p>

                                    {/* Top glow on hover */}
                                    <div
                                        className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent)' }}
                                    />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom callout */}
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center mt-10 md:mt-14"
                >
                    <div
                        className="px-5 py-2.5 rounded-full"
                        style={{
                            background: 'rgba(7,10,18,0.8)',
                            border: '1px solid rgba(37,99,235,0.12)',
                        }}
                    >
                        <p className="text-sm text-[#94A3B8]">
                            No te vendemos software. <span className="text-white font-medium">Te entregamos una operación que funciona sola.</span>
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)' }}
            />
        </section>
    );
};

export default EnQueAyudamos;
