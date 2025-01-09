import readlineSync from 'readline-sync';
export const checkAnswer = (username,game,rounds,flag) => {

// console.log(rounds);
// console.log(flag);
    for( let i = 0; i < rounds.length;i++){
        const question = rounds[i].join(' ');
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer == flag[i]){
            console.log('Correct!');
        }  else {
                console.log(`${answer} is wrong; Correct answer was '${flag[i]}'`)
                console.log(`Let\`s try again, ${username}!`);
                return;
                }
        }
        console.log(`Congratulations, ${username}`);
                  
    }


