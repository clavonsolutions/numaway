import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import CookieBanner from "@/components/CookieBanner";

const queryClient = new QueryClient();

const RootLayout = (): JSX.Element => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else if (saved === "light") {
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Outlet />
          <CookieBanner />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default RootLayout;
