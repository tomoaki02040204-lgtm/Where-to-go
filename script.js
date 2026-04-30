const questionsPool = [
  "体を動かしたい？",
  "新しいことを学びたい？",
  "人と話したい？",
  "一人で集中したい？",
  "お金を稼ぎたい？",
  "リラックスしたい？",
  "外出したい？",
  "クリエイティブなことしたい？"
];

const options = ["強くそう思う", "そう思う", "どちらでもない", "あまり思わない", "思わない"];

let selectedQuestions = [];

// ランダム5問生成
function generateQuestions() {
  const shuffled = questionsPool.sort(() => 0.5 - Math.random());
  selectedQuestions = shuffled.slice(0, 5);

  const form = document.getElementById("quizForm");
  form.innerHTML = "";

  selectedQuestions.forEach((q, i) => {
    let html = `<div class="question"><p>${q}</p>`;

    options.forEach((opt, j) => {
      html += `
        <label>
          <input type="radio" name="q${i}" value="${j}">
          ${opt}
        </label><br>
      `;
    });

    html += "</div>";
    form.innerHTML += html;
  });
}

generateQuestions();

// 簡易分析
function analyze() {
  let score = 0;

  for (let i = 0; i < 5; i++) {
    const val = document.querySelector(`input[name="q${i}"]:checked`);
    if (!val) {
      alert("すべて回答してください");
      return;
    }
    score += parseInt(val.value);
  }

  let result = "";

  if (score < 8) {
    result = "今日はアクティブに動こう！";
  } else if (score < 15) {
    result = "バランス良く過ごそう";
  } else {
    result = "ゆっくり休もう";
  }

  document.getElementById("result").innerText = result;
}
