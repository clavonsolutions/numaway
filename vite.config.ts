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
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("/react/") || id.includes("/react-dom/")) return "vendor-react";
          if (id.includes("/react-router-dom/")) return "vendor-router";
          if (id.includes("/framer-motion/")) return "vendor-motion";
          if (id.includes("/@tanstack/react-query")) return "vendor-query";
          if (id.includes("/react-hook-form/") || id.includes("/zod/") || id.includes("/@hookform/")) return "vendor-forms";
          if (id.includes("/lucide-react/") || id.includes("/class-variance-authority/") || id.includes("/clsx/") || id.includes("/tailwind-merge/")) return "vendor-ui";
          return undefined;
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
