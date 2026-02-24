import { motion, AnimatePresence } from "framer-motion";

export default function ContratoModal({ open, onClose, onAccept, planName = "" }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70" onClick={onClose} />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0B1220] shadow-2xl overflow-hidden"
          initial={{ y: 20, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
        >
          <div className="p-5 md:p-6 border-b border-white/10 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold text-lg">
                Contrato y Términos del Servicio
              </h3>
              <p className="text-sm text-[#94A3B8] mt-1">
                Plan seleccionado:{" "}
                <span className="text-white/90 font-medium">{planName}</span>
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-[#94A3B8] hover:text-white transition px-2 py-1"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>

          <div className="p-5 md:p-6 max-h-[60vh] overflow-auto space-y-4 text-sm text-[#94A3B8] leading-relaxed">
            <p className="text-xs text-[#64748B]">
              Última actualización: {new Date().toLocaleDateString()}
            </p>

            <h4 className="text-white font-semibold">1) Objeto</h4>
            <p>
              El Cliente contrata a VEXIA para prestar el servicio asociado al plan{" "}
              <b className="text-white/90">{planName}</b>, según alcance y entregables
              descritos en la página de Planes y/o propuesta.
            </p>

            <h4 className="text-white font-semibold">2) Alcance</h4>
            <p>
              El alcance incluye lo indicado en el plan contratado. Requerimientos
              fuera de alcance se consideran cambios y se cotizan aparte o mediante
              mantenimiento.
            </p>

            <h4 className="text-white font-semibold">3) Pagos</h4>
            <p>
              El servicio se inicia una vez confirmado el pago (o según hitos).
              Retrasos pueden suspender la ejecución.
            </p>

            <h4 className="text-white font-semibold">4) Cambios y mantenimiento</h4>
            <p>
              Cambios mayores, nuevas funcionalidades o integraciones se cobran como
              mantenimiento (bolsa de horas) o cotización aparte.
            </p>

            <h4 className="text-white font-semibold">5) Proveedores externos</h4>
            <p>
              VEXIA no es responsable por caídas/cambios de terceros (hosting, APIs,
              WhatsApp, Google, etc.).
            </p>

            <h4 className="text-white font-semibold">6) Confidencialidad</h4>
            <p>
              Ambas partes se obligan a mantener confidencial la información del proyecto.
            </p>

            <h4 className="text-white font-semibold">7) Aceptación</h4>
            <p>
              Al aceptar, el Cliente declara haber leído y aceptado estos términos.
              Esta aceptación constituye consentimiento electrónico.
            </p>
          </div>

          <div className="p-5 md:p-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button
              onClick={onClose}
              className="rounded-full px-5 py-3 text-sm font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition text-white"
            >
              Rechazar
            </button>

            <button
              onClick={onAccept}
              className="rounded-full px-5 py-3 text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                boxShadow: "0 8px 25px rgba(37,99,235,0.25)",
              }}
            >
              Acepto y continuar
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}