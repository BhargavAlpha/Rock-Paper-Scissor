document.addEventListener("DOMContentLoaded", function() {
let userScore = 0;
let pcScore = 0;

// Restore scores from local storage if available
if (localStorage.getItem("userScore")) {
    userScore = parseInt(localStorage.getItem("userScore"));
    updateUserScore(userScore);
}
if(localStorage.getItem("pcScore")) {
    pcScore = parseInt(localStorage.getItem("pcScore"));
    updatePcScore(pcScore);
}

/* computer choice*/
const options= ["rock", "paper", "scissor"];
function computerChoice() {
    return options[Math.floor(Math.random() * 3)];
};

/* Score board values updation*/

function updateUserScore(UserScore) {
  document.getElementById("user-score").innerHTML = userScore;
}

function updatePcScore(PcScore) {
  document.getElementById("computer-score").innerHTML = pcScore;
}
// Save scores to local storage 
function saveScores() {
    localStorage.setItem("userScore", userScore);
    localStorage.setItem("pcScore", pcScore);
}

/*fetching game area controls*/
let rock=document.getElementById('rock-control');
let paper=document.getElementById('paper-control');
let scissor=document.getElementById('scissor-control');

/*fetching result area elements*/
const userResult=document.querySelector('.user-choice');
const pcResult=document.querySelector('.pc-choice');
const message=document.querySelector('.winlose-message');
const tieMessage=document.querySelector('.tie-message');
const text=document.querySelector('.against-pc-text');


/*fetching all containers for hiding or showing them*/
const gameArea=document.querySelector('.controls-div');
const rulesDiv=document.querySelector('.rules-div');
const resultDiv=document.querySelector('.result');

/*showing and hiding rules when rules button and cross button are clicked*/
const rulesBtn=document.getElementById('rules-button');
const closeBtn=document.querySelector('.close');
const nextBtn=document.getElementById('next-button');
rulesBtn.addEventListener("click",function(){
    rulesDiv.classList.remove("hidden");
});

closeBtn.addEventListener("click",function(){
    rulesDiv.classList.add("hidden");
});
nextBtn.addEventListener("click",function(){
    clearScores();
})

/*play again button to show game area */
const playBtn=document.querySelector('.play-again');
playBtn.addEventListener("click",function(){
    resultDiv.classList.add('hidden');
    nextBtn.style.display="none";
    gameArea.classList.remove('hidden');
});


/* win lose tie function */
function tie(){
    message.classList.add('hidden');
    text.classList.add('hidden');
    tieMessage.classList.remove('hidden');
    playBtn.innerHTML="REPLAY";
    userResult.parentElement.classList.remove('active');
    pcResult.parentElement.classList.remove('active');
};

function win(){
    message.classList.remove('hidden');
    text.classList.remove('hidden');
    tieMessage.classList.add('hidden');
    message.textContent="you win";
    nextBtn.style.display="block";
    userResult.parentElement.classList.add('active');
    pcResult.parentElement.classList.remove('active');
};

function lost(){
    message.classList.remove('hidden');
    text.classList.remove('hidden');
    tieMessage.classList.add('hidden');
    nextBtn.classList.add('hidden');
    message.textContent="you lost";
    pcResult.parentElement.classList.add('active');
    userResult.parentElement.classList.remove('active');
};


/*making controls work*/
rock.addEventListener("click",function(){
    rulesDiv.classList.add('hidden');
    pc=computerChoice();
    if(pc==='paper'){
        updateDesign(rock,paper);
        updatePcScore(++pcScore);
        lost();
    }
    else if(pc==='rock'){
        updateDesign(rock,rock);
        tie();
    }
    else{
        updateDesign(rock,scissor);
        updateUserScore(++userScore);
        win();
    }
    saveScores();
});

paper.addEventListener("click",function(){
    rulesDiv.classList.add('hidden');
    pc=computerChoice();
    if(pc==='scissor'){
        updateDesign(paper,scissor);
        updatePcScore(++pcScore);
        lost();
    }
    else if(pc==='paper'){
        updateDesign(paper,paper);
        tie();
    }
    else{
        updateDesign(paper,rock);
        updateUserScore(++userScore);
        win();
    }
    saveScores();
});

scissor.addEventListener("click",function(){
    rulesDiv.classList.add('hidden');
    pc=computerChoice();
    if(pc==='paper'){
        updateDesign(scissor,rock);
        updatePcScore(++pcScore);
        lost();
    }
    else if(pc==='scissor'){
        updateDesign(scissor,scissor);
        tie();
    }
    else{
        updateDesign(scissor,scissor);
        updateUserScore(++userScore);
        win();
    }
    saveScores();
});

/* function to update result area elements design*/
function updateDesign(userChoice,pcChoice){
    gameArea.classList.add('hidden');
    resultDiv.classList.remove('hidden');
    const colour1=getComputedStyle(userChoice.parentElement).backgroundColor;
    console.log(colour1);
    const colour2=getComputedStyle(pcChoice.parentElement).backgroundColor;
    userResult.innerHTML=userChoice.innerHTML;
    userResult.parentElement.style.backgroundColor=colour1;
    pcResult.innerHTML=pcChoice.innerHTML;
    pcResult.parentElement.style.backgroundColor=colour2;
}
// Function to clear scores from local storage
function clearScores() {
    localStorage.removeItem("userScore");
   localStorage.removeItem("pcScore");
   // Update scores on the page
   document.getElementById("user-score").textContent = 0;
   document.getElementById("pc-score").textContent = 0;
   // Reset variables
   userScore = 0;
   pcScore = 0;
}



const canvas = document.querySelector('#confetti');
function celebrationAnimation(){
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
        emojis: [  ],
    }).then(() => jsConfetti.addConfetti())
}
});

