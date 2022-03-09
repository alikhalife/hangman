// select a word randmly from a list - checked
// get user input - letter - checked 
// check if letter is in word
// if true - show letter
// if false - loses one life & can't pick this letter again
// check if user wins or loses - if game over, reset the game



var words = ["blue", "red", "yellow", "green"] // creating an array of colors
var word = words[Math.floor(Math.random() * words.length)] // creating a var that will randomly select one element of my variable
console.log(word)

var lives = 10;
document.getElementById("lives").innerHTML = "You have " + lives + " lives";

var input = document.getElementById("input") // creating input var for user input
let seenLetters = [];



document.getElementById("btn").addEventListener("click", () => {
    var inputValue = input.value; // store/get value of input user and store it in var inputValue
    
    if (seenLetters.includes(inputValue)) {
        console.log("Type another letter");
        console.log(seenLetters);
    }

    else {
        seenLetters.push(inputValue);
        console.log(seenLetters);

        if(word.includes(inputValue)) {
            console.log(inputValue);
        }
        else {
            console.log("sorry bro you lost a life") // counter should be here
        }

    }

   

    



})





