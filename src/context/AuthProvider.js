import React,{useContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = React.createContext()
export const useAuth = ()=>{
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [logindata,setLogindata] = useLocalStorage('auth',{})
      const  addLogindata = (data)=>{
          setLogindata(data)
      }
    let value  ={
        logindata,
        addLogindata
    }
    return (
        <AuthContext.Provider value={value}>
           {children}
        </AuthContext.Provider>
            
    )
}

export default AuthProvider
