Diorama.walkthrough({
  "id": "harness",
  "title": "LLM에게 손을 달다",
  "question": "LLM은 글만 쓰는데, 폴더를 열고 사진을 옮기는 것은 누구일까요?",
  "summary": "LLM이 쓴 쪽지 한 장이 노트북에서 실제 행동이 되기까지, 하네스가 하는 일을 따라가요.",
  "minutes": 8,
  "level": "beginner",
  "note": "지민의 하네스와 도구 이름은 쉽게 바꾼 예시예요. 실제 하네스인 Claude Code에는 파일 읽기, 파일 고치기, 명령 실행 같은 도구가 있어요.",
  "sources": [
    { "claim": "Claude Code는 모델을 둘러싸고 도구를 주는 층이고, 이런 층을 하네스라고 부른다.", "kind": "data", "source": "Claude Code 문서, ‘How Claude Code works’, ‘The agentic loop’ 절", "url": "https://code.claude.com/docs/en/how-claude-code-works" },
    { "claim": "OpenAI도 Codex에서 되풀이와 실행을 맡는 부분을 하네스라고 부른다.", "kind": "data", "source": "OpenAI, ‘Unrolling the Codex agent loop’ 머리말", "url": "https://openai.com/index/unrolling-the-codex-agent-loop/" },
    { "claim": "Codex는 ChatGPT 데스크톱 앱에 들어 있고, 노트북의 폴더와 개발 도구를 다룰 수 있다.", "kind": "data", "source": "OpenAI 도움말, ‘ChatGPT Work and Codex’", "url": "https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex" },
    { "claim": "Codex는 모델에게 요청을 보낼 때, 모델이 부탁할 수 있는 도구 목록을 함께 보낸다.", "kind": "data", "source": "OpenAI, ‘Unrolling the Codex agent loop’, ‘Building the initial prompt’ 절", "url": "https://openai.com/index/unrolling-the-codex-agent-loop/" },
    { "claim": "모델은 답을 쓰거나 도구 실행을 부탁하고, 하네스가 실행해서 결과를 모델에게 다시 보낸다.", "kind": "data", "source": "OpenAI, ‘Unrolling the Codex agent loop’, ‘The agent loop’ 절", "url": "https://openai.com/index/unrolling-the-codex-agent-loop/" },
    { "claim": "모델이 도구를 쓰려 할 때의 응답에는 보통의 글과 구별되는 도구 사용 부분이 들어 있다.", "kind": "data", "source": "Anthropic, ‘Building effective agents’, 부록 2", "url": "https://www.anthropic.com/research/building-effective-agents" },
    { "claim": "Claude Code는 실행한 폴더의 파일을 읽고 고칠 수 있고, 도구에는 파일 읽기와 고치기, 명령 실행 등이 있다.", "kind": "data", "source": "Claude Code 문서, ‘How Claude Code works’, ‘What Claude can access’와 ‘Tools’ 절", "url": "https://code.claude.com/docs/en/how-claude-code-works" },
    { "claim": "Claude Code에서 도구가 없으면 Claude는 글로만 응답할 수 있다.", "kind": "data", "source": "Claude Code 문서, ‘How Claude Code works’, ‘Tools’ 절", "url": "https://code.claude.com/docs/en/how-claude-code-works" },
    { "claim": "영수증 사진은 12개이고, 그중 하나의 이름이 0312_화분.jpg다.", "kind": "assumption", "source": "이 안내서를 위해 지어낸 예시예요." },
    { "claim": "지민의 하네스는 지민의 노트북에 있고 도구가 2개 있다: 폴더 보기, 파일 옮기기.", "kind": "assumption", "source": "쉽게 줄인 예시예요. 하네스가 꼭 노트북에서 돌아야 하는 것은 아니에요." },
    { "claim": "파일 옮기기는 넣을 폴더가 없으면 만들어서 옮기고, 이것을 한 번의 일로 센다.", "kind": "assumption", "source": "세기 쉽게 정한 약속이에요." },
    { "claim": "이 예에서 도구가 없으면 LLM은 정리 방법을 답으로 쓰고, 보기 도구만 있으면 사진은 옮겨지지 않는다.", "kind": "assumption", "source": "지어낸 결과예요. 실제 LLM은 되묻는 등 다르게 답할 수도 있어요." }
  ],
  "goals": [
    { "text": "하네스가 무엇을 하는 프로그램인지", "step": 1 },
    { "text": "하네스가 도구 목록을 보내는 까닭", "step": 2 },
    { "text": "LLM의 쪽지도 글일 뿐임을", "step": 3 },
    { "text": "폴더에 실제로 닿는 것이 누구인지", "step": 4 },
    { "text": "LLM이 폴더 안을 알게 되는 길", "step": 5 },
    { "text": "도구에 없는 일은 못 함을", "step": 8 }
  ],
  "metrics": [
    { "id": "llm", "label": "LLM이 폴더에 한 일", "unit": "번", "icon": "chip" },
    { "id": "harness", "label": "하네스가 폴더에 한 일", "unit": "번", "icon": "gear" },
    { "id": "total", "label": "폴더에서 일어난 일", "unit": "번", "icon": "file" }
  ],
  "legend": [
    { "kind": "request", "label": "보내는 글 (부탁, 결과)" },
    { "kind": "message", "label": "LLM의 쪽지" },
    { "kind": "response", "label": "LLM의 답" },
    { "kind": "signal", "label": "폴더 보기" },
    { "kind": "write", "label": "파일 옮기기" }
  ],
  "nodes": {
    "laptop": { "type": "zone", "x": 2, "y": -7.5, "w": 20, "h": 13, "color": "yellow", "label": "지민의 노트북" },
    "jimin": { "type": "actor", "x": 8, "y": -19, "color": "gray", "label": "지민", "sub": "꽃집 사장" },
    "harness": { "type": "block", "x": 8, "y": -10, "color": "blue", "glyph": "gear", "label": "하네스", "sub": "지민이 설치한 프로그램" },
    "folder": { "type": "db", "x": -1, "y": -10, "color": "violet", "glyph": "file", "label": "영수증 폴더", "sub": "사진 12개" },
    "llm": { "type": "block", "x": 8, "y": 4, "color": "orange", "glyph": "chip", "label": "LLM", "sub": "AI 회사의 컴퓨터" }
  },
  "links": {
    "type": { "from": "jimin", "to": "harness", "label": "부탁 한 줄" },
    "send": { "from": "harness", "to": "llm", "label": "부탁 + 도구 목록" },
    "reply": { "from": "llm", "to": "harness", "label": "쪽지" },
    "act": { "from": "harness", "to": "folder", "label": "폴더 보기" }
  },
  "steps": [
    {
      "short": "다시",
      "chapter": "setup",
      "title": "같은 부탁, 다른 프로그램",
      "body": [
        "지난번에 지민은 답을 받고도 사진 12개를 직접 옮겼어요. LLM은 답만 썼고, 폴더에는 닿지 못했으니까요.",
        "이번에는 채팅 앱 대신 다른 프로그램을 써 봐요. 폴더는 처음 그대로, 사진 12개가 뒤섞여 있어요."
      ],
      "callout": { "kind": "tip", "text": "이번에 세는 것은 폴더에서 실제로 일어난 일의 횟수, 그리고 그 일을 누가 했느냐예요." },
      "metrics": { "llm": null, "harness": null, "total": null },
      "scene": {
        "show": ["laptop", "jimin", "folder"],
        "state": { "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] } },
        "links": {},
        "flows": [],
        "panel": null
      }
    },
    {
      "short": "하네스",
      "chapter": "technique",
      "title": "지민이 하네스를 설치해요",
      "body": [
        "지민은 새 프로그램을 설치해요. <span class=\"term\">하네스</span>예요. 하네스는 LLM과 글을 주고받으면서, LLM이 부탁한 일을 대신 실행해 주는 프로그램이에요. ChatGPT에 들어 있는 Codex가 하네스예요. Anthropic의 Claude Code도 Codex와 같은 종류의 프로그램이에요.",
        "지민은 이 하네스가 영수증 폴더를 다뤄도 된다고 정해 뒀어요. 그리고 입력 칸에 지난번과 똑같이 써요. <em>“영수증 폴더를 월별로 정리해 줘.”</em>"
      ],
      "changes": ["+ 하네스: 지민이 설치한 프로그램", "+ 지민 → 하네스: 부탁 한 줄"],
      "metrics": { "llm": null, "harness": null, "total": null },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness"],
        "state": { "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] } },
        "links": { "type": {} },
        "flows": [{ "route": ["type"], "kind": "request", "rate": 0.6 }],
        "panel": null
      }
    },
    {
      "short": "도구 목록",
      "chapter": "technique",
      "title": "하네스는 도구 목록을 함께 보내요",
      "body": [
        "하네스는 지민의 글만 보내지 않아요. 자기가 대신 해 줄 수 있는 일의 목록을 붙여서 LLM에게 보내요. 이 목록에 적힌 일 하나하나가 <span class=\"term\">도구</span>예요.",
        "지민의 하네스에는 도구가 둘 있어요. <b>폴더 보기</b>와 <b>파일 옮기기</b>예요. LLM은 지난번처럼 AI 회사의 컴퓨터에 있어요."
      ],
      "callout": { "kind": "tip", "text": "ChatGPT의 Codex도, 그와 비슷한 Claude Code도 이렇게 도구 목록을 갖고 있어요. Codex에는 명령을 실행하는 도구가, Claude Code에는 파일 읽기와 고치기, 명령 실행 같은 도구가 있어요." },
      "changes": ["+ LLM", "+ 하네스 → LLM: 부탁 + 도구 목록", "~ 하네스: 도구 2개"],
      "metrics": { "llm": null, "harness": null, "total": null },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] },
          "harness": { "tags": [{ "text": "도구 2개 · 보기, 옮기기", "tone": "green" }] }
        },
        "links": { "type": { "style": "dashed" }, "send": {} },
        "flows": [{ "route": ["send"], "kind": "request", "rate": 0.6 }],
        "panel": null
      }
    },
    {
      "short": "쪽지",
      "chapter": "technique",
      "title": "LLM은 답 대신 쪽지를 써요",
      "body": [
        "도구 목록을 본 LLM은 이번에는 정리 방법을 설명하지 않아요. 대신 정해진 양식에 맞춘 짧은 쪽지를 써요. <em>쓸 도구: 폴더 보기 · 볼 곳: 영수증 폴더.</em>",
        "이 쪽지도 글이에요. LLM은 아직 아무것도 열지 않았어요. 달라진 것은 이 양식의 글을 알아보고 실행해 줄 프로그램이 생겼다는 점이에요. 그냥 쓴 답이라면 하네스는 지민에게 보여 주기만 해요."
      ],
      "callout": { "kind": "insight", "text": "무엇을 할지는 LLM이 정해서 글로 써요. 실제로 하는 것은 LLM이 아니에요." },
      "changes": ["~ 부탁 전달 대신 LLM → 하네스: 쪽지 “폴더 보기”"],
      "metrics": { "llm": null, "harness": null, "total": null },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] },
          "harness": { "tags": [{ "text": "도구 2개 · 보기, 옮기기", "tone": "green" }] }
        },
        "links": { "type": { "style": "dashed" }, "reply": { "label": "쪽지: 폴더 보기" } },
        "flows": [{ "route": ["reply"], "kind": "message", "rate": 0.6 }],
        "panel": null
      }
    },
    {
      "short": "폴더 열기",
      "chapter": "solution",
      "title": "하네스가 쪽지대로 폴더를 열어요",
      "body": [
        "하네스는 쪽지를 알아보고, 적힌 도구인 폴더 보기를 실행해요. 지민이 이 폴더를 다뤄도 된다고 해 뒀기 때문에 열 수 있어요.",
        "하네스가 폴더를 한 번 열었어요. 폴더에서 일어난 첫 번째 일이고, 한 것은 하네스예요. LLM이 폴더에 한 일은 0번이에요."
      ],
      "changes": ["+ 하네스 → 폴더: 폴더 보기", "~ 하네스: 도구 쓰는 중", "~ 하네스가 폴더에 한 일 1번"],
      "metrics": { "llm": 0, "harness": 1, "total": 1 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] },
          "harness": { "tags": [{ "text": "도구 쓰는 중 · 보기", "tone": "green" }] }
        },
        "links": { "type": { "style": "dashed" }, "reply": { "style": "dashed", "label": "쪽지: 폴더 보기" }, "act": {} },
        "flows": [{ "route": ["act"], "kind": "signal", "rate": 0.8 }],
        "panel": null
      }
    },
    {
      "short": "결과 전달",
      "chapter": "technique",
      "title": "본 것을 글로 적어 돌려줘요",
      "body": [
        "하네스는 폴더에서 본 파일 이름 12개를 글로 적어 LLM에게 보내요. 지난번에는 지민이 손으로 붙여 넣던 일이에요.",
        "이제 LLM은 폴더에 무엇이 있는지 알아요. 직접 봐서가 아니라 하네스가 알려 줬기 때문이에요. 하네스가 LLM의 <b>눈</b> 노릇을 했어요."
      ],
      "changes": ["~ 쪽지 대신 하네스 → LLM: 파일 이름 12개", "~ LLM: 받은 이름 12개"],
      "metrics": { "llm": 0, "harness": 1, "total": 1 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] },
          "harness": { "tags": [{ "text": "도구 2개 · 보기, 옮기기", "tone": "green" }] },
          "llm": { "tags": [{ "text": "받은 이름 12개", "tone": "green" }] }
        },
        "links": { "type": { "style": "dashed" }, "send": { "label": "파일 이름 12개" }, "act": { "style": "dashed" } },
        "flows": [{ "route": ["send"], "kind": "request", "rate": 0.6 }],
        "panel": null
      }
    },
    {
      "short": "둘째 쪽지",
      "chapter": "technique",
      "title": "두 번째 쪽지: 옮겨 줘",
      "body": [
        "LLM은 이름에 든 날짜를 읽고 다음 쪽지를 써요. <em>쓸 도구: 파일 옮기기 · 옮길 것: <code>0312_화분.jpg</code> · 넣을 곳: 3월 폴더.</em>",
        "무엇을 어디로 옮길지는 LLM이 정했어요. 하지만 쪽지가 도착해도, 하네스가 움직이기 전까지 사진은 그대로예요."
      ],
      "changes": ["~ 이름 전달 대신 LLM → 하네스: 쪽지 “3월로 옮기기”"],
      "metrics": { "llm": 0, "harness": 1, "total": 1 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] },
          "harness": { "tags": [{ "text": "도구 2개 · 보기, 옮기기", "tone": "green" }] },
          "llm": { "tags": [{ "text": "받은 이름 12개", "tone": "green" }] }
        },
        "links": { "type": { "style": "dashed" }, "reply": { "label": "쪽지: 3월로 옮기기" }, "act": { "style": "dashed" } },
        "flows": [{ "route": ["reply"], "kind": "message", "rate": 0.6 }],
        "panel": null
      }
    },
    {
      "short": "옮기기",
      "chapter": "solution",
      "title": "하네스가 사진을 옮겨요",
      "body": [
        "하네스가 파일 옮기기를 실행해요. 이 예의 옮기기 도구는 넣을 폴더가 없으면 만들어서 옮기고, 그것까지 한 번으로 세요. 12개 가운데 <b>1개</b>가 정리됐어요.",
        "폴더에서 일어난 일은 보기와 옮기기, 2번이에요. 둘 다 하네스가 했고 LLM은 0번이에요. 이번에는 하네스가 LLM의 <b>손</b> 노릇을 했어요."
      ],
      "changes": ["~ 하네스 → 폴더: 파일 옮기기", "~ 폴더: 1개 정리, 11개 남음", "~ 하네스가 폴더에 한 일 1 → 2번"],
      "metrics": { "llm": 0, "harness": 2, "total": 2 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "1개 정리 · 11개 남음", "tone": "green" }] },
          "harness": { "tags": [{ "text": "도구 쓰는 중 · 옮기기", "tone": "green" }] },
          "llm": { "tags": [{ "text": "받은 이름 12개", "tone": "green" }] }
        },
        "links": { "type": { "style": "dashed" }, "reply": { "style": "dashed", "label": "쪽지: 3월로 옮기기" }, "act": { "label": "옮기기" } },
        "flows": [{ "route": ["act"], "kind": "write", "rate": 0.8 }],
        "panel": null
      }
    },
    {
      "short": "도구 바꾸기",
      "chapter": "problem",
      "title": "하네스의 도구를 바꿔 봐요",
      "body": [
        "하네스에 준 도구가 달랐다면 어땠을까요? 지민의 부탁은 그대로 두고 도구만 바꿔요. 고르면 그렇게 한 차례 해 본 결과를 보여 줘요.",
        "도구가 없을 때, 폴더 보기만 있을 때, 보기와 옮기기가 다 있을 때, 폴더에서 일어난 일이 몇 번인지 비교해 보세요."
      ],
      "changes": ["~ 처음으로: 폴더 12개 뒤섞임, 도구 미정 (고르기 전)"],
      "metrics": { "llm": null, "harness": null, "total": null },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] },
          "harness": { "tags": [{ "text": "도구 ?", "tone": "paper" }] }
        },
        "links": { "type": { "style": "dashed" }, "send": { "style": "dashed", "label": "" }, "reply": { "style": "dashed", "label": "글이 오가는 길" }, "act": { "style": "off", "label": "" } },
        "flows": [],
        "panel": null
      },
      "try": {
        "prompt": "하네스에 줄 도구를 고르세요.",
        "options": [
          {
            "label": "도구 없음",
            "verdict": { "tone": "red", "text": "답만 돌아옴", "why": "이 예에서 도구가 없으면 LLM은 정리 방법을 답으로 쓰고, 폴더에서 일어난 일은 0번이에요." },
            "metrics": { "llm": 0, "harness": 0, "total": 0 },
            "scene": {
              "state": {
                "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] },
                "harness": { "tags": [{ "text": "도구 없음", "tone": "red" }] }
              },
              "links": { "type": { "style": "dashed" }, "reply": { "label": "답: 정리하는 방법" }, "act": { "style": "off", "label": "" } },
              "flows": [{ "route": ["reply"], "kind": "response", "rate": 0.6 }]
            }
          },
          {
            "label": "보기만",
            "verdict": { "tone": "amber", "text": "보기만 함", "why": "폴더 보기 1번으로 이름 12개는 전했지만, 옮기기 도구가 없어 옮긴 사진은 0개예요." },
            "metrics": { "llm": 0, "harness": 1, "total": 1 },
            "scene": {
              "state": {
                "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] },
                "harness": { "tags": [{ "text": "도구: 보기만", "tone": "amber" }] },
                "llm": { "tags": [{ "text": "받은 이름 12개", "tone": "green" }] }
              },
              "links": { "type": { "style": "dashed" }, "send": { "label": "파일 이름 12개" }, "act": { "label": "폴더 보기" } },
              "flows": [{ "route": ["act"], "kind": "signal", "rate": 0.6 }, { "route": ["send"], "kind": "request", "rate": 0.6 }]
            }
          },
          {
            "label": "보기와 옮기기",
            "verdict": { "tone": "green", "text": "사진 1개 옮김", "why": "앞서 본 보기 1번에 옮기기 1번을 더해 2번, 모두 하네스가 해서 사진 1개가 정리돼요." },
            "metrics": { "llm": 0, "harness": 2, "total": 2 },
            "scene": {
              "state": {
                "folder": { "tags": [{ "text": "1개 정리 · 11개 남음", "tone": "green" }] },
                "harness": { "tags": [{ "text": "도구: 보기, 옮기기", "tone": "green" }] },
                "llm": { "tags": [{ "text": "받은 이름 12개", "tone": "green" }] }
              },
              "links": { "type": { "style": "dashed" }, "reply": { "style": "dashed", "label": "쪽지: 3월로 옮기기" }, "act": { "label": "옮기기" } },
              "flows": [{ "route": ["act"], "kind": "write", "rate": 0.8 }]
            }
          }
        ]
      }
    },
    {
      "short": "정리",
      "chapter": "recap",
      "title": "하네스는 LLM의 눈과 손이에요",
      "body": [
        "폴더에서 일어난 일 <b>2번</b>은 모두 하네스가 했고, LLM이 폴더에 한 일은 0번이에요.",
        "<ul class=\"takeaways\"><li><b>하네스</b>는 LLM과 글을 주고받으며, LLM이 부탁한 일을 대신 실행하는 프로그램이에요. ChatGPT의 Codex, 그리고 그와 비슷한 Claude Code가 하네스예요.</li><li>하네스가 해 줄 수 있는 일 하나하나가 <b>도구</b>예요. 도구에 없는 일은 해 주지 못해요.</li><li>LLM은 정해진 양식의 <b>쪽지</b>로 부탁하고, 하네스는 실행한 뒤 결과를 글로 돌려줘요.</li><li>이 예에서 폴더에 닿은 것은 <b>하네스</b>뿐이에요. LLM은 끝까지 글만 썼어요.</li></ul>"
      ],
      "callout": { "kind": "next", "text": "<b>끝날 때까지 되풀이</b>: 아직 사진 11개가 남았어요. 쪽지와 실행이 몇 번 오가야 일이 끝날까요?" },
      "metrics": { "llm": 0, "harness": 2, "total": 2 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "harness", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "1개 정리 · 11개 남음", "tone": "green" }] },
          "harness": { "tags": [{ "text": "도구 2개 · 보기, 옮기기", "tone": "green" }] }
        },
        "links": { "type": { "style": "dashed" }, "send": { "style": "dashed", "label": "" }, "reply": { "style": "dashed", "label": "글이 오가는 길" }, "act": { "style": "dashed", "label": "모두 2번" } },
        "flows": [],
        "panel": { "title": "폴더에서 일어난 일", "lines": ["LLM이 한 일  0번", "하네스가 한 일  2번", "= 모두  2번"] }
      }
    }
  ]
});
