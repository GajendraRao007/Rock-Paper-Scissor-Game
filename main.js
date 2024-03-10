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
let pickedRock = document.getElementById('rockbtn');
let pickedPaper = document.getElementById('paperbtn');
let pickedScissor = document.getElementById('scissorbtn');



pickedRock.addEventListener('click',()=>{
    let displayRock = document.getElementById('you-picked');
    displayRock.innerHTML = '<img src="Images/Group 6.png" alt="stone" srcset="">';
    console.log('pickd rock');
    let options = document.getElementById('options');
    options.style.display = 'none';
    
    let showRound = document.getElementById('match-area')
    showRound.style.display = 'flex';
    showRound.style.justifyContent = 'space-around';

});
pickedPaper.addEventListener('click',()=>{
    let displayPaper =document.getElementById('you-picked');
    displayPaper.innerHTML = '<img src="Images/Group 8.png" alt="paper" srcset="">';
    console.log('picked paper');

    let options = document.getElementById('options');
    options.style.display = 'none';

    let showRound = document.getElementById('match-area')
    showRound.style.display = 'flex';
    showRound.style.justifyContent = 'space-around';

})

pickedScissor.addEventListener('click',()=>{
    let displayScissor = document.getElementById('you-picked');
    displayScissor.innerHTML ='<img src="Images/Group 7.png" alt="scissor" srcset="">';
    console.log('picked scissor');

    let options = document.getElementById('options');
    options.style.display = 'none';

    let showRound = document.getElementById('match-area')
    showRound.style.display = 'flex';
    showRound.style.justifyContent = 'space-around';
})

let compicked = ['pickedRock', 'pickedPaper', 'pickedScissor'];

    compickedIndex = Math.floor(Math.random()* compicked.length);
    
    let comDisplay = document.getElementById('Pc-picked');
    let compickedRandom = compicked[compickedIndex];

    if(compickedRandom == 'pickedRock'){
        comDisplay.innerHTML = '<img src="Images/Group 6.png" alt="stone" srcset="">';
    }else if(compickedRandom == 'pickedPaper'){
        comDisplay.innerHTML = '<img src="Images/Group 7.png" alt="paper" srcset="">';
    }else if(compickedRandom == 'pickedScissor'){
        comDisplay.innerHTML = '<img src="Images/Group 8.png" alt="scissor" srcset="">';
    }