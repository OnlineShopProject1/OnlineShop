import { useState, createContext, useContext } from "react";

const AppContext = createContext()

const useAppContext = () => useContext(AppContext)

function AppContextProvider() {

    return  (
        <AppContext.Provider>
        </AppContext.Provider>
    )
}

export {AppContextProvider, useAppContext}