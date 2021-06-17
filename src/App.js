import React,{ useState } from 'react';
import './App.css';
import imgShadow from './images/bg-pattern-mobile.svg';
import img from './images/illustration-woman-online-mobile.svg';
import arrow from './images/icon-arrow-down.svg';
import {Data} from './Data';
import { FaAngleUp } from 'react-icons/fa'


function App() {
  const [open,setOpen] = useState(false)
  
  const onClick = index => {
    if(open === index) {
      return setOpen(null)
    }
    setOpen(index)
  }
  
  return (
    <div className="App">
      <section>
        <div className='imgContainer'>
          <img src={img} alt='Img'></img>
          <img className='imgBottom' src={imgShadow} alt='Logo'></img>
        </div>
        <div className='boxContainer'>
          <div className='context'>
          <h1>FAQ</h1>
          {
            Data.map((item,index) => {
              return (
                <>
                  <div className='questionSection'>
                    <div onClick={() => onClick(index)} key={index}>
                      <p>{item.question}<span>{open === index ? <FaAngleUp className='arrow'/> : <img className='arrow' src={arrow} alt='arrow' />} 
                      </span></p>
                    </div>
                    <div>
                      {open === index ? (
                        <p>{item.answer}</p>
                      ) : null}
                      <hr />
                    </div>
                    
                  </div>
                </>
              )
            })
          }
          </div>
          
        </div>

      </section>
      <div className="attribution">
      <p>Challenge by Frontend Mentor. Coded by Azzy Kesuma</p>
    </div>
    </div>
  );
}

export default App;
