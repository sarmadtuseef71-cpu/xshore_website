import server from "../dist/server/server.js";

function getHeader(headers, name) {
  if (!headers) return undefined;

  if (typeof headers.get === "function") {
    return headers.get(name);
  }

  const lowerName = name.toLowerCase();
  const key = Object.keys(headers).find(
    (k) => k.toLowerCase() === lowerName
  );

  const value = key ? headers[key] : undefined;

  if (Array.isArray(value)) return value[0];
  return value;
}

function makeAbsoluteUrl(request) {
  const rawUrl = request.url || "/";

  if (rawUrl.startsWith("http://") || rawUrl.startsWith("https://")) {
    return rawUrl;
  }

  const proto = getHeader(request.headers, "x-forwarded-proto") || "https";
  const host =
    getHeader(request.headers, "x-forwarded-host") ||
    getHeader(request.headers, "host");

  if (!host) {
    throw new Error("Missing host header for Vercel request URL normalization");
  }

  return `${proto}://${host}${rawUrl.startsWith("/") ? rawUrl : `/${rawUrl}`}`;
}

function normalizeRequestUrl(request) {
  try {
    const absoluteUrl = makeAbsoluteUrl(request);
    if (absoluteUrl === request.url) {
      return request;
    }
    return new Request(absoluteUrl, request);
  } catch (error) {
    console.error("Error during request URL normalization:", error);
    return request;
  }
}

export default async function handler(request) {
  try {
    const normalizedRequest = normalizeRequestUrl(request);
    return await server.fetch(normalizedRequest);
  } catch (error) {
    console.error("Vercel Serverless Handler Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
