import React from 'react'
import { useState } from 'react';
import '../App.css'
const Okrugnost = () => {
    const [r, setR] = useState(0);
    const setRPlus =()=>{
        setR(r+1);
    };
  const setRMinus = ()=>{
    if (r>0){
      setR(r-1)
    }
    
  }
  
  const s=Math.PI * r * r
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <div className='text'>
        <h1>Введите радиус окружности (см), чтобы вычислить ее площадь</h1>
      </div> 
      <div className='block'>
        <p className='r'>{r}</p>
        <div className='btns'>
          <button onClick={setRMinus} className='btn' id='btn1'>-</button>
          <button onClick={setRPlus} className="btn" id='btn2'>+</button>
          <button onClick={()=>setOpen(true)} className='btn' id='btn3'>Вычислить площадь</button> 
        </div>
         
      </div> 
      
      {open && (
        <div className="overlay">
        <div className="modal">
          <p className='otvet'>Площадь окружности равна {s} квадратных сантиметров</p>
          
          <svg onClick={()=>setOpen(false)} height="20" viewBox="0 0 200 200" width="20" className='svg'>
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
           
        </div>
      </div>
      )}

    </div>
  )
}

export default Okrugnost

  