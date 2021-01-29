import _ from 'lodash';
import playBrainGame from '../index.js';

const question = 'What number is missing in the progression?';

const generateArithmeticProgression = (progressionStart, progressionStep, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionStart + progressionStep * i);
  }

  return progression;
};

const generateRound = () => {
  const round = {};
  const progressionStart = _.random(50);
  const progressionStep = _.random(2, 10);
  const progressionLength = _.random(5, 10);
  const progression = generateArithmeticProgression(
    progressionStart,
    progressionStep,
    progressionLength,
  );
  const emptyPositionIndex = _.random(progression.length - 1);

  round.correctAnswer = progression[emptyPositionIndex].toString();
  progression[emptyPositionIndex] = '..';
  round.question = progression.join(' ');

  return round;
};

export default () => playBrainGame(question, generateRound);
