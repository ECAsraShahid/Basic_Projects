let result = '';

let score = JSON.parse(localStorage.getItem('Score')) || {
  Wins: 0, Losses: 0, Ties: 0
}

updateScore();

let id;

function autoplay(){

    if(!id){
      id = setInterval( () => {
      const yourMove = pickComputerMove();
      playGame(yourMove);
    },1000);

    document.querySelector('.autoplay-button').innerHTML='Stop Playing';
    
    }
    else{
      clearInterval(id);
      id=null;
      document.querySelector('.autoplay-button').innerHTML='Auto Play';
    }
  
}

document.addEventListener('keydown' , (event) => {
  if (event.key === 'r') playGame('rock');
  else if (event.key === 'p') playGame('paper');
  else if (event.key === 's') playGame('scissors');
  else if (event.key === 'a') autoplay();
  else if (event.key === 'Backspace'){
    reset();
  }

});

const buttonElement = document.querySelector('.rock');
buttonElement.addEventListener('click' , () => playGame('rock'));

const buttonElement2 = document.querySelector('.paper');
buttonElement2.addEventListener('click', () => playGame('paper'));

const buttonElement3 = document.querySelector('.scissor');
buttonElement3.addEventListener('click', () => playGame('scissors'));

const buttonElement4 = document.querySelector('.reset-button');
buttonElement4.addEventListener('click', () => {
  reset();
});

const buttonElement5 = document.querySelector('.autoplay-button');
buttonElement5.addEventListener('click',() => autoplay());




function reset(){

    const buttonElement =document.querySelector('.confirmation-mssg');
    
    buttonElement.innerHTML = `Are you sure you want to reset the score?
    <button class="yes-button">Yes</button>
    <button class="no-button">No</button>`;

    const buttonElement6 = document.querySelector('.yes-button');
    buttonElement6.addEventListener('click' , () => {
      score= {
        Wins: 0,
        Losses: 0,
        Ties: 0
      }
      buttonElement.innerHTML = '';
      updateScore();
      localStorage.setItem('Score',JSON.stringify(score)); 
    } );
      
    const buttonElement7 = document.querySelector('.no-button');
    buttonElement7.addEventListener('click' , () => {  
        buttonElement.innerHTML = '';
      });
}

function pickComputerMove() {

  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return 'rock';
  }

  else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    return 'paper';
  }

  else if (randomNumber > 2 / 3) {
    return 'scissors';

  }

}

function playGame(yourMove) {

  let computerMove = pickComputerMove();

  if (yourMove === computerMove) {
    result = 'Tie';
  }

  else if (yourMove === 'rock' && computerMove === 'scissors' || yourMove === 'paper' && computerMove === 'rock' || yourMove === 'scissors' && computerMove === 'paper') {
    result = 'You Win';
  }

  else {
    result = 'You Lose';
  }
  displayResult();

  document.querySelector('.result-para').innerHTML=result;

  document.querySelector('.selectedMoves').innerHTML=`You
<img class="move-icon" src="images/${yourMove}-emoji.png">
<img class="move-icon" src="images/${computerMove}-emoji.png">
Computer`;

}

function displayResult() {

  if (result === 'You Win') {
    score.Wins++;
  }

  else if (result === 'You Lose') {
    score.Losses++;
  }
  else if (result === 'Tie') {
    score.Ties++;
  }

  updateScore();
  localStorage.setItem('Score' , JSON.stringify(score) );

}

function updateScore(){

  document.querySelector('.scores-para').innerHTML=`Wins:${score.Wins}, Losses:${score.Losses},Ties:${score.Ties}`;

}
