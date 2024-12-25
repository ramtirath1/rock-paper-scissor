let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const option=["rock", "paper", "scissors"];
    // strings generate radom not possible but nuber is possible and in array number is index
    // that is why we use array in this
    // Math.random(); is used to generate random numbers we know it already Math.random()
    // now it generate from 1 to 1 but we need to generat it from 0 to 2 Math.random()*3;
    // then multiply by then generate accordingle if we need 0 to 0 then multiply by 10
    // to remove decimals value we have functoin math.floors  Math.floor(Math.random()*3);
    // this random number treat as a random index which is help to select choice
    const ramdInd= Math.floor(Math.random()*3);
    return  option[ramdInd];
    // return choice means in the option whatever value index come

}

const drawGame=()=>{
    console.log("Game was Draw!");
    msg.innerText="Game was Draw! Play Again";
    msg.style.backgroundColor="blue";

}
// const showWinner=(userWin)=>{ who is beat and who is beaten to show then pass it
    const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
    console.log("You Win!");
    // for scoring
    userScore++;
    userScorePara.innerText=userScore;// 1 add when user win
    // msg.innerText="You Win!";
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
     }
     else{
        console.log("You Lost!");
        compScore++;
        compScorePara.innerText=compScore;
        //  msg.innerText="You Loss!";
         msg.innerText=`You Lost! ${compChoice} beats Your ${userChoice}`;
         msg.style.backgroundColor="red";
        //  msg.style.color="yellow";

     }
}

const playGame=(userChoice)=>{
    console.log("user choice = ", userChoice);
    // modular way of programmin means making function for every single task
    // and if we need in future we can use it means its follows modular way of programming
        // generate computer choice
        const compChoice=genCompChoice();
        console.log("Computer choice = ", compChoice);
        // who wins in this game code
        if(userChoice===compChoice){
            drawGame();
        }
        else{
            let userWin=true;// we assume if user win then true
            if(userChoice==="rock"){// user choice rock means user and computer choice both same means game draw
            //  then not check else part means compter choice scissor or paper
            // if user choice rock and computer choice paper then user loss
            // because paper cover rock means paper false means user loss if true the user win
            // in the code if oppsite then opposite
          userWin=compChoice==="paper"?false:true;
            }
            else if(userChoice==="paper"){
                // when user choice is paper then computer only hava choose rock or scissors 
                // otherwise game draw not come here
                // compChoice===="scissors"? if computer choice is scissors 
                // then in paper and scissor paper win means computer win
                // we can use if else but its more compact that is why
                userWin=compChoice==="scissors"?false:true;
            }
            else {
                // user have only one choice scissor
                //  computer have scissor or paper otherwise game draw
        // if computer choice is rock then user loss the match beacuse user have only scissors
             userWin=compChoice==="rock"?false:true;
        }
        // we can show our winner here user loss or win the match
        // showWinner(userWin);// in this computer and user choice to show
        showWinner(userWin,userChoice,compChoice);
}
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        // to acces by id was is clicked
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        // play game already know user choice
        playGame(userChoice);
    });
});