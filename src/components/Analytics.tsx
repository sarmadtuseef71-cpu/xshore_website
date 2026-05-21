import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";

const GA_MEASUREMENT_ID = "G-XERV84CE2G";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function Analytics() {
  const location = useLocation();
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      if (typeof window !== "undefined" && localStorage.getItem("cookie_consent") === "true") {
        setConsentGiven(true);
      }
    };

    checkConsent();

    // Listen for custom event when consent is granted
    const handleConsentEvent = () => setConsentGiven(true);
    if (typeof window !== "undefined") {
      window.addEventListener("cookie_consent_given", handleConsentEvent);
      return () => window.removeEventListener("cookie_consent_given", handleConsentEvent);
    }
  }, []);

  useEffect(() => {
    if (!consentGiven || typeof window === "undefined") return;

    if (!document.getElementById("ga-script")) {
      const script = document.createElement("script");
      script.id = "ga-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_MEASUREMENT_ID, {
        send_page_view: false, // Page view handled below
      });
    }
  }, [consentGiven]);

  useEffect(() => {
    if (!consentGiven || typeof window === "undefined" || !window.gtag) return;

    // Send pageview on route change
    window.gtag("event", "page_view", {
      page_path: location.pathname,
    });
  }, [consentGiven, location.pathname]);

  // Global click tracker for standard CTA events
  useEffect(() => {
    if (!consentGiven || typeof window === "undefined" || !window.gtag) return;

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a, button") as HTMLAnchorElement | HTMLButtonElement | null;
      if (!target) return;

      const href = target.getAttribute("href") || "";
      const text = (target.textContent || "").trim().toLowerCase();

      if (href.startsWith("tel:")) {
        window.gtag("event", "click_call");
      } else if (href.startsWith("mailto:")) {
        window.gtag("event", "click_email");
      } else if (href.includes("wa.me")) {
        window.gtag("event", "click_whatsapp");
      } else if (text === "get a quote") {
        window.gtag("event", "click_get_quote");
      } else if (text === "view equipment") {
        window.gtag("event", "click_view_equipment");
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [consentGiven]);

  return null;
}

export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && window.gtag && localStorage.getItem("cookie_consent") === "true") {
    window.gtag("event", eventName, params);
  }
}
