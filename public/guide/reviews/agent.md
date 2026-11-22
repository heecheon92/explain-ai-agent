# Review: 끝날 때까지 되풀이 (`agent`)

- **Reviewed:** 2026-11-22
- **Reviewer:** OpenAI GPT-6.2 Sol (`openai-codex/gpt-6.2-sol`), OMP and Ego Browser CLI
- **Author:** Claude (a different model; exact variant and tool not known)
- **Independence:** independent
- **Rendered and stepped through:** yes, in Ego Browser (Chromium); first reading before opening the walkthrough data, then a second pass at 1440 × 900 and all seven options
- **Sheet read:** yes, 0 warnings and 0 notes in Checks; no console errors observed on the walkthrough reload and second pass
- **Format checks:** done

## Verdict

Needs changes. 9단계의 “두 부품이 함께 일하는 모습”은 잘 전달되지만, 멈춤을 설명하는 문장과 부품을 뺀 그림이 그 설명을 뒤집어요.

## Reader pass

- 1단계의 “지난번엔 한 장에서 멈췄어요”가 앞 편에서 남긴 일을 바로 이어 줘요. 3단계에서 지민이 다시 말하지 않아도 LLM이 쪽지를 쓰고 하네스가 폴더를 살펴보는 이야기라는 게 잡혔어요.
- 2→3단계에서 “지민이 하네스에 써요” 다음 LLM이 곧바로 첫 쪽지를 써서, 지민의 글이 LLM에 어떻게 닿았는지 앞 편을 떠올려야 했어요. 8단계의 “에이전트가 끝없이 돌지 않도록”에서도 아직 이름을 배운 줄 알았는지 되돌아보게 됐어요.
- 9단계에서 **LLM은 정하고, 하네스는 하고, 결과가 돌아오면 다시 정해요**가 분명해졌어요. 그 둘에 새 상자를 붙이지 않고 한 테두리만 두른 것이 “에이전트는 세 번째 부품이 아니에요”를 가장 잘 보여 줘요.
- 제목만 읽어도 살펴보기 → 폴더 만들기 → 옮기기 → 확인 → 답 → 두 부품에 붙인 이름으로 이어져요. 마지막 그림도 설명 없이 부탁 1번, 왕복 6번, 12개 정리와 두 역할을 읽을 수 있어요. 다만 종료 조건은 그림만으로 알 수 없고, 글로 옮겨 쓸 때도 성공과 멈춤을 구분해야 해요.

## Findings

| # | Severity | Step | Finding | Suggested fix |
|---|---|---|---|---|
| 1 | blocker | 1, 8–9 | 배운 적 없는 핵심 이름이 먼저 나와요. 첫 화면 요약·안내문에서 ‘에이전트’가 나오고, 8단계에서는 이미 아는 이름처럼 주어로 쓰여요. 두 앞 편은 LLM·하네스·도구·쪽지를 소개하지만 ‘에이전트’의 역할은 설명하지 않아요. 이름이 무엇을 가리키는지 보여 준 뒤 이름을 붙이는 이 편의 순서가 흐려져요. | 첫 화면의 소개에서는 ‘이렇게 일하는 두 부품에 어떤 이름이 붙는지’로 예고하고, 8단계에서는 ‘이 되풀이가 끝없이 이어지지 않도록’이라고 써요. 이름과 테두리를 9단계에서 함께 처음 보여 줘요. |
| 2 | blocker | 7–9, 11 | 7단계 강조문 “되풀이를 끝내는 것은 LLM이에요”, 9단계 “일이 끝날 때까지”, 11단계 요점 “답을 쓸 때 끝나요”를 같이 읽으면 *일이 성공해야, 그리고 LLM이 답을 써야만* 멈춘다는 규칙이 돼요. 바로 앞 8단계에는 일을 못 끝내고 한도에서 멈추는 예가 있고, OpenAI 원문의 마지막 메시지는 추가 질문일 수도 있어요. | “이 예에서는 확인을 마친 LLM이 더 부탁하지 않고 답을 써요”로 성공 경로를 설명해요. 정리에서는 “쪽지 대신 답을 쓰면 이번 차례가 끝나요. 일이 남아도 한도에 닿거나 사람이 멈추면 끝날 수 있어요”처럼 끝과 성공을 구분해요. |
| 3 | blocker | 8 | 1·4·6·10번이라는 **설정 한도**는 이 실험을 위해 고른 숫자인데 `sources`에는 정리 과정의 6번만 가정으로 있어요. 첫 화면 문구도 ‘왕복 6번’만 예시라고 해요. 실제 제품의 일반적인 설정값으로 읽을 수 있고, 특히 10번을 왜 택했는지는 다른 값에서 나오지 않아요. | 한도 네 값을 예시 실험용 `assumption`으로 적고, 8단계에도 ‘비교해 보려고 정한 한도’라고 써요. 최대 반복 횟수를 두기도 한다는 실제 근거와 값을 구분해요. |
| 4 | blocker | 8a–d | 1·4번에서는 ‘다 씀’과 ‘멈춤’ 뒤에도 쪽지와 결과 그림이 계속 왕복하도록 그려져요. 10번은 ‘LLM이 답을 쓰고 멈춰서’라고 판정하는데 그림은 6번 선택과 똑같이 폴더를 ‘다시 보기’만 하고, 7단계에서 배운 지민에게 가는 답의 길이 없어요. 횟수는 맞지만 이 실험이 보여 줘야 할 **왜/어디서 멈추는지**가 그려지지 않아요. | 부족한 선택은 마지막 작업 뒤 끊긴/쉬는 길과 ‘한도에 닿아 멈춤’을 보여 줘요. 답까지 썼다고 하는 10번 선택은 7단계처럼 답의 길을 보여 주거나 ‘마지막 확인까지 6번을 썼어요’라고 그림의 시점에 맞춰요. 마지막 작업만 보여 준다면 그렇게 표시해요. |
| 5 | blocker | 10a–b | 한 부품을 뺀 두 장면에도 ‘에이전트’ 테두리가 남아요. 특히 ‘LLM만’ 선택에서 ‘답만 돌아옴’이라고 나오지만 지민의 부탁 화살표는 빠진 하네스를 가리키고, 지민에게 돌아오는 답의 길은 없어요. 앞 편의 글만 주고받는 경우를 되살리는 대신, 빠진 하네스를 여전히 거치는 듯 보여요. | 둘 다 있을 때만 ‘에이전트’ 테두리를 보여 줘요. ‘LLM만’에서는 앞 편의 채팅 창구로 글만 오가는 길을 쓰거나, 길을 그리지 않는다면 ‘정리 방법만 쓸 수 있어요’처럼 아직 전달을 그리지 않았음을 분명히 해요. 제거한 부품으로 향하는 화살표는 끄세요. |
| 6 | blocker | 10b, 11 | ‘하네스만 있으면 아무 일도 일어나지 않아요’가 11단계에서 독립적인 일반 규칙으로 나와요. 이 폴더를 LLM의 쪽지대로 정리하는 **예시 하네스**에는 맞지만, 프로그램이 미리 정해 둔 일을 혼자서도 할 수 없다는 뜻은 아니에요. 실제 Claude Code도 모델이 요청하지 않아도 정해진 시점에 동작을 실행할 수 있어요. | “이 예시의 하네스만으로는 지민의 부탁에서 다음 할 일을 새로 고르지 못해요”로 좁혀요. 짝이 되는 ‘LLM만’도 “이 폴더에는 손대지 못해요”처럼 무엇이 빠진 결과인지 말해요. |
| 7 | should-fix | 1, 11 | 첫 질문 “어떻게 사진 12개가 끝까지 정리될까요?”는 과정을 묻지만, 정리가 숫자로 답하는 것은 ‘왕복 6번’이에요. 독자가 세어 답할 대상이 질문에 없어요. 또 ‘왕복’은 1단계에서 제목 아래와 숫자판에 보이고 2단계에서 무엇을 세는지 비로소 나와요. | “사진 12개를 정리하고 확인하기까지, 쪽지와 결과가 몇 번 오갈까요?”처럼 세는 것을 일상어로 먼저 묻고, 첫 숫자판을 읽을 때도 2단계의 뜻을 한 번 짚어 줘요. |
| 8 | should-fix | 2–3 | 지민→하네스만 보인 뒤 LLM→하네스의 첫 쪽지가 나와요. 앞 편을 읽었더라도 이 그림에서 하네스가 부탁을 LLM에 전달했음을 추론해야 해요. | 2단계에서 하네스가 지민의 글을 LLM에 넘긴다고 한 문장으로 이어 주고, 가능하면 같은 길의 반대 방향으로 전달을 그려요. |
| 9 | should-fix | 6 | “실제 하네스의 설명서도”라고만 쓰면 모든 하네스가 매번 살펴보고 바꾸고 확인한다고 읽히기 쉬워요. 실제로 인용한 것은 Claude Code 설명서이고, 그 문서도 단계가 섞이거나 요청에 따라 일부만 거칠 수 있다고 해요. | “Claude Code도 살펴보고, 손보고, 확인하며 일해요. 어떤 부탁이냐에 따라 하는 일은 달라져요”처럼 출처와 범위를 바로 써요. |
| 10 | should-fix | 8–10 | 몇몇 ‘달라진 점’이 눈에 보인 변화와 달라요. 8·10단계는 선택한 뒤에도 ‘미정 (고르기 전)’만 남고, 8→9에서는 테두리 외에도 뒤섞인 폴더가 정리 상태로 돌아오고 6번과 ‘정해요/해요’가 나타나요. | 8·10단계의 변화란은 ‘고르기 전의 시작 모습’이라고 처음부터 읽히게 쓰고, 선택 후에는 그림·판정에서 바뀐 것을 짚어 주세요. 9단계는 앞 실험을 끝내고 성공 장면으로 돌아온다는 점과 역할 꼬리표를 같이 적어요. |
| 11 | should-fix | 10 | “부품을 하나 뺀 채로”라고 예고한 뒤 ‘둘 다’도 고를 수 있어요. 섞은 부품만 바꾸는 유효한 비교지만, 8단계 같은 ‘너무 적음/충분/너무 많음’ 실험은 아니에요. | “하나만 남겼을 때와 둘 다 남겼을 때를 견줘 봐요”라고 써서 8단계의 한도 실험과 다른 비교임을 분명히 해요. |
| 12 | should-fix | 11, `sources` 5 | ‘Codex는 하네스’는 안내서에서 가리키는 프로그램 쪽의 역할로 맞지만, 인용한 OpenAI 머리말은 ‘Codex’가 여러 제품을 아우르며 글은 그중 하네스에 초점을 맞춘다고 명시해요. 또 머리말 자체에는 GPT 모델 이름을 뒷받침하는 예가 없어요. | ‘이 안내서에서 Codex라고 할 때는 모델을 데리고 일하는 프로그램 쪽을 말해요’처럼 역할 범위를 밝혀요. GPT는 OpenAI 글의 모델/초기 지시 부분 또는 모델 자료를 따로 가리키고, omp는 프로젝트 자료를 붙여요. |
| 13 | could-fix | 2, 5, 8 | 해요체가 대체로 자연스럽지만 “지민이 하네스에 써요”, “이어지는 쪽지 석 장은 옮기기예요”, 질문이 나오자마자 ‘왕복 한도’처럼 압축한 몇 군데는 번역투거나 한 번 더 생각하게 해요. | “지민이 하네스에 부탁을 적어요”, “다음 쪽지 세 장은 한 장마다 한 달 치를 옮겨 달라는 말이에요”, “왕복을 최대 몇 번까지 할지 골라 보세요”처럼 평소 말로 써요. |
| 14 | could-fix | 2, 7, 9, 11 | 목표 문구 ‘왕복이 무엇인지’·‘되풀이가 언제 끝나는지’·‘에이전트가 무엇의 이름인지’는 각각 2·3·3어절로 4–8 기준보다 짧아요. 11단계의 숫자 결과도 “지민의 부탁 1번에 왕복 6번.”이라는 문장 조각 뒤에 본문이 이어져요. | 길이만 채우지 말고 목표를 ‘쪽지와 결과가 오가는 한 바퀴’처럼 구체화해요. 결과는 “지민이 한 번 부탁하자, … 사진 12개를 정리하고 확인했어요”처럼 1·6·12가 한 문장에서 이어지게 써요. |

시트의 기본 장면 11개와 선택 장면 7개를 봤어요. 이 크기에서 내용을 가리는 겹침이나 잘림은 보이지 않았고, 각 물체의 바닥 위치는 고정이었어요(처음 장면에서 다음으로 넘어갈 때 구도가 넓어짐). 왕복의 나가는 쪽과 돌아오는 쪽은 서로 다른 색이고 사용한 점 종류는 범례에 있어요. 8단계에서 한도만 바꿨고, 10단계에서는 남긴 부품만 바꿨어요. 기본 상태에는 아직 설정값·횟수가 없고, 선택을 하면 그림과 숫자가 바뀌어요. 각 선택의 근거에 결정한 숫자가 있고, 키보드 선택·되돌리기, 이전·다음, 다시 보기와 일시 정지, 단계별 주소를 확인했어요. 고정 영어와 작은 구역 이름은 알려진 엔진 한계로 제외했어요.

## Numbers

손계산 (8단계의 4번 선택): 처음 보기 1번, 폴더 만들기 1번, 3월 옮기기 1번, 4월 옮기기 1번 → 살펴본 1 + 바꾼 3 = **왕복 4번**. 3월 5개 + 4월 4개 = **9개 정리**, 12 − 9 = **3개 남음**. 선택 뒤 숫자판 1/3/4와 폴더의 ‘9개 정리 · 3개 남음’, 판정의 ‘9개에서 멈춤’이 모두 맞아요.

- 기본 이야기의 누계(살펴본/바꾼/전체)는 1–2단계 `—/—/—`, 3단계 `1/—/1`, 4단계 `1/1/2`, 5단계 `1/4/5`, 6–7·9·11단계 `2/4/6`이에요. 바꾼 4회 중 한 회는 폴더 만들기라 4단계에는 사진 0개가 옮겨졌고, 5단계의 `5 + 4 + 3 = 12`가 맞아요. 7단계의 답은 도구에 다시 일을 맡기는 왕복이 아니라서 전체를 늘리지 않아요.
- 8단계 1·4·6·10번의 누계와 정리 수는 각각 `1/0/1→0개`, `1/3/4→9개`, `2/4/6→12개`, `2/4/6→12개`. 10단계는 두 단독 선택 모두 `0/0/0→0개`, 둘 다 `2/4/6→12개`. 결과 문장·꼬리표·정착한 숫자판에 산술 불일치는 없어요. 숫자는 해당 작업 전에는 비어 있어요.
- 사진 분포와 예정된 작업 횟수는 `sources` 가정, 지난 편의 11개는 12 − 1(앞 편에서 옮긴 한 장), 부탁 1번은 실제로 한 문장만 보내는 예시([원장 A5](../sources/ledger.md#example-world-assumptions))예요. 한도 네 값 자체의 출처 누락은 #3에 적었어요. 9분은 사례의 측정값이 아닌 예상 읽기 시간이고, 11단계는 실제 단계 수예요.

**Words and arc.** HTML을 빼고 화면에 나타나는 글의 띄어쓰기 단위를 세었어요. 1–10단계 두 문단 어절 수: `15/11, 12/18, 16/14, 20/16, 22/17, 22/11, 23/16, 17/15, 21/20, 16/11`. 11단계는 결과 14어절, 문단 제한에서 제외되는 요점 5개는 `10/10/8/10/12`어절. 제목/질문/요약은 `3/8/13`, 단계 제목은 4–5, 짧은 제목은 1–2, 두 실험 안내는 각각 3, 선택 단추/판정/이유는 각각 1–2/2–3/9–12, 출처 문구는 9–15어절이에요. 목표는 `2/6/3/3/5`예요. 호출 상자는 한 단계에 최대 하나, 마지막은 다음 편을 가리켜요. 예시·제목·요약은 모음집 안내와 일치해요. 5단계는 세 차례를 한 장면에 묶었다고 제목과 문장에 드러내요. 사진을 옮긴 뒤 바로 확인에 한 회를 더 쓰므로, 정리와 확인의 비용을 나눠 볼 수 있어요.

## Facts

| Claim | Where it appears | Result | Checked against |
|---|---|---|---|
| 모델이 도구 작업을 요청하면 하네스가 이를 실행하고 결과를 모델에 넣어 다시 묻는다. 도구 요청 대신 사용자에게 메시지를 쓰면 Codex의 그 차례가 끝난다. | `data` 1; 2–7단계의 ‘쪽지’·결과 화살표, 9·11단계 | verified — Codex의 정상 경로 | [OpenAI, Unrolling the Codex agent loop, The agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/#the-agent-loop). 도구 출력이 다음 모델 입력에 포함된다고 명시. |
| 사용자가 먼저 부탁하고, 보통 프로그램이 그 부탁을 모델 입력에 넣는다. 모델이 쓴 답은 프로그램을 통해 사람에게 돌아간다. | 2–3·7단계, 지민→하네스 및 답의 경로 | verified | [OpenAI, The agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/#the-agent-loop); 2–3단계 그림의 생략은 #8. |
| 모델이 환경에서 받은 결과로 다음 행동을 정하고 도구를 되풀이해 쓰는 것이 흔한 에이전트 구조다. 이 안내서의 ‘에이전트’는 세 번째 부품이 아니다. | `data` 2; 도입, 9단계 테두리, 11단계 | verified — 문서도 용례가 여럿이라고 설명하며, 이 안내서의 구분은 그림 속 구조에 해당함 | [Anthropic, Building effective agents, What are agents? / Agents](https://www.anthropic.com/research/building-effective-agents#agents). |
| 되풀이 횟수 한도 같은 멈춤 조건을 두는 일이 흔하다. | `data` 3; 8단계 | verified | [Anthropic, Agents](https://www.anthropic.com/research/building-effective-agents#agents) — “common to include stopping conditions (such as a maximum number of iterations)”. 구체 설정값과 단위는 문서에 없음. |
| Claude Code는 상황 파악, 행동, 결과 확인을 반복할 수 있고 각 동작이 다음 판단의 자료가 된다. | `data` 4; 6단계 확인과 설명서 언급 | verified — Claude Code의 그림과 설명; 모든 요청이 세 단계를 꼭 거치지는 않음 | [Claude Code, The agentic loop / Tools](https://code.claude.com/docs/en/how-claude-code-works#the-agentic-loop). |
| Claude와 GPT는 모델 이름 계열이고, Claude Code와 Codex의 실행 프로그램 쪽이 모델을 둘러싼 하네스 역할을 맡는다. | `data` 5; 11단계 | verified — 프로그램 쪽 역할로 읽었을 때. ‘Codex’ 자체는 더 넓은 제품군의 이름이기도 함. | [Anthropic, Models overview](https://platform.claude.com/docs/en/models/overview) 첫 문장, [Claude Code, The agentic loop](https://code.claude.com/docs/en/how-claude-code-works#the-agentic-loop), [OpenAI, Codex 글](https://openai.com/index/unrolling-the-codex-agent-loop/) 머리말의 Codex 범위와 ‘Model inference’ 및 ‘Building the initial prompt’의 GPT 계열 예시. [OpenAI, Introducing gpt-oss](https://openai.com/index/introducing-gpt-oss/)에서도 GPT 계열의 모델 예 확인. |
| omp도 이 안내서에서 말하는 하네스 역할의 프로그램이다. | 11단계 마지막 요점 | verified — 프로그램 자체는 코딩 에이전트라고도 부름 | [omp README](https://github.com/can1357/oh-my-pi)의 built-in tools 및 도구 호출 항목, [omp Providers](https://omp.sh/docs/providers)의 모델 선택·연결. |
| 모델이 파일을 직접 옮기지 않는다. 그림의 노트북 프로그램이 폴더를 다루고 LLM에는 글과 도구 결과가 간다. | 1–7·9–11단계, LLM·하네스·폴더 사이의 경로와 범례 | verified — 이 로컬 파일 예시의 역할 분리 | [OpenAI, The agent loop / Model inference](https://openai.com/index/unrolling-the-codex-agent-loop/) 및 [Claude Code, Tools](https://code.claude.com/docs/en/how-claude-code-works#tools). ‘AI 회사의 컴퓨터’는 그림 속 연결 방식이며 일반 요건은 아님: OpenAI의 `--oss`도 같은 글에서 로컬 모델을 지원. |
| 같은 부탁도 돌아온 결과에 따라 다음 동작이나 필요한 왕복 수가 달라질 수 있다. | 첫 화면 안내문, 3–6·9단계 | verified — 달라질 **수** 있음, 매번 반드시 다른 횟수라는 보장은 아님 | [Claude Code, The agentic loop](https://code.claude.com/docs/en/how-claude-code-works#the-agentic-loop)에서 이전 결과에 따라 다음 단계가 달라진다고 설명; [Anthropic, Agents](https://www.anthropic.com/research/building-effective-agents#agents)의 환경 결과·열린 과제 설명. |
| 답이 나왔다는 것이 성공을 뜻하며, 모델이 일반적으로 유일한 종료 주체다. | 7단계 강조문과 9·11단계의 종료 규칙이 함께 주는 인상 | wrong — 한도·사람의 중단·추가 질문도 가능 | [Anthropic, Agents](https://www.anthropic.com/research/building-effective-agents#agents), [Claude Code, The agentic loop](https://code.claude.com/docs/en/how-claude-code-works#the-agentic-loop), [OpenAI, The agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/#the-agent-loop). |
| 한 번의 요청으로 폴더 세 개를 만들거나 한 달 치를 옮길 수 있다. | `assumption` 8; 4–5·8단계 | unverified — 그림 속 도구·작업 묶음에 대한 약속 | [원장 A10](../sources/ledger.md#example-world-later-walkthroughs-assumptions). [Claude Code, Tools](https://code.claude.com/docs/en/how-claude-code-works#tools)로 파일 작업 가능성까지만 확인. |
| 도구를 실행할 프로그램 없이 글만 쓰는 모델은 파일 정리 대신 방법을 써 줄 수 있다. | `assumption` 9 전반부; 10a·11단계 | verified — 글을 주고받을 창구는 있다는 전제; 10a 그림에서는 그 전달이 확인되지 않음 | [Claude Code, Tools](https://code.claude.com/docs/en/how-claude-code-works#tools) — 도구 없이는 글로만 응답. |
| 하네스만 있으면 아무 일도 일어나지 않는다. | `assumption` 9 후반부; 10b·11단계 | unverified — 이 가상의 하네스가 다음 쪽지를 기다리는 것은 설정. 일반 규칙으로는 wrong. | [Claude Code, Hooks](https://code.claude.com/docs/en/hooks#hook-lifecycle)에서는 세션 시작이나 모델이 부탁을 처리하기 전에도 프로그램에 미리 정해 둔 동작을 실행할 수 있음. |
| 지민, 사진 12개와 월별 개수, 한 문장, 총 6회와 그 배분. | `assumption` 6–7, 사례 본문·꼬리표·숫자판 | unverified — 실측 주장이 아닌 명시된 예시 값 | [원장 A1–A5, A10](../sources/ledger.md#example-world-assumptions)과 앞 편의 사례; 산술은 위 확인 참조. |
| 한도를 1/4/6/10으로 각각 두면 이 예시에서 0/9/12/12개 정리된다. | 8단계, 선택·판정·꼬리표 | unverified — 실험 옵션 값은 임의. 배분은 설정한 작업 순서에서 산술로 확인됨. | [원장 A10](../sources/ledger.md#example-world-later-walkthroughs-assumptions)으로 순서 확인; [Anthropic, Agents](https://www.anthropic.com/research/building-effective-agents#agents)는 한도를 둘 수 있다는 근거이지 이 설정값이나 결과의 근거는 아님. |

## For the owner

실제 비전공 독자가 9단계의 이름 붙이기를 처음 읽고 자기 말로 다시 설명할 수 있는지, 8단계 실험을 이름보다 먼저 만나는 편이 더 쉬운지, 영수증이 가장 와닿는 사례인지와 실제 읽기 속도는 판단할 수 없어요. 그림 속 한 달 치 작업이 실제로 한 쪽지에 끝난다는 주장으로 검증하지 않았고, 지정된 현실 근거 페이지는 모두 열어 확인했어요.

## Resolution

Resolved by the author (Claude, in OMP) on 2026-11-22. The walkthrough was rewritten after
this review; its sheet shows 0 warnings and 0 notes. **The fixes were not independently
re-reviewed.** After the review the owner also asked that every walkthrough explain with
both ChatGPT's Codex and Claude Code; steps 6, 9 and the recap now name both.

| # | Decision | What changed |
|---|---|---|
| 1 | fixed | The word 에이전트 no longer appears before step 9: the summary says "이렇게 일하는 둘에 붙는 이름", the note says "실제로는", and step 8 says "이 되풀이가 끝없이 이어지지 않도록". The name and the outline arrive together in step 9. |
| 2 | fixed | Stopping and succeeding are separated. Step 7: "쪽지 대신 답이 오면 하네스는 멈추고 사람에게 돌아와요. 이 예에서는 일을 다 마치고 답이 왔어요." Recap: "LLM이 쪽지 대신 답을 쓰면 되풀이가 멈춰요. 일이 남았어도 한도에 닿으면 멈춰요." The definition no longer says "일이 끝날 때까지". |
| 3 | fixed | The four limits are an `assumption` entry ("실제 제품의 설정값이 아니에요"), the note mentions them, and step 8 says "비교해 보려고 정한 한도". |
| 4 | fixed | Options 1번 and 4번 now end stopped: the links to the LLM and the folder are off, the harness glows with "한도 n번 · 닿아서 멈춤", and one arrow goes to 지민 saying "한도에 닿아 멈췄어요". Options 6번 and 10번 show the answer travelling LLM → 하네스 → 지민, as in step 7. |
| 5 | fixed | The outline is shown only when both parts are present. "LLM만" shows text going between 지민 and the LLM directly ("글만 오감"), with no arrow to the removed harness; "하네스만" shows 지민's request arriving and nothing leaving. |
| 6 | fixed | Narrowed to the example: "이 예에서 LLM만 있으면 폴더에 손대지 못하고, 하네스만 있으면 다음 할 일을 정하지 못해요", in the verdicts, the recap and the assumption entry. |
| 7 | fixed | The question now names what is counted: "한 번만 부탁했는데, 정리가 끝나기까지 쪽지와 결과는 몇 번 오갈까요?" Step 1 says the count will be called 왕복 before the counter is read. |
| 8 | fixed | Step 2 says the harness passes the request and the tool list to the LLM, and draws it (지민 → 하네스 → LLM). |
| 9 | fixed | The callout names its source and scope: Claude Code's documentation, "부탁에 따라 하는 일은 달라져요". |
| 10 | fixed | Steps 8 and 10 call their line "고르기 전의 시작 모습". Step 9 lists the outline, the return to the sorted picture and the two role tags. |
| 11 | fixed | "하나만 남겼을 때와 둘 다 남겼을 때를 비교해요." |
| 12 | fixed | The source entries are split by product: Claude and Claude Code from Anthropic's pages; Codex as the name of OpenAI's coding product in ChatGPT, whose looping and executing part is the harness and which runs GPT models, from the OpenAI post and help article. omp is no longer named in this walkthrough. |
| 13 | fixed | "지민이 하네스에 부탁을 적어요", "다음 쪽지 세 장은 한 장마다 한 달 치를 옮겨 달라는 말이에요", "왕복을 최대 몇 번까지 할지 고르세요". |
| 14 | fixed | Goals are concrete ("쪽지와 결과가 오가는 한 바퀴, 왕복", "되풀이가 멈추는 두 가지 경우"); the recap result is one sentence carrying 1, 6 and 12. |

**Hand check.** 보기 1 + 만들기 1 + 옮기기 3 + 다시 보기 1 = 6; 살펴본 2 + 바꾼 4 = 6. With a limit of 4: 1 + 3 = 4 round trips, 5 + 4 = 9 photos sorted, 12 − 9 = 3 left.

**Still unverified.** Pacing for real lay readers; that a real model would stop and answer
as the example shows.

## Owner decision
