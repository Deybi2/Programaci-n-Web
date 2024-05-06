function agregarElemento(){
    let lista = document.getElementById("lista");
    let input = document.getElementById("textarea").value;

    const elementoLista = document.createElement("lista");
    
    const button = document.createElement("button");

    elementoLista.textContent = input
    button.textContent= "delete"

    lista.appendChild(elementoLista)
    elementoLista.append(button)
    
    buttonDelete.onclick = function() {
        elementoLista.remove()
    }
    
    
}
