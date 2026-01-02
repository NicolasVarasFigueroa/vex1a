import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Bell, BarChart3, Zap, Users, Clock, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

const sectoresData = {
    'restaurantes': {
        name: 'Restaurantes & Delivery',
        tagline: 'Cada mensaje sin responder es una venta que se va a la competencia.',
        subtitulo: 'VEXIA responde cada pedido y reserva en segundos. Automático. 24/7. Sin contratar a nadie.',
        funcionalidades: [
            {
                icon: MessageSquare,
                nombre: 'Atención automática por WhatsApp',
                descripcion: 'Responde pedidos, menús, horarios y disponibilidad en segundos. A cualquier hora.',
                beneficio: 'Cero mensajes sin responder',
            },
            {
                icon: Calendar,
                nombre: 'Gestión de reservas inteligente',
                descripcion: 'Toma reservas, confirma automáticamente y envía recordatorios antes de cada cita.',
                beneficio: 'Mesas siempre llenas',
            },
            {
                icon: Bell,
                nombre: 'Confirmaciones y recordatorios',
                descripcion: 'Avisa a tus clientes antes de llegar. Reduce no-shows sin mover un dedo.',
                beneficio: '80% menos cancelaciones',
            },
            {
                icon: BarChart3,
                nombre: 'Reportes diarios automáticos',
                descripcion: 'Recibe resumen de pedidos, reservas y consultas cada mañana en tu WhatsApp.',
                beneficio: 'Control total sin esfuerzo',
            },
        ],
        resultados: [
            { valor: '90%', label: 'Atención automática' },
            { valor: '0', label: 'Pedidos perdidos' },
            { valor: '24/7', label: 'Siempre activo' },
        ],
        integraciones: ['WhatsApp Business', 'Restorando', 'PedidosYa', 'Rappi', 'iFood'],
    },
    'clinicas-salud': {
        name: 'Clínicas y Salud',
        tagline: 'Tus secretarias no deberían pasar el día llamando para confirmar citas.',
        subtitulo: 'VEXIA confirma cada cita, reagenda automáticamente y reduce ausencias. Sin llamar.',
        funcionalidades: [
            {
                icon: Calendar,
                nombre: 'Confirmación automática de citas',
                descripcion: 'Cada paciente recibe confirmación por WhatsApp. Responde con un click.',
                beneficio: 'Sin llamadas manuales',
            },
            {
                icon: Bell,
                nombre: 'Recordatorios inteligentes',
                descripcion: '48h, 24h y 2h antes. El paciente no olvida, tú no pierdes tiempo.',
                beneficio: '70% menos ausencias',
            },
            {
                icon: Users,
                nombre: 'Lista de espera activa',
                descripcion: 'Si alguien cancela, el siguiente en lista recibe la hora automáticamente.',
                beneficio: 'Cero horas vacías',
            },
            {
                icon: MessageSquare,
                nombre: 'Atención a consultas 24/7',
                descripcion: 'Horarios, preparaciones, ubicación. Respuestas instantáneas siempre.',
                beneficio: 'Pacientes informados',
            },
        ],
        resultados: [
            { valor: '70%', label: 'Menos ausencias' },
            { valor: '5min', label: 'Confirmación' },
            { valor: '24/7', label: 'Atención' },
        ],
        integraciones: ['Medilink', 'Dentalink', 'Google Calendar', 'WhatsApp', 'Outlook'],
    },
    'ecommerce': {
        name: 'E-commerce & Retail',
        tagline: 'Cada carrito abandonado es dinero que dejaste sobre la mesa.',
        subtitulo: 'VEXIA recupera ventas, responde consultas y notifica pedidos. Automático. Siempre.',
        funcionalidades: [
            {
                icon: Zap,
                nombre: 'Recuperación de carritos',
                descripcion: 'Mensaje personalizado al cliente que abandonó. Descuento opcional incluido.',
                beneficio: '35% carritos recuperados',
            },
            {
                icon: MessageSquare,
                nombre: 'Atención instantánea 24/7',
                descripcion: 'Stock, tallas, envíos, devoluciones. Respuestas en segundos.',
                beneficio: 'Clientes que compran',
            },
            {
                icon: Bell,
                nombre: 'Notificaciones proactivas',
                descripcion: 'Estado del pedido, tracking, entrega. El cliente sabe antes de preguntar.',
                beneficio: 'Cero "¿dónde está mi pedido?"',
            },
            {
                icon: Users,
                nombre: 'Recomendaciones personalizadas',
                descripcion: 'Basado en historial de compras. Aumenta ticket promedio.',
                beneficio: 'Más ventas por cliente',
            },
        ],
        resultados: [
            { valor: '35%', label: 'Recuperación' },
            { valor: '<1min', label: 'Respuesta' },
            { valor: '4x', label: 'Conversión' },
        ],
        integraciones: ['Shopify', 'WooCommerce', 'Mercado Libre', 'VTEX', 'Magento'],
    },
    'servicios-profesionales': {
        name: 'Servicios Profesionales',
        tagline: 'Mientras no respondes, tu competencia ya agendó la reunión.',
        subtitulo: 'VEXIA califica leads, agenda reuniones y hace seguimiento. Sin que lo pidas.',
        funcionalidades: [
            {
                icon: Zap,
                nombre: 'Respuesta instantánea a leads',
                descripcion: 'Cada consulta respondida en segundos. A cualquier hora.',
                beneficio: 'Cero leads perdidos',
            },
            {
                icon: Users,
                nombre: 'Calificación automática',
                descripcion: 'Preguntas clave antes de pasar al humano. Solo hablas con los buenos.',
                beneficio: 'Tiempo bien invertido',
            },
            {
                icon: Calendar,
                nombre: 'Agendamiento inteligente',
                descripcion: 'El prospecto elige hora disponible. Reunión confirmada automática.',
                beneficio: '2x más reuniones',
            },
            {
                icon: Bell,
                nombre: 'Seguimiento que no falla',
                descripcion: 'Si no responden, el agente insiste. Profesional y persistente.',
                beneficio: 'Pipeline siempre activo',
            },
        ],
        resultados: [
            { valor: '80%', label: 'Auto-calificados' },
            { valor: '2x', label: 'Más reuniones' },
            { valor: '0', label: 'Leads perdidos' },
        ],
        integraciones: ['HubSpot', 'Calendly', 'Google Meet', 'Pipedrive', 'Zoom'],
    },
    'educacion-cursos': {
        name: 'Educación & Cursos',
        tagline: 'Cada estudiante que se va sin inscribirse es un ingreso que perdiste.',
        subtitulo: 'VEXIA guía inscripciones, responde admisión y detecta deserción. 24/7.',
        funcionalidades: [
            {
                icon: MessageSquare,
                nombre: 'Admisión 24/7',
                descripcion: 'Responde consultas de prospectos a cualquier hora. Nunca cierras.',
                beneficio: 'Más inscripciones',
            },
            {
                icon: Zap,
                nombre: 'Inscripción guiada',
                descripcion: 'Paso a paso hasta completar. Sin abandonos a mitad de proceso.',
                beneficio: '3x más rápido',
            },
            {
                icon: Bell,
                nombre: 'Recordatorios académicos',
                descripcion: 'Clases, entregas, pagos. El estudiante nunca olvida.',
                beneficio: 'Menos deserción',
            },
            {
                icon: BarChart3,
                nombre: 'Detección de riesgo',
                descripcion: 'Identifica patrones de deserción antes de que sea tarde.',
                beneficio: '60% menos abandono',
            },
        ],
        resultados: [
            { valor: '60%', label: 'Menos deserción' },
            { valor: '3x', label: 'Inscripción rápida' },
            { valor: '24/7', label: 'Soporte' },
        ],
        integraciones: ['Moodle', 'Canvas', 'Hotmart', 'Zoom', 'WhatsApp'],
    },
    'finanzas-cobranzas': {
        name: 'Finanzas y Cobranzas',
        tagline: 'Cobrar no debería consumir todo tu día.',
        subtitulo: 'VEXIA envía recordatorios, registra compromisos y escala inteligentemente.',
        funcionalidades: [
            {
                icon: Bell,
                nombre: 'Recordatorios multicanal',
                descripcion: 'WhatsApp, SMS, email. El mensaje llega donde el cliente lo lee.',
                beneficio: 'Mayor contactabilidad',
            },
            {
                icon: CheckCircle2,
                nombre: 'Registro de compromisos',
                descripcion: 'Cada promesa de pago queda registrada automáticamente.',
                beneficio: 'Nada se pierde',
            },
            {
                icon: Zap,
                nombre: 'Escalamiento inteligente',
                descripcion: 'Si no pagan, el caso escala automáticamente. A tiempo.',
                beneficio: 'Acciones oportunas',
            },
            {
                icon: BarChart3,
                nombre: 'Reportes de cartera',
                descripcion: 'Estado de cada cuenta en tiempo real. Sin armar Excel.',
                beneficio: 'Visibilidad total',
            },
        ],
        resultados: [
            { valor: '45%', label: 'Mejor recupero' },
            { valor: '3x', label: 'Más contactos' },
            { valor: '<24h', label: 'Escalamiento' },
        ],
        integraciones: ['SAP', 'Oracle', 'Nubox', 'Bsale', 'WhatsApp'],
    },
};

const SectorLayout = () => {
    const { slug } = useParams();
    const sector = sectoresData[slug];

    if (!sector) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center p-8 rounded-2xl bg-[#0A0E18]/80 border border-[#2563EB]/20">
                    <h1 className="text-xl font-bold text-white mb-3">Sector no encontrado</h1>
                    <Link to="/" className="text-[#3B82F6] hover:underline text-sm">← Volver</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-6xl mx-auto">

                {/* ═══════════════════════════════════════════════════════
                    HERO - Problema + Solución clara
                ═══════════════════════════════════════════════════════ */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Link to="/#sectores" className="text-[#3B82F6] text-sm hover:underline mb-6 inline-block">
                        ← Volver a sectores
                    </Link>

                    <h1
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl mx-auto"
                        style={{ textShadow: '0 0 40px rgba(56,189,248,0.25)' }}
                    >
                        {sector.tagline}
                    </h1>

                    <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto mb-8">
                        {sector.subtitulo}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.button
                            className="flex items-center gap-2 text-sm font-semibold text-white rounded-full px-8 py-4"
                            style={{
                                background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                                boxShadow: '0 4px 30px rgba(37,99,235,0.5)'
                            }}
                            whileHover={{ scale: 1.03, boxShadow: '0 8px 40px rgba(37,99,235,0.6)' }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Clock className="w-4 h-4" />
                            Ver cuántas ventas estoy perdiendo
                        </motion.button>
                        <motion.button
                            className="flex items-center gap-2 text-sm text-white border border-[#2563EB]/40 rounded-full px-6 py-3"
                            whileHover={{ borderColor: 'rgba(37,99,235,0.7)', backgroundColor: 'rgba(37,99,235,0.08)' }}
                        >
                            <Phone className="w-4 h-4" />
                            Hablar ahora
                        </motion.button>
                    </div>
                </motion.div>

                {/* ═══════════════════════════════════════════════════════
                    FUNCIONALIDADES - Cards con beneficio claro
                ═══════════════════════════════════════════════════════ */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="text-center mb-10">
                        <span className="text-xs font-semibold text-[#38BDF8] uppercase tracking-widest">
                            Qué incluye VEXIA para {sector.name}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {sector.funcionalidades.map((func, i) => {
                            const Icon = func.icon;
                            return (
                                <motion.div
                                    key={i}
                                    className="group rounded-2xl p-6 relative overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(10,14,24,0.9) 0%, rgba(7,10,18,0.95) 100%)',
                                        border: '1px solid rgba(37,99,235,0.12)',
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    whileHover={{
                                        borderColor: 'rgba(37,99,235,0.35)',
                                        boxShadow: '0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(37,99,235,0.08)'
                                    }}
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(37,99,235,0.05))',
                                                border: '1px solid rgba(37,99,235,0.2)',
                                                boxShadow: '0 0 20px rgba(37,99,235,0.1)'
                                            }}
                                        >
                                            <Icon className="w-5 h-5 text-[#3B82F6]" strokeWidth={1.5} />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#38BDF8] transition-colors">
                                                {func.nombre}
                                            </h3>
                                            <p className="text-sm text-[#64748B] mb-3 leading-relaxed">
                                                {func.descripcion}
                                            </p>
                                            {/* Beneficio destacado */}
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                                                <span className="text-sm font-medium text-[#22C55E]">{func.beneficio}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover glow */}
                                    <div
                                        className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                                        style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent)' }}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* ═══════════════════════════════════════════════════════
                    RESULTADOS + CTA FINAL
                ═══════════════════════════════════════════════════════ */}
                <motion.div
                    className="rounded-2xl p-8 lg:p-10 relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(10,14,24,0.95) 100%)',
                        border: '1px solid rgba(37,99,235,0.2)',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* Resultados */}
                        <div>
                            <span className="text-xs font-semibold text-[#38BDF8] uppercase tracking-widest mb-6 block">
                                Resultados que puedes esperar
                            </span>
                            <div className="flex gap-8">
                                {sector.resultados.map((r, i) => (
                                    <div key={i}>
                                        <div
                                            className="text-4xl lg:text-5xl font-bold text-[#3B82F6]"
                                            style={{ textShadow: '0 0 30px rgba(56,189,248,0.4)' }}
                                        >
                                            {r.valor}
                                        </div>
                                        <div className="text-sm text-[#64748B] mt-1">{r.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Integraciones */}
                            <div className="mt-8">
                                <span className="text-xs text-[#64748B] block mb-3">Se conecta con:</span>
                                <div className="flex flex-wrap gap-2">
                                    {sector.integraciones.map((int, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 rounded-full text-xs text-[#94A3B8]"
                                            style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.1)' }}
                                        >
                                            {int}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl font-bold text-white mb-3">
                                ¿Listo para dejar de perder ventas?
                            </h3>
                            <p className="text-[#94A3B8] mb-6">
                                Prueba 7 días gratis. Sin tarjeta. Sin compromiso.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    className="flex items-center justify-center gap-2 text-sm font-semibold text-white rounded-full px-8 py-4"
                                    style={{
                                        background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                                        boxShadow: '0 4px 30px rgba(37,99,235,0.5)'
                                    }}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Probar 7 días gratis
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>
                                <motion.button
                                    className="flex items-center justify-center gap-2 text-sm text-white border border-[#2563EB]/40 rounded-full px-6 py-3"
                                    whileHover={{ borderColor: 'rgba(37,99,235,0.7)' }}
                                >
                                    Ver demo
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Decorative glow */}
                    <div
                        className="absolute -top-20 right-0 w-60 h-60 pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)',
                            filter: 'blur(60px)',
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default SectorLayout;
