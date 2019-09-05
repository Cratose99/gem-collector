// GLOBAL VARIABLES
var winsCounter = 0;
var losesCounter = 0;
var targetNum = tarNumber();
var valueCounter = 0;

// FUNCTIONS
function getRandomNum() {
  return Math.floor(Math.random() * 11) + 1;
}

function genRandomValues() {
  for (let i = 1; i < 5; i++) {
    let random1 = getRandomNum();
    $(`#btn${i}`).attr("value", random1); // "```````" is template literals
  }
}
function tarNumber() {
  var min = 19;
  var max = 120;
  return Math.floor(Math.random() * (+max - +min)) + +min;
}
function winsLoses() {
  if (valueCounter === targetNum) {
    var winDiv = document.getElementById("wins");
    winsCounter++;
    winDiv.textContent = winsCounter;
    valueCounter = 0;
    $("#valueCounter").text(valueCounter);
    targetNum = tarNumber();
    $("#targetNumber").text(targetNum);
    genRandomValues();
  } else if (valueCounter > targetNum) {
    var losesDiv = document.getElementById("loses");
    losesCounter++;
    losesDiv.textContent = losesCounter;
    valueCounter = 0;
    $("#valueCounter").text(valueCounter);
    targetNum = tarNumber();
    $("#targetNumber").text(targetNum);
    genRandomValues()
  }
}

// METHODS
$(document).ready(function() {
  $("#valueCounter").text(valueCounter);
  $("#targetNumber").text(targetNum);
  $("#wins").text(winsCounter);
  $("#loses").text(losesCounter);
  // SET UP GAME
  // 1. Generate a numberToGuess (targetNumber) coplete
  // 2. Initialize a starting valueCounter complete
  // 3. Assign each crustal a random value between 1 - 12 compelete

  //  PLAY GAME
  // 1. Player clicks crystal
  // 2. Grab value of crystal  (using jQuery)
  // 3. Add value of crystal to valueCounter completed
  // 4. If  valueCounter = trgetNumber ---> wins++  **
  // else if valueCounter > targetNumber -->> losses++ **

  genRandomValues();
  // winsLoses()

  $(".diamond").on("click", function() {
    let value = parseInt($(this).attr("value"));
    // console.log(value);
    valueCounter += value;
    // console.log('>>>>>>>>>>', valueCounter);
    $("#valueCounter").text(valueCounter);
    winsLoses()
    

    
  });
  // winsLoses()
});
