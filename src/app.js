import "./style.css";

var number = document.getElementById("number");
var suit = document.getElementsByClassName("icon");

window.onload = function() {
  var cardNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  var randomNumber = Math.floor(Math.random() * 13);
  number.innerHTML = cardNumbers[randomNumber];

  var cardSuit = ["♥", "♦", "♠", "♣"];
  var randomSuit = Math.floor(Math.random() * 4);
  if (randomSuit < 2) {
    suit[0].className = "icon red";
    suit[1].className = "icon red";
  }
  for (let i = 0; i < suit.length; i++)
    suit[i].innerHTML = cardSuit[randomSuit];
};
