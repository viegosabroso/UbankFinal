import { createContext, useEffect, useState } from "react";
import { getUserData } from "../Services/Userdata";

export const IncomesContext = createContext({
    incomesdata: []
});



export const IncomesProvider = ({ children }: { children: any }) => {
    const [incomesdata, setIncomes] = useState([]);

    useEffect(() => {
        const userData = async () => {
            try {
                const data = await getUserData() as any;
                setIncomes(data.Incomes);
                console.log(data.Incomes);
                
            } catch (error) {
                console.log(error);
            }
        };
        userData();
        
    }, []);

    const value = {
        incomesdata,
        };

    return <IncomesContext.Provider value={value}>{children}</IncomesContext.Provider>;
};