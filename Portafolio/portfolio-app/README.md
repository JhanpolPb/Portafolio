# Jhanpol Parra — Portfolio

Portafolio profesional construido con **Next.js 15**, **React 19**, **TypeScript** y **Tailwind CSS v4**.

## 🚀 Inicio rápido

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## ⚙️ Personalización

Toda la información del portafolio está centralizada en un solo archivo:

```
src/data/portfolio.ts
```

Edita ese archivo para cambiar nombre, cargo, tecnologías, experiencia, proyectos, redes sociales, etc.

### Agregar proyectos

Dentro de `portfolio.ts`, en el array `projects`, copia y pega este bloque:

```ts
{
  id: "proj-N",
  name: "Nombre del proyecto",
  description: "Descripción corta",
  image: "/images/projects/mi-proyecto.png",
  technologies: ["Node.js", "PostgreSQL"],
  githubUrl: "https://github.com/...",
  demoUrl: "https://...",
  status: "completed",        // completed | in-progress | archived
  featured: true,
  category: "backend",        // backend | fullstack | frontend
  features: ["Feature 1", "Feature 2"],
  year: 2024,
},
```

### Foto de perfil

Coloca tu foto en `public/images/avatar.jpg` y actualiza `avatar` en `portfolio.ts`.

### CV

Coloca tu CV en `public/cv/Jhanpol-Parra-CV.pdf` y actualiza `cvUrl` en `portfolio.ts`.

## 📧 Formulario de contacto (EmailJS)

1. Crea una cuenta en [emailjs.com](https://emailjs.com)
2. Instala el SDK: `npm install @emailjs/browser`
3. En `src/components/sections/Contact.tsx`, descomenta y configura:

```ts
import emailjs from "@emailjs/browser";
await emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...form }, PUBLIC_KEY);
```

## 🌐 Deploy en Vercel

```bash
# Instalar Vercel CLI (opcional)
npm i -g vercel

# Deploy
vercel
```

O simplemente conecta el repositorio en [vercel.com](https://vercel.com) — detecta Next.js automáticamente.

## 📁 Estructura

```
src/
├── app/          # Layout, page y globals.css
├── components/
│   ├── layout/   # Navbar, Footer
│   ├── sections/ # Hero, About, Technologies, Experience...
│   └── ui/       # Button, Badge, GlassCard, SectionHeader
├── data/         # portfolio.ts ← edita aquí
├── hooks/        # useActiveSection, useScrollReveal
├── lib/          # utils.ts, github.ts
└── types/        # index.ts
```

## 🛠 Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide React**
- **Radix UI**
