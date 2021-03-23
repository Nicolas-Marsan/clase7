const funcionesDeTareas = require('./modulo/funcionesDeTareas');
//console.log(funcionesDeTareas);
//
let tareas=funcionesDeTareas.leerTarea();

//console.log(tareas);
const argumento = process.argv[2];




switch (argumento){

    case 'listar':
        tareas.forEach((element,indice) => {
           console.log( 'La tarea ' + element.titulo + ' se encuentra '
            + element.estado);
        });
        break;
    case undefined:
            console.log('tenes que poner una opcion');
            break;

    case 'crear':
        let titul=process.argv[3];
        var nTarea = {titulo:titul, estado:"pendiente"}
        funcionesDeTareas.guardarTarea(nTarea,funcionesDeTareas.escribirJSON);
    break;
    default:
        console.log('No entiendo que es lo que queres hacer');
        break;

}