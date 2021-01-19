import _ from 'lodash';
import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

const isEven = (num) => !(num % 2);

const playRound = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const number = _.random(100);
  const numberIsEven = isEven(number);
  const correctAnswer = numberIsEven ? 'yes' : 'no';
  let result;

  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    result = true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    result = false;
  }

  return result;
};

export default () => {
  const userName = getName() || 'Incognito';
  let gameWin = true;

  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < 3; i += 1) {
    const roundWin = playRound();

    if (!roundWin) {
      console.log(`Let's try again, ${userName}!`);
      gameWin = false;
      break;
    } else {
      console.log('Correct!');
    }
  }

  if (gameWin) {
    console.log(`Congratulations, ${userName}!`);
  }
};
