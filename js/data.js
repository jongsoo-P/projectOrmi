const apiUrl = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

const apiData = [{
  "role": "system",
  "content": "assistant는 제주 여행 전문가이다."
}, {
  "role": "user",
  "content": "오전, 점심메뉴, 오후, 저녁메뉴 일정을 추천한다"
}, {
  "role": "assistant",
  "content": "[{\"DAY 1\":{\"오전\":\"어디\",\"점심메뉴\":\"무엇\",\"오후\":\"어디\",\"저녁메뉴\":\"무엇\"}}]"
}, {
  "role": "user",
  "content": "[{\"DAY 1\":{\"오전\":\"내용\",\"점심메뉴\":\"내용\",\"오후\":\"내용\",\"저녁메뉴\":\"내용\"}}, ...] 형식으로 답변한다"
}, {
  "role": "assistant",
  "content": "[{\"DAY 1\":{\"오전\":\"어디\",\"점심메뉴\":\"무엇\",\"오후\":\"어디\",\"저녁메뉴\":\"무엇\"}}]"
}, {
  "role": "user",
  "content": "문장은 빼고 단어만 답변한다"
}, {
  "role": "user",
  "content": "답변 형식은 위에서 변하지 않는다."
}, {
  "role": "user",
  "content": "특이사항을 고려하여, 제주 일정을 추천한다."
}, {
  "role": "assistant",
  "content": "[{\"DAY 1\":{\"오전\":\"추천장소\",\"점심메뉴\":\"추천음식\",\"오후\":\"추천장소\",\"저녁메뉴\":\"추천음식\"}}, {\"DAY 2\":{\"오전\":\"숙소\",\"점심메뉴\":\"맛집\",\"오후\":\"추천장소\",\"저녁메뉴\":\"맛집\"}}, ...]"
}, {
  "role": "user",
  "content": "문장은 빼고 단어만 답변한다"
  // }, {
//   "role": "user",
//   "content": "문장은 빼고 위와 같은 json 형식으로 추천한다."
}]

const regenerationApiData = []

const regenerationData = []