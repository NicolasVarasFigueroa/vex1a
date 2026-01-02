import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="relative py-14" style={{ backgroundColor: '#05060A', borderTop: '1px solid rgba(37,99,235,0.1)' }}>
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Logo */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <span className="text-white font-bold text-xl">
                                VEX<span className="text-[#3B82F6]" style={{ textShadow: '0 0 15px rgba(56,189,248,0.4)' }}>IA</span>
                            </span>
                            <motion.span
                                className="w-1.5 h-1.5 bg-[#38BDF8] rounded-full"
                                style={{ boxShadow: '0 0 8px rgba(56,189,248,0.8)' }}
                                animate={{ opacity: [1, 0.4, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </Link>
                        <p className="text-sm text-[#64748B] max-w-sm leading-relaxed">
                            Automatización operativa y agentes IA para empresas que quieren operar sin fricción.
                        </p>
                    </div>

                    {/* Soluciones */}
                    <div>
                        <h4 className="text-xs uppercase tracking-[0.15em] text-[#64748B] font-medium mb-4">Soluciones</h4>
                        <ul className="space-y-2.5">
                            {['Atención y servicio', 'Operativa interna', 'Gestión y datos', 'Flujos administrativos'].map((item, i) => (
                                <li key={i}>
                                    <a href="/#servicios" className="text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div>
                        <h4 className="text-xs uppercase tracking-[0.15em] text-[#64748B] font-medium mb-4">Empresa</h4>
                        <ul className="space-y-2.5">
                            {[
                                { name: 'Sectores', href: '/#sectores' },
                                { name: 'Planes', href: '/#precios' },
                                { name: 'Contacto', href: '#' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <a href={item.href} className="text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-[#2563EB]/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#64748B]/60">
                        © {new Date().getFullYear()} VEXIA. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-xs text-[#64748B]/60 hover:text-[#38BDF8] transition-colors">Privacidad</a>
                        <a href="#" className="text-xs text-[#64748B]/60 hover:text-[#38BDF8] transition-colors">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
