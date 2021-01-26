#!/usr/bin/env node

import _ from 'lodash';
import playBrainGame from '../src/index.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => !(num % 2);

const generateRound = () => {
  const round = {};

  round.question = _.random(100);
  round.correctAnswer = isEven(round.question) ? 'yes' : 'no';

  return round;
};

playBrainGame(question, generateRound);
