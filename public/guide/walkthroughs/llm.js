Diorama.walkthrough({
  "id": "llm",
  "title": "글만 쓰는 기계, LLM",
  "question": "AI에게 영수증 정리를 부탁했는데, 왜 파일은 하나도 움직이지 않을까요?",
  "summary": "지민의 부탁 한 줄을 따라가며, 좋은 답을 받고도 파일이 그대로인 이유를 알아봐요.",
  "minutes": 8,
  "level": "beginner",
  "note": "지민, 영수증 12개, 지민의 채팅 앱은 지어낸 예시예요. 사진을 읽거나 목소리로 답하는 모델도 있지만, 여기서는 글만 주고받아요.",
  "sources": [
    { "claim": "LLM은 아주 많은 글로 훈련되어 글을 만들어 내는 ‘큰 언어 모델’이다.", "kind": "data", "source": "Anthropic 용어집, ‘LLM’ 항목", "url": "https://platform.claude.com/docs/en/about-claude/glossary" },
    { "claim": "Claude 같은 모델은 처음 배울 때(사전 훈련) 앞 글을 보고 다음 단어를 맞힌다.", "kind": "data", "source": "Anthropic 용어집, ‘Pretraining’ 항목", "url": "https://platform.claude.com/docs/en/about-claude/glossary" },
    { "claim": "모델의 답은 한 번에 나오지 않고 작은 조각(토큰) 단위로 차례차례 만들어진다.", "kind": "data", "source": "OpenAI, ‘Unrolling the Codex agent loop’, ‘The agent loop’ 절", "url": "https://openai.com/index/unrolling-the-codex-agent-loop/" },
    { "claim": "Claude Code에서 도구가 없으면 Claude는 글로만 응답할 수 있다.", "kind": "data", "source": "Claude Code 문서, ‘How Claude Code works’, ‘Tools’ 절", "url": "https://code.claude.com/docs/en/how-claude-code-works" },
    { "claim": "Claude는 Anthropic이 만든 LLM 계열의 이름이고, 지금 모델들은 글로 답한다.", "kind": "data", "source": "Anthropic, ‘Models overview’ 첫 문장과 ‘Latest models’ 절", "url": "https://platform.claude.com/docs/en/models/overview" },
    { "claim": "ChatGPT에서 답을 쓰는 것은 OpenAI의 GPT 모델이다.", "kind": "data", "source": "OpenAI 도움말, ‘ChatGPT Work and Codex’, ‘Models in Work and Codex’ 절", "url": "https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex" },
    { "claim": "지민의 채팅 앱은 글을 AI 회사 컴퓨터의 LLM으로 보내고 답을 보여 주는 일만 한다.", "kind": "assumption", "source": "지어낸 앱이에요. 노트북 안에서 모델을 돌리는 앱도, 파일을 다루는 기능이 붙은 앱도 실제로 있어요." },
    { "claim": "영수증 파일은 12개다: 3월 5개, 4월 4개, 5월 3개.", "kind": "assumption", "source": "이 안내서를 위해 지어낸 예시예요." },
    { "claim": "파일 이름에는 0312_화분.jpg처럼 날짜가 들어 있다.", "kind": "assumption", "source": "이 안내서를 위해 지어낸 예시예요." },
    { "claim": "첫 답장은 몇 초 뒤에 오고, 정리 방법 5단계가 적혀 있다.", "kind": "assumption", "source": "보기 쉽게 정한 값이에요. 실제 답은 달라질 수 있어요." },
    { "claim": "일부만 알려 주는 경우로 파일 이름 3개를 고른다.", "kind": "assumption", "source": "0개와 12개 사이를 보여 주려고 정한 값이에요." },
    { "claim": "이 예에서 LLM은 받은 파일 이름을 날짜대로 맞게 나눠 적는다.", "kind": "assumption", "source": "지어낸 결과예요. 실제 LLM의 답은 달라질 수 있고 틀릴 때도 있어요." }
  ],
  "goals": [
    { "text": "채팅 앱과 LLM이 서로 다른 것임을", "step": 2 },
    { "text": "LLM이 답을 만드는 방식", "step": 3 },
    { "text": "답을 받고도 폴더가 그대로인 이유", "step": 5 },
    { "text": "알려 주지 않은 것은 LLM이 확인 못 함을", "step": 6 },
    { "text": "LLM 혼자서는 못 하는 두 가지", "step": 7 }
  ],
  "metrics": [
    { "id": "llm", "label": "AI가 옮긴 파일", "unit": "개", "icon": "chip" },
    { "id": "hand", "label": "지민이 옮긴 파일", "unit": "개", "icon": "user" },
    { "id": "done", "label": "정리된 파일", "unit": "개", "icon": "file" }
  ],
  "legend": [
    { "kind": "request", "label": "지민의 글" },
    { "kind": "response", "label": "AI의 답장" },
    { "kind": "write", "label": "파일 옮기기" }
  ],
  "nodes": {
    "laptop": { "type": "zone", "x": 2, "y": -7.5, "w": 20, "h": 13, "color": "yellow", "label": "지민의 노트북" },
    "jimin": { "type": "actor", "x": 8, "y": -19, "color": "gray", "label": "지민", "sub": "꽃집 사장" },
    "app": { "type": "device", "x": 8, "y": -10, "color": "yellow", "label": "채팅 앱", "sub": "노트북 화면" },
    "folder": { "type": "db", "x": -1, "y": -10, "color": "violet", "glyph": "file", "label": "영수증 폴더", "sub": "사진 12개" },
    "llm": { "type": "block", "x": 8, "y": 4, "color": "orange", "glyph": "chip", "label": "LLM", "sub": "AI 회사의 컴퓨터" }
  },
  "links": {
    "type": { "from": "jimin", "to": "app", "label": "부탁 한 줄" },
    "send": { "from": "app", "to": "llm", "label": "지민의 글" },
    "reply": { "from": "llm", "to": "app", "label": "답장" },
    "reach": { "from": "llm", "to": "folder", "label": "닿는 길 없음", "route": "x-first" },
    "hand": { "from": "jimin", "to": "folder", "label": "직접 12번", "route": "x-first" }
  },
  "steps": [
    {
      "short": "뒤섞임",
      "chapter": "setup",
      "title": "영수증 12개가 뒤섞여 있어요",
      "body": [
        "지민은 작은 꽃집을 해요. 노트북의 <b>영수증 폴더</b>에는 3월부터 5월까지 찍어 둔 영수증 사진 12개가 한데 섞여 있어요.",
        "월별로 나눠 담아야 하는데 손이 안 가요. 지민은 AI에게 맡겨 보기로 해요. 그림 위 숫자 칸은 아직 비어 있어요."
      ],
      "callout": { "kind": "tip", "text": "이 안내서는 끝까지 이 폴더 하나만 따라가요. 정리된 파일이 12개가 되면 일이 끝난 거예요." },
      "metrics": { "llm": null, "hand": null, "done": null },
      "scene": {
        "show": ["laptop", "jimin", "folder"],
        "state": { "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] } },
        "links": {},
        "flows": [],
        "panel": null
      }
    },
    {
      "short": "부탁",
      "chapter": "technique",
      "title": "지민이 채팅 앱에 부탁해요",
      "body": [
        "지민은 늘 쓰던 AI 채팅 앱을 열고 한 줄을 써요. <em>“영수증 폴더를 월별로 정리해 줘.”</em>",
        "이 한 줄이 어디로 가서 무엇이 되어 돌아오는지 따라가 봐요. 움직이는 점은 글이 가는 방향을 되풀이해서 보여 줘요."
      ],
      "changes": ["+ 채팅 앱", "+ 지민 → 앱: 부탁 한 줄"],
      "metrics": { "llm": null, "hand": null, "done": null },
      "scene": {
        "show": ["laptop", "jimin", "folder", "app"],
        "state": { "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] } },
        "links": { "type": {} },
        "flows": [{ "route": ["type"], "kind": "request", "rate": 0.6 }],
        "panel": null
      }
    },
    {
      "short": "LLM",
      "chapter": "technique",
      "title": "글은 앱 밖의 LLM에게 가요",
      "body": [
        "채팅 앱은 답을 직접 만들지 않아요. 지민이 쓰는 이 앱은 글을 AI 회사의 컴퓨터로 보내요. 거기에 글을 받아 글을 쓰는 프로그램, <span class=\"term\">LLM</span>(큰 언어 모델)이 있어요.",
        "ChatGPT에서 답을 쓰는 LLM의 이름이 GPT예요. Claude는 Anthropic이라는 회사가 만든, ChatGPT와 비슷한 AI이자 그 LLM의 이름이에요. LLM은 줄여서 <b>모델</b>이라고도 불러요."
      ],
      "callout": { "kind": "insight", "text": "화면에 보이는 앱과 답을 쓰는 LLM은 서로 다른 프로그램이에요." },
      "changes": ["+ LLM: 노트북 밖, AI 회사의 컴퓨터", "+ 앱 → LLM: 지민의 글"],
      "metrics": { "llm": null, "hand": null, "done": null },
      "scene": {
        "show": ["laptop", "jimin", "folder", "app", "llm"],
        "state": { "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] } },
        "links": { "type": { "style": "dashed" }, "send": {} },
        "flows": [{ "route": ["send"], "kind": "request", "rate": 0.6 }],
        "panel": null
      }
    },
    {
      "short": "이어 쓰기",
      "chapter": "technique",
      "title": "LLM은 다음 말을 이어 써요",
      "body": [
        "이런 모델은 처음 배울 때 아주 많은 글을 읽으며, 앞의 글을 보고 <b>다음에 올 말</b>을 맞히는 연습을 해요.",
        "답할 때는 그렇게 배운 대로, 지민의 부탁 뒤에 올 법한 말을 한 조각씩 이어 붙여요. 모델 옆 꼬리표에서 답의 첫 조각들을 보세요."
      ],
      "callout": { "kind": "insight", "text": "LLM이 내놓는 것은 답이에요. 행동이 아니에요." },
      "changes": ["~ LLM: 답을 한 조각씩 쓰는 중"],
      "metrics": { "llm": null, "hand": null, "done": null },
      "scene": {
        "show": ["laptop", "jimin", "folder", "app", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 뒤섞임", "tone": "amber" }] },
          "llm": { "tags": [{ "text": "“먼저” “폴더를” “세 개” …", "tone": "violet" }] }
        },
        "links": { "type": { "style": "dashed" }, "send": {} },
        "flows": [{ "route": ["send"], "kind": "request", "rate": 0.6 }],
        "panel": null
      }
    },
    {
      "short": "답장",
      "chapter": "solution",
      "title": "답장이 글로 돌아와요",
      "body": [
        "몇 초 뒤 답이 앱 화면에 떠요. 월별 폴더를 만들고 사진을 나눠 담는 방법이 다섯 단계로 적혀 있어요.",
        "그런데 폴더를 보세요. 사진은 하나도 움직이지 않았어요. AI가 옮긴 파일은 <b>0개</b>예요."
      ],
      "changes": ["+ LLM → 앱: 답장, 방법 5단계 (화살표가 뒤집혀요)", "~ AI가 옮긴 파일 0개", "~ 폴더: 12개 그대로"],
      "metrics": { "llm": 0, "hand": null, "done": 0 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "app", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 그대로", "tone": "amber" }] },
          "app": { "tags": [{ "text": "답장 · 방법 5단계", "tone": "green" }] }
        },
        "links": { "type": { "style": "dashed" }, "reply": {} },
        "flows": [{ "route": ["reply"], "kind": "response", "rate": 0.6 }],
        "panel": null
      }
    },
    {
      "short": "길 없음",
      "chapter": "problem",
      "title": "LLM은 폴더에 닿지 못해요",
      "body": [
        "지민의 앱이 하는 일은 둘뿐이에요. 글을 보내고, 답을 보여 줘요. 폴더를 열어 주거나 사진을 옮겨 주는 기능은 없어요.",
        "그래서 LLM은 폴더를 들여다볼 수도, 사진을 옮길 수도 없어요. 폴더에 사진이 몇 개인지도 확인할 수 없어요. 지민이 알려 주지 않았으니까요."
      ],
      "callout": { "kind": "tip", "text": "폴더를 대신 열어 주는 기능이 붙은 앱도 있어요. 그때 폴더를 여는 것은 LLM이 아니라 그 기능이에요. 다음 편의 주인공이에요." },
      "changes": ["+ LLM → 폴더: 닿는 길 없음", "~ LLM에 붉은 빛: 여기서 막혀요"],
      "metrics": { "llm": 0, "hand": null, "done": 0 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "app", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 그대로", "tone": "amber" }] },
          "app": { "tags": [{ "text": "답장 · 방법 5단계", "tone": "green" }] },
          "llm": { "heat": 0.5 }
        },
        "links": { "type": { "style": "dashed" }, "send": { "style": "dashed", "label": "" }, "reply": { "style": "dashed", "label": "글만 오가는 길" }, "reach": { "style": "cut" } },
        "flows": [],
        "panel": null
      }
    },
    {
      "short": "붙여 넣기",
      "chapter": "problem",
      "title": "파일 이름을 붙여 넣어 봐요",
      "body": [
        "그럼 지민이 폴더 안을 글로 알려 주면 어떨까요? 파일 이름에는 <code>0312_화분.jpg</code>처럼 날짜가 들어 있어요.",
        "지민이 파일 이름을 몇 개 붙여 넣을지 골라 보세요. LLM이 <b>나눠 적은 이름 수</b>와 <b>옮긴 파일 수</b>를 따로 보세요."
      ],
      "changes": ["~ 앱: 지민이 새 글을 쓰는 중 (고르기 전)"],
      "metrics": { "llm": 0, "hand": null, "done": 0 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "app", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 그대로", "tone": "amber" }] },
          "app": { "tags": [{ "text": "새 글 쓰는 중", "tone": "paper" }] }
        },
        "links": { "type": { "style": "dashed" }, "send": { "style": "dashed", "label": "" }, "reply": { "style": "dashed", "label": "글만 오가는 길" }, "reach": { "style": "cut" } },
        "flows": [],
        "panel": null
      },
      "try": {
        "prompt": "붙여 넣을 파일 이름 수를 고르세요.",
        "options": [
          {
            "label": "0개",
            "verdict": { "tone": "red", "text": "방법만 다시 설명", "why": "받은 파일 이름이 0개라 나눠 적은 이름도 0개, 옮긴 파일도 0개예요." },
            "scene": {
              "state": {
                "folder": { "tags": [{ "text": "12개 · 그대로", "tone": "amber" }] },
                "app": { "tags": [{ "text": "이름 0개 나눠 적음", "tone": "red" }] },
                "llm": { "tags": [{ "text": "받은 이름 0개", "tone": "red" }] }
              },
              "links": { "type": { "style": "dashed" }, "send": { "label": "" }, "reply": { "label": "글만 오가는 길" }, "reach": { "style": "cut" } },
              "flows": [{ "route": ["send"], "kind": "request", "rate": 0.5 }, { "route": ["reply"], "kind": "response", "rate": 0.5 }]
            }
          },
          {
            "label": "3개",
            "verdict": { "tone": "amber", "text": "3개만 나눠 적음", "why": "받은 3개는 날짜대로 나눠 적었지만 나머지 9개는 모르고, 옮긴 파일은 0개예요." },
            "scene": {
              "state": {
                "folder": { "tags": [{ "text": "12개 · 그대로", "tone": "amber" }] },
                "app": { "tags": [{ "text": "이름 3개 나눠 적음", "tone": "amber" }] },
                "llm": { "tags": [{ "text": "받은 이름 3개", "tone": "amber" }] }
              },
              "links": { "type": { "style": "dashed" }, "send": { "label": "" }, "reply": { "label": "글만 오가는 길" }, "reach": { "style": "cut" } },
              "flows": [{ "route": ["send"], "kind": "request", "rate": 0.5 }, { "route": ["reply"], "kind": "response", "rate": 0.5 }]
            }
          },
          {
            "label": "12개",
            "verdict": { "tone": "amber", "text": "이름 12개, 이동 0개", "why": "12개를 3월 5, 4월 4, 5월 3으로 나눠 적었지만 전부 글이라, 옮긴 파일은 0개예요." },
            "scene": {
              "state": {
                "folder": { "tags": [{ "text": "12개 · 그대로", "tone": "amber" }] },
                "app": { "tags": [{ "text": "이름 12개 나눠 적음", "tone": "green" }] },
                "llm": { "tags": [{ "text": "받은 이름 12개", "tone": "green" }] }
              },
              "links": { "type": { "style": "dashed" }, "send": { "label": "" }, "reply": { "label": "글만 오가는 길" }, "reach": { "style": "cut" } },
              "flows": [{ "route": ["send"], "kind": "request", "rate": 0.5 }, { "route": ["reply"], "kind": "response", "rate": 0.5 }]
            }
          }
        ]
      }
    },
    {
      "short": "눈과 손",
      "chapter": "insight",
      "title": "똑똑하지만 눈과 손이 없어요",
      "body": [
        "이제 이름 12개를 모두 붙여 넣은 경우로 이어 가요. 이 예에서 LLM은 3월 5개, 4월 4개, 5월 3개로 날짜대로 나눠 적었어요.",
        "부족한 것은 머리가 아니에요. 폴더를 <b>직접 열어 볼 눈</b>과 사진을 <b>옮길 손</b>이에요. LLM 혼자서는 둘 다 없어요."
      ],
      "callout": { "kind": "warn", "text": "실제 LLM의 답은 틀릴 때도 있어요. 그리고 ‘AI가 내 파일을 정리해 줬다’는 말이 맞으려면, LLM 말고 무언가가 더 있어야 해요." },
      "changes": ["~ 답장: 3월 5 · 4월 4 · 5월 3", "~ LLM: 폴더 볼 눈, 옮길 손 없음"],
      "metrics": { "llm": 0, "hand": null, "done": 0 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "app", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 그대로", "tone": "amber" }] },
          "app": { "tags": [{ "text": "3월 5 · 4월 4 · 5월 3", "tone": "green" }] },
          "llm": { "tags": [{ "text": "옮길 손 없음", "tone": "red" }, { "text": "폴더 볼 눈 없음", "tone": "red" }] }
        },
        "links": { "type": { "style": "dashed" }, "reply": {}, "reach": { "style": "cut" } },
        "flows": [{ "route": ["reply"], "kind": "response", "rate": 0.5 }],
        "panel": null
      }
    },
    {
      "short": "직접 옮기기",
      "chapter": "tradeoff",
      "title": "결국 지민이 12번 옮겨요",
      "body": [
        "지민은 답장을 보며 월별 폴더 세 개를 만들고, 사진을 하나씩 끌어다 놓아요. 열두 번이에요. 그림은 그 열두 번을 한 장면으로 줄여 보여 줘요.",
        "정리된 파일 12개 가운데 AI가 옮긴 것은 0개, 지민이 옮긴 것이 <b>12개</b>예요. LLM은 조언을 했고, 일은 지민이 했어요."
      ],
      "changes": ["+ 지민 → 폴더: 직접 12번", "~ 정리된 파일 0 → 12개", "~ LLM은 흐리게: 더 하는 일이 없어요"],
      "metrics": { "llm": 0, "hand": 12, "done": 12 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "app", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 월별 정리", "tone": "green" }] },
          "app": { "tags": [{ "text": "3월 5 · 4월 4 · 5월 3", "tone": "green" }] },
          "llm": { "dim": true }
        },
        "links": { "type": { "style": "dashed" }, "send": { "style": "dashed", "label": "" }, "reply": { "style": "dashed", "label": "글만 오가는 길" }, "reach": { "style": "cut" }, "hand": {} },
        "flows": [{ "route": ["hand"], "kind": "write", "rate": 1 }],
        "panel": null
      }
    },
    {
      "short": "정리",
      "chapter": "recap",
      "title": "LLM은 글을 쓰는 두뇌예요",
      "body": [
        "정리된 파일 12개 가운데 AI가 옮긴 것은 <b>0개</b>였어요. LLM은 나눠 담을 목록까지 써 줬지만, 파일은 지민이 12번에 걸쳐 직접 옮겼어요.",
        "<ul class=\"takeaways\"><li><b>LLM</b>은 글을 받아 다음 말을 이어 쓰는 프로그램이에요. ChatGPT 안의 GPT, 그리고 ChatGPT와 비슷한 Claude가 LLM이에요.</li><li>LLM이 내놓는 것은 <b>답</b>이에요. 행동이 아니에요.</li><li>폴더에 실제로 무엇이 있는지는, <b>누가 알려 주지 않으면</b> LLM이 확인할 수 없어요.</li><li>답이 실제 일이 되려면, 대신 보고 대신 옮겨 줄 <b>사람이나 프로그램</b>이 LLM 밖에 있어야 해요.</li></ul>"
      ],
      "callout": { "kind": "next", "text": "<b>LLM에게 손을 달다</b>: 지민 대신 폴더를 열어 보고 사진을 옮겨 주는 프로그램, 하네스를 만나요." },
      "metrics": { "llm": 0, "hand": 12, "done": 12 },
      "scene": {
        "show": ["laptop", "jimin", "folder", "app", "llm"],
        "state": {
          "folder": { "tags": [{ "text": "12개 · 월별 정리", "tone": "green" }] },
          "llm": { "tags": [{ "text": "쓴 답장 2건", "tone": "paper" }] }
        },
        "links": { "type": { "style": "dashed" }, "send": { "style": "dashed", "label": "" }, "reply": { "style": "dashed", "label": "글만 오가는 길" }, "reach": { "style": "cut" }, "hand": { "style": "dashed" } },
        "flows": [],
        "panel": { "title": "누가 옮겼나", "lines": ["AI가 옮긴 파일  0개", "지민이 옮긴 파일  12개", "= 정리된 파일  12개"] }
      }
    }
  ]
});
