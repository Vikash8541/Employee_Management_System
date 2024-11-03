import { createContext } from "react"

export const AuthValue = createContext();

const AuthProvider = ({children}) => {
  return (
    <div>
        <AuthValue.Provider value={"Vikash"}>
            {children}
        </AuthValue.Provider>
    </div>
  )
}

export default AuthProvider
