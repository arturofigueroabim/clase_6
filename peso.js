var peso = 100.0

var peso_ideal = 85.0

var cambio_de_peso = 1.5

var numeroDeSemanas = 0

console.log("Ciclo While")
while(peso_ideal < peso){

    console.log("Tu peso de la semana es: " + peso);
    numeroDeSemanas = numeroDeSemanas +1
    peso = peso - cambio_de_peso
}
console.log("Tardaste " + numeroDeSemanas + " semanas en llegar a tu peso ideal")
