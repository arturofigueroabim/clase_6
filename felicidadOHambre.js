console.log("Dime Si tienes hambre y te dire como te sientes");

var  tenerHambre = process.argv[2];

console.log(tenerHambre);

if(tenerHambre === "si"){
    console.log("Estas Triste :(")
}else{
    console.log("Estas Feliz :)")
}
