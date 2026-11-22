Diorama.collection({
  "id": "ai-agent-first-steps",
  "title": "AI 에이전트, 처음 만나기",
  "summary": "LLM, 하네스, 에이전트. 헷갈리는 세 이름을 영수증 폴더 하나를 정리하는 이야기로 풀어요.",
  "note": "꽃집 사장 지민과 영수증 12개는 지어낸 예시예요. 사실과 숫자의 출처는 각 워크스루 아래 ‘출처’에 있어요.",
  "options": { "ordered": true, "progress": true, "showPlanned": true, "showDrafts": true },
  "labels": {
    "goals": "배울 내용",
    "strip": "이야기의 순서",
    "changes": "달라진 점",
    "next": "다음",
    "back": "이전",
    "restart": "처음부터",
    "sources": "출처",
    "sourced": "출처 있음",
    "assumed": "가정",
    "try": "직접 해 보기",
    "reset": "되돌리기",
    "sections": "목차",
    "home": "전체 보기",
    "continue": "이어 보기",
    "planned": "준비 중",
    "draft": "초안",
    "chapters": {
      "setup": "상황",
      "problem": "문제",
      "technique": "원리",
      "solution": "해결",
      "insight": "핵심",
      "tradeoff": "대가",
      "recap": "정리"
    }
  },
  "sections": [
    {
      "id": "three-names",
      "title": "세 가지 이름",
      "items": [
        {
          "id": "llm",
          "title": "글만 쓰는 기계, LLM",
          "summary": "지민의 부탁 한 줄을 따라가며, 좋은 답을 받고도 파일이 그대로인 이유를 알아봐요.",
          "status": "approved",
          "minutes": 8,
          "level": "beginner"
        },
        {
          "id": "harness",
          "title": "LLM에게 손을 달다",
          "summary": "LLM이 쓴 쪽지 한 장이 노트북에서 실제 행동이 되기까지, 하네스가 하는 일을 따라가요.",
          "status": "approved",
          "minutes": 8,
          "level": "beginner"
        },
        {
          "id": "agent",
          "title": "끝날 때까지 되풀이",
          "summary": "부탁 한 번 뒤에 쪽지와 결과가 오가는 횟수를 세어 보고, 이렇게 일하는 둘에 붙는 이름을 알아봐요.",
          "status": "approved",
          "minutes": 9,
          "level": "beginner"
        }
      ]
    },
    {
      "id": "harness-work",
      "title": "하네스가 하는 일",
      "items": [
        {
          "id": "permission",
          "title": "허락은 누가 받나",
          "summary": "에이전트가 파일을 지우려는 순간을 따라가며, 누가 멈춰 세우고 누구에게 묻는지 봐요.",
          "status": "approved",
          "minutes": 9,
          "level": "beginner"
        },
        {
          "id": "harnesses",
          "title": "같은 두뇌, 다른 작업실",
          "summary": "ChatGPT의 Codex, Claude Code, omp가 무엇이 같고 다른지, 도구 하나만 바꾼 실험으로 알아봐요.",
          "status": "approved",
          "minutes": 9,
          "level": "beginner"
        }
      ]
    }
  ]
});
