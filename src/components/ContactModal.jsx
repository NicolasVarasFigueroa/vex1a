import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ContactModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reemplaza esta URL por la que te dé Google al implementar el Apps Script
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyt_67cP6VSO5HME8EJRuKHn1SIsfTkGGmbO5HM96OIpsNpFdmubxnI7NRdsDbIrK-GNQ/exec";

  if (!open) return null;

  const handleChange = (e) => {
    let value = e.target.value;
    
    // Validación restrictiva para el teléfono (sólo permite números, espacios y los símbolos + - ( ) )
    if (e.target.name === "phone") {
      value = value.replace(/[^\d\s\+\-\(\)]/g, "");
    }
    
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { name, email, company, phone } = formData;
    
    // 1. Enviar datos a Google Sheets
    try {
      if (GOOGLE_SCRIPT_URL !== "TU_APPS_SCRIPT_URL_AQUI") {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors", /* no-cors es importante para Apps Script sin errores CORS */
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      }
    } catch (error) {
      console.error("Error guardando en el Excel:", error);
    }
    
    // 2. Mostrar estado de éxito y no redirigir a WhatsApp
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleClose = () => {
    onClose();
    // Resetear formulario para futuras aperturas
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "", company: "", industry: "", phone: "" });
    }, 300); // 300ms de retraso para que cierre la animación primero
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0B1220] shadow-2xl overflow-hidden"
          initial={{ y: 20, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
        >
          {isSuccess ? (
            <div className="p-10 flex flex-col items-center justify-center text-center space-y-4">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-[#94A3B8] hover:text-white transition px-2 py-1"
                aria-label="Cerrar"
              >
                ✕
              </button>
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-20 h-20 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-2"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              
              <h3 className="text-white font-semibold text-2xl tracking-tight">¡Gracias por contactarte!</h3>
              <p className="text-[#94A3B8] text-sm md:text-base max-w-[280px]">
                Hemos recibido tus datos correctamente. Nuestro equipo se pondrá en contacto contigo lo más pronto posible.
              </p>
              
              <div className="pt-6 w-full">
                <button
                  onClick={handleClose}
                  className="w-full rounded-lg px-5 py-3 text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="p-5 border-b border-white/10 flex items-start justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Agendar una Demo
                  </h3>
                  <p className="text-sm text-[#94A3B8] mt-1">
                    Déjanos tus datos y nos pondremos en contacto contigo a la brevedad.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-[#94A3B8] hover:text-white transition px-2 py-1"
                  aria-label="Cerrar"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-5 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-1">Nombre Completo</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#1E293B]/50 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none focus:border-[#3B82F6] transition-colors"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-1">Empresa</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-[#1E293B]/50 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none focus:border-[#3B82F6] transition-colors"
                    placeholder="Ej. Mi Empresa SPA"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-1">Rubro / giro empresa</label>
                  <input
                    type="text"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full bg-[#1E293B]/50 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none focus:border-[#3B82F6] transition-colors"
                    placeholder="Ej. Tecnología, Inmobiliaria..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-1">Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#1E293B]/50 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none focus:border-[#3B82F6] transition-colors"
                    placeholder="juan@empresa.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-1">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[\+0-9\s\-\(\)]+"
                    title="Debe ingresar un número de teléfono válido"
                    className="w-full bg-[#1E293B]/50 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none focus:border-[#3B82F6] transition-colors"
                    placeholder="+56 9 1234 5678"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center justify-center gap-2 w-full rounded-lg px-5 py-3 text-sm font-semibold text-white transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                    style={{
                      background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                      boxShadow: "0 8px 25px rgba(37,99,235,0.25)",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      "Solicitar Demo"
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
