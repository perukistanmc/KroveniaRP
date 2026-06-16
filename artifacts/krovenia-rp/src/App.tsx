import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaYoutube, FaDiscord, FaHeart, FaTiktok } from "react-icons/fa";

const KROVENIA_LETTERS = ["K","R","O","V","E","N","I","A"];

const SPAWN_IMAGES = [
  "https://res.cloudinary.com/dvszdpzax/image/upload/v1781290974/Imagen_1_y43nqx.png",
  "https://res.cloudinary.com/dvszdpzax/image/upload/v1781290974/Imagen_4_jhey4c.png",
  "https://res.cloudinary.com/dvszdpzax/image/upload/v1781290974/Imagen_3_nrmrpd.png",
  "https://res.cloudinary.com/dvszdpzax/image/upload/v1781290974/Imagen_5_uzspo8.png",
  "https://res.cloudinary.com/dvszdpzax/image/upload/v1781290974/2_Imagen_beql9w.png",
  "https://res.cloudinary.com/dvszdpzax/image/upload/v1781290973/Imagen_6_k2wkvp.png",
  "https://res.cloudinary.com/dvszdpzax/image/upload/v1781290973/Imagen_7_piyskl.png",
];

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + SPAWN_IMAGES.length) % SPAWN_IMAGES.length : null), []);
  const nextImage = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % SPAWN_IMAGES.length : null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-primary/30">
      {/* SVG filter for Minecraft cracked/roughened text edges */}
      <svg style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }} aria-hidden="true">
        <defs>
          <filter id="mc-crack" colorInterpolationFilters="sRGB" x="-4%" y="-10%" width="108%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.75 0.35" numOctaves="4" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feComposite in="displaced" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      {/* Sticky Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-end items-center glass-nav">
        <ul className="flex gap-6 md:gap-8 items-center text-sm md:text-base font-medium tracking-wide">
          <li>
            <a href="#inicio" onClick={(e) => smoothScroll(e, "inicio")} className="text-foreground/80 hover:text-white transition-colors duration-200 uppercase tracking-widest">
              Inicio
            </a>
          </li>
          <li>
            <a href="#creadores" onClick={(e) => smoothScroll(e, "creadores")} className="text-foreground/80 hover:text-white transition-colors duration-200 uppercase tracking-widest">
              Creadores
            </a>
          </li>
          <li>
            <a href="#galeria" onClick={(e) => smoothScroll(e, "galeria")} className="text-foreground/80 hover:text-white transition-colors duration-200 uppercase tracking-widest">
              Galería
            </a>
          </li>
          <li>
            <a href="#mapa" onClick={(e) => smoothScroll(e, "mapa")} className="text-foreground/80 hover:text-white transition-colors duration-200 uppercase tracking-widest">
              Mapa
            </a>
          </li>
          <li>
            <a href="#donaciones" onClick={(e) => smoothScroll(e, "donaciones")} className="text-foreground/80 hover:text-white transition-colors duration-200 uppercase tracking-widest">
              Donaciones
            </a>
          </li>
          <li>
            <a href="#discord" onClick={(e) => smoothScroll(e, "discord")} className="text-foreground/80 hover:text-white transition-colors duration-200 uppercase tracking-widest">
              Discord
            </a>
          </li>
          <li>
            <a href="#redes" onClick={(e) => smoothScroll(e, "redes")} className="text-foreground/80 hover:text-white transition-colors duration-200 uppercase tracking-widest">
              Redes
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dvszdpzax/image/upload/v1781009714/krovenia_bienvenida_ups7mv.png')` 
          }}
        />
        <div className="absolute inset-0 z-0 bg-black/60 bg-gradient-to-b from-transparent to-background/90" />

        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="animate-float"
          >
            <h1 className="font-minecraft text-6xl md:text-8xl lg:text-9xl tracking-wider flex">
              {KROVENIA_LETTERS.map((char, i) => (
                <span
                  key={i}
                  style={{
                    color: "#ffffff",
                    textShadow: "4px 4px 0px #000000",
                    display: "inline-block",
                  }}
                >
                  {char}
                </span>
              ))}
            </h1>
            <h2 className="font-minecraft text-3xl md:text-5xl lg:text-6xl mt-2 tracking-widest flex justify-center">
              <span style={{ color: "#1e3a8a", textShadow: "3px 3px 0px #000000" }}>R</span>
              <span style={{ color: "#FFE600", textShadow: "3px 3px 0px #000000" }}>P</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-8"
          >
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
              Sumérgete en una experiencia de rol épica. El destino de este país está en tus manos.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-12"
          >
            <a 
              href="#creadores" 
              onClick={(e) => smoothScroll(e, "creadores")}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white/70 hover:text-white"
            >
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Creators Section */}
      <section id="creadores" className="py-32 px-6 relative z-10 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-50 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Creadores del Proyecto
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Jos3_0 Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel rounded-3xl p-8 md:p-10 flex flex-col items-center text-center group hover:border-primary/30 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50" />
              
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-all duration-500 mb-6 shadow-2xl relative">
                <img 
                  src="https://res.cloudinary.com/dvszdpzax/image/upload/v1781009714/Loki_jose_nbczxi.jpg" 
                  alt="Jos3_0" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-wide font-minecraft">Jos3_0</h3>
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">Admin</p>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Responsable de la gestión técnica y diseñador de la página web.
              </p>
            </motion.div>

            {/* Tachendo Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-panel rounded-3xl p-8 md:p-10 flex flex-col items-center text-center group hover:border-primary/30 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -ml-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50" />
              
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-all duration-500 mb-6 shadow-2xl relative">
                <img 
                  src="https://res.cloudinary.com/dvszdpzax/image/upload/v1781099770/Mii_Logo_Morado_jum2ol.jpg" 
                  alt="Tachendo" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-wide font-minecraft">Tachendo</h3>
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">Owner</p>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
                Responsable de la creación y mantenimiento del proyecto.
              </p>
              
              <a 
                href="https://www.youtube.com/@tachendo" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10 w-full justify-center group/yt"
              >
                <FaYoutube className="text-red-600 text-2xl group-hover/yt:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-300 group-hover/yt:text-white transition-colors">
                  Visita el canal de Tachendo
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-32 px-6 relative z-10 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/3 via-background to-background opacity-40 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Galería
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          </motion.div>

          {/* Spawn subsection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide font-minecraft">Spawn</h3>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {SPAWN_IMAGES.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group relative aspect-video overflow-hidden rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 cursor-zoom-in"
                  onClick={() => setLightboxIndex(i)}
                >
                  <img
                    src={src}
                    alt={`Spawn ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 rounded-full p-2">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section id="mapa" className="py-32 px-6 relative z-10 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-50 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Mapa
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          </motion.div>
        </div>
      </section>

      {/* Donations Section */}
      <section id="donaciones" className="py-32 px-6 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl w-full text-center"
        >
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Apoya el Servidor
            </h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel border border-yellow-500/20 rounded-3xl p-10 md:p-14 shadow-[0_0_50px_rgba(245,158,11,0.07)]"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-full p-5 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <FaHeart className="text-4xl text-yellow-400" />
              </div>
            </div>

            <p className="text-gray-300 text-lg md:text-xl mb-3 font-light leading-relaxed max-w-xl mx-auto">
              Cada donación ayuda a mantener viva la nación de Krovenia.
            </p>
            <p className="text-gray-500 text-base mb-10 max-w-md mx-auto">
              Tu apoyo nos permite mejorar el servidor, agregar nuevo contenido y seguir creciendo juntos.
            </p>

            <a
              href="https://www.papayoux.com/es/cagnotte/perukistanmc"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-yellow-500/60 text-yellow-300 bg-yellow-500/10 px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 hover:bg-yellow-500/20 hover:border-yellow-400 hover:text-yellow-200 hover:shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:-translate-y-1 group"
            >
              <FaHeart className="text-lg group-hover:scale-110 transition-transform" />
              <span>Donar en PapaYoux</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Discord Section */}
      <section id="discord" className="py-32 px-6 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
        {/* Abstract background elements */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 glass-panel border border-primary/30 rounded-3xl p-10 md:p-16 max-w-3xl w-full text-center shadow-[0_0_50px_rgba(16,185,129,0.1)]"
        >
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-background p-4 rounded-full border border-primary/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <FaDiscord className="text-5xl text-[#5865F2]" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-8 mb-6 tracking-tight">
            La aventura te espera
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Únete a nuestra comunidad. Conoce a otros jugadores, mantente al tanto de las actualizaciones y comienza tu historia en Krovenia.
          </p>
          
          <a
            href="https://discord.gg/njm8JMmWNj"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-black/50 border border-primary text-white px-8 py-4 rounded-full font-medium tracking-wide btn-glow relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            <FaDiscord className="text-xl" />
            <span>Únete al Discord</span>
          </a>
        </motion.div>
      </section>

      {/* Social Media Section */}
      <section id="redes" className="py-32 px-6 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/3 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl w-full text-center"
        >
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Síguenos
            </h2>
            <div className="h-1 w-20 bg-white/30 mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* TikTok */}
            <motion.a
              href="https://www.tiktok.com/@kroveniarp?_r=1&_t=ZN-974GAI2v7Dy"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-panel border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4 group hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-white/5 border border-white/10 rounded-full p-4 group-hover:bg-white/10 transition-colors duration-300">
                <FaTiktok className="text-3xl text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg tracking-wide">TikTok</p>
                <p className="text-gray-500 text-sm mt-1">@kroveniarp</p>
              </div>
            </motion.a>

            {/* YouTube */}
            <motion.a
              href="https://www.youtube.com/@KroveniaRP"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4 group hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-white/5 border border-white/10 rounded-full p-4 group-hover:bg-red-500/10 transition-colors duration-300">
                <FaYoutube className="text-3xl text-red-500" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg tracking-wide">YouTube</p>
                <p className="text-gray-500 text-sm mt-1">@KroveniaRP</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 md:p-10"
            onClick={closeLightbox}
            onTouchStart={(e) => {
              const x = e.touches[0].clientX;
              (e.currentTarget as HTMLDivElement).dataset.touchX = String(x);
            }}
            onTouchEnd={(e) => {
              const startX = Number((e.currentTarget as HTMLDivElement).dataset.touchX ?? 0);
              const diff = startX - e.changedTouches[0].clientX;
              if (Math.abs(diff) > 50) diff > 0 ? nextImage() : prevImage();
            }}
          >
            <AnimatePresence mode="sync">
              <motion.img
                key={lightboxIndex}
                src={SPAWN_IMAGES[lightboxIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            {/* Close */}
            <button onClick={closeLightbox} className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full w-10 h-10 flex items-center justify-center text-white transition-colors z-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Prev */}
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 border border-white/20 rounded-full w-11 h-11 flex items-center justify-center text-white transition-colors z-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Next */}
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 border border-white/20 rounded-full w-11 h-11 flex items-center justify-center text-white transition-colors z-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 border border-white/10 rounded-full px-4 py-1 text-white/70 text-sm">
              {lightboxIndex + 1} / {SPAWN_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 bg-black">
        <p className="text-gray-600 text-sm font-light">
          &copy; {new Date().getFullYear()} Krovenia RP. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
