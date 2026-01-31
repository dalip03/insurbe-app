// lib/cookieConsent.ts

export type CookieConsentStatus = "accepted" | "rejected" | null;

const CONSENT_KEY = "insurbe_cookie_consent";

export function getCookieConsent(): CookieConsentStatus {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CONSENT_KEY) as CookieConsentStatus;
}

export function setCookieConsent(status: "accepted" | "rejected") {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_KEY, status);
}
