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
var lives = 9;
let divLetters = document.getElementById("letters")
divLetters.innerHTML = letterButtons()
var hiddenWord = document.getElementById("word");
hiddenWord.innerHTML = ("Guess the word: " + myfunction(correctLetters));


console.log(randomword);
document.getElementById("lives").innerHTML = "You have " + lives + " lives";



// Canvas hangman
const canvas = document.getElementById('hangman');
const context = canvas.getContext("2d");

clearCanvas = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
}

Draw = (part) => {
    switch (part) {
        case 'gallows':
            context.strokeStyle = '#444';
            context.lineWidth = 10;
            context.beginPath();
            context.moveTo(175, 225);
            context.lineTo(5, 225);
            context.moveTo(40, 225);
            context.lineTo(25, 5);
            context.lineTo(100, 5);
            context.lineTo(100, 25);
            context.stroke();
            break;

        case 'head':
            context.lineWidth = 5;
            context.beginPath();
            context.arc(100, 50, 25, 0, Math.PI * 2, true);
            context.closePath();
            context.stroke();
            break;

        case 'body':
            context.beginPath();
            context.moveTo(100, 75);
            context.lineTo(100, 140);
            context.stroke();
            break;

        case 'rightHarm':
            context.beginPath();
            context.moveTo(100, 85);
            context.lineTo(60, 100);
            context.stroke();
            break;

        case 'leftHarm':
            context.beginPath();
            context.moveTo(100, 85);
            context.lineTo(140, 100);
            context.stroke();
            break;

        case 'rightLeg':
            context.beginPath();
            context.moveTo(100, 140);
            context.lineTo(80, 190);
            context.stroke();
            break;

        case 'rightFoot':
            context.beginPath();
            context.moveTo(82, 190);
            context.lineTo(70, 185);
            context.stroke();
            break;

        case 'leftLeg':
            context.beginPath();
            context.moveTo(100, 140);
            context.lineTo(125, 190);
            context.stroke();
            break;

        case 'leftFoot':
            context.beginPath();
            context.moveTo(122, 190);
            context.lineTo(135, 185);
            context.stroke();
            break;
    }
}

const draws = [
    'gallows',
    'head',
    'body',
    'rightHarm',
    'leftHarm',
    'rightLeg',
    'leftLeg',
    'rightFoot',
    'leftFoot',
]
var step = 0;




// Click event will start the game
divLetters.addEventListener("click", (event) => { // c'est ça qu'il faut changer
    var inputValue = event.target.name; // store/get value of clicked letter and store it in var inputValue


    if (seenLetters.includes(inputValue)) {
        document.getElementById("seen-letters").innerHTML = "Type another letter";
        console.log(seenLetters)

    }

    else {
        seenLetters.push(inputValue);//inputValue);
        event.target.disabled = true;

        if (randomword.includes(inputValue)) {
            let indicesOfLetter = indicesOfChar(randomword, inputValue) // get index of inputValue in word
            indicesOfLetter.forEach(function (index) {
                correctLetters[index] = inputValue
            })
            // set inputValue in correctLetters at index of inputValue in word
            hiddenWord.innerHTML = ("Guess the word: " + myfunction(correctLetters));

            if (correctLetters.join("") == randomword) {
                alert("Congratulations! You won!!");
                resetGame();
            }
        }
        else {
            lives--
            document.getElementById("lives").innerHTML = "You have " + lives + " lives left.";
            Draw(draws[step++])
            if (undefined === draws[step]) this.disabled = true;

            if (lives == 0) {
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


function resetGame() {

    lives = 10;
    document.getElementById("lives").innerHTML = "You have " + lives + " lives."; // reset lives

    randomword = randomwords[Math.floor(Math.random() * randomwords.length)];
    console.log(randomword)// reset randomword

    correctLetters = new Array(randomword.length); // reset correctLetters
    hiddenWord.innerHTML = ("Guess the word: " + myfunction(correctLetters));


    var resetLetters = document.querySelectorAll(".letter")
    resetLetters.forEach(function (btnElement) {
        btnElement.disabled = false;
    })// reset letter buttons

    seenLetters = [];

    clearCanvas()
    step = 0
    next.disabled = false
}

function myfunction(correctLetters) {
    let ligne = "";

    for (let i = 0; i < correctLetters.length; i++) {
        if (correctLetters[i] == undefined) {
            ligne = ligne + " " + "_"
        }
        else {
            ligne = ligne + correctLetters[i]
        }
    }
    return ligne;
}