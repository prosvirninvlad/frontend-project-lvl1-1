#!/usr/bin/env node

import _ from 'lodash';
import playBrainGame from '../src/index.js';

const question = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  if (firstNum === 0 || secondNum === 0) {
    return 1;
  }

  const firstNumAbs = Math.abs(firstNum);
  const secondNumAbs = Math.abs(secondNum);
  let greatestCommonDivisor = Math.min(firstNumAbs, secondNumAbs);

  for (; greatestCommonDivisor > 0; greatestCommonDivisor -= 1) {
    if (firstNum % greatestCommonDivisor === 0 && secondNum % greatestCommonDivisor === 0) {
      break;
    }
  }

  return greatestCommonDivisor;
};

const generateRound = () => {
  const round = {};
  const firstNum = _.random(-100, 100);
  const secondNum = _.random(-100, 100);

  round.question = `${firstNum} ${secondNum}`;
  round.correctAnswer = getGreatestCommonDivisor(firstNum, secondNum).toString();

  return round;
};

playBrainGame(question, generateRound);
