Diorama.walkthrough({
  "id": "harnesses",
  "title": "같은 두뇌, 다른 작업실",
  "question": "모델이 같아도, 하네스가 다르면 결과가 달라질까요?",
  "summary": "ChatGPT의 Codex, Claude Code, omp가 무엇이 같고 다른지, 도구 하나만 바꾼 실험으로 알아봐요.",
  "minutes": 9,
  "level": "beginner",
  "note": "실험 숫자는 omp를 만든 사람이 직접 재서 공개한 값이에요. 프로그램 코드를 고치는 문제에서 잰 것이라, 다른 일에서는 다를 수 있어요.",
  "sources": [
    { "claim": "ChatGPT에서 답을 쓰는 것은 OpenAI의 GPT 모델이고, Codex는 ChatGPT 앱에 들어 있는 코딩용 제품이다.", "kind": "data", "source": "OpenAI 도움말, ‘ChatGPT Work and Codex’", "url": "https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex" },
    { "claim": "OpenAI는 Codex에서 되풀이와 실행을 맡는 부분을 하네스라고 부르고, 모델별 지시문을 함께 넣어 둔다.", "kind": "data", "source": "OpenAI, ‘Unrolling the Codex agent loop’ 머리말과 ‘Building the initial prompt’ 절", "url": "https://openai.com/index/unrolling-the-codex-agent-loop/" },
    { "claim": "Claude는 Anthropic이 만든 LLM 계열의 이름이다.", "kind": "data", "source": "Anthropic, ‘Models overview’ 첫 문장", "url": "https://platform.claude.com/docs/en/models/overview" },
    { "claim": "Claude Code는 Claude 모델을 쓰는, 모델 둘레의 하네스다.", "kind": "data", "source": "Claude Code 문서, ‘How Claude Code works’, ‘The agentic loop’와 ‘Models’ 절", "url": "https://code.claude.com/docs/en/how-claude-code-works" },
    { "claim": "Codex와 Claude Code에는 둘 다 도구, 되풀이, 언제 물을지 정하는 설정이 있다.", "kind": "data", "source": "OpenAI ‘Unrolling the Codex agent loop’; Codex 문서 ‘Agent approvals & security’; Claude Code 문서 ‘How Claude Code works’", "url": "https://code.claude.com/docs/en/how-claude-code-works" },
    { "claim": "omp는 Stencil Labs가 만드는 오픈소스 하네스이고, 모델 제공처 60곳 이상과 도구 31개를 내세운다.", "kind": "data", "source": "omp README (프로젝트가 스스로 밝힌 숫자)", "url": "https://github.com/can1357/oh-my-pi" },
    { "claim": "omp는 Anthropic과 OpenAI의 모델을 모두 연결할 수 있다.", "kind": "data", "source": "omp 문서, ‘Providers’, ‘Current provider matrix’", "url": "https://omp.sh/docs/providers" },
    { "claim": "모델 Grok Code Fast 1의 성공률은 고치는 도구만 바꾸자 6.7%에서 68.3%가 됐다.", "kind": "data", "source": "Can Bölük, ‘The harness problem’ (2026-02-12). 글쓴이는 omp를 만든 사람이에요.", "url": "https://stencil.so/blog/the-harness-problem" },
    { "claim": "실험은 코드 파일의 작은 오류를 고치는 문제 180개를 3번씩 풀게 한 것이다.", "kind": "data", "source": "Can Bölük, ‘The harness problem’, ‘The Benchmark’ 절", "url": "https://stencil.so/blog/the-harness-problem" },
    { "claim": "도구 A(patch)는 정해진 양식의 글 뭉치로 바꿀 곳을 적는 방식이고 Codex가 쓴다. 도구 B(hashline)는 줄마다 붙은 짧은 꼬리표를 가리키는 방식이다.", "kind": "data", "source": "Can Bölük, ‘The harness problem’, ‘Edit Tool!’과 ‘Hashline!’ 절", "url": "https://stencil.so/blog/the-harness-problem" },
    { "claim": "같은 실험에서 모델 16개 가운데 14개가 도구 B에서 더 잘했고, 약한 모델일수록 차이가 컸다.", "kind": "data", "source": "Can Bölük, ‘The harness problem’ (글쓴이의 측정)", "url": "https://stencil.so/blog/the-harness-problem" },
    { "claim": "모델은 무엇을 고칠지는 알았지만 도구의 양식으로 적어 내는 데서 자주 틀렸다.", "kind": "assumption", "source": "실험을 한 사람의 풀이예요(‘So What?’ 절). 따로 확인된 사실은 아니에요." },
    { "claim": "성공률 6.7%와 68.3%를 ‘100번 시도에 6.7번, 68.3번’으로 바꿔 적는다.", "kind": "assumption", "source": "읽기 쉽게 바꾼 표현이에요. 실제 시도는 180 × 3 = 540번이에요." }
  ],
  "goals": [
    { "text": "GPT와 Claude가 같은 종류, LLM임을", "step": 0 },
    { "text": "Claude Code가 Codex와 같은 종류임을", "step": 2 },
    { "text": "omp가 다른 두 하네스와 다른 점", "step": 3 },
    { "text": "같은 모델도 하네스에 따라 달라짐을", "step": 6 },
    { "text": "실험 숫자를 읽을 때 조심할 점", "step": 8 }
  ],
  "metrics": [
    { "id": "ok", "label": "성공", "unit": "번", "icon": "bolt" },
    { "id": "fail", "label": "실패", "unit": "번", "icon": "shield" },
    { "id": "tries", "label": "시도 (100번으로 환산)", "unit": "번", "icon": "clock" }
  ],
  "legend": [
    { "kind": "request", "label": "하네스가 모델에게 보내는 글" },
    { "kind": "response", "label": "모델이 돌려준 글" }
  ],
  "nodes": {
    "gpt": { "type": "block", "x": -10, "y": 10, "color": "orange", "glyph": "chip", "label": "GPT", "sub": "LLM · OpenAI" },
    "claude": { "type": "block", "x": 0, "y": 10, "color": "orange", "glyph": "chip", "label": "Claude", "sub": "LLM · Anthropic" },
    "grok": { "type": "block", "x": 10, "y": 10, "color": "orange", "glyph": "chip", "label": "실험용 모델", "sub": "LLM · Grok Code Fast 1" },
    "codex": { "type": "block", "x": -10, "y": 0, "color": "blue", "glyph": "gear", "label": "Codex", "sub": "하네스 · ChatGPT 안" },
    "cc": { "type": "block", "x": 0, "y": 0, "color": "blue", "glyph": "gear", "label": "Claude Code", "sub": "하네스 · Anthropic" },
    "omp": { "type": "block", "x": 10, "y": 0, "color": "blue", "glyph": "gear", "label": "omp", "sub": "하네스 · 오픈소스" }
  },
  "links": {
    "l1": { "from": "codex", "to": "gpt", "label": "한 짝" },
    "l2": { "from": "cc", "to": "claude", "label": "한 짝" },
    "l3": { "from": "omp", "to": "grok", "label": "같은 모델, 같은 문제" }
  },
  "steps": [
    {
      "short": "두 LLM",
      "chapter": "setup",
      "title": "친구들은 저마다 다른 걸 써요",
      "body": [
        "지민이 물어보니 한 친구는 ChatGPT의 Codex를, 다른 친구는 Claude Code를 쓴대요. 이름이 다르면 무엇이 다를까요? 먼저 두뇌부터 놓아 봐요.",
        "GPT는 ChatGPT에서 답을 쓰는 LLM이에요. Claude는 Anthropic이라는 회사가 만든, GPT와 같은 종류의 LLM이에요. 둘 다 글을 받아 글을 써요."
      ],
      "callout": { "kind": "tip", "text": "이 편의 숫자 칸은 뒤에 나오는 실험에서 채워져요. 100번 시도하면 몇 번 성공하는지를 세요." },
      "metrics": { "ok": null, "fail": null, "tries": null },
      "scene": {
        "show": ["gpt", "claude"],
        "state": {},
        "links": {},
        "flows": [],
        "panel": null
      }
    },
    {
      "short": "Codex",
      "chapter": "technique",
      "title": "Codex는 GPT 둘레의 하네스예요",
      "body": [
        "ChatGPT를 만든 OpenAI는 GPT 둘레에 하네스도 만들었어요. 이름이 Codex예요. ChatGPT 앱에서 Codex를 고르면, GPT가 쪽지를 쓰고 Codex가 노트북에서 실행해요.",
        "그러니까 ChatGPT 안에는 이름이 여럿 있어요. 답을 쓰는 LLM은 GPT, 그 쪽지를 실행하는 하네스는 Codex예요."
      ],
      "changes": ["+ Codex: ChatGPT 안의 하네스", "+ Codex → GPT: 함께 일하는 사이"],
      "metrics": { "ok": null, "fail": null, "tries": null },
      "scene": {
        "show": ["gpt", "claude", "codex"],
        "state": {},
        "links": { "l1": {} },
        "flows": [{ "route": ["l1"], "kind": "request", "bounce": true, "rate": 0.5 }],
        "panel": null
      }
    },
    {
      "short": "Claude Code",
      "chapter": "technique",
      "title": "Claude Code는 Codex와 같은 종류예요",
      "body": [
        "Anthropic도 자기 LLM인 Claude 둘레에 하네스를 만들었어요. 이름이 Claude Code예요. 이름은 낯설어도, ChatGPT의 Codex와 같은 종류의 프로그램이에요.",
        "둘 다 앞에서 본 세 가지를 해요. LLM에게 도구 목록을 주고, 쪽지를 실행하며 왕복을 되풀이하고, 위험한 일 앞에서는 멈춰서 사람에게 물어요."
      ],
      "callout": { "kind": "insight", "text": "GPT와 Claude가 짝이고, Codex와 Claude Code가 짝이에요. 앞의 둘은 LLM, 뒤의 둘은 하네스예요." },
      "changes": ["+ Claude Code: Claude 둘레의 하네스", "~ 두 하네스의 꼬리표: 도구, 되풀이, 허락"],
      "metrics": { "ok": null, "fail": null, "tries": null },
      "scene": {
        "show": ["gpt", "claude", "codex", "cc"],
        "state": {
          "codex": { "tags": [{ "text": "도구 · 되풀이 · 허락", "tone": "green" }] },
          "cc": { "tags": [{ "text": "도구 · 되풀이 · 허락", "tone": "green" }] }
        },
        "links": { "l1": {}, "l2": {} },
        "flows": [{ "route": ["l1"], "kind": "request", "bounce": true, "rate": 0.5 }, { "route": ["l2"], "kind": "request", "bounce": true, "rate": 0.5 }],
        "panel": null
      }
    },
    {
      "short": "omp",
      "chapter": "technique",
      "title": "omp는 모델을 골라 끼워요",
      "body": [
        "세 번째 하네스 omp는 AI 회사가 아니라, 누구나 속을 들여다볼 수 있게 공개된 프로그램이에요. 이런 프로그램을 오픈소스라고 해요.",
        "omp는 어느 한 모델에 묶여 있지 않아요. GPT도 Claude도, 그 밖의 여러 모델도 골라서 연결할 수 있어요. 그래서 모델 하나를 놓고 하네스 쪽만 바꿔 보는 실험을 하기 좋아요."
      ],
      "changes": ["+ omp: 오픈소스 하네스", "+ 실험용 모델"],
      "metrics": { "ok": null, "fail": null, "tries": null },
      "scene": {
        "show": ["gpt", "claude", "grok", "codex", "cc", "omp"],
        "state": {
          "codex": { "tags": [{ "text": "도구 · 되풀이 · 허락", "tone": "green" }] },
          "cc": { "tags": [{ "text": "도구 · 되풀이 · 허락", "tone": "green" }] },
          "omp": { "tags": [{ "text": "모델을 골라 연결", "tone": "violet" }] }
        },
        "links": { "l1": { "style": "dashed" }, "l2": { "style": "dashed" } },
        "flows": [],
        "panel": null
      }
    },
    {
      "short": "실험",
      "chapter": "problem",
      "title": "모델이 같으면 결과도 같을까요",
      "body": [
        "사람들은 흔히 어느 모델이 더 똑똑한지만 물어요. 하네스는 그저 껍데기일까요? omp를 만든 사람이 실험을 했어요. 모델은 하나로 고정하고, 하네스의 도구 하나만 바꿨어요.",
        "문제는 프로그램 코드 파일에 숨은 작은 오류 고치기 180개, 문제마다 3번씩이에요. 바꾼 도구는 파일을 고칠 때 쓰는 <b>고치는 도구</b>예요."
      ],
      "changes": ["+ omp → 실험용 모델: 같은 모델, 같은 문제", "~ 다른 두 짝은 흐리게"],
      "metrics": { "ok": null, "fail": null, "tries": null },
      "scene": {
        "show": ["gpt", "claude", "grok", "codex", "cc", "omp"],
        "state": {
          "gpt": { "dim": true },
          "claude": { "dim": true },
          "codex": { "dim": true },
          "cc": { "dim": true },
          "omp": { "tags": [{ "text": "문제 180개 × 3번", "tone": "paper" }] }
        },
        "links": { "l1": { "style": "off", "label": "" }, "l2": { "style": "off", "label": "" }, "l3": {} },
        "flows": [],
        "panel": null
      }
    },
    {
      "short": "도구 A",
      "chapter": "technique",
      "title": "도구 A: 100번에 7번쯤 성공해요",
      "body": [
        "도구 A는 바꿀 곳과 바꿀 내용을 까다로운 양식에 꼭 맞춰 적어 내야 하는 도구예요. 양식이 조금만 어긋나도 하네스는 실행하지 못해요.",
        "이 도구로는 성공률이 6.7%였어요. 100번 시도하면 <b>6.7번</b> 성공하고 93.3번 실패한 셈이에요. 붉게 터지는 점이 실패예요."
      ],
      "changes": ["~ omp: 고치는 도구 A", "~ 실험용 모델: 성공 6.7%", "~ 성공 6.7번, 실패 93.3번"],
      "metrics": { "ok": 6.7, "fail": 93.3, "tries": 100 },
      "scene": {
        "show": ["gpt", "claude", "grok", "codex", "cc", "omp"],
        "state": {
          "gpt": { "dim": true },
          "claude": { "dim": true },
          "codex": { "dim": true },
          "cc": { "dim": true },
          "omp": { "tags": [{ "text": "고치는 도구 A", "tone": "amber" }] },
          "grok": { "heat": 0.5, "tags": [{ "text": "성공 6.7%", "tone": "red" }] }
        },
        "links": { "l1": { "style": "off", "label": "" }, "l2": { "style": "off", "label": "" }, "l3": {} },
        "flows": [{ "route": ["~l3"], "kind": "response", "rate": 1.2, "fail": 0.93 }],
        "panel": null
      }
    },
    {
      "short": "도구 B",
      "chapter": "solution",
      "title": "도구만 B로 바꾸니 68번쯤 성공해요",
      "body": [
        "도구 B는 파일의 줄마다 짧은 꼬리표를 붙여 보여 주고, 모델이 그 꼬리표를 가리켜 “이 줄을 바꿔 줘” 하면 되는 도구예요.",
        "모델도 문제도 그대로인데 성공률이 68.3%가 됐어요. 100번에 <b>68.3번</b> 성공, 31.7번 실패예요. 달라진 것은 하네스의 도구 하나예요."
      ],
      "changes": ["~ omp: 고치는 도구 A → B", "~ 실험용 모델: 성공 6.7 → 68.3%", "~ 성공 68.3번, 실패 31.7번"],
      "metrics": { "ok": 68.3, "fail": 31.7, "tries": 100 },
      "scene": {
        "show": ["gpt", "claude", "grok", "codex", "cc", "omp"],
        "state": {
          "gpt": { "dim": true },
          "claude": { "dim": true },
          "codex": { "dim": true },
          "cc": { "dim": true },
          "omp": { "tags": [{ "text": "고치는 도구 B", "tone": "green" }] },
          "grok": { "tags": [{ "text": "성공 68.3%", "tone": "green" }] }
        },
        "links": { "l1": { "style": "off", "label": "" }, "l2": { "style": "off", "label": "" }, "l3": {} },
        "flows": [{ "route": ["~l3"], "kind": "response", "rate": 1.2, "fail": 0.32 }],
        "panel": null
      }
    },
    {
      "short": "같은 모델",
      "chapter": "insight",
      "title": "모델은 그대로였어요",
      "body": [
        "모델이 갑자기 똑똑해진 것이 아니에요. 실험을 한 사람은 이렇게 풀이해요. 모델은 무엇을 고칠지 알았지만, 도구 A의 양식으로 적어 내는 데서 자주 틀렸다고요.",
        "둘째 편에서 본 대로, 하네스는 정해진 양식의 쪽지만 실행해요. 양식이 까다로우면 좋은 판단도 실행되지 못해요."
      ],
      "callout": { "kind": "insight", "text": "결과는 모델 혼자 내는 것이 아니에요. 모델의 쪽지를 받아 실행하는 하네스가 함께 만들어요." },
      "changes": ["~ 실험용 모델: 두 결과를 나란히, 모델은 같음"],
      "metrics": { "ok": 68.3, "fail": 31.7, "tries": 100 },
      "scene": {
        "show": ["gpt", "claude", "grok", "codex", "cc", "omp"],
        "state": {
          "gpt": { "dim": true },
          "claude": { "dim": true },
          "codex": { "dim": true },
          "cc": { "dim": true },
          "omp": { "tags": [{ "text": "바뀐 것: 도구 하나", "tone": "violet" }] },
          "grok": { "tags": [{ "text": "B: 68.3%", "tone": "green" }, { "text": "A: 6.7%", "tone": "red" }] }
        },
        "links": { "l1": { "style": "off", "label": "" }, "l2": { "style": "off", "label": "" }, "l3": { "label": "모델은 그대로" } },
        "flows": [],
        "panel": null
      }
    },
    {
      "short": "조심할 점",
      "chapter": "tradeoff",
      "title": "이 숫자를 읽을 때 알아 둘 것",
      "body": [
        "이 실험은 omp를 만든 사람이 직접 하고 직접 발표했어요. 6.7%에서 68.3%는 가장 크게 오른 모델의 숫자예요. 모델 16개 가운데 14개가 도구 B에서 더 잘했지만, 오른 폭은 모델마다 달랐어요.",
        "잰 것도 코드 고치기 한 가지예요. 그러니 ‘omp가 가장 좋다’가 아니라 ‘하네스에 따라 결과가 달라질 수 있다’까지만 읽으면 돼요."
      ],
      "callout": { "kind": "warn", "text": "ChatGPT의 Codex와 Claude Code는 각자 자기 회사 모델에 맞춰 다듬어져 있어요. 이 실험은 그 둘의 우열을 가린 것이 아니에요." },
      "changes": ["~ omp: 잰 사람이 만든 사람", "~ 다른 두 짝이 다시 또렷하게"],
      "metrics": { "ok": 68.3, "fail": 31.7, "tries": 100 },
      "scene": {
        "show": ["gpt", "claude", "grok", "codex", "cc", "omp"],
        "state": {
          "omp": { "tags": [{ "text": "잰 사람 = 만든 사람", "tone": "amber" }] },
          "grok": { "tags": [{ "text": "16개 중 가장 큰 폭", "tone": "amber" }] }
        },
        "links": { "l1": { "style": "dashed" }, "l2": { "style": "dashed" }, "l3": { "style": "dashed", "label": "코드 고치기만 잼" } },
        "flows": [],
        "panel": null
      }
    },
    {
      "short": "정리",
      "chapter": "recap",
      "title": "같은 모델, 6.7%에서 68.3%로",
      "body": [
        "같은 모델, 같은 문제에서 하네스의 도구 하나를 바꾸자 성공이 100번에 <b>6.7번</b>에서 <b>68.3번</b>이 됐어요.",
        "<ul class=\"takeaways\"><li>GPT와 Claude는 <b>LLM</b>이에요. 서로 같은 종류예요.</li><li>ChatGPT의 Codex와 Claude Code는 <b>하네스</b>예요. 서로 같은 종류이고, omp도 하네스예요.</li><li>하네스마다 <b>도구와 쪽지의 양식</b>이 달라요.</li><li>같은 모델도 하네스에 따라 결과가 달라질 수 있어요. “어느 AI가 똑똑해?”와 함께 “<b>어느 하네스에서?</b>”도 물어보세요.</li></ul>"
      ],
      "callout": { "kind": "next", "text": "<b>전체 보기</b>: 다섯 편의 제목을 다시 읽어 보세요. LLM은 글을 쓰고, 하네스는 실행하고, 둘이 함께 일하면 에이전트예요." },
      "metrics": { "ok": 68.3, "fail": 31.7, "tries": 100 },
      "scene": {
        "show": ["gpt", "claude", "grok", "codex", "cc", "omp"],
        "state": {
          "omp": { "tags": [{ "text": "바뀐 것: 도구 하나", "tone": "violet" }] },
          "grok": { "tags": [{ "text": "6.7 → 68.3%", "tone": "green" }] }
        },
        "links": { "l1": { "style": "dashed" }, "l2": { "style": "dashed" }, "l3": { "style": "dashed", "label": "" } },
        "flows": [],
        "panel": { "title": "100번 시도하면", "lines": ["! 도구 A  성공 6.7번", "= 도구 B  성공 68.3번", "# 같은 모델, 같은 문제"] }
      }
    }
  ]
});
