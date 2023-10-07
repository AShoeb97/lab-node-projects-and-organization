//part 1

const words = require("./words.json");

function allWords() {
    console.log(words);
}

allWords();

function firstTenWords() {
    const wordHolder = [];
    for (let i = 0; i < 10; i++) {
        wordHolder.push(words[i])
    }
    console.log(words.slice(0, 10))
}

firstTenWords();


function nextTenWords() {
    const wordHolder = [];
    for (let i = 10; i < 20; i++) {
        wordHolder.push(words[i])
    }
    console.log(words.slice(10, 20))
}
nextTenWords();

function firstXWords() {
    let x = words.length
    for (let i = 0; i < x; i++) {
        wordHolder.push(words[i])
    }
    console.log(words.slice(0, x))
}
firstXWords();

function subsetOfWords(x, y) {
    if (x >= 0 && y < words.length && x <= y) {
        const newSub = words.slice(x, y)
        console.log(newSub)
    }
}
subsetOfWords(5, 10);



//part 2

function wordsWithQ() {
    let newArray = [];
    for (let word of words) {
        if (word.includes("q")) {
            newArray.push(word)
        }
    }
    console.log(newArray)
}
wordsWithQ;

console.log(process.argv)
const letters = process.argv[2]

function findWordsWithLetter(letter) {
    const wordWithLetter = [];
    const wordWithoutLetter = [];

    for (let word of words) {
        if (!word.includes(letter)) {
            wordWithoutLetter.push(word)
        } else if (word.includes(letter)) {
            wordWithLetter.push(word)
        }
    }
    console.log(wordWithLetter)
}
findWordsWithLetter();

