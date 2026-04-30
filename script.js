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
  const shuffled = [...questionsPool].sort(() => 0.5 - Math.random());
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

if (score <= 5) {
  result = "Go all out today! Hit the gym or explore the city.";
} else if (score <= 8) {
  result = "Be active today. Try going out or doing something energetic.";
} else if (score <= 11) {
  result = "A productive day fits you. Study or work on something meaningful.";
} else if (score <= 14) {
  result = "Keep a good balance today. Mix work and relaxation.";
} else if (score <= 17) {
  result = "Take it slow. Maybe enjoy a quiet café or a light activity.";
} else if (score <= 20) {
  result = "You should relax today. Watch a movie or rest at home.";
} else {
  result = "Full recharge mode. Take a complete break and recover.";
}

  document.getElementById("result").innerText = result;
}
