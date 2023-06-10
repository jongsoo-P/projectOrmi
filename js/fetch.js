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
    console.log(res)
    return res.json()})
  .then(res => {
    console.log(res.choices[0].message.content)
    return JSON.parse(res.choices[0].message.content)
  })
}