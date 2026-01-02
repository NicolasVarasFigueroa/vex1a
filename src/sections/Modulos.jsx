const Modulos = () => {
    const servicios = [
        {
            title: 'Automatización de atención y servicio',
            description: 'Procesos que responden, gestionan y derivan consultas sin intervención manual. Tus clientes atendidos las 24 horas, sin saturar a tu equipo.',
            footer: 'Diseñado a medida para tu operación.',
            icon: '💬',
        },
        {
            title: 'Automatización operativa interna',
            description: 'Eliminación de tareas repetitivas, actualización de sistemas, control de procesos y reducción de errores. Tu operación funcionando sin fricciones.',
            footer: 'Diseñado a medida para tu operación.',
            icon: '⚙️',
        },
        {
            title: 'Automatización de gestión y datos',
            description: 'Procesos que mantienen información sincronizada, ordenada y actualizada para reportes, sistemas y equipos. Datos confiables, siempre.',
            footer: 'Diseñado a medida para tu operación.',
            icon: '📊',
        },
        {
            title: 'Automatización de flujos administrativos',
            description: 'Procesos que registran, validan, escalan o completan tareas sin intervención humana. Menos carga para tu equipo, más velocidad para tu negocio.',
            footer: 'Diseñado a medida para tu operación.',
            icon: '📋',
        },
    ];

    return (
        <section
            id="soluciones"
            data-snap="true"
            className="min-h-screen flex items-center py-24 relative overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-[#030712]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.04)_0%,_transparent_60%)] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <div className="text-center mb-16">
                    <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-violet-400/80 mb-4">
                        Soluciones
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Automatización para cada área
                        <br />
                        <span className="text-white/70">de tu operación.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {servicios.map((servicio, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl bg-white/[0.02] border border-white/[0.05] p-7 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                        >
                            <div className="text-3xl mb-4">{servicio.icon}</div>
                            <h3 className="text-lg font-semibold text-white mb-3">{servicio.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed mb-4">{servicio.description}</p>
                            <p className="text-xs text-cyan-400/70 font-medium">{servicio.footer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Modulos;
