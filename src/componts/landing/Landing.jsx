import React from 'react'
import './landing.css'
const Landing = () => {
    return (
        <div className='landing'>
            <div className="contenre center-col">
                <div className="center-col-sr tout">
                    <h3> Hello, my name is</h3>
                    <h1>Bilal <span className='color'>EZ-ZAIM</span></h1>
                    <p>I'm a <span className='color'>MERN stack </span> Developer.</p>
                    <div className="icon center-row-sp">
                        <a className='center-col ' href='https://github.com/BilalEZZAIM' target='_blank'><i className="fa-brands fa-github"></i></a>
                        <a className='center-col' href='https://www.linkedin.com/in/bilal-ezzaim-a34313240'  target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing