"use client";

import "../../public/guide/engine/diorama.css";

import Script from "next/script";
import { useState } from "react";

declare global {
  interface Window {
    Diorama?: { startCollection(): void };
  }
}

// The engine starts once per document; React may mount this component more than once.
let started = false;

/**
 * Hosts the Diorama collection in `public/guide/` inside the Next.js app.
 *
 * The engine resolves `walkthroughs/<id>.js` against the page URL, so this component must be
 * rendered at `/guide/` (see `trailingSlash` in `next.config.ts`).
 */
export function DioramaShell() {
  const [engineReady, setEngineReady] = useState(false);

  return (
    <>
      <Script src="/guide/engine/diorama.js" onReady={() => setEngineReady(true)} />
      {engineReady && (
        <Script
          src="/guide/collection.js"
          onReady={() => {
            if (started) return;
            started = true;
            window.Diorama?.startCollection();
          }}
        />
      )}
      <noscript>이 안내서를 보려면 JavaScript가 필요해요.</noscript>
    </>
  );
}
