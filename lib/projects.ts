export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  demoVideoUrl?: string;
  inDevelopment?: boolean;
};

export const projects: Project[] = [
  {
    id: "watchit",
    title: "WatchIt",
    description: "Full-stack real-time collaborative video watching platform. Create a room, share the ID, and watch YouTube videos in perfect sync with friends — no accounts needed. React 19 PWA on the frontend with Socket.IO-driven play/pause/seek sync. Stateless Node.js server with a custom veteran handshake protocol that achieves frame-accurate join-time sync with zero server-side state.",
    technologies: ["React 19", "Socket.IO", "Redux Toolkit", "Node.js", "Express 5", "YouTube API"],
    githubUrl: "https://github.com/sebitacasa/watchit-frontend",
    liveUrl: "#",
    demoVideoUrl: "/videos/watchit-demo.mp4",
  },
  {
    id: "underevents",
    title: "UnderEvents",
    description: "Full-stack event discovery platform for underground and niche events across Europe. React SPA on the frontend with Auth0 login, Stripe ticket checkout, interactive Leaflet maps and EN/DE multilingual support. Node.js REST API on the backend with RS256 JWT validation, Stripe webhook order lifecycle, Brevo transactional email and Redis caching.",
    technologies: ["React 18", "Redux Toolkit", "Auth0", "Stripe", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/sebitacasa/new-events-final",
    liveUrl: "#",
  },
  {
    id: "castleapp",
    title: "CastleApp",
    description: "Full-stack cross-platform mobile app for discovering historical landmarks — castles, ruins, museums and Stolpersteine. React Native GPS-powered exploration with offline-capable JWT sessions. Express 5 backend aggregates and deduplicates data from OpenStreetMap Overpass (4-node fallback), Europeana and Google Places, with a custom smart category detection engine that auto-classifies 6 monument types.",
    technologies: ["React Native", "Expo SDK 54", "Node.js ESM", "Express 5", "PostgreSQL", "Knex.js"],
    githubUrl: "https://github.com/sebitacasa/CastleApp-frontEnd",
    liveUrl: "#",
    demoVideoUrl: "/videos/castleapp-demo.mp4",
  },
  {
    id: "nonna",
    title: "El dulce de la Nonna",
    description: "Business website for an artisan alfajores home-baker. Customers browse the landing page and submit custom orders through a validated form — the order is dispatched as two transactional emails (owner notification + customer confirmation) with no database storage needed. Built as a server-rendered Laravel 13 monolith with Blade, Tailwind v4 and Carbon date validation enforcing a 48-hour advance order window.",
    technologies: ["Laravel 13", "PHP 8.3", "Blade", "Tailwind CSS v4", "Laravel Mail", "Vite"],
    githubUrl: "https://github.com/Dual-Stack-Studio/Los-Alfajores-De-la-Nonna-Miami-",
    liveUrl: "#",
  },
  {
    id: "bumeran",
    title: "Bumerán",
    description: "Community favor exchange app — post what you need, offer what you can, or gift items to neighbors. Location-based discovery with GPS coordinates on every favor post. Google Sign-In via NestJS backend: ID token verified server-side, custom JWT issued on upsert. Three favor types (necesito / ofrezco / regalo) with lifecycle states and expiry. Built with React Native + Expo SDK 56 and a NestJS 11 API with Prisma + PostgreSQL.",
    technologies: ["React Native", "Expo SDK 56", "NestJS 11", "Prisma", "PostgreSQL", "Google OAuth"],
    githubUrl: "https://github.com/Dual-Stack-Studio/App-cadenas-de-favores-client",
    liveUrl: "#",
    inDevelopment: true,
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
