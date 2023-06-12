/**
 * 
 * @param {json} answerData json 타입의 일정(schedule)
 * create resultCard
 */

/**
 * table head data
 */
const theadData = ['','오전','점심메뉴','오후','저녁메뉴']

/**
 * @param {Array} answerData jsonArray
 */
function createTable(answerData) {
  const resultPart = document.getElementById("resultPart")
  const resultDiv = document.createElement("div")
  const resultTable = document.createElement("table")

  const tableHead = document.createElement("thead")
  tableHead.appendChild(createTableRow("th",theadData))
  resultTable.appendChild(tableHead)
  const tableBody = document.createElement("tbody")
  for(const [dayIdx,rowData] of answerData.entries()) {
    const rowDataList = []
    rowDataList.push(`DAY ${dayIdx+1}`)
    const schedules = rowData[`DAY ${dayIdx+1}`]
    for(const scheduleData in schedules){
      rowDataList.push(schedules[scheduleData])
    }
    tableBody.appendChild(createTableRow("td",rowDataList))
  }
  resultTable.appendChild(tableBody)
  resultDiv.appendChild(resultTable)
  resultPart.appendChild(resultDiv)
}

/**
 * 
 * @param {String} tag tagName 
 * @param {Array} rowData tableRow 입력 table data array
 * @returns tr node
 */
function createTableRow(tag,rowData) {
  const tableRow = document.createElement("tr")
  for(const data of rowData) {
    tableRow.appendChild(createTableData(tag,data))
  }
  return tableRow
}

/**
 * 
 * @param {String} tag tagName
 * @param {String} data td inputText
 * @returns td node
 */
function createTableData(tag,data) {
  const resultTd = document.createElement(tag)
  resultTd.innerText = data
  return resultTd
}