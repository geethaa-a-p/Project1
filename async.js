//Async
var p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        num1 = 12,
        num2 = 10
        num = num1 + num2;
    console.log("Total is " + num)
        resolve()
    }, 4000)
})
p1.then(function (resolve) {
    console.log("Ok")
})

    //output (first wait for 4secs and the it will  print ) "Total is 22"
    //then print "Ok"

async function foo() {
    await 1
}
     
     