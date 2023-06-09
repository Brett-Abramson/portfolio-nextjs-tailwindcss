"use client";

import { getLocalStorage, setLocalStorage } from "@/lib/ga/localStorage";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieBanner() {

    const [cookieConsent, setCookieConsent] = useState(false)
    
    //  grabs users cookie prefrences 
    useEffect(() => {
        // fetches cookie consent from local storage or null if not found
        const storedCookieConsent = getLocalStorage("cookie_consent", null)
        // set's state to pre-stored value
        setCookieConsent(storedCookieConsent)
    }, [setCookieConsent])
    
    //  update gtag's consent 
    useEffect(() => {
        const newValue = cookieConsent ? "granted" : "denied"

        window.gtag("consent", "update", {
            "analytics_storage": newValue
        })

        setLocalStorage("cookie_consent", cookieConsent)

        // For Testing
        console.log("Cookie Consent: ", cookieConsent)
    }, [cookieConsent])
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 mx-auto my-10 ${cookieConsent != null ? "hidden" : "flex"} max-w-max flex-col items-center justify-between gap-4 rounded-lg bg-slate-800 px-3 py-3 shadow sm:flex-row md:max-w-screen-sm md:px-4`}
    >
      <div className="text-center text-slate-50">
        <Link href="#">
          <p>
            There&apos;s a <span className="font-bold text-sky-400">cookie</span> on
            this site.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button className="rounded-md bg-gray-900 px-5 py-2 text-gray-300" onClick={() => setCookieConsent(false)}>
          Decline
        </button>
        <button className="rounded-lg bg-gray-900 px-5 py-2 text-white" onClick={() => setCookieConsent(true)}>
          Allow Cookie
        </button>
      </div>
    </div>
  );
}
