let rounds=3;
let userScore=0;
let compScore=0;

const userScoreVal=document.querySelector("#userScoreVal");
const compScoreVal=document.querySelector("#compScoreVal");

const userResult=document.querySelector("#result-user-stat");
const compResult=document.querySelector("#result-comp-stat");
const finalResult=document.querySelector("#result-final-stat");

const choiceArr = document.querySelectorAll(".choice");

function process(userChoice){
    
    const computerChoice=choiceArr[Math.floor(Math.random()*3)].firstElementChild.getAttribute("alt");

    userResult.textContent = "User : " + userChoice.toUpperCase();
  compResult.textContent = "Computer : " + computerChoice.toUpperCase();


    if(userChoice===computerChoice){
        return;
    }

    if((userChoice=="rock" && computerChoice=="scissors")|| (userChoice=="paper" && computerChoice=="rock") || (userChoice=="scissors" && computerChoice=="paper")){
            userScore++;
            if(userScore==rounds){
               finalResult.textContent="Winner : USER";
               userScoreVal=0;
               compScoreVal=0; 
            }
            else{
                return(userScore.textContent=userScore);
            }
    }
//computer

if((computerChoice=="rock" && userChoice=="scissors")|| (computerChoice=="paper" && userChoice=="rock") || (computerChoice=="scissors" && userChoice=="paper")){
    compScore++;
    if(compScore==rounds){
       finalResult.textContent="Winner : COMPUTER";
       userScoreVal=0;
       compScoreVal=0; 
    }
    else{
        return(compScore.textContent=compScore);
    }
}


}

function choice(){

    choiceArr.forEach((e)=>{
        e.addEventListener("click",()=>{
            let selected=e.firstElementChild.getAttribute("alt");
            //console.log(selected);
            process(selected);
        });
    });

}
choice();