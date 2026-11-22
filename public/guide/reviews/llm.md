# Review: 글만 쓰는 기계, LLM (`llm`)

- **Reviewed:** 2026-11-22
- **Reviewer:** `openai-codex/gpt-6.2-sol` (OMP, `ego-browser` CLI)
- **Author:** Claude (다른 모델; 세부 모델과 도구는 확인하지 못했어요.)
- **Independence:** independent
- **Rendered and stepped through:** yes, in `ego-browser` (Chromium). 데이터 파일을 열기 전에 1–10단계를 읽고, 시트 확인 후 7단계 선택지 3개와 되돌리기를 실행한 다음 1–10단계의 전환을 다시 확인했어요.
- **Sheet read:** yes, 0 warnings and 0 notes in Checks. 너비 1440px에서 13개 타일을 봤고, 두 번째 읽기와 새로고침 후 수집한 콘솔에 경고나 오류는 없었어요.
- **Format checks:** done

## Verdict

Needs changes. 답장과 실제 작업의 차이는 잘 보이지만, 예시의 조건이 본문과 정리에서 빠져 오늘날의 모델과 채팅 앱 전체에 대한 틀린 규칙으로 읽혀요.

## Reader pass

- 1단계는 꽃집의 밀린 영수증이라는 익숙한 상황으로 시작해요. 다만 제목, 범례, 숫자 칸의 ‘LLM’은 3단계에 가서야 뜻이 나와요.
- 3단계에서 ‘화면의 앱은 창구, 답을 쓰는 건 모델’이라는 구분이 처음 잡혀요. 5단계의 답장과 그대로인 폴더를 보니, 이 이야기가 왜 파일이 안 움직였는지를 설명한다는 게 분명해져요.
- 4단계의 ‘지금도 똑같아요’가 무엇과 무엇이 같다는 건지, 7단계의 ‘분류표 12개’가 표 12장인지 파일 이름 12개인지 다시 읽었어요.
- 8단계의 ‘눈과 손’은 기억에 남아요. 10단계는 오른쪽 설명 없이도 빨간 X와 ‘누가 옮겼나’ 상자만으로 지민 12개, 모델 0개라는 결말이 읽혀요. 다만 실제 채팅 앱에 적용할 규칙은 예시와 현실을 한 번 더 나눠 줘야 해요.

## Findings

**9 blockers / 8 should-fix / 1 could-fix.**

| # | Severity | Step | Finding | Suggested fix |
|---|---|---|---|---|
| 1 | blocker | 제목·질문, 3–4, 6, 8, 10 | **글로만 주고받는 예시를 모든 LLM의 한계로 말해요.** 상단 주의문은 사진·소리 입력을 인정하지만, 4단계의 ‘들어가는 것도 글, 나오는 것도 글’, 10단계의 ‘글을 내보내는 것 하나’, 출처의 ‘도구가 없으면 … 글로만’은 범위를 좁히지 않아요. 사진을 읽거나 음성으로 대답할 수 있는 모델도 있어요. ‘눈 없음’도 사진을 볼 수 없다는 말로 들릴 수 있어요. | 질문·정리·출처에 ‘여기서는 글만 주고받고 파일을 다루는 기능은 연결하지 않았어요’를 일관되게 반영해요. ‘눈’은 받은 사진을 이해할 수 있는지와 달리 **폴더를 직접 열어 볼 방법**을 뜻한다고 밝혀요. ‘답을 만드는 것’과 ‘파일을 바꾸는 것’의 구분은 유지해요. |
| 2 | blocker | 3, 6, 8, 10 | **멀리 있어서 못 한다고 설명해요.** 3단계는 앱이 반드시 ‘AI 회사의 컴퓨터’로 보내는 것처럼 말하고, 6단계는 그 거리를 폴더에 닿지 못하는 이유로 들어요. 접힌 출처에는 이 구성이 가정이라고 적혀 있지만, 본문에는 없어요. 노트북에서 모델을 돌리는 채팅 앱도 있고, 원격 모델을 써도 앱의 기능과 허락을 통해 로컬 폴더를 다루는 제품이 있어요. | ‘지민이 쓰는 이 앱은 글을 멀리 있는 모델에 보내요’라고 그림의 범위를 정해요. 빨간 X의 이유는 거리가 아니라 **이 대화에는 폴더에 접근하거나 파일을 옮기는 기능이 없어서**라고 설명해요. 해당 기능을 켠 채팅 앱은 모델 대신 일을 할 수 있다고 한 줄만 덧붙여요. |
| 3 | blocker | 6–8, 10, 배울 내용 | **‘아는 것은 받은 글에 적힌 것뿐’은 ‘폴더를 직접 확인할 수 없다’보다 강한 주장**이에요. 모델은 배운 지식과 앞선 대화도 쓸 수 있고, 7단계에서 실제로 `0312`의 뜻을 글에 적힌 그대로 읽는 것 이상으로 해석해요. 지민이 보내지 않은 사진 개수를 확인할 수 없다는 좁은 설명은 맞아요. | ‘이 대화에서 파일 이름이나 개수를 보내 주지 않으면, 모델은 그 폴더에 실제로 뭐가 있는지 확인할 수 없어요’처럼 파일에 관한 확인과 추측을 나눠요. 배울 내용과 정리에도 같은 표현을 써요. |
| 4 | blocker | 4, 출처의 두 번째 `data` | ‘한 가지를 연습했어요’와 ‘지금도 똑같아요’가 모든 LLM의 훈련이 다음 **단어** 맞히기 하나이며, 답할 때도 훈련하는 것처럼 들려요. 인용한 용어집은 Claude 같은 모델의 **사전 훈련**을 예로 들고 추가 훈련을 명시해요. 생성 단위는 단어보다 작을 수도 있어요. | ‘이런 모델은 처음 배울 때, 앞 글을 보고 다음에 올 글 조각을 맞혀 봐요. 답할 때는 배운 대로 글 조각을 하나씩 이어 붙여요’처럼 적용 범위와 두 때를 나눠요. `data`도 사전 훈련으로 한정해요. |
| 5 | blocker | 제목, 1–2, 3 | **첫 항목에서 LLM을 뜻보다 먼저 읽어요.** 제목·주의문·범례·숫자 칸·배울 내용에 약자가 나오고, 3단계의 본문에 이르러 ‘큰 언어 모델’이라는 풀이가 나와요. 3단계에도 약자와 뜻이 다른 문장에 있어요. | 처음 보이는 제목 또는 바로 옆 한 줄에 ‘채팅에서 답을 써 주는 프로그램을 LLM이라고 불러요’ 수준의 풀이를 넣거나, 이름을 붙일 때까지 앞의 범례와 숫자 칸을 쉬운 말로 불러요. 3단계 도입은 한 문장으로 붙여요. |
| 6 | blocker | 3, 10, 출처의 다섯 번째 `data` | **Claude의 이름을 뒷받침하는 인용이 맞지 않아요.** 링크된 용어집은 ‘Claude라는 AI 도우미는 LLM을 바탕으로 만들어졌다’고 해요. Claude가 모델 계열의 이름이기도 한 것은 별도의 공식 모델 문서에서 확인돼요. GPT와 Claude는 둘 다 한 개씩의 모델 이름이라기보다 계열 이름이에요. | Claude 쪽은 Anthropic의 *Models overview*, GPT 쪽은 OpenAI의 모델 자료를 각각 연결하고 ‘Claude와 GPT는 이런 모델들의 이름이에요’처럼 제품 화면과 모델을 구분해요. |
| 7 | blocker | 7b | **중간 선택값 3이 출처나 계산에 없어요.** 3개를 붙이는 설정이 있어서 9개를 모른다는 계산은 맞지만, 출처의 5개·4개·3개는 각각의 달에 들어 있는 사진 수이지, 붙여 넣을 이름 수로 3을 고른 근거는 아니에요. | ‘일부만 알려 주는 예로 이름 3개를 고른다’를 `assumption`으로 추가해요. 그중 어떤 세 이름을 보내는지는 분류 결과를 보여 줄 때만 정해요. |
| 8 | blocker | 5–8, 10 | **답장의 방향을 정지 그림이 거꾸로 가리켜요.** 특히 5단계는 ‘답장도 글’이 붙은 흰 화살표가 앱 → 모델을 가리켜요. 시트와 애니메이션의 녹색 점은 반대로 잘 돌아오지만 점이 없는 순간에도 그 방향으로만 보이고, 지민 쪽은 계속 보내는 화살표밖에 없어요. | 답장 장면에서는 모델 → 앱이 정지 상태에서도 읽히게 해요. 두 방향을 따로 표시하거나 정지 화살표의 라벨을 요청과 답장으로 나누고, 앱에서 지민에게 표시된다는 점을 그림 또는 짧은 태그로 보여 줘요. |
| 9 | blocker | 7b–7c | **같은 숫자가 서로 다른 물건을 세요.** 그림의 ‘답장 · 분류표 3개/12개’는 한국어로 표가 3장/12장이라는 뜻으로 읽히지만, 판정은 파일 이름 3개/12개를 한 답장에 나눠 적었다고 해요. 실제로 옮긴 파일 0개는 세 선택지 모두 맞아요. | 태그를 ‘이름 3개 나눠 적음’처럼 **파일 이름**의 수로 붙여요. 0개 선택에서도 이름을 0개 나눠 적었다는 점을 태그 또는 같은 자리에 보이면 세 장면을 바로 비교할 수 있어요. |
| 10 | should-fix | 7 | **0개와 3개는 부족하고 12개는 충분해요.** 너무 많이 알려 주었을 때는 보여 주지 않아요. 12개는 이름을 나누어 적기에 충분할 뿐, 파일을 옮기기에는 충분하지 않다는 점은 실험으로 잘 드러나요. | 같은 이름 목록 뒤에 중복 이름을 더 붙이는 경우처럼, 같은 변수만 늘린 ‘충분한 양을 넘김’을 비교해요. 고유한 이름 수와 옮긴 파일 수를 혼동하지 않게 하고 추가 숫자는 출처에 써요. |
| 11 | should-fix | 7 → 8, 10 | **선택과 본 이야기를 잇는 말이 없어요.** 3개를 누른 뒤 바로 ‘다음’을 누르니 그림이 ‘분류표 5 + 4 + 3’으로 바뀌었어요. ‘이름 12개를 다 알려 주자’에서야 다른 경우라고 추측했어요. 별도 답장들이 이야기 속에서 다 일어났다고 읽으면 마지막 ‘쓴 글 2건’도 헷갈려요. | 8단계 앞에 ‘선택은 비교였어요. 이제 이름을 모두 보낸 경우로 돌아가 볼게요’처럼 본 이야기가 어느 경우를 이어 가는지 알려 줘요. |
| 12 | should-fix | 3, 5–9 | **‘달라진 점’에 빠진 변화와 더는 보이지 않는 변화가 있어요.** 3단계에 앱 → 모델 선이 생기고, 5단계에 전체가 `— → 0`이고 폴더의 ‘뒤섞임’이 ‘그대로’로 바뀌어요. 6단계는 닿지 않는 선 외에도 모델의 붉은 빛과 링크 이름이 바뀌어요. 7단계의 ‘새 글을 쓰는 중’은 세 선택을 모두 해 본 뒤에도 남지만 그림에는 답장이 보였어요. 8–9단계에서 선택용 표지가 바뀌고 모델이 옅어지는 것도 목록에 없어요. | 1–3줄 안에서 같은 변화에 속하는 선·표지·숫자를 묶어 써요. 7단계에는 선택 후에도 여전히 참인 변화만 남기거나, 기본 화면에 대한 말이라고 표시해요. |
| 13 | should-fix | 2–8, 9 | **점 수를 글 건수로 읽으면 그림이 이야기를 늘려요.** 2단계가 ‘점 하나가 글 한 건’이라고 하는데 한 줄 부탁에 같은 점이 반복돼요. 7단계 세 선택은 모두 글 한 번과 답장 한 번으로 그리면서 점 빈도만 높여 더 많은 글이 오간 것처럼 보여요. 9단계의 파일 점도 계속 움직이지만 12번으로 끝나는 작업을 압축해서 그렸다는 표시가 없어요. | 한 요청·한 답의 경로를 한 번씩 보여 주거나, ‘점은 글의 방향을 반복해 보여 줘요’라고 약속을 바꿔요. 파일 이름 수는 점 빈도 아닌 태그로 나타내고, ‘12번의 옮기기를 한 장면으로 줄여 그렸어요’라고 밝혀요. |
| 14 | should-fix | 1–10, 특히 7·10 시트 | **시트의 작은 글씨는 확대가 필요해요.** 1440px 두 열에서 비스듬한 ‘지민의 노트북’, 7단계 선택지의 보조 라벨, 10단계 요약 상자 속 글씨가 작아요. 본 읽기 화면에서는 핵심 라벨을 읽을 수 있었고, 두 화면에서 내용을 가리거나 자르는 겹침은 보지 못했어요. | 먼저 한눈에 읽어야 하는 태그·요약 줄을 더 짧게 바꾸고 중요 글자에 공간을 주세요. 특히 노트북 안/밖의 경계를 읽을 수 있게 영역 이름의 크기나 대비를 올려요. |
| 15 | should-fix | 1, 5, 7–8, 10 | **해요체는 대체로 자연스럽고 따뜻해요.** ‘손이 안 가요’, ‘폴더를 보세요’, ‘눈과 손’은 쉬워요. 반면 `Case:`와 ‘이 워크스루의 순서’는 풀이 없이 들어온 말이고, ‘무대 위 숫자 칸’, ‘12번의 옮기기는 모두 지민의 손이 했어요’는 말하듯 쓰던 흐름에서 튀어요. ‘좋은 설명이에요’, ‘정말 잘해요’는 근거보다 칭찬을 더해요. | `Case:`는 ‘이름을 붙여 넣어 봐요’, 순서 표지는 ‘이야기의 순서’, 정리 문장은 ‘파일은 지민이 12번에 걸쳐 옮겼어요’처럼 일상어로 써요. 고유명은 그대로 두고 불필요한 칭찬 대신 무엇이 적혔는지 보여 줘요. |
| 16 | should-fix | 7b–8, 9 | **분류가 맞았다는 것은 지어낸 결과인데 본문에서는 보장처럼 느껴져요.** 출처는 틀릴 수 있다고 적지만, 본문은 ‘맞게’, ‘빈틈없는’이라고 단정하고 지민이 확인 없이 그대로 옮겨요. | ‘이 예에서는 날짜대로 맞게 나눠 적었어요’로 한정하고, 실제 답이 맞는지는 확인해야 한다는 점을 짧게 표시해요. |
| 17 | should-fix | 4 | ‘LLM이 답을 만드는 방식’ 목표의 그림에는 들어가는 글과 ‘답 쓰는 중’만 있어요. 오른쪽 설명을 읽어야 조각을 하나씩 잇는다는 사실을 알 수 있어요. | 답장의 짧은 예를 ‘3월’ → ‘3월 영수증은 …’처럼 차례로 드러내서 글을 이어 쓰는 변화를 그림에서도 보여 줘요. |
| 18 | could-fix | 5, 9 | 전환 때 5단계는 모델·앱·폴더에 동시에 초록 테두리가 생기고, 9단계에서도 옅어진 모델이 폴더와 함께 테두리로 강조돼요. 읽는 눈이 ‘무엇이 바뀌었나’보다 먼저 여러 곳에 끌려요. | 5단계는 돌아온 답장, 9단계는 지민 → 폴더에 시선을 모으고 보조 표지는 차분하게 유지해요. |

**Stage and try.** `—/—/—`로 시작하고, 5–8단계와 7단계의 모든 선택에서 `0/—/0`, 9–10단계에서 `0/12/12`가 표시됐어요. 기본 화면 및 세 선택의 태그가 서로 달라요. 선택지는 모두 알려 주는 이름 수만 바꿔 결과를 비교하고, 세 판정의 이유가 선택값과 이동 0개를 말해요. 이 대화에서 접근 경로가 없다는 빨간 X, 폴더의 ‘그대로 → 월별 정리’, 지민의 이동 경로는 글 없이도 구분돼요. 개체 자체는 같은 자리에 있고 구도가 한꺼번에 조금 달라지는 정도였어요. 1단계 개체 두 개(영역 제외) 뒤 한 단계에 최대 하나가 추가돼요. 범례는 글·답장·파일 이동의 점을 모두 포함하고 물체 색의 역할도 일정해요. 단계 주소, 이전 버튼, 오른쪽 방향키, Replay·Pause, 선택 키 `2`·`0`과 되돌리기 버튼을 확인했어요. 9단계에 들어가는 순간 브라우저가 전체 칸을 한 번 `-0개`로 읽었지만 정착하면 12개였어요. 저장된 수나 시트에는 `-0`이 없어요.

**Words and arc.** HTML 태그를 제거하고 공백으로 나눈 어절을 실제로 셌어요(숫자·파일 이름 포함, 문장부호만 있는 토막 제외). 제목·질문·요약은 **4/9/13**, 단계 제목은 **4, 4, 5, 5, 3, 4, 5, 4, 4, 4**, 단계 짧은 이름은 **1, 1, 1, 2, 1, 2, 2, 2, 2, 1** 어절이에요. 본문 `1문단/2문단`은 **17/19, 15/16, 26/15, 16/21, 19/11, 16/20, 14/17, 20/16, 14/18**; 정리는 **18**어절 결과 문장과 **12/10/7/14**어절의 규칙 네 개(목록은 문단 제한 예외)예요. 선택 안내 **6**, 세 옵션 `버튼/판정/이유` **1/3/11, 1/3/10, 1/4/14**, 출처 주장 **11, 10, 11, 7, 4, 13, 9, 6, 11, 10**, 목표 **6, 4, 5, 5, 6**이므로 길이 제한 위반은 없어요. 모든 단계에 강조 상자는 하나 이하고 정리에는 다음 편을 이어 주는 상자가 있어요. 제목만 읽어도 ‘뒤섞인 사진 → 부탁 → 글 답장 → 폴더는 그대로 → 지민이 옮김’이 이어져요. 지민의 사례 하나, 제목·요약의 목차 일치, 답장을 본 뒤 한 번의 실험, 수동으로 12번 옮기는 대가, 정리의 수치와 네 규칙을 확인했어요.

## Numbers

**손으로 다시 계산:** 3월 5개 + 4월 4개 = 9개; 여기에 5월 3개를 더하면 **12개**예요(`sources`의 영수증 가정, [원장][ledger] A2–A3). 7c와 8단계의 이름 목록은 예시에서 12개를 나눠 적지만 옮긴 파일은 0개예요. 9–10단계에는 지민이 사진 한 개당 한 번씩 12개를 옮기므로 **모델 0 + 지민 12 = 정리된 파일 12개**예요. 시트·숫자 칸·10단계 요약 상자와 일치해요.

| 위치 | 추적한 값과 판정 |
|---|---|
| 1–4 | 3월–5월과 사진 12개는 A2–A3. 부탁 한 줄은 실제 인용문과 A5. 이동 주체가 드러날 때까지 카운터는 비어 있어요. |
| 5–6 | 몇 초 및 방법 다섯 단계는 A6/`assumption`. 답장은 파일을 옮기지 않았으므로 0 + 해당 없음 = 0. 장면의 ‘12개 그대로’는 폴더 안 개수이지 완료 수가 아니에요. |
| 7–7c | `0312_화분.jpg`는 A4/`assumption`. 0은 아무 이름도 안 보냄, 12는 전부(A2–A3). 3은 따로 적어야 할 예시 설정(#7); 9는 12 − 3이라 그 설정을 적으면 추적돼요. 이동 총계는 어느 선택에서도 0 + 해당 없음 = 0. 분류표 태그의 3/12는 수 자체가 아니라 단위가 어긋나요(#9). |
| 8–10 | 월별 폴더 세 개는 세 달에서, 12번은 파일마다 한 번씩 옮긴다는 본문의 행동과 12개에서 나와요. ‘눈과 손’ 둘은 읽기·이동의 두 역할. ‘쓴 글 2건’은 본 이야기의 방법 답장 1건(5단계) + 분류 답장 1건(8단계)으로 도출돼요. 7단계 선택을 추가로 일어난 실제 사건으로 세지 않는다는 전제가 필요해요(#11). |

시간 `8 min`은 편집상 읽기 예상치이고, `10 steps`·옵션 번호·출처 수는 실제 구성의 개수예요. 사례의 처리 시간이나 모델 성능 수치가 아니에요.

## Facts

`D1–D5`는 `llm.js`에 적힌 `data` 항목 순서예요. 인용된 원문 세 페이지를 모두 열었어요. 본문과 그림에 반복되는 같은 주장은 한 줄에 위치를 모았고, 예시에서 맞는 말과 일반화하면 틀리는 말을 나눴어요.

| Claim | Where it appears | Result | Checked against |
|---|---|---|---|
| LLM은 ‘큰 언어 모델’이고 아주 많은 글을 학습한다. | D1, 3·4 본문 | verified | [Anthropic Glossary][glossary], ‘LLM’: 많은 양의 텍스트로 학습한 AI 언어 모델. 글 **만으로** 학습한다는 뜻은 아님. |
| LLM은 글을 만들어 글로 질문에 답할 수 있다. | D1, 3–5 본문, 10 정리 | verified | [Anthropic Glossary][glossary], ‘LLM’; [OpenAI Codex loop][loop], ‘The agent loop’. |
| Claude 같은 모델은 처음 학습할 때 앞 문맥으로 다음 조각을 예측한다. | D2의 좁은 뜻, 4 본문 | verified | [Anthropic Glossary][glossary], ‘Pretraining’은 Claude 같은 앞에서 뒤로 이어 쓰는 모델을 예로 들어 ‘next word’라 하고, ‘Tokens’는 글 조각이 단어보다 작을 수 있다고 설명해요. |
| 모든 LLM이 앞 글로 다음 단어를 맞히는 것만 연습하며, 답을 생성할 때도 훈련과 똑같이 한다. | 한정 없는 D2, 4 ‘한 가지’, ‘지금도 똑같아요’ | wrong | [Anthropic Glossary][glossary] ‘Pretraining’·‘Fine-tuning’은 추가 훈련을 구분해요. [Google BERT][bert]는 앞뒤 문맥으로 가려진 단어를 맞히는 다른 학습 방식의 예예요. [OpenAI Codex loop][loop] ‘The agent loop’는 답을 만들 때 학습이 아니라 학습된 모델에서 답을 뽑는 과정을 설명해요(#4). |
| 이처럼 글을 생성하는 모델은 답을 작은 글 조각으로 순서대로 생성한다. | D3, 4·10 본문 | verified | [OpenAI Codex loop][loop], ‘The agent loop’: 출력은 토큰 단위로 만들어지고 글로 바뀌어요. 화면에서 반드시 조각마다 보여야 한다는 뜻은 아니에요. |
| Claude Code의 모델은 연결된 도구가 없으면 글로만 답한다. | D4의 인용 범위, 4·6·10의 이 사례 | verified | [How Claude Code works][code], ‘Tools’: ‘Without tools, Claude can only respond with text.’ 이 절은 Claude Code를 설명해요. |
| 도구 없는 모델은 무엇이든 글로만 내보낼 수 있다. | D4의 문구, 제목·4단계 상자·10단계 세 번째 규칙 | wrong | [GPT-4o][omni]의 ‘Model capabilities’는 동일 모델이 음성 출력도 생성한다고 설명해요. [GPT-Realtime-2][realtime]도 음성 출력을 명시해요. 인용한 Claude Code의 문장은 다른 모델 모두에 적용되지 않아요(#1). |
| LLM은 글만 받을 수 있다. | 3의 정의, 4 핵심 상자, 10 첫 번째 규칙을 일반화한 읽기 | wrong | [Claude Models overview][models] ‘Latest models’에 텍스트와 이미지 입력이 있고, [GPT-Realtime-2][realtime]도 이미지와 음성 입력을 지원해요. 이 예에서 글만 보낸다는 것은 맞아요(#1). |
| 사진을 입력으로 받을 수 있는 모델이 있다. | 상단 주의문 | verified | [Claude Models overview][models], ‘Latest models’; [GPT-Realtime-2][realtime], ‘Model details’. |
| 소리를 입력으로 받을 수 있는 모델이 있다. | 상단 주의문 | verified | [GPT-Realtime-2][realtime], ‘Model details’. ‘요즘 LLM은’보다 ‘일부 모델은’이 범위를 정확히 나타내요. |
| Anthropic의 Claude는 LLM 이름이다. | D5의 Claude 부분, 3·10 본문 | unverified (named source); verified with better source | 지목한 [Anthropic Glossary][glossary] ‘LLM’은 Claude를 **LLM에 기반한 도우미**라고 불러요. 별도의 [Claude Models overview][models] 첫 문장이 Anthropic의 **LLM 계열** 이름으로 명시해요(#6). |
| OpenAI의 GPT는 LLM 계열 이름이다. | D5의 GPT 부분, 3·10 본문 | verified | 지목한 [OpenAI Codex loop][loop]는 LLM이 Codex와 별개이며 GPT 계열 모델을 선택해 쓸 수 있음을 ‘Model inference’의 `gpt-oss`, `gpt-5.2-codex` 등으로 보여 줘요. [Introducing GPT-5][gpt]는 GPT-5 계열을 직접 명명해요. D5의 화면 링크는 Anthropic 페이지 한 곳만 열어요. |
| 앱 화면과 답장을 생성하는 모델은 역할이 다르다. | 2–3 본문·핵심·별개 노드, 첫 목표, 출처의 앱 가정 일부 | verified | [OpenAI Codex loop][loop], ‘The agent loop’와 ‘Model inference’; [ChatGPT Work and Codex][work], ‘Models in Work and Codex’·‘Choose an experience’. 역할이 다르다는 말이지 물리적으로 늘 다른 곳에 있다는 뜻은 아니에요. |
| 그림처럼 앱이 원격 모델에 요청을 보내고, 모델이 글 답장을 앱으로 돌려보낼 수 있다. | 2–5 본문, 3–8 주황·녹색 흐름, 출처의 앱 가정을 이 사례로 한정 | verified | [OpenAI Codex loop][loop], ‘Model inference’ 및 ‘The first turn’: HTTP 요청, 응답 글이 앱으로 돌아오는 예. 정확히 지민의 앱이 실재한다는 뜻은 아니에요. |
| 채팅 앱과 LLM은 반드시 다른 장소에 있고 글은 언제나 AI 회사 서버로 간다. | 3 본문·상자·노드, 6 원인 설명, 출처의 앱 가정을 일반화한 읽기 | wrong | [OpenAI Codex loop][loop] ‘Model inference’ 자체가 외부 또는 로컬 주소를 허용해요. [LM Studio][localchat] ‘Natively local’은 앱이 로컬 LLM으로 채팅할 수 있다고 명시해요(#2). |
| 모델에서 돌아오는 답장의 실제 방향은 모델 → 앱 → 화면을 읽는 사람이다. | 5–8 제목·녹색 흐름·앱 태그, 9 본문, 10 그림에 함축 | verified | [OpenAI Codex loop][loop], ‘The first turn’는 서버가 돌려주는 답 글을 화면에 표시한다고 설명해요. 모델 쪽만 가리키는 장면의 고정 화살표와 사람 쪽을 생략한 그림은 이 순서를 충분히 그리지 않아요(#8). |
| 도구를 붙이지 않고 이 부탁 한 줄만 주면 모델이 지민의 폴더를 직접 열거나 사진을 옮기지 못한다. | 질문·요약을 이 경우로 한정, 5–10 본문·빨간 X·0개·눈/손 태그 | verified | [How Claude Code works][code] ‘Tools’에서 파일 읽기·옮기기 등의 기능이 연결된 도구 쪽에 있어요. [OpenAI Codex loop][loop]에서도 도구가 실제 동작을 해요. 0개는 이 예시의 결과예요. |
| 이 한 줄에는 실제 사진 개수나 다른 파일 이름이 없으므로 모델이 그 사실을 폴더에서 확인할 수 없다. | 2의 인용문, 6 본문, 7a–b 판정·접근 단절 | verified | 화면의 부탁에 개수나 이름이 없고 접근이 없는 설정이에요. [How Claude Code works][code] ‘Tools’와 [Anthropic Glossary][glossary] ‘Context window’·‘RAG’는 파일 정보가 외부에서 주어져야 이 조건이 달라진다는 점을 뒷받침해요. 추측을 못한다는 뜻은 아니에요. |
| 모델이 지금 일에 관해 활용할 수 있는 것은 지금 받은 글에 **적힌 것뿐**이다. | 6 핵심 상자, 7–8의 ‘본 이름’ 태그로 강화, 네 번째 목표, 10 두 번째 규칙 | wrong | [Anthropic Glossary][glossary]는 학습으로 얻은 지식과 현재 참고할 내용을 구분해요. [OpenAI Codex loop][loop]는 앞 대화와 앱이 따로 준 지시·도구 결과도 함께 쓰는 예를, [Claude memory][memory]는 앱이 다른 대화 정보를 건네는 예를 보여 줘요. 날짜를 분류하는 것부터가 받은 글을 해석하는 예예요(#3). |
| 채팅 앱을 쓰면 원격 모델이라 로컬 파일 작업은 할 수 없고 사람이 직접 옮겨야 한다. | 요약, 3·6의 인과 설명과 8–10 그림에서 일반화할 수 있는 결론 | wrong | [Claude Cowork][cowork] ‘How Claude Cowork runs your tasks’·‘Permissions and security’·‘Organize files’: 원격 작업이라도 데스크톱 앱으로 허락한 폴더를 정리할 수 있어요. [ChatGPT Work][work] FAQ도 데스크톱에서 허락한 파일 접근을 명시해요. 예시의 지민이 직접 옮긴다는 결말은 맞아요(#2). |
| 글로 계획을 세우는 것과 실제로 파일을 옮기는 것은 다르며, 실제 작업에는 모델 외부에서 실행하는 사람이든 프로그램이든 필요하다. | 5·7의 답과 0개, 8 경고·눈/손, 9의 지민 → 폴더, 10 마지막 규칙·다음 편 | verified | [How Claude Code works][code] ‘The agentic loop’·‘Tools’와 [OpenAI Codex loop][loop] ‘The agent loop’ 모두 모델의 판단과 외부 실행을 나눠요. [Claude Cowork][cowork]는 파일 정리 사례를 직접 명시해요. |
| 날짜가 든 이름을 주면 지민의 모델이 받은 수만큼 하나도 틀리지 않고 월별로 적는다. | `assumption` 마지막 항목, 7b–c 판정·앱 태그, 8–9 본문 | unverified | [원장][ledger] A7의 미실행 예시이며, [Reduce hallucinations][hallucinations]는 주어진 내용과 모순되는 답도 나올 수 있다고 명시해요. 정확한 결과는 이 이야기에만 적용돼요(#16). |
| 같은 요청을 해도 실제 답이 달라질 수 있고 틀릴 수도 있다. | 두 답장 `assumption`의 설명 | verified | [Anthropic Glossary][glossary] ‘Temperature’(같은 입력의 서로 다른 출력), [Reduce hallucinations][hallucinations]. ‘매번 달라요’보다는 ‘달라질 수 있어요’가 출처와 같아요. |

12개 사진의 구성과 날짜가 있는 파일 이름, ‘몇 초·5단계’는 `assumption` 세 항목에 각각 표시된 예시값이며 실제 파일이나 응답의 측정값이 아니에요. [원장][ledger] A2–A6과 일치해요. 단계 7의 예시 선택값 3은 예외예요(#7).

## For the owner

- 꽃집 사례가 실제 독자에게 가장 와닿는지, 8분이 현실적인지, ‘눈과 손’ 비유가 사진을 읽는 능력과 폴더 접근의 차이로 받아들여지는지는 비전공 한국어 독자와 확인하지 못했어요. 한국어 자연스러움 판단도 그 독자 테스트를 대신하지 않아요.
- 지민의 채팅 앱과 사진 목록은 가상이라 응답 시간·답장 단계 수·분류 정확성을 측정할 수 없어요. 실제 채팅 제품 전체의 권한이나 동작을 조사한 것도 아니에요. 인용한 실제 제품은 가능 여부를 확인한 예예요.
- 1440px 데스크톱에서 확인했어요. 다른 화면 크기와 보조 기술은 별도로 확인하지 않았고, 순간적으로 보인 `-0개`의 엔진 쪽 원인은 조사하지 않았어요.

## Resolution

Resolved by the author (Claude, in OMP) on 2026-11-22. The walkthrough was rewritten after
this review; its sheet shows 0 warnings and 0 notes, every tile was looked at, and it was
stepped through once with all three try options and Reset. **The fixes below were not
independently re-reviewed.** After the review the owner asked that every walkthrough explain
with both ChatGPT and Claude products, ChatGPT first: step 3 and the recap now say that GPT
is the LLM that writes the answers in ChatGPT and that Claude is the same kind of thing,
with an OpenAI help article as the source for the ChatGPT side.

| # | Decision | What changed |
|---|---|---|
| 1 | fixed | The claim is now "LLM이 내놓는 것은 답이에요. 행동이 아니에요" (step 4 callout, recap). The note says the story only exchanges text and that some models read photos or answer by voice. The eye is now "폴더를 직접 열어 볼 눈" in the text and "폴더 볼 눈 없음" on the stage. The Claude Code source claim is limited to Claude Code. The title keeps "글만 쓰는 기계" as the stated simplification. |
| 2 | fixed | Distance is no longer the reason. Step 3 says "지민이 쓰는 이 앱은"; step 6 says the app does two things only (send the text, show the answer) and has no feature that opens the folder or moves photos. A tip says apps with such a feature exist and that the feature, not the LLM, opens the folder. The app is an `assumption` entry that says local and tool-equipped apps exist. |
| 3 | fixed | Replaced with "폴더에 실제로 무엇이 있는지는, 누가 알려 주지 않으면 LLM이 확인할 수 없어요" in step 6, the goals and the recap. |
| 4 | fixed | Step 4 separates learning ("처음 배울 때 … 다음에 올 말을 맞히는 연습") from answering ("그렇게 배운 대로 … 한 조각씩 이어 붙여요"). The source claim is limited to pretraining of models like Claude. |
| 5 | fixed | The counters, legend and panel say "AI" until the term exists; step 3 introduces LLM and its gloss in one sentence. "LLM" remains in the title, where "글만 쓰는 기계" is its gloss. |
| 6 | fixed | Claude is sourced to Anthropic's "Models overview" (checked: "Claude is a family of … large language models"; current models give text output). GPT is sourced to the OpenAI Codex post. The text says "이런 모델들의 이름". |
| 7 | fixed | Added the `assumption` entry "일부만 알려 주는 경우로 파일 이름 3개를 고른다". |
| 8 | fixed | Request and reply are two links on one line. Step 5 and step 8 show only the reply, so the still arrow points LLM → 앱; steps that show both read as a two-headed "글만 오가는 길". The reply reaching 지민 is shown by the tag on the app; no separate arrow was added, to keep the stage to five objects. |
| 9 | fixed | Tags count file names: "이름 0개 / 3개 / 12개 나눠 적음", and "받은 이름 n개" on the LLM. Step 8 shows "3월 5 · 4월 4 · 5월 3". |
| 10 | not changed | More names than 12 cannot exist in this folder, and the point of the step is that no amount of information moves a file. The options stay none, some, all (0, 3, 12). |
| 11 | fixed | Step 8 opens with "이제 이름 12개를 모두 붙여 넣은 경우로 이어 가요". The recap tag is "쓴 답장 2건" (step 5 and step 8). |
| 12 | fixed | "달라진 점" now lists the new arrow in step 3, the reversed arrow, the 0 and the folder tag in step 5, the red glow in step 6, the dimmed LLM in step 9. Step 7's line says it describes the picture before choosing. |
| 13 | fixed | Step 2 says the dots repeat the direction a text travels. All three options use the same dot rate. Step 9 says the twelve moves are drawn as one scene. |
| 14 | not changed | The zone name and option tags are small on the sheet's tiles but readable in the reading view, where the stage is about twice as large. The zone name's size comes from the engine. |
| 15 | fixed | "Case:" is gone (step 7 is "파일 이름을 붙여 넣어 봐요"), the strip heading is "이야기의 순서", "무대 위" is "그림 위", the recap says "파일은 지민이 12번에 걸쳐 직접 옮겼어요", and the two praise sentences were removed. |
| 16 | fixed | Step 8 says "이 예에서 … 날짜대로 나눠 적었어요" and its callout says a real LLM's answer is sometimes wrong. The verdicts say "날짜대로", not "맞게". |
| 17 | fixed | Step 4 shows the first pieces of the answer as a tag on the LLM: "“먼저” “폴더를” “세 개” …". |
| 18 | not changed | The spotlight on changed objects is the engine's; step 5 changes three things on purpose (reply, counter, folder tag). |

**Hand check.** 3월 5 + 4월 4 + 5월 3 = 12개. With 3 names pasted, 12 − 3 = 9 unknown. At step 9:
AI가 옮긴 0 + 지민이 옮긴 12 = 정리된 12개.

**Still unverified.** Whether the flower-shop case and the "눈과 손" picture work for real
Korean lay readers; anything outside a 1440 px desktop window; the brief "-0개" the reviewer
saw while the counter animates into step 9 (engine behaviour, not investigated).

## Owner decision

[ledger]: ../sources/ledger.md
[glossary]: https://platform.claude.com/docs/en/about-claude/glossary
[loop]: https://openai.com/index/unrolling-the-codex-agent-loop/
[code]: https://code.claude.com/docs/en/how-claude-code-works
[models]: https://platform.claude.com/docs/en/models/overview
[omni]: https://openai.com/index/hello-gpt-4o/
[realtime]: https://developers.openai.com/api/docs/models/gpt-realtime-2
[bert]: https://research.google/blog/open-sourcing-bert-state-of-the-art-pre-training-for-natural-language-processing/
[gpt]: https://openai.com/index/introducing-gpt-5/
[localchat]: https://lmstudio.ai/
[work]: https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex
[cowork]: https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
[memory]: https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context
[hallucinations]: https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations
