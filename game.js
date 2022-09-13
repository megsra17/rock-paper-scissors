//define Rock / Paper / Scissors
var choice = ['R' , 'P', 'S']
//define variable for computerChoice
var robot = Math.floor(Math.random() * choice.length);
//define variable for humanChoice
//var humanChoice = 
//define variables for humans (wins, losses, ties)
var w = 0;
var l = 0; 
var t = 0;
//prompt playerChoice
var person = prompt('Enter R, P, or S:');
person = person.toUpperCase();
//prompt randomly computerChoice
var robotChoice = alert("Computer choose:" + robot);  
//compare choices
if (person === robotChoice ) {
    alert('Its a tie'); 
    t++ ;
} else if (
    (person === 'R' && robotChoice === 'S')
    (person === 'P' && robotChoice === 'R')
    (person === 'S' && robotChoice === 'P')
    ) {
     alert('Its a Win'); 
    w++ ;   
} else{
    alert('You Lose');
    l++;
}

//display results (won , tied or lost the round)

//display total stats (wins, Losses, Ties)

//ask to play again
    //if play agin (restart)
    //else stop game



