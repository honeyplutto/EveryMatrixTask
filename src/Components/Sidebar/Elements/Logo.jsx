import React from 'react'
import logo from '../../../image/logo.png'

const Logo = () => {
  return (
        <img 
          src={logo}
          style={{
              width: '40px', 
              borderLeft: '5px solid #CD001A', 
              borderTop: '5px solid #CD001A', 
              borderRight: '5px solid #CD001A', 
              borderBottom: '2px solid #CD001A',
          }}
          alt="">
        </img>  
  )
}

export default Logo