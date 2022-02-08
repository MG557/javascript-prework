//GRA

//Computer
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    else if(argMoveId == 2){
        return 'papier';
    }
    else if(argMoveId == 3){
        return 'nożyce';
    }
    else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Spróbuj ponownie.');
    return 'nieznany ruch.';
    }
  }

//Player
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

//Result

displayResult(computerMove, playerMove);
function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem: ' + argComputerMove + ', Twój ruch to: ' + argPlayerMove);
  
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } 
    else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
      }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){ 
        printMessage('Remis.');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){ 
        printMessage('Remis.');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){ 
        printMessage('Remis.');
    }
    else {
      printMessage('Tym razem przegrywasz.');
    }
  }



