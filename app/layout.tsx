import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 에이전트, 처음 만나기",
  description:
    "LLM, 하네스, 에이전트. 헷갈리는 세 이름을 영수증 폴더 하나를 정리하는 이야기로 풀어요.",
};

// The Diorama engine (public/guide/engine/diorama.js) keeps the reader's theme choice under
// this localStorage key and writes it to <html data-theme> once its script has loaded, which
// in Next.js is after hydration. This copy of its first step runs while the HTML is parsed, so
// a saved light or dark choice is in place before the first paint.
const themeScript = `(function(){try{var c=localStorage.getItem("diorama:theme"),r=document.documentElement;if(c!=="light"&&c!=="dark")c=null;r.dataset.theme=c||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");r.dataset.themeChoice=c||"system"}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The theme script and the engine set data-theme on <html>; React keeps them.
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
