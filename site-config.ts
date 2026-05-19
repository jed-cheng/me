// ============================================================
// SITE CONFIG — edit this file to personalise your portfolio
// ============================================================

export const SITE = {
  // --- Your personal details ---
  author: {
    firstName: "YOUR_FIRST_NAME",
    lastName: "YOUR_LAST_NAME",
    fullName: "YOUR_FULL_NAME",
    jobTitle: "YOUR_JOB_TITLE",         // e.g. "Full Stack Developer"
    bio: "YOUR_SHORT_BIO",              // one-liner shown in the intro card
    about: "YOUR_LONGER_BIO",          // paragraph shown in the about card
  },

  // --- Location & timezone ---
  location: {
    city: "YOUR_CITY",
    countryName: "YOUR_COUNTRY",
    countryCode: "XX",                  // ISO 3166-1 alpha-2, e.g. "US"
    timezone: "Asia/Shanghai",         // IANA tz, e.g. "America/New_York"
  },

  // --- Social / contact links ---
  links: {
    email: "you@example.com",
    github: "https://github.com/YOUR_GITHUB",
    linkedin: "https://linkedin.com/in/YOUR_LINKEDIN",
    twitter: "https://twitter.com/YOUR_TWITTER",
    // Add or remove links as needed
  },

  // --- Tech stack shown in the About card ---
  techStack: [
    "TypeScript",
    "React",
    "Astro",
    "Node.js",
    "Tailwind CSS",
    // Add or remove entries
  ],

  // --- Current "Now" status ---
  now: "Currently working full-time.",  // short sentence shown in Now card

  // --- Avatar image path (put your image in /public) ---
  avatarSrc: "/avatar-placeholder.png", // swap with your own image
};
