import { useState, useContext, createContext } from "react";

interface MyContext {
    month: boolean,
    plan: string,
    setMonth: React.Dispatch<React.SetStateAction<boolean>>,
    setPlan: React.Dispatch<React.SetStateAction<string>>,
    myObj: MyObj,
    setMyObj: React.Dispatch<React.SetStateAction<MyObj>>
}

interface MyObj {
    name: string,
    email: string,
    phone: string
}

interface MyProvider {
    children: any
}


const MyContext = createContext<MyContext | undefined>(undefined)

export const MyProvider = ({ children }: MyProvider) => {
    const [myObj, setMyObj] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const [month, setMonth] = useState<boolean>(true)
    const [plan, setPlan] = useState<string>('Arcade')
    return (
        <MyContext.Provider value={{ month, plan, setMonth, setPlan, myObj, setMyObj }}>
            {children}
        </MyContext.Provider>
    );
}

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error("useMyContext must be used within a MyProvider");
    }
    return context;
};