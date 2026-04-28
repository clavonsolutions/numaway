/**
 * Numaway API server — Digital Ocean Droplet / PM2
 *
 * Plain Node.js HTTP server. No framework dependencies.
 * Deployed to /var/www/numaway-api and managed by PM2.
 *
 * Local development:
 *   npm run server:build   — compile TypeScript to dist-server/
 *   npm run server:start   — run compiled server
 *   (or: npm run server:dev to build + start in one step)
 *
 * Production (Digital Ocean):
 *   pm2 start dist-server/server/index.js --name numaway-api
 *
 * Nginx proxies /api/* to this server on port 3001.
 * The frontend (static files) is served directly by Nginx from dist/.
 *
 * Routes:
 *   POST /api/sage/chat — Sage AI proxy (auth-gated, Anthropic API server-side)
 *   GET  /health        — health check for DO monitoring
 */

import { createServer } from "node:http";
import type { IncomingMessage, ServerResponse } from "node:http";
import { handleSageChat } from "../api/sage/chat";

const PORT = parseInt(process.env.PORT ?? "3001", 10);

// ---------------------------------------------------------------------------
// CORS
// In production, Nginx handles the same-origin case (frontend + API share
// the same domain). CORS headers are needed only for local dev where the
// Vite dev server (port 5173) and API server (port 3001) differ.
// ---------------------------------------------------------------------------
const ALLOWED_ORIGIN =
  process.env.CORS_ORIGIN ??
  (process.env.NODE_ENV === "production" ? null : "*");

function applyCors(req: IncomingMessage, res: ServerResponse): void {
  const origin = req.headers["origin"];
  if (!ALLOWED_ORIGIN) return;
  if (ALLOWED_ORIGIN === "*" || (origin && origin === ALLOWED_ORIGIN)) {
    res.setHeader(
      "Access-Control-Allow-Origin",
      ALLOWED_ORIGIN === "*" ? (origin ?? "*") : origin ?? ALLOWED_ORIGIN
    );
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    res.setHeader("Access-Control-Max-Age", "86400");
  }
}

// ---------------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------------
const server = createServer(
  async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
    try {
      applyCors(req, res);

      // Preflight
      if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
      }

      // Parse pathname separately from query string so routing is not
      // broken by query parameters (e.g. /health?v=1 must still match /health).
      const { pathname } = new URL(
        req.url ?? "/",
        `http://${req.headers["host"] ?? "localhost"}`
      );

      // Health check — used by Digital Ocean health monitor and PM2
      if (pathname === "/health" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "ok" }));
        return;
      }

      // Sage AI proxy
      if (pathname === "/api/sage/chat") {
        await handleSageChat(req, res);
        return;
      }

      // 404
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Not found" }));
    } catch (err) {
      // Catch unexpected errors so the request is always closed and the
      // process does not accumulate unhandled promise rejections.
      console.error(
        "[numaway-api] Unhandled request error:",
        err instanceof Error ? err.message : String(err)
      );
      if (!res.headersSent) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal server error" }));
      }
    }
  }
);

server.on("error", (err: NodeJS.ErrnoException) => {
  if (err.code === "EADDRINUSE") {
    console.error(`[numaway-api] Port ${PORT} is already in use`);
    process.exit(1);
  }
  console.error("[numaway-api] Server error:", err.message);
});

server.listen(PORT, () => {
  process.stdout.write(`[numaway-api] Listening on port ${PORT}\n`);
});
