import { motion } from 'framer-motion';

const Historias = () => {
    const testimonios = [
        {
            quote: 'Pasamos de perder consultas a tener todo gestionado automáticamente. Nuestro equipo ahora puede enfocarse en atender mejor a los clientes que sí necesitan atención personalizada.',
            company: 'Restaurante El Buen Sabor',
            role: 'Gerente de Operaciones',
            result: '+70% eficiencia operativa',
        },
        {
            quote: 'Las ausencias a citas se redujeron drásticamente. Los recordatorios automáticos y la confirmación sin intervención manual cambiaron nuestra operación.',
            company: 'Clínica Dental Sonríe',
            role: 'Directora Administrativa',
            result: '-60% ausencias',
        },
        {
            quote: 'Antes perdíamos horas actualizando sistemas manualmente. Ahora todo se sincroniza solo y podemos dedicar ese tiempo a mejorar nuestros cursos.',
            company: 'Academia Digital Pro',
            role: 'Director General',
            result: '+45% productividad',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    return (
        <section
            id="nosotros"
            className="relative py-28 lg:py-32 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030712] to-[#0a0f1c]">
                <motion.div
                    className="absolute top-1/4 right-0 w-[400px] h-[300px] bg-violet-500/[0.03] blur-[100px] rounded-full"
                    animate={{ x: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-cyan-400/70 mb-4">
                        Testimonios
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Empresas que ya transformaron
                        <br />
                        <span className="text-white/70">su operación.</span>
                    </h2>
                </motion.div>

                {/* Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {testimonios.map((testimonio, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="group rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 flex flex-col"
                        >
                            {/* Quote mark */}
                            <motion.div
                                className="text-4xl text-cyan-400/20 font-serif leading-none mb-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                "
                            </motion.div>

                            <p className="text-sm text-slate-300 leading-relaxed flex-1">
                                {testimonio.quote}
                            </p>

                            <div className="mt-6 pt-4 border-t border-white/[0.05]">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm font-medium text-white">{testimonio.company}</div>
                                        <div className="text-xs text-slate-500">{testimonio.role}</div>
                                    </div>
                                    <motion.div
                                        className="text-xs font-semibold text-cyan-400/80 bg-cyan-400/10 px-3 py-1.5 rounded-full"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {testimonio.result}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Historias;
