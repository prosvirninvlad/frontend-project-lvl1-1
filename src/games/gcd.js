import _ from 'lodash';
import playBrainGame from '../index.js';

const question = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  let result = 1;

  if (firstNum === 0 || secondNum === 0) {
    return result;
  }

  const firstNumAbs = Math.abs(firstNum);
  const secondNumAbs = Math.abs(secondNum);
  const greatestCommonDivisor = Math.min(firstNumAbs, secondNumAbs);

  for (let i = greatestCommonDivisor; i > 0; i -= 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      result = i;
      break;
    }
  }
  return result;
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
