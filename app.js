/*let heroes=require('./superheroes');
//let funcion=require('./suma');
//console.log(heroes);

let resul=heroes.suma;

console.log(resul);

heroes.aviso;*/

let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = (bicicletaA.rodado>bicicletaB.rodado) ? bicicletaA : bicicletaB;

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );