//hots -> useState
import { useEffect, useState } from "react";

//camalcase en la manera de escribir en la cual cada palabra nueva arranca con Mayuscula

//
const handleClick = () => {}

console.log()
export const Estado = () => {
    const [contador, setContador] = useState(0);
    
    const handleClick = () => {
        setContador(contador + 1);
    };



    //El useEffect se vaa ejecutar la cantidad de veces que las dependencias se actualicen
    //Si no le pasan dependencias se ejecutara solo al principio de la app
    //En el primer render
    //Si no se le pasa el array de dependencias siempre se va a ejecutar
    //
    
    useEffect(() =>{

    },[])

    useEffect(() => {
        console.log("El contador se ha actualizado");
    }, [contador]);

    const arrayPersonajes =[

        {
            name: 'Rick',
            lastname: 'Sanchez',
            planet: 'Earth',
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        },
        {
            name: 'Morty',
            lastname: 'Smith',
            planet: "Earth",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        }
    ]

    return (
    <>
        <div>
            { //cuando despues de la funcion flecha hay parentesis significa que el return es implicito
                //return explicito
                arrayPersonajes.map((personaje, i) =>(
                    <div key={i}>
                        <h2>
                            FullName: {personaje.name} {personaje.lastname} {""}
                        </h2>      
                        <p>Planet:{personaje.planet}</p>
                        <img scr={personaje.image} alt="description"></img>
                    </div>
                ))
                /*arrayPersonajes.map(() => (
                    <>
                    
                    </>
                ))*/

            }


        </div>
        <button onClick={handleClick}>aumentar</button>
        <p>{contador}</p>
    </>
    );
};