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
    }%&nbsp(You got &nbsp ${score} &nbsp out of 5 correct.)`;
    if (timeOut === score) {
      clearInterval(timer);
    }
  }, 10);

  // it's hidden until class is added
  displayScore.classList.add('show');

  const question1Children = document.querySelector('.question1').childNodes;
  question1Children[7].classList.add('correct');

  const question2Children = document.querySelector('.question2').childNodes;
  question2Children[9].classList.add('correct');

  const question3Children = document.querySelector('.question3').childNodes;
   question3Children[11].classList.add('correct');

  const question4Children = document.querySelector('.question4').childNodes;
  question4Children[7].classList.add('correct');

  const question5Children = document.querySelector('.question5').childNodes;
  question5Children[13].classList.add('correct');
});
