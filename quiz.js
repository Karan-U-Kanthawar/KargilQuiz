const answers = ['A', 'B', 'C', 'A', 'D'];
const quizMain = document.querySelector('.quizMain');

quizMain.addEventListener('submit', (event) => {
  event.preventDefault();
  const userAns = [
    quizMain.q1.value,
    quizMain.q2.value,
    quizMain.q3.value,
    quizMain.q4.value,
    quizMain.q5.value,
  ];

  let score = 0;
  userAns.forEach((eachUserAns, index) => {
    if (eachUserAns === answers[index]) {
      score += 1;
    }
  });

  // goto the top of the page
  scrollTo(0, 0);

  // displaying the score
  const displayScore = document.getElementById('finalAns');
  let timeOut = 0;
  const timer = setInterval(() => {
    timeOut += 1;
    displayScore.innerHTML = `${
      score * 20
    }%&nbsp(You got &nbsp<strong>${score}</strong> &nbsp out of 5 correct.)`;
    if (timeOut === score) {
      clearInterval(timer);
    }
  }, 10);

  // it's hidden until class is added
  displayScore.classList.add('show');

  const question1Children = document.querySelector('.question1').childNodes;
  console.log(question1Children);
  question1Children[7].classList.add('correct');

  const question2Children = document.querySelector('.question2').childNodes;
  console.log(question2Children);
  question2Children[9].classList.add('correct');

  const question3Children = document.querySelector('.question3').childNodes;
  console.log(question3Children);
  question3Children[11].classList.add('correct');

  const question4Children = document.querySelector('.question4').childNodes;
  console.log(question4Children);
  question4Children[7].classList.add('correct');

  const question5Children = document.querySelector('.question5').childNodes;
  console.log(question5Children);
  question5Children[13].classList.add('correct');
});