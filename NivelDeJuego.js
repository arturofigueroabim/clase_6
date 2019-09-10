console.log("Dime que nivel de jugador eres: ")
var niverlDeJugador =  process.argv[2];

console.log(niverlDeJugador)

if(niverlDeJugador <= 10){
    console.log("Eres nivel Aprendiz");
}
if(niverlDeJugador > 10 && niverlDeJugador < 20){
    console.log("Eres nivel Acrobata");
}
if(niverlDeJugador => 20){
    console.log("Eres nivel Ninja");
}