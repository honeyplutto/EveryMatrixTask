import React from 'react'
import { useSelector } from 'react-redux';
import menuItems from '../menuItem'
import { NavLink } from 'react-router-dom';
import '../Sidebar.css'

const Menu = () => {

  const { isOpen } = useSelector(state => state.root);

  return (
    <div style= {{
      display: 'flex', 
      flexDirection: 'column'
    }}>
        {
            menuItems.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link">
                    <div className="icon">{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                </NavLink>
            ))
        }
    </div>
  )
}

export default Menu