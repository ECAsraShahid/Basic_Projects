 let result = '';

    let score = JSON.parse(localStorage.getItem('Score')) || {
      Wins: 0, Losses: 0, Ties: 0
    }
    
    updateScore();

    let id;

    function autoplay(){

      if(!id){
        id = setInterval(function (){
        const yourMove = pickComputerMove();
        playGame(yourMove);
      },1000);
      }
      else{
        clearInterval(id);
        id=null;
      }
      
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
