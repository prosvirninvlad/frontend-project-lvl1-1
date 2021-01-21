import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

export default (variants, question, correctAnswers) => {
  console.log('Welcome to the Brain Games!');

  const userName = getName() || 'Incognito';

  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < 3; i += 1) {
    console.log(question);
    console.log(`Question: ${variants[i]}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswers[i]) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswers[i]}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
