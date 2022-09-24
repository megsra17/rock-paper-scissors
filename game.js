var rockEl = document.querySelector('#rock');
var paperEl = document.querySelector('#paper');
var scissorsEl = document.querySelector('#scissors')
var humanScoreEl = document.querySelector('#human-score')
var computerScoreEl = document.querySelector('#computer-score')

var choicesElements = [rockEl, paperEl, scissorsEl];

//define Rock / Paper / Scissors
var choice = ['r' , 'p', 's']
var humanScore = 0
var computerScore = 0

function startRound(event){
    var personChoiceEl = event.target;
    if(event.target.matches('img')){
        personChoiceEl = event.target.parentElement
    }else{
        personChoiceEl = event.target
    }
    var personChoice = personChoiceEl.dataset.letter;

    
    var robot = Math.floor(Math.random() * choice.length);
    var robotChoice = choice[robot];
    var robotChoiceEl = document.querySelector('[data-letter="' + robotChoice +'"]')

    var result
    if (personChoice === robotChoice ) {
        result= "TIED" ;
    } else if ( 
        (personChoice === 'r' && robotChoice === 's') ||
        (personChoice === 'p' && robotChoice === 'r') ||
        (personChoice === 's' && robotChoice === 'p')
        ) {
        humanScore++ ; 
        result = "YOU WON"  
    } else{
        result = ('YOU LOST');
        computerScore++;
    }
    
    //hide all 3 imgs
    choicesElements.forEach(function(img){
        img.style.display = 'none'
    })
    personChoiceEl.style.display = "block"
    robotChoiceEl.style.display = "block"
        

}

rockEl.addEventListener('click', startRound)
scissorsEl.addEventListener('click', startRound)
paperEl.addEventListener('click', startRound)


//  var game = function () {   


// //display total stats (wins, Losses, Ties)
// alert('Stats: \n  Wins: ' + w + '\n Losses: ' + l + '\n Ties: ' + t );
// //ask to play again

// var playAgain = confirm('Play Again') 
//     if (playAgain){
//         game();
//     }
//     //if play agin (restart)
//     //else stop game
// };
// game();

// /*function greaterThan(x,y){
// if(x>y){
// return x;
// }else {
//     return y;
// }
// }*/

// function sumNumber(x){
//     var sum = 0;
//     for(var i=1; i <= x; i++){
//         sum += i;
//     }
//     return sum
// }
