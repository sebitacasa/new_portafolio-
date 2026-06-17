export type TechEntry = {
  name: string;
  role: string;
  detail: string;
};

export type ProjectTechStack = {
  entries: TechEntry[];
  architecture: string[];
};

const techStacks: Record<string, ProjectTechStack> = {
  "UnderEvents": {
    entries: [
      {
        name: "React 18 + Vite",
        role: "Frontend — UI Framework",
        detail: "SPA with 72 components. Vite replaces CRA for faster HMR. Protected routes via React Router DOM v6 — vercel.json rewrite rule for correct SPA refresh behavior.",
      },
      {
        name: "Redux Toolkit",
        role: "Frontend — State Management",
        detail: "Centralized store for events, filters, user session and cart. Async Thunk actions + Axios handle all API calls. Single source of truth between components.",
      },
      {
        name: "Auth0",
        role: "Frontend + Backend — Authentication",
        detail: "OAuth 2.0 / OpenID Connect. loginWithPopup on client — on first login, user is created in DB via POST /users. RS256 JWT passed as Bearer token on every protected API call. express-jwt + jwks-rsa validate it server-side — no secret stored.",
      },
      {
        name: "Stripe",
        role: "Frontend + Backend — Payments",
        detail: "@stripe/react-stripe-js Elements on the client — raw card data never touches the app. Server creates payment intents and listens to webhooks: on success, Order + Ticket statuses update and Brevo triggers a confirmation email.",
      },
      {
        name: "Node.js 18 + Express 4",
        role: "Backend — Runtime & API",
        detail: "RESTful API with /events and /users route groups. Middleware chain: CORS → bodyParser → morgan → JWT validation → controller. Service layer pattern separates route logic from business logic.",
      },
      {
        name: "PostgreSQL + Sequelize v6",
        role: "Backend — Database",
        detail: "5 models: Event, User, Ticket, Order, Reviews. UUID primary keys. Associations: User→Event, Order↔Event (junction table order_event), Order→Ticket. Deployed on Railway via DATABASE_URL.",
      },
      {
        name: "Leaflet + React Leaflet",
        role: "Frontend — Maps",
        detail: "Interactive venue maps on event detail pages. Marker clusters for multi-event views. Tile layers loaded lazily — no map overhead on pages that don't need it.",
      },
      {
        name: "i18next",
        role: "Frontend — Internationalization",
        detail: "EN / DE language support with browser language detection. All UI strings externalized to JSON translation files — zero configuration for end users.",
      },
      {
        name: "Brevo API + ioredis",
        role: "Backend — Email & Caching",
        detail: "Brevo HTTP API replaced Nodemailer for higher deliverability — HTML templates dispatched on payment success and failure. ioredis caches high-frequency event listing and filter queries to reduce DB load.",
      },
      {
        name: "Bootstrap 5 + Styled Components",
        role: "Frontend — Styling",
        detail: "Bootstrap handles responsive grid and layout. Styled Components drive the custom gold/dark theme via CSS variables — component-scoped styles with no class name collisions.",
      },
      {
        name: "Formik + Yup + Chart.js",
        role: "Frontend — Forms & Analytics",
        detail: "Schema-based validation for event creation and profile forms. Admin dashboard renders Chart.js charts for ticket sales, event metrics and user activity over time.",
      },
      {
        name: "Mocha + Chai + Supertest",
        role: "Backend — Testing",
        detail: "Integration tests hit the real Express app instance via Supertest — no port binding needed. Tests run against the actual middleware chain and DB models.",
      },
    ],
    architecture: [
      "React SPA on Vercel — Redux store as single source of truth, all server state flows through Thunk actions",
      "Node.js REST API on Railway — service layer pattern: routes → controllers → services → Sequelize models",
      "Auth0 covers both ends: loginWithPopup on client, RS256 JWT + jwks-rsa validation on server",
      "Stripe Elements on client (PCI scope minimal) + webhooks on server drive the full order lifecycle",
      "Brevo transactional email triggered server-side on payment success and failure",
      "ioredis caches event listings and filter results — reduces repeat DB hits on high-traffic reads",
    ],
  },

  "Echoes & Paths (CastleApp)": {
    entries: [
      {
        name: "React Native 0.81 + Expo SDK 54",
        role: "Mobile Framework",
        detail: "Cross-platform iOS/Android app. Expo managed workflow with expo-dev-client for native module support. EAS Build for production APK/AAB generation.",
      },
      {
        name: "React Navigation v7",
        role: "Navigation",
        detail: "Native stack navigator for screen transitions + bottom tab bar. Deep linking configured via expo-linking. Stack resets on logout to prevent back-navigation into protected screens.",
      },
      {
        name: "react-native-maps + expo-location",
        role: "Maps & GPS",
        detail: "Google Maps provider (PROVIDER_GOOGLE) with custom retro map style. expo-location fetches user GPS coords with foreground permission flow. Markers lazy-load as user pans the map.",
      },
      {
        name: "Context API + AsyncStorage",
        role: "State & Persistence",
        detail: "AuthContext holds JWT token and user info. FavoritesContext manages saved locations. Both contexts rehydrate from AsyncStorage on app start — session survives cold restarts.",
      },
      {
        name: "Custom JWT Auth",
        role: "Authentication",
        detail: "Email/password login via Railway backend. Token stored in AsyncStorage, injected as Bearer header on all API calls. Google Sign-In via expo-auth-session + @react-native-google-signin.",
      },
      {
        name: "Axios",
        role: "HTTP Client",
        detail: "Configured instance pointing to Railway backend. 60s timeout for slow mobile connections. Fallback image gallery per category (Castles, Museums, Ruins) when location photo is missing.",
      },
      {
        name: "expo-image-picker",
        role: "Media",
        detail: "Profile photo and location image upload. Requests media library permissions at runtime — no permissions declared upfront.",
      },
      {
        name: "expo-updates + EAS",
        role: "Build & Deployment",
        detail: "EAS Build generates signed Android APK for Play Store internal testing. expo-updates enables OTA JavaScript updates without a full store release cycle.",
      },
    ],
    architecture: [
      "React Native cross-platform app — single codebase targets Android and iOS via EAS Build",
      "Context API replaces Redux — AuthContext + FavoritesContext cover all shared state",
      "JWT persisted in AsyncStorage — session restored on cold start without re-login",
      "expo-location requests GPS permission at runtime, feeds coords to react-native-maps",
      "Axios instance with fallback image gallery — graceful degradation when backend images are missing",
      "expo-updates allows OTA JS patches — critical fixes ship without waiting for store review",
    ],
  },

  "WatchIt": {
    entries: [
      {
        name: "React 19 + Vite",
        role: "UI Framework & Build Tool",
        detail: "SPA with two routes: Home (room creation) and Room (video + chat). Vite handles fast HMR in dev and tree-shaken production bundles.",
      },
      {
        name: "Socket.IO Client 4.8",
        role: "Real-Time Sync",
        detail: "Connects on room entry, disconnects on leave. Emits play/pause/seek events received from the YouTube player API and re-broadcasts them to every peer in the room.",
      },
      {
        name: "react-youtube",
        role: "Video Player",
        detail: "Wraps the YouTube IFrame API. Exposes seekTo, playVideo, pauseVideo — the socket event handler calls these directly to apply remote state changes without causing echo loops.",
      },
      {
        name: "Redux Toolkit",
        role: "State Management",
        detail: "Stores video search results and the active videoId. Async Thunk hits the backend YouTube proxy so the API key never reaches the browser.",
      },
      {
        name: "React Router DOM v7",
        role: "Client-Side Routing",
        detail: "Two routes: / (room ID + username entry) and /room/:roomId. Navigation to a room triggers socket join and the veteran sync handshake.",
      },
      {
        name: "vite-plugin-pwa",
        role: "Progressive Web App",
        detail: "Service worker + web manifest make WatchIt installable on desktop and mobile — users can launch it like a native app without an app store.",
      },
    ],
    architecture: [
      "SPA with two views: Home (create/join room) and Room (synchronized player + chat)",
      "Socket.IO client joins a named room on the server — all peers in the same room share state",
      "Veteran sync handshake: new joiner requests current time + video from the oldest peer in the room",
      "YouTube player events (play/pause/seek) are emitted to the server, relayed to all other peers",
      "Redux Thunk proxies YouTube search through the backend to keep the API key off the client",
      "PWA manifest + service worker — installable on desktop and mobile via vite-plugin-pwa",
    ],
  },

  "WatchIt API": {
    entries: [
      {
        name: "Node.js + Express 5",
        role: "Runtime & HTTP Server",
        detail: "Minimal Express app — no database, no sessions. Two concerns: serve HTTP routes and host the Socket.IO server on the same port.",
      },
      {
        name: "Socket.IO 4.8",
        role: "WebSocket Event Bus",
        detail: "Manages rooms as ephemeral sets of socket IDs. Relays video-event (play/pause/seek), change-video and chat-message to the correct room. All sync state lives in the browsers, not the server.",
      },
      {
        name: "Veteran Sync Handshake",
        role: "Join-Time Synchronization",
        detail: "When a new peer joins, the server finds the oldest connected socket in the room (the 'veteran') and asks it for the current time + video ID. The veteran responds and the server forwards it only to the new joiner — ensuring instant frame-accurate sync with zero server-side state.",
      },
      {
        name: "YouTube Data API v3 Proxy",
        role: "Search Proxy",
        detail: "GET /youtube-search proxies video search through the server using Axios. Keeps the API key in a Railway environment variable — the client never sees it.",
      },
      {
        name: "Axios",
        role: "HTTP Client",
        detail: "Used exclusively for the YouTube Data API v3 search call. Results are mapped to { videoId, title, thumbnail } before being returned to the client.",
      },
      {
        name: "Railway Deployment",
        role: "Hosting",
        detail: "Deployed on Railway. Port bound from process.env.PORT. No persistent storage needed — the server is stateless by design.",
      },
    ],
    architecture: [
      "Fully stateless — no database, no session store, no file system writes",
      "Socket.IO rooms are ephemeral: created on first join, destroyed when the last peer disconnects",
      "Veteran sync handshake resolves join-time desync without a server-side clock or timer",
      "All video control events are relayed with socket.to(roomId) — sender is excluded to prevent echo",
      "YouTube search proxied via Express route to keep the Google API key off the client",
      "Deployed on Railway — single process, PORT injected by platform at runtime",
    ],
  },

  "CastleApp API": {
    entries: [
      {
        name: "Node.js (ESM) + Express 5",
        role: "Runtime & Framework",
        detail: "Full ESM module system ('type': 'module'). Express 5 with three route groups: /auth, /castles (locations), /social. Deployed on Railway with PostgreSQL.",
      },
      {
        name: "PostgreSQL + Knex.js v3",
        role: "Database & Query Builder",
        detail: "Schema managed via Knex migrations. Raw query builder instead of ORM — full SQL control. Docker Compose spins up local Postgres for development parity.",
      },
      {
        name: "OpenStreetMap Overpass API",
        role: "Location Data Source",
        detail: "Primary source for historical landmarks (castles, ruins, museums). Multi-server fallback across 4 Overpass instances with random shuffle for load distribution — survives single-node outages.",
      },
      {
        name: "Nominatim + Google Places API",
        role: "Geocoding & Enrichment",
        detail: "Nominatim handles forward/reverse geocoding. Google Places API enriches results with photos and additional metadata. Wikipedia REST API adds historical descriptions with HTML stripping.",
      },
      {
        name: "Europeana API",
        role: "Cultural Heritage Data",
        detail: "EU cultural heritage database queried for museum and artwork records. Results merged and deduplicated against Overpass data using fuzzy name comparison with Unicode normalization.",
      },
      {
        name: "bcryptjs + jsonwebtoken",
        role: "Authentication",
        detail: "Password hashing with bcryptjs (cost factor 10). RS256 JWT issued on login, verified middleware on protected routes. Token contains userId and role claims.",
      },
      {
        name: "Smart Category Detection",
        role: "Data Processing",
        detail: "Text classifier analyses Google place types + name + description to assign categories (Castles, Ruins, Museums, Plaques, Busts, Stolpersteine). Synonym expansion improves search recall.",
      },
      {
        name: "syncData.js + dataProcessor",
        role: "Data Pipeline",
        detail: "Scheduled sync pulls fresh Overpass + Europeana data, processes and deduplicates it, then upserts into PostgreSQL. Keeps the local DB current without manual intervention.",
      },
    ],
    architecture: [
      "Express 5 REST API on Railway — PostgreSQL via DATABASE_URL connection string",
      "Knex migrations version-control the schema — no ORM magic, explicit SQL control",
      "Overpass multi-server fallback (4 nodes, random shuffle) — resilient to OSM server outages",
      "Data pipeline: Overpass + Europeana → dataProcessor deduplication → PostgreSQL upsert",
      "Fuzzy name matcher with Unicode normalization merges records across data sources",
      "bcryptjs + JWT auth — stateless sessions, no server-side session store needed",
    ],
  },
};

export default techStacks;

