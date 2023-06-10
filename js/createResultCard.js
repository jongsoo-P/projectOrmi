/**
 * 
 * @param {json} answerData json 타입의 일정(schedule)
 * create resultCard
 */
function createResultCard(answerData){
  const schedulesKeys = Object.keys(answerData[Object.keys(answerData)[0]])
  const schedules = answerData[Object.keys(answerData)[0]]
  const resultPart = document.getElementById("resultPart")
  const resultCard = document.createElement("div")
  resultCard.classList.add("resultCard")
  
  const divDay = document.createElement("div")
  divDay.innerText = Object.keys(answerData)[0]
  resultCard.appendChild(divDay)

  const ulSchedule = document.createElement("ul")
  
  for(const schedulesKey of Object.keys(schedules)){
    const liScehdule = document.createElement("li")
    const spanTime = document.createElement("span")
    spanTime.innerText = schedulesKey;
    liScehdule.appendChild(spanTime)
    const spanContent = document.createElement("span")
    spanContent.innerText = schedules[schedulesKey]
    liScehdule.appendChild(spanContent)
    ulSchedule.appendChild(liScehdule)
  }
  resultCard.appendChild(ulSchedule)
  resultPart.appendChild(resultCard)
}