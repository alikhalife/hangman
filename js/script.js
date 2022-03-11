// select a word randmly from a list - checked
// get user input - letter - checked 
// check if letter is in word
// if true - show letter
// if false - loses one life & can't pick this letter again
// check if user wins or loses - if game over, reset the game



var randomwords = ["blue", "red", "yellow", "green", "purple", "orange"];// creating an array of colors
var randomword = randomwords[Math.floor(Math.random() * randomwords.length)]; // creating a var that will randomly select one element of my variable
let seenLetters = [];
let correctLetters = new Array(randomword.length);
let letters;
var lives = 3;
let divLetters = document.getElementById("letters")
divLetters.innerHTML = letterButtons()
var hiddenWord = document.getElementById("word");
hiddenWord.innerHTML = ("Guess the word: " + correctLetters);


console.log(randomword);
document.getElementById("lives").innerHTML = "You have " + lives + " lives";





// Click event 
divLetters.addEventListener("click", (event) => { // c'est ça qu'il faut changer
    var inputValue = event.target.name; // store/get value of input user and store it in var inputValue

    if (seenLetters.includes(inputValue)) {
        console.log("Type another letter");
        console.log("this is the seenLetters: ", seenLetters);
    }

    else {
        seenLetters.push(inputValue);//inputValue);
        console.log("seenLetters", seenLetters);

        if (randomword.includes(inputValue)) {
            let indicesOfLetter = indicesOfChar(randomword, inputValue) // get index of inputValue in word
            indicesOfLetter.forEach(function (index) {
                correctLetters[index] = inputValue
            })
            console.log("correct Letters: ", correctLetters)
            // set inputValue in correctLetters at index of inputValue in word
            hiddenWord.innerHTML = ("Guess the word: " + correctLetters);

            if(correctLetters.join("") == randomword){
                alert("Congratulations! You won!!");
                resetGame();
            }
        }
        else {
            console.log("sorry bro you lost a life")
            lives-- 
            console.log(lives)
            document.getElementById("lives").innerHTML = "You have " + lives + " lives left.";

            if(lives == 0) {
            alert("You lost! You can try again." + "The word was: " + randomword);
            resetGame();

            }
        }
    }
})



// function that gets indices of character in randomword
function indicesOfChar(word, char) {
    let arrayOfIndices = [];

    for (let i = 0; i < word.length; i++) {
        if (word[i] == char) {
            arrayOfIndices.push(i);
        }
    }
    return arrayOfIndices;
}



// Creating letters buttons

function letterButtons() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let letterBtn = "";

    for (let i = 0; i < alphabet.length; i++) {
        var letter = "<button class='letter' name=" + alphabet[i] + ">" + alphabet[i] + "</button>";
        letterBtn = letterBtn + letter;
    }

    return letterBtn;
}


function resetGame(){

    lives = 2;
    document.getElementById("lives").innerHTML = "You have " + lives + " lives."; // reset lives
   
    randomword = randomwords[Math.floor(Math.random() * randomwords.length)]; 
    console.log(randomword)// reset randomword

    correctLetters = new Array(randomword.length); // reset correctLetters
    hiddenWord.innerHTML = ("Guess the word: " + correctLetters);


    // reset letter buttons
}

// function myfunction(correctLetters) {
//    let ligne = "";

//     for (let i = 0; i < correctLetters.length; i++){
    
//     }
// }