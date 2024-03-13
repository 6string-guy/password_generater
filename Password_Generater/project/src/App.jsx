import { useState, useCallback, useEffect, useRef  } from "react";
//useState----->  ek sath sare state me change karne ke liye 
// prev use karna is imp 
//useCallback----->
//useElleft-------> same function ko baar baar call karne ke liye as soon s dependent variables changes
//useRef ----> for the reference 
import "./App.css";
function App() {


    document.querySelector('body').style.backgroundColor="#414141"


    const [length, setLength]=useState("10")
    const [numAllowed, setNumAllowed]=useState(false)
    const [charAllowed, setCharAllowed]=useState( false)
    const [password, setPassword]=useState("")
   const gen= useCallback(()=>{
    let  s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz";
    if(charAllowed )
    {
      s=s+"!@#$%^Z&*()_{}:<>?~";
    }
    if( numAllowed)
    {
      s=s+"1234567890"
    }
    let str =""
    while( str.length!=length)
    {
      let a=Math.floor(Math.random()*(s.length))
      str=str+s[a]

    }
    console.log( password);

    setPassword(str)


  }, [length, numAllowed, charAllowed, password])// things that effect the password 
  useEffect(()=>{gen()}, [length, charAllowed, numAllowed])
  const copyPass=useCallback(()=>{
    //copy karne ke liye 
    window.navigator.clipboard.writeText(password)
   // alert("Copied")  //// It is copying the password multiple times so i have commented it for now 
  }, [password])
 return( <>

<div className="bg-amber-300  h-40 px-6 py-8 " >
      <div className="bg-white rounded-md w-1/2 mx-30 h-9 flex shadow">
        <input type="text"className="rounded-md px-4 py-1 w-4/5 h-9" placeholder="password" readOnly value={password} ></input>
        <button type="button" className="bg-blue-600 rounded-md ml-auto w-1/5 h-9" onClick={copyPass()}>copy</button>

      </div>
      <div className="my-10  flex shadow">
      <div>
      <input
        type="range"
        min={0}
        max={20}
        value={length}
        onChange={(e)=>{setLength(e.target.value)}} /// reference of that particular event is given as e
      />
      <p>Length: {length}</p>
    </div>
       
        <div className="w-1/3">
        <input type="checkbox" onChange={()=>{
          setNumAllowed((prev)=>!prev)
        }}></input>
        <label className="text-2xl">Numbers</label>
        </div>
        
       
        <div className="w-1/3">
        <input type="checkbox" onChange={()=>{
          setCharAllowed((prev)=>!prev)
        }}></input>
        <label className="text-2xl">Characters</label>
        </div>
        
      </div>
         </div>

  
  </>);
}

export default App;
