import React from 'react'
import './title.css'

const Title = ({title , titl}) => {
    return (
        <div className='componte-title'>
            <div className="contenre center-col-sr">
                <h1>{title}<span className='color'>{titl}</span> </h1>
            </div>
        </div>
    )
}

export default Title