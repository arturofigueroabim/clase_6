var num1 = 0;
var num2 = 10;

console.log("Ciclo For: ")
for(var i = 0; num1 <= num2; i++){
    console.log(num1)
    num1 = num1+1
}

num1 = 0
console.log("Ciclo While:")
while(num1 <= num2){
    console.log(num1)
    num1 = num1+1
}

num1 = 0
console.log("DO While:")
do{
    console.log(num1)
    num1 = num1+1

}while(num1 <= num2)