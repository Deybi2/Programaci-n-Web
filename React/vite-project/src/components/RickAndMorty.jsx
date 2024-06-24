import { useEffect, useState } from "react";

export default function RickAndMorty(){
        const [data, setData] = useState({})

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/post5/1")
        .then((response) => response.json())
        .then((reponseData) => setData(reponseData));
    }, []);

  return(
  <>
     {
        !data ? <> Login...</> : <> 
        <h2>
            Objeto
            title: {data.title} 
            is: {data.id}
        </h2>
        <p>body: {data.body}</p>
        </>
     }
  </>
  )
}