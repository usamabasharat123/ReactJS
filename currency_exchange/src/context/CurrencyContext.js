import { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
    const [fromcurrency , setfromcurrency]  = useState("USD - United States")
    const [tocurrency , settocurrency]  = useState("PKR - Pakistan")
    const [amount  , setAmount] = useState(0);

  const value = {
    amount,
    setAmount,
    fromcurrency,
    setfromcurrency,
    tocurrency,
    settocurrency
  };
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;