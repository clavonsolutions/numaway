import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    minify: "esbuild",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-router": ["react-router-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-query": ["@tanstack/react-query"],
          "vendor-forms": ["react-hook-form", "zod", "@hookform/resolvers"],
          "vendor-ui": ["lucide-react", "class-variance-authority", "clsx", "tailwind-merge"],
        },
      },
    },
  },
  ssr: {
    noExternal: ["react-helmet-async"],
  },
  ssgOptions: {
    // Exclude auth and portal routes from prerender (SPA only per ADR-010)
    includedRoutes(paths: string[]) {
      const excluded = ["/login", "/register", "/forgot-password", "login", "register", "forgot-password"];
      return paths.filter((p) => {
        const n = p.startsWith("/") ? p : `/${p}`;
        return (
          !n.startsWith("/app") &&
          !n.startsWith("/admin") &&
          !excluded.some((e) => n === `/${e}` || n === e)
        );
      });
    },
  },
});
