import React, { useEffect, useState } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  MessageSquare,
  Download,
  Mail,
  Linkedin,
  Github,
  Twitter,
  CheckCircle2,
  Copy,
  Check,
  ClipboardList,
  BarChart3,
  Trophy,
  Activity,
  ShieldCheck,
  Link2,
  Briefcase,
} from 'lucide-react';
import { HashRouter, Link, NavLink, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import Icon from './components/Icon';
import ErrorBoundary from './components/ErrorBoundary';
import { PageWrap, SectionHeader, ResponsiveImage, ContactLink } from './components/SharedComponents';

// Configuration imports
import { personalInfo } from './config/personalInfo';
import { techStack } from './config/techStack';
import { projectsData } from './config/projects';

const content = {
  en: {
    nav: [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/projects', label: 'Projects' },
      { path: '/contact', label: 'Contact' },
    ],
    heroTitle: 'Subject Matter Expertise meets',
    heroAccent: 'Data Science.',
    heroText: 'Mechatronics engineer with 5+ years in industrial systems, applying machine learning to predictive maintenance, energy forecasting, and production analytics. M.Sc. Data Science with Distinction — Berlin.',
    heroMetrics: [
      { value: 5, suffix: '+', label: 'Years Industry Exp.' },
      { value: 3, suffix: '+', label: 'ML Projects Delivered' },
      { value: 1, suffix: '', label: 'M.Sc. Distinction' },
    ],
    viewProjects: 'View Projects',
    getInTouch: 'Get in Touch',
    aboutTitle: 'About',
    aboutSub: 'Engineering, logistics, and ML experience focused on practical impact.',
    aboutLong: [
      'I am a Mechatronics Engineer with over five years of experience in industrial infrastructure, energy systems, and operational environments. I recently completed an M.Sc. in Data Science with Distinction at Arden University Berlin, with a thesis on hybrid ML frameworks for predictive maintenance.',
      'What distinguishes me is genuine engineering domain depth — from PLC programming and OPC UA integration to grid-tied solar system delivery. I use this foundation to build ML solutions that work in production: explainable, well-monitored, and grounded in real operational constraints.',
    ],
    approachTitle: 'How I Work',
    approachItems: [
      'Frame problems with operators first, then map to measurable data outcomes.',
      'Use explainable baselines before complex models to validate assumptions.',
      'Design for deployment early: reproducibility, monitoring, and handover.',
    ],
    stackTitle: 'Tech Stack',
    stackSub: 'A specialized stack for industrial analytics and prediction.',
    projectsTitle: 'Projects',
    projectsSub: 'Case studies for solar forecasting, logistics optimization, and computer vision.',
    caseStudyNotFound: 'Case study not found.',
    backToProjects: 'Back to Projects',
    starViewLabel: 'STAR View / Case Study',
    techStackLabel: 'Tech Stack',
    moreStudiesLabel: 'More Case Studies',
    projectMetricsLabel: 'Key Metrics',
    projectPhasesLabel: 'Delivery Phases',
    projectGalleryLabel: 'Evidence Gallery',
    projectsLong:
      'Each project below follows a practical delivery pattern: identify a business bottleneck, design a measurable modeling strategy, and validate impact with operational metrics. Open each card to view STAR-style details.',
    projectTakeaways: [
      'Strongest outcomes happen when domain constraints are part of feature design.',
      'Stakeholder trust improves when metrics are tied to cost, risk, or downtime.',
      'Shipping small measurable iterations outperforms one large delayed release.',
    ],
    contactTitle: 'Contact',
    contactSub: 'Available for Data Science and ML Engineering roles in Germany.',
    contactLong:
      'I am actively seeking full-time or contract opportunities in Data Science and ML Engineering, ideally in the Berlin area or remote within Germany. I bring genuine engineering domain knowledge to every engagement — from industrial system integration to cloud-based ML deployment. I am comfortable working with both technical and operational teams and am eligible to work in Germany.',
    labelEmail: 'Email',
    labelLinkedIn: 'LinkedIn',
    labelGitHub: 'GitHub',
    labelTwitter: 'Twitter',
    sendMessageLabel: 'Send Message',
    sourceLabel: 'Source',
    collaborationTitle: 'Collaboration Areas',
    collaborationItems: [
      'Predictive maintenance and condition monitoring for industrial equipment (PLC, OPC UA, MES)',
      'Solar and energy systems forecasting, anomaly detection, and performance monitoring',
      'ML engineering for production environments: Python, AWS, Docker, FastAPI — from data to deployment',
    ],
    quickSummary: 'Professional Summary',
    quickSummaryItems: [
      'M.Sc. Data Science with Distinction — Arden University Berlin, 2026',
      'Thesis: Hybrid ML frameworks for predictive maintenance in industrial systems',
      'B.Eng. Mechatronics — PLC programming, control systems, industrial IT (OPC UA, MES/SAP)',
      'Member, Verein Deutscher Ingenieure (VDI) — Berlin Chapter',
      'Based in Berlin, eligible to work in Germany — English (Fluent), German (Basic)',
    ],
    ctaTitle: 'Open to Data Science Roles in Germany.',
    ctaText: 'Mechatronics engineer with M.Sc. Data Science (Distinction) and industrial domain depth in energy, logistics, and production systems. Based in Berlin.',
    ctaButton: 'Get in Touch',
    ctaVariants: {
      default: {
        title: 'Open to Data Science Roles in Germany.',
        text: 'Mechatronics engineer with M.Sc. Data Science (Distinction) and industrial domain depth in energy, logistics, and production systems. Based in Berlin.',
        button: 'Get in Touch',
      },
      '/': {
        title: 'Open to Data Science Roles in Germany.',
        text: 'Mechatronics engineer with M.Sc. Data Science (Distinction) and industrial domain depth in energy, logistics, and production systems. Based in Berlin.',
        button: 'Get in Touch',
      },
      '/about': {
        title: "Domain depth that most data scientists don't have.",
        text: 'From PLC programming to ML deployment — I bridge the gap between engineering operations and data-driven decision making.',
        button: 'Contact Me',
      },
      '/projects': {
        title: 'Like what you see?',
        text: 'These case studies reflect how I approach ML: domain-first, metric-driven, and production-ready. Open to full-time and contract roles.',
        button: "Let's Talk",
      },
      '/contact': {
        title: "I'm available now.",
        text: 'Actively seeking Data Science or ML Engineering roles in Berlin or remote. Eligible to work in Germany. Open to full-time and contract.',
        button: 'Send an Email',
      },
      '/privacy': {
        title: 'Open to Data Science Roles in Germany.',
        text: 'Mechatronics engineer with M.Sc. Data Science (Distinction) and industrial domain depth in energy, logistics, and production systems. Based in Berlin.',
        button: 'Get in Touch',
      },
      '/cookies': {
        title: 'Open to Data Science Roles in Germany.',
        text: 'Mechatronics engineer with M.Sc. Data Science (Distinction) and industrial domain depth in energy, logistics, and production systems. Based in Berlin.',
        button: 'Get in Touch',
      },
    },
    dataTag: 'Data Science + Engineering',
    cookiePolicy: 'Cookie Policy',
    privacyPolicy: 'Privacy Policy',
    gdprLabel: 'GDPR',
    homeLabel: 'Home',
    footerTagline: 'Bridging technology with purpose — energizing change one system at a time.',
    ctaLabel: 'Call To Action',
    ctaStatus: 'Available for Data Science roles in Germany',
    resumeLabel: 'Resume / CV',
    cookieText:
      'This portfolio may use essential cookies for basic site functionality. No tracking or advertising cookies are intentionally used.',
    cookieBannerTitle: 'Cookie Notice',
    cookieBannerText: 'This site uses essential cookies only. You can review details in the Cookie Policy and Privacy Policy.',
    cookieAccept: 'Accept',
    cookieDecline: 'Decline',
    footerLegalNote: 'Privacy Policy (GDPR) is permanently available in the footer.',
    privacyTitle: 'Privacy Policy (GDPR)',
    privacySubtitle: 'This page is structured to align with core EU GDPR transparency requirements (Arts. 12-14).',
    privacyNote:
      'Note: This policy is a general website template and does not replace legal advice for your specific processing activities.',
    footerNavTitle: 'Navigation',
    footerLegalTitle: 'Settings & Legal',
    footerBrandText:
      'Specializing in the intersection of physical engineering systems and advanced data analytics. Building robust solutions for the energy and logistics sectors.',
    imprintLabel: 'Impressum / Imprint',
    basedIn: 'Based in Berlin, Germany',
    playbook: [
      { icon: ClipboardList, title: 'Problem -> Solution -> Impact', detail: 'Explain what hurt, what you changed, and what changed after.' },
      { icon: BarChart3, title: 'Prove with Numbers', detail: 'Add metrics like latency, accuracy, time saved, or cost reduction.' },
      { icon: Trophy, title: 'Show Credibility Signals', detail: 'Include awards, compliance, benchmarks, and validation method.' },
      { icon: Activity, title: 'Add a Quick Summary', detail: 'Give recruiters a 5-6 bullet snapshot before deep details.' },
      { icon: ShieldCheck, title: 'Demonstrate Production Readiness', detail: 'Highlight tests, CI/CD, deployment, monitoring, and security.' },
      { icon: Link2, title: 'Close with Clear Links', detail: 'Always include demo, repo, license, and direct contact links.' },
    ],
    highlights: [
      'M.Sc. Data Science with Distinction — Arden University Berlin (2026)',
      'VDI Member — Verein Deutscher Ingenieure, Berlin Chapter',
      'B.Eng. Mechatronics with hands-on PLC, OPC UA, and industrial systems background',
    ],
    venn: { left: 'Mechatronics', right: 'Data Science', center: 'Industrial ML' },
    experienceTitle: 'Career Timeline',
    experienceSteps: [
      { year: '2024 – Present', role: 'M.Sc. Data Science (Distinction)', org: 'Arden University, Berlin', desc: 'Thesis: Hybrid ML frameworks for predictive maintenance. Core modules: Big Data Analytics, Cloud Computing (AWS), Machine Learning.' },
      { year: '2023 – 2024', role: 'Solar Installations Engineer', org: 'Go Solar (Pvt) Ltd., Cape Town', desc: 'Delivered 100+ industrial power systems — full lifecycle from equipment delivery to grid integration. Implemented performance monitoring to reduce downtime.' },
      { year: '2018 – 2020', role: 'Fiber Optic Technician (FTTH)', org: 'Frogfoot Networks, Cape Town', desc: 'Field splicing, network fault localization, and hardware-to-network interface troubleshooting in high-demand environments.' },
      { year: '2014', role: 'Electrical/Mechanical Engineering Intern', org: 'Steel Makers (Pvt) Ltd.', desc: 'PLC-controlled industrial equipment maintenance and electrical/mechanical fault diagnosis at the hardware/software interface.' },
    ],
    projectModal: { challenge: 'The Challenge', action: 'Solution & Tech', result: 'The Impact' },
    contactCopied: 'Copied!',
  },
  de: {
    nav: [
      { path: '/', label: 'Start' },
      { path: '/about', label: 'Über Mich' },
      { path: '/projects', label: 'Projekte' },
      { path: '/contact', label: 'Kontakt' },
    ],
    heroTitle: 'Fachliche Expertise trifft',
    heroAccent: 'Data Science.',
    heroText: 'Mechatronik-Ingenieur mit 5+ Jahren Industrieerfahrung — Machine Learning für Predictive Maintenance, Energieprognosen und Produktionsanalytik. M.Sc. Data Science mit Auszeichnung — Berlin.',
    heroMetrics: [
      { value: 5, suffix: '+', label: 'Jahre Industrieerfahrung' },
      { value: 3, suffix: '+', label: 'ML-Projekte' },
      { value: 1, suffix: '', label: 'M.Sc. mit Auszeichnung' },
    ],
    viewProjects: 'Projekte ansehen',
    getInTouch: 'Kontakt',
    aboutTitle: 'Über Mich',
    aboutSub: 'Engineering-, Logistik- und ML-Erfahrung mit Fokus auf messbaren Impact.',
    aboutLong: [
      'Ich bin Mechatronik-Ingenieur mit über fünf Jahren Erfahrung in industrieller Infrastruktur, Energiesystemen und operativen Umgebungen. Meinen M.Sc. in Data Science habe ich mit Auszeichnung an der Arden University Berlin abgeschlossen — Thesis: Hybride ML-Frameworks für Predictive Maintenance.',
      'Was mich auszeichnet, ist echtes Engineering-Domänenwissen: von SPS-Programmierung und OPC-UA-Integration bis zur Inbetriebnahme netzgekoppelter Solaranlagen. Diese Grundlage nutze ich, um ML-Lösungen zu bauen, die in der Produktion funktionieren: erklärbar, gut überwacht und an reale operative Einschränkungen angepasst.',
    ],
    approachTitle: 'Arbeitsweise',
    approachItems: [
      'Probleme zuerst mit Fachbereichen schärfen und in messbare Datenziele übersetzen.',
      'Mit erklärbaren Baselines starten, bevor komplexe Modelle eingesetzt werden.',
      'Deployment früh mitdenken: Reproduzierbarkeit, Monitoring und Übergabe.',
    ],
    stackTitle: 'Tech Stack',
    stackSub: 'Ein spezialisierter Stack für industrielle Analytics und Vorhersage.',
    projectsTitle: 'Projekte',
    projectsSub: 'Case Studies für Solarprognosen, Logistikoptimierung und Computer Vision.',
    caseStudyNotFound: 'Case Study nicht gefunden.',
    backToProjects: 'Zurück zu Projekten',
    starViewLabel: 'STAR Ansicht / Case Study',
    techStackLabel: 'Tech Stack',
    moreStudiesLabel: 'Weitere Case Studies',
    projectMetricsLabel: 'Kernmetriken',
    projectPhasesLabel: 'Projektphasen',
    projectGalleryLabel: 'Evidence Galerie',
    projectsLong:
      'Jedes Projekt folgt einem praxisnahen Muster: Engpass identifizieren, modellbasierten Lösungsansatz entwickeln und den Effekt über operative Kennzahlen validieren. Öffnen Sie die Karten für STAR-Details.',
    projectTakeaways: [
      'Die besten Ergebnisse entstehen, wenn Domänen-Constraints früh ins Feature-Design einfließen.',
      'Vertrauen steigt, wenn Metriken direkt auf Kosten, Risiko oder Ausfallzeiten einzahlen.',
      'Mehrwert entsteht oft durch schnelle, messbare Iterationen statt großer Einmal-Releases.',
    ],
    contactTitle: 'Kontakt',
    contactSub: 'Verfügbar für Data-Science- und ML-Engineering-Stellen in Deutschland.',
    contactLong:
      'Ich suche aktiv nach Festanstellungen oder projektbasierten Möglichkeiten in Data Science und ML Engineering, vorzugsweise im Berliner Raum oder remote innerhalb Deutschlands. Ich bringe echtes Engineering-Domänenwissen in jeden Einsatz — von industrieller Systemintegration bis Cloud-basiertem ML-Deployment. Ich bin arbeitsberechtigt in Deutschland.',
    labelEmail: 'E-Mail',
    labelLinkedIn: 'LinkedIn',
    labelGitHub: 'GitHub',
    labelTwitter: 'Twitter',
    sendMessageLabel: 'Nachricht senden',
    sourceLabel: 'Quelle',
    collaborationTitle: 'Schwerpunkte',
    collaborationItems: [
      'Predictive Maintenance und Zustandsüberwachung für Industrieanlagen (SPS, OPC UA, MES)',
      'Prognose und Anomalieerkennung für Solar- und Energiesysteme',
      'ML Engineering für Produktion: Python, AWS, Docker, FastAPI — von den Daten bis zum Deployment',
    ],
    quickSummary: 'Fachliches Profil',
    quickSummaryItems: [
      'M.Sc. Data Science mit Auszeichnung — Arden University Berlin, 2026',
      'Thesis: Hybride ML-Frameworks für Predictive Maintenance in Industriesystemen',
      'B.Eng. Mechatronik — SPS-Programmierung, Regelungstechnik, Industrial IT (OPC UA, MES/SAP)',
      'VDI-Mitglied (Verein Deutscher Ingenieure) — Bezirk Berlin',
      'Wohnhaft in Berlin, arbeitsberechtigt in Deutschland — Englisch (fließend), Deutsch (Grundkenntnisse)',
    ],
    ctaTitle: 'Offen für Data-Science-Stellen in Deutschland.',
    ctaText: 'Mechatronik-Ingenieur mit M.Sc. Data Science (Auszeichnung) und echtem Engineering-Domänenwissen in Energie, Logistik und Produktion. Standort Berlin.',
    ctaButton: 'Kontakt aufnehmen',
    ctaVariants: {
      default: {
        title: 'Offen für Data-Science-Stellen in Deutschland.',
        text: 'Mechatronik-Ingenieur mit M.Sc. Data Science (Auszeichnung) und echtem Engineering-Domänenwissen in Energie, Logistik und Produktion. Standort Berlin.',
        button: 'Kontakt aufnehmen',
      },
      '/': {
        title: 'Offen für Data-Science-Stellen in Deutschland.',
        text: 'Mechatronik-Ingenieur mit M.Sc. Data Science (Auszeichnung) und echtem Engineering-Domänenwissen in Energie, Logistik und Produktion. Standort Berlin.',
        button: 'Kontakt aufnehmen',
      },
      '/about': {
        title: 'Domänenwissen, das die meisten Data Scientists nicht haben.',
        text: 'Von SPS-Programmierung bis ML-Deployment — ich überbrücke die Lücke zwischen Engineering-Operations und datengetriebenem Entscheiden.',
        button: 'Kontakt',
      },
      '/projects': {
        title: 'Interesse geweckt?',
        text: 'Diese Case Studies zeigen, wie ich ML angehe: domänenorientiert, metrikgetrieben und produktionsbereit. Offen für Fest- und Projektanstellungen.',
        button: 'Sprechen wir',
      },
      '/contact': {
        title: 'Ich bin ab sofort verfügbar.',
        text: 'Aktiv auf der Suche nach Data-Science- oder ML-Engineering-Stellen in Berlin oder remote. Arbeitsberechtigung in Deutschland vorhanden.',
        button: 'E-Mail senden',
      },
      '/privacy': {
        title: 'Offen für Data-Science-Stellen in Deutschland.',
        text: 'Mechatronik-Ingenieur mit M.Sc. Data Science (Auszeichnung) und echtem Engineering-Domänenwissen in Energie, Logistik und Produktion. Standort Berlin.',
        button: 'Kontakt aufnehmen',
      },
      '/cookies': {
        title: 'Offen für Data-Science-Stellen in Deutschland.',
        text: 'Mechatronik-Ingenieur mit M.Sc. Data Science (Auszeichnung) und echtem Engineering-Domänenwissen in Energie, Logistik und Produktion. Standort Berlin.',
        button: 'Kontakt aufnehmen',
      },
    },
    dataTag: 'Data Science + Engineering',
    cookiePolicy: 'Cookie-Richtlinie',
    privacyPolicy: 'Datenschutzerklärung',
    gdprLabel: 'DSGVO',
    homeLabel: 'Start',
    footerTagline: 'Technologie mit Sinn verbinden — Wandel System für System vorantreiben.',
    ctaLabel: 'Call To Action',
    ctaStatus: 'Verfügbar für Data-Science-Stellen in Deutschland',
    resumeLabel: 'Lebenslauf / CV',
    cookieText:
      'Dieses Portfolio kann technisch notwendige Cookies für die Grundfunktionalität verwenden. Tracking- oder Werbe-Cookies werden nicht absichtlich eingesetzt.',
    cookieBannerTitle: 'Cookie-Hinweis',
    cookieBannerText: 'Diese Website verwendet nur technisch notwendige Cookies. Details finden Sie in Cookie-Richtlinie und Datenschutzerklärung.',
    cookieAccept: 'Akzeptieren',
    cookieDecline: 'Ablehnen',
    footerLegalNote: 'Die Datenschutzerklärung (DSGVO) ist dauerhaft im Footer verfügbar.',
    privacyTitle: 'Datenschutzerklärung (DSGVO)',
    privacySubtitle: 'Diese Seite orientiert sich an den zentralen DSGVO-Transparenzanforderungen (Art. 12-14).',
    privacyNote:
      'Hinweis: Diese Richtlinie ist eine allgemeine Website-Vorlage und ersetzt keine Rechtsberatung für konkrete Verarbeitungstätigkeiten.',
    footerNavTitle: 'Navigation',
    footerLegalTitle: 'Einstellungen & Rechtliches',
    footerBrandText:
      'Spezialisiert auf die Schnittstelle zwischen technischen Systemen und moderner Datenanalyse. Robuste Lösungen für Energie- und Logistikbereiche.',
    imprintLabel: 'Impressum / Imprint',
    basedIn: 'Standort Berlin, Deutschland',
    playbook: [
      { icon: ClipboardList, title: 'Problem -> Lösung -> Impact', detail: 'Zeige klar, was das Problem war, was du geändert hast und welches Ergebnis entstand.' },
      { icon: BarChart3, title: 'Belege mit Zahlen', detail: 'Nutze Kennzahlen wie Latenz, Genauigkeit, Zeit- oder Kostenersparnis.' },
      { icon: Trophy, title: 'Zeige Glaubwürdigkeit', detail: 'Nenne Awards, Compliance, Benchmarks und Validierungsmethode.' },
      { icon: Activity, title: 'Füge eine Kurzübersicht ein', detail: 'Gib Recruitern zuerst 5-6 prägnante Punkte.' },
      { icon: ShieldCheck, title: 'Production Readiness zeigen', detail: 'Hebe Tests, CI/CD, Deployment, Monitoring und Security hervor.' },
      { icon: Link2, title: 'Mit klaren Links abschließen', detail: 'Immer Demo, Repo, Lizenz und Kontakt sichtbar machen.' },
    ],
    highlights: [
      'M.Sc. Data Science mit Auszeichnung — Arden University Berlin (2026)',
      'VDI-Mitglied — Verein Deutscher Ingenieure, Bezirk Berlin',
      'B.Eng. Mechatronik mit SPS-, OPC-UA- und Industriesystem-Praxiserfahrung',
    ],
    venn: { left: 'Mechatronik', right: 'Data Science', center: 'Industrial ML' },
    experienceTitle: 'Beruflicher Werdegang',
    experienceSteps: [
      { year: '2024 – Heute', role: 'M.Sc. Data Science (Auszeichnung)', org: 'Arden University, Berlin', desc: 'Thesis: Hybride ML-Frameworks für Predictive Maintenance. Kernmodule: Big Data Analytics, Cloud Computing (AWS), Machine Learning.' },
      { year: '2023 – 2024', role: 'Solarinstallationsingenieur', org: 'Go Solar (Pvt) Ltd., Kapstadt', desc: 'Lieferung von 100+ industriellen Energiesystemen mit vollständigem Lifecycle-Management. Performance-Monitoring zur Reduzierung von Ausfallzeiten implementiert.' },
      { year: '2018 – 2020', role: 'Glasfasertechniker (FTTH)', org: 'Frogfoot Networks, Kapstadt', desc: 'Spleißarbeiten im Feld, Netzwerkfehlerdiagnose und Behebung von Hardware-zu-Netzwerk-Schnittstellenproblemen.' },
      { year: '2014', role: 'Elektro-/Maschinenbauingenieur (Praktikant)', org: 'Steel Makers (Pvt) Ltd.', desc: 'Wartung SPS-gesteuerter Industrieanlagen und Fehlerdiagnose an der Hardware/Software-Schnittstelle.' },
    ],
    projectModal: { challenge: 'Herausforderung', action: 'Lösung & Tech', result: 'Ergebnis' },
    contactCopied: 'Kopiert!',
  },
};

// Tech stack is now imported from config
// Project data is now imported from config

// Project data is now imported from config/projects.js

const privacyPolicySections = {
  en: [
    { title: '1. Data Controller (Art. 4(7) GDPR)', body: [`Controller: ${personalInfo.name}`, 'Location: Berlin, Germany', `Email: ${personalInfo.email}`] },
    { title: '2. Scope and Purpose of Processing', body: ['This website is a professional portfolio. Personal data is processed only where necessary to provide site functionality, respond to inquiries, and protect the website.', 'No automated decision-making or profiling within the meaning of Art. 22 GDPR is intentionally performed.'] },
    { title: '3. Categories of Personal Data', body: ['Contact details you provide voluntarily (e.g., name, email, message).', 'Technical usage data (e.g., IP address, device/browser metadata, timestamps) that may be processed by hosting infrastructure for security and delivery.'] },
    { title: '4. Legal Bases (Art. 6 GDPR)', body: ['Art. 6(1)(b) GDPR: processing required to respond to your direct request.', 'Art. 6(1)(f) GDPR: legitimate interest in securing and operating the site.', 'Art. 6(1)(a) GDPR: consent, where consent-based services are used.'] },
    { title: '5. Recipients and Transfers', body: ['Data may be processed by technical service providers (e.g., hosting providers) acting as processors.', 'If data is transferred outside the EEA, safeguards such as Standard Contractual Clauses (SCCs) are applied where required.'] },
    { title: '6. Retention', body: ['Personal data is retained only as long as necessary for the stated purposes or legal obligations.', 'Contact requests are deleted when no longer required for communication or legal recordkeeping.'] },
    { title: '7. Your Rights (Art. 12-23 GDPR)', body: ['Right of access, rectification, erasure, restriction, and data portability.', 'Right to object to processing based on legitimate interests.', `Right to withdraw consent at any time by contacting ${personalInfo.email}.`, 'Right to lodge a complaint with a competent EU/EEA supervisory authority.'] },
    { title: '8. Security Measures', body: ['Appropriate technical and organizational measures are used to protect personal data against unauthorized access, alteration, disclosure, or destruction.'] },
    { title: '9. Updates', body: ['This policy may be updated to reflect legal, technical, or operational changes.', 'Last updated: February 5, 2026.'] },
  ],
  de: [
    { title: '1. Verantwortlicher (Art. 4 Nr. 7 DSGVO)', body: [`Verantwortlicher: ${personalInfo.name}`, 'Standort: Berlin, Deutschland', `E-Mail: ${personalInfo.email}`] },
    { title: '2. Umfang und Zweck der Verarbeitung', body: ['Diese Website ist ein professionelles Portfolio. Personenbezogene Daten werden nur verarbeitet, soweit dies für den Betrieb, die Beantwortung von Anfragen und den Schutz der Website erforderlich ist.', 'Eine automatisierte Entscheidungsfindung oder ein Profiling im Sinne von Art. 22 DSGVO findet nicht absichtlich statt.'] },
    { title: '3. Kategorien personenbezogener Daten', body: ['Freiwillig bereitgestellte Kontaktdaten (z. B. Name, E-Mail, Nachricht).', 'Technische Nutzungsdaten (z. B. IP-Adresse, Geräte-/Browser-Metadaten, Zeitstempel), die durch Hosting-Infrastruktur zu Sicherheits- und Auslieferungszwecken verarbeitet werden können.'] },
    { title: '4. Rechtsgrundlagen (Art. 6 DSGVO)', body: ['Art. 6 Abs. 1 lit. b DSGVO: Verarbeitung zur Bearbeitung Ihrer Anfrage.', 'Art. 6 Abs. 1 lit. f DSGVO: berechtigtes Interesse am sicheren und stabilen Betrieb der Website.', 'Art. 6 Abs. 1 lit. a DSGVO: Einwilligung, sofern einwilligungsbasierte Dienste genutzt werden.'] },
    { title: '5. Empfänger und Übermittlungen', body: ['Daten können durch technische Dienstleister (z. B. Hosting-Provider) als Auftragsverarbeiter verarbeitet werden.', 'Bei Übermittlungen außerhalb des EWR werden erforderliche Garantien wie Standardvertragsklauseln (SCCs) eingesetzt.'] },
    { title: '6. Speicherdauer', body: ['Personenbezogene Daten werden nur so lange gespeichert, wie es für die genannten Zwecke oder gesetzliche Pflichten erforderlich ist.', 'Kontaktanfragen werden gelöscht, sobald sie für Kommunikation oder rechtliche Nachweise nicht mehr erforderlich sind.'] },
    { title: '7. Ihre Rechte (Art. 12-23 DSGVO)', body: ['Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Datenübertragbarkeit.', 'Recht auf Widerspruch gegen Verarbeitungen auf Basis berechtigter Interessen.', `Recht auf Widerruf einer Einwilligung jederzeit unter ${personalInfo.email}.`, 'Recht auf Beschwerde bei einer zuständigen EU-/EWR-Aufsichtsbehörde.'] },
    { title: '8. Sicherheitsmaßnahmen', body: ['Es werden angemessene technische und organisatorische Maßnahmen eingesetzt, um personenbezogene Daten vor unbefugtem Zugriff, Veränderung, Offenlegung oder Zerstörung zu schützen.'] },
    { title: '9. Aktualisierungen', body: ['Diese Richtlinie kann aufgrund rechtlicher, technischer oder betrieblicher Änderungen aktualisiert werden.', 'Letzte Aktualisierung: 5. Februar 2026.'] },
  ],
};

function Nav({ t, lang, setLang }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="liquid-nav fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <div className="h-10 w-10 bg-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl mr-3">AM</div>
          <span className="font-bold text-xl tracking-tight text-slate-900 uppercase hidden sm:block">{personalInfo.name}</span>
        </NavLink>
        <div className="hidden md:flex items-center gap-8">
          {t.nav.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `text-[11px] font-black uppercase tracking-widest ${isActive ? 'text-blue-700' : 'text-slate-600 hover:text-slate-900'}`}>
              {item.label}
            </NavLink>
          ))}
          <div className="flex items-center gap-2 text-xs font-black">
            <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-blue-700 underline underline-offset-4' : 'text-slate-500'}>EN</button>
            <span className="text-slate-400">|</span>
            <button onClick={() => setLang('de')} className={lang === 'de' ? 'text-blue-700 underline underline-offset-4' : 'text-slate-500'}>DE</button>
          </div>
        </div>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="bg-white/70 backdrop-blur-xl border border-white/70 rounded-2xl p-4 space-y-3">
            {t.nav.map((item) => (
              <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className="block text-xs font-black uppercase tracking-widest text-slate-700">
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-white/60 flex gap-3 text-xs font-black">
              <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-blue-700' : 'text-slate-500'}>EN</button>
              <button onClick={() => setLang('de')} className={lang === 'de' ? 'text-blue-700' : 'text-slate-500'}>DE</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

/**
 * HomePage Component
 * Landing page showcasing hero section, metrics, and tech stack
 * Includes animated counter for metrics
 * @param {Object} props - Component props
 * @param {Object} props.t - Translation object
 */
function HomePage({ t }) {
  const navigate = useNavigate();
  const [counts, setCounts] = useState(t.heroMetrics.map(() => 0));

  useEffect(() => {
    const duration = 1200;
    const steps = 30;
    const intervalMs = duration / steps;
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      setCounts(
        t.heroMetrics.map((metric) =>
          Math.min(metric.value, Math.round((metric.value * step) / steps)),
        ),
      );
      if (step >= steps) clearInterval(interval);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [t.heroMetrics]);

  return (
    <>
      <section className="relative min-h-screen flex items-center bg-transparent pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${personalInfo.heroBgPath})` }}>
          <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">{t.heroTitle} <span className="text-blue-700">{t.heroAccent}</span></h1>
            <p className="text-xl text-slate-700 mb-10">{t.heroText}</p>
            <div className="flex gap-4 flex-wrap">
              <button onClick={() => navigate('/projects')} className="px-8 py-4 bg-white text-slate-900 font-bold rounded flex items-center">{t.viewProjects} <Icon icon={ArrowRight} className="ml-2 text-slate-900" /></button>
              <button onClick={() => navigate('/contact')} className="px-8 py-4 border border-slate-200 bg-white text-slate-900 font-bold rounded">{t.getInTouch}</button>
            </div>
            <div className="grid grid-cols-3 gap-6 border-t border-slate-200 pt-8 mt-10">
              {t.heroMetrics.map((metric, idx) => (
                <div key={metric.label}>
                  <p className="text-2xl md:text-3xl font-black text-slate-900 mb-1">
                    {counts[idx]}
                    {metric.suffix}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-[4/5] bg-slate-800 rounded-2xl border border-white/10 overflow-hidden">
              <ResponsiveImage
                src={personalInfo.imagePath}
                alt={`${personalInfo.name} - Portfolio photo`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-24 pb-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">{t.stackTitle}</h2>
          <p className="text-slate-600 mb-10 max-w-2xl">{t.stackSub}</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((item) => (
              <div key={item.title} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Icon icon={item.icon} size="lg" className="mb-4" />
                <h4 className="text-[10px] font-black uppercase mb-4 tracking-widest">{item.title}</h4>
                <ul className="space-y-2">{item.skills.map((s) => <li key={s} className="text-xs text-slate-600">{s}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * AboutPage Component
 * Displays professional background, approach, experience timeline
 * @param {Object} props - Component props
 * @param {Object} props.t - Translation object
 */
function AboutPage({ t }) {
  return (
    <PageWrap title={t.aboutTitle} subtitle={t.aboutSub}>
      <div className="space-y-4 mb-10">
        {t.aboutLong.map((paragraph) => (
          <p key={paragraph} className="text-sm md:text-base text-slate-600 leading-relaxed">{paragraph}</p>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {t.highlights.map((item) => (
          <div key={item} className="p-5 bg-white rounded-xl border border-slate-100">
            <p className="text-sm text-slate-700">{item}</p>
          </div>
        ))}
      </div>
      <div className="mb-12">
        <h3 className="text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">{t.approachTitle}</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {t.approachItems.map((item) => (
            <div key={item} className="p-5 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-sm text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative h-56 mb-14 hidden sm:block">
        <div className="absolute left-0 top-0 w-44 h-44 rounded-full border-2 border-blue-300 bg-blue-50/70 flex items-center justify-center text-xs font-black text-blue-900 text-center p-4">
          {t.venn.left}
        </div>
        <div className="absolute left-28 top-0 w-44 h-44 rounded-full border-2 border-teal-300 bg-teal-50/70 flex items-center justify-center text-xs font-black text-teal-900 text-center p-4">
          {t.venn.right}
        </div>
        <div className="absolute left-24 top-28 px-4 py-2 bg-slate-900 rounded-full text-white text-[10px] font-black uppercase tracking-widest">
          {t.venn.center}
        </div>
      </div>
      <div>
        <h3 className="text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-6">{t.experienceTitle}</h3>
        <div className="relative space-y-6">
          <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-slate-200" />
          {t.experienceSteps.map((step) => (
            <div key={`${step.year}${step.role}`} className="relative pl-10">
              <span className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white" />
              <div className="p-5 bg-white rounded-xl border border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-700 mb-2">{step.year}</p>
                <p className="font-bold text-slate-900">{step.role}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">{step.org}</p>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrap>
  );
}

/**
 * ProjectModal Component
 * Modal for displaying project details
 * @param {Object} props - Component props
 * @param {Object} props.project - Project data object
 * @param {string} props.lang - Current language
 * @param {Object} props.t - Translation object
 * @param {Function} props.onClose - Callback to close modal
 */
function ProjectModal({ project, lang, t, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden border border-slate-100" onClick={(e) => e.stopPropagation()}>
        <div className="bg-blue-700 p-6 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <Icon icon={project.icon} className="text-white" />
            <h3 className="text-lg font-bold">{project.title[lang]}</h3>
          </div>
          <button onClick={onClose}><X /></button>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-700 mb-2">{t.projectModal.challenge}</p>
            <p className="text-sm text-slate-700">{project.challenge[lang]}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-700 mb-2">{t.projectModal.action}</p>
            <p className="text-sm text-slate-700">{project.action[lang]}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-700 mb-2">{t.projectModal.result}</p>
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3 text-sm text-green-800">
              <CheckCircle2 size={18} className="mt-0.5" />
              {project.result[lang]}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ProjectsPage Component
 * Displays all project case studies with grid layout
 * @param {Object} props - Component props
 * @param {Object} props.t - Translation object
 * @param {string} props.lang - Current language
 */
function ProjectsPage({ t, lang }) {
  return (
    <PageWrap title={t.projectsTitle} subtitle={t.projectsSub}>
      <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-10">{t.projectsLong}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {projectsData.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`} className="text-left p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-300 hover:-translate-y-1 transition-all block">
            <div className="flex items-center justify-between mb-4">
              <Icon icon={project.icon} size="lg" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">{project.category}</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">{project.title[lang]}</h3>
            <p className="text-sm text-slate-600 mb-4">{project.short[lang]}</p>
            <div className="flex items-center text-xs font-bold text-slate-500">
              <Briefcase size={14} className="mr-2" />
              {t.starViewLabel}
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-slate-900 rounded-2xl p-8 text-white">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-300 mb-3">{t.quickSummary}</p>
        <ul className="space-y-2 text-sm text-slate-200">
          {t.quickSummaryItems.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {t.projectTakeaways.map((item) => (
          <div key={item} className="p-5 bg-white rounded-xl border border-slate-100">
            <p className="text-sm text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </PageWrap>
  );
}

/**
 * ProjectDetailPage Component
 * Detailed case study view for a single project
 * @param {Object} props - Component props
 * @param {Object} props.t - Translation object
 * @param {string} props.lang - Current language
 */
function ProjectDetailPage({ t, lang }) {
  const { id } = useParams();
  const project = projectsData.find((item) => String(item.id) === String(id));
  const related = projectsData.filter((item) => item.id !== project?.id);

  if (!project) {
    return (
      <PageWrap title={t.projectsTitle} subtitle={t.projectsSub}>
        <p className="text-sm text-slate-600 mb-6">{t.caseStudyNotFound}</p>
        <Link to="/projects" className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-lg text-sm">
          <ArrowRight size={14} className="mr-2 rotate-180" />
          {t.backToProjects}
        </Link>
      </PageWrap>
    );
  }

  return (
    <PageWrap title={project.title[lang]} subtitle={project.short[lang]}>
      <div className="space-y-8">
        <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8 text-white">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.55),transparent_40%)]" />
          <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200 mb-3">{project.category}</p>
            <h3 className="text-2xl md:text-3xl font-black mb-2">{project.title[lang]}</h3>
            <p className="text-sm text-slate-200">{project.short[lang]}</p>
          </div>
        </section>
        <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-blue-700">
          <Icon icon={project.icon} />
          {project.category}
        </div>
        <section>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">{t.projectMetricsLabel}</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {project.metrics[lang].map((item) => (
              <div key={item.label} className="p-4 bg-white border border-slate-200 rounded-xl">
                <p className="text-xl font-black text-slate-900 mb-1">{item.value}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="p-6 bg-white rounded-2xl border border-slate-100">
          <p className="text-[10px] font-black uppercase tracking-widest text-blue-700 mb-2">{t.projectModal.challenge}</p>
          <p className="text-sm text-slate-700 leading-relaxed">{project.challenge[lang]}</p>
        </section>
        <section className="p-6 bg-white rounded-2xl border border-slate-100">
          <p className="text-[10px] font-black uppercase tracking-widest text-blue-700 mb-2">{t.projectModal.action}</p>
          <p className="text-sm text-slate-700 leading-relaxed">{project.action[lang]}</p>
        </section>
        <section className="p-6 bg-green-50 rounded-2xl border border-green-200">
          <p className="text-[10px] font-black uppercase tracking-widest text-green-700 mb-2">{t.projectModal.result}</p>
          <p className="text-sm text-green-900 leading-relaxed">{project.result[lang]}</p>
        </section>
        <section className="p-6 bg-white rounded-2xl border border-slate-100">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">{t.projectPhasesLabel}</p>
          <ul className="space-y-2">
            {project.phases[lang].map((phase) => (
              <li key={phase} className="text-sm text-slate-700">- {phase}</li>
            ))}
          </ul>
        </section>
        <section>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">{t.projectGalleryLabel}</p>
          <div className="grid md:grid-cols-3 gap-3">
            {project.gallery[lang].map((item, idx) => (
              <div key={item.title} className="rounded-xl border border-slate-200 overflow-hidden bg-white">
                <div className="h-24 bg-slate-100">
                  <ResponsiveImage
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs text-slate-700 mb-1">{item.title}</p>
                  <a href={item.source} target="_blank" rel="noreferrer" className="text-[10px] text-blue-700 hover:underline">
                    {t.sourceLabel} {idx + 1}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">{t.techStackLabel}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white text-slate-700 text-xs font-bold rounded-full border border-slate-200">{tech}</span>
            ))}
          </div>
        </section>
        {project.github && (
          <section>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm hover:bg-slate-700 transition-colors"
            >
              <Github size={16} />
              View on GitHub
            </a>
          </section>
        )}
        <section>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">{t.moreStudiesLabel}</p>
          <div className="flex flex-wrap gap-3">
            {related.map((item) => (
              <Link key={item.id} to={`/projects/${item.id}`} className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 hover:border-blue-300">
                {item.title[lang]}
              </Link>
            ))}
          </div>
        </section>
        <Link to="/projects" className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-lg text-sm">
          <ArrowRight size={14} className="mr-2 rotate-180" />
          {t.backToProjects}
        </Link>
      </div>
    </PageWrap>
  );
}

/**
 * ContactPage Component
 * Contact information and social links
 * Includes email copy functionality
 * @param {Object} props - Component props
 * @param {Object} props.t - Translation object
 */
function ContactPage({ t }) {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1800);
    } catch {
      // no-op if clipboard is unavailable
    }
  };

  return (
    <PageWrap title={t.contactTitle} subtitle={t.contactSub}>
      <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-8">{t.contactLong}</p>
      <div className="mb-8">
        <h3 className="text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">{t.collaborationTitle}</h3>
        <ul className="space-y-2">
          {t.collaborationItems.map((item) => (
            <li key={item} className="text-sm text-slate-700">- {item}</li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <a href={`mailto:${personalInfo.email}`} className="flex items-center p-4 bg-white rounded-2xl border border-slate-100"><Icon icon={Mail} className="mr-2" />{t.labelEmail}</a>
        <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center p-4 bg-white rounded-2xl border border-slate-100"><Icon icon={Linkedin} className="mr-2" />{t.labelLinkedIn}</a>
        <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noreferrer" className="flex items-center p-4 bg-white rounded-2xl border border-slate-100"><Icon icon={Github} className="mr-2" />{t.labelGitHub}</a>
        <a href={`https://twitter.com/${personalInfo.twitter}`} target="_blank" rel="noreferrer" className="flex items-center p-4 bg-white rounded-2xl border border-slate-100"><Icon icon={Twitter} className="mr-2" />{t.labelTwitter}</a>
      </div>
      <button onClick={copyEmail} className="relative inline-flex items-center py-3 px-6 bg-white border border-slate-200 text-slate-700 rounded-xl mr-3">
        <Icon icon={Mail} className="mr-2" />
        {personalInfo.email}
        {emailCopied ? <Check size={14} className="ml-2 text-green-600" /> : <Copy size={14} className="ml-2 text-slate-400" />}
        {emailCopied && <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded">{t.contactCopied}</span>}
      </button>
      <a href={personalInfo.cvPath} download className="inline-flex items-center py-3 px-6 bg-slate-900 text-white rounded-xl"><Icon icon={Download} className="mr-2 text-white" />{t.resumeLabel}</a>
      <button className="ml-3 inline-flex items-center py-3 px-6 bg-blue-600 text-white rounded-xl"><Icon icon={MessageSquare} className="mr-2 text-white" />{t.sendMessageLabel}</button>
    </PageWrap>
  );
}

function LegalPage({ title, text }) {
  return (
    <PageWrap title={title} subtitle={text}>
      <div className="p-6 bg-white rounded-2xl border border-slate-100 text-sm text-slate-600">
        {text}
      </div>
    </PageWrap>
  );
}

function PrivacyPolicyPage({ t, lang }) {
  return (
    <PageWrap
      title={t.privacyTitle}
      subtitle={t.privacySubtitle}
    >
      <div className="space-y-4">
        {privacyPolicySections[lang].map((section) => (
          <section key={section.title} className="p-6 bg-white rounded-2xl border border-slate-100">
            <h3 className="text-sm font-black uppercase tracking-[0.12em] text-slate-900 mb-3">{section.title}</h3>
            <div className="space-y-2">
              {section.body.map((line) => (
                <p key={line} className="text-sm text-slate-600">{line}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-6">
        {t.privacyNote}
      </p>
    </PageWrap>
  );
}

function ImpactCTA({ t, variant }) {
  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-[2.5rem] p-12 md:p-24 text-center overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-[10px] font-black uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              {t.ctaStatus}
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">{variant.title}</h2>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed">{variant.text}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#/contact" className="group relative px-8 py-4 bg-white text-slate-900 font-bold text-sm rounded-xl hover:bg-blue-50 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center gap-3">
                <Mail size={18} className="text-blue-600" />
                <span>{variant.button}</span>
                <ArrowRight size={16} className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </a>
              <a href={personalInfo.cvPath} download className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-sm rounded-xl hover:bg-white/5 transition-all flex items-center gap-3">
                <Download size={18} />
                <span>{t.resumeLabel}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="bg-white py-10 text-slate-800 border-t border-slate-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-5">
        <p className="text-xs md:text-sm text-center text-slate-900">
          Copyright © 2026 {personalInfo.name} | {t.footerTagline}
        </p>
        <div className="flex items-center justify-center gap-5">
          <a
            href={`https://github.com/${personalInfo.github}`}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center text-black hover:text-slate-700 transition"
          >
            <Github size={22} />
          </a>
          <a
            href={`https://linkedin.com/in/${personalInfo.linkedin}`}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center text-black hover:text-slate-700 transition"
          >
            <Linkedin size={22} />
          </a>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-900">
          <Link to="/cookies" className="hover:text-black transition">{t.cookiePolicy}</Link>
          <span>|</span>
          <Link to="/privacy" className="hover:text-black transition">{t.privacyPolicy} ({t.gdprLabel})</Link>
          <span>|</span>
          <Link to="/" className="hover:text-black transition">{t.homeLabel}</Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-3 text-[11px] text-slate-700 text-center">{t.footerLegalNote}</div>
    </footer>
  );
}

function CookieBanner({ t, onChoice }) {
  return (
    <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl">
      <div className="bg-white/90 backdrop-blur-xl border border-white rounded-2xl shadow-2xl p-4 md:p-5">
        <p className="text-sm font-bold text-slate-900 mb-1">{t.cookieBannerTitle}</p>
        <p className="text-xs text-slate-600 mb-3">{t.cookieBannerText}</p>
        <div className="flex flex-wrap items-center gap-3">
          <button onClick={() => onChoice('accepted')} className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold">
            {t.cookieAccept}
          </button>
          <button onClick={() => onChoice('declined')} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold">
            {t.cookieDecline}
          </button>
          <Link to="/privacy" className="text-xs font-bold text-blue-700 hover:underline">{t.privacyPolicy}</Link>
          <Link to="/cookies" className="text-xs font-bold text-blue-700 hover:underline">{t.cookiePolicy}</Link>
        </div>
      </div>
    </div>
  );
}

function MobileQuickNav({ t }) {
  const projectsLabel = t.nav.find((i) => i.path === '/projects')?.label ?? 'Projects';
  const contactLabel = t.nav.find((i) => i.path === '/contact')?.label ?? 'Contact';
  return (
    <div className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2">
      <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest">
        <a href="#/" className="text-white">{t.homeLabel}</a>
        <span className="text-slate-500">|</span>
        <a href="#/projects" className="text-slate-300">{projectsLabel}</a>
        <span className="text-slate-500">|</span>
        <a href="#/contact" className="text-slate-300">{contactLabel}</a>
      </div>
    </div>
  );
}

/**
 * AppShell Component
 * Main application shell with routing and layout
 * Manages language, cookie consent, and overall page structure
 */
function AppShell() {
  const [lang, setLang] = useState('en');
  
  // Initialize cookie banner state based on localStorage
  const [showCookieBanner, setShowCookieBanner] = useState(() => {
    try {
      const consent = window.localStorage.getItem('cookie_consent_choice');
      return !consent;
    } catch {
      return true;
    }
  });
  
  const t = content[lang];
  const location = useLocation();
  const ctaVariant = t.ctaVariants[location.pathname] ?? t.ctaVariants.default;

  const handleCookieChoice = (choice) => {
    try {
      window.localStorage.setItem('cookie_consent_choice', choice);
    } catch {
      // Ignore storage errors and just close the banner.
    }
    setShowCookieBanner(false);
  };

  return (
    <div className="liquid-shell min-h-screen text-slate-800 font-sans selection:bg-blue-100">
      <Nav t={t} lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<HomePage t={t} />} />
        <Route path="/about" element={<AboutPage t={t} />} />
        <Route path="/stack" element={<HomePage t={t} />} />
        <Route path="/projects" element={<ProjectsPage t={t} lang={lang} />} />
        <Route path="/projects/:id" element={<ProjectDetailPage t={t} lang={lang} />} />
        <Route path="/contact" element={<ContactPage t={t} />} />
        <Route path="/privacy" element={<PrivacyPolicyPage t={t} lang={lang} />} />
        <Route path="/cookies" element={<LegalPage title={t.cookiePolicy} text={t.cookieText} />} />
        <Route path="*" element={<HomePage t={t} />} />
      </Routes>
      {showCookieBanner && <CookieBanner t={t} onChoice={handleCookieChoice} />}
      <MobileQuickNav t={t} />
      <ImpactCTA t={t} variant={ctaVariant} />
      <Footer t={t} />
    </div>
  );
}

/**
 * Main App Component
 * Wraps the entire application with error boundary and router
 * Provides error handling and navigation
 */
export default function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <AppShell />
      </HashRouter>
    </ErrorBoundary>
  );
}
