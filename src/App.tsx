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
  <nav className="navbar fixed top-0 left-0 right-0 z-50 flex items-center justify-end py-6 text-white">
    <div className="flex items-center space-x-8">
      <Instagram size={18} className="cursor-pointer text-[#E1306C] hover:brightness-125 transition-all" />
      <WhatsAppIcon size={18} className="cursor-pointer text-[#25D366] hover:brightness-125 transition-all" />
      <Mail size={18} className="cursor-pointer text-[#EA4335] hover:brightness-125 transition-all" />
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
    <section id="hero" className="hero-section">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-title"
      >
        AURORA SERVICES
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="hero-description"
      >
        Transformamos tu visión en una web de alto nivel, con diseño profesional y elegancia, donde cada detalle refleja la calidad que tu esencia merece.
      </motion.p>
      <div className="flex flex-wrap justify-center gap-[15px]">
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
          onClick={() => scrollTo('servicios')}
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
          onClick={() => scrollTo('nosotros')}
        >
          Quiénes Somos
        </motion.button>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="nosotros" className="py-24 px-12 bg-[#0a0a0a] text-white">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-black mb-8 font-display tracking-[-0.05em] leading-tight uppercase">AURORA SERVICES</h2>
        <p className="about-text text-xl text-gray-300 max-w-xl font-medium">
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
    { id: 3, label: "MANTENIMIENTO", icon: <Wrench size={18} /> },
  ];

  const content = [
    {
      title: "LANDING PAGE",
      price: "$155.000 ARS / $110 USD",
      maintenance: "$50.000 ARS/mes / $35 USD",
      includes: ["Diseño personalizado", "Adaptable a celular/tablet", "Formulario de contacto", "Botón de WhatsApp", "Galería de imágenes", "Integración con Redes", "Google Maps", "Hasta 7 secciones"],
      quote: "Una Landing Page es una página de una sola pantalla con scroll, elegante y efectiva, diseñada específicamente para convertir visitantes en clientes.",
      buttonText: "Contratar Plan"
    },
    {
      title: "MULTIPÁGINA",
      price: "$280.000 ARS / $200 USD",
      maintenance: "$90.000 ARS/mes / $65 USD",
      includes: ["Múltiples páginas", "Menú de navegación completo", "Hasta 15 secciones", "Diseño responsivo premium", "SEO optimizado", "Blog o sección de noticias", "Formularios avanzados"],
      quote: "Una web completa con varias páginas para mostrar todo lo que ofrece tu negocio de manera organizada y profesional.",
      buttonText: "Contratar Plan"
    },
    {
      title: "PROYECTOS PERSONALIZADOS",
      isCustom: true,
      blocks: [
        {
          title: "🛍️ Tienda online",
          price: "Desde $700k ARS / $500 USD",
          includes: ["Carrito de compras", "Pasarela de pagos", "Gestión de productos", "Control de pedidos"]
        },
        {
          title: "📋 Web administración",
          price: "Desde $480k ARS / $340 USD",
          includes: ["Panel de control", "Gestión de datos", "Usuarios y roles", "Base de datos"]
        },
        {
          title: "📊 Sistema de stock",
          price: "Desde $500k ARS / $355 USD",
          includes: ["Control de inventario", "Alertas de stock", "Reportes detallados", "Multi-sucursal"]
        }
      ],
      buttonText: "Contratar Plan"
    },
    {
      title: "MANTENIMIENTO — Servicio mensual",
      isMaintenance: true,
      prices: [
        { label: "Landing", price: "$50k" },
        { label: "Multipágina", price: "$90k" },
        { label: "E-commerce", price: "$150k" },
        { label: "Gestión", price: "$130k" },
        { label: "Stock", price: "$140k" }
      ],
      includes: ["Soporte técnico prioritario", "Actualizaciones de seguridad", "Backups semanales", "Optimización de velocidad"],
      quote: "Tu sitio web necesita atención constante para mantenerse seguro, rápido y funcional. Nuestra presencia digital impecable garantiza tu tranquilidad.",
      buttonText: "Consultar"
    }
  ];

  return (
    <section id="precios" className="py-24 px-12 bg-white min-h-[800px] flex flex-col items-center">
      <h2 className="text-4xl font-black mb-16 font-display tracking-tight text-center">PLANES Y PRECIOS</h2>
      
      <div className="w-full max-w-5xl">
        {/* Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 bg-doodles-pink text-white border-2 ${
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-50 rounded-[40px] p-12 md:p-20 shadow-sm border border-gray-100"
          >
            {content[activeTab].isCustom ? (
              <div className="grid md:grid-cols-3 gap-8">
                {content[activeTab].blocks?.map((block, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
                    <h3 className="text-xl font-black mb-4">{block.title}</h3>
                    <div className="text-doodles-pink font-black text-lg mb-6">{block.price}</div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {block.includes.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check size={16} className="text-doodles-pink mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-4 rounded-full bg-doodles-pink text-white text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-doodles-pink/40 border-none">
                      {content[activeTab].buttonText}
                    </button>
                  </div>
                ))}
              </div>
            ) : content[activeTab].isMaintenance ? (
              <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1">
                  <h3 className="text-5xl font-black mb-8 uppercase tracking-tighter">{content[activeTab].title}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {content[activeTab].prices?.map((p, i) => (
                      <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100">
                        <div className="text-[10px] font-black text-gray-400 uppercase mb-1">{p.label}</div>
                        <div className="text-lg font-black text-doodles-pink">{p.price}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-500 italic mb-8 leading-relaxed text-lg">"{content[activeTab].quote}"</p>
                  <button className="px-12 py-5 rounded-full bg-doodles-pink text-white text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-doodles-pink/40 border-none">
                    {content[activeTab].buttonText}
                  </button>
                </div>
                <div className="flex-1 bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 w-full">
                  <h4 className="font-black text-xs uppercase tracking-widest mb-6 text-gray-400">Incluye:</h4>
                  <ul className="space-y-4">
                    {content[activeTab].includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-medium text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-doodles-pink flex items-center justify-center">
                          <Check size={14} className="text-white" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1">
                  <h3 className="text-5xl font-black mb-4 uppercase tracking-tighter">{content[activeTab].title}</h3>
                  <div className="text-3xl font-black text-doodles-pink mb-2">{content[activeTab].price}</div>
                  <div className="text-sm font-bold text-gray-400 mb-8">Mantenimiento: {content[activeTab].maintenance}</div>
                  <p className="text-gray-500 italic mb-10 leading-relaxed text-lg">"{content[activeTab].quote}"</p>
                  <button className="px-12 py-5 rounded-full bg-doodles-pink text-white text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-doodles-pink/40 border-none">
                    {content[activeTab].buttonText}
                  </button>
                </div>
                <div className="flex-1 bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 w-full">
                  <h4 className="font-black text-xs uppercase tracking-widest mb-6 text-gray-400">Incluye:</h4>
                  <ul className="space-y-4">
                    {content[activeTab].includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-medium text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-doodles-pink flex items-center justify-center">
                          <Check size={14} className="text-white" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
    <section id="requirements" className="py-20 px-12 bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-black mb-16 font-display tracking-tight text-center uppercase">Material necesario</h2>
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
    <section id="process" className="py-[100px] px-12 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-20 font-display tracking-tight text-center uppercase">¿Cómo Trabajamos?</h2>
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
    <section id="contacto" className="py-[100px] px-12 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 font-display tracking-tight uppercase">Contacto</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
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
            href="#" 
            className="flex items-center gap-3 px-8 py-4 rounded-full instagram-gradient text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-lg shadow-doodles-pink/20"
          >
            <Instagram size={20} />
            Instagram
          </a>
          <a 
            href="mailto:contacto@auroraweb.com.ar" 
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#EA4335] text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-lg shadow-red-500/20"
          >
            <Mail size={20} />
            contacto@auroraweb.com.ar
          </a>
        </div>
      </div>
    </section>
  );
};

const ServicesFooter = () => (
  <section id="servicios" className="py-24 px-12 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-black uppercase tracking-tight font-display">Desarrollo Web</h3>
        <p className="text-gray-500 leading-relaxed text-sm">
          Creamos sitios web modernos, rápidos y optimizados para todos los dispositivos. Una arquitectura sólida pensada para atraer clientes y convertir visitas en resultados reales.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-black uppercase tracking-tight font-display">Diseño Visual</h3>
        <p className="text-gray-500 leading-relaxed text-sm">
          Diseñamos experiencias visuales únicas que capturan la esencia de tu marca. Estética premium y minimalista para transmitir confianza y profesionalismo desde el primer segundo.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-black uppercase tracking-tight font-display">Soporte</h3>
        <p className="text-gray-500 leading-relaxed text-sm">
          Tu sitio web necesita atención constante. Ofrecemos mantenimiento proactivo, actualizaciones de seguridad y soporte técnico para garantizar una presencia digital impecable.
        </p>
      </div>
    </div>
  </section>
);

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const sections = [
    { id: "hero", label: "Inicio" },
    { id: "nosotros", label: "Historia" },
    { id: "precios", label: "Planes" },
    { id: "requirements", label: "Material" },
    { id: "process", label: "Cómo trabajamos" },
    { id: "contacto", label: "Contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollTo(section.id)}
          className="group relative flex items-center justify-end"
        >
          <span className="absolute right-10 px-3 py-1.5 rounded-lg bg-black/90 text-white text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none border border-white/10">
            {section.label}
          </span>
          <div
            className={`w-3 h-3 rounded-full transition-all duration-500 border-2 ${
              activeSection === section.id
                ? "bg-doodles-pink border-doodles-pink scale-125 shadow-[0_0_15px_rgba(255,0,127,0.8)]"
                : "bg-transparent border-doodles-pink/40 hover:border-doodles-pink"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <FloatingNav />
      <Navbar />
      <Hero />
      <AboutSection />
      <PricingSection />
      <RequirementsSection />
      <ProcessSection />
      <ContactSection />
      <ServicesFooter />
      
      <footer className="py-16 px-12 bg-[#0a0a0a] text-white flex flex-col items-center gap-8 border-t border-white/5">
        <div className="text-2xl font-black font-display tracking-[-0.08em]">AURORA</div>
        <div className="flex items-center space-x-6">
          <Instagram size={18} className="text-[#E1306C] hover:brightness-125 transition-all cursor-pointer" />
          <WhatsAppIcon size={18} className="text-[#25D366] hover:brightness-125 transition-all cursor-pointer" />
          <Mail size={18} className="text-[#EA4335] hover:brightness-125 transition-all cursor-pointer" />
        </div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-4 text-center">
          © 2025 · Argentina · México · Ecuador · Perú
        </div>
      </footer>
    </div>
  );
}
