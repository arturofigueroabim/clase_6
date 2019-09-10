var examen1 = parseFloat(process.argv[2], 10);

var examen2 = parseFloat(process.argv[3], 10);

var examen3 = parseFloat(process.argv[4], 10);

const promedio = (examen1 + examen2 + examen3) / 3;

console.log("Tienes un promedio de: " + promedio)

if(promedio >= 8.5){
    console.log("FELICIDADES TIENES TU PREMIO, tu promedio es de: " + promedio );
}
if(promedio < 6){
    console.log("Castigado tu promedio es de: " + promedio)
}