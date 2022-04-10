
const selectCell = (id) =>{
    const selectedCell = document.getElementById(id)
   if (!selectedCell.classList.contains("selected")) {
       selectedCell.classList.add("selected")

   } else {
       selectedCell.classList.remove("selected")

   }

}