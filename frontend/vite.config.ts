import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": { target: { port: 3000, host: "localhost" } },
      //'/api': { target: 'http://your-production-api.com', changeOrigin: true },
    },
  },
});
