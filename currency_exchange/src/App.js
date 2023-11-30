import "./App.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import AmountInput from "./components/AmountInput";
import SelectDropdown from "./components/SelectDropdown";
import SwapButton from "./components/SwapButton";
import currencyapi from "@everapi/currencyapi-js";
import { useContext, useEffect, useState } from "react";

import { CurrencyContext } from "./context/CurrencyContext";

function App() {
  const {
    fromcurrency,
    setfromcurrency,
    tocurrency,
    settocurrency,
    amount,
    setAmount,
  } = useContext(CurrencyContext);

  const [resultant_value, setresultvalue] = useState(0);
  
  // setting the base currency

const baseCurrency  = fromcurrency.split(" ")[0];
const ToCurrency  = tocurrency.split(" ")[0];


console.log(baseCurrency);



  useEffect(() => {
    if (amount) {
      const client = new currencyapi("cur_live_vIntZVmOu3KLORXU3wU2vnCgMMu1KUho93uEc2c4");
      client
        .latest({
          base_currency: baseCurrency,
          currencies: ToCurrency,
        })
        .then((response) => {
          setresultvalue(response.data[ToCurrency].value)
        });
    }
  }, [amount , fromcurrency , tocurrency]);

  // florring the resultentvalue to the 4 decimals places
  function floorToFourDecimals(number) {
    let factor = Math.pow(10, 4); // 10^4 = 10000
    return Math.floor(number * factor) / factor;
  }
    
  return (
    <div className="App">
      <Container
        maxWidth="md"
        sx={{
          background: "#fdfdfd",
          padding: "2rem 2rem",
          borderRadius: "6px",
          marginTop: "10rem",
          boxShadow: "0px 10px 15px -3px rgba(0,0,0,1)",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "1rem"  ,fontSize:'bold'}}>
          Best Currency Converter
        </Typography>
        <Grid container>
          <AmountInput />
          <SelectDropdown
            value={fromcurrency}
            setvalue={setfromcurrency}
            label="From"
          />
          <SwapButton />
          <SelectDropdown
            value={tocurrency}
            setvalue={settocurrency}
            label="To"
          />
        </Grid>

        {amount ? (
          <Box sx={{textAlign:'left' , marginTop:'1rem'}}>
            <Typography>{amount}{fromcurrency} =</Typography>
            <Typography variant="h5" sx={{marginTop:'0.3rem' , fontSize:'bold'}}>{amount  * floorToFourDecimals(resultant_value)} {tocurrency}</Typography>
          </Box>
        ): ""
        }
      </Container>
    </div>
  );
}

export default App;
