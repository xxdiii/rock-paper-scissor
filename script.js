function getComputerChoice(){
    let choice=Math.floor(Math.random() * 3);
    if( choice==0){
        return 'rock';
    }
    else if(choice==1){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function getHumanChoice(){
    let hChoice=prompt("Enter your Choice:");
    return hChoice;
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice, computerChoice){
        
        let hChoice1=humanChoice.toLowerCase();
        if(hChoice1==computerChoice){
            console.log("Draw");
            console.log(`Current Score: ${humanScore}:${computerScore}`); 
        }
        else if((hChoice1=='rock' && computerChoice=='paper') || (hChoice1=='paper' && computerChoice=='scissors') || (hChoice1=='scissors' && computerChoice=='rock')){
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${hChoice1}`);
            console.log(`Current Score: ${humanScore}:${computerScore}`); 
        }
        else {
            humanScore++;
            console.log(`You win! ${hChoice1} beats ${computerChoice}`);           
            console.log(`Current Score: ${humanScore}:${computerScore}`);    
        }
        
         
}
    
function playGame(){
    for(let i=0;i<5;i++){
        let hchoice2=getHumanChoice();
        let compChoice=getComputerChoice();
        playRound(hchoice2, compChoice);
    }

    if(humanScore>computerScore){
        console.log(`Game Finished You win! Score: ${humanScore} : ${computerScore} (You : Computer)`);
    }
    else if(humanScore<computerScore){
        console.log(`Game Finished You lose! Score: ${humanScore} : ${computerScore} (You : Computer)`);
    }
    else{
        console.log(`Game Finished It's a Draw!! Score: ${humanScore} : ${computerScore} (You : Computer)`);
    }
}
    
playGame();
