import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll iterativo inmediato para evitar destellos de scroll en React Router
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
    
    // Fallback normal
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
