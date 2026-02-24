import { motion, AnimatePresence } from "framer-motion";

export default function ContratowebModal({
  open,
  onClose,
  onAccept,
  webType = "estatica", // "estatica" | "funcional"
}) {
  if (!open) return null;

  const isFuncional = webType === "funcional";

  const title = isFuncional
    ? "Contrato y Términos – Desarrollo Web Funcional"
    : "Contrato y Términos – Sitio Web Estático";

  const selection = isFuncional
    ? "Web Funcional (requiere evaluación)"
    : "Web Estática (precio fijo)";

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
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-sm text-[#94A3B8] mt-1">
                Selección: <span className="text-white/90 font-medium">{selection}</span>
              </p>
              <p className="text-xs text-[#64748B] mt-2">
                Última actualización: {new Date().toLocaleDateString()}
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
            <div>
              <h4 className="text-white font-semibold">1) Objeto</h4>
              <p className="mt-1">
                El Cliente contrata a VEXIA para el diseño y desarrollo del sitio web
                seleccionado. La entrega se realiza según alcance acordado (secciones, páginas,
                funcionalidades, integraciones).
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold">2) Alcance y entregables</h4>
              <p className="mt-1">
                El alcance se define por propuesta o checklist. Cualquier requerimiento no incluido
                (nuevas secciones, pantallas, panel admin, lógica extra, integraciones adicionales)
                se considera cambio y se cotiza aparte.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold">3) Contenidos y aprobaciones</h4>
              <p className="mt-1">
                El Cliente debe entregar textos, imágenes, logos y aprobaciones en plazos razonables.
                Retrasos del Cliente pueden modificar fechas de entrega.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold">4) Dominio, hosting y SSL</h4>
              <p className="mt-1">
                Si el servicio incluye dominio/hosting/SSL, se indicará el periodo incluido (por ejemplo, 12 meses).
                Renovaciones posteriores pueden ser cobradas aparte o gestionadas por el Cliente.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold">5) Cambios y mantenimiento</h4>
              <p className="mt-1">
                Cambios menores (texto/imágenes) pueden incluirse según lo acordado.
                Cambios mayores o nuevas funciones se cobran como mantenimiento (bolsa de horas) o cotización aparte.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold">6) Garantía</h4>
              <p className="mt-1">
                Se corrigen bugs relacionados al alcance durante un periodo breve post-entrega (según propuesta).
                Mejoras y nuevos requerimientos se gestionan por mantenimiento.
              </p>
            </div>

            {isFuncional ? (
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <h4 className="text-white font-semibold">Nota para Web Funcional</h4>
                <p className="mt-1">
                  La web funcional requiere evaluación (módulos, usuarios, roles, BD, integraciones).
                  El precio final puede variar según requisitos.
                </p>
              </div>
            ) : (
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <h4 className="text-white font-semibold">Nota para Web Estática</h4>
                <p className="mt-1">
                  Precio fijo según lo publicado (siempre que se mantenga el alcance del pack).
                  Extras se cotizan aparte.
                </p>
              </div>
            )}

            <div className="text-xs text-[#64748B]">
              Al aceptar, el Cliente declara haber leído y aceptado estos términos (aceptación electrónica).
            </div>
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