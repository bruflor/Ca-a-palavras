//get all words in a list
// slipt each word in to letters

//set a position in the table for the first letter of the word
// set a position for the each other letter of the word, that means first letter position + 1, +2.. so on.

const wordStartLine = 0;
const wordStartColumn = 0;
const huntedWords = ["BANANA", "AVOCADO", "MELON", "GRAPE"];

huntedWords.forEach((word, wordIndex) => {
    // console.log(word.length)
    const wordLength = word.length
    for (let i =0; i<wordLength; i++){
        const myCell = document.getElementById(`L${i}_C0`);
        myCell.innerHTML=huntedWords[wordIndex][i];
    }
})

// table[`line${wordStartLine}`][wordStartColumn]="H"
// console.log(table[`line${wordStartLine}`][wordStartColumn])

// const myCell1 = document.getElementById("L0_C0");
// myCell1.innerHTML=huntedWords[0][0];

