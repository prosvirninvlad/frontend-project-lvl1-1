import createCli from './cli/index.js';
import createStdio from './stdio/index.js';

export default async (question, generateRound) => {
  const stdio = createStdio();
  const cli = createCli(stdio);

  try {
    cli.printGameName();

    const username = await cli.askPlayerName();
    const numberOfRounds = 3;

    cli.greetPlayer(username);
    cli.printGameRule(question);

    for (let i = 0; i < numberOfRounds; i += 1) {
      const round = generateRound();

      cli.printRoundQuestion(round.question);

      const answer = await cli.answerPlayer();

      if (answer !== round.correctAnswer) {
        cli.reportLoss(username, answer, round.correctAnswer);
        return;
      }

      cli.reportWin();
    }

    cli.congratulatePlayer(username);
  } finally {
    stdio.close();
  }
};
