
//Callback
num1=10
num2=10
function callback(){
    num=num1+num2
    console.log("Total is=" + num)
}
function sum(num){
console.log("Calculation happening")
num();
}
sum(callback)
//output
//Calculation happening
//Total is=20