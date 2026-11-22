import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 에이전트, 처음 만나기",
  description:
    "LLM, 하네스, 에이전트. 헷갈리는 세 이름을 영수증 폴더 하나를 정리하는 이야기로 풀어요.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
