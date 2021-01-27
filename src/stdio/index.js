import { createInterface } from 'readline';

export default function createStdio() {
  const readable = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function print(string) {
    readable.write(`${string}\n`);
  }

  function query(question) {
    return new Promise((resolve) => readable.question(question, resolve));
  }

  function close() {
    readable.close();
  }

  return { print, query, close };
}
