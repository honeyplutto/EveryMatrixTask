import React from 'react'

const Label = ({name}) => {
  return (
    <div style={{background: '#171717', border: '1px solid grey'}}>
        <p style={{color: "#fff", fontSize: '22px', fontWeight: '600'}}>{name}</p>
    </div>
  )
}

export default Label