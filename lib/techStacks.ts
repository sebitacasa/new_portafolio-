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
};

export default techStacks;
