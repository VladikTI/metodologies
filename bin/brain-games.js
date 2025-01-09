#!/usr/bin/env node 
// использование шебанга дял работы в командной строке с интерпритатором node
//Файл для управления играми
import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';
import { playNokGame } from '../src/games/NOK.js';
import { progressingGame } from '../src/games/Geometricprogression.js';
import { checkAnswer } from '../src/gameTests.js';
const username =greetUser();

function startgame(answer = 'y'){
    const gamemode = readlineSync.question('Choose game: 1)NOK 2)Geometric Progression : ');
    if (gamemode == 1){
            const [rounds,flags] = playNokGame(username);
            checkAnswer(username,gamemode,rounds,flags);
            answer = readlineSync.question('Do you want to play again? y/n \n');
        } else if (gamemode == 2){
            const [rounds,flags]= progressingGame(username);
            checkAnswer(username,gamemode,rounds,flags);
            answer = readlineSync.question('Do you want to play again? y/n \n');
        } else {
            console.log('error');
            return;
        } 
        if (answer == 'y'){
                startgame(answer);
        } else if (answer == 'n') {
                return;
        } else {
                console.log('error');
        }
}

startgame();