
import Users from './Users';
import Batsman from './Batsman';
import Counter from './Counter';
import './App.css'

function App() {

  function handleClick(){
    alert('I am clicked..')
  }
  function handleClick2(){
    alert('I am clicked 2.')
  }
  
  const handleClick3=()=>{
    alert('Clicked 3 !!!')
  }

  // const handleadd5=(num)=>{
  //   const newNum = num + 5;
  //   alert(newNum);
  // }

   const handleadd6=(num)=>{
    const newNum = num + 13;
    alert(newNum);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Users></Users>
      <Batsman></Batsman>
      <Counter></Counter>
      

      {/* <button onclick = "handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={handleClick}>Click Me 4</button>

      {/* <button onClick={handleadd5(7)}>Click Add 5</button> */}
      <button onClick={()=>handleadd6(27)}>Click Add 6</button> 
    </>
  )
}

export default App

