import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail, FileText, ChevronRight, Award, MapPin, Phone, Shield, ExternalLink, Download, Briefcase, Code, Globe } from 'lucide-react';

/* NOTE: To use an external CSS file, ensure app.css is in the same folder as this file 
  and uncomment the line below:
  import './app.css'; 
*/

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [lang, setLang] = useState('de');

  const content = {
    de: {
      nav: [
        { id: 'home', label: 'Start' },
        { id: 'about', label: 'Über mich' },
        { id: 'portfolio', label: 'Projekte' },
        { id: 'skills', label: 'Kompetenzen' },
        { id: 'contact', label: 'Kontakt' },
      ],
      hero: {
        status: "Verfügbar für Projekte 2026",
        title: "Präzision in der ",
        titleAccent: "Digitalen Strategie.",
        subtitle: "Strategische Beratung für Enterprise-Kunden mit Fokus auf nachhaltige Effizienz und technische Exzellenz im DACH-Raum.",
        ctaPrimary: "Projekte ansehen",
        ctaSecondary: "Kontakt aufnehmen",
        experience: "Jahre Erfahrung"
      },
      about: {
        header: "Profil",
        title: "Expertise & Methode",
        bio: "Mit über 10 Jahren Erfahrung in der DACH-Region spezialisiere ich mich auf die digitale Transformation von Mittelstandsunternehmen. Mein Fokus liegt auf Effizienz, skalierbarer Architektur und messbarem ROI. Ich glaube an klare Kommunikation und bewährte Methoden.",
        cards: [
          { icon: Award, title: "Erfahrung", text: "Über ein Jahrzehnt in IT-Großprojekten und Prozessoptimierung." },
          { icon: Shield, title: "Verlässlichkeit", text: "Termingerechte Lieferung innerhalb komplexer Budgetvorgaben." },
          { icon: Code, title: "Modern Tech", text: "Brückenschlag zwischen moderner Software und Legacy-Systemen." }
        ]
      },
      projects: {
        header: "Referenzen",
        title: "Case Studies",
        subtitle: "Ein Auszug aus erfolgreich begleiteten Transformationsprojekten und deren messbaren Ergebnissen.",
        details: "Details"
      },
      skills: {
        header: "Expertise",
        title: "Fachliche & Methodische Kompetenzen",
        cvTitle: "Curriculum Vitae",
        cvText: "Für detaillierte Informationen zu meinem Werdegang, Zertifizierungen und einer vollständigen Projektliste laden Sie bitte meinen aktuellen Lebenslauf herunter.",
        cvButton: "Download CV (PDF)"
      },
      contact: {
        header: "Kontakt",
        title: "Lassen Sie uns sprechen.",
        subtitle: "Gerne berate ich Sie unverbindlich zu Ihren aktuellen Herausforderungen in der Digitalisierung oder Projektleitung.",
        formName: "Vor- & Nachname",
        formEmail: "E-Mail Adresse",
        formMessage: "Nachricht",
        formPlaceholder: "Wie kann ich Ihnen helfen?",
        formButton: "Anfrage Senden"
      }
    },
    en: {
      nav: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'portfolio', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
      ],
      hero: {
        status: "Available for projects 2026",
        title: "Precision in ",
        titleAccent: "Digital Strategy.",
        subtitle: "Strategic consulting for enterprise clients focusing on sustainable efficiency and technical excellence in the DACH region.",
        ctaPrimary: "View Projects",
        ctaSecondary: "Get in Touch",
        experience: "Years of Experience"
      },
      about: {
        header: "Profile",
        title: "Expertise & Methodology",
        bio: "With over 10 years of experience in the DACH region, I specialize in digital transformation for Mittelstand companies. My focus is on efficiency, scalable architecture, and measurable ROI. I believe in clear communication and proven methodologies.",
        cards: [
          { icon: Award, title: "Experience", text: "Over a decade in large-scale IT projects and process optimization." },
          { icon: Shield, title: "Reliability", text: "On-time delivery within complex budget constraints." },
          { icon: Code, title: "Modern Tech", text: "Bridging the gap between modern software and legacy systems." }
        ]
      },
      projects: {
        header: "References",
        title: "Case Studies",
        subtitle: "An excerpt of successfully managed transformation projects and their measurable results.",
        details: "Details"
      },
      skills: {
        header: "Expertise",
        title: "Technical & Methodological Competencies",
        cvTitle: "Curriculum Vitae",
        cvText: "For detailed information about my career, certifications, and a full project list, please download my current CV.",
        cvButton: "Download CV (PDF)"
      },
      contact: {
        header: "Contact",
        title: "Let's talk.",
        subtitle: "I would be happy to advise you on your current challenges in digitalization or project management.",
        formName: "Full Name",
        formEmail: "Email Address",
        formMessage: "Message",
        formPlaceholder: "How can I help you?",
        formButton: "Send Inquiry"
      }
    }
  };

  const personalInfo = {
    name: "Arthur Mlambo",
    location: "Berlin, Germany",
    email: "contact@arthurmlambo-portfolio.de",
    linkedin: "linkedin.com/in/arthurmlambo",
    imagePath: "assests/dumi.jpg",
    heroBgPath: "assests/hero-bg.png",
    cvPath: "assests/Arthur Mlambo CV.pdf" // Path relative to public folder
  };

  const skills = [
    { category: { de: "Methodik", en: "Methodologies" }, items: ["Scrum (CSM)", "PRINCE2", "Kanban", "Design Thinking", "OKRs"] },
    { category: { de: "Technisch", en: "Technical" }, items: ["React & Node.js", "Python Data Analysis", "AWS Cloud Infrastructure", "SAP Integration", "SQL"] },
    { category: { de: "Sprachen", en: "Languages" }, items: ["German (Native)", "English (C2 - Business Fluent)", "French (B1)"] },
  ];

  const projects = [
    {
      id: 1,
      title: { de: "Automotive Supply Chain Optimierung", en: "Automotive Supply Chain Optimization" },
      company: "Major German Auto Manufacturer",
      year: "2023",
      challenge: { 
        de: "Der Kunde hatte eine Ineffizienz von 15% bei der Teileverfolgung in drei Produktionswerken.", 
        en: "The client faced a 15% inefficiency in parts tracking across three production plants." 
      },
      technologies: ["IoT", "SAP S/4HANA", "Azure"]
    },
    {
      id: 2,
      title: { de: "FinTech Compliance Portal", en: "FinTech Compliance Portal" },
      company: "Frankfurt Banking Client",
      year: "2022",
      challenge: { 
        de: "Neue EU-Vorschriften erforderten eine komplette Überarbeitung des Onboarding-Prozesses.", 
        en: "New EU regulations required a complete overhaul of the customer onboarding process." 
      },
      technologies: ["React", "Java Spring Boot", "PostgreSQL"]
    },
    {
      id: 3,
      title: { de: "E-Commerce Digitale Transformation", en: "E-Commerce Digital Transformation" },
      company: "Retail Mittelstand",
      year: "2021",
      challenge: { 
        de: "Ein traditioneller Einzelhändler musste während der Pandemie auf D2C-Verkäufe umstellen.", 
        en: "A traditional retailer needed to pivot to D2C sales during the pandemic." 
      },
      technologies: ["Shopify Plus", "Contentful", "Google Analytics"]
    }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="h-10 w-10 bg-slate-900 rounded flex items-center justify-center text-white font-bold text-xl mr-3">
                AM
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 hidden sm:block uppercase">
                {personalInfo.name}
              </span>
            </div>
            
            <div className="hidden md:flex space-x-6 items-center">
              {t.nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                    activeSection === item.id 
                      ? 'text-blue-700 border-b-2 border-blue-700 pb-1' 
                      : 'text-slate-500 hover:text-slate-900 pb-1'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="ml-4 flex items-center border-l border-slate-200 pl-6 space-x-2">
                <button 
                  onClick={() => setLang('de')}
                  className={`text-xs font-bold px-2 py-1 rounded transition-colors ${lang === 'de' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-900'}`}
                >
                  DE
                </button>
                <button 
                  onClick={() => setLang('en')}
                  className={`text-xs font-bold px-2 py-1 rounded transition-colors ${lang === 'en' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-900'}`}
                >
                  EN
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
                className="p-2 text-slate-500 hover:text-blue-700"
              >
                <Globe size={20} />
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-500">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300">
            <div className="px-4 py-6 space-y-4">
              {t.nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-lg font-bold text-slate-700 hover:bg-slate-50 rounded"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        
        {/* Hero Section */}
        <section 
          id="home" 
          className="relative min-h-[85vh] flex items-center py-16 lg:py-28 overflow-hidden bg-slate-900"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src={personalInfo.heroBgPath} 
              alt="Hero Background" 
              className="w-full h-full object-cover opacity-40"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-in fade-in slide-in-from-left duration-700">
                <div className="inline-flex items-center space-x-2 py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-8 backdrop-blur-sm border border-blue-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span>{t.hero.status}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 drop-shadow-sm">
                  {t.hero.title} <br/>
                  <span className="text-blue-400">{t.hero.titleAccent}</span>
                </h1>
                <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
                  {t.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => scrollToSection('portfolio')}
                    className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    {t.hero.ctaPrimary}
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-bold rounded transition-all backdrop-blur-sm"
                  >
                    {t.hero.ctaSecondary}
                  </button>
                </div>
              </div>

              <div className="relative hidden md:block animate-in fade-in slide-in-from-right duration-1000">
                <div className="aspect-[4/5] bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded shadow-2xl overflow-hidden relative group">
                   <img 
                    src={personalInfo.imagePath} 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<div class="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-12 text-center bg-slate-900/50"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-4 opacity-20"><rect x="2" y="7" width="20" height="13" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg><p class="text-sm font-semibold uppercase tracking-widest opacity-60 text-white">Professional Portrait</p></div>';
                    }}
                   />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-blue-600 p-8 text-white rounded shadow-2xl border border-white/10 z-20">
                   <p className="text-3xl font-black">10+</p>
                   <p className="text-sm font-bold uppercase tracking-wider opacity-90">{t.hero.experience}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section id="about" className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-sm font-black text-blue-700 uppercase tracking-[0.2em] mb-4">{t.about.header}</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-10">{t.about.title}</h3>
            <p className="text-xl text-slate-600 leading-relaxed mb-16">
              {t.about.bio}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {t.about.cards.map((card, i) => (
                <div key={i} className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <card.icon className="text-blue-700 mb-6" size={32} />
                  <h4 className="font-black text-slate-900 uppercase text-sm tracking-wider mb-3">{card.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="portfolio" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-sm font-black text-blue-700 uppercase tracking-[0.2em] mb-4">{t.projects.header}</h2>
                <h3 className="text-4xl font-bold text-slate-900">{t.projects.title}</h3>
              </div>
              <p className="text-slate-500 max-w-md">{t.projects.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {projects.map((p) => (
                <div 
                  key={p.id}
                  onClick={() => setSelectedProject(p)}
                  className="group relative bg-white border border-slate-200 hover:border-blue-600 transition-all cursor-pointer p-8"
                >
                  <span className="text-xs font-black text-blue-700 bg-blue-50 px-2 py-1 mb-6 inline-block">{p.year}</span>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">{p.title[lang]}</h4>
                  <p className="text-slate-500 text-sm mb-6 font-medium">{p.company}</p>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-8">{p.challenge[lang]}</p>
                  <div className="flex items-center text-blue-700 text-sm font-bold uppercase tracking-widest border-t border-slate-100 pt-6">
                    {t.projects.details} <ChevronRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-sm font-black text-blue-400 uppercase tracking-[0.2em] mb-6">{t.skills.header}</h2>
                <h3 className="text-4xl font-bold mb-12">{t.skills.title}</h3>
                
                <div className="space-y-10">
                  {skills.map((group, i) => (
                    <div key={i}>
                      <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-4">{group.category[lang]}</h4>
                      <div className="flex flex-wrap gap-3">
                        {group.items.map((skill, j) => (
                          <span key={j} className="px-4 py-2 bg-slate-800 border border-slate-700 text-sm font-medium rounded hover:border-blue-500 transition-colors">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white text-slate-900 p-10 rounded shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-2xl font-bold">{t.skills.cvTitle}</h4>
                  <FileText className="text-blue-700" size={32} />
                </div>
                <p className="text-slate-600 mb-10 leading-relaxed">
                  {t.skills.cvText}
                </p>
                <a 
                  href={personalInfo.cvPath}
                  download
                  className="group flex items-center justify-center w-full px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded transition-all"
                >
                  <Download size={20} className="mr-2 group-hover:animate-bounce" />
                  {t.skills.cvButton}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-sm font-black text-blue-700 uppercase tracking-[0.2em] mb-4">{t.contact.header}</h2>
                <h3 className="text-4xl font-bold text-slate-900 mb-8">{t.contact.title}</h3>
                <p className="text-lg text-slate-600 mb-12">
                  {t.contact.subtitle}
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                      <Mail size={24} />
                    </div>
                    <div className="ml-6">
                      <p className="text-xs font-black uppercase text-slate-400">E-Mail</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-lg font-bold hover:text-blue-700">{personalInfo.email}</a>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                      <Linkedin size={24} />
                    </div>
                    <div className="ml-6">
                      <p className="text-xs font-black uppercase text-slate-400">LinkedIn</p>
                      <a href="#" className="text-lg font-bold hover:text-blue-700">{personalInfo.linkedin}</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-10 border border-slate-100">
                <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black uppercase text-slate-400 mb-2">{t.contact.formName}</label>
                      <input type="text" className="w-full px-4 py-3 bg-white border-slate-200 focus:border-blue-500 focus:ring-0 outline-none rounded" placeholder="Max Mustermann" />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase text-slate-400 mb-2">{t.contact.formEmail}</label>
                      <input type="email" className="w-full px-4 py-3 bg-white border-slate-200 focus:border-blue-500 focus:ring-0 outline-none rounded" placeholder="max@enterprise.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-400 mb-2">{t.contact.formMessage}</label>
                    <textarea rows="5" className="w-full px-4 py-3 bg-white border-slate-200 focus:border-blue-500 focus:ring-0 outline-none rounded" placeholder={t.contact.formPlaceholder}></textarea>
                  </div>
                  <button className="w-full py-4 bg-slate-900 text-white font-black uppercase tracking-[0.2em] hover:bg-slate-800 transition-all rounded shadow-lg">
                    {t.contact.formButton}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-blue-700 rounded flex items-center justify-center text-white font-bold text-lg mr-3">
                AM
              </div>
              <span className="font-bold text-lg uppercase tracking-widest">{personalInfo.name}</span>
            </div>
            <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-slate-400">
              <button onClick={() => setShowImpressum(true)} className="hover:text-white transition">Impressum</button>
              <button onClick={() => setShowDatenschutz(true)} className="hover:text-white transition">Datenschutz</button>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between text-[10px] text-slate-500 uppercase font-bold tracking-widest">
            <p>© {new Date().getFullYear()} {personalInfo.name} — Freelance Digital Strategist.</p>
            <p className="mt-4 md:mt-0">{lang === 'de' ? 'Angaben gemäß § 5 TMG.' : 'Legal disclosure according to § 5 TMG.'}</p>
          </div>
        </div>
      </footer>

      {/* Impressum Modal */}
      {showImpressum && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" onClick={() => setShowImpressum(false)}>
          <div className="bg-white w-full max-w-lg p-10 shadow-2xl relative" onClick={e => e.stopPropagation()}>
             <button onClick={() => setShowImpressum(false)} className="absolute top-6 right-6 p-2 hover:bg-slate-50 rounded-full"><X size={20} /></button>
             <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-widest">Impressum</h2>
             <div className="space-y-6 text-sm text-slate-600">
                <p><strong>Anbieter:</strong><br/>{personalInfo.name}<br/>Berlin, Deutschland</p>
                <p>E-Mail: {personalInfo.email}</p>
             </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;