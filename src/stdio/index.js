import { createInterface } from 'readline';

export default function createStdio() {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function print(message) {
    readline.write(`${message}\n`);
  }

  function query(question) {
    return new Promise((resolve) => readline.question(question, resolve));
  }

  function close() {
    readline.close();
  }

  return { print, query, close };
}
