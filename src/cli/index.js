export default function createCli(stdio) {
  function printGameName() {
    stdio.print('Welcome to the Brain Games!');
  }

  function askPlayerName() {
    return stdio.query('May I have your name? ');
  }

  function greetPlayer(username) {
    stdio.print(`Hello, ${username}!`);
  }

  function printGameRule(rule) {
    stdio.print(rule);
  }

  function printRoundQuestion(question) {
    stdio.print(`Question: ${question}`);
  }

  function answerPlayer() {
    return stdio.query('Your answer: ');
  }

  function reportLoss(username, answer, correctAnswer) {
    stdio.print(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    stdio.print(`Let's try again, ${username}!`);
  }

  function reportWin() {
    stdio.print('Correct!');
  }

  function congratulatePlayer(username) {
    stdio.print(`Congratulations, ${username}!`);
  }

  return {
    printGameName,
    askPlayerName,
    greetPlayer,
    printGameRule,
    printRoundQuestion,
    answerPlayer,
    reportLoss,
    reportWin,
    congratulatePlayer,
  };
}
