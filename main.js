let rulesButton = document.getElementById('Rules-btn');
let rulesBox = document.getElementById('rules-box');
let cancelButton = document.getElementById('cancel-btn');

//Rules button
rulesButton.addEventListener('click',()=>{
    console.log('button clicked');
    rulesBox.style.display = 'block';
})

//Cancel button
cancelButton.addEventListener('click',()=>{
    console.log('cancel button clicked');
    rulesBox.style.display = 'none';
})

//Picked options
let userpickedRock = document.getElementById('rockbtn');
let userpickedPaper =  document.getElementById('paperbtn');
let userpickedScissor = document.getElementById('scissorbtn');

function userPicked(playerPicked) {
    let displayElement = document.getElementById('you-picked');
    displayElement.innerHTML = `<img src="Images/Group ${imgNum(playerPicked)}.png" srcset="">`;

    let options = document.getElementById('options');
    options.style.display = 'none';

    let showRound = document.getElementById('match-area');
    showRound.style.display = 'flex';
    showRound.style.justifyContent = 'space-around';

    let showTitle = document.getElementById('match-title');
    showTitle.style.display = 'flex';

    play(playerPicked);
}

// Function to get the image number 
function imgNum(playerPicked) {
    if (playerPicked === 'pickedRock') {
        return 6;
    }
    if (playerPicked === 'pickedPaper') {
        return 8;
    }
    if (playerPicked === 'pickedScissor') {
        return 7;
    }
}

userpickedRock.addEventListener('click',function(){
    console.log('clicked rock button');
    userPicked('pickedRock')
})
userpickedPaper.addEventListener('click',function(){
    console.log('clicked paper button');
    userPicked('pickedPaper')
})
userpickedScissor.addEventListener('click',function(){
    console.log('clicked scissor button');
    userPicked('pickedScissor')
})


//computer selects/picks the random button rock, paper or scissor
function computerPicked() {
    let compPicked = ['pickedRock', 'pickedPaper', 'pickedScissor'];
    let computerpickedRandom = compPicked[Math.floor(Math.random() * compPicked.length)];

    let displayElement = document.getElementById('Pc-picked');
    displayElement.innerHTML = `<img src="Images/Group ${imgNum(computerpickedRandom)}.png" alt="" srcset="">`;

    return computerpickedRandom;
}


// Function to see who is the winner, loser or tie & display scores for user & comp
let userScore = 0;
let compScore = 0;


function play(playerPicked) {
    let computerpickedRandom = computerPicked();
    
    let userScoreDisplay = document.getElementById('User-Score-display');
    let compScoreDisplay = document.getElementById('Comp-Score-display');
    let resultElement = document.getElementById('result');

    if (playerPicked === computerpickedRandom) {
        resultElement.innerText = "TIE UP";
    } else if (
        (playerPicked === 'pickedRock' && computerpickedRandom === 'pickedScissor') ||
        (playerPicked === 'pickedPaper' && computerpickedRandom === 'pickedRock') ||
        (playerPicked === 'pickedScissor' && computerpickedRandom === 'pickedPaper')
    ) {
        resultElement.innerText = "YOU WIN";
        userScore++
    } else {
        resultElement.innerText = "YOU LOST";
        compScore++
    }

    
    userScoreDisplay.innerText = userScore;
    compScoreDisplay.innerText = compScore;
}


 
 