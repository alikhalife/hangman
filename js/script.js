// select a word randmly from a list - checked
// get user input - letter - checked 
// check if letter is in word
// if true - show letter
// if false - loses one life & can't pick this letter again
// check if user wins or loses - if game over, reset the game



var randomwords = ["blue", "red", "yellow", "green"];// creating an array of colors
var randomword = randomwords[Math.floor(Math.random() * randomwords.length)]; // creating a var that will randomly select one element of my variable
console.log(randomword);

var input = document.getElementById("input"); // creating input var for user input
let seenLetters = [];
let correctLetters = new Array(randomword.length) ;
let letters;

var lives = 10;
document.getElementById("lives").innerHTML = "You have " + lives + " lives";

var hiddenWord = document.getElementById("word");
hiddenWord.innerHTML = ("Guess the word: " + correctLetters);


console.log("Here, correctLetters should be an empty array: " + correctLetters)


document.getElementById("btn").addEventListener("click", (event) => { // c'est ça qu'il faut changer
    var inputValue = input.value; // store/get value of input user and store it in var inputValue
    console.log(event.target.name)


    if (seenLetters.includes(inputValue)) {
        console.log("Type another letter");
        console.log("this is the seenLetters of another letter", seenLetters);
    }

    else {
        seenLetters.push(divLetters);//inputValue);
        console.log("seenLetters of new letters", seenLetters);

        if (randomword.includes(divLetters)) {
            let indicesOfLetter = indicesOfChar(randomword, divLetters) // get index of inputValue in word
            indicesOfLetter.forEach(function (index) {
                correctLetters[index] = divLetters //inputValue
            })

            // set inputValue in correctLetters at index of inputValue in word
            console.log("Ordered correctLetters", correctLetters);
            
            console.log("Here, correctLetters should be a filled array: " + correctLetters);
            hiddenWord.innerHTML = ("Guess the word: " + correctLetters);
           word =  myword(correctLetters);
           console.log("This is zi " + word)


        }
        else {
            console.log("sorry bro you lost a life")
            lives-- // counter should be here
            console.log(lives)
            document.getElementById("lives").innerHTML = "You have " + lives + " lives left.";
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
    


// creating a function that will store correctLetters and show it on browser
// prendre un array et rendre du html soit un string 
function myword(correctLetters) {
    word = document.getElementById("word")
    var divWord = document.createElement("div"); // creer un div 
    divWord.style.display = "flex";
    divWord.style.alignContent = "space-around";
    divWord.style.justifyContent ="center";

    for (let i = 0; i < correctLetters.length; i++) {
        divWord.id = "divWord"
        var divLetter = document.createElement("div")
        correctLetters[i] = " _ "
        divLetter.innerHTML = correctLetters[i];
       
        // console.log("CorrectLetters Length: " + correctLetters.length)
        // console.log("divLetter's value: " + divLetter)

        word.appendChild(divWord);
        divWord.appendChild(divLetter);
        
        console.log("i: " + correctLetters[i])
        console.log("this is divWord " + divWord)
    }
     // dans cette div qui va contenir les correctLetters
    // pour ce faire, je vais iterer sur correctLetters (qui est un parametre)
    // à chaque itération créer un div tag
    // le contenu de ce div sera la lettre surlaquelle je me trouve lors de l'itération
    // appendChild au premier div que j'ai créer avant de commencer de loop sur correctLetters
    
} 

myword(correctLetters); //correctLetters doit être définit en fonction du length de mon random word





// Creating letters buttons

let divLetters = document.getElementById("letters")
let div = document.createElement('div')

div.id = "divLetter"
div.innerHTML = letterButtons()
divLetters.appendChild(div)
console.log(divLetters)
divLetters.addEventListener("click", (event) => {
console.log(event.target.name)
})

function letterButtons () {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let letterBtn = "";
    
    for (let i = 0; i < alphabet.length; i++){
        var letter = "<button class='letter' name=" + alphabet[i] +">" + alphabet[i] + "</button>";
        letterBtn = letterBtn + letter;
    }

    return letterBtn;
}



