import styled from "@emotion/styled";
import { Dialog, IconButton, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const PS = {
    TextInput: styled(TextField)(() => ({
        '& label': {
            transformOrigin: "left !important",
            left: "inherit !important",
            fontSize: "16px",
            color: "#121F3E",
            fontWeight: 500,
            overflow: "unset",
            fontFamily: "monospace"
        },
        '& input': {
            marginTop: 10,
            border: '1px solid grey',
            borderRadius: 8,
            paddingLeft: 10,
            paddingRight: 10,
            height: 35,
            fontFamily: "monospace",
            marginBottom: 20,
        }
    })),
    ImageUploaderBtn: styled(Button)(({ img }) => ({
        backgroundColor: 'grey',
        height: 200,
        width: 200,
        backgroundImage: `url(${img})`,
        backgroundSize: 200,
        backgroundRepeat: 'no-repeat',
        objectFit: 'contain',
        backgroundPosition: '50% 50%'
    })),
    LabelText: styled('p')(({ theme }) => ({
        color: '#121f3e',
        fontSize: 14,
        fontFamily: "monospace",
    })),

}