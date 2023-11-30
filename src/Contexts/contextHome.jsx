import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const[relatorioCriado, setRelatorioCriado] = useState(false)
  const [imgUrl, setImgUrl] = useState(localStorage.getItem("imgUrl") || "")
  

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const atualizarRelatoriosCriados = () =>{
    setRelatorioCriado(!relatorioCriado)
  }

  const updateUrl = (url) => {
    setImgUrl(url);
    localStorage.setItem("imgUrl", url)
  }

  return (
    <AppContext.Provider value={{ isSwitchOn, toggleSwitch,imgUrl,updateUrl,relatorioCriado,atualizarRelatoriosCriados }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);