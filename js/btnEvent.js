/**
 * btnSubmit Click Event
 * - resultPart 초기화
 * - chatGtpAPI 호출
 * - resultCard 출력
 */
async function btnClickEvent() {
  document.getElementById("resultPart").innerHTML = ""
  const inputDays = document.getElementById("days").value
  const etc = document.getElementById("etc").value
  apiData.push({
    role: "user",
    content: `${etc}, 제주도 ${inputDays}일 일정`
  })
  createLoadingView()
  const schedules = await chatGptAPI(apiUrl,apiData)
  createTable(schedules)
  removeLoadingView()
}

document.getElementById("btnSubmit").addEventListener("click",btnClickEvent)