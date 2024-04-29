//Dlecarar funciones 

//funciones tradicional

/*
function myFunction()  {
    return
}
*/

//funcion flecha o arrow fuction
/*
const myfuction = () => {
    
}
*/

let contador = 0;


function incrementarNumero(){//Dato importante -> siempre los nombres de las funciones siguen la nomenclaturqa camelCase
   //let number = document.getElementById("number").textContent;
   contador = contador + 1;
   document.getElementById("number").textContent = contador;
}