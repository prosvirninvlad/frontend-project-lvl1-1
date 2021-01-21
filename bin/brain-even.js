#!/usr/bin/env node

import _ from 'lodash';
import playBrainGame from '../src/index.js';

const isEven = (num) => !(num % 2);

const question = 'Answer "yes" if the number is even, otherwise answer "no".';
const variants = [];
const correctAnswers = [];

for (let i = 0; i < 3; i += 1) {
  const number = _.random(100);

  variants.push(number);
  correctAnswers.push(isEven(number) ? 'yes' : 'no');
}

playBrainGame(variants, question, correctAnswers);
