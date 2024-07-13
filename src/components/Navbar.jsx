import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <Box >
        <br /><br /><br /><br />
        <AppBar color ='error'>
            <Toolbar>
                <Typography variant='h6'>Employee App</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="error">
                    <Link to={"/a"} style={{textDecoration:"none",color:"white"}}>
                    ADD
                    </Link>
                    </Button>&nbsp;&nbsp;
                <Button variant="contained" color="error">
                <Link to={"/"} style={{textDecoration:"none",color:"white"}}>
                    VIEW
                    </Link>
                    </Button>
            </Toolbar>
        </AppBar>
      </Box> 
    </div>
  )
}

export default Navbar
