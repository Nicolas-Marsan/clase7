let superheroes = [

    {  nombre: 'Batman'
    
    },
    
    { nombre: 'Iron Man'
    
    },
    
    { nombre: 'La mujer maravilla'
    
    }
    ];
    
    function suma(){
        let uno=5;
        let dos=8;
        let tres=uno+dos;
        
        return tres;
        
        }
        function aviso(){
            console.log('al fin entedes pedazo de boludo');
            
            }
        

    module.exports = superheroes;
    module.exports.suma = suma();
    module.exports.aviso = aviso();