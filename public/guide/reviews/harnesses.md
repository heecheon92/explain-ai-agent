# Review: 같은 두뇌, 다른 작업실 (`harnesses`)

- **Reviewed:** 2026-11-22
- **Reviewer:** OpenAI `gpt-6.2-sol` (OMP; ego-browser/Chromium)
- **Author:** Claude (different model; exact version and tool unknown)
- **Independence:** independent
- **Rendered and stepped through:** yes, in ego-browser; read all 10 steps before opening the data, then stepped through again at 1440 × 900
- **Sheet read:** yes, 0 warnings and 0 notes in Checks; visually checked all 10 tiles. No errors in the observed browser console. No try steps.
- **Format checks:** done

## Verdict

Needs changes. Claude Code와 Codex가 같은 종류라는 설명은 명확하지만, 실제 제품이 언제 허락을 묻는지와 벤치마크에서 무엇이 실패했는지를 잘못 가르쳐요.

## Reader pass

- 1단계의 친구 이야기는 정의부터 시작하지 않아서 읽기 쉬웠어요. 2단계에서 익숙한 ChatGPT를 기준으로 GPT(글을 쓰는 모델)와 Codex(일을 실행하는 하네스)를 구분할 수 있었어요.
- **3단계에서 취지가 명확했어요:** Claude Code를 처음 듣더라도 “ChatGPT의 Codex와 같은 종류의 프로그램”이라는 문장과 파란 상자 두 개로, Claude Code는 Claude 모델 자체가 아니라 Codex처럼 모델을 둘러싼 프로그램이라고 말할 수 있어요. 10단계도 이 구분을 다시 짚어요.
- 5단계에서 무엇을 고치는 시험인지 다시 읽었어요. 앞서 따라온 영수증 정리와는 다른 일이고, ‘프로그램 코드’가 무엇인지, 어떤 상태면 성공인지 바로 잡히지 않았어요. 6–7단계의 A/B 숫자 대비는 선명해요.
- 마지막 그림만 봐도 파란 하네스와 주황 모델의 세 조합, 그리고 오른쪽의 A/B 성공 비교는 읽을 수 있어요. 다만 위쪽 성공·실패 칸에는 B라는 표지가 없어서 어느 쪽 수치인지 작은 비교 카드로 돌아가야 해요.
- 이전 버튼, ←/→, Pause/Resume, Replay를 확인했어요. Replay에서 Claude Code 상자가 다시 들어오고, 실험 수치는 6단계부터 나타나요. 고정된 상자들은 같은 바닥 위치를 쓰고 화면이 넓게 잡힐 때 함께 작아져요.

## Findings

| # | Severity | Step | Finding | Suggested fix |
|---|---|---|---|---|
| 1 | blocker | 1–5 | 지민이 친구들에게 뭘 쓰는지 묻지만, 무엇을 해 보려는지는 나오지 않아요. 지민은 곧 사라지고 5단계에서 처음으로 실제 사례가 시작돼요. 그때 처음 필요한 ‘프로그램 코드 파일’도 앞 네 편의 독자 본문에서는 풀이하지 않았어요. 이대로면 브랜드 소개에서 낯선 시험으로 넘어가며 한 가지 일을 따라가는 흐름이 끊겨요. | 지민의 영수증 부탁에서 생긴 질문(“같은 모델의 쪽지도 받아 쓰는 도구가 다르면 결과가 다를까?”)으로 시작해 실험으로 이어 주세요. 5단계에서 “프로그램이 할 일을 적은 글, 즉 코드”를 짧게 풀고, 영수증이 아니라 그 글의 오류를 고치는 별도 실험이라고 구분해 주세요. |
| 2 | blocker | 2 | “ChatGPT 앱에서 Codex를 고르면 … Codex가 노트북에서 실행해요”라고 해요. 같은 데스크톱 앱에서도 Codex Cloud 작업은 OpenAI 쪽 컴퓨터에서 실행돼요. 앱을 고른 것만으로 실행 장소가 정해지지는 않아요. | “ChatGPT 데스크톱 앱에서 Codex로 내 컴퓨터의 폴더를 열어 일할 때…”처럼 이 장면을 로컬 작업으로 한정해 주세요. GPT는 글을 쓰고 Codex의 하네스는 실행한다는 대조는 유지해 주세요. |
| 3 | blocker | 3 | “위험한 일 앞에서는 멈춰서 사람에게 물어요”는 두 제품 모두의 안전 보장처럼 읽혀요. Claude Code의 자동 모드는 사람에게 묻는 대신 위험한 일을 막기도 하고, Codex도 허락을 묻지 않거나 다른 검토 방식으로 처리하도록 설정할 수 있어요. | “둘 다 허락 설정을 확인해요. 사람에게 물어보라고 정해 둔 일은 실행하기 전에 물어요.”처럼 설정에 따라 달라진다고 말해 주세요. |
| 4 | blocker | 4 | “누구나 속을 들여다볼 수 있게 공개된 프로그램”을 오픈소스라고 정의해요. 코드를 볼 수 있다는 사실만으로는 고치거나 나눠 쓸 수 있는 오픈소스가 되지 않아요. “AI 회사가 아니라 … 프로그램”도 앞의 두 제품을 회사와 혼동하게 해요. | omp는 Stencil Labs가 만든 프로그램이며, 누구나 코드를 보고 정해진 조건에 따라 고치고 나눌 수 있게 공개한 오픈소스라고 말해 주세요. |
| 5 | blocker | 6–8 | 6–7단계에서 범례가 ‘모델이 돌려준 글’이라고 설명한 점이 omp에 닿을 때 붉게 터져요. 그런데 점이 터지는 비율은 **파일 고치기 과제 전체의 실패율**이에요. 모델의 글이 못 도착했거나, 실패한 시도마다 쪽지 양식이 틀렸다는 뜻은 아니에요. 6단계의 뜨거운 실험용 모델 상자도 문제가 모델 자체에 있는 것처럼 보여요. | 모델↔하네스의 글 전달과 과제 결과를 분리해 주세요. 실패는 ‘고치는 도구’ 쪽에 “파일 고치기 실패”로 표시하거나 숫자·표로만 보여 주세요. 형식 오류는 적용 실패의 가능한 이유로, 8단계의 설명은 실험자의 해석으로 남겨 주세요. |
| 6 | should-fix | 3–4, 6–7 | 제품 종류의 대조는 잘 되지만, 실제 파일을 고치는 방식을 새로 설명할 때 어느 형식이 Codex에서 쓰이는지는 접힌 출처로 들어가야 보이고, Claude Code의 방식은 없어요. 4단계의 그림에서 omp만 모델을 고를 수 있는 것처럼 읽히는 것도, 선택할 수 있는 **회사의 범위**와 **같은 회사 안의 모델 선택**을 섞어요. | 4단계에서 omp는 여러 **회사의** 모델을 연결할 수 있다고 명시해 주세요. A를 설명할 때 Codex가 쓰는 양식과 Claude Code가 쓰는 ‘원래 글을 그대로 찾아 새 글로 바꾸는’ 방식을 나란히 짧게 말하고, 실험의 A/B가 제품 순위 경쟁은 아니라고 바로 선을 그어 주세요. |
| 7 | should-fix | 1, 5–10 | “100번 시도하면”은 100번을 실제로 해 봤거나 다음 100번의 결과를 예측한 듯 들려요. ‘시도 (100번으로 환산)’은 맞지만 5단계에서 180×3과의 관계, 성공 판정 방법을 바로 알 수 없고 8–10단계의 숫자 칸은 B라는 표시가 없어요. 이 편의 질문도 ‘달라질까요?’라서 답이 ‘네’에서 멈춰요. | 5단계에서 도구별로 같은 문제를 3회씩 풀고 파일을 원래대로 되돌렸는지 검사했다고 설명해 주세요. 비교에는 ‘100번 기준으로 바꿔 보면’과 ‘도구 B 결과’처럼 같은 표지를 붙이세요. 질문을 ‘얼마나 달라질까요?’로 바꾸면 정리에서 ‘100번 기준 약 62번 더 성공’이라는 한 수로 답할 수 있어요. |
| 8 | should-fix | 6–9 | A/B는 같은 변수(편집 방식)의 비교로 기능하지만, ‘너무 적음/적절함/너무 많음’ 사례는 아니에요. ‘대가’ 장면인 9단계에는 실험의 한계만 있고 B의 작동 조건은 없어요. | 실제 편집 방식은 양을 조절하는 값이 아니라는 예외를 기록하고, 수치를 지어내지는 마세요. B에는 파일을 읽을 때 줄마다 표지를 붙여야 한다는 조건, 또는 대상 줄이 바뀌어 표지가 맞지 않으면 편집을 거절한다는 한계를 짧게 덧붙일 수 있어요. |
| 9 | should-fix | 4–9 | 달라진 점의 문구는 화면에 있지만 중요한 변화가 빠져요. 4단계는 omp의 ‘모델을 골라 연결’ 표지, 5단계는 ‘문제 180개 × 3번’, 8단계는 ‘바뀐 것: 도구 하나’, 9단계는 ‘16개 중 가장 큰 폭’이 새로 생겨요. | 각 장면에서 놓치면 내용이 달라지는 변화를 먼저 적으세요. 예를 들어 8단계는 모델 옆 A/B 비교와 omp 옆 ‘도구 하나’ 표시를 함께 짚어요. |
| 10 | could-fix | 6–7 출처 | `sources` #10은 공백 기준 20어절로 15어절을 넘기고, 설명 두 개(도구 A와 B)를 한 줄에서 찾게 해요. | A의 방식과 B의 방식을 각각 15어절 안의 출처 문장으로 나누고 해당 절에 바로 연결하세요. |
| 11 | could-fix | 3 | 그림의 ‘한 짝’은 함께 일하는 Codex/GPT 조합을 뜻하고, 도움말의 ‘짝’은 같은 종류인 GPT/Claude를 뜻해요. 본문의 직접 설명으로 뜻은 풀리지만 한 화면에 두 용례가 있어요. | 그림에는 ‘함께 일해요’, 도움말에는 ‘같은 종류예요’를 써서 각각 구별해 주세요. |

**Words and arc check.** HTML 태그를 빼고 공백으로 나누어 세었어요. 단계 1–9의 두 문단은 각각 `19/19, 19/15, 17/21, 18/28, 22/19, 20/15, 20/16, 22/15, 28/19`어절이에요. 10단계는 숫자를 담은 13어절 문장과 4개 항목(6/10/5/15어절), 전체 보기로 이어지는 안내가 있어요. 제목/질문/요약은 `4/6/13`, 단계 제목은 `5/4/5/4/4/5/5/2/7/4`, 짧은 이름은 `2/1/2/1/1/2/2/2/2/1`, 목표는 `5/5/6/5/6`, 출처 문장은 `14/13/6/8/12/13/8/12/12/20/14/11/9`어절이에요. 단계당 도움말은 0–1개예요. 단계 제목만으로도 제품 소개 → 실험 → 결과는 읽히지만, 왜 이 실험을 보는지는 1–5단계 사이에서 이어지지 않아요. 제목과 요약은 `collection.js`와 일치해요. 해요체와 ‘쪽지·꼬리표’는 자연스러워요. 영문 제품명은 바꿀 필요 없고, 본문에서 `코드`처럼 뜻이 필요한 말만 풀면 돼요. 이전 편에서 소개된 LLM, 모델, 하네스, 도구, 왕복, 허락 설정은 익숙한 말로 보았어요.

## Numbers

- By hand: 180 problems × 3 fresh runs = **540** tries per model and edit format according to the reported method. On the page’s 100-try scale, A: 100 − 6.7 = **93.3** failures, so 6.7 + 93.3 = 100. B: 100 − 68.3 = **31.7** failures, so 68.3 + 31.7 = 100. The improvement is 68.3 − 6.7 = **61.6 percentage points**, or 61.6 additional successes per 100 on that scale. It is not a new sample of 100 trials.
- The five filled metric rows (6–10, comparing A then holding B on 7–10) keep the exact displayed complements; steps 1–5 are blank. The tag, copy, titles and recap card agree with the chosen comparison: 6.7 rounds to about 7; 68.3 rounds to about 68. No unsourced reader-visible numeric results. Nine minutes is an orientation estimate; step numbers, ‘다섯 편’, two/three products, and ‘도구 하나’ count the walkthrough/collection or the stated comparison, not benchmark results. The underlying dot chances `0.93` / `0.32` round the reported failure complements; the animation is illustrative, not a count of observed network events (finding 5).

## Facts

`#n` refers to the 1-based `sources` entry in `harnesses.js`. “Verified” for the benchmark and project counts means the linked source actually reports it, not that the measurements were independently reproduced. All 11 `data` entries were checked against the pages they name, using the collection ledger to locate sections.

| Claim | Where it appears | Result | Checked against |
|---|---|---|---|
| OpenAI’s GPT model family powers ChatGPT’s regular chat. | 1–2, orange GPT label, 10, #1 | verified | [OpenAI Help: ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex), “Models in Work and Codex,” explicitly mentions GPT in regular Chat. |
| Codex is OpenAI’s software-development product and is a view in the ChatGPT **desktop** app. | 1–3, 9–10, Codex label ‘ChatGPT 안’, #1 | verified | [OpenAI Help](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex), “Overview,” “Choose an experience,” and “Where Work and Codex are available.” Codex also has other surfaces. |
| Codex uses GPT models; its harness provides the core loop and execution. | 2, 10, the Codex/GPT pairing, #2 | verified | [OpenAI Help](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex), “Models in Work and Codex”; [Unrolling the Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/), introduction. |
| Codex ships instructions specific to its models. | #2; supports the 9 callout | verified | [Unrolling the Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/), “Building the initial prompt”: bundled per-model base instructions, with a user override. |
| Choosing Codex in ChatGPT necessarily runs actions on the laptop. | 2 text | wrong | [OpenAI Help](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex), “Where Work and Codex are available”: local folders are supported, but Codex Cloud runs on OpenAI-managed computers. |
| Claude is Anthropic’s LLM family, the same kind of component as GPT, not a synonym for Claude Code. | 1, 3, 10, orange Claude label, #3 | verified | [Anthropic Models overview](https://platform.claude.com/docs/en/models/overview), first sentence. ‘Claude’ is also the product name; [Claude product page](https://claude.com/product/overview) and the earlier `llm` distinguish that use. |
| GPT and Claude can receive and generate text. | 1, stage legend | verified | [Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/), “The agent loop”; [Anthropic Models overview](https://platform.claude.com/docs/en/models/overview), “Latest models.” This does not assert text is the only supported input. |
| Claude Code is the layer that supplies tools and manages context around Claude models; that is the same role as the Codex harness around GPT. | 3, 10, parallel blue/orange pairs, #4 | verified | [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works), “The agentic loop” and “Models”; [Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/), introduction. |
| Both harnesses supply tool definitions, receive tool requests, carry them out, and feed results into a loop. | 2–3, legend/arrows, 8, #5 | verified | [Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/), “The agent loop” and “Building the initial prompt”; [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works), “The agentic loop” and “Tools”; [Claude tool use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview), “How tool use works,” for the client-tool requests and results. Stage directions on 2–3 agree. |
| Both have settings for when to ask permission. | 3 tags, #5 | verified | [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security), “Sandbox and approvals”; [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works), “Control what Claude can do.” |
| Both always stop and ask the person when an action is risky. | 3 text | wrong | [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security), “Common sandbox and approval combinations,” includes never/automatic review; [Claude Code permission modes](https://code.claude.com/docs/en/permission-modes), Auto/don’t-ask modes can block rather than ask. |
| Stencil Labs builds omp, an open-source coding agent/harness. | 4, blue omp label, 10, #6 | verified | [omp README](https://github.com/can1357/oh-my-pi), “Built by Stencil Labs”; [Stencil Labs](https://stencil.so/about), “Research”; [MIT license](https://github.com/can1357/oh-my-pi/blob/main/LICENSE). |
| Merely being able to look at a program’s source makes it open source. | 4 definition | wrong | [omp’s MIT license](https://github.com/can1357/oh-my-pi/blob/main/LICENSE) includes permission to use, modify and distribute, not merely to view; see also [Open Source Definition](https://opensource.org/osd) (opens with ‘Open source doesn’t just mean access to the source code’). |
| The omp project says it offers 60+ providers and 31 built-in tools. | #6 | verified | [omp README](https://github.com/can1357/oh-my-pi), banner immediately before “Install.” Both are the project’s own counts. |
| omp lets users choose models from Anthropic, OpenAI and other providers. | 4, omp ‘모델을 골라 연결’, #7 | verified | [omp Providers](https://omp.sh/docs/providers), “Current provider matrix” and “Provider-specific caveats”: `anthropic`, `openai`, `openai-codex` and other routes, subject to access/credentials. |
| Can Bölük, who builds omp, published his team’s own experiment on 2026-02-12. | Header note, 5, 9 and tags, #8 | verified | [The harness problem](https://stencil.so/blog/the-harness-problem), byline/date and study in first person; [Stencil Labs](https://stencil.so/about), author is its founder and leads product/R&D; omp is its project. |
| The study kept Grok Code Fast 1 and its task set fixed for the shown comparison and changed the edit tool. | 5–8, 10, l3 labels, #8 | verified | [The harness problem](https://stencil.so/blog/the-harness-problem), opening line, pass-rate chart and “The Benchmark.” The arrows stage one model/runner pair out of a multi-model study. |
| The two source bars for Grok Code Fast 1 are patch 6.7% and hashline 68.3%. | 6–10, metrics/tags/panel, #8 | verified | [The harness problem](https://stencil.so/blog/the-harness-problem), page chart first row (explicit values on the `patch` and `hashline` marks); `hashline v2` is a separate 71.3%. |
| The study ran 180 repair tasks three times each in fresh sessions. It inserted small mechanical errors in React files and compared the result to the original, allowing formatting. | 5, 9 scope caption, #9, #13 note | verified | [The harness problem](https://stencil.so/blog/the-harness-problem#the-benchmark), chart caption and “The Benchmark.” |
| A is a patch-style text format for describing where and what to change; Codex uses that format. A patch instruction that cannot be parsed/applied may be rejected. | 6, #10 (A part) | verified | [The harness problem](https://stencil.so/blog/the-harness-problem#edit-tool); OpenAI’s [Apply Patch](https://learn.chatgpt.com/api/docs/guides/tools-apply-patch) also describes a patch failing to apply and returning a failure status. The comparison does not run the Codex product itself. |
| B is hashline: lines are shown with short tags and edits refer to those tags. | 7, #10 (B part) | verified | [The harness problem](https://stencil.so/blog/the-harness-problem#hashline), sample line tags and edit instructions. |
| 14 of 16 models did better with hashline than patch. Grok Code Fast 1 had the largest point gain in that comparison. | 9 text and ‘16개 중 가장 큰 폭’ tag, #11 | verified | [The harness problem](https://stencil.so/blog/the-harness-problem), first chart: `hashline` vs `patch` (not `v2`), 14 increases, GPT-5.2 Codex tied and DeepSeek V3.2 lower. Grok’s gain is 61.6 points; the chart’s default Δ column uses v2 when available, so don’t cite its +64.6 for the A/B shown here. |
| Weaker models tended to gain more in this test. | #11 | verified | [The harness problem](https://stencil.so/blog/the-harness-problem#the-benchmark) calls out the weakest models gaining most. The plotted gains vary; this is not a rule that every weaker model gains more than every stronger one. |
| Failed tasks correspond to replies not arriving, or to patch formatting errors, in the exact ratio on the counter. | 6–7, model-to-omp burst animation + legend, juxtaposed with 6 text | wrong | [The harness problem](https://stencil.so/blog/the-harness-problem#the-benchmark), outcome is checked after a whole agent session by comparing files, not by counting successful deliveries or failed tool calls. A task may contain tool failures and still finish successfully. |
| The model often knew the fix and struggled to express it in the editing format, as the study author interprets the result. | 8, #12 `assumption` | verified as attribution; unverified as a claim about what the model knew | [The harness problem](https://stencil.so/blog/the-harness-problem#so-what) explicitly offers this interpretation. The reported success rates do not observe what the model knew. It is already marked as an interpretation. |
| 100-try numbers are rescaled percentages, not literal observations. | 1, 6–10, counters/card, #13 `assumption` | verified (arithmetic) | #8’s reported percentages × 100 on the new scale; see Numbers. For the original denominator, 180 × 3. |
| Codex and Claude Code are adapted to their companies’ model families. | 9 callout | verified | [Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/), model-specific instructions; [Anthropic’s Claude 5 context engineering write-up](https://claude.dev/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models/), describes changing the Claude Code instructions for particular Claude models. Adaptation is not a claim about exclusive compatibility. |
| This result shows that changing a harness tool can change results for the same model; it is not a ranking of the three products or of other tasks. | Header, 8–10 | verified | [The harness problem](https://stencil.so/blog/the-harness-problem#the-benchmark), controlled tool comparison on generated file-repair tasks, not a head-to-head trial of the complete products. |
| Edit formats can differ among harnesses and a local harness acts on its model’s tool request rather than letting the model itself touch a file. | 6–8, 10 recap | verified | [The harness problem](https://stencil.so/blog/the-harness-problem#edit-tool) gives examples of different formats; [Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/) and [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works) distinguish model and tool execution. |
| People commonly ask only which model is smarter. | 5 opening | unverified as a general claim | [The harness problem](https://stencil.so/blog/the-harness-problem#the-wrong-question) voices the author’s impression, not a measurement of readers. Finding 1’s concrete opening would make this assertion unnecessary. |

## For the owner

- The explicit Codex/Claude Code pairing passes a model-reader check. Only a real ChatGPT user new to Claude Code can tell us whether it sticks unprompted, how naturally the Korean and the pace feel, and whether this experiment is the best ending to the receipt story.
- I verified the reported study and chart, not individual trials or what the model knew. The historical per-run reports link in the article returned 404, so I did not attribute exact raw outcome counts or failure causes to individual trials. This does not affect verification of the rounded published results.

## Resolution

Resolved by the author (Claude, in OMP) on 2026-11-22. Sheet after the changes: 0 warnings,
0 notes. **The fixes were not independently re-reviewed.**

| # | Decision | What changed |
|---|---|---|
| 1 | fixed | Step 1 opens from 지민's receipts and the question they raise; step 5 says the problems are code, "프로그램이 할 일을 적어 둔 글", not receipts. |
| 2 | fixed | Step 2 is limited to using Codex in the ChatGPT desktop app on a folder of one's own computer. |
| 3 | fixed | "허락 설정에 따라 물어보기로 한 일은 실행하기 전에 사람에게 물어요." |
| 4 | fixed | omp is made by Stencil Labs; open source is described as published so anyone can look inside and, under set conditions, change it. |
| 5 | fixed | No dots fail any more. The result sits on the harness as "파일 고치기 성공 6.7%" / "68.3%" next to the tool tag; the model only carries "같은 모델" and no longer glows. |
| 6 | fixed | omp connects models of several companies; step 6 says tool A is Codex's way and that Claude Code uses another (find the original text, replace it), and that 6.7% is this model's number, not Codex's score. Sourced to the same post. |
| 7 | fixed in part | The question is "얼마나 달라질까요?"; step 5 says each problem was tried 3 times and the files checked; the numbers are worded "100번 기준으로". The counters are not relabelled per tool. |
| 8 | fixed in part | Step 7 gives B's condition (it refuses when the tags no longer match). A/B is a comparison of two kinds, not of too little and too much; no numbers were invented for a third case. |
| 9 | fixed | Steps 5, 6 and 7 list the tags that carry the content. |
| 10 | fixed | The long source claim is split into three. |
| 11 | fixed | The picture's link says "함께"; the callout says "같은 종류". |

**Hand check.** 100 − 6.7 = 93.3 and 100 − 68.3 = 31.7; 68.3 − 6.7 = 61.6 more successes per 100. Real attempts per tool: 180 × 3 = 540.

**Still unverified.** The benchmark's individual runs (the post's report link returned 404
for the reviewer); the description of Claude Code's edit tool rests on the same post, not
on Anthropic's documentation.

## Owner decision
