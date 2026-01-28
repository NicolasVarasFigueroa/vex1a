import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
    MessageCircle,
    Globe,
    Zap,
    ShoppingBag,
    CalendarCheck,
    Calendar,
    Wallet,
    UserCheck,
    RefreshCw,
    CheckCircle
} from 'lucide-react';

const VexiaFlow = () => {
    const [sceneIndex, setSceneIndex] = useState(0);

    const scenes = [
        {
            channel: { icon: MessageCircle, label: 'WhatsApp', color: '#25D366' },
            result: { icon: ShoppingBag, label: 'Pedido confirmado' },
            caption: 'Un cliente escribe a las 3am'
        },
        {
            channel: { icon: MessageCircle, label: 'WhatsApp', color: '#25D366' },
            result: { icon: CalendarCheck, label: 'Reserva confirmada' },
            caption: 'Sin llamadas. Sin errores.'
        },
        {
            channel: { icon: MessageCircle, label: 'WhatsApp', color: '#25D366' },
            result: { icon: Calendar, label: 'Cita agendada' },
            caption: 'Agenda sola.'
        },
        {
            channel: { icon: MessageCircle, label: 'WhatsApp', color: '#25D366' },
            result: { icon: Wallet, label: 'Pago recordado' },
            caption: 'Cobros sin perseguir clientes.'
        },
        {
            channel: { icon: Globe, label: 'Web / Ads', color: '#3B82F6' },
            result: { icon: UserCheck, label: 'Lead calificado' },
            caption: 'Solo llegan los que importan.'
        },
        {
            channel: { icon: MessageCircle, label: 'WhatsApp', color: '#25D366' },
            result: { icon: RefreshCw, label: 'Seguimiento automático' },
            caption: 'Clientes que vuelven.'
        },
        {
            channel: { icon: Zap, label: 'Cualquier canal', color: '#38BDF8' },
            result: { icon: CheckCircle, label: 'Operación funcionando' },
            caption: 'Mientras duermes.'
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setSceneIndex((prev) => (prev + 1) % scenes.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [scenes.length]);

    const currentScene = scenes[sceneIndex];
    const ChannelIcon = currentScene.channel.icon;
    const ResultIcon = currentScene.result.icon;

    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Background subtle gradient */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 70%)'
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-5">
                {/* Headline */}
                <motion.h2
                    className="text-center text-2xl md:text-4xl lg:text-5xl font-bold mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-white">Mientras duermes, </span>
                    <span
                        className="text-[#3B82F6]"
                        style={{ textShadow: '0 0 30px rgba(59,130,246,0.5)' }}
                    >
                        VEXIA trabaja.
                    </span>
                </motion.h2>

                {/* Desktop Flow - Horizontal */}
                <div className="hidden md:flex items-center justify-center gap-4 lg:gap-8">

                    {/* Channel Node */}
                    <div className="flex flex-col items-center gap-3">
                        <motion.div
                            className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center"
                            style={{
                                background: 'linear-gradient(135deg, rgba(10,14,24,0.95) 0%, rgba(7,10,18,0.98) 100%)',
                                border: '1px solid rgba(37,99,235,0.2)',
                            }}
                            animate={{
                                boxShadow: [
                                    `0 0 20px ${currentScene.channel.color}20`,
                                    `0 0 40px ${currentScene.channel.color}30`,
                                    `0 0 20px ${currentScene.channel.color}20`,
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={sceneIndex + '-channel'}
                                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <ChannelIcon
                                        className="w-10 h-10 lg:w-12 lg:h-12"
                                        style={{ color: currentScene.channel.color }}
                                        strokeWidth={1.5}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={sceneIndex + '-channel-label'}
                                className="text-sm text-[#94A3B8]"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                {currentScene.channel.label}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    {/* Connection Line Left */}
                    <div className="relative w-16 lg:w-24 h-px">
                        <div
                            className="absolute inset-0"
                            style={{
                                background: 'linear-gradient(90deg, rgba(37,99,235,0.1), rgba(37,99,235,0.4))'
                            }}
                        />
                        <motion.div
                            className="absolute w-2 h-2 rounded-full bg-[#3B82F6] top-1/2 -translate-y-1/2"
                            style={{ boxShadow: '0 0 10px rgba(59,130,246,0.8)' }}
                            animate={{ left: ['0%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        />
                    </div>

                    {/* VEXIA Core */}
                    <motion.div
                        className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-3xl flex items-center justify-center"
                        style={{
                            background: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(10,14,24,0.98) 100%)',
                            border: '1px solid rgba(37,99,235,0.4)',
                        }}
                        animate={{
                            boxShadow: [
                                '0 0 30px rgba(37,99,235,0.2), 0 0 60px rgba(37,99,235,0.1)',
                                '0 0 50px rgba(37,99,235,0.4), 0 0 80px rgba(37,99,235,0.2)',
                                '0 0 30px rgba(37,99,235,0.2), 0 0 60px rgba(37,99,235,0.1)',
                            ]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <span
                            className="text-2xl lg:text-3xl font-bold text-white"
                            style={{ textShadow: '0 0 20px rgba(59,130,246,0.6)' }}
                        >
                            VEXIA
                        </span>

                        {/* Pulse ring */}
                        <motion.div
                            className="absolute inset-0 rounded-3xl border border-[#3B82F6]/30"
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.5, 0, 0.5]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                    </motion.div>

                    {/* Connection Line Right */}
                    <div className="relative w-16 lg:w-24 h-px">
                        <div
                            className="absolute inset-0"
                            style={{
                                background: 'linear-gradient(90deg, rgba(37,99,235,0.4), rgba(34,197,94,0.3))'
                            }}
                        />
                        <motion.div
                            className="absolute w-2 h-2 rounded-full bg-[#22C55E] top-1/2 -translate-y-1/2"
                            style={{ boxShadow: '0 0 10px rgba(34,197,94,0.8)' }}
                            animate={{ left: ['0%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 1 }}
                        />
                    </div>

                    {/* Result Node */}
                    <div className="flex flex-col items-center gap-3">
                        <motion.div
                            className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center"
                            style={{
                                background: 'linear-gradient(135deg, rgba(10,14,24,0.95) 0%, rgba(7,10,18,0.98) 100%)',
                                border: '1px solid rgba(34,197,94,0.2)',
                            }}
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(34,197,94,0.15)',
                                    '0 0 40px rgba(34,197,94,0.25)',
                                    '0 0 20px rgba(34,197,94,0.15)',
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={sceneIndex + '-result'}
                                    initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 0.5, rotate: -10 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <ResultIcon
                                        className="w-10 h-10 lg:w-12 lg:h-12 text-[#22C55E]"
                                        strokeWidth={1.5}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={sceneIndex + '-result-label'}
                                className="text-sm text-[#94A3B8] text-center max-w-[120px]"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                {currentScene.result.label}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Caption Desktop */}
                <div className="hidden md:block mt-12">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={sceneIndex + '-caption'}
                            className="text-center text-[#64748B] text-lg"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            {currentScene.caption}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Scene indicators Desktop */}
                <div className="hidden md:flex justify-center gap-2 mt-8">
                    {scenes.map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full"
                            style={{
                                background: i === sceneIndex ? '#3B82F6' : 'rgba(59,130,246,0.2)',
                                boxShadow: i === sceneIndex ? '0 0 10px rgba(59,130,246,0.6)' : 'none'
                            }}
                            animate={i === sceneIndex ? { scale: [1, 1.2, 1] } : {}}
                            transition={{ duration: 0.3 }}
                        />
                    ))}
                </div>

                {/* Mobile Flow - Compact Horizontal */}
                <div className="md:hidden flex flex-col items-center gap-8 px-2">

                    {/* Caption First - Above the flow */}
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={sceneIndex + '-mobile-caption'}
                            className="text-center text-[#94A3B8] text-sm leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {currentScene.caption}
                        </motion.p>
                    </AnimatePresence>

                    {/* Compact Horizontal Flow */}
                    <div className="flex items-center justify-center gap-2 w-full max-w-[340px]">

                        {/* Channel Node */}
                        <div className="flex flex-col items-center gap-2 flex-shrink-0">
                            <motion.div
                                className="w-12 h-12 rounded-lg flex items-center justify-center"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(10,14,24,0.95) 0%, rgba(7,10,18,0.98) 100%)',
                                    border: '1px solid rgba(37,99,235,0.25)',
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={sceneIndex + '-m-ch'}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <ChannelIcon
                                            className="w-5 h-5"
                                            style={{ color: currentScene.channel.color }}
                                            strokeWidth={1.5}
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={sceneIndex + '-m-ch-l'}
                                    className="text-[10px] text-[#64748B] whitespace-nowrap"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {currentScene.channel.label}
                                </motion.span>
                            </AnimatePresence>
                        </div>

                        {/* Line Left */}
                        <div className="relative w-6 h-px flex-shrink-0">
                            <div
                                className="absolute inset-0"
                                style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.2), rgba(37,99,235,0.5))' }}
                            />
                            <motion.div
                                className="absolute w-1 h-1 rounded-full bg-[#3B82F6] top-1/2 -translate-y-1/2"
                                style={{ boxShadow: '0 0 6px rgba(59,130,246,0.8)' }}
                                animate={{ left: ['0%', '100%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                            />
                        </div>

                        {/* VEXIA Center */}
                        <motion.div
                            className="relative w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{
                                background: 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(10,14,24,0.98) 100%)',
                                border: '1px solid rgba(37,99,235,0.35)',
                            }}
                        >
                            <span
                                className="text-sm font-bold text-white"
                                style={{ textShadow: '0 0 12px rgba(59,130,246,0.5)' }}
                            >
                                VEXIA
                            </span>
                            {/* Subtle pulse */}
                            <motion.div
                                className="absolute inset-0 rounded-xl border border-[#3B82F6]/20"
                                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0, 0.4] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </motion.div>

                        {/* Line Right */}
                        <div className="relative w-6 h-px flex-shrink-0">
                            <div
                                className="absolute inset-0"
                                style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.5), rgba(34,197,94,0.4))' }}
                            />
                            <motion.div
                                className="absolute w-1 h-1 rounded-full bg-[#22C55E] top-1/2 -translate-y-1/2"
                                style={{ boxShadow: '0 0 6px rgba(34,197,94,0.8)' }}
                                animate={{ left: ['0%', '100%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.75 }}
                            />
                        </div>

                        {/* Result Node */}
                        <div className="flex flex-col items-center gap-2 flex-shrink-0">
                            <motion.div
                                className="w-12 h-12 rounded-lg flex items-center justify-center"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(10,14,24,0.95) 0%, rgba(7,10,18,0.98) 100%)',
                                    border: '1px solid rgba(34,197,94,0.25)',
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={sceneIndex + '-m-res'}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <ResultIcon
                                            className="w-5 h-5 text-[#22C55E]"
                                            strokeWidth={1.5}
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={sceneIndex + '-m-res-l'}
                                    className="text-[10px] text-[#64748B] text-center max-w-[70px] leading-tight"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {currentScene.result.label}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Scene indicators mobile */}
                    <div className="flex justify-center gap-2">
                        {scenes.map((_, i) => (
                            <div
                                key={i}
                                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                                style={{
                                    background: i === sceneIndex ? '#3B82F6' : 'rgba(59,130,246,0.2)',
                                    boxShadow: i === sceneIndex ? '0 0 6px rgba(59,130,246,0.6)' : 'none'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Section divider */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)' }}
            />
        </section>
    );
};

export default VexiaFlow;
