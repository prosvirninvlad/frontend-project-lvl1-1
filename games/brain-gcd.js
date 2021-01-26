#!/usr/bin/env node

import _ from 'lodash';
import playBrainGame from '../src/index.js';

const question = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  if (!firstNum || !secondNum) {
    return 1;
  }
  let gcd = Math.min(Math.abs(firstNum), Math.abs(secondNum));

  for (; gcd > 0; gcd -= 1) {
    if (!(firstNum % gcd) && !(secondNum % gcd)) {
      break;
    }
  }

  return gcd;
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
