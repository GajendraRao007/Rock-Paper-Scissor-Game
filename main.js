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
document.getElementById('rockbtn').addEventListener('click', () => userPicked('pickedRock'));
document.getElementById('paperbtn').addEventListener('click', () => userPicked('pickedPaper'));
document.getElementById('scissorbtn').addEventListener('click', () => userPicked('pickedScissor'))


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
    if (playerPicked === 'pickedRock') return 6;
    if (playerPicked === 'pickedPaper') return 8;
    if (playerPicked === 'pickedScissor') return 7;
}

//computer selects/picks the random button

function computerPicked() {
    let compPicked = ['pickedRock', 'pickedPaper', 'pickedScissor'];
    let computerpickedRandom = compPicked[Math.floor(Math.random() * compPicked.length)];

    let displayElement = document.getElementById('Pc-picked');
    displayElement.innerHTML = `<img src="Images/Group ${imgNum(computerpickedRandom)}.png" alt="${computerpickedRandom}" srcset="">`;

    return computerpickedRandom;
}

// Function to determine the winner
function play(playerPicked) {
    let computerpickedRandom = computerPicked();

    let resultElement = document.getElementById('result');
    if (playerPicked === computerpickedRandom) {
        resultElement.innerText = "TIE UP";
    } else if (
        (playerPicked === 'pickedRock' && computerpickedRandom === 'pickedScissor') ||
        (playerPicked === 'pickedPaper' && computerpickedRandom === 'pickedRock') ||
        (playerPicked === 'pickedScissor' && computerpickedRandom === 'pickedPaper')
    ) {
        resultElement.innerText = "YOU WIN";
    } else {
        resultElement.innerText = "YOU LOST";
    }
}

   