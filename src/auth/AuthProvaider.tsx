import { useContext,createContext,useState,useEffect } from "react";

interface IAuthProvaider{
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAutehnticated: false,
});

export const AuthProvaider = ( {children}:IAuthProvaider) =>{
    const [isAutehnticated, setIsAutehnticated] = useState(false);

    return (
        <AuthContext.Provider value={{isAutehnticated}}>
            {children}
        </AuthContext.Provider>

    )

}

export const useAuth = () => useContext(AuthContext);