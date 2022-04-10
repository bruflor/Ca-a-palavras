const toValidate = [];

const selectCell = (id) => {
  const selectedCell = document.getElementById(id);
  if (!selectedCell.classList.contains("selected")) {
    selectedCell.classList.add("selected");
    toValidate.push(id);
  } else {
    selectedCell.classList.remove("selected");

    const idIndex = toValidate.indexOf(id);
    toValidate.splice(idIndex, 1);
  }
  //   console.log(toValidate);
};
