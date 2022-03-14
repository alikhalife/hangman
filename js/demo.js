
function myfunction(word, char) {
    let a = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] == char) {
            a.push(i)
        }
    }
    return a
}

myfunction("camille", "l");


const letters = ["a", "b", "c"];

letters.forEach(function myfunction(letter) { console.log(letter) })
console.log(letters.toString())


function myword(letters) {
    var divWord = document.createElement("div"); // creer un div 
    console.log("Hello World")
    for (let i = 0; i < letters.length; i++) {
    var divLetter = document.createElement("div")
        divLetter = letters[i];
    document.divWord.appendChild(divLetter)
    
    }
        // dans cette div qui va contenir les correctLetters
    // pour ce faire, je vais iterer sur correctLetters (qui est  un parametre)
    // à chaque itération créer un div tag
    // le contenu de ce div sera la lettre surlaquelle je me trouve lors de l'itération
    // appendChild au premier div que j'ai créer avant de commencer de loop sur correctLetters
    
} // prendre un array et rendre du html (soit un string )

myword(letters);