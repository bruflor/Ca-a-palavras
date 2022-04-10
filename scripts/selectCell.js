const selectedLetters = [];

const selectCell = (id) => {
  const selectedCell = document.getElementById(id);
  if (!selectedCell.classList.contains("selected")) {
    selectedCell.classList.add("selected");
    selectedLetters.push(id);
  } else {
    selectedCell.classList.remove("selected");

    const idIndex = selectedLetters.indexOf(id);
    selectedLetters.splice(idIndex, 1);
  }
  //   console.log(toValidate);
};
