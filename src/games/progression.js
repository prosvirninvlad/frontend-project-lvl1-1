import _ from 'lodash';
import playBrainGame from '../index.js';

const question = 'What number is missing in the progression?';

const generateArithmeticProgression = () => {
  const progression = [];
  const progressionStart = _.random(50);
  const progressionStep = _.random(2, 10);
  const progressionLength = _.random(5, 10);

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionStart + progressionStep * i);
  }

  return progression;
};

const generateRound = () => {
  const round = {};
  const progression = generateArithmeticProgression();
  const emptyPositionIndex = _.random(progression.length - 1);

  round.correctAnswer = progression[emptyPositionIndex].toString();
  progression[emptyPositionIndex] = '..';
  round.question = progression.join(' ');

  return round;
};

export default () => playBrainGame(question, generateRound);
