# explain-ai-agent

기술 배경이 없는 사람에게 LLM, 하네스, AI 에이전트가 무엇이고 어떻게 다른지 설명하는 안내서입니다.
Codex, Claude Code, omp가 그중 어디에 해당하는지도 다룹니다.

## 실행

```bash
pnpm install
pnpm dev
```

`http://localhost:3000/` 을 열면 안내서(`/guide/`)로 이동합니다.

## 구조

| 경로 | 내용 |
|---|---|
| `app/guide/` | 안내서 페이지. `diorama-shell.tsx`가 Diorama 엔진을 React 클라이언트 컴포넌트 안에서 띄웁니다 |
| `public/guide/` | Diorama 컬렉션: 목차(`collection.js`), 워크스루(`walkthroughs/`), 리뷰(`reviews/`), 출처(`sources/`), 엔진(`engine/`) |
| `public/guide/AGENTS.md` | 컬렉션의 독자, 예시 세계, 설명 방식, 작업 규칙 |

안내서의 그림과 단계 이동은 Diorama 엔진(순수 JavaScript)이 그립니다. Next.js는 페이지를 제공하고
엔진을 불러옵니다. `public/guide/index.html`을 브라우저로 직접 열어도 같은 안내서가 열립니다.

엔진은 `walkthroughs/<id>.js`를 페이지 주소 기준으로 찾습니다. 그래서 안내서는 `/guide/`에 있어야
하고, `next.config.ts`의 `trailingSlash: true`가 이를 보장합니다.

## 내용 고치기

워크스루는 `public/guide/walkthroughs/<id>.js` 한 파일이 하나입니다. 고친 뒤에는
`http://localhost:3000/guide/#/<id>/sheet` 에서 자동 점검 결과와 모든 단계의 그림을 확인합니다.
`public/guide/index.html`과 `public/guide/engine/`은 고치지 않습니다.
