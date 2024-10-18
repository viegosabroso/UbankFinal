import { createContext, useState } from "react";
import { getUserData } from "../../Services/Userdata";

const userData = async() => {
    try {
        const data = await getUserData();
        return data;
        } catch (error) {
            console.log(error);
            }

}


export const IncomesContext = createContext({
    userData: userData(),

})

export const IncomesProvider = ({ children }: any) => {
   

    const value = {
        userData: userData(),
    }

    return <IncomesContext.Provider value={value}>{children}</IncomesContext.Provider>
}


