Diorama.walkthrough({
  "id": "agent",
  "title": "끝날 때까지 되풀이",
  "question": "한 번만 부탁했는데, 정리가 끝나기까지 쪽지와 결과는 몇 번 오갈까요?",
  "summary": "부탁 한 번 뒤에 쪽지와 결과가 오가는 횟수를 세어 보고, 이렇게 일하는 둘에 붙는 이름을 알아봐요.",
  "minutes": 9,
  "level": "beginner",
  "note": "왕복 6번과 한도 값들은 세기 쉽게 지어낸 예시예요. 실제로는 같은 부탁에도 그때그때 다른 횟수로 일해요.",
  "sources": [
    { "claim": "모델이 도구를 부탁하면 하네스가 실행해 결과를 돌려주고, 모델이 사람에게 보내는 글을 쓸 때까지 되풀이된다.", "kind": "data", "source": "OpenAI, ‘Unrolling the Codex agent loop’, ‘The agent loop’ 절", "url": "https://openai.com/index/unrolling-the-codex-agent-loop/" },
    { "claim": "에이전트는 흔히 ‘환경에서 돌아온 결과를 보며 도구를 되풀이해 쓰는 LLM’이다.", "kind": "data", "source": "Anthropic, ‘Building effective agents’, ‘Agents’ 절", "url": "https://www.anthropic.com/research/building-effective-agents" },
    { "claim": "에이전트에는 되풀이 횟수 한도 같은 멈춤 조건을 두는 일이 흔하다.", "kind": "data", "source": "Anthropic, ‘Building effective agents’, ‘Agents’ 절", "url": "https://www.anthropic.com/research/building-effective-agents" },
    { "claim": "Claude Code는 살펴보기, 행동하기, 결과 확인하기를 되풀이하고, 부탁에 따라 그 일부만 하기도 한다.", "kind": "data", "source": "Claude Code 문서, ‘How Claude Code works’, ‘The agentic loop’ 절", "url": "https://code.claude.com/docs/en/how-claude-code-works" },
    { "claim": "Claude는 Anthropic의 LLM 계열 이름이고, Claude Code는 그 둘레에서 도구를 주는 하네스다.", "kind": "data", "source": "Anthropic ‘Models overview’ 첫 문장; Claude Code 문서 ‘The agentic loop’ 절", "url": "https://code.claude.com/docs/en/how-claude-code-works" },
    { "claim": "Codex는 ChatGPT에서 쓰는 OpenAI의 코딩 제품 이름이고, 그 안에서 되풀이와 실행을 맡는 부분이 하네스이며 GPT 모델을 쓴다.", "kind": "data", "source": "OpenAI, ‘Unrolling the Codex agent loop’ 머리말; OpenAI 도움말 ‘ChatGPT Work and Codex’", "url": "https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex" },
    { "claim": "영수증 사진은 12개다: 3월 5개, 4월 4개, 5월 3개.", "kind": "assumption", "source": "이 안내서를 위해 지어낸 예시예요." },
    { "claim": "이 일은 왕복 6번에 끝난다: 보기 1, 폴더 만들기 1, 옮기기 3, 다시 보기 1.", "kind": "assumption", "source": "세기 쉽게 지어낸 값이에요. 실제 횟수는 매번 달라요." },
    { "claim": "쪽지 한 장으로 폴더 3개를 만들거나 한 달 치 사진을 옮길 수 있다.", "kind": "assumption", "source": "쉽게 줄인 약속이에요. 실제로는 도구와 모델에 따라 달라요." },
    { "claim": "비교해 보려고 고른 왕복 한도는 1번, 4번, 6번, 10번이다.", "kind": "assumption", "source": "모자랄 때, 딱 맞을 때, 남을 때를 보여 주려고 정한 값이에요. 실제 제품의 설정값이 아니에요." },
    { "claim": "이 예에서 LLM만 있으면 폴더에 손대지 못하고, 하네스만 있으면 다음 할 일을 정하지 못한다.", "kind": "assumption", "source": "앞의 두 편에서 본 각 부품의 역할에서 나온 예시 결과예요." }
  ],
  "goals": [
    { "text": "쪽지와 결과가 오가는 한 바퀴, 왕복", "step": 1 },
    { "text": "부탁 한 번에 왕복이 여러 번임을", "step": 4 },
    { "text": "되풀이가 멈추는 두 가지 경우", "step": 7 },
    { "text": "에이전트가 두 부품이 함께 일하는 이름임을", "step": 8 },
    { "text": "둘 중 하나만으로는 안 됨을", "step": 9 }
  ],
  "metrics": [
    { "id": "look", "label": "살펴본 왕복", "unit": "번", "icon": "search" },
    { "id": "act", "label": "바꾼 왕복", "unit": "번", "icon": "gear" },
    { "id": "total", "label": "왕복", "unit": "번", "icon": "clock" }
  ],
  "legend": [
    { "kind": "request", "label": "지민의 부탁" },
    { "kind": "message", "label": "LLM의 쪽지와 실행" },
    { "kind": "response", "label": "돌아오는 결과와 답" }
  ],
  "nodes": {
    "team": { "type": "zone", "x": 4.5, "y": 2.5, "w": 18, "h": 13, "color": "blue", "label": "에이전트" },
    "jimin": { "type": "actor", "x": 0, "y": -9, "color": "gray", "label": "지민", "sub": "꽃집 사장" },
    "folder": { "type": "db", "x": -9, "y": 0, "color": "violet", "glyph": "file", "label": "영수증 폴더", "sub": "사진 12개" },
    "harness": { "type": "block", "x": 0, "y": 0, "color": "blue", "glyph": "gear", "label": "하네스", "sub": "지민이 설치한 프로그램" },
    "llm": { "type": "block", "x": 9, "y": 0, "color": "orange", "glyph": "chip", "label": "LLM", "sub": "AI 회사의 컴퓨터" }
  },
  "links": {
    "ask": { "from": "jimin", "to": "harness", "label": "부탁 1번" },
    "report": { "from": "harness", "to": "jimin", "label": "답" },
    "send": { "from": "harness", "to": "llm", "label": "부탁 + 도구 목록" },
    "reply": { "from": "llm", "to": "harness", "label": "쪽지" },
    "act": { "from": "harness", "to": "folder", "label": "보기" },
    "chat": { "from": "jimin", "to": "llm", "label": "글만 오감", "route": "x-first" }
  },
  "steps": [
    {
      "short": "남은 11개",
      "chapter": "setup",
      "title": "지난번엔 한 장에서 멈췄어요",
      "body": [
        "지난번에 하네스는 LLM의 쪽지대로 폴더를 열어 보고 사진 한 장을 옮겼어요. 사진 11개는 그대로 남았어요.",
        "이번에는 처음부터 끝까지 지켜봐요. 폴더는 다시 사진 12개가 뒤섞인 처음 모습이에요."
      ],
      "callout": { "kind": "tip", "text": "이번에 세는 것은 지민이 부탁한 횟수와, 그 뒤에 쪽지와 결과가 오간 횟수예요. 뒤의 것을 ‘왕복’이라고 부를 거예요." },
      "metrics": { "look": null, "act": null, "total": null },
      "scene": {
        "show": ["folder", "harness"],
        "state": { "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] } },
        "links": {},
        "flows": [],
        "panel": null
      }
    },
    {
      "short": "부탁",
      "chapter": "technique",
      "title": "지민은 한 번만 부탁해요",
      "body": [
        "지민이 하네스에 부탁을 적어요. <em>“영수증 폴더를 월별로 정리해 줘.”</em> 하네스는 이 글을 도구 목록과 함께 LLM에게 넘겨요. 지민이 할 일은 여기까지예요.",
        "이제부터는 <span class=\"term\">왕복</span>을 세요. LLM의 쪽지 한 장이 하네스에게 가서 실행되고, 그 결과가 LLM에게 돌아오는 한 바퀴가 왕복 1번이에요."
      ],
      "changes": ["+ 지민, LLM", "+ 지민 → 하네스 → LLM: 부탁 1번"],
      "metrics": { "look": null, "act": null, "total": null },
      "scene": {
        "show": ["folder", "harness", "jimin", "llm"],
        "state": { "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] } },
        "links": { "ask": {}, "send": {} },
        "flows": [{ "route": ["ask", "send"], "kind": "request", "rate": 0.6 }],
        "panel": null
      }
    },
    {
      "short": "왕복 1",
      "chapter": "technique",
      "title": "첫 왕복: 폴더를 살펴봐요",
      "body": [
        "LLM의 첫 쪽지는 폴더 보기예요. 하네스가 폴더를 열어 보고, 파일 이름 12개를 LLM에게 돌려줘요.",
        "아직 바뀐 것은 없어요. 하지만 LLM은 이제 무엇을 정리해야 하는지 알아요. 살펴본 왕복이 <b>1번</b>이에요."
      ],
      "changes": ["~ 부탁 전달 대신 LLM → 하네스 → 폴더: 쪽지와 보기", "~ LLM: 받은 이름 12개", "~ 왕복 1번"],
      "metrics": { "look": 1, "act": null, "total": 1 },
      "scene": {
        "show": ["folder", "harness", "jimin", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] },
          "llm": { "tags": [{ "text": "받은 이름 12개", "tone": "green" }] }
        },
        "links": { "ask": { "style": "dashed" }, "reply": { "label": "쪽지: 폴더 보기" }, "act": {} },
        "flows": [{ "route": ["reply", "act"], "kind": "message", "bounce": true, "rate": 0.5 }],
        "panel": null
      }
    },
    {
      "short": "왕복 2",
      "chapter": "technique",
      "title": "둘째 왕복: 월별 폴더를 만들어요",
      "body": [
        "결과를 받은 LLM은 다음 쪽지를 써요. 3월, 4월, 5월 폴더를 만들어 달라는 쪽지예요. 하네스가 폴더 세 개를 만들고, 만들었다고 알려 줘요.",
        "이번에는 폴더 안이 바뀌었어요. 바꾼 왕복 1번을 더해 왕복은 모두 <b>2번</b>이에요. 사진은 아직 하나도 옮기지 않았어요."
      ],
      "changes": ["~ 쪽지: 폴더 3개 만들기", "~ 폴더: 월별 폴더 3개 생김", "~ 왕복 1 → 2번"],
      "metrics": { "look": 1, "act": 1, "total": 2 },
      "scene": {
        "show": ["folder", "harness", "jimin", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "월별 폴더 3개 · 정리 0개", "tone": "amber" }] },
          "llm": { "tags": [{ "text": "받은 이름 12개", "tone": "green" }] }
        },
        "links": { "ask": { "style": "dashed" }, "reply": { "label": "쪽지: 폴더 3개 만들기" }, "act": { "label": "만들기" } },
        "flows": [{ "route": ["reply", "act"], "kind": "message", "bounce": true, "rate": 0.5 }],
        "panel": null
      }
    },
    {
      "short": "왕복 3–5",
      "chapter": "technique",
      "title": "셋째에서 다섯째: 사진을 옮겨요",
      "body": [
        "다음 쪽지 세 장은 한 장마다 한 달 치를 옮겨 달라는 말이에요. 3월 사진 5개, 4월 사진 4개, 5월 사진 3개예요.",
        "하네스가 한 장씩 실행하고 결과를 돌려줘요. 바꾼 왕복이 3번 늘어 4번, 왕복은 모두 <b>5번</b>이에요. 12개가 제자리에 들어갔어요."
      ],
      "changes": ["~ 쪽지 세 장: 5개, 4개, 3개 옮기기", "~ 폴더: 12개 월별 정리", "~ 왕복 2 → 5번"],
      "metrics": { "look": 1, "act": 4, "total": 5 },
      "scene": {
        "show": ["folder", "harness", "jimin", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 월별 정리", "tone": "green" }] },
          "llm": { "tags": [{ "text": "쪽지 세 장 · 5, 4, 3개", "tone": "violet" }] }
        },
        "links": { "ask": { "style": "dashed" }, "reply": { "label": "쪽지: 옮기기" }, "act": { "label": "옮기기" } },
        "flows": [{ "route": ["reply", "act"], "kind": "message", "bounce": true, "rate": 1.2 }],
        "panel": null
      }
    },
    {
      "short": "왕복 6",
      "chapter": "technique",
      "title": "여섯째 왕복: 다시 확인해요",
      "body": [
        "LLM은 옮겼다는 말만 듣고 끝내지 않아요. 폴더를 다시 보여 달라는 쪽지를 써요. 하네스가 다시 열어 보고, 달마다 5개, 4개, 3개가 들어 있다고 알려 줘요.",
        "살펴본 왕복이 2번이 됐어요. 바꾼 왕복 4번과 더해 왕복은 모두 <b>6번</b>이에요."
      ],
      "callout": { "kind": "tip", "text": "ChatGPT의 Codex도 Claude Code도 이런 되풀이로 일해요. Claude Code의 설명서는 살펴보고, 손보고, 확인하기를 되풀이한다고 적어요. 부탁에 따라 하는 일은 달라져요." },
      "changes": ["~ 쪽지: 폴더 다시 보기", "~ LLM: 5, 4, 3개 확인", "~ 왕복 5 → 6번"],
      "metrics": { "look": 2, "act": 4, "total": 6 },
      "scene": {
        "show": ["folder", "harness", "jimin", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 월별 정리", "tone": "green" }] },
          "llm": { "tags": [{ "text": "확인 · 5, 4, 3개", "tone": "green" }] }
        },
        "links": { "ask": { "style": "dashed" }, "reply": { "label": "쪽지: 다시 보기" }, "act": { "label": "다시 보기" } },
        "flows": [{ "route": ["reply", "act"], "kind": "message", "bounce": true, "rate": 0.5 }],
        "panel": null
      }
    },
    {
      "short": "답",
      "chapter": "solution",
      "title": "LLM이 쪽지 대신 답을 써요",
      "body": [
        "확인을 마친 LLM은 이번에는 쪽지가 아니라 답을 써요. <em>“3월 5개, 4월 4개, 5월 3개로 정리했어요.”</em> 하네스가 이 답을 지민에게 보여 줘요.",
        "되풀이는 여기서 멈춰요. 지민의 부탁은 <b>1번</b>, 그 뒤의 왕복은 <b>6번</b>이었어요. 그 사이 지민은 아무것도 하지 않았어요."
      ],
      "callout": { "kind": "insight", "text": "쪽지 대신 답이 오면 하네스는 멈추고 사람에게 돌아와요. 이 예에서는 일을 다 마치고 답이 왔어요." },
      "changes": ["~ 쪽지 대신 LLM → 하네스 → 지민: 답", "~ 하네스 → 폴더: 더 하는 일 없음"],
      "metrics": { "look": 2, "act": 4, "total": 6 },
      "scene": {
        "show": ["folder", "harness", "jimin", "llm"],
        "state": { "folder": { "tags": [{ "text": "12개 · 월별 정리", "tone": "green" }] } },
        "links": { "report": { "label": "답: 12개 정리했어요" }, "reply": { "label": "답" }, "act": { "style": "off", "label": "" } },
        "flows": [{ "route": ["reply", "report"], "kind": "response", "rate": 0.5 }],
        "panel": null
      }
    },
    {
      "short": "한도",
      "chapter": "problem",
      "title": "왕복을 몇 번까지 허락할까요",
      "body": [
        "이 되풀이가 끝없이 이어지지 않도록, 하네스에 왕복 횟수의 한도를 두기도 해요. 같은 부탁을 한도만 바꿔서 처음부터 다시 시켜 봐요.",
        "비교해 보려고 정한 한도는 1번, 4번, 6번, 10번이에요. 정리된 사진 수와 실제로 쓴 왕복 수를 비교해 보세요."
      ],
      "changes": ["~ 고르기 전의 시작 모습: 폴더 12개 뒤섞임, 한도 미정"],
      "metrics": { "look": null, "act": null, "total": null },
      "scene": {
        "show": ["folder", "harness", "jimin", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] },
          "harness": { "tags": [{ "text": "한도 ?번", "tone": "paper" }] }
        },
        "links": { "ask": { "style": "dashed" }, "reply": { "style": "dashed", "label": "" }, "act": { "style": "dashed", "label": "" } },
        "flows": [],
        "panel": null
      },
      "try": {
        "prompt": "왕복을 최대 몇 번까지 할지 고르세요.",
        "options": [
          {
            "label": "1번",
            "verdict": { "tone": "red", "text": "살펴보기만 하고 멈춤", "why": "한도 1번을 폴더 보기에 다 써서 멈췄고, 정리된 사진은 0개예요." },
            "metrics": { "look": 1, "act": 0, "total": 1 },
            "scene": {
              "state": {
                "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] },
                "harness": { "heat": 0.4, "tags": [{ "text": "한도 1번 · 닿아서 멈춤", "tone": "red" }] }
              },
              "links": { "report": { "label": "한도에 닿아 멈췄어요" }, "reply": { "style": "off", "label": "" }, "act": { "style": "off", "label": "" } },
              "flows": [{ "route": ["report"], "kind": "response", "rate": 0.4 }]
            }
          },
          {
            "label": "4번",
            "verdict": { "tone": "amber", "text": "9개에서 멈춤", "why": "보기, 폴더 만들기, 3월 5개, 4월 4개까지 4번을 쓰고 멈춰, 5월 3개가 남아요." },
            "metrics": { "look": 1, "act": 3, "total": 4 },
            "scene": {
              "state": {
                "folder": { "tags": [{ "text": "9개 정리 · 3개 남음", "tone": "amber" }] },
                "harness": { "heat": 0.4, "tags": [{ "text": "한도 4번 · 닿아서 멈춤", "tone": "amber" }] }
              },
              "links": { "report": { "label": "한도에 닿아 멈췄어요" }, "reply": { "style": "off", "label": "" }, "act": { "style": "off", "label": "" } },
              "flows": [{ "route": ["report"], "kind": "response", "rate": 0.4 }]
            }
          },
          {
            "label": "6번",
            "verdict": { "tone": "green", "text": "12개 정리, 확인까지", "why": "필요한 6번을 다 써서 12개를 옮기고 확인한 뒤, LLM이 답을 써요." },
            "metrics": { "look": 2, "act": 4, "total": 6 },
            "scene": {
              "state": {
                "folder": { "tags": [{ "text": "12개 · 월별 정리", "tone": "green" }] },
                "harness": { "tags": [{ "text": "한도 6번 · 6번 씀", "tone": "green" }] }
              },
              "links": { "report": { "label": "답: 12개 정리했어요" }, "reply": { "label": "답" }, "act": { "style": "off", "label": "" } },
              "flows": [{ "route": ["reply", "report"], "kind": "response", "rate": 0.5 }]
            }
          },
          {
            "label": "10번",
            "verdict": { "tone": "green", "text": "6번만 쓰고 끝", "why": "한도가 10번이어도 6번 만에 LLM이 답을 쓰고 멈춰서, 4번은 쓰지 않아요." },
            "metrics": { "look": 2, "act": 4, "total": 6 },
            "scene": {
              "state": {
                "folder": { "tags": [{ "text": "12개 · 월별 정리", "tone": "green" }] },
                "harness": { "tags": [{ "text": "한도 10번 · 6번 씀", "tone": "green" }] }
              },
              "links": { "report": { "label": "답: 12개 정리했어요" }, "reply": { "label": "답" }, "act": { "style": "off", "label": "" } },
              "flows": [{ "route": ["reply", "report"], "kind": "response", "rate": 0.5 }]
            }
          }
        ]
      }
    },
    {
      "short": "에이전트",
      "chapter": "insight",
      "title": "이 되풀이 전체가 에이전트예요",
      "body": [
        "LLM이 다음 할 일을 정하고, 하네스가 하고, 결과를 돌려주고, LLM이 다시 정해요. 이렇게 되풀이하며 함께 일하는 둘을 묶어 <span class=\"term\">에이전트</span>라고 불러요.",
        "에이전트는 세 번째 부품이 아니에요. 그림에도 새 물건은 없고 테두리만 생겼어요. ChatGPT의 Codex는 GPT와 Codex 하네스가, Claude Code는 Claude와 Claude Code 하네스가 이렇게 일하는 에이전트예요."
      ],
      "callout": { "kind": "insight", "text": "LLM은 정하고, 하네스는 해요. 둘이 되풀이하며 함께 일하면 에이전트예요." },
      "changes": ["+ 테두리 ‘에이전트’: 하네스와 LLM을 묶음", "~ 실험을 마치고 정리된 모습으로 돌아옴", "~ 꼬리표: LLM은 정해요, 하네스는 해요"],
      "metrics": { "look": 2, "act": 4, "total": 6 },
      "scene": {
        "show": ["team", "folder", "harness", "jimin", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 월별 정리", "tone": "green" }] },
          "harness": { "tags": [{ "text": "해요", "tone": "green" }] },
          "llm": { "tags": [{ "text": "정해요", "tone": "violet" }] }
        },
        "links": { "ask": { "style": "dashed" }, "reply": { "label": "왕복 6번" }, "act": { "style": "dashed", "label": "" } },
        "flows": [{ "route": ["reply"], "kind": "message", "bounce": true, "rate": 0.8 }],
        "panel": null
      }
    },
    {
      "short": "하나만",
      "chapter": "problem",
      "title": "하나만 남기면 어떻게 될까요",
      "body": [
        "에이전트가 정말 두 부품이 함께여야 하는지 확인해 봐요. 하나만 남겼을 때와 둘 다 남겼을 때를 비교해요.",
        "무엇을 남길지 골라 보세요. 왕복 수와 폴더의 꼬리표, 그리고 테두리가 어떻게 되는지 보세요."
      ],
      "changes": ["~ 고르기 전의 시작 모습: 폴더 12개 뒤섞임, 남길 부품 미정"],
      "metrics": { "look": null, "act": null, "total": null },
      "scene": {
        "show": ["team", "folder", "harness", "jimin", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] },
          "harness": { "tags": [{ "text": "남길까?", "tone": "paper" }] },
          "llm": { "tags": [{ "text": "남길까?", "tone": "paper" }] }
        },
        "links": { "ask": { "style": "dashed" }, "reply": { "style": "dashed", "label": "" }, "act": { "style": "dashed", "label": "" } },
        "flows": [],
        "panel": null
      },
      "try": {
        "prompt": "무엇을 남길지 고르세요.",
        "options": [
          {
            "label": "LLM만",
            "verdict": { "tone": "red", "text": "답만 돌아옴", "why": "첫 편의 채팅 앱처럼 글만 오가요. 폴더에 손댈 하네스가 없어 왕복은 0번, 정리는 0개예요." },
            "metrics": { "look": 0, "act": 0, "total": 0 },
            "scene": {
              "show": ["folder", "harness", "jimin", "llm"],
              "state": {
                "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] },
                "harness": { "dim": true, "tags": [{ "text": "뺌", "tone": "red" }] },
                "llm": { "tags": [{ "text": "정리 방법만 씀", "tone": "amber" }] }
              },
              "links": { "chat": {} },
              "flows": [{ "route": ["chat"], "kind": "request", "bounce": true, "rate": 0.5 }]
            }
          },
          {
            "label": "하네스만",
            "verdict": { "tone": "red", "text": "아무 일도 없음", "why": "이 예의 하네스는 다음 할 일을 스스로 정하지 못해, 쪽지를 기다리기만 하고 왕복은 0번이에요." },
            "metrics": { "look": 0, "act": 0, "total": 0 },
            "scene": {
              "show": ["folder", "harness", "jimin", "llm"],
              "state": {
                "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] },
                "harness": { "tags": [{ "text": "쪽지를 기다림", "tone": "amber" }] },
                "llm": { "dim": true, "tags": [{ "text": "뺌", "tone": "red" }] }
              },
              "links": { "ask": {}, "act": { "style": "off", "label": "" } },
              "flows": [{ "route": ["ask"], "kind": "request", "rate": 0.5 }]
            }
          },
          {
            "label": "둘 다",
            "verdict": { "tone": "green", "text": "12개 정리", "why": "LLM이 정하고 하네스가 하기를 6번 되풀이해 사진 12개가 정리돼요." },
            "metrics": { "look": 2, "act": 4, "total": 6 },
            "scene": {
              "state": {
                "folder": { "tags": [{ "text": "12개 · 월별 정리", "tone": "green" }] },
                "harness": { "tags": [{ "text": "해요", "tone": "green" }] },
                "llm": { "tags": [{ "text": "정해요", "tone": "violet" }] }
              },
              "links": { "ask": { "style": "dashed" }, "reply": { "label": "왕복 6번" }, "act": { "label": "보기 · 바꾸기" } },
              "flows": [{ "route": ["reply", "act"], "kind": "message", "bounce": true, "rate": 1.2 }]
            }
          }
        ]
      }
    },
    {
      "short": "정리",
      "chapter": "recap",
      "title": "부탁 1번, 왕복 6번",
      "body": [
        "지민이 <b>1번</b> 부탁하자, LLM과 하네스가 왕복 <b>6번</b>으로 사진 12개를 정리하고 확인했어요.",
        "<ul class=\"takeaways\"><li><b>에이전트</b>는 LLM과 하네스가 왕복을 되풀이하며 함께 일하는 것이에요.</li><li><b>왕복</b>마다 LLM이 다음 할 일을 정하고, 하네스가 하고, 결과를 돌려줘요.</li><li>LLM이 쪽지 대신 <b>답</b>을 쓰면 되풀이가 멈춰요. 일이 남았어도 <b>한도</b>에 닿으면 멈춰요.</li><li>이 예에서 LLM만 있으면 폴더에 손대지 못하고, 하네스만 있으면 <b>다음 할 일</b>을 정하지 못해요.</li><li>GPT와 Claude는 <b>LLM</b>, ChatGPT의 Codex와 Claude Code는 <b>하네스</b>, 둘이 함께 일하면 <b>에이전트</b>예요.</li></ul>"
      ],
      "callout": { "kind": "next", "text": "<b>허락은 누가 받나</b>: 알아서 일하는 에이전트가 지우면 안 되는 사진을 지우려 하면, 누가 막을까요?" },
      "metrics": { "look": 2, "act": 4, "total": 6 },
      "scene": {
        "show": ["team", "folder", "harness", "jimin", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 월별 정리", "tone": "green" }] },
          "harness": { "tags": [{ "text": "해요", "tone": "green" }] },
          "llm": { "tags": [{ "text": "정해요", "tone": "violet" }] }
        },
        "links": { "ask": { "style": "dashed" }, "reply": { "style": "dashed", "label": "왕복 6번" }, "act": { "style": "dashed", "label": "" } },
        "flows": [],
        "panel": { "title": "부탁 1번에", "lines": ["살펴본 왕복  2번", "바꾼 왕복  4번", "= 왕복  6번"] }
      }
    }
  ]
});
