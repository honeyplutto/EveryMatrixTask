import React from 'react'
import Block from './Block'
import items from './Items'

const Blocks = () => {
    
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        {items.map(item => (
            <Block key={item.id} {...item}  />
        ))}
    </div>
  )
}

export default Blocks