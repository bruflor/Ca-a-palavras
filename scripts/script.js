const wordStartLine = 0;
const wordStartColumn = 0;
const huntedWords = [
  {
    word: "BANANA",
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
];

huntedWords.forEach((wordObject) => {
  const wordLength = wordObject.word.length;
  if (wordObject.direction === "Horizontal") {
    for (let i = 0; i < wordLength; i++) {
      const myCell = document.getElementById(
        `L${wordObject.startLineNumber}_C${wordObject.startColumnNumber + i}`
      );
      myCell.innerHTML = wordObject.word[i];
      console.log(myCell);
    }
  } else if (wordObject.direction === "Vertical") {
    for (let i = 0; i < wordLength; i++) {
      const myCell = document.getElementById(
        `L${wordObject.startLineNumber + i}_C${wordObject.startColumnNumber}`
      );
      myCell.innerHTML = wordObject.word[i];
      console.log(myCell);
    }
  } else {
    for (let i = 0; i < wordLength; i++) {
      const myCell = document.getElementById(
        `L${wordObject.startLineNumber + i}_C${wordObject.startColumnNumber+i}`
      );
      myCell.innerHTML = wordObject.word[i];
      console.log(myCell);
    }
  }
});


