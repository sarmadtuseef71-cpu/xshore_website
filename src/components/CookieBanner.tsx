import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "var(--bg3)",
        borderTop: "1px solid var(--border)",
        padding: "16px 24px",
        zIndex: 9999,
        boxShadow: "0 -4px 12px rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <p style={{ margin: 0, fontSize: "14px", color: "var(--text-dim)", lineHeight: 1.5, flex: "1 1 300px" }}>
          We use cookies to improve your experience and for analytics. By continuing to browse, you agree to our{" "}
          <Link to="/privacy-policy" style={{ color: "var(--gold)", textDecoration: "underline" }}>
            Privacy Policy
          </Link>.
        </p>
        <button
          onClick={acceptCookies}
          style={{
            background: "var(--gold)",
            color: "#000",
            border: "none",
            padding: "8px 24px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            borderRadius: "2px",
            whiteSpace: "nowrap",
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
