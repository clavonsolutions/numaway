"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ICON_STROKE = 1.75;
const STORAGE_KEY = "numaway_cookie_consent";
const EXPIRY_DAYS = 365;

interface ConsentState {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  savedAt: number;
}

const isExpired = (savedAt: number): boolean => {
  return Date.now() - savedAt > EXPIRY_DAYS * 24 * 60 * 60 * 1000;
};

const loadConsent = (): ConsentState | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (isExpired(parsed.savedAt)) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
};

const saveConsent = (analytics: boolean, marketing: boolean): void => {
  const state: ConsentState = {
    necessary: true,
    analytics,
    marketing,
    savedAt: Date.now(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const CookieBanner = (): JSX.Element | null => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = loadConsent();
    if (!saved) {
      setVisible(true);
    }
  }, []);

  const handleAcceptAll = (): void => {
    saveConsent(true, true);
    setVisible(false);
  };

  const handleRejectAll = (): void => {
    saveConsent(false, false);
    setVisible(false);
  };

  const handleSavePreferences = (): void => {
    saveConsent(analytics, marketing);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          role="dialog"
          aria-label="Cookie consent"
          aria-modal="true"
        >
          <div className="max-w-4xl mx-auto bg-card border border-border shadow-xl rounded-2xl overflow-hidden">
            <div className="p-5 md:p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-5 h-5 text-secondary" strokeWidth={ICON_STROKE} />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">Cookie preferences</p>
                    <p className="text-sm text-muted-foreground">
                      We use cookies to improve your experience.{" "}
                      <a href="/cookies" className="text-secondary underline underline-offset-2">
                        Cookie policy
                      </a>
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleRejectAll}
                  className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 mt-1"
                  aria-label="Reject all and close"
                >
                  <X className="w-5 h-5" strokeWidth={ICON_STROKE} />
                </button>
              </div>

              {/* Granular controls */}
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="border border-border/50 rounded-xl divide-y divide-border/50 mb-4">
                      {/* Necessary, always on */}
                      <div className="flex items-center justify-between px-4 py-3">
                        <div>
                          <p className="text-sm font-medium text-foreground">Necessary</p>
                          <p className="text-xs text-muted-foreground">Required for the site to work. Cannot be disabled.</p>
                        </div>
                        <span className="text-xs text-secondary font-medium bg-secondary/10 px-2 py-0.5 rounded-full">
                          Always on
                        </span>
                      </div>

                      {/* Analytics */}
                      <div className="flex items-center justify-between px-4 py-3">
                        <div>
                          <p className="text-sm font-medium text-foreground">Analytics</p>
                          <p className="text-xs text-muted-foreground">Help us understand how visitors use the site.</p>
                        </div>
                        <button
                          role="switch"
                          aria-checked={analytics}
                          onClick={() => setAnalytics((v) => !v)}
                          className={`relative w-10 h-5 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-secondary ${
                            analytics ? "bg-secondary" : "bg-muted"
                          }`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                              analytics ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Marketing */}
                      <div className="flex items-center justify-between px-4 py-3">
                        <div>
                          <p className="text-sm font-medium text-foreground">Marketing</p>
                          <p className="text-xs text-muted-foreground">Used to show relevant content and measure campaigns.</p>
                        </div>
                        <button
                          role="switch"
                          aria-checked={marketing}
                          onClick={() => setMarketing((v) => !v)}
                          className={`relative w-10 h-5 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-secondary ${
                            marketing ? "bg-secondary" : "bg-muted"
                          }`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                              marketing ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                {/* Reject all, equal prominence */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectAll}
                  className="sm:flex-1"
                >
                  Reject all
                </Button>

                {/* Customise toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExpanded((v) => !v)}
                  className="sm:flex-1 gap-1"
                >
                  {expanded ? (
                    <>
                      <ChevronUp className="w-4 h-4" strokeWidth={ICON_STROKE} />
                      Hide options
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" strokeWidth={ICON_STROKE} />
                      Customise
                    </>
                  )}
                </Button>

                {/* Accept all, same visual weight when expanded; slightly elevated otherwise */}
                {expanded ? (
                  <Button
                    size="sm"
                    onClick={handleSavePreferences}
                    className="sm:flex-1 font-display"
                  >
                    Save preferences
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    onClick={handleAcceptAll}
                    className="sm:flex-1 font-display"
                  >
                    Accept all
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;

