# Ledger

Every fact and value the walkthroughs show, where it comes from, and whether it is data or
an assumption. Each walkthrough takes its `sources` rows from here. Add rows; do not rewrite
existing ones without re-checking the source.

Sources were read on 2026-11-22. Links are listed in `README.md` in this folder.

## Facts (data)

| # | Claim | Source | Used in |
|---|---|---|---|
| F1 | An LLM is a large language model trained on vast amounts of text that generates text. | Anthropic glossary, "LLM" | llm |
| F2 | In pretraining, a language model learns to predict the next word from the text before it. | Anthropic glossary, "Pretraining" | llm |
| F3 | A model's answer is produced incrementally, piece by piece (tokens). | OpenAI, "Unrolling the Codex agent loop", section "The agent loop" | llm |
| F4 | Without tools, the model can only respond with text. With tools it can act: read files, edit them, run commands. | Claude Code docs, "How Claude Code works", section "Tools" | llm, harness |
| F5 | Claude is built on an LLM (Anthropic). Codex CLI uses OpenAI's GPT models as its LLM. | Anthropic glossary, "LLM"; OpenAI, "Unrolling the Codex agent loop" | llm, harnesses |
| F6 | Codex CLI reaches the model by sending requests over the network to the company's servers; the model does not run inside the laptop program. | OpenAI, "Unrolling the Codex agent loop", section "Model inference" | harness |
| F7 | The model either writes a final answer or asks for a tool call; the harness carries out the tool call, adds the result to the conversation and asks the model again. This repeats until the model answers without a tool call. | OpenAI, "Unrolling the Codex agent loop", section "The agent loop" | harness, agent |
| F8 | Claude Code is "the layer around the model that provides the tools and manages the context the model sees"; that layer is the agentic harness. | Claude Code docs, "How Claude Code works", section "The agentic loop" | harness |
| F9 | OpenAI calls the Codex harness the part that "provides the core agent loop and execution logic". | OpenAI, "Unrolling the Codex agent loop", introduction | harness, harnesses |
| F10 | Agents are "LLMs using tools based on environmental feedback in a loop". | Anthropic, "Building effective agents", section "Agents" | agent |
| F11 | Claude Code's loop: gather context, take action, verify results, repeated until the task is complete; the user can interrupt at any point. | Claude Code docs, "How Claude Code works", section "The agentic loop" | agent |
| F12 | Example sequence for "fix the failing tests": run tests, read output, search files, read files, edit files, run tests again (6 tool uses). | Claude Code docs, "How Claude Code works", section "Tools" | agent |
| F13 | Claude Code permission modes: Manual asks before file edits and shell commands; Accept edits edits files without asking but asks for other commands; Auto has a classifier block risky actions; Plan proposes without editing. | Claude Code docs, "How Claude Code works", section "Control what Claude can do" | permission |
| F14 | Claude Code snapshots a file before editing it, so file edits can be undone; actions on remote systems cannot be undone this way. | Claude Code docs, "How Claude Code works", section "Undo changes with checkpoints" | permission |
| F15 | Codex lets the user choose when it may edit files or run commands without asking (`/permissions`) and runs commands in a sandbox. | Codex CLI docs, "Set the boundaries for each run"; OpenAI, "Unrolling the Codex agent loop" | permission |
| F16 | Codex CLI is made by OpenAI, Claude Code by Anthropic; omp (oh-my-pi) is an open-source coding agent by Stencil Labs, a fork of Pi. | Codex CLI docs; Claude Code docs; omp README | harnesses |
| F17 | omp states it works with 60+ model providers and ships 31 built-in tools. | omp README (the project's own claim) | harnesses |
| F18 | In a benchmark by omp's author (180 tasks, 3 runs), changing only the edit tool raised one model (Grok Code Fast 1) from 6.7% to 68.3% success. | Can Bölük, "The harness problem", 2026-02-12 (interested party: the author builds omp) | harnesses |
| F19 | With each request the harness sends the model a list of the tools it may ask for; Codex's list includes a tool that runs commands on the machine. | OpenAI, "Unrolling the Codex agent loop", section "Building the initial prompt" | harness |
| F20 | Run in a folder, Claude Code can reach the files in it and any command the user could run. | Claude Code docs, "How Claude Code works", section "What Claude can access" | harness |
| F21 | Codex has two layers: a sandbox (what it technically can touch) and an approval policy (when it must stop and ask before acting). Its Auto preset reads, edits and runs commands in the workspace without asking and asks before editing outside it or using the network; `--yolo` means no sandbox and no approvals. | Codex docs, "Agent approvals & security", sections "Sandbox and approvals" and "Common sandbox and approval combinations" | permission |
| F22 | Claude Code's Manual mode asks before most actions that edit files or run commands; file reads in the working folder need no approval; `bypassPermissions` runs everything without asking; auto mode has a second model review actions "instead of you" and is described as reducing prompt fatigue. | Claude Code docs, "Choose a permission mode", intro and "Available modes" | permission |
| F23 | omp's built-in providers include `anthropic` and `openai` (so it can run Claude and GPT models) and local engines such as `ollama`. | omp docs, "Providers", "Current provider matrix" | harnesses |
| F24 | In the same benchmark the new edit tool beat the patch tool for 14 of 16 models; the weakest models gained the most; patch is the format Codex uses. Tasks were mechanical bug fixes in files from the React codebase. | Can Bölük, "The harness problem" (interested party) | harnesses |
| F25 | The post's reading of the result: the model often understands the task and fails at expressing the change through the tool. | Can Bölük, "The harness problem", section "So What?" (the author's interpretation) | harnesses |
| F26 | ChatGPT includes Chat (conversation) and Codex (software development); Codex is a view in the ChatGPT desktop app, runs GPT models, and "can work with local folders, repositories, terminals, and developer tools". | OpenAI Help Center, "ChatGPT Work and Codex" | llm, harness, agent, harnesses |

## Example world (assumptions)

These are invented for the collection and are labelled `assumption` wherever they appear.

| # | Value | Note |
|---|---|---|
| A1 | Jimin (지민) runs a small flower shop and has a laptop. | Invented |
| A2 | The folder "영수증" holds 12 receipt photos, unsorted. | Invented round number |
| A3 | The 12 receipts are: March 5, April 4, May 3 (5 + 4 + 3 = 12). | Invented; adds up in the head |
| A4 | File names carry the date, e.g. `0312_화분.jpg`. | Invented |
| A5 | The request is one sentence: "영수증 폴더를 월별로 정리해 줘." | Invented |
| A6 | A text-only answer arrives in a few seconds and lists 5 steps. | Illustrative; real answers vary |
| A7 | Given the 12 file names as text, the LLM sorts all 12 correctly by month. | Illustrative; a real model's answer can differ each time |
| A8 | A chat app does not produce the answer itself; it sends the text to a model on the AI company's computers. | Described by OpenAI for Codex CLI (F6); not separately checked for chat apps in general |

## Example world, later walkthroughs (assumptions)

| # | Value | Note |
|---|---|---|
| A9 | 지민's harness has two tools in `harness`: look into a folder, move a file. Real harnesses mostly run commands (`ls`, `mv`) through one command tool. | Simplified names |
| A10 | The whole job takes 6 round trips: look 1, make 3 month folders 1, move March 5 / April 4 / May 3 (one round trip each) 3, look again 1. 2 looking + 4 changing = 6. | Invented; a real run takes a different number each time |
| A11 | In `permission` the request also says to delete duplicates. The LLM takes 3 files for duplicates; 2 are, 1 is a different receipt from the same day. 12 − 2 = 10 files remain when 지민 allows 2; 12 − 3 = 9 when nobody asks. | Invented |
| A12 | That job is 7 notes: look 1, make folders 1, move 3, delete 1, look again 1. Notes that change something: 1 + 3 + 1 = 5. | Follows from A10 plus one delete |
| A13 | 지민's harness has three permission settings: ask before every change, ask before deleting only, never ask. | Invented settings modelled on F21 and F22 |

## Not yet checked

- omp's own permission behaviour (not used in any walkthrough).
- Whether Claude Code or Codex can be pointed at other vendors' models beyond what F5 and
  the Codex post's `--oss` remark say; the walkthroughs only say which models each was built around.
