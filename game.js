//define variables for humans (wins, losses, ties)
var w = 0;
var t = 0;
var l = 0;

//define Rock / Paper / Scissors
var choice = ['R' , 'P', 'S']


 var game = function () {   

//define variable for computerChoice
var robot = Math.floor(Math.random() * choice.length);
var robotChoice = choice[robot];
//define variable for humanChoice
//var humanChoice = 

//prompt playerChoice
var person = prompt('Enter R, P, or S:');
person = person.toUpperCase();
//prompt randomly computerChoice
alert("Computer choose:" + robotChoice);  
//compare choices
if (person === robotChoice ) {
    alert('Its a tie'); 
    t++ ;
} else if ( 
    (person === 'R' && robotChoice === 'S') ||
    (person === 'P' && robotChoice === 'R') ||
    (person === 'S' && robotChoice === 'P')
    ) {
     alert('Its a Win'); 
    w++ ;   
} else{
    alert('You Lose');
    l++;
}

//display total stats (wins, Losses, Ties)
alert('Stats: \n  Wins: ' + w + '\n Losses: ' + l + '\n Ties: ' + t );
//ask to play again

var playAgain = confirm('Play Again') 
    if (playAgain){
        game();
    }
    //if play agin (restart)
    //else stop game
};
game();

/*function greaterThan(x,y){
if(x>y){
return x;
}else {
    return y;
}
}*/


function sumNumber(x){
    var sum = 0;
    for(var i=1; i <= x; i++){
        sum += i;
    }
    return sum
}
