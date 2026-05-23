import fs from "node:fs";
import path from "node:path";
import server from "../dist/server/server.js";

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

function getHeader(req, name) {
  const headers = req.headers || {};
  const key = Object.keys(headers).find(
    (k) => k.toLowerCase() === name.toLowerCase()
  );
  const value = key ? headers[key] : undefined;
  return Array.isArray(value) ? value[0] : value;
}

function createAbsoluteUrl(req) {
  const rawUrl = req.url || "/";
  if (rawUrl.startsWith("http://") || rawUrl.startsWith("https://")) {
    return rawUrl;
  }

  const proto = getHeader(req, "x-forwarded-proto") || "https";
  const host =
    getHeader(req, "x-forwarded-host") ||
    getHeader(req, "host");

  if (!host) {
    throw new Error("Missing host header");
  }

  return `${proto}://${host}${rawUrl.startsWith("/") ? rawUrl : `/${rawUrl}`}`;
}

function createFetchHeaders(nodeHeaders) {
  const headers = new Headers();

  for (const [key, value] of Object.entries(nodeHeaders || {})) {
    if (typeof value === "undefined") continue;

    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(key, item);
      }
    } else {
      headers.set(key, String(value));
    }
  }

  return headers;
}

export default async function handler(req, res) {
  try {
    const rawUrl = req.url || "/";
    const pathname = rawUrl.split('?')[0];

    if (
      pathname.startsWith("/assets/") ||
      pathname.startsWith("/images/") ||
      pathname === "/favicon.png" ||
      pathname === "/favicon.ico" ||
      pathname === "/robots.txt" ||
      pathname === "/sitemap.xml"
    ) {
      console.log("Serving static file:", pathname);
      const distClientDir = path.resolve(process.cwd(), "dist/client");
      const requestedPath = path.normalize(path.join(distClientDir, decodeURIComponent(pathname)));
      
      if (!requestedPath.startsWith(distClientDir)) {
        res.statusCode = 403;
        res.end("Forbidden");
        return;
      }

      try {
        const stat = fs.statSync(requestedPath);
        if (stat.isFile()) {
          const ext = path.extname(requestedPath).toLowerCase();
          const contentType = MIME_TYPES[ext] || "application/octet-stream";
          
          res.setHeader("Content-Type", contentType);
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
          
          const fileContent = fs.readFileSync(requestedPath);
          res.statusCode = 200;
          res.end(fileContent);
          return;
        }
      } catch (err) {
        console.log("Static file not found:", requestedPath);
        res.statusCode = 404;
        res.end("Not Found");
        return;
      }
    }

    console.log("Vercel SSR request received:", req.method, req.url);

    const absoluteUrl = createAbsoluteUrl(req);
    console.log("Vercel SSR absolute URL:", absoluteUrl);

    const method = req.method || "GET";
    const headers = createFetchHeaders(req.headers);

    const requestInit = {
      method,
      headers,
    };

    if (method !== "GET" && method !== "HEAD") {
      requestInit.body = req;
      requestInit.duplex = "half";
    }

    const fetchRequest = new Request(absoluteUrl, requestInit);

    const fetchResponse = await server.fetch(fetchRequest);
    console.log("Vercel SSR server.fetch completed:", fetchResponse.status);

    res.statusCode = fetchResponse.status;

    fetchResponse.headers.forEach((value, key) => {
      const lowerKey = key.toLowerCase();

      if (
        lowerKey === "transfer-encoding" ||
        lowerKey === "content-encoding" ||
        lowerKey === "connection"
      ) {
        return;
      }

      res.setHeader(key, value);
    });

    if (method === "HEAD") {
      res.end();
      return;
    }

    const body = Buffer.from(await fetchResponse.arrayBuffer());
    res.end(body);

    console.log("Vercel SSR response sent");
  } catch (error) {
    console.error("Vercel Serverless Handler Error:", error);

    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("content-type", "text/plain; charset=utf-8");
    }

    res.end("Internal Server Error");
  }
}
