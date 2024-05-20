//Arrays


const ejemploArray = [1,2,3];
console.log(ejemploArray[1]);

//Objetos

const persona = {
    //clave : valor
    name: "federico",
    age: 28,
    isWorking: true,
    cats: ["Zoe", "Pipe", "Lujan"],
    walk: function (){
        //si la función retorna void es que no devuelve nada, si no, aclara el tipo de dato
        return "estoy caminando"
        //si la función no devuelve mimgún valor, va a devolver un undefined por derfalult
    }
};

console.log(persona.name);
console.log(persona["age"]);
console.log(persona.cats[1]);
//si cuando estas mostrando/ejecutando una funcion no le ponen los parentesis este no va a funcionar
console.log(persona.walk());