let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const option=["rock", "paper", "scissors"];
    
    const ramdInd= Math.floor(Math.random()*3);
    return  option[ramdInd];
}

const drawGame=()=>{
    console.log("Game was Draw!");
    msg.innerText="Game was Draw! Play Again";
    msg.style.backgroundColor="blue";

}
    const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
    console.log("You Win!");
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
     }
     else{
        console.log("You Lost!");
        compScore++;
        compScorePara.innerText=compScore;
         msg.innerText=`You Lost! ${compChoice} beats Your ${userChoice}`;
         msg.style.backgroundColor="red";
     }
}

const playGame=(userChoice)=>{
    console.log("user choice = ", userChoice);
        const compChoice=genCompChoice();
        console.log("Computer choice = ", compChoice);
        if(userChoice===compChoice){
            drawGame();
        }
        else{
            let userWin=true;
            if(userChoice==="rock"){
          userWin=compChoice==="paper"?false:true;
            }
            else if(userChoice==="paper"){
                userWin=compChoice==="scissors"?false:true;
            }
            else {
             userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
