function createObject(name, subs) {
    const objetos = {
        nombre: name,
        suscripciones: subs,
        hash: length(nombre)*suscripciones, 
        getstatus: `El canal de ${nombre} tiene ${suscripciones}`
    }
    return objetos
}
const newObject = createObject("pipe", 20)