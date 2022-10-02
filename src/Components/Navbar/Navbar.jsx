import React from 'react'
import Blocks from './Blocks/Blocks'
import Search from './Search/Search'
import User from './User/User'

const Navbar = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
      <User />
      <Search />
      <Blocks />
    </div>
  )
}

export default Navbar