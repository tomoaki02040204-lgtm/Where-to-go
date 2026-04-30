const questionsPool = [
  "Do you want to be physically active?",
  "Do you want to learn something new?",
  "Do you want to talk to people?",
  "Do you want to focus alone?",
  "Do you want to make money?",
  "Do you want to relax?",
  "Do you want to go out?",
  "Do you want to do something creative?"
];

const options = [
  "Strongly agree",
  "Agree",
  "Neutral",
  "Disagree",
  "Strongly disagree"
];

let selectedQuestions = [];

// Generate 5 random questions
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

// Simple analysis
function analyze() {
  let score = 0;

  for (let i = 0; i < 5; i++) {
    const val = document.querySelector(`input[name="q${i}"]:checked`);
    if (!val) {
      alert("Please answer all questions.");
      return;
    }
    score += parseInt(val.value);
  }

  let result = "";

  if (score < 8) {
    result = "Go Shibuya today!";
  } else if (score < 15) {
    result = "Have a balanced day in Shibuya.";
  } else {
    result = "Take it easy and go to Shibuya today.";
  }

  document.getElementById("result").innerText = result;
