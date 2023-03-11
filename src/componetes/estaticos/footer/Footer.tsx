import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './Footer.css'


function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className = "box1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="texto">Siga-me nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.instagram.com/kathllynleticia/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon className="redes"/>
                            </a>
                            <a href="https://www.linkedin.com/in/kathllynleticiadesenvolvedora/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon className="redes"/>
                            </a>
                            <a href="https://github.com/KathllynLeticia/" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon className="redes" />
                            </a>
                        </Box>
                    </Box>
                    <Box className=''>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="texto">© 2023 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a rel="noopener noreferrer">
                                <Typography variant="subtitle2" gutterBottom className = "texto" align="center">Kathllyn Santos</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;