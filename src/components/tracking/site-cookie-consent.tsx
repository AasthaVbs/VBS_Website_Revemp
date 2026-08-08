"use client";

import { useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

export function SiteCookieConsent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const consentGiven = getCookieConsentValue("consentCookie");
    if (consentGiven === "true" && typeof window.clarity === "function") {
      window.clarity("consent", true);
    }
  }, []);

  if (!isClient) return null;

  return (
    <CookieConsent
      enableDeclineButton
      flipButtons
      location="bottom"
      buttonText="Accept !"
      declineButtonText="Decline"
      cookieName="consentCookie"
      containerClasses="CookieConsent"
      buttonStyle={{
        color: "#4e503b",
        fontSize: "15px",
        fontWeight: "bold",
        background: "#ffff",
        borderRadius: "5px",
        marginRight: "10px",
      }}
      declineButtonStyle={{
        color: "#fff",
        fontSize: "15px",
        fontWeight: "bold",
        background: "transparent",
        border: "1px solid #fff",
        borderRadius: "5px",
      }}
      expires={150}
      onAccept={() => {
        if (typeof window.clarity === "function") {
          window.clarity("consent", true);
        }
      }}
      onDecline={() => {
        if (typeof window.clarity === "function") {
          window.clarity("consent", false);
        }
      }}
    >
      We use cookies to provide necessary website functionality, improve user experience, and analyze traffic. By using
      our website, you agree to our <a href="/privacy-policy/">Privacy Policy</a>, which includes our Cookies Policy.
    </CookieConsent>
  );
}
