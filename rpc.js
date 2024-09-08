const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * (2- 0 +1)) + 0;
    if (randomNum === 0){
        return "rock"
    }else if (randomNum === 1){
        return "paper"
    }else{
        return "scissors"
     }
   
    } 
 
 
const getHumanChoice = () => {
    let userInput = prompt("what is your word?")//.toLowerCase()
    console.log("user input:", userInput)
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors"){
        return userInput;
    }else{
        return "INVALID WORD!, input 'rock', 'paper' or 'scissors'"
    }
    
 }
    
 let humanScore = 0
 let computerScore = 0;
   

   const playGame = () => {
    
      

        function playRound(humanChoice, computerChoice) {
            humanChoice = humanChoice.toLowerCase();
             computerChoice = computerChoice.toLowerCase();
         
               if (humanChoice === computerChoice) {
                console.log("computer output: ",computerChoice);
                console.log("It's a tie!");
             } else if (humanChoice === "rock" && computerChoice === "paper") {
                console.log("computer output: ",computerChoice);
                console.log("You lose! Paper beats Rock");
             } else if (humanChoice === "rock" && computerChoice === "scissors") {
                console.log("computer output: ",computerChoice);
                console.log("You win! Rock beats Scissors");
             } else if (humanChoice === "paper" && computerChoice === "rock") {
                console.log("computer output: ",computerChoice);
                console.log("You win! Paper beats Rock");
             } else if (humanChoice === "paper" && computerChoice === "scissors") {
                console.log("computer output: ",computerChoice);
                console.log("You lose! Scissors beat Paper");
             } else if (humanChoice === "scissors" && computerChoice === "rock") {
                console.log("computer output: ",computerChoice);
                console.log("You lose! Rock beats Scissors");
             } else if (humanChoice === "scissors" && computerChoice === "paper") {
                console.log("computer output: ",computerChoice);
                console.log("You win! Scissors beat Paper");
             }else {
                console.log("INVALID WORD... Input 'rock', 'paper' or 'scissors' ")
             }
         
    
            
             if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
                 humanScore++
                 console.log("humanScore:", humanScore)
              }
              else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock" ){
                 computerScore++
                 console.log("computerScore:", computerScore)
              }else if(humanChoice === computerChoice ) {
                 console.log("humanScore: 0 comuterScore: 0")
              }
            
              
        }
           
        
     
         
        
      
       const humanSelection1 = getHumanChoice();
        const computerSelection1 = getComputerChoice();
        playRound(humanSelection1, computerSelection1)

        const humanSelection2 = getHumanChoice();
        const computerSelection2 = getComputerChoice();
        playRound(humanSelection2, computerSelection2)      
            
        const humanSelection3 = getHumanChoice();
        const computerSelection3 = getComputerChoice();
        playRound(humanSelection3, computerSelection3)      

        const humanSelection4 = getHumanChoice();
        const computerSelection4 = getComputerChoice();
        playRound(humanSelection4, computerSelection4)      
    
        const humanSelection5 = getHumanChoice();
        const computerSelection5 = getComputerChoice();
        playRound(humanSelection5, computerSelection5)      


    if(humanScore > computerScore){
        return `You win! Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
    } else if (computerScore > humanScore){
        return `You lose Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
    }else {
        return `Tie Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
    }

}
  
   
console.log(playGame());
