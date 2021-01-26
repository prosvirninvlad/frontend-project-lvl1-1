import _ from 'lodash';
import playBrainGame from '../index.js';

const question = 'What is the result of the expression?';

const getOperation = () => {
  const operations = {
    0: {
      sign: '+',
      calculate: (a, b) => a + b,
    },
    1: {
      sign: '-',
      calculate: (a, b) => a - b,
    },
    2: {
      sign: '*',
      calculate: (a, b) => a * b,
    },
  };

  return operations[_.random(2)];
};

const generateRound = () => {
  const round = {};
  const operation = getOperation();
  const firstNum = _.random(100);
  const secondNum = _.random(100);

  round.question = `${firstNum} ${operation.sign} ${secondNum}`;
  round.correctAnswer = operation.calculate(firstNum, secondNum).toString();

  return round;
};

export default () => playBrainGame(question, generateRound);
