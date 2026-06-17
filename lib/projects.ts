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
    id: "watchit-api",
    title: "WatchIt API",
    description: "Stateless Node.js server that powers WatchIt's real-time sync. No database — Socket.IO rooms are ephemeral sets of connected peers. A custom veteran handshake resolves join-time desync: the newest peer asks the oldest in the room for the current video and timestamp, achieving frame-accurate sync instantly. YouTube search is proxied server-side to keep the API key off the client.",
    technologies: ["Node.js", "Express 5", "Socket.IO 4.8", "YouTube Data API v3", "Railway"],
    githubUrl: "https://github.com/sebitacasa/watchit-backend",
    liveUrl: "#",
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
