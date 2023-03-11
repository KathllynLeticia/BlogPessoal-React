import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <>
    
            <AppBar position="static" style={{ backgroundColor: "#E4D5EC" , height: "80px" }}>
                <Toolbar variant="dense">
                    <Box component="a" href="/" style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                        <img src="https://imgur.com/xOhHLlR.png" alt="Logo da Kathllyn Santos" style={{ marginRight: "16px", width: "150px" }} />
                        <Typography variant="h5" color="inherit">
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start" >
                        <Box mx={1} className= 'cursor'>
                            <Typography variant="h6" color = "inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} className= 'cursor'>
                            <Typography variant="h6" color = "inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className= 'cursor'>
                            <Typography variant="h6" color = "inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className= 'cursor'>
                            <Typography variant="h6" color = "inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        <Box mx={1} className= 'cursor'>
                            <Typography variant="h6"  color = "inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;