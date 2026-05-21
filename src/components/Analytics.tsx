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

  return null;
}
