import React from 'react'

const Block = ({number, symbol='', color, icon, name}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '0.1px solid grey', padding: '60px 110px'}}>
            <div>
                <span style={{color: color ? color : 'black' , fontWeight: '700', fontSize: '60px'}}>
                    {symbol}{number}
                </span>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                {icon ? icon : ' '}
                <span style={{fontSize: '18px', fontWeight: '600', color: '#808080'}}>
                    {name}
                </span>
            </div>
        </div>
    ) 
}


export default Block