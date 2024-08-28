import { openAsBlob } from "fs";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        "bg-color": "#1c1c1c",
        "retro-lime": "#9BFF30",
        "retro-coffee": "#2E1E26",
        "retro-purp": "#573A84",
        "retro-black": "#0E0E0D",
        "retro-red": "#FF4B3E",
        "retro-orange": "#EF6829",
        "retro-light-orange": "#F08423",
        "retro-glass": "rgba(26, 26, 26, 0.3)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "blinking-cursor": "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
