const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const words = ["ban", "grup"];

const table = {
  //line:column
  line1: ["x", "B", "C"],
  line2: ["b", "a", "n"],
  line3: ["G", "H", "I"],
};

const processedTable = Object.keys(table);

//for find if the word exist in the table
processedTable.forEach((line) => {
  table[line].forEach((column) => {

    words.forEach((word) => {
      for (let i = 0; i < word.length; i++) {

        if (column === word[i]) {
          console.log(column);        
        }
        
      
    }
    });

  });
});


//validation through position selected in the table, not for the right word. 
