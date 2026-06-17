export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  demoVideoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "watchit",
    title: "WatchIt",
    description: "A real-time collaborative video watching platform. Create a room, share the ID, and watch YouTube videos in perfect sync with friends — no accounts, no installs. Built with a Socket.IO event bus for frame-accurate playback control across all connected clients.",
    technologies: ["React 19", "Socket.IO", "Redux Toolkit", "YouTube API", "Vite"],
    githubUrl: "https://github.com/sebitacasa/watchit-frontend",
    liveUrl: "#",
    demoVideoUrl: "/videos/watchit-demo.mp4",
  },
  {
    id: "underevents",
    title: "UnderEvents",
    description: "Event discovery SPA for underground and niche events across Europe. Users browse a live map, purchase tickets via Stripe, and manage their event history — all in English or German. Admins get a full dashboard with Chart.js analytics for sales and attendance.",
    technologies: ["React 18", "Redux Toolkit", "Auth0", "Stripe", "Leaflet", "Bootstrap 5"],
    githubUrl: "https://github.com/sebitacasa/new-events-final",
    liveUrl: "#",
  },
  {
    id: "underevents-api",
    title: "UnderEvents API",
    description: "RESTful backend powering UnderEvents. Auth0 RS256 JWT validation on all protected routes — no secret stored server-side. Stripe webhooks drive the full order lifecycle: payment → ticket creation → Brevo transactional email. ioredis caches high-frequency event queries.",
    technologies: ["Node.js", "Express 4", "PostgreSQL", "Sequelize", "Auth0", "Stripe"],
    githubUrl: "https://github.com/sebitacasa/new-events-final",
    liveUrl: "#",
  },
  {
    id: "castleapp",
    title: "Echoes & Paths (CastleApp)",
    description: "Cross-platform mobile app for discovering historical landmarks — castles, ruins, museums, and Stolpersteine. GPS-powered exploration with rich metadata pulled from OpenStreetMap Overpass, Europeana, Wikipedia and Google Places. Offline-capable session via AsyncStorage JWT persistence.",
    technologies: ["React Native", "Expo SDK 54", "Google Maps", "Context API", "EAS Build"],
    githubUrl: "https://github.com/sebitacasa/CastleApp-frontEnd",
    liveUrl: "#",
    demoVideoUrl: "/videos/castleapp-demo.mp4",
  },
  {
    id: "castleapp-api",
    title: "CastleApp API",
    description: "Express 5 + ESM backend serving historical location data. Aggregates and deduplicates records from OpenStreetMap Overpass (4-node fallback), Europeana, and Google Places APIs into a local PostgreSQL database via Knex migrations. Smart category detection classifies 6 monument types automatically.",
    technologies: ["Node.js ESM", "Express 5", "PostgreSQL", "Knex.js", "Overpass API", "Europeana"],
    githubUrl: "https://github.com/sebitacasa/CastleApp-backend",
    liveUrl: "#",
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
