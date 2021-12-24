let startQuizButton = document.querySelector("#startQuizButton");
const initialTime = 5;
let countDown = initialTime;
let countDownEl = document.querySelector("#countDownEl");


//start button handler start
var startQuizButtonHandler = function (event) {
  countDownEl.textContent = initialTime;
  let intervalId = setInterval(function () {
    countDown -= 1;
    countDownEl.textContent = countDown;
    if (countDown <= 0) {
      clearInterval(intervalId);
      countDown = initialTime;
    }

  }, 1000)


}




























//event listeners
startQuizButton.addEventListener("click", startQuizButtonHandler);

