import { useState } from "react"

export default function Counter(){

    // const[count, setCount] = useState(0);
    const[count, setCount]=useState(0);
    const handleAdd= () =>{
        console.log('Add Button Clicked');
        setCount(5)
        const newCount = count + 5;
        setCount(newCount)
    }

    const counterStyle ={
        border: '2px solid black'
    }
    return(
        <div style={counterStyle}>
            <h3>Count :{count} </h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}