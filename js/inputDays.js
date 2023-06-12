function createSelectDays() {
  const selectTag = document.getElementById("days")
  for(let i=1; i<15; i++) {
    const selectOption = document.createElement("option")
    selectOption.value = i
    selectOption.innerText = i
    selectTag.appendChild(selectOption)
  }
}
createSelectDays()