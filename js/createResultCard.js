/**
 * table head data
 */
const theadData = ['','오전','점심메뉴','오후','저녁메뉴']

/**
 * @param {Array} answerData jsonArray
 */
function createTable(answerData) {
  const resultPart = document.getElementById("resultPart")
  resultPart.innerHTML =''
  const resultDiv = document.createElement("div")
  const resultTable = document.createElement("table")

  const tableHead = document.createElement("thead")
  tableHead.appendChild(createTableRow("th",theadData))
  resultTable.appendChild(tableHead)
  
  const tableBody = document.createElement("tbody")
  for(const [dayIdx,rowData] of answerData.entries()) {
    const rowDataList = []
    const days = `DAY ${dayIdx+1}`
    rowDataList.push(days)
    const schedules = rowData[days]
    for(const scheduleData in schedules){
      rowDataList.push(schedules[scheduleData])
    }
    tableBody.appendChild(createTableRow("td",rowDataList,days))
  }
  resultTable.appendChild(tableBody)
  resultDiv.appendChild(resultTable)
  resultPart.appendChild(regenerationBtn)

  const regenerationBtn = document.createElement("button")
  regenerationBtn.id = "regenerationBtn"
  regenerationBtn.addEventListener("click",regeneration)
  regenerationBtn.innerText = "재생성"
  resultPart.appendChild(resultDiv)
}

/**
 * 
 * @param {String} tag tagName 
 * @param {Array} rowData tableRow 입력 table data array
 * @param {String} days tableRow DAY name
 * @returns tr node
 */
function createTableRow(tag,rowData, days='') {
  const tableRow = document.createElement("tr")
  for(const [idx,data] of rowData.entries()) {
    tableRow.appendChild(createTableData(tag,data,idx,days))
  }
  return tableRow
}

/**
 * 
 * @param {String} tag tagName
 * @param {String} data td inputText
 * 
 * @param {Int} idx theadData idx
 * @param {String} days tableRow DAY name
 * @returns td node
 */
function createTableData(tag,data,idx=-1,days='') {
  const resultTd = document.createElement(tag)
  if(idx > 0 && tag === "td"){
    const resultLabel = document.createElement("label")
    const inputCheck = document.createElement("input")
    inputCheck.type = "checkbox"
    inputCheck.name = days
    inputCheck.value = theadData[idx]
    resultLabel.appendChild(inputCheck)
    const resultText = document.createElement("p")
    resultText.innerText = data
    resultLabel.appendChild(resultText)
    resultTd.appendChild(resultLabel)
  }else{
    resultTd.innerText = data
  }
  return resultTd
}