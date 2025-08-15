// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosArrays = [];
let contadorAmigos = 0; 

function asignarTextoElemento(e,texto){
    let titulo = document.querySelector(e);
    titulo.innerHTML = texto;
    return;
}

function validaDato(){
    if (document.getElementById('amigo').value === null || document.getElementById('amigo').value === undefined) {
        asignarTextoElemento('#validar','Debe ingresar un nombre');
      //  alert('Debe ingresar un nombre');
        limpiarCaja();
        return false;
    }

    if (document.getElementById('amigo').value === "" || document.getElementById('amigo').value.trim() ==="") {
        asignarTextoElemento('#validar','Debe ingresar un nombre');
       // alert('Debe ingresar un nombre');
       limpiarCaja();
        return false;
    }

    if(!isNaN(parseFloat(document.getElementById('amigo').value)) && isFinite(document.getElementById('amigo').value) ){
        asignarTextoElemento('#validar','Debe ingresar un nombre valido, no se admiten caracteres numericos');
       // alert('Debe ingresar un nombre');
       limpiarCaja();
        return false;
    }

    return true;
}

function limpiarCaja(){
    document.getElementById('amigo').value='';
    return;
}

function populateLista(e,t){
    let lista = document.getElementById(e);
    let texto='';
    for (let i=0; i<t.length; i++){
        texto+=`<li> ${t[i]} </li>`;
    }

    lista.innerHTML=texto;
    return;
}

function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function agregarAmigo(){
    if (validaDato()){
        amigosArrays.push(capitalizarPrimeraLetra(document.getElementById('amigo').value));
       // alert('Amigo agregado');
        //console.log(amigosArrays);
        contadorAmigos ++;
        //console.log(contadorAmigos);
        populateLista('listaAmigos',amigosArrays);
        limpiarCaja();
    }
    
    return;
}

function sortearAmigo(){
    //console.log(amigosArrays.length);
    if (amigosArrays.length > 0) {
        let amigoSorteado = Math.floor(Math.random() * contadorAmigos);
        //console.log(`random: ${amigoSorteado}`);
        //console.log(`El amigo sorteado es: ${amigosArrays[amigoSorteado]}`);
        asignarTextoElemento('#resultado',amigosArrays[amigoSorteado]);
    }else{
        asignarTextoElemento('#resultado','No existe amigos en la lista');
    }
    return;
}
