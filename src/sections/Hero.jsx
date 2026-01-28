import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 md:px-6">

            <div className="relative z-10 max-w-4xl mx-auto text-center pt-16 md:pt-0">

                {/* Badge */}
                {/* Badge - Hidden on mobile for cleaner first impression */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-6 md:mb-10 hidden sm:block"
                >
                    <span className="inline-flex items-center gap-3 px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 backdrop-blur-sm">
                        <motion.span
                            className="w-2 h-2 rounded-full bg-[#38BDF8]"
                            style={{ boxShadow: '0 0 10px rgba(56,189,248,0.8)' }}
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-xs font-medium tracking-wide text-[#38BDF8] uppercase">
                            Estudio de automatización
                        </span>
                    </span>
                </motion.div>

                {/* Main Title - Human centered */}
                <motion.h1
                    className="text-[2rem] leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl font-bold sm:leading-[1.08] tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <span className="text-white">Te ayudamos a que </span>
                    <br className="hidden sm:block" />
                    <span className="text-white">tu negocio </span>
                    <motion.span
                        className="text-[#3B82F6] inline-block"
                        style={{
                            textShadow: '0 0 20px rgba(56,189,248,0.5), 0 0 40px rgba(37,99,235,0.3)'
                        }}
                        animate={{
                            textShadow: [
                                '0 0 15px rgba(56,189,248,0.4), 0 0 30px rgba(37,99,235,0.2)',
                                '0 0 25px rgba(56,189,248,0.6), 0 0 50px rgba(37,99,235,0.3)',
                                '0 0 15px rgba(56,189,248,0.4), 0 0 30px rgba(37,99,235,0.2)'
                            ]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        funcione solo
                    </motion.span>
                    <span className="text-[#64748B]">.</span>
                </motion.h1>

                {/* Subtitle - Benefit focused */}
                <motion.p
                    className="mt-5 md:mt-8 text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-xl md:max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    Diseñamos, implementamos y mantenemos tu operación automática.
                    <span className="text-white font-medium"> Tú te enfocas en crecer, nosotros en que todo fluya.</span>
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 md:mt-12 w-full sm:w-auto px-2 sm:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <motion.button
                        className="relative w-full sm:w-auto rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] px-6 sm:px-8 py-4 text-base sm:text-sm font-semibold text-white overflow-hidden min-h-[56px] sm:min-h-0"
                        style={{
                            boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4), 0 0 40px rgba(37, 99, 235, 0.2), inset 0 1px 0 rgba(255,255,255,0.15)'
                        }}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: '0 8px 40px rgba(37, 99, 235, 0.5), 0 0 60px rgba(37, 99, 235, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10">Quiero saber cómo me ayudan</span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.5 }}
                        />
                    </motion.button>

                    <motion.button
                        className="w-full sm:w-auto rounded-full border border-[#2563EB]/40 bg-transparent px-6 sm:px-8 py-4 text-base sm:text-sm font-medium text-white min-h-[56px] sm:min-h-0"
                        whileHover={{
                            borderColor: '#2563EB',
                            backgroundColor: 'rgba(37,99,235,0.08)',
                            boxShadow: '0 0 30px rgba(37,99,235,0.15)'
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Ver ejemplos reales
                    </motion.button>
                </motion.div>

                {/* Benefits - Human language */}
                <motion.div
                    className="grid grid-cols-1 gap-3 mt-12 sm:grid-cols-3 sm:gap-6 sm:mt-24 max-w-3xl mx-auto w-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            className="relative rounded-xl p-4 sm:p-6 backdrop-blur-sm overflow-hidden text-left"
                            style={{
                                background: 'linear-gradient(135deg, rgba(10,14,24,0.9) 0%, rgba(7,10,18,0.95) 100%)',
                                border: '1px solid rgba(37,99,235,0.12)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + i * 0.15 }}
                            whileHover={{
                                y: -4,
                                borderColor: 'rgba(37,99,235,0.3)',
                                boxShadow: '0 15px 50px rgba(0,0,0,0.5), 0 0 30px rgba(37,99,235,0.1)'
                            }}
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
            <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)' }}
            />
        </section>
    );
};

export default Hero;
