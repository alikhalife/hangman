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
let correctLetters = [];



document.getElementById("btn").addEventListener("click", () => {
    var inputValue = input.value; // store/get value of input user and store it in var inputValue

    if (seenLetters.includes(inputValue)) {
        console.log("Type another letter");
        console.log("this is the seenLetters of another letter", seenLetters);
    }

    else {
        seenLetters.push(inputValue);
        console.log("seenLetters of new letters", seenLetters);

        if (word.includes(inputValue)) {
            let indicesOfLetter = indicesOfChar(word, inputValue) // get index of inputValue in word
            indicesOfLetter.forEach(function(index) {
                correctLetters[index] = inputValue 
            })
            
            // set inputValue in correctLetters at index of inputValue in word
            console.log("Ordered correctLetters", correctLetters);
        }
        else {
            console.log("sorry bro you lost a life") // counter should be here
        }

    }


})


function indicesOfChar(word, char) {
    let arrayOfIndices = [];

    for (let i = 0; i < word.length; i++) {
        if (word[i] == char) {
            arrayOfIndices.push(i);
        }
    }
    return arrayOfIndices;
}
