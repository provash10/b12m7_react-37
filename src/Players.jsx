import { useEffect, useState } from "react"

export default function Players(){
    const [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=> res.json())
        .then(data =>setPlayers(data))
    },[]);

    return(
        <div className="card">
            <h2>Players : {players.length}</h2>
            {
                players.map(player => <ul><li>{player.name}</li></ul>)
            }
        </div>
    )
}