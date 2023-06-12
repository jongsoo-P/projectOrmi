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
    content: `제주도 ${inputDays}일 일정 생성, '${etc}'`
  })
  createLoadingView()
  const schedules = await chatGptAPI(apiUrl,apiData)
  if(schedules["status"]==200){
    createTable(schedules["result"])
  }else{
    alert("죄송합니다 검색에 문제가 발생했습니다.")
  }
  removeLoadingView()
}

document.getElementById("btnSubmit").addEventListener("click",btnClickEvent)