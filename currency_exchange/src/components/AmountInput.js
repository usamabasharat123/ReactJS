import {InputAdornment,TextField,Grid} from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { CurrencyContext } from '../context/CurrencyContext'

function AmountInput() {

    const{amount , setAmount} = useContext(CurrencyContext);

  return (
    <Grid item xs={12} md={4}>
        <TextField
          label="Amount"
          type='number'
          onChange={(e)=>
        {
          if(e.target.value >= 0){
            setAmount(e.target.value);
          }
        }}
          fullWidth
          value={amount}
          sx={{marginBottom:'1rem'}}
            InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}/>

        </Grid>
  )
}

export default AmountInput