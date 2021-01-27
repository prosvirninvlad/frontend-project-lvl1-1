import createStdio from './stdio/index.js';

export default async () => {
  const stdio = createStdio();
  try {
    stdio.print('Welcome to the Brain Games!');
    const name = await stdio.query('May I have your name? ');
    stdio.print(`Hello, ${name}!`);
  } finally {
    stdio.close();
  }
};
