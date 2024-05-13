// metodo push

const frutas = ["banana", "frutilla"];
const nuevaFruta = "perra";

console.log(frutas);

frutas.pop();

console.log(frutas)

//metodo shift

const frutaEliminada = frutas.shift();
console.log(frutaEliminada);

//En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:
//El primer elemento lo sacamos del array, ya que es el nombre del cliente.
//Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
//Después añadimos al final del array el nombre del usuario que sacamos antes.
//Recuerden que debes devolver el array modificado:

function procesarPedido(pedidos) {
  const cliente = "Gustavo";
  pedidos.push(cliente);
  return pedidos
}
//while

const array = ["jhony", "kevin", "tomy"]
//for

for(let i=0; i < array,length; i++){
    console.log(array[i]);
}

//foreach

array.forEach(element => {
    console.log(element);
});


