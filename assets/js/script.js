var startButton = document.querySelector("#startBtn");
var viewHigh = document.querySelector("#viewHigh");
var timer = document.querySelector("#timer");
var question = document.querySelector("#question");
var answer = document.querySelector("#answer");
var questionBank = ["Question 1","Question 2","Question 3"]
var answerBank = ["Option 1", "Option 2", "Option 3", "Option 4"]
var secondsLeft = 60;

// answer("style", )


startButton.addEventListener("click", function() {
    setTime();
    Quiz();

});

viewHigh.addEventListener("click", function() {
   
});


function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Timer: " + secondsLeft;
      
  
      if(secondsLeft === 0) { 
        clearInterval(timerInterval);
        window.alert("You Lose!");
      }
  
    }, 1000);
  }

  function Quiz() {
    question.textContent = questionBank[i = 0];
    // answer("style", )
    answer.textContent = answerBank;

  }