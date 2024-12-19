let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let h2=document.querySelector("h2");
let btns=["yellow","red","purple","green"]

// step-1
// when we press any key in the keybord the keypress event works
document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game is started");
    started=true;

    levelUp();
   }
});

// step-2
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

//step-5
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

//step-4
function checkAns(ind){
    if(userSeq[ind ]=== gameSeq[ind]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
       }
    }
    else{
        h2.innerHTML=`Game Over! your score is <b>${level}</b> <br> Press any Key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

// step-3
function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

// step-6
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
