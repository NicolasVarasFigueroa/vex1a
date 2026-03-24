import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Clock, TrendingDown, Moon, Heart } from 'lucide-react';

const Counter = ({ value, suffix = '', delay = 0 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const numericValue = parseInt(value.replace(/\D/g, ''));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const timer = setTimeout(() => {
                        let start = 0;
                        const duration = 1500;
                        const increment = numericValue / (duration / 16);

                        const counter = setInterval(() => {
                            start += increment;
                            if (start >= numericValue) {
                                setCount(numericValue);
                                clearInterval(counter);
                            } else {
                                setCount(Math.floor(start));
                            }
                        }, 16);
                    }, delay);

                    return () => clearTimeout(timer);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [numericValue, delay]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const Resultados = () => {
    const beneficios = [
        {
            value: '300',
            suffix: '+',
            titulo: 'Horas devueltas',
            descripcion: 'Tu equipo enfocado en crecer.',
            icon: Clock
        },
        {
            value: '80',
            suffix: '%',
            titulo: 'Carga manual eliminada',
            descripcion: 'Las tareas aburridas se hacen solas.',
            icon: TrendingDown
        },
        {
            value: '24',
            suffix: '/7',
            titulo: 'Operación continua',
            descripcion: 'Todo funciona mientras duermes.',
            icon: Moon
        },
        {
            value: '0',
            suffix: '',
            prefix: '→',
            titulo: 'Errores humanos',
            descripcion: 'Cero estrés. No más apagar incendios.',
            icon: Heart
        },
    ];

    const antes = [
        'Procesos manuales lentos',
        'Ventas perdidas por demoras',
        'Desorden en Excels',
        'Dependencia del personal',
    ];

    const despues = [
        'Sistemas 100% integrados',
        'IA vendiendo 24/7',
        'Control total en tiempo real',
        'Tu negocio escala solo',
    ];

    return (
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 section-line" />

            <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-10 md:mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block text-xs font-medium tracking-[0.2em] text-[#38BDF8] uppercase mb-6">
                        El Impacto VEXIA
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        Resultados que se notan en{' '}
                        <span className="text-[#3B82F6]" style={{ textShadow: '0 0 15px rgba(56,189,248,0.2)' }}>
                            tu rentabilidad
                        </span>
                    </h2>
                    <p className="mt-4 md:mt-5 text-[#A1A1AA] text-base md:text-lg max-w-xl mx-auto">
                        Aumenta tus márgenes y recupera el control de tu tiempo hoy mismo.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 mb-10 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {beneficios.map((b, i) => {
                        const Icon = b.icon;
                        return (
                            <motion.div
                                key={i}
                                className="card-system p-4 md:p-5 flex flex-col justify-start"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                viewport={{ once: true }}
                            >
                                <Icon className="w-4 h-4 md:w-5 md:h-5 mb-2 md:mb-3 text-[#3B82F6]" strokeWidth={1.5} />
                                <div className="text-2xl md:text-3xl font-bold text-[#3B82F6] mb-1 md:mb-2" style={{ textShadow: '0 0 10px rgba(56,189,248,0.2)' }}>
                                    {b.prefix && <span>{b.prefix}</span>}
                                    <Counter value={b.value} suffix={b.suffix} delay={200 + i * 100} />
                                </div>
                                <div className="text-xs md:text-sm font-medium text-white mb-0.5 md:mb-1">{b.titulo}</div>
                                <div className="text-[10px] md:text-xs text-[#64748B] leading-relaxed hidden sm:block">{b.descripcion}</div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Before/After comparison */}
                <motion.div
                    className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {/* Before */}
                    <motion.div
                        className="rounded-xl p-4 md:p-5 backdrop-blur-sm"
                        style={{
                            background: 'var(--vexia-bg-elevated)',
                            border: '1px solid rgba(239,68,68,0.15)',
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-sm font-medium text-red-400/70 mb-3">
                            Antes de VEXIA
                        </h3>
                        <ul className="space-y-2">
                            {antes.map((item, j) => (
                                <li key={j} className="flex items-center gap-2 text-sm text-[#64748B] line-through">
                                    <span className="w-1 h-1 rounded-full bg-red-400/30" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* After */}
                    <motion.div
                        className="rounded-xl p-4 md:p-5 backdrop-blur-sm"
                        style={{
                            background: 'var(--vexia-bg-card)',
                            border: '1px solid rgba(37,99,235,0.2)',
                        }}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-sm font-medium text-[#38BDF8] mb-3">
                            Con VEXIA ayudándote
                        </h3>
                        <ul className="space-y-2">
                            {despues.map((item, j) => (
                                <li key={j} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                                    <span className="w-1 h-1 rounded-full bg-[#3B82F6]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Closing */}
                <motion.p
                    className="text-center mt-8 md:mt-12 text-xs md:text-sm text-[#71717A]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    Somos tu brazo tecnológico. <span className="text-[var(--vexia-text-secondary)] font-medium">Automatizamos hoy para que crezcas mañana.</span>
                </motion.p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 section-line" />
        </section>
    );
};

export default Resultados;
