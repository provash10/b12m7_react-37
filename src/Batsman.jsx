import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);

    const handleSingle =()=>{
        console.log(handleSingle);
        const updatedSingle = runs + 1;
        setRuns(updatedSingle);
    }
    const handleDouble=()=>{
        console.log(handleDouble);
        const updatedDouble = runs + 2;
        setRuns(updatedDouble);
    }
    const handleTriple=()=>{
        console.log(handleTriple);
        const updatedTriple = runs + 3;
        setRuns(updatedTriple);
    }
    const handleFour=()=>{
        console.log(handleFour);
        const updatedFour = runs + 4;
        setRuns(updatedFour);
    }
    const handleFive=()=>{
        console.log(handleFive);
        const updatedFive = runs + 5;
        setRuns(updatedFive);
    }
    const handleSix=()=>{
        console.log(handleSix);
        const updatedSix = runs + 6;
        setRuns(updatedSix);
    }

    return (
    <>
    <div>
        <h3>Player : BD Batsman</h3>
        <h1>Score : {runs} </h1>
        <button onClick={handleSingle} >Single</button>
        <button onClick={handleDouble} >Double</button>
        <button onClick={handleTriple} >Triple</button>
        <button onClick={handleFour} >Four</button>
        <button onClick={handleFive} >Five</button>
        <button onClick={handleSix} >Six</button>
    </div>
    </>
    )
}