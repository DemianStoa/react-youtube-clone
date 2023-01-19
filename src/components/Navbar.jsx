import React from 'react'
import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'
import  SearchBar  from './SearchBar'

import { logo } from './utils/constants'

const Navbar = () => {
  return (
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ positon: 'sticky', background:'#fff', justifyContent: 'space-between' }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center'}} >
        <img  src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar