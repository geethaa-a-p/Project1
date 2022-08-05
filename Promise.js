//Promise
var p1 = new Promise(function (resolve, reject) {
    num = 1
    if (num > 5) {
        resolve(num)
    } else
        reject(num)
})
p1.then(function (resolve) {
    console.log("Ok")
})
.catch(function(reject) {
  console.log("Fail")
})
//if we give num=1 u will geth Fail as output
//if we give num=6 u will geth OK as output

async function foo() {
    await 1
}
     

