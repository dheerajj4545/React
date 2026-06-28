import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook
  
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <>
      <div className="min-h-screen bg-black flex justify-center items-start pt-40">
        <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-6 py-5 my-8 bg-gray-800 text-orange-500">
          <h1 className="text-white text-2xl text-center font-semibold mb-6">
            Password generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              ref={passwordRef}
              className="
w-full
outline-none
px-4
py-3
text-lg
rounded-l-lg
bg-white
text-gray-700
"
            />
            <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1 ">
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer" 
              onChange={(e)=>{setLength(e.target.value)}} />
              <label >Length:{length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev)
              }}  />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={()=>{
                setCharacterAllowed((prev)=>!prev)
              }}  />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
