import { Link, NavLink, useNavigate } from "react-router-dom";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { red } from "@mui/material/colors";

export default function ButtonComponent(props) {

    const navigate = useNavigate();


    const buttonStyle_1 = {
        '&:hover': {
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '8px',
            border: '1px solid white',
        },
    };

    const buttonStyle_2 = {
        '&:hover': {
            backgroundColor: '#c62828',
            color: 'white',
            border: '1px solid white',
        },
    };

    const { buttonText, buttonType, onclick } = props;
    
    return (
        <Stack spacing={2} direction="row">
            {buttonType === "contained" ?
                <Button variant={buttonType} color='error' sx={buttonStyle_1} onClick={onclick}>{buttonText}</Button>
                :
                <Button variant={buttonType} color='error' sx={buttonStyle_2} onClick={onclick}>{buttonText}</Button>
            }
        </Stack>
    );
}
