import readlineSync from 'readline-sync';
import promptly from 'promptly';

const getName = async () =>
  await promptly.prompt('May I have your name? ', { default: 'Incognito' });

export default async (variants, question, correctAnswers) => {
  console.log('Welcome to the Brain Games!');

  const userName = await getName();

  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < 3; i += 1) {
    console.log(question);
    console.log(`Question: ${variants[i]}`);

    const answer = await promptly.prompt('Your answer: ');

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
