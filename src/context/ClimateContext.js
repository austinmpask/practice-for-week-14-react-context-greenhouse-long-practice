// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import { createContext, useContext, useState } from "react";

export const ClimiateContext = createContext();

export const useClimate = () => useContext(ClimiateContext);

export default function ClimateProvider({ children }) {
  const [temp, setTemp] = useState(50);
  const [humidity, setHumidity] = useState(40);

  return (
    <ClimiateContext.Provider value={{ temp, setTemp, humidity, setHumidity }}>
      {children}
    </ClimiateContext.Provider>
  );
}
