// функция для вычисления НОД
// Рекурсивный вызов, используя алгоритм Евклида
// если b = 0, возвращает a
const nod = (a,b) => (!b ? a : nod (b,a % b))
const nok = (a,b) => (a * b) / nod (a,b)
export const playNokGame = () => {
  console.log('Welcome to the LCM Game!');
  const flag = [];
  const rounds = [
    [5 ,7, 15],
    [100,50, 1],
    [3, 9, 27],
  ]

  for (const numbers of rounds){
    const correctAnswer = numbers.reduce((acc,num) => nok(acc,num));
    flag.push(correctAnswer);
    }
// console.log(rounds);
//   console.log(flag);
  return [rounds,flag]; // возвращает числа и ответы
}