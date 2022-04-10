const wordStartLine = 0;
const wordStartColumn = 0;
const huntedWords = [
  {
    word: "BanaNA",
    direction: "Horizontal",
    startLineNumber: 0,
    startColumnNumber: 0,
  },

  {
    word: "AVOCADO",
    direction: "Vertical",
    startLineNumber: 5,
    startColumnNumber: 9,
  },
  {
    word: "grape",
    direction: "diagonal",
    startLineNumber: 2,
    startColumnNumber: 7,
  },
];

const truePositions = [];

huntedWords.forEach((wordObject) => {
  const wordPositionObject = {};
  const wordPosition = [];

  const wordLength = wordObject.word.length;
  if (wordObject.direction === "Horizontal") {
    for (let i = 0; i < wordLength; i++) {
      const myCell = document.getElementById(
        `L${wordObject.startLineNumber}_C${wordObject.startColumnNumber + i}`
      );
      myCell.innerHTML = wordObject.word[i].toUpperCase();

      wordPosition.push([
        wordObject.startLineNumber,
        wordObject.startColumnNumber + i,
      ]);
    }
  } else if (wordObject.direction === "Vertical") {
    for (let i = 0; i < wordLength; i++) {
      const myCell = document.getElementById(
        `L${wordObject.startLineNumber + i}_C${wordObject.startColumnNumber}`
      );
      myCell.innerHTML = wordObject.word[i].toUpperCase();

      wordPosition.push([
        wordObject.startLineNumber + i,
        wordObject.startColumnNumber,
      ]);
    }
  } else {
    for (let i = 0; i < wordLength; i++) {
      const myCell = document.getElementById(
        `L${wordObject.startLineNumber + i}_C${
          wordObject.startColumnNumber + i
        }`
      );
      myCell.innerHTML = wordObject.word[i].toUpperCase();

      wordPosition.push([
        wordObject.startLineNumber + i,
        wordObject.startColumnNumber + i,
      ]);
    }
  }
  truePositions.push(wordPosition);
});
// console.log(wordPositionObject);
// console.log(truePositions);
