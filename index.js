
//    Guess and Rock!
// 1. There are 10 stages to Rock
// 2. Guess the correct number to enter the next stage
// 3. You can only try thrice to get to the next stage
// 4. For every right guess, you earn a points
//    Common lets Rock!!!!!!!!


let userName = prompt('Enter Username:');
let range = 2;
let compNumber;
let score = 0;
let stage = 1;

startGame(stage, score, range);

function startGame(stage, score, range) {

  let trials = 0;
  compNumber = Math.floor(Math.random() * range) + 1;

  alert(`Hi ${userName}. \nWelcome to Guess and Rock ${stage}. \nScore: ${score}.`);

  let userNumber;
  while (userNumber != compNumber && trials < 3) {

    userNumber = prompt(`Guess a number between 1 - ${range}:`);

    if (userNumber == compNumber) {
      console.clear()
      alert(`You Rock!!!!! :)... The number is ${compNumber}`);
      score += 1;
      stage++;
      range++;
      nextStage(stage, score, range);
    } else if (userNumber < compNumber) {
      console.clear();
      alert(`Try a higher number :(... ${3 - trials - 1 != 1 ? 3 - trials - 1 + ' more chances' : 3 - trials - 1 + ' more chance'}. Try again!`);
      // score ? score -= 0.2 : score = 0;
      console.log(`Score: ${score}`);
    } else if (userNumber > compNumber) {
      console.clear();
      alert(`Try a lesser number :(... ${3 - trials - 1 != 1 ? 3 - trials - 1 + ' more chances' : 3 - trials - 1 + ' more chance'}. Try again!`);
      // score ? score -= 0.2 : score = 0;
      console.log(`Score: ${score}`);
    } else {
      alert(`Oppppppps... try again...`)
    }

    trials++

  }
  console.clear()
  console.log(`You have exhausted your trials. \nScore ${score}`);

  // if(confirm(`Play Again?`)){
  //   startGame();
  // }else{
  //   endGame(score);
  // }
}

function nextStage(stage, score, range) {
  if (stage > 10) {
    console.clear()
    console.log(`Congrations!!! lets have coffee. You Rock!!!!. \nYour score is ${score} `);
  } else {
    if (confirm(`\n\nCongrations!!! \nScore: ${score}\n\nNext Stage?`)) {

      console.clear();
      startGame(stage, score, range)
    } else {
      endGame(score)
    }
  }
}

function endGame(score) {
  console.clear();
  alert(`Game end. \nScore ${score}`)
}