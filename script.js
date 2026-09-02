const questions = [
  {
    name: 'נפוליאון בונפרטה',
    image: 'images/napoleon.jpg',
    source: 'Wikimedia Commons — ז׳אק־לואי דויד, נפוליאון בחדר עבודתו',
    category: 'מנהיגים ומדינאים',
    difficulty: 'בינוני',
    options: ['נפוליאון בונפרטה','לואי ה־14','הדוכס מוולינגטון','פרידריך הגדול'],
    explanation: 'זהו נפוליאון בונפרטה. הדיוקן מציג אותו במדי קצין בחדר עבודתו, והוא אחד הייצוגים המוכרים ביותר שלו.'
  },
  {
    name: 'סולימאן המפואר',
    image: 'images/suleiman.jpg',
    source: 'Wikimedia Commons — מלכיור לורק, דיוקן סולימאן הראשון, 1562',
    category: 'מלוכה ואימפריות',
    difficulty: 'קשה',
    options: ['מהמט השני','סולימאן המפואר','סלים הראשון','מוראד השלישי'],
    explanation: 'זהו סולימאן הראשון, המכונה סולימאן המפואר. התחריט של מלכיור לורק מן המאה ה־16 נחשב לאחד הדיוקנאות ההיסטוריים החשובים שלו.'
  },
  {
    name: 'תיאודור הרצל',
    image: 'images/herzl.jpg',
    source: 'Wikimedia Commons — דיוקן תיאודור הרצל, נחלת הכלל',
    category: 'מנהיגים ומדינאים',
    difficulty: 'בינוני',
    options: ['חיים ויצמן','מקס נורדאו','תיאודור הרצל','נחום סוקולוב'],
    explanation: 'זהו תיאודור הרצל. הזקן הארוך, השיער והצילום מן הצד הפכו למראה מזוהה מאוד עם חוזה המדינה.'
  },
  {
    name: 'אברהם לינקולן',
    image: 'images/lincoln.jpg',
    source: 'Wikimedia Commons — תצלום עמידה של אברהם לינקולן, 1863',
    category: 'מנהיגים ומדינאים',
    difficulty: 'קל',
    options: ['אברהם לינקולן','יוליסס גרנט','אנדרו ג׳ונסון','ג׳פרסון דייוויס'],
    explanation: 'זהו אברהם לינקולן, הנשיא ה־16 של ארצות הברית, בתצלום היסטורי משנת 1863.'
  },
  {
    name: 'ג׳ורג׳ וושינגטון',
    image: 'images/washington.jpg',
    source: 'Wikimedia Commons — גילברט סטיוארט, ג׳ורג׳ וושינגטון, 1796',
    category: 'מנהיגים ומדינאים',
    difficulty: 'קל',
    options: ['ג׳ורג׳ וושינגטון','תומאס ג׳פרסון','ג׳ון אדמס','ג׳יימס מדיסון'],
    explanation: 'זהו ג׳ורג׳ וושינגטון, הנשיא הראשון של ארצות הברית. הדיוקן של גילברט סטיוארט הוא מן הדימויים המזוהים ביותר עמו.'
  },
  {
    name: 'המלכה ויקטוריה',
    image: 'images/victoria.jpg',
    source: 'Wikimedia Commons — רוג׳ר פנטון, דיוקן המלכה ויקטוריה, 1854',
    category: 'מלוכה ואימפריות',
    difficulty: 'בינוני',
    options: ['המלכה ויקטוריה','המלכה אן','קתרינה הגדולה','מריה תרזה'],
    explanation: 'זוהי המלכה ויקטוריה, ששלטה בבריטניה בשנים 1837–1901 ונתנה את שמה לתקופה הוויקטוריאנית.'
  },
  {
    name: 'מארי קירי',
    image: 'images/curie.jpg',
    source: 'Wikimedia Commons — דיוקן מארי קירי, בערך 1921',
    category: 'מדע והגות',
    difficulty: 'קל',
    options: ['מארי קירי','עדה לאבלייס','רוזלינד פרנקלין','ליזה מייטנר'],
    explanation: 'זוהי מארי קירי, מחלוצות חקר הרדיואקטיביות והאדם הראשון שזכה בשני פרסי נובל בשני תחומים מדעיים שונים.'
  },
  {
    name: 'אייזק ניוטון',
    image: 'images/newton.jpg',
    source: 'Wikimedia Commons — גודפרי נלר, דיוקן אייזק ניוטון',
    category: 'מדע והגות',
    difficulty: 'בינוני',
    options: ['אייזק ניוטון','גלילאו גליליי','יוהנס קפלר','רנה דקארט'],
    explanation: 'זהו אייזק ניוטון, מן המדענים המשפיעים בתולדות הפיזיקה והמתמטיקה ומנסח חוקי התנועה והכבידה הקלאסית.'
  },
  {
    name: 'אליזבת הראשונה',
    image: 'images/elizabeth1.jpg',
    source: 'Wikimedia Commons — דיוקן ההכתרה של אליזבת הראשונה, העתק מראשית המאה ה־17',
    category: 'מלוכה ואימפריות',
    difficulty: 'בינוני',
    options: ['אליזבת הראשונה','מרי הראשונה','אן בולין','מרי מלכת הסקוטים'],
    explanation: 'זוהי אליזבת הראשונה, מלכת אנגליה ואירלנד בשנים 1558–1603, מן הדמויות המרכזיות של התקופה האליזבתנית.'
  },
  {
    name: 'יוליוס קיסר',
    image: 'images/caesar.jpg',
    source: 'Wikimedia Commons — פסל שיש של יוליוס קיסר מן המאה הראשונה לספירה',
    category: 'העת העתיקה',
    difficulty: 'קשה',
    options: ['יוליוס קיסר','אוגוסטוס','מרקוס אורליוס','קונסטנטינוס הגדול'],
    explanation: 'זהו יוליוס קיסר, המצביא והמדינאי הרומי שמילא תפקיד מכריע במעבר מרפובליקה רומית לשלטון הקיסרי שבא אחריה.'
  }
];

let activeQuestions = [];
let index = 0;
let score = 0;
let answered = false;
let audioContext = null;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getAudioContext() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) audioContext = new AudioCtx();
  }
  return audioContext;
}

function playTone(frequency, startTime, duration, type = 'sine', volume = 0.12) {
  const ctx = getAudioContext();
  if (!ctx) return;
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.02);
}

function playCorrectSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  if (ctx.state === 'suspended') ctx.resume();
  const now = ctx.currentTime + 0.02;
  playTone(523.25, now, 0.16, 'triangle', 0.11);
  playTone(659.25, now + 0.12, 0.16, 'triangle', 0.11);
  playTone(783.99, now + 0.24, 0.30, 'triangle', 0.13);
}

function playWrongSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  if (ctx.state === 'suspended') ctx.resume();
  const now = ctx.currentTime + 0.02;
  playTone(220, now, 0.22, 'sawtooth', 0.07);
  playTone(164.81, now + 0.16, 0.34, 'sawtooth', 0.06);
}

const setup = document.getElementById('setup');
const game = document.getElementById('game');
const result = document.getElementById('result');
const categorySelect = document.getElementById('categorySelect');
const difficultySelect = document.getElementById('difficultySelect');
const setupMessage = document.getElementById('setupMessage');
const startGameButton = document.getElementById('startGame');
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
const categoryTag = document.getElementById('categoryTag');
const difficultyTag = document.getElementById('difficultyTag');

function startGame() {
  const selectedCategory = categorySelect.value;
  const selectedDifficulty = difficultySelect.value;

  const filtered = questions.filter(q =>
    (selectedCategory === 'all' || q.category === selectedCategory) &&
    (selectedDifficulty === 'all' || q.difficulty === selectedDifficulty)
  );

  if (!filtered.length) {
    setupMessage.textContent = 'אין כרגע שאלות בשילוב הזה. נסו קטגוריה או רמת קושי אחרת.';
    return;
  }

  setupMessage.textContent = '';
  activeQuestions = shuffle(filtered);
  index = 0;
  score = 0;
  setup.classList.add('hidden');
  result.classList.add('hidden');
  game.classList.remove('hidden');
  totalQuestions.textContent = activeQuestions.length;
  finalTotal.textContent = activeQuestions.length;
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  next.disabled = true;
  feedback.className = 'feedback';
  feedback.textContent = '';

  const q = activeQuestions[index];
  questionNumber.textContent = index + 1;
  scoreNode.textContent = score;
  categoryTag.textContent = q.category;
  difficultyTag.textContent = `רמה: ${q.difficulty}`;
  portrait.src = q.image;
  portrait.alt = `דיוקן היסטורי לזיהוי — שאלה ${index + 1}`;
  caption.textContent = '';
  caption.hidden = true;
  answers.innerHTML = '';

  shuffle(q.options).forEach(option => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = option;
    button.addEventListener('click', () => chooseAnswer(button, option));
    answers.appendChild(button);
  });

  next.textContent = index === activeQuestions.length - 1 ? 'לתוצאה' : 'לשאלה הבאה';
}

function chooseAnswer(clickedButton, option) {
  if (answered) return;
  answered = true;
  const q = activeQuestions[index];

  [...answers.children].forEach(button => {
    button.disabled = true;
    if (button.textContent === q.name) button.classList.add('correct');
  });

  if (option === q.name) {
    score++;
    scoreNode.textContent = score;
    playCorrectSound();
    feedback.innerHTML = `<strong>נכון! ✅</strong><br>${q.explanation}`;
  } else {
    clickedButton.classList.add('wrong');
    playWrongSound();
    feedback.innerHTML = `<strong>לא הפעם ❌</strong><br>התשובה הנכונה היא <b>${q.name}</b>.<br>${q.explanation}`;
  }

  caption.textContent = q.source;
  caption.hidden = false;
  feedback.classList.add('show');
  next.disabled = false;
}

function showResult() {
  game.classList.add('hidden');
  result.classList.remove('hidden');
  finalScore.textContent = score;
}

function backToSetup() {
  game.classList.add('hidden');
  result.classList.add('hidden');
  setup.classList.remove('hidden');
  setupMessage.textContent = '';
}

next.addEventListener('click', () => {
  if (!answered) return;
  if (index < activeQuestions.length - 1) {
    index++;
    renderQuestion();
  } else {
    showResult();
  }
});

startGameButton.addEventListener('click', startGame);
restart.addEventListener('click', backToSetup);
playAgain.addEventListener('click', startGame);

portrait.addEventListener('error', () => {
  caption.textContent = 'לא ניתן לטעון את התמונה כרגע. נסה לרענן את הדף.';
  caption.hidden = false;
});
