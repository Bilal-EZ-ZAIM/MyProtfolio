import React, { useState } from 'react'
import './filtring.css'
const Filtreng = ({abl , skils}) => {
    const [skil, setskils] = useState(skils);
    const handlClick = (xc , id) =>{
        if(xc === 'all'){
            setskils(skils)
        }else{
            const x = skils.filter(item=>{
                return  item.type === xc;
            })
            setskils(x)
        }        
    }
    return (
        <div className='filtreng'>
            <div className="contenre ">
                <div className="contbtn center-row">
                {
                    abl?.map(item => {
                        return <button onClick={()=> handlClick(item.type , item.id)} className={`btn`} key={item.id}>{item.name}</button>
                    }   
                    )
                }

                </div>
                <div className="skills center-row">
                    {
                        skil?.map(item=> (
                            <div className="sk center-row" key={item.id}>{item.title}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Filtreng