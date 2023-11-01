import { useEffect, useState } from "react"

export default function Starwars(props){
    let [characters, setCharacters] = useState([]);
     console.log(characters);
    useEffect(() => {
     fetch(`https://swapi.dev/api/people`)
        .then((response) => response.json())
        .then((date) => {
            setCharacters(date.results);
        })
        .catch((err) => console.log(err))
    }, [])
    
    return (
        <div>
        <h1>Sw Characters</h1>

        <ul>
            {characters.map(char => <li key={char.url}>{char.name}</li>)}
        </ul>
        </div>
    )
}