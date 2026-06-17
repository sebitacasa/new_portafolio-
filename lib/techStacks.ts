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
  "WatchIt": {
    entries: [
      {
        name: "React 19 + Vite",
        role: "Frontend — UI Framework",
        detail: "SPA with two routes: Home (room creation) and Room (video + chat). Vite handles fast HMR in dev and tree-shaken production bundles.",
      },
      {
        name: "Socket.IO Client 4.8",
        role: "Frontend — Real-Time Sync",
        detail: "Connects on room entry, disconnects on leave. Emits play/pause/seek events from the YouTube player API and applies incoming events from peers — with echo prevention so the sender doesn't react to its own events.",
      },
      {
        name: "react-youtube",
        role: "Frontend — Video Player",
        detail: "Wraps the YouTube IFrame API. Exposes seekTo, playVideo, pauseVideo — the socket event handler calls these directly to apply remote state changes without reloading the component.",
      },
      {
        name: "Redux Toolkit",
        role: "Frontend — State Management",
        detail: "Stores video search results and the active videoId. Async Thunk proxies YouTube search through the backend so the Google API key never reaches the browser.",
      },
      {
        name: "vite-plugin-pwa",
        role: "Frontend — Progressive Web App",
        detail: "Service worker + web manifest make WatchIt installable on desktop and mobile. Users can launch it like a native app directly from their home screen.",
      },
      {
        name: "Node.js + Express 5",
        role: "Backend — Runtime & HTTP Server",
        detail: "Minimal Express app — no database, no sessions. Serves the YouTube search proxy route and hosts the Socket.IO server on the same port.",
      },
      {
        name: "Socket.IO 4.8 Server",
        role: "Backend — WebSocket Event Bus",
        detail: "Manages rooms as ephemeral sets of socket IDs. Relays video-event (play/pause/seek), change-video and chat-message to the correct room. All sync state lives in the browsers — the server is a pure relay.",
      },
      {
        name: "Veteran Sync Handshake",
        role: "Backend — Join-Time Synchronization",
        detail: "When a new peer joins, the server finds the oldest socket in the room (the 'veteran') and requests the current time + video ID from it. The veteran responds and the server forwards it only to the new joiner — frame-accurate sync with zero server-side state.",
      },
      {
        name: "YouTube Data API v3 Proxy",
        role: "Backend — Search Proxy",
        detail: "GET /youtube-search proxies video search via Axios. Keeps the Google API key in a Railway environment variable — the client never sees it. Results mapped to { videoId, title, thumbnail }.",
      },
    ],
    architecture: [
      "React SPA (two routes: Home + Room) — Redux store holds search results and active video",
      "Socket.IO client joins a named room on connect, leaves on unmount — rooms are ephemeral",
      "Veteran sync handshake: new joiner asks oldest peer for current time + video on entry",
      "YouTube player events (play/pause/seek) emitted to server, relayed to all peers except sender",
      "YouTube search proxied through backend — API key stays in Railway env, never exposed to client",
      "PWA via vite-plugin-pwa — installable as a native-feeling app on desktop and mobile",
    ],
  },

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

  "CastleApp": {
    entries: [
      {
        name: "React Native 0.81 + Expo SDK 54",
        role: "Frontend — Mobile Framework",
        detail: "Cross-platform iOS/Android app. Expo managed workflow with expo-dev-client for native module support. EAS Build generates signed APK/AAB for Play Store distribution.",
      },
      {
        name: "React Navigation v7",
        role: "Frontend — Navigation",
        detail: "Native stack navigator for screen transitions + bottom tab bar. Deep linking via expo-linking. Stack resets on logout to prevent back-navigation into protected screens.",
      },
      {
        name: "react-native-maps + expo-location",
        role: "Frontend — Maps & GPS",
        detail: "Google Maps provider (PROVIDER_GOOGLE) with custom retro map style. expo-location fetches GPS coords with foreground permission flow. Markers lazy-load as the user pans.",
      },
      {
        name: "Context API + AsyncStorage",
        role: "Frontend — State & Persistence",
        detail: "AuthContext holds JWT token and user info. FavoritesContext manages saved locations. Both contexts rehydrate from AsyncStorage on app start — session survives cold restarts without re-login.",
      },
      {
        name: "expo-updates + EAS Build",
        role: "Frontend — Build & Deployment",
        detail: "EAS Build generates the signed Android APK. expo-updates enables OTA JavaScript patches — critical fixes ship without waiting for a Play Store review cycle.",
      },
      {
        name: "Node.js (ESM) + Express 5",
        role: "Backend — Runtime & API",
        detail: "Full ESM module system ('type': 'module'). Express 5 with three route groups: /auth, /castles (locations), /social. Deployed on Railway with PostgreSQL via DATABASE_URL.",
      },
      {
        name: "PostgreSQL + Knex.js v3",
        role: "Backend — Database",
        detail: "Schema version-controlled via Knex migrations — no ORM magic, explicit SQL control. Docker Compose spins up local Postgres for dev/prod parity.",
      },
      {
        name: "Overpass API (multi-server)",
        role: "Backend — Location Data Source",
        detail: "Primary source for historical landmarks. Multi-server fallback across 4 Overpass instances with random shuffle for load distribution — survives single-node OSM outages.",
      },
      {
        name: "Europeana + Google Places + Wikipedia",
        role: "Backend — Data Enrichment",
        detail: "Europeana API provides EU cultural heritage records. Google Places enriches with photos and metadata. Wikipedia REST API adds historical descriptions with HTML stripping. Results deduplicated with fuzzy Unicode matching.",
      },
      {
        name: "Smart Category Detection",
        role: "Backend — Data Processing",
        detail: "Text classifier analyses Google place types + name + description to assign one of 6 categories: Castles, Ruins, Museums, Plaques, Busts, Stolpersteine. Synonym expansion improves search recall.",
      },
      {
        name: "bcryptjs + JWT",
        role: "Frontend + Backend — Authentication",
        detail: "bcryptjs hashes passwords at cost factor 10. JWT issued on login, stored in AsyncStorage on the app side, verified by middleware on every protected backend route.",
      },
      {
        name: "syncData.js + dataProcessor",
        role: "Backend — Data Pipeline",
        detail: "Scheduled sync pulls fresh Overpass + Europeana data, deduplicates it via dataProcessor, then upserts into PostgreSQL. Keeps the local DB current without manual intervention.",
      },
    ],
    architecture: [
      "React Native cross-platform app — single codebase for Android and iOS via EAS Build",
      "Context API: AuthContext + FavoritesContext, JWT persisted in AsyncStorage for cold-start sessions",
      "Express 5 REST API on Railway — Knex migrations version-control the schema, no ORM",
      "Overpass multi-server fallback (4 nodes, random shuffle) — resilient to OSM server outages",
      "Data pipeline: Overpass + Europeana → deduplication → PostgreSQL upsert via syncData",
      "Smart category detection auto-classifies 6 monument types from name + description analysis",
    ],
  },
};

export default techStacks;
