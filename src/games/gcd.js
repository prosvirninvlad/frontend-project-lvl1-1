import _ from 'lodash';
import playBrainGame from '../index.js';

const question = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  if (firstNum === 0 || secondNum === 0) {
    return 1;
  }

  let a = Math.max(Math.abs(firstNum), Math.abs(secondNum));
  let b = Math.min(Math.abs(firstNum), Math.abs(secondNum));
  let remainder = a % b;

  while (remainder !== 0) {
    a = b;
    b = remainder;
    remainder = a % b;
  }

  return b;
};

const generateRound = () => {
  const round = {};
  const firstNum = _.random(-100, 100);
  const secondNum = _.random(-100, 100);

  round.question = `${firstNum} ${secondNum}`;
  round.correctAnswer = getGreatestCommonDivisor(firstNum, secondNum).toString();

  return round;
};

export default () => playBrainGame(question, generateRound);
