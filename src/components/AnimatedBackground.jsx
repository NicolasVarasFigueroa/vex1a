import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Subtle grid points
        const points = [];
        const gridSize = 80;

        const createPoints = () => {
            points.length = 0;
            const cols = Math.ceil(canvas.width / gridSize) + 1;
            const rows = Math.ceil(canvas.height / gridSize) + 1;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    points.push({
                        x: i * gridSize,
                        y: j * gridSize,
                        baseOpacity: Math.random() * 0.15 + 0.05,
                        phase: Math.random() * Math.PI * 2,
                    });
                }
            }
        };
        createPoints();

        let time = 0;
        const animate = () => {
            time += 0.005;

            ctx.fillStyle = '#05060A';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw subtle grid points
            points.forEach(point => {
                const pulse = Math.sin(time + point.phase) * 0.5 + 0.5;
                const opacity = point.baseOpacity * (0.5 + pulse * 0.5);

                ctx.beginPath();
                ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(37, 99, 235, ${opacity})`;
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-0 pointer-events-none"
            />

            {/* Main blue aura behind hero */}
            <motion.div
                className="fixed pointer-events-none"
                style={{
                    top: '-15%',
                    left: '50%',
                    width: '120%',
                    height: '80%',
                    transform: 'translateX(-50%)',
                    background: `
                        radial-gradient(ellipse 70% 50% at 50% 30%, 
                            rgba(37,99,235,0.12) 0%, 
                            rgba(37,99,235,0.04) 40%, 
                            transparent 70%
                        )
                    `,
                    filter: 'blur(60px)',
                    zIndex: 0,
                }}
                animate={{
                    opacity: [0.6, 1, 0.6],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Secondary glow - left */}
            <motion.div
                className="fixed pointer-events-none"
                style={{
                    top: '40%',
                    left: '-10%',
                    width: '400px',
                    height: '500px',
                    background: 'radial-gradient(ellipse at center, rgba(56,189,248,0.08) 0%, transparent 60%)',
                    filter: 'blur(80px)',
                    zIndex: 0,
                }}
                animate={{
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Tertiary glow - right */}
            <motion.div
                className="fixed pointer-events-none"
                style={{
                    top: '50%',
                    right: '-10%',
                    width: '400px',
                    height: '500px',
                    background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 60%)',
                    filter: 'blur(80px)',
                    zIndex: 0,
                }}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 3,
                }}
            />

            {/* Vignette */}
            <div
                className="fixed inset-0 z-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(5,6,10,0.5) 100%)'
                }}
            />
        </>
    );
};

export default AnimatedBackground;
