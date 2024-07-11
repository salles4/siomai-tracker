/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#dc2626",
          "secondary": "#1c1917",
          "accent": "#991b1b",
          "neutral": "#f3f4f6",
          "base-100": "#ffffff",
          "info": "#2563eb",
          "success": "#00ff00",
          "warning": "#facc15",
          "error": "#b91c1c",
        },
      },
    ],
  },
}

