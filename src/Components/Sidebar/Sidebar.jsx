import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Menu from './Elements/Menu';
import Logo from './Elements/Logo';
import Bars from './Elements/Bars';
import './Sidebar.css'

const Sidebar = () => {

    const { isOpen } = useSelector(state => state.root);

    return (
        <div className='container'>
            <div 
                className='sidebar' 
                style={{width: isOpen ? '135px' : '50px',}} 
            >
                <Logo />
            <div style={{display: 'flex', flexDirectory: 'row'}}>
                <Menu />
                <Bars />
            </div>
                
            </div> 
        </div>
    )
}

export default Sidebar