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
        name: "React 18",
        role: "UI Framework",
        detail: "SPA with 72 components. Hooks-based architecture throughout — useState, useEffect, custom hooks for cart and auth state.",
      },
      {
        name: "Vite",
        role: "Build Tool",
        detail: "Replaces CRA for faster cold starts and HMR. Production build with tree-shaking and code splitting.",
      },
      {
        name: "Redux Toolkit",
        role: "State Management",
        detail: "Centralized store for events, filters, user session and cart. Async actions via Redux Thunk + Axios for all API calls.",
      },
      {
        name: "React Router DOM v6",
        role: "Client-Side Routing",
        detail: "Declarative routing with protected routes. SPA rewrite rule via vercel.json for correct refresh behavior.",
      },
      {
        name: "Auth0",
        role: "Authentication",
        detail: "OAuth 2.0 / OpenID Connect. loginWithPopup flow — on first login, user is created in the DB via POST /users.",
      },
      {
        name: "Stripe",
        role: "Payments",
        detail: "@stripe/react-stripe-js with Elements wrapper. Tokenized card flow — no raw card data touches the client.",
      },
      {
        name: "Leaflet + React Leaflet",
        role: "Maps",
        detail: "Interactive event location maps on detail pages. Marker clusters for multi-event views.",
      },
      {
        name: "i18next",
        role: "Internationalization",
        detail: "EN / DE language support with browser language detection. All UI strings externalized to translation JSON files.",
      },
      {
        name: "Bootstrap 5 + Styled Components",
        role: "Styling",
        detail: "Bootstrap for layout and responsive grid. Styled Components for custom theming (gold/dark palette via CSS variables).",
      },
      {
        name: "Formik + Yup",
        role: "Forms & Validation",
        detail: "Schema-based validation for event creation and user profile forms. Error messages bound directly to field state.",
      },
      {
        name: "Chart.js",
        role: "Data Visualization",
        detail: "Admin dashboard charts for event metrics, ticket sales and user activity over time.",
      },
      {
        name: "EmailJS",
        role: "Email",
        detail: "Client-side email dispatch for contact form — no dedicated mail server required.",
      },
    ],
    architecture: [
      "Single Page Application deployed on Vercel",
      "Redux store as single source of truth — all server state flows through Thunk actions",
      "Auth0 handles identity — JWT passed as Bearer token on protected API calls",
      "Stripe Elements keeps PCI scope minimal — card data never touches app servers",
      "React Leaflet renders venue maps with lazy-loaded tile layers",
      "i18next with browser language detector — zero config for end users",
    ],
  },

  "UnderEvents API": {
    entries: [
      {
        name: "Node.js 18 + Express 4",
        role: "Runtime & Framework",
        detail: "RESTful API with two route groups: /events and /users. Middleware chain: CORS → bodyParser → morgan → JWT validation → controller.",
      },
      {
        name: "PostgreSQL + Sequelize v6",
        role: "Database & ORM",
        detail: "5 models: Event, User, Ticket, Order, Reviews. UUID primary keys. Associations: User→Event, Order↔Event (junction table order_event), Order→Ticket, Event/User→Reviews.",
      },
      {
        name: "Auth0 (RS256 JWT)",
        role: "Authentication",
        detail: "express-jwt + jwks-rsa validate Auth0-issued RS256 tokens on every protected route. JWKS public key fetched from Auth0's .well-known endpoint — no secret stored server-side.",
      },
      {
        name: "Stripe SDK",
        role: "Payments",
        detail: "Server-side payment intent creation and webhook handling. On success: Order + Ticket statuses updated, confirmation email triggered. On failure: order marked rejected.",
      },
      {
        name: "Brevo (Sendinblue) API",
        role: "Transactional Email",
        detail: "Nodemailer replaced by Brevo HTTP API for higher deliverability. HTML email templates sent on payment success/failure with ticket details and CTA link.",
      },
      {
        name: "ioredis",
        role: "Caching / Session",
        detail: "Redis client for fast key-value lookups. Reduces repeat DB queries for high-frequency reads like event listings and filter results.",
      },
      {
        name: "express-oauth2-jwt-bearer",
        role: "Stripe Route Guard",
        detail: "Secondary JWT middleware on Stripe endpoints — validates the audience and issuer independently from the main checkJwt middleware.",
      },
      {
        name: "Mocha + Chai + Supertest",
        role: "Testing",
        detail: "Integration tests hit the real Express app instance. Supertest mounts the server without a port — tests run isolated from the network.",
      },
    ],
    architecture: [
      "RESTful API deployed on Railway — always-on PostgreSQL instance via DATABASE_URL",
      "JWT middleware (express-jwt + jwks-rsa) validates Auth0 RS256 tokens — no secret stored on server",
      "Service layer pattern: routes → controllers → services → Sequelize models",
      "Stripe webhooks drive order lifecycle — status updates and email dispatch happen server-side",
      "Brevo HTTP API handles transactional email — purchase confirmation and rejection templates",
      "ioredis caches frequent read queries to reduce DB load on event listings and filters",
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
};

export default techStacks;

