/**
 * 로딩 화면 생성
 */
function createLoadingView() {
  const body = document.body

  const divLoadingBack = document.createElement("div")
  divLoadingBack.id = "divLoadingBack"
  body.appendChild(divLoadingBack)
  
  const divLoading = document.createElement("div")
  divLoading.id = "divLoading"
  const imgLoading = document.createElement("img")
  imgLoading.src = "./images/loading-ring.gif"
  divLoading.appendChild(imgLoading)
  const textLoading = document.createElement("p")
  textLoading.innerText = "생성 중입니다. 1~2분 정도 소요 예정이며, 일정에 따라 달라질 수 있습니다"
  divLoading.appendChild(textLoading)
  body.appendChild(divLoading)
}

function removeLoadingView() {
  const body = document.body
  const divLoadingBack = document.getElementById("divLoadingBack")
  const divLoading = document.getElementById("divLoading")
  body.removeChild(divLoadingBack)
  body.removeChild(divLoading)
}