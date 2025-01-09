export const progressingGame = () => {
    const rounds = [[],[],[]];
    const flag = [];
    console.log('What number is missing in the progression?');
    for (let i = 0; i<3; i++) {
        let ratio = 0;
        let max = Math.floor(Math.random()*6)+5;// рандомные целые числа
        // console.log(round);
        for (let j = 0;j < max;j++){
            switch(i) {
                case 0 : ratio = 2
                break;
                case 1 : ratio = 3
                break;
                case 2 : ratio = 5
                break;
            }
         rounds[i].push(ratio**j);
        }
    } 
    for (const number of rounds) {
        let position = Math.floor(Math.random() * number.length);
        flag.push(number[position]);
        // let result = '';
        
        for (let j = 0; j < number.length; j++) {
            if (j !== position) {
                // result += number[j] + " ";
            } else {
                number[j] = ".."
                // result += number[j] + " ";
            }
        }

        // console.log(result.trim()); //  парсим и выводим строку
        // console.log(flag);
    }

    return [rounds,flag]; // возвращает "пропущенные" значения и правильные ответы

}

