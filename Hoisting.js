// hoisting
function Hoist(){
    a = 10;
    var b = 50;
}
Hoist();
 
console.log(a); // 10
console.log(b); // Error : b is not defined
