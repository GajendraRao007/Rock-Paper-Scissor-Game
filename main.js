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

});
pickedPaper.addEventListener('click',()=>{
    let displayPaper =document.getElementById('you-picked');
    displayPaper.innerHTML = '<img src="Images/Group 8.png" alt="paper" srcset="">';
    console.log('picked paper');
    let options = document.getElementById('options');
    options.style.display = 'none';
})

pickedScissor.addEventListener('click',()=>{
    let displayScissor = document.getElementById('you-picked');
    displayScissor.innerHTML ='<img src="Images/Group 7.png" alt="scissor" srcset="">';
    console.log('picked scissor');
    let options = document.getElementById('options');
    options.style.display = 'none';
})
