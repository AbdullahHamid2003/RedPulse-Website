import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputComponent(props) {

    const {label, onchange, type, value} = props

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="standard-basic" className='w-full p-2' label={label} onChange={onchange} value={value} variant="standard" 
      sx={{
        backgroundColor: '#a52a2a',
        '& label.Mui-focused': {
          color: 'black',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'black',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',
          },
        },
      }}
      /> */}
      
      <TextField id="outlined-basic" label={label} onChange={onchange} value={value} variant="outlined"
      sx={{
        backgroundColor: '#C0C0C0',
        '& label.Mui-focused': {
          color: 'black',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'black',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',
          },
        },
      }}
      />
    </Box>
  );
}