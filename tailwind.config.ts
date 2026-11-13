import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: { DEFAULT: "#1B1D1F", 800: "#24272A", 700: "#2E3236" },
        bone: "#F6F2EC",
        sand: "#EDE6DC",
        warmgrey: "#C9C3BA",
        wood: "#C9A46E",
        slate: { DEFAULT: "#4A5560", light: "#6B7783" },
        copper: {
          DEFAULT: "#D9822B",
          dark: "#B86A1E",
          // Darker copper for TEXT on light backgrounds (#D9822B fails AA on #F6F2EC)
          ink: "#9A5514",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(27,29,31,0.25)",
        glow: "0 0 0 3px rgba(217,130,43,0.25), 0 8px 24px -6px rgba(217,130,43,0.55)",
      },
      maxWidth: { site: "76rem" },
    },
  },
  plugins: [],
};
export default config;
