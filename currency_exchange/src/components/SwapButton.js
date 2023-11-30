import React from 'react'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Grid ,Button } from '@mui/material';
import { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const SwapButton = () => {

    const {
        fromcurrency,
        setfromcurrency,
        tocurrency,
        settocurrency
      }  = useContext(CurrencyContext)

    const swapcurrency = ()=>
    {
        setfromcurrency(tocurrency);
        settocurrency(fromcurrency);
    }

  return (
    <Grid item xs={12} md='auto'>
        <Button onClick={swapcurrency}
        sx = {{borderRadius : '5px' , height : '80%' , marginLeft:'1rem'}}
        >
            <SwapHorizIcon sx={{fontSize: '30px'}}/>
        </Button>
    </Grid>
  )
}

export default SwapButton