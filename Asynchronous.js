//Asynchronous 
console.log("First")

setTimeout(() =>{
    console.log("Second")

},3000);
console.log("Third")
//output
//First
//Third
//after 3 seconds the "Second" will print