import React, { createContext } from "react";

export let NetworkContext = createContext();

let NetworkProvider = ({children}) =>{
    return <NetworkContext.Provider value={{network:"jio",company:"reliance",plan:350}}>{children}</NetworkContext.Provider>
}

export default NetworkProvider;