import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, Mail, Check, Monitor, Folder, Settings, Wrench, Camera, Palette, FileText, Sparkles, Smartphone, MessageCircle, MapPin, Lightbulb, Search, DollarSign, Rocket, ShieldCheck, Code, ArrowUp, ArrowDown } from "lucide-react";
import "./App.css";

const WhatsAppIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path d="M16 12.5c-.3-.1-.6-.2-.8-.3-.2-.1-.4-.1-.5.1-.1.2-.5.6-.6.7-.1.1-.2.1-.5 0-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.3-1.5-1.5-1.8-.1-.3 0-.4.1-.6.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2 0-.3-.1-.1-.5-1.2-.7-1.6-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.1 1.6 2.5 3.9 3.5.6.2 1 .4 1.3.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.6-.3z" />
  </svg>
);

const Navbar = () => (
  <nav className="navbar fixed top-0 left-0 right-0 z-50 flex items-center justify-end py-6 px-6 md:px-12 text-white">
    <div className="flex items-center space-x-8">
      <a href="https://www.instagram.com/aurora_services25/" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:text-[#FF007F] transition-colors">
        <Instagram size={18} />
      </a>
      <a href="https://wa.me/5492665139985" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-[#FF007F] transition-colors">
        <WhatsAppIcon size={18} />
      </a>
      <a href="mailto:auroraserviceem@gmail.com" className="text-[#EA4335] hover:text-[#FF007F] transition-colors">
        <Mail size={18} />
      </a>
    </div>
  </nav>
);

const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center items-center overflow-hidden px-4"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2560&auto=format&fit=crop')" }}
    >
      <div className="flex flex-col items-center gap-y-8 w-full max-w-7xl">
        <div className="inline-flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title text-center uppercase tracking-widest px-0"
          >
            AURORA SERVICES
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-[#FF007F] w-full mt-2 origin-center"
          />
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="hero-description text-center max-w-2xl mx-auto px-4 mb-0"
        >
          Transformamos tu visión en una web de alto nivel, con diseño profesional y elegancia, donde cada detalle refleja la calidad que tu esencia merece.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-[15px] w-full">
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="hero-button"
            onClick={() => scrollTo('contacto')}
          >
            Contáctanos
          </motion.button>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hero-button"
            onClick={() => scrollTo('servicios-final')}
          >
            Ver Servicios
          </motion.button>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="hero-button"
            onClick={() => scrollTo('precios')}
          >
            Ver Precios
          </motion.button>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="hero-button"
            onClick={() => scrollTo('mision')}
          >
            Quiénes Somos
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="mision" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
      <div className="flex flex-col justify-center text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-black mb-8 font-display tracking-[-0.05em] leading-tight uppercase break-words inline-block border-b-4 border-doodles-pink pb-1 px-0 self-center md:self-start">AURORA SERVICES</h2>
        <p className="about-text text-lg md:text-xl text-gray-300 max-w-xl font-medium mx-auto md:mx-0">
          Aurora Services nació en Argentina para llevar el desarrollo web de alto nivel más allá de las fronteras. Con presencia en Argentina, México, Ecuador y Perú, nuestro equipo combina talento y perseverancia, transformando cada proyecto en una experiencia digital única donde la tecnología y la calidez se encuentran para impulsar tu éxito.
        </p>
      </div>
      <div className="relative group">
        <div className="absolute -inset-4 bg-emerald-50 rounded-[40px] -z-10 group-hover:scale-105 transition-transform duration-500" />
        <img 
          src="https://images.squarespace-cdn.com/content/v1/5c7f456c7eb88c5c90f4dd62/353d2b2a-3284-4895-b48b-be523f3f7dd9/Screenshot+2026-03-16+at+11.07.03%E2%80%AFAM.jpg?format=2500w" 
          alt="AURORA Illustration" 
          className="w-full rounded-3xl shadow-xl border-4 border-white"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "LANDING PAGE", icon: <Monitor size={18} /> },
    { id: 1, label: "MULTIPÁGINA", icon: <Folder size={18} /> },
    { id: 2, label: "PERSONALIZADO", icon: <Settings size={18} /> },
    { id: 3, label: "MANTENIMIENTO" },
  ];

  const content = [
    {
      title: "LANDING PAGE",
      price: "Desde $150.000 ARS / $110 USD",
      maintenance: "$50.000 ARS/mes / $35 USD/mes",
      includes: ["Diseño personalizado", "Adaptada a celular y tablet", "Formulario de contacto", "Integración con WhatsApp", "Galería de imágenes", "Integración de redes sociales", "Google Maps", "Hasta 7 secciones"],
      quote: "Una Landing Page es una página de una sola pantalla con scroll, elegante y efectiva, que presenta tu marca, producto o servicio de forma clara y directa. Diseñada para captar la atención del visitante.",
      buttonText: "Contratar Plan",
      whatsappLink: "https://wa.me/5492665139985?text=Hola%20Aurora%20Services!%20Me%20interesa%20contratar%20el%20plan%20Landing%20Page%20para%20mi%20proyecto."
    },
    {
      title: "MULTIPÁGINA",
      price: "Desde $250.000 ARS / $180 USD",
      maintenance: "$90.000 ARS/mes / $65 USD/mes",
      includes: ["Diseño personalizado", "Adaptada a celular y tablet", "Formulario de contacto", "Integración con WhatsApp", "Galería de imágenes", "Integración de redes sociales", "Google Maps", "Múltiples páginas y secciones", "Menú de navegación completo", "Hasta 15 secciones"],
      quote: "Una web completa con varias páginas para mostrar todo lo que ofrece tu negocio de forma organizada y profesional. Ideal para empresas que necesitan más espacio para comunicar su propuesta.",
      buttonText: "Contratar Plan",
      whatsappLink: "https://wa.me/5492665139985?text=Hola%20Aurora%20Services!%20Me%20interesa%20el%20plan%20Multip%C3%A1gina%20para%20llevar%20mi%20web%20al%20siguiente%20nivel."
    },
    {
      title: "PROYECTOS PERSONALIZADOS",
      isCustom: true,
      blocks: [
        {
          title: "🛍️ Tienda online (e-commerce)",
          price: "Desde $700.000 ARS / $500 USD",
          maintenance: "Desde $150.000 ARS/mes / $105 USD/mes",
          includes: ["Diseño personalizado", "Adaptada a celular y tablet", "Catálogo de productos", "Carrito de compras", "Link de pago vía MercadoPago / PayPal", "Gestión de pedidos", "Integración con WhatsApp", "Redes sociales", "Google Maps", "Formulario de contacto", "Hasta 15 secciones"]
        },
        {
          title: "📋 Web de administración de tareas",
          price: "Desde $480.000 ARS / $340 USD",
          maintenance: "Desde $130.000 ARS/mes / $92 USD/mes",
          includes: ["Diseño personalizado", "Adaptada a celular y tablet", "Panel de gestión embebido", "Integración con Airtable o Notion", "Gestión de tareas y usuarios", "Integración con WhatsApp", "Acceso desde cualquier dispositivo"],
          description: "Una solución práctica para gestionar tareas y equipos, integrada con herramientas externas como Airtable o Notion. Tu cliente accede a un panel organizado y fácil de usar, embebido dentro de su página web."
        },
        {
          title: "📊 Sistema de stock/inventario",
          price: "Desde $500.000 ARS / $355 USD",
          maintenance: "Desde $140.000 ARS/mes / $100 USD/mes",
          includes: ["Diseño personalizado", "Adaptada a celular y tablet", "Panel de inventario embebido", "Integración con Airtable o Google Sheets", "Control de entradas y salidas", "Reportes y estadísticas", "Integración con WhatsApp", "Acceso desde cualquier dispositivo"],
          description: "Un sistema para controlar tu inventario en tiempo real, integrado con herramientas externas como Airtable o Google Sheets. Registrá entradas, salidas y consultá tu stock desde cualquier dispositivo de forma simple y ordenada."
        }
      ],
      buttonText: "Contratar Plan",
      whatsappLink: "https://wa.me/5492665139985?text=Hola%20Aurora%20Services!%20Necesito%20un%20presupuesto%20personalizado%20para%20un%20proyecto%20especial."
    },
    {
      title: "MANTENIMIENTO — Servicio mensual",
      isMaintenance: true,
      prices: [
        { label: "Landing", price: "$50.000 ARS / $35 USD" },
        { label: "Multipágina", price: "$90.000 ARS / $65 USD" },
        { label: "E-commerce", price: "$150.000 ARS / $105 USD" },
        { label: "Gestión", price: "$130.000 ARS / $92 USD" },
        { label: "Stock", price: "$140.000 ARS / $100 USD" }
      ],
      includes: ["Actualizaciones periódicas", "Copias de seguridad", "Seguridad y protección", "Correcciones de errores", "Soporte técnico", "4 horas de consultas a la semana"],
      quote: "Tu presencia digital merece atención constante. Con nuestro plan mensual garantizamos que tu sitio web siempre refleje la calidad y profesionalismo que tu marca merece.",
      buttonText: "Consultar",
      whatsappLink: "https://wa.me/5492665139985?text=Hola%20Aurora%20Services!%20Quisiera%20consultar%20por%20el%20servicio%20de%20mantenimiento%20mensual."
    }
  ];

  return (
    <section id="precios" className="py-24 px-6 md:px-12 bg-white min-h-[800px] flex flex-col items-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-black mb-12 md:mb-16 font-display tracking-tight text-center break-words px-0 inline-block border-b-4 border-doodles-pink pb-1 mx-auto">PLANES Y PRECIOS</h2>
      
      <div className="w-full max-w-5xl mx-auto px-2 md:px-0">
        {/* Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-150 bg-doodles-pink text-white border-2 ${
                activeTab === tab.id 
                  ? "shadow-[0_0_30px_rgba(255,0,127,0.8)] scale-110 border-white" 
                  : "border-transparent hover:scale-105"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-gray-50 rounded-[30px] md:rounded-[40px] p-6 md:p-20 shadow-sm border border-gray-100 w-full max-w-[95vw] md:max-w-full mx-auto"
          >
            {content[activeTab].isCustom ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {content[activeTab].blocks?.map((block, i) => (
                  <div key={i} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col w-full">
                    <h3 className="text-xl font-black mb-4">{block.title}</h3>
                    <div className="text-doodles-pink font-black text-lg mb-1">{block.price}</div>
                    {block.maintenance && (
                      <div className="text-[10px] font-bold text-gray-400 mb-6">Mantenimiento: {block.maintenance}</div>
                    )}
                    <ul className="space-y-3 mb-6">
                      {block.includes.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check size={16} className="text-doodles-pink mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {block.description && (
                      <p className="text-xs text-gray-500 italic mb-8 leading-relaxed">
                        {block.description}
                      </p>
                    )}
                    <div className="mt-auto">
                      <a 
                        href={content[activeTab].whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 rounded-full bg-doodles-pink text-white text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-doodles-pink/40 border-none flex items-center justify-center gap-2"
                      >
                        <WhatsAppIcon size={14} />
                        {content[activeTab].buttonText}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : content[activeTab].isMaintenance ? (
              <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-5xl font-black mb-8 md:mb-10 uppercase tracking-tighter break-words">
                  {content[activeTab].title}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10 w-full">
                  {content[activeTab].prices?.map((p, i) => (
                    <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="text-[10px] font-black text-gray-400 uppercase mb-1">{p.label}</div>
                      <div className="text-lg font-black text-doodles-pink">{p.price}</div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-500 italic mb-10 leading-relaxed text-lg max-w-2xl">
                  "{content[activeTab].quote}"
                </p>

                <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-gray-100 w-full mb-10">
                  <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed text-center">
                    <span className="font-black text-xs uppercase tracking-widest text-gray-400 mr-2">Incluye:</span>
                    {content[activeTab].includes.map((item, i) => (
                      <span key={i}>
                        {item}
                        {i < content[activeTab].includes.length - 1 && (
                          <span className="text-doodles-pink font-black mx-2">·</span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>

                <a 
                  href={content[activeTab].whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-doodles-pink text-white text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-doodles-pink/40 border-none"
                >
                  <WhatsAppIcon size={18} />
                  {content[activeTab].buttonText}
                </a>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter break-words">
                  {content[activeTab].title}
                </h3>
                <div className="text-2xl md:text-4xl font-black text-doodles-pink mb-2">
                  {content[activeTab].price}
                </div>
                <div className="text-xs md:text-sm font-bold text-gray-400 mb-8">
                  Mantenimiento: {content[activeTab].maintenance}
                </div>
                
                <p className="text-base md:text-lg text-gray-500 italic mb-10 leading-relaxed max-w-2xl">
                  "{content[activeTab].quote}"
                </p>

                <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-gray-100 w-full mb-10">
                  <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed text-center">
                    <span className="font-black text-xs uppercase tracking-widest text-gray-400 mr-2">Incluye:</span>
                    {content[activeTab].includes.map((item, i) => (
                      <span key={i}>
                        {item}
                        {i < content[activeTab].includes.length - 1 && (
                          <span className="text-doodles-pink font-black mx-2">·</span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>

                <a 
                  href={content[activeTab].whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-doodles-pink text-white text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-doodles-pink/40 border-none"
                >
                  <WhatsAppIcon size={18} />
                  {content[activeTab].buttonText}
                </a>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const RequirementsSection = () => {
  const items = [
    { icon: <Camera size={24} />, text: "Fotos profesionales" },
    { icon: <Palette size={24} />, text: "Logo en buena calidad" },
    { icon: <FileText size={24} />, text: "Textos e información del negocio" },
    { icon: <Sparkles size={24} />, text: "Colores y estilo preferido" },
    { icon: <Smartphone size={24} />, text: "Redes sociales" },
    { icon: <WhatsAppIcon size={24} />, text: "WhatsApp" },
    { icon: <MapPin size={24} />, text: "Dirección o ubicación" },
    { icon: <Lightbulb size={24} />, text: "¡Y tu idea!" },
  ];

  return (
    <section id="material" className="py-20 px-6 md:px-12 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-16 font-display tracking-tight text-center uppercase break-words inline-block border-b-4 border-doodles-pink pb-1 px-0 mx-auto">Material necesario</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-doodles-pink group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              <span className="text-sm font-bold uppercase tracking-widest leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      icon: <WhatsAppIcon size={28} />,
      title: "Consulta Gratuita",
      desc: <>Escribinos por WhatsApp sin costo. Analizamos tu idea y qué tipo de sitio se adapta mejor a tu negocio.</>
    },
    {
      icon: <Code size={28} />,
      title: "Desarrollo",
      desc: <>Diseñamos y desarrollamos tu sitio con dedicación y profesionalismo. <strong>Landing Page: 7 días hábiles</strong> aprox. · <strong>Multipágina: 10 días hábiles</strong> aprox.</>
    },
    {
      icon: <Search size={28} />,
      title: "Revisión",
      desc: <>Revisamos juntos cada sección, cada detalle y cada imagen hasta que estés conforme con el resultado.</>
    },
    {
      icon: <DollarSign size={28} />,
      title: "Precios",
      desc: <>Claros, transparentes y sin costos ocultos.</>
    },
    {
      icon: <Rocket size={28} />,
      title: "Entrega",
      desc: <>Una vez que aprobás el sitio lo publicamos y queda disponible para todo el mundo.</>
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Soporte",
      desc: <>Nuestro compromiso no termina con la entrega. Estamos disponibles para ayudarte ante cualquier duda o inconveniente.</>
    }
  ];

  return (
    <section id="trabajo" className="py-[100px] px-6 md:px-12 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-16 md:mb-20 font-display tracking-tight text-center uppercase break-words inline-block border-b-4 border-doodles-pink pb-1 px-0 mx-auto">¿Cómo Trabajamos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="process-item"
            >
              <div className="process-icon-container">
                {step.icon}
              </div>
              <h3 className="process-title">
                {step.title}
              </h3>
              <p className="process-desc">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const hours = [
    { country: "Argentina", time: "Lun-Vie: 9—21hs / Sábados: 9—14hs" },
    { country: "México", time: "Lun-Vie: 9—18hs" },
    { country: "Ecuador", time: "Lun-Vie: 9—18hs" },
    { country: "Perú", time: "Lun-Vie: 9—18hs" },
  ];

  return (
    <section id="contacto" className="py-[100px] px-6 md:px-12 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 font-display tracking-tight uppercase break-words inline-block border-b-4 border-doodles-pink pb-1 px-0 mx-auto">Contacto</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed px-4">
            ¿Tenés un proyecto en mente? Contanos tu idea y juntos la convertimos en una experiencia digital de alto nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {hours.map((item, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="font-black uppercase tracking-widest text-xs text-doodles-pink mb-2">{item.country}</h3>
              <p className="text-sm text-gray-300 font-medium">{item.time}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="https://wa.me/5492665139985" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-lg shadow-green-500/20"
          >
            <WhatsAppIcon size={20} />
            WhatsApp: +54 9 2665-139985
          </a>
          <a 
            href="https://www.instagram.com/aurora_services25/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full instagram-gradient text-white font-black uppercase tracking-widest text-xs hover:scale-105 hover:text-[#FF007F] transition-all shadow-lg shadow-doodles-pink/20 no-underline"
          >
            <Instagram size={20} />
            Instagram
          </a>
          <a 
            href="mailto:auroraserviceem@gmail.com" 
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#EA4335] text-white font-black uppercase tracking-widest text-xs hover:scale-105 hover:text-[#FF007F] transition-all shadow-lg shadow-red-500/20 no-underline"
          >
            <Mail size={20} />
            auroraserviceem@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

const ServicesFooter = () => (
  <section id="servicios-final" className="py-24 px-6 md:px-12 bg-gray-50 border-t border-gray-100 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-black uppercase tracking-tight font-display inline-block border-b-2 border-doodles-pink pb-0.5 px-0 mx-auto md:mx-0 self-center md:self-start">Desarrollo Web</h3>
        <p className="text-gray-500 leading-relaxed text-sm">
          Creamos sitios web modernos, rápidos y optimizados para todos los dispositivos. Una arquitectura sólida pensada para atraer clientes y convertir visitas en resultados reales.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-black uppercase tracking-tight font-display inline-block border-b-2 border-doodles-pink pb-0.5 px-0 mx-auto md:mx-0 self-center md:self-start">Diseño Visual</h3>
        <p className="text-gray-500 leading-relaxed text-sm">
          Diseñamos experiencias visuales únicas que capturan la esencia de tu marca. Estética premium y minimalista para transmitir confianza y profesionalismo desde el primer segundo.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-black uppercase tracking-tight font-display inline-block border-b-2 border-doodles-pink pb-0.5 px-0 mx-auto md:mx-0 self-center md:self-start">Soporte</h3>
        <p className="text-gray-500 leading-relaxed text-sm">
          Tu sitio web necesita atención constante. Ofrecemos mantenimiento proactivo, actualizaciones de seguridad y soporte técnico para garantizar una presencia digital impecable.
        </p>
      </div>
    </div>
  </section>
);

const ArrowNav = () => {
  const sections = ["hero", "mision", "precios", "material", "trabajo", "contacto", "servicios-final"];
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSectionIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 items-center">
      {currentSectionIndex > 0 && (
        <button 
          onClick={() => scrollToSection(currentSectionIndex - 1)}
          className="text-doodles-pink hover:scale-125 transition-transform cursor-pointer"
          aria-label="Subir"
        >
          <ArrowUp size={32} strokeWidth={2} />
        </button>
      )}
      {currentSectionIndex < sections.length - 1 && (
        <button 
          onClick={() => scrollToSection(currentSectionIndex + 1)}
          className="text-doodles-pink hover:scale-125 transition-transform cursor-pointer"
          aria-label="Bajar"
        >
          <ArrowDown size={32} strokeWidth={2} />
        </button>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-full">
      <ArrowNav />
      <Navbar />
      <Hero />
      <AboutSection />
      <PricingSection />
      <RequirementsSection />
      <ProcessSection />
      <ContactSection />
      <ServicesFooter />
      
      <footer className="py-16 px-6 md:px-12 bg-[#0a0a0a] text-white flex flex-col items-center gap-8 border-t border-white/5">
        <div className="text-2xl font-black font-display tracking-[-0.08em] inline-block border-b-2 border-doodles-pink pb-0.5 px-0">AURORA</div>
        <div className="flex items-center space-x-6">
          <a href="https://www.instagram.com/aurora_services25/" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:text-[#FF007F] transition-colors">
            <Instagram size={18} />
          </a>
          <a href="https://wa.me/5492665139985" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-[#FF007F] transition-colors">
            <WhatsAppIcon size={18} />
          </a>
          <a href="mailto:auroraserviceem@gmail.com" className="text-[#EA4335] hover:text-[#FF007F] transition-colors">
            <Mail size={18} />
          </a>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-4 text-center">
          © 2025 · Argentina · México · Ecuador · Perú
        </div>
      </footer>
    </div>
  );
}
