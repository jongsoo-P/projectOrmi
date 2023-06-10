const apiUrl = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

const apiData = [{
  "role": "system",
  "content": "assistant는 제주 여행 전문가이다."
}, {
  "role": "user",
  "content": "문장은 빼고 단어만 말해줘"
}, {
  "role": "user",
  "content": "[{\"DAY 1\":{\"오전\":\"내용\",\"점심메뉴\":\"내용\",\"오후\":\"내용\",\"저녁메뉴\":\"내용\"}...] 형식으로 말해줘"
}]