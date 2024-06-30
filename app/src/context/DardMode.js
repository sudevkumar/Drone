import { createContext, useContext, useState } from "react";

const DarkContext = createContext();

export default function AppStore({ children }) {
  const [dark, setDark] = useState(true);
  console.log(dark);

  return (
    <DarkContext.Provider value={{ dark, setDark }}>
      {children}
    </DarkContext.Provider>
  );
}

export function useDarkContext() {
  return useContext(DarkContext);
}
