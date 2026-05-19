import server from "../dist/server/server.js";

function normalizeRequestUrl(request) {
  try {
    new URL(request.url);
    return request;
  } catch {
    const protocol = request.headers.get("x-forwarded-proto") || "https";
    const host = request.headers.get("host");
    if (!host) {
      return request;
    }

    const absoluteUrl = `${protocol}://${host}${request.url}`;
    return new Request(absoluteUrl, request);
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
