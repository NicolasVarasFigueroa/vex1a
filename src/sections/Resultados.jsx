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
            titulo: 'Horas al mes de vuelta',
            descripcion: 'Tiempo que tu equipo recupera para enfocarse en lo importante',
            icon: Clock
        },
        {
            value: '80',
            suffix: '%',
            titulo: 'Menos tareas manuales',
            descripcion: 'Esas tareas repetitivas que nadie quiere hacer, ahora se hacen solas',
            icon: TrendingDown
        },
        {
            value: '24',
            suffix: '/7',
            titulo: 'Tu operación nunca para',
            descripcion: 'Mientras duermes, todo sigue funcionando como debe',
            icon: Moon
        },
        {
            value: '0',
            suffix: '',
            prefix: '→',
            titulo: 'Cero estrés operativo',
            descripcion: 'No más apagar incendios ni perseguir tareas pendientes',
            icon: Heart
        },
    ];

    const antes = [
        'Tu equipo haciendo tareas repetitivas',
        'Clientes esperando respuestas',
        'Datos en distintos lugares',
        'Dependiendo de que alguien esté disponible',
    ];

    const despues = [
        'Tu equipo enfocado en lo que importa',
        'Respuestas instantáneas, siempre',
        'Todo sincronizado automáticamente',
        'La operación funciona aunque no estés',
    ];

    return (
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)' }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-10 md:mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block text-xs font-medium tracking-[0.2em] text-[#38BDF8] uppercase mb-6">
                        Lo que tu negocio siente
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        Así cambia tu día a día{' '}
                        <span
                            className="text-[#3B82F6]"
                            style={{ textShadow: '0 0 20px rgba(56,189,248,0.4)' }}
                        >
                            con VEXIA
                        </span>
                    </h2>
                    <p className="mt-4 md:mt-5 text-[#94A3B8] text-base md:text-lg max-w-xl mx-auto">
                        No son solo números. Es tiempo, tranquilidad y control real sobre tu operación.
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
                                className="rounded-xl p-4 md:p-5"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(10,14,24,0.95) 0%, rgba(7,10,18,0.98) 100%)',
                                    border: '1px solid rgba(37,99,235,0.1)',
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -4,
                                    borderColor: 'rgba(37,99,235,0.3)',
                                    boxShadow: '0 15px 40px rgba(0,0,0,0.4), 0 0 20px rgba(37,99,235,0.06)'
                                }}
                            >
                                <Icon className="w-4 h-4 md:w-5 md:h-5 mb-2 md:mb-3 text-[#3B82F6]" strokeWidth={1.5} />
                                <div
                                    className="text-2xl md:text-3xl font-bold text-[#3B82F6] mb-1 md:mb-2"
                                    style={{ textShadow: '0 0 15px rgba(56,189,248,0.3)' }}
                                >
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
                        className="rounded-xl p-4 md:p-5"
                        style={{
                            background: 'rgba(239,68,68,0.02)',
                            border: '1px solid rgba(239,68,68,0.1)',
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
                        className="rounded-xl p-4 md:p-5"
                        style={{
                            background: 'rgba(37,99,235,0.02)',
                            border: '1px solid rgba(37,99,235,0.12)',
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
                    className="text-center mt-8 md:mt-12 text-xs md:text-sm text-[#64748B]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    No te entregamos un software y adiós. <span className="text-white font-medium">Te acompañamos para que tu operación realmente funcione.</span>
                </motion.p>
            </div>

            <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)' }}
            />
        </section>
    );
};

export default Resultados;
