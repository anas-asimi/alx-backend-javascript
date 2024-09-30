const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
  console.log(`Your name is: ${answer}!`);
  rl.close();
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
