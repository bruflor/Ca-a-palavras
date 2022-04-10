const table = {};
const tableLinesCount = 10;
const tableColumnCount = 5;
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


//for tableLinesCount number create a key named lineX with the value of tableColumnCount as an array
//append this new line to the object table2

for (let i=0; i < tableLinesCount; i++) {
    // line1: ["x", "B", "C"],
    const keyName = `line${i}`;

    const columnNumber = [];

    for (let t=0; t< tableColumnCount; t++) {

        const randomLetter = () => {
            const alphabetCount = alphabet.length

            console.log(alphabetCount)

            const randomNumber = Math.floor(Math.random() * alphabetCount)

            const letter = alphabet[randomNumber]
        
            return letter
        }

        columnNumber[t]= randomLetter()
        
    }
    
    table[keyName] = columnNumber;
    // console.log(columnNumber)


    
}

// console.log(table)

