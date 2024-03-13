import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//let cnt=0;


function App() {
let [cnt, setCounter]=useState(0)

const addValue =function( )
{
    
    setCounter(cnt+1)

   
}
const subtractValue =function( )
{
   
    setCounter(cnt-1)

   
}
  return (
    <>
    <h1>{cnt}</h1>
    
    <div>Value of Count is {cnt}</div>
      <button id="add" onClick={addValue}>Add</button>
      <br/>
    <div>Value of Count is {cnt}</div>

      <button id="Subtract" onClick={subtractValue}>Subtract</button><br/>
    <div>Value of Count is {cnt}</div>

    </>
  )
}

export default App
