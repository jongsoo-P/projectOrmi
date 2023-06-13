/**
 * btnSubmit Click Event
 * - chatGtpAPI 호출
 * - resultCard 출력
 */
async function btnClickEvent() {
  const inputDays = document.getElementById("days").value
  const etc = document.getElementById("etc").value
  if(!(inputDays.match(/^\d*$/) && parseInt(inputDays) > 0 && parseInt(inputDays) < 15)){
    alert("올바른 여행 일정을 선택하세요")
    return
  }
  regenerationApiData.length = 0
  apiData.map(data => regenerationApiData.push(data))
  regenerationApiData.push({
    role: "user",
    content: `제주도 ${inputDays}일 여행 일정 생성, '${etc}'`
  })
  createLoadingView()
  const schedules = await chatGptAPI(apiUrl,regenerationApiData)
  if(schedules["status"]==200){
    regenerationData.length = 0
    schedules["result"].map(data=>regenerationData.push(data))
    createTable(schedules["result"])
  }else{
    alert("죄송합니다 생성에 문제가 발생했습니다.")
  }
  removeLoadingView()
}

/**
 * regeneration Click Event
 * - input[name="DAY index"] 체크 검사
 * - check된 항목 일정 재생성
 */
async function regeneration() {
  let regenerationContent = '';
  
  for(const idx in regenerationData){
    const days = `DAY ${parseInt(idx)+1}`
    const checkboxArr = document.querySelectorAll(`input[name="${days}"]:checked`)
    if(checkboxArr.length > 0){
      checkboxArr.forEach((checkbox)=>{
        regenerationContent += `${days}["${checkbox.value}"] `
      })
    }
  }
  if(regenerationContent == ''){
    alert("재생성할 일정을 선택해주세요.")
    return
  }
  regenerationContent = JSON.stringify(regenerationData) +"에서 " + regenerationContent + "새로운 결과로 변경해서 json만 답변"
  regenerationApiData.push({
    role: "user",
    content: regenerationContent
  })
  createLoadingView()
  const schedules = await chatGptAPI(apiUrl,regenerationApiData)
  if(schedules["status"]==200){
    regenerationData.length = 0
    schedules["result"].map(data=>regenerationData.push(data))
    createTable(schedules["result"])
  }else{
    alert("죄송합니다 생성에 문제가 발생했습니다.")
  }
  removeLoadingView()
}


document.getElementById("btnSubmit").addEventListener("click",btnClickEvent)