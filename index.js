var randomNumber1 = Math.round((Math.random()*5) + 1);
var randomNumber2 = Math.round((Math.random()*5) + 1);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 has won!";
}
else {
  document.querySelector("h1").innerHTML = "Player 2 has won!";
}


//document.querySelector("a").setAttribute("href", "https://www.bing.com");
