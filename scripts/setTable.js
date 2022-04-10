const table = {};
const tableLinesCount = 15;
const tableColumnCount = 15;
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i=0; i < tableLinesCount; i++) {
    // line1: ["x", "B", "C"],
    const keyName = `line${i}`;

    const columnNumber = [];

    for (let t=0; t< tableColumnCount; t++) {

        const randomLetter = () => {
            const alphabetCount = alphabet.length
            const randomNumber = Math.floor(Math.random() * alphabetCount)
            const letter = alphabet[randomNumber]
      
            return letter
        }

        columnNumber[t]= randomLetter()
    }
    
    table[keyName] = columnNumber;
    
}

const containerSize = document.getElementById("wordHuntContainer");
containerSize.style.width= `${((32 + 2) * tableColumnCount)}px`;


