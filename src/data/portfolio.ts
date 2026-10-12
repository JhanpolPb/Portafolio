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
      "Soy desarrollador Full Stack con enfoque en Backend y despliegue. Estoy capacitado para construir APIs escalables, desarrollar aplicaciones web modernas y trabajar con tecnologías Cloud. Tengo experiencia en Node.js, Laravel, .NET, React, bases de datos SQL y AWS. Siempre busco resolver problemas complejos con soluciones simples, eficientes y bien documentadas. Me mantengo en constante aprendizaje para estar al día con las últimas tendencias del desarrollo de software.",
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
      url: "mailto:jhanpolparra@gmail.com",
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
    { name: "Angular", icon: "angular", category: "frontend", color: "#DD0031" },
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
    { name: "AWS", icon: "aws", category: "cloud", color: "#FF9900" },
    { name: "Docker", icon: "docker", category: "cloud", color: "#2496ED" },
    { name: "Render", icon: "render", category: "cloud", color: "#ffffffff" },
    { name: "Cloudinary", icon: "cloudinary", category: "cloud", color: "#3448C5" },
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
      institution: "Politécnico Grancolombiano",
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
      degree: "Tecnólogo en Análisis y Desarrollo de Software",
      field: "Tecnólogo en Análisis y Desarrollo de Software",
      period: "2024 - 2027",
      location: "Colombia",
      description:
        "Formación en análisis y desarrollo de software, bases de datos, algoritmos y estructuras de datos.",
    },
  ],

  // ── CERTIFICACIONES ───────────────────────────────────────
  // La sección se muestra sola cuando hay al menos una. Formato:
  // {
  //   id: "cert-1",
  //   name: "AWS Cloud Practitioner",
  //   issuer: "Amazon Web Services",
  //   date: "2027",
  //   category: "cloud", // "cloud" | "development" | "database" | "other"
  //   url: "https://www.credly.com/badges/...", // enlace para verificarla (opcional)
  // },
  certifications: [],

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
    image: "/images/projects/kickshub.png",
    technologies: ["Node.js", "Express", "PostgreSQL", "Next.js", "React", "Cloudinary", "Render", "JWT"],
    githubUrl: "https://github.com/JhanpolPb/kickshub",
    demoUrl: "https://kickshub-frontend.onrender.com",
    status: "completed",
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
    name: "PetCareApp",
    description:
      "Plataforma veterinaria para agendar citas, controlar vacunas y reservar peluquería, con panel de administración y reportes.",
    image: "/images/projects/petcareapp.png",
    technologies: ["Node.js", "Express", "React", "PostgreSQL", "Neon", "Render"],
    githubUrl: "https://github.com/JhanpolPb/petcareapp",
    demoUrl: "https://petcareapp-sgns.onrender.com",
    status: "completed",
    featured: true,
    category: "fullstack",
    features: [
      "Citas veterinarias con horarios disponibles en tiempo real",
      "Control de vacunas y refuerzos por mascota",
      "Reserva de baño y peluquería",
      "Panel de administración con CRUD de usuarios, mascotas, citas y servicios",
      "Reportes por rango de fechas con gráficas",
      "Roles validados en el servidor en cada petición",
    ],
    year: 2026,
  },
  {
    id: "proj-3",
    name: "Nexo Diario",
    description:
      "Periódico digital de tecnología, educación, turismo y comercio, con buscador, favoritos y panel para administrar noticias.",
    image: "/images/projects/nexo-diario.png",
    technologies: ["Angular", "TypeScript", "GitHub Actions", "GitHub Pages"],
    githubUrl: "https://github.com/JhanpolPb/nexo-diario",
    demoUrl: "https://jhanpolpb.github.io/nexo-diario/",
    status: "completed",
    featured: true,
    category: "frontend",
    features: [
      "Cinco vistas construidas a partir de un diseño en Figma",
      "Buscador de noticias y filtros por categoría",
      "Favoritos, botones para compartir y noticias relacionadas",
      "Panel de administración con CRUD de noticias",
      "Despliegue automático con GitHub Actions",
    ],
    year: 2026,
  },
  {
    id: "proj-4",
    name: "AuthFlow",
    description:
      "Sistema de control de asistencia empresarial (check-in / check-out) con autenticación JWT, roles y panel de administración.",
    image: "",
    technologies: ["Node.js", "Express", "React", "MySQL", "JWT"],
    githubUrl: "https://github.com/JhanpolPb/Authflow",
    status: "completed",
    featured: false,
    category: "fullstack",
    features: [
      "Login, registro, refresh token y logout con JWT",
      "Roles de administrador y empleado",
      "Registro de entrada y salida con historial",
      "API REST por capas con validación de datos",
    ],
    year: 2026,
  },
  {
    id: "proj-5",
    name: "InsightPro",
    description:
      "Sistema para crear, distribuir y analizar encuestas empresariales mediante códigos QR y reportes en tiempo real.",
    image: "",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/JhanpolPb/InsightPro",
    status: "completed",
    featured: false,
    category: "fullstack",
    features: [
      "Multiempresa con registro independiente por NIT",
      "Cuatro tipos de pregunta: texto, única, múltiple y escala 1-5",
      "Códigos QR generados automáticamente para compartir encuestas",
      "Respuestas anónimas sin iniciar sesión",
      "Reportes visuales y exportación a CSV",
    ],
    year: 2025,
  },
  {
    id: "proj-6",
    name: "Survivor",
    description:
      "Juego estilo Vampire Survivors hecho en Godot 4: oleadas de enemigos, armas automáticas, mejoras al subir de nivel y jefes.",
    image: "",
    technologies: ["Godot 4", "GDScript", "GitHub Pages"],
    githubUrl: "https://github.com/JhanpolPb/survivor-godot",
    demoUrl: "https://jhanpolpb.github.io/survivor-godot/",
    status: "completed",
    featured: false,
    category: "game",
    features: [
      "Tres armas con niveles de mejora",
      "Oleadas con dificultad creciente y un jefe cada 3 minutos",
      "Gráficos dibujados por código, sin imágenes",
      "Exportado para jugarse en el navegador",
    ],
    year: 2026,
  },
  ],

  // ── SERVICIOS ─────────────────────────────────────────────
  services: [
    {
      id: "svc-1",
      icon: "server",
      title: "Desarrollo Backend",
      description:
        "APIs RESTful robustas y escalables con Node.js y .NET. Arquitectura limpia y documentación completa.",
      features: [
        "APIs REST y API Gateway",
        "Autenticación y autorización",
        "Integración con servicios externos",
        "Documentación con Swagger/Postman",
      ],
    },
    {
      id: "svc-2",
      icon: "database",
      title: "Diseño de Bases de Datos",
      description:
        "Modelado, optimización y administración de bases de datos relacionales y no relacionales: MySQL, PostgreSQL, SQL Server y DynamoDB.",
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
      label: "Años programando",
      value: "3",
      suffix: "+",
      description: "Formación y proyectos desde 2023",
    },
    {
      label: "Proyectos publicados",
      value: "6",
      suffix: "+",
      description: "Con código abierto en GitHub",
    },
    {
      label: "Tecnologías",
      value: "20",
      suffix: "+",
      description: "Backend, frontend y cloud",
    },
    {
      label: "Commits en 2026",
      value: "590",
      suffix: "+",
      description: "Contribuciones en GitHub",
    },
  ],

  // ── GITHUB ────────────────────────────────────────────────
  github: {
    username: "JhanpolPb",
    pinnedRepos: [], 
  },
};
