let magicNumber = Math.trunc(Math.random() * 100);
let score = 10;
let highScore = 0;

function gameOver() {
  document.querySelector("#number").textContent = magicNumber;
  document.querySelector("#again-button").style.visibility = "visible";
  document.querySelector("#check-button").style.visibility = "hidden";
  document.querySelector("#input-box").style.visibility = "hidden";
}

function checkAnswer() {
  const inputValue = Number(document.querySelector("#input-box").value);
  if (!inputValue) {
    document.querySelector(
      "#message"
    ).textContent = `You didn't enter any number!`;
  } else {
    if (score >= 1) {
      if (inputValue === magicNumber) {
        gameOver();
        document.querySelector("#message").textContent = `YOU WON!`;
        document.querySelector("#message").style.color = "rgb(0, 197, 0)";
        document.querySelector("#number").style.backgroundColor =
          "rgb(0, 197, 0)";
        if (score > highScore) {
          highScore = score;
          document.querySelector("#high-score").textContent = highScore;
        }
      } else {
        document.querySelector("#message").textContent = `Given number is too ${
          inputValue > magicNumber ? "high" : "low"
        }`;
        score--;
        document.querySelector("#score").textContent = score;
      }
    } else {
      gameOver();
      document.querySelector("#message").textContent = `YOU LOST!`;
      document.querySelector("#message").style.color = "rgb(255, 0, 0)";
      document.querySelector("#number").style.backgroundColor =
        "rgb(255, 0, 0)";
      document.querySelector("#score").textContent = 0;
    }
  }
}

function playAgain() {
  magicNumber = Math.trunc(Math.random() * 100);
  document.querySelector("#again-button").style.visibility = "hidden";
  document.querySelector("#check-button").style.visibility = "visible";
  document.querySelector("#input-box").style.visibility = "visible";
  document.querySelector("#message").textContent = "Will you guess it?";
  document.querySelector("#number").textContent = "?";
  document.querySelector("#message").style.color = "rgb(255,255,255)";
  score = 10;
  document.querySelector("#score").textContent = score;
  document.querySelector("#input-box").value = "";
  document.querySelector("#number").style.backgroundColor = "rgb(255,255,255)";
}

document.querySelector("#score").textContent = score;
document.querySelector("#high-score").textContent = highScore;
document.querySelector("#check-button").addEventListener("click", checkAnswer);
document.querySelector("#again-button").addEventListener("click", playAgain);
