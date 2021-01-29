import _ from 'lodash';
import playBrainGame from '../index.js';

const question = 'What is the result of the expression?';

const calculate = (firstNum, secondNum, operationIndex) => {
  const operations = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b];

  return operations[operationIndex](firstNum, secondNum);
};

const generateRound = () => {
  const round = {};
  const operationIndex = _.random(2);
  const operationTypes = ['+', '-', '*'];
  const firstNum = _.random(100);
  const secondNum = _.random(100);

  round.question = `${firstNum} ${operationTypes[operationIndex]} ${secondNum}`;
  round.correctAnswer = calculate(firstNum, secondNum, operationIndex).toString();

  return round;
};

export default () => playBrainGame(question, generateRound);
