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
  if(!(inputDays.match(/^\d*$/) && parseInt(inputDays) > 0 && parseInt(inputDays) < 15)){
    alert("올바른 여행 일정을 선택하세요")
    return
  }
  apiData.push({
    role: "user",
    content: `제주도 ${inputDays}일 여행 일정 생성, '${etc}'`
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

async function searchAgain() {
  console.log('click')
}