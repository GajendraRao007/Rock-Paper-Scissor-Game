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



   