import readlineSync from 'readline-sync';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');// .question позволяет выводить текст и получать значение
  console.log(`Hello, ${name}!`);
  return name;
};
