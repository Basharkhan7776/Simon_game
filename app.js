let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector('h2');

document.addEventListener('keypress',startGame);

let startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", startGame);


let allBtn=document.querySelectorAll(".btn");
function startGame() {
    if(started==false){
        console.log("Game started");
        started=true;

        levelUp();
    }
}


function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`LEVEL ${level}`;
    let rndmIdx=Math.floor(Math.random()*3);
    let rndmClr=btns[rndmIdx];
    let rndmbtn=document.querySelector(`.${rndmClr}`);
    gameSeq.push(rndmClr);
    console.log(gameSeq)
    gameFlash(rndmbtn);
}

function checkAns(indx){
    if(userSeq[indx]==gameSeq[indx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 500);
        }
    } else{
        h2.innerHTML=`Game Over! your score was <b>${level}</b> <br>Press any key or Start button to start the game`;
        document.querySelector(".outerBox").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector(".outerBox").style.backgroundColor="rgb(65, 65, 65)";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}