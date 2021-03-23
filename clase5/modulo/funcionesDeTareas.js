const fs = require('fs');

function leerTarea(){
let tareas = fs.readFileSync('tareas.json','utf-8');
tareas = JSON.parse(tareas);

return tareas;

}

function escribirJSON(array){    
    let final=JSON.stringify(array);
  
    fs.writeFileSync('tareas.json', final);
  }
function guardarTarea(tarea,callback){
let tareas2 = leerTarea();
tareas2.push(tarea);
callback(tareas2);

}
//leerTarea();

module.exports = 
{leerTarea,
escribirJSON,
guardarTarea
};