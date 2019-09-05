



// GLOBAL VARIABLES
var winsCounter = 0;
var losesCounter = 0;
var targetNum = 0; // number to guess TODO: create div to display value
var valueCounter = 0; 

// FUNCTIONS
function getRandomNum() {
  return Math.floor(Math.random() * 11)+1;
}


// METHODS
$(document).ready(function() {
  $('#valueCounter').text(valueCounter)
  // SET UP GAME
  // 1. Generate a numberToGuess (targetNumber)
  // 2. Initialize a starting valueCounter
  // 3. Assign each crustal a random value between 1 - 12
  
  //  PLAY GAME
  // 1. Player clicks crystal
  // 2. Grab value of crystal  (using jQuery)
  // 3. Add value of crystal to valueCounter
  // 4. If  valueCounter = trgetNumber ---> wins++  **
  // else if valueCounter > targetNumber -->> losses++ **
  
  let random1 = getRandomNum()
 $("#btn1").attr('value', random1) 

 let random2 = getRandomNum()
 $("#btn2").attr('value', random2) 

 let random3 = getRandomNum()
 $("#btn3").attr('value', random3) 
 
 let random4 = getRandomNum()
 $("#btn4").attr('value', random4) 

  $(".diamond").on('click', function() { 
    let value = parseInt($(this).attr('value'));
    // console.log(value);
   valueCounter += value  
    // console.log('>>>>>>>>>>', valueCounter);
    $('#valueCounter').text(valueCounter)
    
  });
  
  


})

