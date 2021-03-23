const autos = require  ('./autos');
let persona={
  nombre: 'juan',
  capacidadDePagoEnCuotas: 30000,
  capacidadDePagoTotal: 1000000
  }

let concesionaria = {
    
   autos: autos,
   buscarAuto: function(patente){
    let hay=false;
      for(let i=0; i<autos.length;i++){
        
          if(autos[i].patente == patente){
            //console.log(autos[i].patente);
              return autos[i];
              hay=true;
          }

      }if(hay==false){return null}
      
},
venderAuto :function(patente){
    let result=this.buscarAuto(patente);
    if(result!=null){
       result.vendido=true;
    }
      
},
autosParaLaVenta : function(){
  
return this.autos.filter(auto=>auto.vendido ==false)
},
autosNuevos:function(){
  let dispo = this.autosParaLaVenta();
  //console.log(dispo);
  return dispo.filter(auto=>auto.km <100);
  
  },
  listaDeVentas: function(){
    let vendidos=autos.filter(auto => auto.vendido ==true);
    //console.log(vendidos);
    let precios=[];
    for(let i=0;i<vendidos.length;i++){
    
    let {precio}= vendidos[i];
    precios.push(precio);
    }
    return precios;
    },
    totalDeVentas:function(){
      let array = this.listaDeVentas();
      console.log(array);
      if(array.length==0){
        return 0
      }else{
      let total=array.reduce((a,b)=> a+b);
      return total;
      }
   },
   puedeComprar :function(auto, persona){
     
      let cuota= (auto.precio/auto.cuotas);
      
    if(persona.capacidadDePagoTotal>=auto.precio && persona.capacidadDePagoEnCuotas>cuota){
      
      return true;
    }else return false

  },
  autosQuePuedeComprar:function(personaa){
    let paraVender = this.autosParaLaVenta();
    let final=[];
    for (let i=0;i<paraVender.length;i++){

      let puede=this.puedeComprar(paraVender[i],personaa);
      if(puede==true){final.push(paraVender[i])}

    }
    return final;

  }

};
console.log(concesionaria.autosQuePuedeComprar(persona));
//console.log(concesionaria.autosParaLaVenta());
/*concesionaria.venderAuto('JJK116',concesionaria.buscarAuto);
//console.log(autos[1].vendido);
console.log(concesionaria.autosParaLaVenta());
console.log(concesionaria.autosNuevos());*/