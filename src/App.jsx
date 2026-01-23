import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail, FileText, ChevronRight, Award, Shield, ExternalLink, Download, Briefcase, Code, Globe, Database, Zap, Truck, Layers, Terminal, Cpu, BarChart3, GraduationCap, CheckCircle2, MessageSquare, ArrowRight, Instagram, Twitter, Github, Star, GitBranch, History } from 'lucide-react';

/* Arthur Mlambo Portfolio 
  Strategic Narrative: Domain Expert (Engineering/Logistics) + Data Science Specialist
*/

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);
  const [lang, setLang] = useState('de');

  const content = {
    de: {
      nav: [
        { id: 'home', label: 'Start' },
        { id: 'about', label: 'Über mich' },
        { id: 'stack', label: 'Tech Stack' },
        { id: 'portfolio', label: 'Projekte' },
        { id: 'contact', label: 'Kontakt' },
      ],
      hero: {
        status: "Bereit für Data Science Rollen 2026",
        title: "Subject Matter Expertise trifft ",
        titleAccent: "Data Science.",
        subtitle: "Verschmelzung von fundiertem Ingenieurwissen und Logistik-Erfahrung mit modernen Machine Learning Methoden für den DACH-Raum.",
        ctaPrimary: "Projekte ansehen",
        ctaSecondary: "Kontakt aufnehmen",
        experience: "Jahre Industrieerfahrung"
      },
      about: {
        header: "Profil",
        title: "Der Brückenschlag: Domänenwissen & KI",
        bio: "Ich betrachte Daten nicht im Vakuum, sondern durch die Brille jahrelanger operativer Erfahrung in Technik und Logistik. Meine Stärke liegt darin, komplexe industrielle Prozesse zu verstehen und diese durch datengestützte Modelle zu optimieren. Ich spreche sowohl die Sprache der Ingenieure als auch die der Data Scientists.",
        cards: [
          { icon: Award, title: "Engineering Background", text: "Tiefes Verständnis für physikalische Systeme und Solarenergie." },
          { icon: Truck, title: "Logistics Operations", text: "Praktische Erfahrung in der Prozesssteuerung großer Flottenverbände." },
          { icon: Database, title: "Advanced Analytics", text: "Zertifizierte Expertise in Deep Learning und prädiktiver Modellierung." }
        ]
      },
      strategy: {
        title: "Mein Ansatz",
        items: [
          { title: "Data-Driven Engineering", desc: "Nutzung physikalischer Gesetze als Constraints in ML-Modellen." },
          { title: "Operational Excellence", desc: "Fokus auf Modelle, die in realen Logistik-Umgebungen bestehen." },
          { title: "Scalable Solutions", desc: "Vom lokalen Prototyp zur Cloud-basierten Infrastruktur (AWS)." }
        ]
      },
      stack: {
        header: "Technologien",
        title: "Mein Tech Stack",
        subtitle: "Ein spezialisierter Stack für industrielle Analytics und Predictive Maintenance."
      },
      github: {
        header: "Entwicklung",
        title: "Open Source & Code",
        subtitle: "Ein Blick hinter die Kulissen meiner technischen Arbeit und Forschungs-Repositories.",
        repoLabel: "Top Repositories",
        statsLabel: "Coding Metriken",
        viewGithub: "Profil auf GitHub ansehen"
      },
      projects: {
        header: "Case Studies",
        title: "Ausgewählte Projekte",
        subtitle: "Strategische Projekte an der Schnittstelle von Domänenwissen und technischer Implementierung.",
        details: "Analyse ansehen"
      },
      education: {
        title: "Akademischer Werdegang",
        items: [
          { school: "Stellenbosch University", degree: "M.Eng. in Renewable Energy", period: "Fokus auf Solarsysteme & Thermodynamik" },
          { school: "Data Science Specialization", degree: "Deep Learning & Big Data", period: "Zertifizierte Weiterbildung in ML-Frameworks" }
        ]
      },
      cta_banner: {
        title: "Bereit für den nächsten Schritt?",
        subtitle: "Ich suche nach Möglichkeiten, meine Erfahrung in zukunftsorientierte Teams einzubringen.",
        button: "Projekt anfragen"
      },
      contact: {
        header: "Kontakt",
        title: "Lassen Sie uns vernetzen.",
        subtitle: "Ich bin auf der Suche nach neuen Herausforderungen im Bereich Data Science, Data Engineering oder technischen PM-Rollen.",
        formName: "Name",
        formEmail: "E-Mail",
        formMessage: "Nachricht",
        formPlaceholder: "Erzählen Sie mir von Ihrer Vision...",
        formButton: "Nachricht Senden"
      }
    },
    en: {
      nav: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'stack', label: 'Tech Stack' },
        { id: 'portfolio', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
      ],
      hero: {
        status: "Open for Data Science Roles 2026",
        title: "Subject Matter Expertise meets ",
        titleAccent: "Data Science.",
        subtitle: "Fusing deep engineering knowledge and logistics experience with modern Machine Learning methodologies for the DACH market.",
        ctaPrimary: "View Projects",
        ctaSecondary: "Get in Touch",
        experience: "Years of Industry Experience"
      },
      about: {
        header: "Profile",
        title: "The Bridge: Domain Knowledge & AI",
        bio: "I don't look at data in a vacuum; I view it through the lens of years of operational experience in engineering and logistics. My strength lies in understanding complex industrial processes and optimizing them through data-driven models. I speak the language of both engineers and data scientists.",
        cards: [
          { icon: Award, title: "Engineering Background", text: "Deep understanding of physical systems and solar energy technologies." },
          { icon: Truck, title: "Logistics Operations", text: "Hands-on experience in managing large-scale fleet operations." },
          { icon: Database, title: "Advanced Analytics", text: "Certified expertise in Deep Learning and predictive modeling." }
        ]
      },
      strategy: {
        title: "My Strategic Approach",
        items: [
          { title: "Data-Driven Engineering", desc: "Leveraging physical laws as constraints in machine learning models." },
          { title: "Operational Excellence", desc: "Focusing on models that survive real-world logistics environments." },
          { title: "Scalable Solutions", desc: "Moving from local prototypes to cloud-based infrastructure (AWS)." }
        ]
      },
      stack: {
        header: "Technology",
        title: "Tech Stack",
        subtitle: "A specialized stack for industrial analytics and predictive maintenance."
      },
      github: {
        header: "Development",
        title: "Open Source & Code",
        subtitle: "A behind-the-scenes look at my technical work and research repositories.",
        repoLabel: "Top Repositories",
        statsLabel: "Coding Metrics",
        viewGithub: "View Profile on GitHub"
      },
      projects: {
        header: "Case Studies",
        title: "Selected Projects",
        subtitle: "Strategic projects at the intersection of domain knowledge and technical implementation.",
        details: "View Analysis"
      },
      education: {
        title: "Education & Background",
        items: [
          { school: "Stellenbosch University", degree: "M.Eng. in Renewable Energy", period: "Focus on Solar Systems & Thermodynamics" },
          { school: "Data Science Specialization", degree: "Deep Learning & Big Data", period: "Certified Training in ML Frameworks" }
        ]
      },
      cta_banner: {
        title: "Ready to accelerate your data strategy?",
        subtitle: "I'm looking for opportunities to bring my dual expertise to forward-thinking teams.",
        button: "Get in Touch"
      },
      contact: {
        header: "Contact",
        title: "Let's Connect.",
        subtitle: "I am looking for new challenges in Data Science, Data Engineering, or technical PM roles.",
        formName: "Name",
        formEmail: "Email",
        formMessage: "Message",
        formPlaceholder: "Tell me about your vision...",
        formButton: "Send Message"
      }
    }
  };

  const personalInfo = {
    name: "Arthur Mlambo",
    email: "arthurmlambo@gmail.com",
    github: "artmla",
    linkedin: "art-mla",
    twitter: "art_mla",
    instagram: "art_mla",
    imagePath: "assests/dumi.jpg", // Adjusted based on your local directory structure
    cvPath: "assests/Arthur_Mlambo_CV.pdf",
    heroBgPath: "assests/hero-bg.png" // Updated background path
  };

  const techStack = [
    {
      category: { de: "Programmierung", en: "Programming" },
      icon: Terminal,
      skills: ["Python", "SQL (PostgreSQL/MySQL)", "Matlab", "Arduino"]
    },
    {
      category: { de: "KI & ML", en: "AI & ML" },
      icon: Cpu,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Deep Learning"]
    },
    {
      category: { de: "Analytics", en: "Analytics" },
      icon: Layers,
      skills: ["Pandas", "NumPy", "Seaborn", "CanvasJS", "Power BI"]
    },
    {
      category: { de: "Infrastruktur", en: "Infrastructure" },
      icon: Database,
      skills: ["AWS", "Azure", "Git", "Docker", "DVC"]
    },
    {
      category: { de: "Spezialisiert", en: "Specialized" },
      icon: Zap,
      skills: ["PVsyst", "Solar Design", "Logistics ERP", "Blender"]
    }
  ];

  const githubRepos = [
    {
      name: "ML-Solar-Predictor",
      desc: "End-to-end pipeline for solar irradiance forecasting using LSTM and XGBoost.",
      lang: "Python",
      stars: 12
    },
    {
      name: "Fleet-Optimization-SQL",
      desc: "Complex analytical queries for tracking fleet downtime and maintenance costs.",
      lang: "SQL",
      stars: 8
    },
    {
      name: "Industrial-CV-Detect",
      desc: "PyTorch implementation of defect detection in manufacturing lines.",
      lang: "PyTorch",
      stars: 15
    }
  ];

  const projects = [
    {
      id: 1,
      title: { de: "Solar Output Prediction Modell", en: "Solar Output Prediction Model" },
      company: "Renewable Energy Research",
      year: "2024",
      challenge: { 
        de: "Entwicklung eines Stacked-Ensemble-Modells zur Vorhersage der PV-Leistung basierend auf Wetterdaten. Erhöhung der Prognosegenauigkeit um 15% im Vergleich zu Standard-Benchmarks.", 
        en: "Developing a stacked ensemble model for PV output prediction. Increased forecasting accuracy by 15% compared to baseline benchmarks." 
      },
      technologies: ["Python", "XGBoost", "Time Series", "AWS"]
    },
    {
      id: 2,
      title: { de: "Fleet Data Strategy", en: "Fleet Data Strategy" },
      company: "Takealot Optimization",
      year: "2023",
      challenge: { 
        de: "Optimierung der Flottenauslastung durch prädiktive Analyse operativer Daten. Implementierung eines Dashboards zur Echtzeit-Überwachung von KPIs.", 
        en: "Optimizing fleet utilization through predictive analysis of operational data. Implemented a real-time KPI monitoring dashboard." 
      },
      technologies: ["SQL", "Tableau", "Predictive Logistics", "Python"]
    },
    {
      id: 3,
      title: { de: "Computer Vision für Industrie", en: "Industrial Computer Vision" },
      company: "Certification Project",
      year: "2025",
      challenge: { 
        de: "Implementierung eines CNN-Modells zur automatisierten Schadenserkennung an Solarmodulen mittels Infrarot-Bildern.", 
        en: "Implementation of a CNN model for automated defect detection in solar panels using infrared imagery." 
      },
      technologies: ["PyTorch", "OpenCV", "Deep Learning", "CNN"]
    }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">
      <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-20 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="h-10 w-10 bg-blue-700 rounded flex items-center justify-center text-white font-bold text-xl mr-3 uppercase">AM</div>
            <span className="font-bold text-xl tracking-tight text-slate-900 uppercase hidden sm:block">{personalInfo.name}</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {t.nav.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-[10px] font-black uppercase tracking-widest transition-colors ${activeSection === item.id ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : 'text-slate-500 hover:text-slate-900'}`}>
                {item.label}
              </button>
            ))}
            <div className="flex items-center ml-4 border-l pl-6 space-x-6">
              <div className="flex space-x-2 font-bold text-[10px]">
                <button onClick={() => setLang('de')} className={lang === 'de' ? 'text-blue-700 underline underline-offset-4' : 'text-slate-400'}>DE</button>
                <span className="text-slate-300">|</span>
                <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-blue-700 underline underline-offset-4' : 'text-slate-400'}>EN</button>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Let's Talk
              </button>
            </div>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2"><Menu size={28} /></button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-slate-900 pt-20 overflow-hidden">
        {/* User-Requested Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${personalInfo.heroBgPath})` }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-slate-950/70 backdrop-brightness-75"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-widest mb-6">{t.hero.status}</div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">{t.hero.title}<span className="text-blue-500">{t.hero.titleAccent}</span></h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">{t.hero.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('portfolio')} className="px-8 py-4 bg-white text-slate-900 font-bold rounded hover:bg-slate-100 transition shadow-lg flex items-center group">
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-8 py-4 border border-white/20 text-white font-bold rounded hover:bg-white/5 transition">{t.hero.ctaSecondary}</button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-[4/5] bg-slate-800 rounded-2xl border border-white/10 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative group">
              <img src={personalInfo.imagePath} alt={personalInfo.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/30 transition-all duration-500 rounded-2xl m-4 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">{t.about.header}</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8">{t.about.title}</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-16">{t.about.bio}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {t.about.cards.map((card, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-2xl group hover:border-blue-200 transition-all shadow-sm">
                <card.icon className="text-blue-700 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h4 className="font-bold text-slate-900 mb-3 text-lg">{card.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-12 overflow-hidden relative">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-8">{t.strategy.title}</h3>
                <div className="space-y-6">
                  {t.strategy.items.map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="text-blue-500 mr-4 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <p className="font-bold text-lg mb-1">{item.title}</p>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-40 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center"><BarChart3 size={48} className="text-blue-500 opacity-50" /></div>
                  <div className="h-24 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl font-black">95%</div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-24 bg-white/10 rounded-2xl flex items-center justify-center"><Cpu size={32} className="text-white opacity-50" /></div>
                  <div className="h-40 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center"><Globe size={48} className="text-blue-500 opacity-50" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">{t.stack.header}</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">{t.stack.title}</h3>
            <p className="text-slate-500">{t.stack.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-300 transition-all group">
                <item.icon className="text-blue-700 mb-4" size={28} />
                <h4 className="text-[10px] font-black uppercase text-slate-900 mb-4 tracking-widest">{item.category[lang]}</h4>
                <ul className="space-y-2">
                  {item.skills.map((skill, j) => (
                    <li key={j} className="text-xs font-bold text-slate-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>{skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section id="github" className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent)] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-4">{t.github.header}</h2>
              <h3 className="text-4xl font-bold mb-6">{t.github.title}</h3>
              <p className="text-slate-400">{t.github.subtitle}</p>
            </div>
            <a 
              href={`https://github.com/${personalInfo.github}`} 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
            >
              <Github className="mr-3" size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">{t.github.viewGithub}</span>
              <ExternalLink className="ml-3 text-slate-500 group-hover:text-white transition-colors" size={14} />
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-[10px] font-black uppercase text-blue-500 tracking-widest mb-6 flex items-center">
                <GitBranch size={14} className="mr-2" /> {t.github.repoLabel}
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {githubRepos.map((repo, i) => (
                  <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <Code size={20} className="text-blue-500" />
                      <div className="flex items-center text-[10px] font-bold text-slate-400">
                        <Star size={12} className="mr-1 text-yellow-500" /> {repo.stars}
                      </div>
                    </div>
                    <h5 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">{repo.name}</h5>
                    <p className="text-sm text-slate-500 mb-6 line-clamp-2">{repo.desc}</p>
                    <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                      {repo.lang}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase text-blue-500 tracking-widest mb-6 flex items-center">
                <History size={14} className="mr-2" /> {t.github.statsLabel}
              </h4>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Commit Activity</p>
                    <p className="text-2xl font-bold">1.2k+</p>
                  </div>
                  <div className="w-16 h-1 w-full bg-blue-500/20 rounded overflow-hidden">
                    <div className="w-3/4 h-full bg-blue-500"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-1">PRs Merged</p>
                    <p className="text-2xl font-bold">84</p>
                  </div>
                  <div className="w-16 h-1 w-full bg-blue-500/20 rounded overflow-hidden">
                    <div className="w-1/2 h-full bg-blue-500"></div>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/10">
                  <p className="text-[10px] font-black text-slate-500 uppercase mb-4">Focus Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'SQL', 'C++', 'Arduino'].map(l => (
                      <span key={l} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold">{l}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">{t.projects.header}</h2>
              <h3 className="text-4xl font-bold text-slate-900">{t.projects.title}</h3>
            </div>
            <p className="text-slate-500 max-w-sm text-sm">{t.projects.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {projects.map((p) => (
              <div key={p.id} className="bg-white p-8 border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group flex flex-col h-full">
                <div className="flex justify-between items-start mb-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <span>{p.company}</span>
                  <span className="text-blue-700">{p.year}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 min-h-[56px]">{p.title[lang]}</h4>
                <p className="text-sm text-slate-600 mb-8 leading-relaxed flex-grow">{p.challenge[lang]}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {p.technologies.map((tech, i) => (
                    <span key={i} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-24">
            <div className="bg-blue-700 p-12 rounded-3xl text-white">
              <GraduationCap size={48} className="mb-6 opacity-50" />
              <h4 className="text-2xl font-bold mb-8">{t.education.title}</h4>
              <div className="space-y-8">
                {t.education.items.map((edu, i) => (
                  <div key={i} className="border-l-2 border-blue-400/30 pl-6">
                    <p className="text-sm font-black uppercase tracking-widest opacity-80 mb-1">{edu.school}</p>
                    <p className="text-xl font-bold mb-1">{edu.degree}</p>
                    <p className="text-sm text-blue-200">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-12 border border-slate-200 rounded-3xl flex flex-col justify-center text-center">
              <div className="mb-8 flex justify-center"><FileText size={64} className="text-slate-200" /></div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{lang === 'de' ? 'Interessiert an Details?' : 'Curious about the details?'}</h4>
              <p className="text-slate-500 mb-10 max-w-sm mx-auto">{lang === 'de' ? 'Mein vollständiger Lebenslauf enthält detaillierte Projektbeschreibungen und Referenzen.' : 'My full resume contains detailed project descriptions and technical references.'}</p>
              <a href={personalInfo.cvPath} download className="inline-flex items-center justify-center py-4 px-8 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-lg">
                <Download size={20} className="mr-2" /> {lang === 'de' ? 'Lebenslauf Herunterladen' : 'Download CV'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BIG FINAL CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                {t.cta_banner.title}
              </h2>
              <p className="text-slate-400 text-lg mb-12">
                {t.cta_banner.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center"
                >
                  <MessageSquare size={18} className="mr-2" />
                  {t.cta_banner.button}
                </button>
                <a 
                  href={personalInfo.cvPath} 
                  download
                  className="px-10 py-5 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center"
                >
                  <Download size={18} className="mr-2" />
                  {lang === 'de' ? 'Lebenslauf' : 'Resume'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">{t.contact.header}</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8">{t.contact.title}</h3>
            <p className="text-lg text-slate-600 mb-12">{t.contact.subtitle}</p>
            <div className="grid grid-cols-2 gap-4 mb-12">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center group p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-300 transition-all">
                <Mail size={20} className="text-blue-700 mr-3" />
                <span className="text-xs font-bold">Email</span>
              </a>
              <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center group p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-300 transition-all">
                <Linkedin size={20} className="text-blue-700 mr-3" />
                <span className="text-xs font-bold">LinkedIn</span>
              </a>
              <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noreferrer" className="flex items-center group p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-300 transition-all">
                <Github size={20} className="text-blue-700 mr-3" />
                <span className="text-xs font-bold">GitHub</span>
              </a>
              <a href={`https://twitter.com/${personalInfo.twitter}`} target="_blank" rel="noreferrer" className="flex items-center group p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-300 transition-all">
                <Twitter size={20} className="text-blue-700 mr-3" />
                <span className="text-xs font-bold">Twitter</span>
              </a>
            </div>
          </div>
          <form className="bg-white p-10 border border-slate-200 rounded-3xl shadow-sm" onSubmit={e => e.preventDefault()}>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block">{t.contact.formName}</label>
                  <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 outline-none focus:border-blue-700 transition rounded-xl" placeholder="Arthur" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block">{t.contact.formEmail}</label>
                  <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 outline-none focus:border-blue-700 transition rounded-xl" placeholder="example@email.com" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block">{t.contact.formMessage}</label>
                <textarea rows="5" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 outline-none focus:border-blue-700 transition rounded-xl" placeholder={t.contact.formPlaceholder}></textarea>
              </div>
              <button className="w-full py-4 bg-slate-900 text-white font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition shadow-lg rounded-xl">
                {t.contact.formButton}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 text-center text-slate-500 text-[10px] font-black uppercase tracking-widest border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center">
              <div className="h-8 w-8 bg-blue-700 rounded flex items-center justify-center text-white font-bold text-sm mr-3">AM</div>
              <span className="text-white font-bold tracking-tight">{personalInfo.name}</span>
           </div>
           <p>© {new Date().getFullYear()} All Rights Reserved</p>
           <div className="flex space-x-8">
              <button onClick={() => setShowImpressum(true)} className="hover:text-white transition">Impressum</button>
              <button className="hover:text-white transition">Datenschutz</button>
           </div>
        </div>
      </footer>

      {/* Impressum Modal */}
      {showImpressum && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm" onClick={() => setShowImpressum(false)}>
          <div className="bg-white p-12 max-w-lg w-full relative rounded-3xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowImpressum(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900"><X size={24} /></button>
            <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-widest">Impressum</h2>
            <div className="space-y-6 text-sm text-slate-600">
              <p><strong>Angaben gemäß § 5 TMG</strong></p>
              <p>{personalInfo.name}<br/>Berlin, Deutschland</p>
              <p><strong>Kontakt</strong><br/>E-Mail: {personalInfo.email}</p>
              <p className="text-[10px] text-slate-400 pt-8 italic">Hinweis: Dies ist eine Portfolio-Webseite zur Vorstellung der beruflichen Expertise.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;