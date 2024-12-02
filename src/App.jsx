import { useCallback, useState, useEffect } from 'react'

import './App.css'

function App() {
  const [length, setLegth] = useState(6);
  const [numpass, setNum] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numpass) { str += "0123456789"; }
    if (charAllow) str += "@#$%^&*()_;?!"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numpass, charAllow, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numpass, charAllow])



  let inputVal = document.getElementById('input-value');


  const copyText = () => {
    inputVal.select();
    inputVal.setSelectionRange(0, 999);
    navigator.clipboard.writeText(inputVal.value);
  };


  return (
    <div className='h-screen px-4 py-4 container mx-auto bg-blue-100 '>
      <h2 className='title-srt '>Password Genretor</h2>
      <div className='flex justify-center my-3 '>
        <input  id='input-value' type="text" placeholder='password' value={password} className=' border-solid py-3 px-4 border-2 border-teal-600 text-center w-1/4' />
      </div>
      <div className='text-center flex items-center justify-center'>
          <input className='w-5 h-5 rounded-2   cursor-pointer mx-2' type="checkbox" defaultChecked={numpass} id='numberInput' onChange={() => { setNum((prev) => !prev); }} /> <label htmlFor='numberInput' className='cursor-pointer '>number allow</label>
        </div>
      <div className='text-center '>
        <div className='py-3'>
        <label className='px-3'>length Of Srtring:</label>
        <input className='border-solid px-2 border-2 border-teal-600' type="number" name='range' min={6} max={20} value={length} onChange={(event) => { setLegth(event.target.value) }} />
        </div>
        <div className='py-3'>
        <button onClick={copyText}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg mx-2 bg-pink-600">copy to Clipboard String</button>
        <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg mx-2 bg-teal-600' onClick={() => setNum((prev) => !prev)}>ReGenrate</button>
        </div>
         
        
      </div>



    </div>
  )
}
export default App
