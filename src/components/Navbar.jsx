import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Inicio', href: '/' },
        { name: 'Soluciones', href: '/#servicios' },
        { name: 'Sectores', href: '/#sectores' },
        { name: 'Precios', href: '/#precios' },
    ];

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'
                    }`}
                style={scrolled ? {
                    backgroundColor: 'rgba(5,6,10,0.9)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(37,99,235,0.1)',
                } : {
                    backgroundColor: 'transparent'
                }}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-white font-bold text-xl tracking-tight">
                            VEX<span
                                className="text-[#3B82F6]"
                                style={{ textShadow: '0 0 15px rgba(56,189,248,0.4)' }}
                            >IA</span>
                        </span>
                        <motion.span
                            className="w-1.5 h-1.5 bg-[#38BDF8] rounded-full"
                            style={{ boxShadow: '0 0 8px rgba(56,189,248,0.8)' }}
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link, index) => {
                            const isActive = location.pathname === link.href;

                            return link.href.startsWith('/') && !link.href.includes('#') ? (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                >
                                    <Link
                                        to={link.href}
                                        className={`relative text-xs uppercase tracking-[0.15em] font-medium transition-colors ${isActive ? 'text-[#3B82F6]' : 'text-[#94A3B8] hover:text-white'
                                            }`}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#3B82F6]"
                                                layoutId="navbar-indicator"
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            ) : (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="text-xs uppercase tracking-[0.15em] font-medium text-[#94A3B8] hover:text-white transition-colors"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                >
                                    {link.name}
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <motion.button
                        className="hidden md:block text-xs uppercase tracking-wide font-semibold text-white px-5 py-2.5 rounded-full"
                        style={{
                            background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                            boxShadow: '0 4px 15px rgba(37,99,235,0.3)'
                        }}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: '0 6px 25px rgba(37,99,235,0.4)'
                        }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Empezar ahora
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#94A3B8] hover:text-white transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden"
                        style={{ backgroundColor: 'rgba(5,6,10,0.98)', backdropFilter: 'blur(20px)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            {links.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                >
                                    {link.href.startsWith('/') && !link.href.includes('#') ? (
                                        <Link
                                            to={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="text-2xl text-white hover:text-[#3B82F6] transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="text-2xl text-white hover:text-[#3B82F6] transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </motion.div>
                            ))}

                            <motion.button
                                className="mt-8 text-sm font-semibold text-white px-8 py-4 rounded-full"
                                style={{
                                    background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                                    boxShadow: '0 4px 20px rgba(37,99,235,0.3)'
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => setMobileOpen(false)}
                            >
                                Empezar ahora
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
