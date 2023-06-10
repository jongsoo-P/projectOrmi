/**
 * btnSubmit Click Event
 * - resultPart 초기화
 * - chatGtpAPI 호출
 * - resultCard 출력
 */
async function btnClickEvent() {
  document.getElementById("resultPart").innerHTML = ""
  const inputDays = document.getElementById("days").value
  apiData.push({
    role: "user",
    content: `제주도 ${inputDays}일 일정`
  })
  const schedules = await chatGptAPI(apiUrl,apiData)
  for(const schedule of schedules){
    createResultCard(schedule)
  }
}

document.getElementById("btnSubmit").addEventListener("click",btnClickEvent)