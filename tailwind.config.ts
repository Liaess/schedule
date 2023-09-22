import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "680px",
      tablet: "768px",
      md: "900px",
      lg: "1200px",
    },
    fontFamily: {
      oswald: "'Oswald, sans-serif'",
      passion: "Passion One, sans-serif",
    },
    extend: {
      colors: {
        "main-theme": "#1F497D",
        "secondary-theme": "#F9F2ED",
        "black-color": "#000",
        "disable-button": "#D3D3D3",
        "confirm-button-color": "#3085d6",
        "deny-button-color": "#d33",
      },
    },
  },
  plugins: [],
};
export default config;
