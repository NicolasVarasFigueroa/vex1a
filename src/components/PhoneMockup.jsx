import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Check, Clock } from 'lucide-react';

const PhoneMockup = ({ messages = [], loop = true }) => {
    const [visibleMessages, setVisibleMessages] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);

    const defaultMessages = [
        { type: 'incoming', text: 'Hola, quiero hacer un pedido', delay: 0 },
        { type: 'incoming', text: '¿Tienen disponible para las 8pm?', delay: 800 },
        { type: 'vexia', text: '¡Hola! Claro que sí 🙌', delay: 1600 },
        { type: 'vexia', text: '¿Para cuántas personas sería la reserva?', delay: 2200 },
        { type: 'incoming', text: 'Para 4 personas', delay: 3000 },
        { type: 'vexia', text: '✅ Reserva confirmada para 4 personas a las 8pm', delay: 3800 },
        { type: 'system', text: 'Guardado en sistema', delay: 4500 },
    ];

    const chatMessages = messages.length > 0 ? messages : defaultMessages;

    useEffect(() => {
        let timeouts = [];

        const runAnimation = () => {
            setVisibleMessages([]);
            setCurrentStep(0);

            chatMessages.forEach((msg, index) => {
                const timeout = setTimeout(() => {
                    setVisibleMessages(prev => [...prev, { ...msg, id: index }]);
                    setCurrentStep(index + 1);
                }, msg.delay);
                timeouts.push(timeout);
            });

            if (loop) {
                const resetTimeout = setTimeout(() => {
                    runAnimation();
                }, 6000);
                timeouts.push(resetTimeout);
            }
        };

        runAnimation();

        return () => timeouts.forEach(t => clearTimeout(t));
    }, [loop]);

    return (
        <div className="relative">
            {/* Phone Frame */}
            <div
                className="relative w-[280px] md:w-[320px] rounded-[2.5rem] p-3 mx-auto"
                style={{
                    background: 'linear-gradient(145deg, #1a1a2e 0%, #0f0f1a 100%)',
                    boxShadow: '0 25px 80px rgba(0,0,0,0.5), 0 0 40px rgba(37,99,235,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                }}
            >
                {/* Notch */}
                <div
                    className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full"
                    style={{ background: '#0a0a12' }}
                />

                {/* Screen */}
                <div
                    className="relative rounded-[2rem] overflow-hidden"
                    style={{
                        background: 'linear-gradient(180deg, #0d1117 0%, #090c10 100%)',
                        minHeight: '420px',
                    }}
                >
                    {/* Status Bar */}
                    <div className="flex items-center justify-between px-6 py-3 text-[10px] text-white/60">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                            <div className="w-4 h-2 rounded-sm border border-white/40 relative">
                                <div className="absolute inset-0.5 bg-white/60 rounded-sm" style={{ width: '70%' }} />
                            </div>
                        </div>
                    </div>

                    {/* Chat Header */}
                    <div
                        className="flex items-center gap-3 px-4 py-3 border-b border-white/5"
                        style={{ background: 'rgba(37,99,235,0.08)' }}
                    >
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            style={{
                                background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                                boxShadow: '0 0 20px rgba(37,99,235,0.4)'
                            }}
                        >
                            <span className="text-white text-sm font-bold">V</span>
                        </div>
                        <div>
                            <div className="text-white text-sm font-medium">VEXIA</div>
                            <div className="text-[#22C55E] text-xs flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                                Activo ahora
                            </div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="p-4 space-y-3 min-h-[280px] overflow-hidden">
                        <AnimatePresence mode="popLayout">
                            {visibleMessages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                    className={`flex ${msg.type === 'incoming' ? 'justify-start' : 'justify-end'}`}
                                >
                                    {msg.type === 'system' ? (
                                        <div
                                            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
                                            style={{
                                                background: 'rgba(34,197,94,0.15)',
                                                border: '1px solid rgba(34,197,94,0.3)'
                                            }}
                                        >
                                            <Check className="w-3 h-3 text-[#22C55E]" />
                                            <span className="text-[#22C55E]">{msg.text}</span>
                                        </div>
                                    ) : (
                                        <div
                                            className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm ${msg.type === 'incoming'
                                                    ? 'rounded-bl-md'
                                                    : 'rounded-br-md'
                                                }`}
                                            style={{
                                                background: msg.type === 'incoming'
                                                    ? 'rgba(255,255,255,0.08)'
                                                    : 'linear-gradient(135deg, #2563EB, #3B82F6)',
                                                color: 'white',
                                                boxShadow: msg.type === 'vexia'
                                                    ? '0 4px 15px rgba(37,99,235,0.3)'
                                                    : 'none',
                                            }}
                                        >
                                            {msg.text}
                                            <div className="flex items-center justify-end gap-1 mt-1 opacity-60">
                                                <Clock className="w-2.5 h-2.5" />
                                                <span className="text-[10px]">Ahora</span>
                                                {msg.type === 'vexia' && (
                                                    <Check className="w-3 h-3 text-[#38BDF8]" />
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Typing indicator */}
                        {currentStep > 0 && currentStep < chatMessages.length && chatMessages[currentStep]?.type === 'vexia' && (
                            <motion.div
                                className="flex justify-end"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div
                                    className="flex items-center gap-1 px-4 py-2 rounded-2xl rounded-br-md"
                                    style={{ background: 'rgba(37,99,235,0.3)' }}
                                >
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-white/60"
                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    />
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-white/60"
                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                                    />
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-white/60"
                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* VEXIA Processing Glow */}
            <motion.div
                className="absolute -inset-4 rounded-[3rem] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 70%)',
                }}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />
        </div>
    );
};

export default PhoneMockup;
