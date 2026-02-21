import { Link } from "react-router-dom";
import mailIcon from "../assets/logo-gmail.webp";
import whatsappIcon from "../assets/logo-whatsapp.webp";
import vexiaLogo from "../assets/logo-vexia.png";

import igIcon from "../assets/logo-ig.webp";
import linkedinIcon from "../assets/logo-linkedin.webp";
import faceIcon from "../assets/logo-face.webp";

const Footer = () => {
  return (
    <footer
      className="relative py-10 md:py-14"
      style={{
        backgroundColor: "#05060A",
        borderTop: "1px solid rgba(37,99,235,0.1)",
      }}
    >
      <div className="max-w-5xl mx-auto px-5 md:px-6">
        {/* Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 md:gap-10">
          {/* Logo */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={vexiaLogo}
                alt="Vexia"
                className="h-10 w-auto object-contain"
                draggable="false"
              />
            </Link>

            <p className="text-sm text-[#64748B] max-w-sm leading-relaxed">
              Automatización operativa y agentes IA para empresas que quieren operar sin fricción.
            </p>
          </div>

          {/* Soluciones */}
          <div className="col-span-1">
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#64748B] font-medium mb-4">
              Soluciones
            </h4>
            <ul className="space-y-2.5">
              {[
                "Atención y servicio",
                "Operativa interna",
                "Gestión y datos",
                "Flujos administrativos",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="/#servicios"
                    className="text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div className="col-span-1">
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#64748B] font-medium mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Sectores", href: "/#sectores" },
                { name: "Planes", href: "/#precios" },
                { name: "Contacto", href: "#" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes */}
          <div className="col-span-1">
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#64748B] font-medium mb-4">
              Redes
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/tu_usuario"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                >
                  <img src={igIcon} alt="Instagram" className="h-4 w-4 object-contain" />
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://linkedin.com/company/tu_empresa"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                >
                  <img src={linkedinIcon} alt="LinkedIn" className="h-4 w-4 object-contain" />
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://facebook.com/tu_pagina"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                >
                  <img src={faceIcon} alt="Facebook" className="h-4 w-4 object-contain" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#64748B] font-medium mb-4">
              Contacto
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contacto@vexia.cl"
                  className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                >
                  <img src={mailIcon} alt="Correo" className="h-4 w-4 object-contain" />
                  contacto.vexia.cl@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/569XXXXXXXX?text=Hola%20Vexia,%20quiero%20cotizar%20una%20automatizaci%C3%B3n"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4 object-contain" />
                  +56 9 XXXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#2563EB]/10 mt-8 md:mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748B]/60">
            © {new Date().getFullYear()} VEXIA. Todos los derechos reservados.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-xs text-[#64748B]/60 hover:text-[#38BDF8] transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-xs text-[#64748B]/60 hover:text-[#38BDF8] transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;