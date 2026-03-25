import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
const AnimatedCounter = ({ value, suffix = '', delay = 0 }) => {
    const [count, setCount] = useState(0);
    const numericValue = parseInt(value.replace(/\D/g, ''));

    useEffect(() => {
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

            return () => clearInterval(counter);
        }, delay);

        return () => clearTimeout(timer);
    }, [numericValue, delay]);

    return <span>{count}{suffix}</span>;
};

const Hero = () => {
    const benefits = [
        { value: '300', suffix: '+', label: 'horas al mes de vuelta para tu equipo' },
        { value: '80', suffix: '%', label: 'menos tareas que nadie quiere hacer' },
        { value: '24', suffix: '/7', label: 'tu operación funcionando sola' },
    ];

    const scrollToNext = () => {
        document.getElementById('como-ayudamos')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6">

            <div className="relative z-10 w-full max-w-4xl mx-auto text-center pt-28 pb-12 md:pt-0 md:pb-0">

                {/* Badge */}
                {/* Badge - Hidden on mobile for cleaner first impression */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-6 md:mb-10 hidden sm:block"
                >
                  
                </motion.div>

                {/* Main Title - Human centered */}
                <motion.h1
                    className="text-4xl leading-[1.2] sm:text-5xl md:text-6xl lg:text-7xl font-bold sm:leading-[1.08] tracking-tight px-2 sm:px-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <span className="text-white">Escala tu empresa con </span>
                    <br className="hidden sm:block" />
                    <span className="text-white">Sistemas </span>
                    <motion.span
                        className="text-white inline-block"
                        style={{
                            textShadow: '0 0 15px rgba(255,255,255,0.3), 0 0 30px rgba(255,255,255,0.1)'
                        }}
                        animate={{
                            textShadow: [
                                '0 0 10px rgba(255,255,255,0.2), 0 0 20px rgba(255,255,255,0.1)',
                                '0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2)',
                                '0 0 10px rgba(255,255,255,0.2), 0 0 20px rgba(255,255,255,0.1)'
                            ]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        Inteligentes
                    </motion.span>
                    <span className="text-[#3B82F6]">.</span>
                </motion.h1>

                {/* Subtitle - Benefit focused */}
                <motion.p
                    className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[var(--vexia-text-secondary)] max-w-xl md:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    Desarrollamos asistentes de IA, automatizamos tareas repetitivas y creamos plataformas web de alto rendimiento.
                    <br className="hidden sm:block" />
                    <span className="text-white font-medium"> Multiplica tu rentabilidad sin contratar más personal.</span>
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-4 mt-10 md:mt-12 w-full px-6 sm:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <Link to="/service" className="w-full sm:w-auto">
                        <button className="btn-primary-ai w-full sm:w-auto min-h-[56px] sm:min-h-0 text-base sm:text-sm">
                            <span className="relative z-10">Agendar Consultoría Gratuita</span>
                        </button>
                    </Link>

                    <button className="btn-secondary-ai w-full sm:w-auto min-h-[56px] sm:min-h-0 text-base sm:text-sm">
                        Ver Casos de Éxito
                    </button>
                </motion.div>

                {/* Benefits - Human language */}
                <motion.div
                    className="grid grid-cols-1 gap-4 mt-16 sm:grid-cols-3 sm:gap-6 sm:mt-24 max-w-3xl mx-auto w-full px-2 sm:px-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            className="card-system p-6 sm:p-7 text-left flex flex-col justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + i * 0.15 }}
                        >
                            <motion.div
                                className="text-2xl sm:text-3xl font-bold text-[#3B82F6] mb-1 sm:mb-2"
                                style={{ textShadow: '0 0 15px rgba(56,189,248,0.3)' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 + i * 0.15 }}
                            >
                                <AnimatedCounter value={benefit.value} suffix={benefit.suffix} delay={1200 + i * 150} />
                            </motion.div>
                            <div className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">{benefit.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <motion.button
                    onClick={scrollToNext}
                    className="w-10 h-10 rounded-full border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB]/50 hover:text-[#2563EB] hover:border-[#2563EB]/50 transition-all duration-300"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.button>
            </motion.div>

            {/* Section divider */}
            <div className="absolute bottom-0 left-0 right-0 section-line" />
        </section>
    );
};

export default Hero;
