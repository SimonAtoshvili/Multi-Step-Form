import { useState, useContext, createContext } from "react";

interface MyContext {
    month: boolean,
    plan: string,
    setMonth: React.Dispatch<React.SetStateAction<boolean>>,
    setPlan: React.Dispatch<React.SetStateAction<string>>,
    myObj: MyObj,
    setMyObj: React.Dispatch<React.SetStateAction<MyObj>>,
    addOns: any,
    setAddOns: React.Dispatch<React.SetStateAction<any>>,
    planArray: PlanArray[]
}

interface PlanArray {
    choice: string,
    img: string,
    month: number,
    year: number
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
    const [addOns, setAddOns] = useState<any>({
        online_service: false,
        larger_storage: false,
        customizable_profile: false
    })
    const [month, setMonth] = useState<boolean>(true)
    const [plan, setPlan] = useState<string>('Arcade')

    const planArray: PlanArray[] = [
        {
            choice: "Arcade",
            img: "/assets/images/icon-arcade.svg",
            month: 9,
            year: 90,
        },
        {
            choice: "Advanced",
            img: "/assets/images/icon-advanced.svg",
            month: 12,
            year: 120,
        },
        {
            choice: "Pro",
            img: "/assets/images/icon-pro.svg",
            month: 15,
            year: 150,
        }
    ]


    return (
        <MyContext.Provider value={{ month, plan, setMonth, setPlan, myObj, setMyObj, addOns, setAddOns, planArray, }}>
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