var winsCounter = 0;
var randomNum = 0;
var randomString = Math.floor(Math.random() * 11) + 1;

$(document).ready(function() {
  $("#btn1").click(function() {
    $("#gem1Value").append(randomString);
  });
});

