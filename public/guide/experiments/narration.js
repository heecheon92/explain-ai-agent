/*
 * LOCAL EXPERIMENT: the short explanation of each step, shown on the stage when the reader picks
 * "물체 옆 말풍선" or "자막" (see "Experiment" in engine/template-story.js).
 * One entry per step, in step order: "say" is one or two short sentences, "at" is the id of the
 * object the step is about. A walkthrough or step missing here falls back to its own text.
 * The approved walkthrough files are not changed by this experiment.
 */
window.DioramaNarration = {
  "llm": [
    { "at": "folder", "say": "영수증 사진 12개가 한 폴더에 섞여 있어요. 지민은 정리를 AI에게 맡겨 보려고 해요." },
    { "at": "app", "say": "지민이 채팅 앱에 한 줄을 써요. “영수증 폴더를 월별로 정리해 줘.”" },
    { "at": "llm", "say": "앱은 글을 전하기만 해요. 답을 쓰는 것은 노트북 밖에 있는 LLM이에요." },
    { "at": "llm", "say": "LLM은 부탁 뒤에 올 법한 말을 한 조각씩 이어 써요. 내놓는 것은 글이에요." },
    { "at": "app", "say": "답장은 왔는데 폴더는 그대로예요. AI가 옮긴 파일은 0개예요." },
    { "at": "folder", "say": "LLM에서 폴더로 가는 길이 없어요. 그래서 들여다볼 수도, 옮길 수도 없어요." },
    { "at": "app", "say": "폴더 안에 파일 이름을 몇 개 알려 줘 본다면 어떨까요? 몇 개를 알려 줘 볼까요?" },
    { "at": "llm", "say": "이름 12개를 받으니 날짜대로 잘 나눠 적어요. 없는 것은 머리가 아니라 눈과 손이에요." },
    { "at": "jimin", "say": "결국 지민이 사진을 하나씩, 12번 옮겨요. LLM은 조언만 했어요." },
    { "at": "llm", "say": "LLM은 글을 쓰는 두뇌예요. 일이 되려면 대신 보고 옮겨 줄 무언가가 더 있어야 해요." }
  ]
};
