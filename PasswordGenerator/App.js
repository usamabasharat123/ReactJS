import React, {useCallback, useEffect, useState ,useRef} from 'react';
import './App.css';

function App() {
  const [copy , setcopycontent] = useState('Copy');
  const [length , setlength] = useState(8);
  const [addnumber , setaddnumber] = useState(false);
  const [addsymbol , setaddsymbol] = useState(false);
  const [adduppercase , setadduppercase] = useState(false);
  const [password , setpassword] = useState('');
  const [color , setcolor] = useState('bg-blue-600');

  const PasswordRef = useRef(null);
  const PasswordGenerator = useCallback(()=>
  {
    let pass = '';
    let str = "abcdefghijklmnopqrstuvwxyz";
    
    if(addnumber) str += "0123456789";
    if(addsymbol) str += "!@#$%^&*()_+";
    if(adduppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0; i<length; i++)
    {
      pass += str.charAt(Math.floor(Math.random()*str.length+1));
    }

    setpassword(pass);

  } , [length , addnumber , addsymbol ,adduppercase , password]);

  useEffect(()=>{
    PasswordGenerator();
    setcopycontent('Copy');
    setcolor('bg-blue-600');
  } , [length , addnumber , addsymbol ,adduppercase ]);

  const copytoclipboard = ()=>
  {
    PasswordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }


  return (
    <>
      <div className="w-full h-screen bg-slate-400 flex items-center justify-center">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-10 ">
          <h1 className="text-3xl font-bold text-center">Password Generator</h1>
          <div className="flex rounded-lg overflow-hidden shadow-lg mt-3">
            <input className="w-full p-2 outline-none text-orange-500"
            type= "text"
            value={password}
            placeholder="Your Password"
            readOnly
            ref={PasswordRef}
            />
            <button onClick={()=>{
              copytoclipboard();
              setcopycontent('Copied');
              setcolor('bg-orange-500');
            }}className={`p-2 text-white ${color}`}>{copy}</button>
          </div>
          <div className="text-md mt-3">
            <div calssName="items-center gap-x-4">
              <input
              type = "range"
              min = {8}
              max= {30}
              value={length}
              className=" cursor-pointer w-full"
              onChange={(e)=>{setlength(e.target.value)}}
              />
              <label className="text-orange-500 text-md mb">Length:{length}</label>
            </div>
            <div calssName="flex items-center gap-x-2">
              <input 
                type = "checkbox"
                className="cursor-pointer"  
                label="Uppercase"
                defaultChecked={adduppercase}      
                onChange={()=>{setadduppercase(prev=>!prev)}} 
              />
              <label className="text-md ml-2">Add Uppercase</label>
             </div>
             <div calssName="flex items-center gap-x-2">
              <input 
                type = "checkbox"
                className="cursor-pointer"  
                label="Uppercase"
                defaultChecked={addnumber}      
                onChange={()=>{setaddnumber(prev=>!prev)}} 
              />
              <label className="text-md ml-2">Add Number</label>
             </div>
             <div calssName="flex items-center gap-x-2">
              <input 
                type = "checkbox"
                className="cursor-pointer"  
                label="Uppercase"
                defaultChecked={addsymbol}      
                onChange={()=>{setaddsymbol(prev=>!prev)}} 
              />
              <label className="text-md ml-2">Add Symbols</label>
             </div>
          </div>
        </div>
      </div>
    
    
    </>
  );
}

export default App;
