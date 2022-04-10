const container = document.getElementById("wordHuntContainer");

const processedTable = Object.keys(table);

processedTable.forEach((line, lIndex) => {
  table[line].forEach((column, cIndex) => {

    const cellId = `L${lIndex}_C${cIndex}`;
    const tableCell = document.createElement("div");
    
    tableCell.setAttribute("class", "tableCell");
    tableCell.setAttribute("id", cellId);
    
    tableCell.addEventListener("click", () => {
      selectCell(cellId);
    });

    container.appendChild(tableCell);
    tableCell.innerHTML = column;
  });
});
