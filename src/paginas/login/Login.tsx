import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from "../../store/tokens/Actions";

function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

            useEffect(()=>{
                if(token != ''){
                    dispatch(addToken(token));
                    navigate('/home')
                }
            }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login(`/usuarios/logar`, userLogin, setToken)

                alert('Usuário logado com sucesso!');
            }catch(error){
                alert('Dados do usuário inconsistentes. Erro ao logar!');
            }
        }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className="fundo">
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="textos1">Entrar</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth className="caixa" />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth className="caixa" />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary' className="botao">
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' className="textos1">Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro'>
                            <Typography variant='subtitle1' gutterBottom align='center' className="textos1">Cadastre-se</Typography>
                        </Link>
                            
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login;