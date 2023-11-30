import React from 'react'
import {Grid , Autocomplete , TextField, Skeleton} from '@mui/material'
import useCurrencyinfo from '../hooks/useCurrencyinfo'

const SelectDropdown = (props) => {

    const{value, setvalue , label}  = props

    const [data , error , loaded] = useCurrencyinfo('https://restcountries.com/v3.1/all');

    if(loaded)
    {
        return (
            <Grid item xs={12} md={3}>
                <Skeleton variant='rounded' height={60}/>
            </Grid>
        )
    }

    if(error)
    {
        return "something went wrong!";
    }

    const dataFilter = data.filter(item => "currencies" in item);
    const dataCountries = dataFilter.map(item => {
    return `${Object.keys(item.currencies)[0]} - ${item.name.common}`
  });

//   console.log(dataCountries)

  return (
    <Grid item xs={12} md={3}>
        <Autocomplete sx={{marginLeft:'1rem'}}
        value={value}
        disableClearable
        onChange={(event , newvalue)=>
        {
            setvalue(newvalue);
        }}
        options={dataCountries}
        
        renderInput={(params) => (
          <TextField {...params} label={label} variant="outlined" />
        )}
      />
    </Grid>
  )
}

export default SelectDropdown