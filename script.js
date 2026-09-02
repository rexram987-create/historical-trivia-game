const questions = [
  {
    name: 'נפוליאון בונפרטה',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Jacques-Louis%20David%20-%20The%20Emperor%20Napoleon%20in%20His%20Study%20at%20the%20Tuileries%20-%20Google%20Art%20Project%202.jpg?width=900',
    source: 'Wikimedia Commons — ז׳אק־לואי דויד, נפוליאון בחדר עבודתו',
    options: ['נפוליאון בונפרטה','לואי ה־14','הדוכס מוולינגטון','פרידריך הגדול'],
    explanation: 'זהו נפוליאון בונפרטה. הדיוקן מציג אותו במדי קצין בחדר עבודתו, והוא אחד הייצוגים המוכרים ביותר שלו.'
  },
  {
    name: 'סולימאן המפואר',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Melchior%20Lorck%20Sultan%20Suleiman.jpg?width=900',
    source: 'Wikimedia Commons — מלכיור לורק, דיוקן סולימאן הראשון, 1562',
    options: ['מהמט השני','סולימאן המפואר','סלים הראשון','מוראד השלישי'],
    explanation: 'זהו סולימאן הראשון, המכונה סולימאן המפואר. התחריט של מלכיור לורק מן המאה ה־16 נחשב לאחד הדיוקנאות ההיסטוריים החשובים שלו.'
  },
  {
    name: 'תיאודור הרצל',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Theodor_Herzl_portrait.jpg',
    source: 'Wikimedia Commons — דיוקן תיאודור הרצל, נחלת הכלל',
    options: ['חיים ויצמן','מקס נורדאו','תיאודור הרצל','נחום סוקולוב'],
    explanation: 'זהו תיאודור הרצל. הזקן הארוך, השיער והצילום מן הצד הפכו למראה מזוהה מאוד עם חוזה המדינה.'
  },
  {
    name: 'אברהם לינקולן',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Abraham_Lincoln_standing_portrait_1863.jpg',
    source: 'Wikimedia Commons — תצלום עמידה של אברהם לינקולן, 1863',
    options: ['אברהם לינקולן','יוליסס גרנט','אנדרו ג׳ונסון','ג׳פרסון דייוויס'],
    explanation: 'זהו אברהם לינקולן, הנשיא ה־16 של ארצות הברית, בתצלום היסטורי משנת 1863.'
  }
];

let index = 0;
let score = 0;
let answered = false;

const game = document.getElementById('game');
const result = document.getElementById('result');
const portrait = document.getElementById('portrait');
const caption = document.getElementById('sourceCaption');
const answers = document.getElementById('answers');
const feedback = document.getElementById('feedback');
const next = document.getElementById('next');
const restart = document.getElementById('restart');
const playAgain = document.getElementById('playAgain');
const questionNumber = document.getElementById('questionNumber');
const totalQuestions = document.getElementById('totalQuestions');
const scoreNode = document.getElementById('score');
const finalScore = document.getElementById('finalScore');
const finalTotal = document.getElementById('finalTotal');

totalQuestions.textContent = questions.length;
finalTotal.textContent = questions.length;

function renderQuestion() {
  answered = false;
  next.disabled = true;
  feedback.className = 'feedback';
  feedback.textContent = '';

  const q = questions[index];
  questionNumber.textContent = index + 1;
  scoreNode.textContent = score;
  portrait.src = q.image;
  portrait.alt = `דיוקן לזיהוי — שאלה ${index + 1}`;
  caption.textContent = q.source;
  answers.innerHTML = '';

  q.options.forEach(option => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = option;
    button.addEventListener('click', () => chooseAnswer(button, option));
    answers.appendChild(button);
  });

  next.textContent = index === questions.length - 1 ? 'לתוצאה' : 'לשאלה הבאה';
}

function chooseAnswer(clickedButton, option) {
  if (answered) return;
  answered = true;
  const q = questions[index];

  [...answers.children].forEach(button => {
    button.disabled = true;
    if (button.textContent === q.name) button.classList.add('correct');
  });

  if (option === q.name) {
    score++;
    scoreNode.textContent = score;
    feedback.innerHTML = `<strong>נכון! ✅</strong><br>${q.explanation}`;
  } else {
    clickedButton.classList.add('wrong');
    feedback.innerHTML = `<strong>לא הפעם ❌</strong><br>התשובה הנכונה היא <b>${q.name}</b>.<br>${q.explanation}`;
  }

  feedback.classList.add('show');
  next.disabled = false;
}

function showResult() {
  game.classList.add('hidden');
  result.classList.remove('hidden');
  finalScore.textContent = score;
}

function resetGame() {
  index = 0;
  score = 0;
  game.classList.remove('hidden');
  result.classList.add('hidden');
  renderQuestion();
}

next.addEventListener('click', () => {
  if (!answered) return;
  if (index < questions.length - 1) {
    index++;
    renderQuestion();
  } else {
    showResult();
  }
});

restart.addEventListener('click', resetGame);
playAgain.addEventListener('click', resetGame);

portrait.addEventListener('error', () => {
  caption.textContent = 'לא ניתן לטעון את התמונה כרגע. נסה לרענן את הדף.';
});

renderQuestion();
