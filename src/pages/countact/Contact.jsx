import React from 'react'
import Title from '../../componts/title/Title'
import './contact.css'
const Contact = () => {
  return (
    <div className='contact'>
      <Title title={'Contact'} />
      <div className="contenre ">
        <div className="ivb center-col">
          <a href='https://github.com/BilalEZZAIM' target='_blank' className='link center-row' ><i className="fa-brands fa-github center-row"></i>  <span>BilalEZZAIM</span></a>
          <a href='https://www.linkedin.com/in/bilal-ezzaim-a34313240' className='link center-row'><i className="fa-brands fa-linkedin  center-row"></i>  <span>Bilal EZZAIM</span> </a>
          <h3> <i className='fa fa-phone'></i>  0648161077</h3>
          <h3> <i className='fa fa-envelope gm' ></i> bilalzaim499@gmail.com</h3>
        </div>
      </div>
    </div>
  )
}

export default Contact