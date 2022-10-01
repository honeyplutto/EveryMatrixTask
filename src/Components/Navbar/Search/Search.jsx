import React from 'react'
import { BsHeartFill } from "react-icons/bs";

const Search = () => {

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <input type="text" placeholder='Dashboard' style={{width: '81.3%', padding: "12px 10px", fontSize: '16px', backgroundColor: '#d3d3d3', border: '1px solid #d4d4d4'}} />
            <button style={{display: 'flex', alignItems: 'center', padding: "10px 7px", border: '1px solid #d4d4d4', backgroundColor: '#b2b2b2', cursor: 'pointer'}}>
                <BsHeartFill style={{color: '#666666', marginRight: '2px', fontSize: '14px'}}/>
                <span style={{fontWeight: '600', color: '#666666',  fontSize: '14px'}}>    
                    ADD THIS PAGE TO FAVORITES
                </span>            
            </button>
        </div>
    )
}

export default Search