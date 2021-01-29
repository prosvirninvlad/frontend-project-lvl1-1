import createStdio from './stdio/index.js';

export default async (question, generateRound) => {
  const stdio = createStdio();
  try {
    stdio.print('Welcome to the Brain Games!');

    const userName = await stdio.query('May I have your name? ');
    const numberOfRounds = 3;

    stdio.print(`Hello, ${userName}!`);
    stdio.print(question);

    for (let i = 0; i < numberOfRounds; i += 1) {
      const round = generateRound();

      stdio.print(`Question: ${round.question}`);

      const answer = await stdio.query('Your answer: ');

      if (answer !== round.correctAnswer) {
        stdio.print(`'${answer}' is wrong answer ;(. Correct answer was '${round.correctAnswer}'.`);
        stdio.print(`Let's try again, ${userName}!`);

        return;
      }
      stdio.print('Correct!');
    }

    stdio.print(`Congratulations, ${userName}!`);
  } finally {
    stdio.close();
  }
};
