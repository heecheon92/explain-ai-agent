Diorama.walkthrough({
  "id": "permission",
  "title": "허락은 누가 받나",
  "question": "에이전트가 지우면 안 되는 사진을 지우려 하면, 누가 막을까요?",
  "summary": "에이전트가 파일을 지우려는 순간을 따라가며, 누가 멈춰 세우고 누구에게 묻는지 봐요.",
  "minutes": 9,
  "level": "beginner",
  "note": "지민의 하네스와 세 가지 허락 설정은 지어낸 예시예요. 실제 하네스의 설정 이름과 단계는 제품마다 달라요.",
  "sources": [
    { "claim": "Codex에는 언제 멈춰서 사람에게 물어야 하는지를 정하는 승인 설정이 있다.", "kind": "data", "source": "Codex 문서, ‘Agent approvals & security’, ‘Sandbox and approvals’ 절", "url": "https://learn.chatgpt.com/docs/agent-approvals-security" },
    { "claim": "Codex에는 승인 설정과 별도로, 건드릴 수 있는 범위를 막아 두는 샌드박스가 있다.", "kind": "data", "source": "Codex 문서, ‘Agent approvals & security’, ‘Sandbox and approvals’ 절", "url": "https://learn.chatgpt.com/docs/agent-approvals-security" },
    { "claim": "Claude Code의 Manual 방식은 파일을 고치거나 명령을 실행하는 대부분의 행동 전에 멈춰서 묻는다.", "kind": "data", "source": "Claude Code 문서, ‘Choose a permission mode’ 머리말", "url": "https://code.claude.com/docs/en/permission-modes" },
    { "claim": "Claude Code는 기본 규칙에서 작업 폴더 안의 파일 읽기를 묻지 않고 한다.", "kind": "data", "source": "Claude Code 문서, ‘Choose a permission mode’, ‘Available modes’ 표", "url": "https://code.claude.com/docs/en/permission-modes" },
    { "claim": "Claude Code에서 묻기를 건너뛰는 방식에서도 일부 행동은 여전히 묻거나 막힌다.", "kind": "data", "source": "Claude Code 문서, ‘Choose a permission mode’, ‘Actions no mode auto-approves’ 절", "url": "https://code.claude.com/docs/en/permission-modes" },
    { "claim": "Codex와 Claude Code에는 둘 다, 사람 대신 모델이 행동을 살펴보게 하는 방식이 있다.", "kind": "data", "source": "Codex 문서 ‘Common sandbox and approval combinations’의 Auto-review; Claude Code 문서 ‘Choose a permission mode’ 머리말", "url": "https://learn.chatgpt.com/docs/agent-approvals-security" },
    { "claim": "Claude Code에도 명령이 닿는 범위를 막아 두는 샌드박스가 있다.", "kind": "data", "source": "Claude Code 문서, ‘Choose a permission mode’, ‘Common setups’ 절", "url": "https://code.claude.com/docs/en/permission-modes" },
    { "claim": "스스로 일하는 에이전트는 잘못이 쌓일 수 있어, 안전장치를 두라고 권한다.", "kind": "data", "source": "Anthropic, ‘Building effective agents’, ‘Agents’ 절", "url": "https://www.anthropic.com/research/building-effective-agents" },
    { "claim": "영수증 사진은 처음에 12개다.", "kind": "assumption", "source": "이 안내서를 위해 지어낸 예시예요." },
    { "claim": "쪽지 7장: 보기 1, 폴더 만들기 1, 옮기기 3, 지우기 1, 다시 보기 1.", "kind": "assumption", "source": "앞 편의 왕복 6번에 지우기 1장을 더한 예시예요." },
    { "claim": "LLM은 이름만 보고 3개를 중복으로 본다. 2개는 진짜 중복이고 1개는 같은 날의 다른 영수증이다.", "kind": "assumption", "source": "이 안내서를 위해 지어낸 예시예요." },
    { "claim": "지민의 하네스에는 허락 설정이 셋 있다: 바꿀 때마다 묻기, 지울 때만 묻기, 안 묻기.", "kind": "assumption", "source": "Codex와 Claude Code의 설정을 쉽게 줄여 지어낸 예시예요." },
    { "claim": "지민은 물음을 받을 때마다 확인하고 옳게 답한다.", "kind": "assumption", "source": "비교하기 쉽게 정한 약속이에요." }
  ],
  "goals": [
    { "text": "에이전트도 틀릴 수 있음을", "step": 3 },
    { "text": "멈춰 세우는 것이 하네스임을", "step": 4 },
    { "text": "하네스가 묻고 사람이 정함을", "step": 6 },
    { "text": "묻는 정도가 고르는 설정임을", "step": 8 },
    { "text": "실제 하네스에도 비슷한 설정이 있음을", "step": 9 }
  ],
  "metrics": [
    { "id": "auto", "label": "묻지 않고 처리한 쪽지", "unit": "장", "icon": "bolt" },
    { "id": "asked", "label": "묻고 처리한 쪽지", "unit": "장", "icon": "shield" },
    { "id": "total", "label": "처리한 쪽지", "unit": "장", "icon": "mail" }
  ],
  "legend": [
    { "kind": "request", "label": "지민과 하네스가 주고받는 글" },
    { "kind": "message", "label": "LLM의 쪽지와 실행" },
    { "kind": "response", "label": "돌아오는 결과" },
    { "kind": "write", "label": "지우기" }
  ],
  "nodes": {
    "laptop": { "type": "zone", "x": 2, "y": -7.5, "w": 20, "h": 13, "color": "yellow", "label": "지민의 노트북" },
    "jimin": { "type": "actor", "x": 8, "y": -19, "color": "gray", "label": "지민", "sub": "꽃집 사장" },
    "harness": { "type": "block", "x": 8, "y": -10, "color": "blue", "glyph": "shield", "label": "하네스", "sub": "노트북의 프로그램" },
    "folder": { "type": "db", "x": -1, "y": -10, "color": "violet", "glyph": "file", "label": "영수증 폴더", "sub": "영수증 사진" },
    "llm": { "type": "block", "x": 8, "y": 4, "color": "orange", "glyph": "chip", "label": "LLM", "sub": "AI 회사의 컴퓨터" }
  },
  "links": {
    "type": { "from": "jimin", "to": "harness", "label": "부탁" },
    "confirm": { "from": "harness", "to": "jimin", "label": "지워도 될까요?" },
    "reply": { "from": "llm", "to": "harness", "label": "쪽지" },
    "act": { "from": "harness", "to": "folder", "label": "실행" }
  },
  "steps": [
    {
      "short": "새 부탁",
      "chapter": "setup",
      "title": "부탁이 하나 늘었어요",
      "body": [
        "지민이 이번에는 한 가지를 더 부탁해요. <em>“영수증 폴더를 월별로 정리하고, 중복된 사진은 지워 줘.”</em>",
        "폴더는 다시 사진 12개가 뒤섞인 처음 모습이에요. 정리는 지난번에 봤으니, 이번에는 <b>지우기</b>에서 무슨 일이 일어나는지 봐요."
      ],
      "callout": { "kind": "tip", "text": "하네스가 처리한 쪽지 가운데, 지민에게 먼저 물은 쪽지가 몇 장인지 세어 봐요." },
      "metrics": { "auto": null, "asked": null, "total": null },
      "scene": {
        "show": ["laptop", "jimin", "folder"],
        "state": { "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] } },
        "links": {},
        "flows": [],
        "panel": null
      }
    },
    {
      "short": "쪽지 5장",
      "chapter": "technique",
      "title": "다섯 장까지는 지난번과 같아요",
      "body": [
        "에이전트가 일을 시작해요. LLM의 쪽지 다섯 장은 지난번과 같아요. 폴더 보기 1장, 월별 폴더 만들기 1장, 사진 옮기기 3장이에요.",
        "하네스는 다섯 장을 모두 묻지 않고 처리했어요. 사진 12개가 월별로 들어갔어요. 지민은 그동안 가게 일을 봤어요."
      ],
      "changes": ["+ 하네스, LLM", "~ 폴더: 12개 월별 정리", "~ 묻지 않고 처리한 쪽지 5장 (다섯 번을 한 장면으로 모음)"],
      "metrics": { "auto": 5, "asked": null, "total": 5 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": { "folder": { "tags": [{ "text": "12개 · 월별 정리", "tone": "green" }] } },
        "links": { "type": { "style": "dashed" }, "reply": { "label": "쪽지 5장" }, "act": {} },
        "flows": [{ "route": ["reply", "act"], "kind": "message", "bounce": true, "rate": 1 }],
        "panel": null
      }
    },
    {
      "short": "지워 줘",
      "chapter": "problem",
      "title": "여섯 번째 쪽지: 3개를 지워 줘",
      "body": [
        "LLM은 파일 이름을 훑어보고 3개를 중복으로 봤어요. <code>0312_화분(1).jpg</code>처럼 같은 날짜, 같은 이름에 숫자만 붙은 것들이에요.",
        "그래서 여섯 번째 쪽지를 써요. <em>“이 3개를 지워 줘.”</em> 쪽지는 하네스에 도착했고, 아직 아무것도 지워지지 않았어요."
      ],
      "changes": ["~ 쪽지: 3개 지워 줘", "~ LLM: 중복으로 본 것 3개", "~ 하네스 → 폴더: 아직 실행 전"],
      "metrics": { "auto": 5, "asked": null, "total": 5 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 월별 정리", "tone": "green" }] },
          "llm": { "tags": [{ "text": "중복으로 봄 3개", "tone": "amber" }] }
        },
        "links": { "type": { "style": "dashed" }, "reply": { "label": "쪽지: 3개 지워 줘" }, "act": { "style": "dashed", "label": "" } },
        "flows": [{ "route": ["reply"], "kind": "message", "rate": 0.6 }],
        "panel": null
      }
    },
    {
      "short": "틀린 판단",
      "chapter": "problem",
      "title": "그중 하나는 중복이 아니에요",
      "body": [
        "3개 가운데 2개는 정말 같은 사진이에요. 하지만 1개는 달라요. 지민이 같은 날 화분을 한 번 더 사고 받은 다른 영수증이에요.",
        "LLM은 사진을 열어 보지 않고 이름만 보고 판단했어요. 이 쪽지가 그대로 실행되면 영수증 1개가 사라져요."
      ],
      "callout": { "kind": "warn", "text": "LLM의 쪽지는 틀릴 수 있어요. 알아서 일하는 에이전트일수록 틀린 쪽지가 그대로 실행될 수 있어요." },
      "changes": ["~ 폴더: 진짜 중복 2개, 다른 영수증 1개", "~ 폴더에 붉은 빛: 위험한 곳"],
      "metrics": { "auto": 5, "asked": null, "total": 5 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": {
          "folder": { "heat": 0.6, "tags": [{ "text": "중복 2 · 다른 영수증 1", "tone": "red" }] },
          "llm": { "tags": [{ "text": "중복으로 봄 3개", "tone": "amber" }] }
        },
        "links": { "type": { "style": "dashed" }, "reply": { "style": "dashed", "label": "쪽지: 3개 지워 줘" }, "act": { "style": "dashed", "label": "" } },
        "flows": [],
        "panel": null
      }
    },
    {
      "short": "멈춤",
      "chapter": "technique",
      "title": "하네스가 쪽지를 붙잡아요",
      "body": [
        "하네스는 쪽지를 실행하기 전에 자기 <span class=\"term\">허락 설정</span>, 곧 어떤 일을 묻지 않고 해도 되는지 적어 둔 규칙을 봐요.",
        "지민의 하네스는 보기, 만들기, 옮기기는 그냥 하고 <b>지우기는 물어보게</b> 되어 있어요. 그래서 여섯 번째 쪽지를 들고 멈춰요."
      ],
      "callout": { "kind": "insight", "text": "멈추는 것은 하네스예요. LLM은 쪽지를 썼을 뿐이고, 자기 쪽지가 붙잡혔는지도 하네스가 알려 줘야 알아요." },
      "changes": ["~ 하네스: 멈춤, 지우기는 물어봄", "~ 하네스 → 폴더: 막힘"],
      "metrics": { "auto": 5, "asked": null, "total": 5 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "중복 2 · 다른 영수증 1", "tone": "red" }] },
          "harness": { "heat": 0.4, "tags": [{ "text": "멈춤 · 지우기는 물어봄", "tone": "amber" }] }
        },
        "links": { "type": { "style": "dashed" }, "reply": { "style": "dashed", "label": "쪽지: 3개 지워 줘" }, "act": { "style": "off", "label": "" } },
        "flows": [],
        "panel": null
      }
    },
    {
      "short": "묻기",
      "chapter": "technique",
      "title": "하네스가 지민에게 물어요",
      "body": [
        "하네스가 지민의 화면에 물음을 띄워요. <em>“이 3개를 지워도 될까요?”</em> 지울 사진 3장도 함께 보여 줘요.",
        "가게 일을 보던 지민이 사진을 열어 봐요. 두 장은 정말 같은 사진인데, 한 장은 금액이 달라요. 그날 화분을 한 번 더 사고 받은 영수증이에요."
      ],
      "changes": ["+ 하네스 → 지민: 3개 지워도 될까요?", "~ 하네스: 지민의 답을 기다림"],
      "metrics": { "auto": 5, "asked": null, "total": 5 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "중복 2 · 다른 영수증 1", "tone": "red" }] },
          "harness": { "tags": [{ "text": "지민의 답을 기다림", "tone": "amber" }] }
        },
        "links": { "confirm": { "label": "3개 지워도 될까요?" }, "reply": { "style": "dashed", "label": "" }, "act": { "style": "off", "label": "" } },
        "flows": [{ "route": ["confirm"], "kind": "request", "rate": 0.6 }],
        "panel": null
      }
    },
    {
      "short": "2개만",
      "chapter": "solution",
      "title": "지민이 2개만 허락해요",
      "body": [
        "지민이 답해요. <em>“2개만 지워요. 나머지 하나는 다른 영수증이에요.”</em> 하네스는 허락받은 2개만 지워요.",
        "폴더에는 10개가 남았고, 다른 영수증은 무사해요. 여섯 번째 쪽지는 <b>묻고 처리한 쪽지</b> 1장이 됐어요."
      ],
      "changes": ["~ 지민 → 하네스: 2개만 지워요", "~ 하네스 → 폴더: 지우기, 10개 남음", "~ 묻고 처리한 쪽지 1장"],
      "metrics": { "auto": 5, "asked": 1, "total": 6 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "10개 남음 · 영수증 무사", "tone": "green" }] },
          "harness": { "tags": [{ "text": "허락받은 2개만 지움", "tone": "green" }] }
        },
        "links": { "type": { "label": "2개만 지워요" }, "reply": { "style": "dashed", "label": "" }, "act": { "label": "지우기" } },
        "flows": [{ "route": ["type"], "kind": "request", "rate": 0.6 }, { "route": ["act"], "kind": "write", "rate": 0.6 }],
        "panel": null
      }
    },
    {
      "short": "마무리",
      "chapter": "technique",
      "title": "나머지는 다시 알아서 해요",
      "body": [
        "하네스는 결과를 LLM에게 알려 줘요. 2개는 지웠고 1개는 지민이 남기라고 했다고요. LLM은 일곱 번째 쪽지로 폴더를 다시 보여 달라고 해요.",
        "보기는 묻지 않아도 되는 일이라 하네스가 바로 처리해요. 쪽지 7장 가운데 묻지 않고 한 것이 6장, 묻고 처리한 것이 <b>1장</b>이에요."
      ],
      "changes": ["~ 쪽지: 폴더 다시 보여 줘", "~ LLM: 2개 지움, 1개 남김을 들음", "~ 묻지 않고 처리한 쪽지 5 → 6장"],
      "metrics": { "auto": 6, "asked": 1, "total": 7 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "10개 남음 · 영수증 무사", "tone": "green" }] },
          "llm": { "tags": [{ "text": "들음: 2개 지움, 1개 남김", "tone": "green" }] }
        },
        "links": { "type": { "style": "dashed", "label": "" }, "reply": { "label": "쪽지: 다시 보여 줘" }, "act": { "label": "보기" } },
        "flows": [{ "route": ["reply", "act"], "kind": "message", "bounce": true, "rate": 0.5 }],
        "panel": null
      }
    },
    {
      "short": "설정",
      "chapter": "problem",
      "title": "묻는 정도를 바꿔 봐요",
      "body": [
        "하네스가 언제 물을지는 지민이 고르는 설정이에요. 같은 쪽지 7장을, 설정만 바꿔서 처음부터 다시 처리해 봐요.",
        "무엇이든 바꿀 때마다 묻기, 지울 때만 묻기, 안 묻기. 지민에게 묻는 횟수와 폴더에 남는 사진 수를 견줘 보세요."
      ],
      "changes": ["~ 처음으로: 폴더 12개 뒤섞임, 허락 설정 미정 (고르기 전)"],
      "metrics": { "auto": null, "asked": null, "total": null },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] },
          "harness": { "tags": [{ "text": "허락 설정 ?", "tone": "paper" }] }
        },
        "links": { "type": { "style": "dashed", "label": "" }, "reply": { "style": "dashed", "label": "쪽지 7장" }, "act": { "style": "dashed", "label": "" } },
        "flows": [],
        "panel": null
      },
      "try": {
        "prompt": "하네스가 언제 물을지 고르세요.",
        "options": [
          {
            "label": "바꿀 때마다",
            "verdict": { "tone": "amber", "text": "5번 멈춰서 물음", "why": "폴더 만들기 1번, 옮기기 3번, 지우기 1번에 각각 멈춰서 모두 5번 묻고, 그때마다 일이 지민의 답을 기다려요." },
            "metrics": { "auto": 2, "asked": 5, "total": 7 },
            "scene": {
              "state": {
                "folder": { "tags": [{ "text": "10개 남음 · 영수증 무사", "tone": "green" }] },
                "harness": { "tags": [{ "text": "바꿀 때마다 · 5번 물음", "tone": "amber" }] }
              },
              "links": { "confirm": { "label": "해도 될까요? 5번" }, "reply": { "label": "쪽지 7장" }, "act": {} },
              "flows": [{ "route": ["confirm"], "kind": "request", "rate": 1.4 }, { "route": ["reply", "act"], "kind": "message", "bounce": true, "rate": 0.6 }]
            }
          },
          {
            "label": "지울 때만",
            "verdict": { "tone": "green", "text": "1번 묻고 지킴", "why": "되돌리기 어려운 지우기 1장에서만 멈춰, 다른 영수증 1개를 지켰어요." },
            "metrics": { "auto": 6, "asked": 1, "total": 7 },
            "scene": {
              "state": {
                "folder": { "tags": [{ "text": "10개 남음 · 영수증 무사", "tone": "green" }] },
                "harness": { "tags": [{ "text": "지울 때만 · 1번 물음", "tone": "green" }] }
              },
              "links": { "confirm": { "label": "지워도 될까요? 1번" }, "reply": { "label": "쪽지 7장" }, "act": {} },
              "flows": [{ "route": ["confirm"], "kind": "request", "rate": 0.3 }, { "route": ["reply", "act"], "kind": "message", "bounce": true, "rate": 0.6 }]
            }
          },
          {
            "label": "안 묻기",
            "verdict": { "tone": "red", "text": "영수증 1개 사라짐", "why": "0번 물어서 3개가 모두 지워졌고, 중복이 아닌 영수증 1개도 사라졌어요." },
            "metrics": { "auto": 7, "asked": 0, "total": 7 },
            "scene": {
              "state": {
                "folder": { "heat": 0.7, "tags": [{ "text": "9개 · 영수증 1개 잃음", "tone": "red" }] },
                "harness": { "tags": [{ "text": "안 묻기 · 0번 물음", "tone": "red" }] }
              },
              "links": { "type": { "style": "dashed", "label": "" }, "reply": { "label": "쪽지 7장" }, "act": {} },
              "flows": [{ "route": ["reply", "act"], "kind": "message", "bounce": true, "rate": 0.6 }]
            }
          }
        ]
      }
    },
    {
      "short": "실제 설정",
      "chapter": "insight",
      "title": "실제 하네스에도 비슷한 설정이 있어요",
      "body": [
        "이제 지울 때만 물었던 원래 이야기로 돌아와요. ChatGPT의 Codex에도, Codex와 같은 종류인 Claude Code에도 언제 멈춰서 물을지 정하는 설정이 있어요. 자주 묻는 방식부터 거의 묻지 않는 방식까지 여러 단계예요.",
        "두 프로그램 모두 <span class=\"term\">샌드박스</span>, 곧 건드릴 수 있는 범위를 미리 막아 두는 울타리도 쓸 수 있어요. 그래서 묻지 않아도 아예 못 하는 일이 있어요. 멈추고 막는 것은 하네스이고, 규칙을 고르는 것은 쓰는 사람이나 회사예요."
      ],
      "callout": { "kind": "tip", "text": "Codex와 Claude Code에는 사람 대신 또 다른 모델이 행동을 살펴보게 하는 방식도 있어요. 묻는 횟수는 줄이고 위험한 일은 걸러 내려는 것이에요." },
      "changes": ["~ 하네스: 언제 묻나, 어디까지 닿나", "~ 폴더: 지울 때만 묻기의 결과로 돌아옴"],
      "metrics": { "auto": 6, "asked": 1, "total": 7 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "10개 남음 · 영수증 무사", "tone": "green" }] },
          "harness": { "tags": [{ "text": "언제 묻나 · 어디까지 닿나", "tone": "violet" }] }
        },
        "links": { "type": { "style": "dashed", "label": "" }, "reply": { "style": "dashed", "label": "" }, "act": { "style": "dashed", "label": "" } },
        "flows": [],
        "panel": null
      }
    },
    {
      "short": "정리",
      "chapter": "recap",
      "title": "쪽지 7장 가운데 1번 물었어요",
      "body": [
        "하네스는 쪽지 7장 가운데 6장을 묻지 않고 처리했고, 지우기 <b>1장</b>에서 멈춰 지민에게 물었어요. 그 한 번이 영수증 1개를 지켰어요.",
        "<ul class=\"takeaways\"><li>멈추고 묻는 것은 <b>하네스</b>예요. LLM은 쪽지를 쓸 뿐이에요.</li><li>LLM의 쪽지는 <b>틀릴 수 있어요</b>. 이름만 보고 중복으로 본 3개 가운데 1개는 아니었어요.</li><li>얼마나 물을지는 <b>고르는 설정</b>이에요. ChatGPT의 Codex에도 Claude Code에도 있어요.</li><li>너무 자주 물으면 일이 자꾸 멈추고, 이 예에서 안 묻기로 두면 <b>잘못 고른 사진</b>도 지워져요.</li></ul>"
      ],
      "callout": { "kind": "next", "text": "<b>같은 두뇌, 다른 작업실</b>: ChatGPT의 Codex, Claude Code, omp. 하네스가 다르면 무엇이 달라질까요?" },
      "metrics": { "auto": 6, "asked": 1, "total": 7 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "10개 남음 · 영수증 무사", "tone": "green" }] },
          "harness": { "tags": [{ "text": "지울 때만 · 1번 물음", "tone": "green" }] }
        },
        "links": { "type": { "style": "dashed", "label": "" }, "reply": { "style": "dashed", "label": "쪽지 7장" }, "act": { "style": "dashed", "label": "" } },
        "flows": [],
        "panel": { "title": "쪽지 7장", "lines": ["묻지 않고 처리한 쪽지  6장", "묻고 처리한 쪽지  1장", "= 처리한 쪽지  7장"] }
      }
    }
  ]
});
