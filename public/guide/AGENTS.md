# This folder is a Diorama collection

A set of step-by-step visual walkthroughs behind one shell page. In this repository it is
served by the Next.js app at `/guide/` (`app/guide/` hosts the engine in a React client
component); run `pnpm dev` in the repository root and open `http://localhost:3000/`. The
folder also opens straight from disk through `index.html`, with nothing installed or built.

## About this collection

- **Subject:** What an LLM, a harness and an AI agent are, how the three differ, and where
  Codex, Claude Code and omp fit. At the end a reader can say: "An LLM only writes text. A
  harness is the program around it that carries the text out. An agent is the two working
  in a loop until the job is done. Codex, Claude Code and omp are harnesses."
- **Readers:** People with no technical background at all. They have used a chat app such
  as ChatGPT; they have never seen a terminal or code. Written in Korean.
- **Owner:** heecheonpark (the person who asked for the collection).
- **Kind:** Onboarding guide, read in order, with progress.
- **Example world:** 지민 runs a small flower shop. Her laptop has a folder "영수증" with 12
  unsorted receipt photos: March 5, April 4, May 3. File names carry the date
  (`0312_화분.jpg`). Her request is always the one sentence "영수증 폴더를 월별로 정리해 줘."
  The running number of the whole collection is how many of the 12 files are sorted, and
  who moved them. Full values: `sources/ledger.md`, "Example world".

## How this collection teaches

The three names are hard to explain because they are not three parallel things: the LLM and
the harness are parts, and the agent is what the two are called when they work together.
So the collection never opens with definitions. It builds by lack and addition:

1. `llm` shows the LLM alone and lets the reader feel exactly what is missing: it knows only
   the text it is given and can only write text back. Files moved: 0.
2. `harness` adds the one program that supplies those two missing things (it shows the LLM
   what is in the folder, and it carries out what the LLM writes).
3. `agent` lets the two repeat until the job is done and only then gives that whole its name.
4. `permission` and `harnesses` show what else the harness decides, and that Codex, Claude
   Code and omp are different harnesses.

Keep these fixed across walkthroughs:

- **One picture of the parts.** The LLM is far away (zone "AI 회사") and reachable only by
  text; everything that touches files is on 지민's laptop (zone "지민의 노트북").
- **Notes, not magic.** What the LLM sends is always a piece of writing (a 쪽지). Something
  else has to read it and act. Never draw or say that the LLM touches a file.
- **Colour is role:** person gray, the chat app and laptop yellow, the LLM orange, the
  harness blue, files violet, tools green.
- **Names:** say "LLM" when the point is what kind of thing it is, "모델" as its short name
  afterwards. Claude and GPT are LLMs; Claude Code, Codex and omp are harnesses; 에이전트 is
  the LLM and a harness at work together.
- **Voice:** 해요체, short sentences, no English jargon without a Korean gloss in the same
  sentence.

## House rules

<!-- One line per correction from the owner that will apply again. Newest last. -->

- The owner reviews all walkthroughs at once, not one at a time: write, review and resolve
  each one, set it `awaiting-approval`, and go on to the next without waiting. (2026-11-22)
- Commit and push to `origin/main` each time one walkthrough is done (written, independently
  reviewed, findings resolved). (2026-11-22)
- Readers know ChatGPT; Claude Code is much less known. Explain with both ChatGPT's Codex
  and Claude Code, ChatGPT side first, and say plainly that Claude Code is the same kind of
  thing as Codex (and Claude the same kind of thing as ChatGPT/GPT). Wherever a walkthrough
  introduces a part or a mechanism, name it in both products. (2026-11-22)

## Where things are

| Path | What | Edit it? |
|---|---|---|
| `collection.js` | The outline: sections, order, the status of every item, display switches | Yes. It is the one record of what exists and where the work stands |
| `walkthroughs/<id>.js` | One walkthrough each | Yes |
| `reviews/<id>.md` | Review notes and the owner's decision for one walkthrough | Yes |
| `sources/` | Material that facts and numbers come from | Add to it; do not rewrite what is there |
| `index.html` | The page that opens the collection. It loads only `engine/diorama.css` and `engine/diorama.js` | No. It is copied from the diorama-maker skill |
| `engine/` | The engine, in three layers, plus `VERSION` (its version). `diorama.js`, `diorama.css`: the shell (outline, search, progress, links). `stage-iso.js`, `stage-iso.css`: the isometric stage. `template-story.js`, `template-story.css`: the step story | No. To update, copy the skill's `assets/collection/engine/` over it, every file |

The shell loads the stage and template files when a walkthrough opens, so `index.html`
never needs an edit. The step story is the only template today; a walkthrough needs no
`template` field to use it.

## Rules

1. **One walkthrough at a time.** Finish, render and record one before starting the next.
2. **Question and numbers first.** Each walkthrough answers one question (its `question`
   field) with one thing that moves and one number. Before writing steps, list every value
   it relies on in its `sources` field: the claim, `data` or `assumption`, and where it
   comes from (a file in `sources/`, code you read, a document you can name). Never invent
   a number or a source; a value you cannot trace is an `assumption` and says so. Every
   number on the page is one of those values or follows from them by simple arithmetic.
3. **Status is honest and lives in `collection.js`:** `planned` → `drafted` → `reviewed` →
   `awaiting-approval` → `approved`. Set `drafted` only after reviewing the walkthrough on
   its sheet (rule 9) and stepping through it once. Set `reviewed` only when an independent
   review is recorded in `reviews/<id>.md` and its findings are resolved.
4. **Only the owner approves.** An agent never sets `approved`. If an approved walkthrough's
   facts or steps change, set it back to `drafted` and say so.
5. **Keep the item's title and summary in `collection.js` identical** to the walkthrough's own.
6. **Data files are one call with strict JSON inside:** `Diorama.walkthrough({ ... });`.
   Double quotes, no comments, no trailing commas.
7. **Reuse the example world** above so later walkthroughs start on familiar ground.
8. **If the stage cannot draw what a walkthrough needs,** do not fake it with a misleading
   picture. Note the gap under "Engine gaps" below and choose a different case or ask the owner.
9. **Review on the sheet after every change.** Open `index.html#/<id>/sheet`: it shows every
   step, and every option of a try step, as a still picture, under a Checks block. Clear
   every warning in Checks and fix or explain every note. On each tile look for objects or
   labels covering each other, a label covering the thing it names, text that is cut off or
   too small to read, and numbers that do not match the picture. Fix an overlap by changing
   a node's `x` or `y` or by shortening a text, never by deleting the label.

## How to write a walkthrough

The format, the wording budgets and the checklist are in the `diorama-maker` skill
(`references/walkthrough-schema.md`, `wording.md`, `checklist.md`). If that skill is not
installed, read an existing file in `walkthroughs/` as the model and keep to its shape:
one question, one concrete case, one scene that grows by at most two objects per step, with
neighbouring objects about 9 grid units apart (never under 6), two short paragraphs per step,
numbers that add up and are listed in `sources`, a recap with reusable rules.

## Resuming work

1. Read "About this collection" above and `collection.js`.
2. Pick up the first item that is not `approved`, in outline order, unless the owner names one.
3. For `drafted`: it needs an independent review. For `reviewed`: check that the findings in
   `reviews/<id>.md` are resolved, then set `awaiting-approval` and give the owner the
   reading link (`index.html#/<id>/1`) and the sheet link (`index.html#/<id>/sheet`).
4. Before finishing a session, make sure `collection.js` reflects reality.

## Engine gaps

<!-- Things a walkthrough needed that the stage could not draw. One line each, newest last. -->

- **Fixed interface text is English.** "Replay", "Pause", "Search", "Good to know", "Key idea",
  "Watch out", "Next up", "8 min", "beginner", "10 steps", "0 of 1 read", the keyboard hint and
  the theme button's title ("Theme: system. Switch to light.") come from the engine and cannot
  be renamed with `labels`. For Korean lay readers this needs an engine change in the
  diorama-maker skill.
- **A zone's name sits on its far (high `y`) edge** and needs about 8 clear grid units between
  that edge and the zone's nodes, so one zone is affordable and two crowd the stage.
