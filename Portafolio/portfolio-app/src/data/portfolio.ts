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
    email: "jhanpolparra@gmail.com", 
    phone: "+57 320 470 7210", 
    whatsapp: "+57 320 470 7210",
    website: "https://jhanpolparra.dev", 
    avatar: "/images/avatar.jpg", 
    cvUrl: "/cv/HV_Jhanpol_Parra_ADSO.pdf",
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
      url: "https://www.linkedin.com/in/jhanpolpb/", 
      icon: "linkedin",
      username: "jhanpolpb",
    },
    {
      name: "Email",
      url: "mail to: jhanpolparra@gmail.com", 
      icon: "mail",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/573204707210", 
      icon: "message-circle",
    },
  ],

  // ── TECNOLOGÍAS ───────────────────────────────────────────
  technologies: [
    // Backend
    { name: "Node.js", icon: "nodejs", category: "backend", color: "#339933" },
    { name: "Express", icon: "express", category: "backend", color: "#ffffffff" },
    { name: "Laravel", icon: "laravel", category: "backend", color: "#FF2D20" },
    { name: ".NET", icon: "dotnet", category: "backend", color: "#512BD4" },
    // Frontend
    { name: "React", icon: "react", category: "frontend", color: "#61DAFB" },
    { name: "Next.js", icon: "nextjs", category: "frontend", color: "#fbfbfbff" },
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

     {
      name: "DynamoDB",
      icon: "dynamodb",
      category: "database",
      color: "#ffffffff",
    },

    // Cloud
    { name: "AWS", icon: "aws", category: "cloud", color: "#818181ff" },
    { name: "Docker", icon: "docker", category: "cloud", color: "#2496ED" },
    { name : "cloud", icon: "cloud", category: "cloud", color: "#27ed24ff"},
    // Tools
    { name: "Git", icon: "git", category: "tools", color: "#F05032" },
    { name: "GitHub", icon: "github", category: "tools", color: "#ffffffff" },
    { name: "Postman", icon: "postman", category: "tools", color: "#ff7700ff"}
  ],

  // ── EXPERIENCIA ───────────────────────────────────────────
  experience: [
    {
      id: "exp-1",
      company: "Nua Technology", // ← Cambia esto
      role: "Full Stack Developer",
      period: "2026 - Presente",
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
      technologies: ["Node.js", "Express", "DynamoDB", "AWS"],
      current: true,
    },
  ],

  // ── EDUCACIÓN ─────────────────────────────────────────────
  education: [
    {
      id: "edu-1",
      institution: "Politecnico GranColombiano", 
      degree: "Ingeniería de Software",
      field: "Ingeniería de Software",
      period: "2023 - 2027",
      location: "Colombia",
      description:
        "Formación en desarrollo de software, bases de datos, despliegue y arquitectura de software.",
    },

    {
      id: "edu-2",
      institution: "Servicio Nacional de Aprendizaje (SENA)",
      degree: "Tecnólogo en Analísis y Desarrollo de Software",
      field: "Tecnólogo en Analísis y Desarrollo de Software",
      period: "2024 - 2027",
      location: "Colombia",
      description:
        "Formación en analisis y desarrollo de software, bases de datos, algoritmos y estructuras de datos.",
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
    },// Remplazar
    {
      id: "cert-2",
      name: "Desarrollo Web Full Stack",
      issuer: "SENA",
      date: "2022",
      category: "development",
    },// Remplazar
    {
      id: "cert-3",
      name: "Oracle Database SQL",
      issuer: "Oracle",
      date: "2023",
      category: "database",
      url: "https://education.oracle.com/",
    },//Remplazar
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
    name: "KicksHub",
    description:
      "E-commerce Full Stack de sneakers con autenticación JWT, panel de administración, subida de imágenes a la nube y despliegue en producción.",
    longDescription:
      "Plataforma de comercio electrónico especializada en sneakers, construida de principio a fin con Node.js, Express, PostgreSQL y Next.js. Incluye autenticación y autorización por roles, catálogo de productos con imágenes en Cloudinary, carrito de compras persistente, procesamiento de órdenes con historial detallado, y panel de administración completo. Desplegada en producción con backend, frontend y base de datos en la nube.",
    image: "",
    technologies: ["Node.js", "Express", "PostgreSQL", "Next.js", "React", "Cloudinary", "Render", "JWT"],
    githubUrl: "https://github.com/JhanpolPb/kickshub",
    demoUrl: "https://kickshub-frontend.onrender.com",
    status: "in-progress",
    featured: true,
    category: "fullstack",
    features: [
      "Autenticación JWT con roles (cliente / admin)",
      "Panel de administración con CRUD de productos",
      "Subida de imágenes a Cloudinary",
      "Carrito de compras y procesamiento de órdenes",
      "Diseño responsive con Next.js App Router",
      "API REST con arquitectura por capas",
      "Despliegue completo en producción",
    ],
    year: 2026,
  },
    {
      id: "proj-2",
      name: "En construcción",
      description:
        "En construcción",
      longDescription:
        "En construcción",
      image: "",
      technologies: [],
      githubUrl: "https://github.com/JhanpolPb",
      demoUrl: "",
      status: "completed",
      featured: true,
      category: "",
      features: [
        "",
        "",
        "",
        "",
        "",
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
        "APIs RESTful robustas y escalables con Node.js, .NET. Arquitectura limpia y documentación completa.",
      features: [
        "APIs REST y APIs Gateway",
        "Autenticación y autorización",
        "Integración con servicios externos",
        "Documentación con Swagger/Postamn",
      ],
    },
    {
      id: "svc-2",
      icon: "database",
      title: "Diseño de Bases de Datos",
      description:
        "Modelado, optimización y administración de bases de datos Relacionales y no Relacionales. MySQL, PostgreSQL, SQL Server y DynamoDB",
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
      value: "2",
      suffix: "+",
      description: "Desarrollando soluciones FullStack",
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
    pinnedRepos: [], 
  },
};
