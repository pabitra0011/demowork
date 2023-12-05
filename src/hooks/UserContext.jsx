
import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(true);

    const updateUser = (isLogedIn) => {
        setUser(isLogedIn);
    }

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext);
    // console.log(context)

    return context;
}