#!/usr/bin/env node

import _ from 'lodash';
import playBrainGame from '../src/index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const round = {};
  const number = _.random(100);

  round.question = number;
  round.correctAnswer = isPrime(number) ? 'yes' : 'no';

  return round;
};

playBrainGame(question, generateRound);
