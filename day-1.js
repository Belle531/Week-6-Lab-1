let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

function day1Part1() {
  let playerOne;
  playerOne = {};
  playerOne.name = prompt("What is your name?");
  playerOne.hiScore = prompt("What is your all time hi-score?");
  playerOne.favoriteGame = prompt("What is your favorite game?");

  messageParagraph.innerHTML = `Hi, ${playerOne.name}! Can you beat your hi score of ${playerOne.hiScore}? You love playing ${playerOne.favoriteGame}.`;
}

part1.onclick = day1Part1;


function day1Part2() {
  let customer = {};
  customer.name = prompt("What is your name?");
  customer.address = prompt("What is your address?");
  customer.phoneNumber = prompt("What is your phone number?")
  
  messageParagraph.innerHTML = `Hi, ${customer.name}! Your current address is ${customer.address}, and your phone number is ${customer.phoneNumber}.`;
}
 
part2.onclick = day1Part2;

function day1Part3() {
  let pet =  {};
  pet.name = prompt("What is your pet's name?");
  pet.type = prompt("What type of pet do you have?");

  messageParagraph.innerHTML = 'Your pet ${pet.name} is a ${pet.type}.';
}
part3.onclick = day1Part3;

function day1Part4() {
  alert("hello how are you?"); 
}

part4.onclick = day1Part4;