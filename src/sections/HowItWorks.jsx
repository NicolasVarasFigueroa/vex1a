import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
    const pasos = [
        {
            numero: '01',
            titulo: 'Diagnóstico',
            descripcion: 'Analizamos tu operación para identificar puntos de fricción y oportunidades de automatización.',
        },
        {
            numero: '02',
            titulo: 'Diseño',
            descripcion: 'Diseñamos la solución técnica y el flujo operativo que mejor se adapta a tu negocio.',
        },
        {
            numero: '03',
            titulo: 'Implementación',
            descripcion: 'Construimos, integramos y desplegamos la automatización sin interrumpir tu operación.',
        },
        {
            numero: '04',
            titulo: 'Mantenimiento',
            descripcion: 'Monitoreamos, ajustamos y mejoramos continuamente para que todo siga funcionando.',
        },
    ];

    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030712] to-[#070d1a]" />

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        Proceso de trabajo
                    </h2>
                    <p className="mt-3 text-sm text-slate-400">
                        Metodología clara y resultados predecibles.
                    </p>
                </motion.div>

                {/* Steps - Horizontal timeline */}
                <div className="relative">
                    {/* Connector line */}
                    <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px]">
                        <motion.div
                            className="w-full h-full bg-gradient-to-r from-cyan-400/30 via-violet-400/30 to-fuchsia-400/30 rounded-full"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {pasos.map((paso, index) => (
                            <motion.div
                                key={index}
                                className="relative text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Number circle */}
                                <motion.div
                                    className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center mb-4 relative z-10"
                                    whileHover={{ scale: 1.1, borderColor: 'rgba(34,211,238,0.4)' }}
                                >
                                    <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                                        {paso.numero}
                                    </span>
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-base font-semibold text-white mb-2">
                                    {paso.titulo}
                                </h3>

                                {/* Description */}
                                <p className="text-xs text-slate-400 leading-relaxed px-2">
                                    {paso.descripcion}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <motion.button
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-slate-300 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Conocer el proceso
                        <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
