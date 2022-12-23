import styled from 'styled-components';
import { styled as styledMui, Button, TextField } from '@mui/material';

export const Container = styled.div`
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;

export const ComponentsDiv = styled.div`
    padding: 30px;
    border: solid 2px black;
    border-radius: 8px;
    background-color: white;
`;

export const Botao = styledMui(Button)`
    box-shadow: none;
    padding: 15px;
`;

export const CampoTexto = styledMui(TextField)`
    background-color: white;
    border-radius: 6px;
    // border: solid 2px black;
`;