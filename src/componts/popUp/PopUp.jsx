import React from 'react'
import { useState } from 'react';
import './pop.css'
const PopUp = ({id , setpop , pods}) => {
    const [imag, setimag] = useState(pods.img);
   
  return (
    <div className='popup'>
        <div className="img">
            <img src={imag} alt="" />
        </div>
        <div className="imgss center-row">
            {
                pods.imgs?.map((item , index )=>{
                    return(
                        <div className="ild" key={index}>
                            <img src={item} onClick={()=> setimag(item)} alt="" />
                        </div>
                    )
                })
            }
        </div>
        <button className='xfals' onClick={()=> setpop(false)}>X</button>
    </div>
  )
}

export default PopUp