// ============================================================
// PORTFOLIO DATA - Edit this file to update your portfolio
// ============================================================

import type { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  // ── PERSONAL INFO ─────────────────────────────────────────
  personal: {
    name: "Jhanpol Parra Barreto",
    firstName: "Jhanpol",
    lastName: "Parra Barreto",
    title: "Full Stack Developer",
    subtitle: "Backend Developer",
    description:
      "Soy desarrollador Full Stack con enfoque Backend. Capacitado para construir APIs escalables, desarrollar aplicaciones web modernas y trabajar con tecnologías Cloud.",
    longDescription:
      "Soy desarrollador Full Stack con enfoque Backend. Capacitado construir APIs escalables, desarrollar aplicaciones web modernas y trabajar con tecnologías Cloud. Tengo experiencia en Node.js, Laravel, .NET, React, bases de datos SQL y AWS. Siempre busco resolver problemas complejos con soluciones simples, eficientes y bien documentadas. Me mantengo en constante aprendizaje para estar al día con las últimas tendencias del desarrollo de software.",
    location: "Colombia",
    email: "tu.correo@email.com", // ← Cambia esto
    phone: "+57 000 000 0000", // ← Cambia esto
    whatsapp: "+57 000 000 0000", // ← Cambia esto
    website: "https://jhanpolparra.dev", // ← Cambia esto
    avatar: "/images/avatar.jpg", // ← Agrega tu foto en public/images/
    cvUrl: "/cv/Jhanpol-Parra-CV.pdf", // ← Agrega tu CV en public/cv/
    available: true,
  },

  // ── REDES SOCIALES ────────────────────────────────────────
  social: [
    {
      name: "GitHub",
      url: "https://github.com/JhanpolPb",
      icon: "github",
      username: "JhanpolPb",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/tu-perfil", // ← Cambia esto
      icon: "linkedin",
      username: "tu-perfil",
    },
    {
      name: "Email",
      url: "mailto:tu.correo@email.com", // ← Cambia esto
      icon: "mail",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/57000000000", // ← Cambia esto
      icon: "message-circle",
    },
  ],

  // ── TECNOLOGÍAS ───────────────────────────────────────────
  technologies: [
    // Backend
    { name: "Node.js", icon: "nodejs", category: "backend", color: "#339933" },
    { name: "Express", icon: "express", category: "backend", color: "#000000" },
    { name: "Laravel", icon: "laravel", category: "backend", color: "#FF2D20" },
    { name: "PHP", icon: "php", category: "backend", color: "#777BB4" },
    { name: ".NET", icon: "dotnet", category: "backend", color: "#512BD4" },
    // Frontend
    { name: "React", icon: "react", category: "frontend", color: "#61DAFB" },
    { name: "Next.js", icon: "nextjs", category: "frontend", color: "#000000" },
    {
      name: "Tailwind CSS",
      icon: "tailwind",
      category: "frontend",
      color: "#06B6D4",
    },
    {
      name: "JavaScript",
      icon: "javascript",
      category: "frontend",
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      icon: "typescript",
      category: "frontend",
      color: "#3178C6",
    },
    // Bases de datos
    { name: "MySQL", icon: "mysql", category: "database", color: "#4479A1" },
    {
      name: "PostgreSQL",
      icon: "postgresql",
      category: "database",
      color: "#336791",
    },
    {
      name: "SQL Server",
      icon: "sqlserver",
      category: "database",
      color: "#CC2927",
    },
    // Cloud
    { name: "AWS", icon: "aws", category: "cloud", color: "#FF9900" },
    { name: "Docker", icon: "docker", category: "cloud", color: "#2496ED" },
    // Tools
    { name: "Git", icon: "git", category: "tools", color: "#F05032" },
    { name: "GitHub", icon: "github", category: "tools", color: "#181717" },
  ],

  // ── EXPERIENCIA ───────────────────────────────────────────
  experience: [
    {
      id: "exp-1",
      company: "Tu Empresa Actual", // ← Cambia esto
      role: "Full Stack Developer",
      period: "2023 - Presente",
      location: "Colombia (Remoto)",
      type: "full-time",
      description:
        "Desarrollo y mantenimiento de aplicaciones web con enfoque en el backend. Arquitectura de APIs RESTful, integración con servicios cloud y optimización de bases de datos.",
      achievements: [
        "Reducción del tiempo de respuesta de APIs en un 40%",
        "Implementación de arquitectura de microservicios",
        "Automatización de procesos con scripts Node.js",
        "Migración de base de datos legacy a PostgreSQL",
      ],
      technologies: ["Node.js", "Express", "PostgreSQL", "AWS", "Docker"],
      current: true,
    },
    {
      id: "exp-2",
      company: "Empresa Anterior", // ← Cambia esto
      role: "Backend Developer",
      period: "2022 - 2023",
      location: "Colombia",
      type: "full-time",
      description:
        "Desarrollo de APIs y sistemas web usando Laravel y PHP. Integración con pasarelas de pago y sistemas de terceros.",
      achievements: [
        "Desarrollo de módulo de pagos con múltiples pasarelas",
        "Implementación de sistema de autenticación JWT",
        "Optimización de consultas SQL mejorando performance",
      ],
      technologies: ["Laravel", "PHP", "MySQL", "React"],
      current: false,
    },
  ],

  // ── EDUCACIÓN ─────────────────────────────────────────────
  education: [
    {
      id: "edu-1",
      institution: "Tu Universidad", // ← Cambia esto
      degree: "Tecnólogo en Desarrollo de Software",
      field: "Ingeniería de Sistemas",
      period: "2020 - 2023",
      location: "Colombia",
      description:
        "Formación en desarrollo de software, bases de datos, algoritmos y estructuras de datos.",
    },
  ],

  // ── CERTIFICACIONES ───────────────────────────────────────
  certifications: [
    {
      id: "cert-1",
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      category: "cloud",
      url: "https://aws.amazon.com/certification/",
    },
    {
      id: "cert-2",
      name: "Desarrollo Web Full Stack",
      issuer: "SENA",
      date: "2022",
      category: "development",
    },
    {
      id: "cert-3",
      name: "Oracle Database SQL",
      issuer: "Oracle",
      date: "2023",
      category: "database",
      url: "https://education.oracle.com/",
    },
    {
      id: "cert-4",
      name: "Node.js Application Development",
      issuer: "OpenJS Foundation",
      date: "2023",
      category: "development",
    },
  ],

  // ── PROYECTOS ─────────────────────────────────────────────
  // Para agregar proyectos, copia un objeto y modifica sus valores
  projects: [
    {
      id: "proj-1",
      name: "API REST E-Commerce",
      description:
        "API escalable para plataforma de comercio electrónico con autenticación JWT, manejo de inventario y pasarela de pagos.",
      longDescription:
        "Sistema backend completo para una plataforma de e-commerce. Incluye gestión de usuarios, catálogo de productos, carrito de compras, procesamiento de pagos y sistema de notificaciones.",
      image: "/images/projects/ecommerce-api.png",
      technologies: ["Node.js", "Express", "PostgreSQL", "Docker", "AWS"],
      githubUrl: "https://github.com/JhanpolPb",
      demoUrl: "",
      status: "completed",
      featured: true,
      category: "backend",
      features: [
        "Autenticación JWT con refresh tokens",
        "Gestión de inventario en tiempo real",
        "Integración con pasarela de pagos",
        "Documentación con Swagger",
        "Tests unitarios y de integración",
      ],
      year: 2024,
    },
    {
      id: "proj-2",
      name: "Sistema de Gestión Empresarial",
      description:
        "Aplicación web para gestión de recursos humanos, inventario y reportes. Backend con Laravel y frontend con React.",
      longDescription:
        "Sistema ERP ligero para PYMEs. Gestión de empleados, nómina, inventario de productos, facturación y reportes en tiempo real.",
      image: "/images/projects/erp-system.png",
      technologies: ["Laravel", "PHP", "MySQL", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/JhanpolPb",
      demoUrl: "",
      status: "completed",
      featured: true,
      category: "fullstack",
      features: [
        "Panel de administración completo",
        "Gestión de empleados y nómina",
        "Sistema de inventario",
        "Reportes PDF y Excel",
        "Multi-tenant architecture",
      ],
      year: 2023,
    },
    {
      id: "proj-3",
      name: "Dashboard Analytics",
      description:
        "Dashboard de analíticas en tiempo real con visualización de datos, integrado con APIs externas y base de datos SQL Server.",
      image: "/images/projects/dashboard.png",
      technologies: [".NET", "SQL Server", "React", "TypeScript"],
      githubUrl: "https://github.com/JhanpolPb",
      demoUrl: "",
      status: "completed",
      featured: false,
      category: "fullstack",
      features: [
        "Gráficas interactivas en tiempo real",
        "Exportación de reportes",
        "Filtros dinámicos",
        "Integración con múltiples fuentes de datos",
      ],
      year: 2024,
    },
  ],

  // ── SERVICIOS ─────────────────────────────────────────────
  services: [
    {
      id: "svc-1",
      icon: "server",
      title: "Desarrollo Backend",
      description:
        "APIs RESTful robustas y escalables con Node.js, Laravel o .NET. Arquitectura limpia y documentación completa.",
      features: [
        "APIs REST y GraphQL",
        "Autenticación y autorización",
        "Integración con servicios externos",
        "Documentación con Swagger/OpenAPI",
      ],
    },
    {
      id: "svc-2",
      icon: "database",
      title: "Diseño de Bases de Datos",
      description:
        "Modelado, optimización y administración de bases de datos relacionales. MySQL, PostgreSQL y SQL Server.",
      features: [
        "Diseño de esquemas eficientes",
        "Optimización de consultas",
        "Migraciones y versionado",
        "Backup y recuperación",
      ],
    },
    {
      id: "svc-3",
      icon: "cloud",
      title: "Cloud & DevOps",
      description:
        "Despliegue y configuración de infraestructura en AWS. Docker y prácticas CI/CD para entregas continuas.",
      features: [
        "Despliegue en AWS",
        "Contenerización con Docker",
        "Pipelines CI/CD",
        "Monitoreo y alertas",
      ],
    },
    {
      id: "svc-4",
      icon: "layout",
      title: "Desarrollo Full Stack",
      description:
        "Aplicaciones web completas desde el backend hasta el frontend con React y Next.js.",
      features: [
        "Aplicaciones web modernas",
        "Interfaces responsivas",
        "Optimización de rendimiento",
        "SEO técnico",
      ],
    },
  ],

  // ── ESTADÍSTICAS ──────────────────────────────────────────
  stats: [
    {
      label: "Años de experiencia",
      value: "3",
      suffix: "+",
      description: "Desarrollando soluciones backend",
    },
    {
      label: "Proyectos completados",
      value: "15",
      suffix: "+",
      description: "APIs, sistemas y aplicaciones",
    },
    {
      label: "Tecnologías dominadas",
      value: "12",
      suffix: "+",
      description: "Backend, frontend y cloud",
    },
    {
      label: "Commits este año",
      value: "500",
      suffix: "+",
      description: "Código limpio y documentado",
    },
  ],

  // ── GITHUB ────────────────────────────────────────────────
  github: {
    username: "JhanpolPb",
    pinnedRepos: [], // Se obtienen automáticamente de la API
  },
};
