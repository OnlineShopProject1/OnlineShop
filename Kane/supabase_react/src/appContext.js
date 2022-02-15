import { useState, createContext, useContext } from "react";

const AppContext = createContext()

const useAppContext = () => useContext(AppContext)

function AppContextProvider({children}) {

    return  (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, useAppContext}