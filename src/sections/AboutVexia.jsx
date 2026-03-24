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
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.05) 0%, transparent 70%)',
                    filter: 'blur(100px)',
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
                        Por qué VEXIA
                    </span>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                        No vendemos software.
                        <br />
                        <span
                            className="text-[#3B82F6]"
                            style={{ textShadow: '0 0 20px rgba(59,130,246,0.5)' }}
                        >
                            Construimos motores de crecimiento.
                        </span>
                    </h2>

                    <p className="text-lg text-[var(--vexia-text-secondary)] leading-relaxed max-w-2xl mx-auto">
                        Entendemos tu giro de negocio y creamos tecnología a medida (Diseño Web + IA + RPA) que se integra sin dolores de cabeza. Tú te enfocas en liderar, nosotros en que la operación fluya.
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
                                className="group card-system p-6 text-center h-full flex flex-col items-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                viewport={{ once: true }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                                    style={{
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.08)',
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
                                    background: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.08)',
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
