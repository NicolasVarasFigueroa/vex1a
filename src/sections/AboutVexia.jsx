import { motion } from 'framer-motion';
import { Search, Wrench, Plug, Bot, Shield, Zap } from 'lucide-react';

const AboutVexia = () => {
    const pilares = [
        {
            icon: Search,
            titulo: 'Analizamos tu operación',
            descripcion: 'Entendemos cómo funciona tu negocio y dónde están las fricciones.',
        },
        {
            icon: Wrench,
            titulo: 'Diseñamos a medida',
            descripcion: 'Creamos soluciones específicas para tus procesos, no plantillas genéricas.',
        },
        {
            icon: Plug,
            titulo: 'Conectamos sin fricción',
            descripcion: 'Integramos con las herramientas que ya usas, sin disrupciones.',
        },
    ];

    const diferenciadores = [
        { icon: Bot, texto: 'Agentes IA que trabajan 24/7' },
        { icon: Shield, texto: 'Operación monitoreada y segura' },
        { icon: Zap, texto: 'Resultados en semanas, no meses' },
    ];

    return (
        <section
            id="about"
            className="relative py-28 lg:py-36 overflow-hidden"
        >
            {/* Divider top */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)' }}
            />

            {/* Background glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 60%)',
                    filter: 'blur(80px)',
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-xs font-medium tracking-[0.2em] text-[#38BDF8] uppercase mb-6">
                        Quiénes somos
                    </span>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                        Un estudio de automatización
                        <br />
                        <span
                            className="text-[#3B82F6]"
                            style={{ textShadow: '0 0 20px rgba(56,189,248,0.4)' }}
                        >
                            que transforma operaciones.
                        </span>
                    </h2>

                    <p className="text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
                        No vendemos software y nos vamos. Diseñamos, implementamos y mantenemos
                        tu operación automática. Tú te enfocas en crecer.
                    </p>
                </motion.div>

                {/* Pilares - 3 columnas con iconos */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {pilares.map((pilar, i) => {
                        const Icon = pilar.icon;
                        return (
                            <motion.div
                                key={i}
                                className="group rounded-2xl p-6 text-center"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(10,14,24,0.9) 0%, rgba(7,10,18,0.95) 100%)',
                                    border: '1px solid rgba(37,99,235,0.1)',
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -4,
                                    borderColor: 'rgba(37,99,235,0.3)',
                                    boxShadow: '0 15px 40px rgba(0,0,0,0.4), 0 0 20px rgba(37,99,235,0.08)'
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(37,99,235,0.05))',
                                        border: '1px solid rgba(37,99,235,0.2)',
                                        boxShadow: '0 0 20px rgba(37,99,235,0.1)'
                                    }}
                                >
                                    <Icon className="w-6 h-6 text-[#3B82F6]" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                                    {pilar.titulo}
                                </h3>
                                <p className="text-sm text-[#64748B] leading-relaxed">
                                    {pilar.descripcion}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Diferenciadores - badges horizontales */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    {diferenciadores.map((dif, i) => {
                        const Icon = dif.icon;
                        return (
                            <div
                                key={i}
                                className="flex items-center gap-3 px-5 py-3 rounded-full"
                                style={{
                                    background: 'rgba(37,99,235,0.05)',
                                    border: '1px solid rgba(37,99,235,0.15)',
                                }}
                            >
                                <Icon className="w-4 h-4 text-[#38BDF8]" strokeWidth={1.5} />
                                <span className="text-sm text-[#94A3B8]">{dif.texto}</span>
                            </div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Divider bottom */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)' }}
            />
        </section>
    );
};

export default AboutVexia;
