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


userpickedRock.addEventListener('click', ()=>{
    let displayElement = document.getElementById('you-picked');
    displayElement.innerHTML = `<img src="Images/Group 6.png" alt="Rock" srcset="">`;

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

    play()
})


userpickedPaper.addEventListener('click', ()=>{
    let displayElement = document.getElementById('you-picked');
    displayElement.innerHTML = `<img src="Images/Group 8.png" alt="Paper" srcset="">`;

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

    play()
})


userpickedScissor.addEventListener('click', ()=>{
    let displayElement = document.getElementById('you-picked');
    displayElement.innerHTML = `<img src="Images/Group 7.png" alt="Scissor" srcset="">`;

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

    play()
})


//computer selects/picks the random button rock, paper or scissor

let compicked = ['Rock', 'Paper', 'Scissor'];

    compickedIndex = Math.floor(Math.random()* compicked.length);

    let comDisplay = document.getElementById('Pc-picked');
    let compickedRandom = compicked[compickedIndex];

    if(compickedRandom == 'Rock'){
        comDisplay.innerHTML = '<img src="Images/Group 6.png" alt="Rock" srcset="">';
    }else if(compickedRandom == 'Paper'){
        comDisplay.innerHTML = '<img src="Images/Group 8.png" alt="Paper" srcset="">';
    }else if(compickedRandom == 'Scissor'){
        comDisplay.innerHTML = '<img src="Images/Group 7.png" alt="Scissor" srcset="">';
    }


// Function to see who is the winner, loser or the game is tie & display scores for user & comp
let userScore = 0;
let compScore = 0;

//adding the green background for the winner
let userWinnerBackground ;
let compWinnerBackground;

//Next btn when the user wins the round
let nextButton = document.getElementById('Next-btn');

function play() {
    let playerPicked = document.getElementById("you-picked").querySelector('img').alt;

    let userScoreDisplay = document.getElementById('User-Score-display');
    let compScoreDisplay = document.getElementById('Comp-Score-display');

    let userWinnerBackground = document.getElementById('user-Winner-Background');
    let compWinnerBackground = document.getElementById('comp-Winner-Background');

    let resultElement = document.getElementById('result');
    let playbuttonTextChange = document.getElementById('play-again');

    if (playerPicked === compickedRandom) {
        resultElement.innerText = "TIE";
        playbuttonTextChange.innerText = "REPLAY";
    } else if (
        (playerPicked === 'Rock' && compickedRandom === 'Scissor') ||
        (playerPicked === 'Paper' && compickedRandom === 'Rock') ||
        (playerPicked === 'Scissor' && compickedRandom === 'Paper')
    ) {
        resultElement.innerText = "YOU WIN";
        userScore++;
        userWinnerBackground.style.opacity = "100";
        nextButton.style.display = 'inline-flex';
    } else {
        resultElement.innerText = "YOU LOST";
        compScore++;
        compWinnerBackground.style.opacity = "100";
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


//rule button for winners page

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


//play again & Replay button function

let playagain = document.getElementById('play-again');

playagain.addEventListener('click',()=>{
    location.reload();
})

