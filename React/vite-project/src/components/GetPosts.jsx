import { useEffect, useState } from "react";

export default function GetPosts(){
        const [data, setData] = useState({})

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
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