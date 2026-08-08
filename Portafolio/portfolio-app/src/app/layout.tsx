import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const { personal } = portfolioData;

export const metadata: Metadata = {
  metadataBase: new URL(personal.website || "https://jhanpolparra.dev"),
  title: {
    default: `${personal.name} — ${personal.title}`,
    template: `%s | ${personal.name}`,
  },
  description: personal.description,
  keywords: [
    personal.name,
    personal.title,
    personal.subtitle,
    "Full Stack Developer",
    "Backend Developer",
    "Node.js",
    "Laravel",
    ".NET",
    "React",
    "AWS",
    "Colombia",
    "Desarrollador Web",
    "API REST",
  ],
  authors: [{ name: personal.name, url: personal.website }],
  creator: personal.name,
  publisher: personal.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: personal.website,
    title: `${personal.name} — ${personal.title}`,
    description: personal.description,
    siteName: `${personal.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${personal.name} - ${personal.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.title}`,
    description: personal.description,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: personal.website,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personal.name,
              jobTitle: personal.title,
              description: personal.description,
              url: personal.website,
              email: personal.email,
              address: {
                "@type": "PostalAddress",
                addressCountry: "CO",
                addressLocality: personal.location,
              },
              sameAs: portfolioData.social.map((s) => s.url),
              knowsAbout: portfolioData.technologies.map((t) => t.name),
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#080810] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
