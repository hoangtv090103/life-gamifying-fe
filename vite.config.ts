import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//BASE URL: localhost:8080/api

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all requests starting with /api to the backend server
      "/api": {
        target: "http://localhost:9080", // Backend server
        changeOrigin: true, // Recommended if you have CORS issues
      },
    },
  },
});
