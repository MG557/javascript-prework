//GRA

//Computer
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

//let computerMove = 'nieznany ruch';
let computerMove = getMoveName(randomNumber);
/*if(randomNumber == 1){ computerMove = 'kamień';} 
else if(randomNumber == 2){ computerMove = 'papier';}
else if(randomNumber == 3){ computerMove = 'nożyce';} 
*/  
function getMoveName(randomNumber){
    if(randomNumber == 1){
      return 'kamień';
    }
    else if(randomNumber == 2){
        return 'papier';
    }
    else if(randomNumber == 3){
        return 'nożyce';
    }
    else {
    printMessage('Nie znam ruchu o id ' + randomNumber + '.');
    return 'nieznany ruch';
    }
  }

printMessage('Mój ruch to: ' + computerMove);

//Player
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){ playerMove = 'kamień';}
else if(playerInput == '2'){ playerMove = 'papier';}
else if(playerInput == '3'){ playerMove = 'nożyce';}
*/
printMessage('Twój ruch to: ' + playerMove);

//Result

let argPlayerMove = getMoveName(playerInput);
let argComputerMove = getMoveName(randomNumber);


function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } 
    else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
      }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień' + argComputerMove == 'papier' && argPlayerMove == 'papier' + argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){ 
        printMessage('Remis.');
    }
    else {
      printMessage('Tym razem przegrywasz :(');
    }
  }

/*
if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
else if(computerMove == 'papier' && playerMove == 'nożyce'){ 
    printMessage('Ty wygrywasz!');
}
else if(computerMove == 'nożyce' && playerMove == 'kamień'){ 
    printMessage('Ty wygrywasz');
}
//remis
else if(computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
}
else if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
}
else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
}
//computer win
else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Komputer wygrywa!');
  }
else if(computerMove == 'nożyce' && playerMove == 'papier'){ 
    printMessage('Komputer wygrywa!');
}
else if(computerMove == 'kamień' && playerMove == 'nozyce'){ 
    printMessage('Komputer wygrywa');
}
//validate
else { 
    printMessage('Spróbuj ponownie: wybierz cyfrę 1 lub 2 lub 3.');
}
*/


