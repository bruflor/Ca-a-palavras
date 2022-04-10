// console.log(truePositions);

const toValidate = [];

const validation = () => {
  toValidate.length = 0;
  truePositions.forEach((lettersPositions) => {
    lettersPositions.forEach((position) => {
      const idPosition = `L${position[0]}_C${position[1]}`;
      const idValidate = document.getElementById(idPosition);

      toValidate.push(idPosition);
    });
  });
  const sortedValidate = JSON.stringify(toValidate.sort());
  const sortedSelectedLetters = JSON.stringify(selectedLetters.sort());

  if (sortedValidate === sortedSelectedLetters) {
    alert("Congrats! You found all words that we set");
  } else {
    alert("Try again dummy!");
  }
};
