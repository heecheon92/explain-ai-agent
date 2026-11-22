# Review: 허락은 누가 받나 (`permission`)

- **Reviewed:** 2026-11-22
- **Reviewer:** OpenAI GPT-6.2 Sol (`openai-codex/gpt-6.2-sol`), OMP; ego-browser for the rendered review
- **Author:** Claude (different model from the reviewer; exact variant and tool not supplied)
- **Independence:** independent
- **Rendered and stepped through:** yes, in ego-browser/Chromium; all three step 9 choices, Reset, Back, Replay and Pause exercised
- **Sheet read:** yes, 0 warnings and 0 notes in Checks; inspected all 14 tiles at a 1440 px browser viewport, with no console errors observed on the walkthrough
- **Format checks:** done

## Verdict

Needs changes. The stage contradicts its own file count and blurs who deletes the files, and the real-product comparison overstates what happens when a tool does not ask.

## Reader pass

- Step 1 sets up the risk with a familiar job: 지민 adds “중복된 사진은 지워 줘.” By step 3 I could say what the story was about: the LLM proposes a deletion, and something else has to decide whether to carry it out.
- Steps 4–7 give that decision stakes: two photos really are duplicates, but one is another receipt. I reread the step 1 counter explanation to tell whether it counted prompts, notes or files, and steps 6–7 to see how 지민 knew which photo to keep.
- The titles in order tell the story. The first new technical term, `샌드박스` in step 10, has a plain gloss in the same sentence; LLM, 모델, 하네스, 에이전트, 쪽지, Codex and Claude Code are already familiar from earlier lessons.
- The recap picture alone gives the 6 + 1 split and the desired outcome, but `사진 12개` and `10개 남음` on the same folder disagree. The text gives mostly reusable rules; its last rule needs to distinguish not asking from not having restrictions.

## Findings

| # | Severity | Step | Finding | Suggested fix |
|---|---|---|---|---|
| 1 | blocker | 7–8, 9a–c, 10–11 | The settled folder still says `사진 12개` under its name while the tag says `10개 남음` or `9개`. This is two apparent current totals on the object whose contents the reader is comparing. | Give the folder a non-count subtitle, leaving its state tag as the sole current count, or mark the fixed 12 unmistakably as the starting count. |
| 2 | blocker | 1–4, 7–11 | The starting count of 12 is needed to derive 10 and 9, but none of this walkthrough’s four `assumption` entries gives it. It is an invented value in the collection note and `sources/ledger.md` A2, not an input in this walkthrough’s own openable ledger. | Add a local `assumption` naming the 12 starting photos and pointing to A2. |
| 3 | blocker | 7 | The same gray `지우기` dot traverses 지민 → 하네스 → 폴더. The first leg is a human reply in the text, not a deletion; the picture merges the two actions at the moment the story is teaching who does what. | Use a message dot for `2개만 지워요` on 지민 → 하네스 and a separate delete dot only on 하네스 → 폴더. |
| 4 | blocker | 9a | `바꾸는 쪽지 5장마다 멈춰서` reads as “stops every five change notes,” not five stops, although the verdict and counter say five. The why line also breaks the one-sentence budget. | Say `폴더 만들기 1번, 옮기기 3번, 지우기 1번에 각각 멈춰서 모두 5번 물었어요.` |
| 5 | blocker | 10, source #4 | `아무것도 묻지 않는 방식` and `모든 것을 묻지 않고 하는 방식` overpromise for Claude Code. The cited page explicitly lists actions that still prompt or are denied in bypass mode. The same row's unconditional in-folder reading claim ignores explicit ask/deny rules. | Split the source row. Say in-folder reads usually need no confirmation under the baseline rules, and say that bypass mode skips ordinary prompts but some actions still prompt or are blocked. Qualify the on-page sentence too. |
| 6 | blocker | 10–11 | `정도를 정하는 것은 사람이에요` followed by `안 물으면 되돌리기 어려운 일이 그냥 일어나요` makes the story’s all-allowed/no-ask policy sound like a universal product rule. A no-prompt session can still enforce a boundary, and a managed policy can constrain a user’s available choices. | Use `이 예시에서 안 묻기로 두면 잘못 고른 사진도 지워져요. 실제로는 묻지 않아도 아예 못 하는 일이 있을 수 있어요.` In step 10, distinguish who sets the rules from who reviews a particular action. |
| 7 | should-fix | 1, 11 | The top question asks **who** blocks a deletion, but the setup explicitly promises a count and the recap leads with **how many**. The answer to “who” is there, but not as the single number the question asks the reader to track. | Ask `지울 때만 묻게 하면, 하네스는 쪽지 7장 중 몇 장에서 지민에게 물을까요?` Keep who asks and why in the explanation. |
| 8 | should-fix | 1, counters throughout | `묻지 않고 한 쪽지` makes `한` briefly look like “one” and treats a note itself as the action. `몇 장인가예요` also makes the opening sentence harder to parse. Most of the body otherwise reads naturally in 해요체. | Pair `묻지 않고 처리한 쪽지` with `묻고 처리한 쪽지`, and say `지민에게 먼저 물은 쪽지가 몇 장인지 세어 봐요.` |
| 9 | should-fix | 2, 5–8, 11 | Some stage changes do not make it into `달라진 점` (e.g. step 6 `지민의 답을 기다림`, step 7 the deletion link opening, step 8 `들음: 2개 지움, 1개 남김`). In step 2 the five actions look like a single repeating trip, and the recap gives a count but no label on the person link saying who was asked. | Focus the change list on those state changes, mark the five actions as compressed (`다섯 번을 한 장면으로 모았어요`), and add a brief `지민에게 확인` label on the approval leg of the recap picture. |
| 10 | should-fix | 6–7 | The text says the screen shows three names, but the stage only shows a generic `3개 지워도 될까요?`. 지민 remembers buying twice, but that doesn't identify the right file from the names the LLM also thought were duplicates. `2개만` can also sound like an ordinary approval button. | In the invented screen, show enough evidence to distinguish the retained receipt, e.g. have 지민 open the photos and identify the different one before asking to delete only the other two. Don't imply either real product offers partial approval for every request. |
| 11 | should-fix | 9a–c, 10 | Options 9a and 9b both keep ten photos. The extra cost in 9a is four more interruptions, not that 지민 literally cannot leave. The source rationale’s `읽지 않고 허락하기 쉬워요` is a separate human-behavior claim, not established by the cited prompt-fatigue guidance. After picking 9c, step 10 jumps from 9 back to 10; it says so only in `달라진 점`, easy to miss after a story about losing a file. | Say that work waits for each reply; state near the choices that 지민 checks and answers each time in this example. Introduce step 10 with `이제 지울 때만 물었던 원래 이야기로 돌아와요` so the jump cannot be read as undo. |
| 12 | should-fix | 10 | The text correctly names Codex first and says Claude Code is the same kind of program. But the house rule calls for both counterparts for each mechanism: the fence is presented only for Codex and review by another model only for Claude Code. `이 설정` / the last goal’s `같은 설정` also make the invented choices sound like real equivalents. | Describe both products’ controls for asking and separate boundaries for shell commands. If keeping automatic review, name Codex Auto-review as well as Claude Code auto, without treating them as the same mode. Use `비슷한 역할을 하는 설정` instead of `같은 설정`. |
| 13 | could-fix | 1, 10, `출처` | Ledger claim #4 is 19 words and #7 is 16, against the 15-word maximum. Both also read as multiple statements. | Split #4 as in finding 5; shorten #7 without dropping the operation counts, e.g. `쪽지 7장: 보기 1, 폴더 만들기 1, 옮기기 3, 지우기 1, 다시 보기 1.` |

Budget check (space-delimited Korean words, with markup removed): title/question/summary 3/9/11; step titles 3–6 and short names 1–2; all five goals 4–5. Body pairs for steps 1–11: 14/16, 19/16, 15/16, 20/15, 18/17, 16/18, 12/14, 20/20, 15/18, 25/25, 19/39 (the last 39 are four takeaways, not prose). Try prompt 4; labels 2/2/2; verdicts 3/3/3; whys 15/9/10 words. Ledger counts: 10, 12, 13, 19, 11, 10, 16, 14, 14, 6. The 11-step arc, one try step after the working case, four recap rules and next-item pointer fit the format; the title and summary match `collection.js`.

## Numbers

Hand check: the example makes 1 initial look + 1 folder-making note + 3 move notes = 5 notes before deletion. The deletion is one note, bringing the total to 6 at step 7. One final look makes 7. Under `지울 때만` only the delete note needs a reply: 7 − 1 = 6 without asking, and 6 + 1 = 7 processed, as shown in steps 8 and 11 and option 9b. Twelve photos minus the two real duplicates = **10 left**. Without asking, all three candidates are removed: **12 − 3 = 9 left**, and **3 − 2 = 1** nonduplicate is lost. The red outcome tag and its verdict agree.

Settled counters (without asking / asked / total): step 1 and step 9 before choosing `—/—/—`; steps 2–6 `5/—/5`; step 7 `5/1/6`; steps 8, 10 and 11 `6/1/7`. All three options sum: `바꿀 때마다` = `2/5/7` (two reads, and 1 + 3 + 1 changes), `지울 때만` = `6/1/7`, `안 묻기` = `7/0/7`. Each changes the base stage; the working choice and the frequent-prompt choice both leave 10, while the no-prompt choice leaves 9. The counters stay blank until a result is earned. The outcome tags agree with the arithmetic; the fixed folder subtitle does not. The only missing numeric input in the walkthrough’s `sources` is the initial 12 (collection ledger A2); date digits in the example filename are an identifier, not a measured quantity.

## Facts

`Source #` refers to the displayed ledger order. Fictional inputs are listed separately below, not as claims about real products.

| Claim | Where it appears | Result | Checked against |
|---|---|---|---|
| Codex has an approval policy controlling when it asks before acting. | Source #1, step 10 | verified | [OpenAI, Agent approvals & security § Sandbox and approvals](https://learn.chatgpt.com/docs/agent-approvals-security#sandbox-and-approvals): explicitly the approval-policy layer; automatic routing is available separately. |
| Codex has a distinct sandbox boundary around what its model-generated commands can reach. | Source #2, step 10 text and `어디까지 닿나` tag | verified | [OpenAI § Sandbox and approvals](https://learn.chatgpt.com/docs/agent-approvals-security#sandbox-and-approvals): write paths and network are examples. This is not a promise that every tool is inside the shell sandbox. |
| Claude Code Manual asks before most file edits and shell commands. | Source #3, step 10 | verified | [Claude Code, Choose a permission mode, introduction](https://code.claude.com/docs/en/permission-modes): named behavior, including “most.” |
| A read inside the working folder never requires approval in any Claude Code mode. | Source #4, first clause | wrong | [Available modes](https://code.claude.com/docs/en/permission-modes#available-modes) describes baselines; [Manage permissions](https://code.claude.com/docs/en/permissions#manage-permissions) gives explicit ask/deny precedence and documents rules for reads of a file in the current folder. |
| A Claude Code mode does everything without asking. | Source #4, second clause; step 10 text | wrong | [Actions no mode auto-approves](https://code.claude.com/docs/en/permission-modes#actions-no-mode-auto-approves) and [bypassPermissions](https://code.claude.com/docs/en/permission-modes#skip-all-checks-with-bypasspermissions-mode) explicitly retain prompts or denials for exceptions. |
| Claude Code auto uses a second model to review actions instead of asking the user for routine decisions. | Source #5, step 10 tip | verified | [Choose a permission mode, introduction and auto section](https://code.claude.com/docs/en/permission-modes#eliminate-prompts-with-auto-mode); the classifier does not see every action. |
| Claude Code auto aims to reduce prompts and block risky actions, not guarantee safety. | Step 10 tip | verified | [Eliminate permission prompts with auto mode](https://code.claude.com/docs/en/permission-modes#eliminate-prompts-with-auto-mode) describes the classifier’s purpose and warns that safety is not guaranteed. |
| Autonomous agents risk compounding errors; Anthropic recommends guardrails. | Source #6, step 4 callout | verified | [Anthropic, Building effective agents § Agents](https://www.anthropic.com/research/building-effective-agents#agents) explicitly recommends testing in sandboxes and appropriate guardrails; it does not quantify how often an incorrect action gets through. |
| The model proposes actions; the harness supplies tools, can carry out a permitted action on local files, and reports the result. | Steps 2–5, 7–8, 11; labels and LLM↔harness↔folder path | verified | [OpenAI, Unrolling the Codex agent loop § The agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/); [Claude Code, How Claude Code works § The agentic loop and Tools](https://code.claude.com/docs/en/how-claude-code-works#the-agentic-loop). The model does not operate on the folder directly in this example; see finding 3 for the misleading depiction of the human reply. |
| The harness can consult its permission rules, pause before an operation, and ask the user to decide. | Steps 5–7, 10–11 text and approval arrows | verified | [OpenAI § Sandbox and approvals](https://learn.chatgpt.com/docs/agent-approvals-security#sandbox-and-approvals); [Claude Code, Permission system](https://code.claude.com/docs/en/permissions#permission-system). Exact prompts and partial approval are not universal. |
| In these products a user can choose how often to be asked. | Steps 9–11 text and recap | verified | [OpenAI, common combinations](https://learn.chatgpt.com/docs/agent-approvals-security#common-sandbox-and-approval-combinations) and [Claude Code, Switch permission modes](https://code.claude.com/docs/en/permission-modes#switch-permission-modes) offer choices; managed policies can constrain them, and both products can delegate some review. |
| No prompt means an operation will go ahead, including hard-to-undo ones. | Step 11 final takeaway, if read as a product rule rather than the example outcome | wrong | [OpenAI, common combinations](https://learn.chatgpt.com/docs/agent-approvals-security#common-sandbox-and-approval-combinations) lists “never asks” with a read-only sandbox. [Claude Code `dontAsk`](https://code.claude.com/docs/en/permissions#permission-modes) denies calls that would otherwise prompt. |
| Frequent prompts make people likely to approve without reading. | Rationale for source #10 | unverified | [Claude Code, Available modes](https://code.claude.com/docs/en/permission-modes#available-modes) names prompt fatigue but does not show that people approve unread prompts. The statement sits inside an assumption entry; the example only establishes that approval interrupts the work. |
| Codex and Claude Code are the same kind of coding tool, and Codex is available in ChatGPT’s desktop app. | Step 10 body; step 11 onward pointer | verified | [OpenAI Help, ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex) and [Claude Code, How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works). The third coding tool named in the pointer, omp, is described as such in [its README](https://github.com/can1357/oh-my-pi#readme). |

For the missing comparisons in finding 12, see [OpenAI, Automatic approval reviews](https://learn.chatgpt.com/docs/agent-approvals-security#automatic-approval-reviews) (only eligible approvals) and [Claude Code, sandboxed Bash tool](https://code.claude.com/docs/en/sandboxing#what-the-sandbox-restricts) (when enabled, limits shell commands; not the built-in file tools).

The story’s seven notes, three suspected duplicates, three invented policies and correct replies are `assumption` entries #7–10. The shared world and its numbers match `sources/ledger.md` A1–A4 and A10–A13 apart from the local omission in finding 2. The exact filenames, prompt showing all three, one altered deletion, protected receipt, and all seven notes eventually completing under every option are parts or consequences of that invented case, not claims about default product behavior.

## For the owner

I could not judge whether the receipt case or the nine-minute pace works best for a real newcomer, or whether they would infer the comparison from the stage without rereading. The review checked official documentation, not live product prompts for a particular version, account or managed workspace. It does not establish how real people behave after repeated prompts or whether a specific deletion would be recoverable. Known engine wording and small zone labels are excluded from the findings.

## Resolution

Resolved by the author (Claude, in OMP) on 2026-11-22. Sheet after the changes: 0 warnings,
0 notes. **The fixes were not independently re-reviewed.**

| # | Decision | What changed |
|---|---|---|
| 1 | fixed | The folder's subtitle no longer carries a count ("영수증 사진"); its tag is the only current count. |
| 2 | fixed | Added the `assumption` "영수증 사진은 처음에 12개다". |
| 3 | fixed | Step 7 uses a message dot for 지민 → 하네스 and a delete dot only for 하네스 → 폴더. |
| 4 | fixed | "폴더 만들기 1번, 옮기기 3번, 지우기 1번에 각각 멈춰서 모두 5번 묻고, 그때마다 일이 지민의 답을 기다려요." |
| 5 | fixed | The source row is split: reads need no confirmation under the baseline rules; even the mode that skips prompts still prompts for or blocks some actions. Step 10 says "거의 묻지 않는 방식". |
| 6 | fixed | Step 10 says some things cannot be done even without asking, and that the rules are chosen by the person or the company. The recap says "이 예에서 안 묻기로 두면 잘못 고른 사진도 지워져요". |
| 7 | not changed | The question stays "누가 막을까요?": it is the owner's outline question and the point of the walkthrough. Step 1 now tells the reader what to count. |
| 8 | fixed | The counter is "묻지 않고 처리한 쪽지"; step 1 says "지민에게 먼저 물은 쪽지가 몇 장인지 세어 봐요". |
| 9 | fixed in part | Step 2 marks the five notes as one scene; steps 6, 7 and 8 list the waiting tag, the delete and what the LLM is told. No extra label was added to the recap picture. |
| 10 | fixed | The harness shows the three photos; 지민 opens them and sees one has a different amount. |
| 11 | fixed | The cost of asking every time is that work waits for each answer; the assumption says 지민 checks and answers each time; step 10 opens with "이제 지울 때만 물었던 원래 이야기로 돌아와요". |
| 12 | fixed | Asking, the sandbox and review by another model are each said of both Codex and Claude Code, with source rows for both; the title and goal say "비슷한 설정". |
| 13 | fixed | The two long ledger claims are split or shortened. |

**Hand check.** 7 notes = 보기 1 + 만들기 1 + 옮기기 3 + 지우기 1 + 다시 보기 1. Asking only before deleting: 6 + 1 = 7; 12 − 2 = 10 photos left. Asking before every change: 2 + 5 = 7. Never asking: 7 + 0 = 7; 12 − 3 = 9 left.

**Still unverified.** Live prompts in current product versions; pacing for real lay readers.

## Owner decision
