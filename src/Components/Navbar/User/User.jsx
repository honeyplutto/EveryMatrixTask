import React from 'react'
import { AiOutlineAlignRight } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import avatar from '../../../image/avatar.png'
import flag from '../../../image/flag.png'

const User = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        
        <div style={{display: 'flex', alignItems: 'center',  flex: '50%', justifyContent: 'center'}}>
            <AiOutlineAlignRight style={{fontSize: '25px'}}/>
        </div>

        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', flex: '50%', justifyContent: 'flex-end'}}>
            
            <div style={{display: 'flex', alignItems: 'center', borderLeft: '0.5px solid grey', borderRight: '0.5px solid grey', padding: '15px', cursor: 'pointer'}}>
                <img src={flag} alt="" style={{width: '22px', marginRight: '5px'}}/>
                EN
            </div>

            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '2px 15px'}}>
                <div style={{marginRight: '10px'}}>
                    <img src={avatar} alt="" style={{width: '50px'}}/>
                </div>
                <div>
                    <p>Hello, Max</p>
                    <p>Last login: Thu Mar 20 2014</p>
                </div>
                <div style={{marginLeft: '8px', cursor: 'pointer'}}>
                    <TiArrowSortedDown/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default User