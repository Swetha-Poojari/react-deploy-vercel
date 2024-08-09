import React from 'react'
import logo from '../assets/logo.jpg'

const AuthLayouts = ({children}) => {
  return (
    <>
      <header className='flex justify-center items-center py-5 h-50 shadow-md'>
        <div>
            <img 
              src={logo}
              alt="logo"
              width={100}
              height={90}/><br/>
        </div>

        

        </header> 
       
        {children}
      

    </>
    
  )
}

export default AuthLayouts
