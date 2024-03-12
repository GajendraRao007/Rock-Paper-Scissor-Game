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

//UserPicked options
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
    showRound.style.marginTop = '-330px';

    let showTitle = document.getElementById('match-title');
    showTitle.style.display = 'flex';

    let winbox = document.getElementById('win-box')
    winbox.style.display = 'block'

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


// Function to see who is the winner, loser or the game is tie & display scores for user & comp
let userScore = 0;
let compScore = 0;

//adding the green background for the winner
let userWinnerBackground ;
let compWinnerBackground;

//Next btn when the user wins the round
let nextButton = document.getElementById('Next-btn');

function play(playerPicked) {
    let computerpickedRandom = computerPicked();
    
    let userScoreDisplay = document.getElementById('User-Score-display');
    let compScoreDisplay = document.getElementById('Comp-Score-display');

    let userWinnerBackground = document.getElementById('user-Winner-Background');
    let compWinnerBackground = document.getElementById('comp-Winner-Background');

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
        userWinnerBackground.style.opacity="100";
        nextButton.style.display = 'inline-flex';

    } else {
        resultElement.innerText = "YOU LOST";
        compScore++
        compWinnerBackground.style.opacity="100";
       
    }

    userScoreDisplay.innerText = userScore;
    compScoreDisplay.innerText = compScore;
}

//function to display the Winner's/Trophy Page  
 
nextButton.addEventListener('click', ()=>{
    let container = document.querySelector('.container')
    container.style.display ='none';

    let showWinnerPage = document.getElementById('Winner-page')
    showWinnerPage.style.display = 'block';

    let displayRulebtn = document.getElementById('Rules-btn')
    displayRulebtn.style.display = 'block';
});

let ruleButtonWinnerPage = document.getElementById('Rules-btn-win-page')
let cancelButtonWinnerPage = document.getElementById('cancel-btn-two')

ruleButtonWinnerPage.addEventListener('click',()=>{
    let rulesBoxWinnerPage = document.getElementById('rules-box-winner-page');
    console.log('rule button clicked');
    rulesBoxWinnerPage.style.display = 'block';
})
cancelButtonWinnerPage.addEventListener('click',()=>{
    let rulesBoxWinnerPage = document.getElementById('rules-box-winner-page');
    console.log('cancel button clicked');
    rulesBoxWinnerPage.style.display = 'none';
})