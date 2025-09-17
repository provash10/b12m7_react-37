import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [four, setFour] = useState(0);

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
        const totalFour = four + 1;
        setRuns(updatedFour);
        setFour(totalFour);
    }
    const handleFive=()=>{
        console.log(handleFive);
        const updatedFive = runs + 5;
        setRuns(updatedFive);
    }
    const handleSix=()=>{
        console.log(handleSix);
        const updatedSix = runs + 6;
        const totalSix= sixes + 1;
        setRuns(updatedSix);
        setSixes(totalSix);
    }

    return (
    <>
    <div>
        <h3>Player : BD Batsman</h3>
        {
            runs>50 && <p>Your Score : 50</p>
        }
        {
            runs>100 && <p>Your Score : 100</p>
        }
        <p>Six : {sixes}</p>
        <p>Four : {four}</p>

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

