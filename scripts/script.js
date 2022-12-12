const randNum = Math.floor(Math.random() * 20);

const checkBtn = document.getElementById('check-btn');
const userInput = document.getElementById('guess');
const message = document.getElementById('guess-message');

console.log(userInput);

function checkButton(){
    console.log('checking number...')
    if(userInput.value == randNum){
        console.log('You guessed the right number!');
        message.textContent = 'You guessed the right number!';
    }else if(userInput.value > randNum){
        console.log('You guessed too high');
        message.textContent = 'You guessed too high';
    }else if(userInput.value < randNum){
        console.log('You guessed low');
        message.textContent = 'You guessed too low';
    }
}

checkBtn.addEventListener('click', checkButton);