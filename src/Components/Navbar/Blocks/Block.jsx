import React from 'react'
import { BsCheckLg } from "react-icons/bs";

const Block = (color) => {
    const [symbolColor] = color;
  return (
    <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            marginLeft: '50px', 
            alignItems: 'center'}}>
        <div style={{
            fontSize: '50px', 
            fontWeight: '700',
            color: {color}
        }}>
            25
        </div>
        <div style={{
            display: 'flex', 
            alignItems: 'center'
        }}>
            <BsCheckLg style={{
                marginRight: '5px'
            }}/> 
                SIGNUPS
        </div>
    </div>
  )
}

export default Block