/**
 * 
 * @param {string} url 
 * @param {json} data 
 * @returns json schedules
 */
async function chatGptAPI(url,data){
  return await fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      redirect: "follow",
  })
  .then(res => {
    // console.log(res)
    return res.json()})
  .then(res => {
    // console.log(res.choices[0].message.content)
    return {"status":200,"result":JSON.parse(res.choices[0].message.content)}
  })
  .catch(err => {
    return {"status":500, "result":err}
  })
}