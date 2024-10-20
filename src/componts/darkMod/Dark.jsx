import React from 'react'
import { useState } from 'react';
import './dark.css'
const Dark = () => {
    const [dark, setdark] = useState(true);
    const darkMod = ()=>{
        setdark(pre=> !pre)
        dark?document.documentElement.style.setProperty('--lightColor', '#22282a'):
        document.documentElement.style.setProperty('--lightColor', '#ffffff')
        dark?document.documentElement.style.setProperty('--primaryColor', '#22282a'):
        document.documentElement.style.setProperty('--primaryColor', '#ff274b')
        dark?document.documentElement.style.setProperty('--bgColor-1', '#ebebeb'):
        document.documentElement.style.setProperty('--bgColor-1', '#171a1c')
        dark?document.documentElement.style.setProperty('--secondaryColor', '#333'):
        document.documentElement.style.setProperty('--secondaryColor', '#f7bcf7')
    }
    
  return (
    <div className='ragth'>
        <i onClick={darkMod} className={dark?"fa-sharp fa-regular fa-sun":"fa fa-moon"} ></i>
    </div>
  )
}

export default Dark
